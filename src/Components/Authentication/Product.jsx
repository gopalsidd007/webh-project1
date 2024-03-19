import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchpost } from "../Redux/Slice/ProductSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactPaginate from "react-paginate";
import { addcart, rmvcart } from "../Redux/Slice/CrudSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { prodata } = useSelector((state) => state.product);
  const { cartitem } = useSelector((state) => state.curd);
  const navigate = useNavigate();

  
  console.log("Thecartitem", cartitem);
  // console.log("The cartitem price", cartprice);

  


  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const [data, setdata] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const filteredData = prodata.filter((item) =>
    item.category.includes(searchTerm)
  );

  const postPerPage = 4;
  const pageCount = Math.ceil(filteredData.length / postPerPage);
  const pageVisited = pageNumber * postPerPage;

  const handlePage = ({ selected }) => {
    setPageNumber(selected);
    console.log(pageNumber);
    console.log(pageVisited);
    console.log(data);
  };

  const displayPosts = filteredData.slice(
    pageVisited,
    pageVisited + postPerPage
  );
  useEffect(() => {
    dispatch(fetchpost());
  }, []);

  // const handlesearch=(e)=>{
  //     setSearch(e.target.value)
  // }
  return (
    <div>
      <h1>Product Details </h1>
      <input
        name="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>

      <Container>
        <Row>
          {displayPosts?.map((post, index) => (
            <Col key={post.id}>
              <Card style={{ width: "200px", height: "400px" }}>
                <Card.Img
                  variant="top"
                  //    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUm5Y6RI46TKJT1S-2j7xF71l5nuzYhUPz_vPbFDoIZFElY6Kq"
                  src={post.image}
                />
                <Card.Body>
                  {/* <Card.Title>{post.title}</Card.Title> */}
                  <Card.Title>{post.category}</Card.Title>
                  <Card.Text>{/* {post.description} */}</Card.Text>

                  {
                  cartitem.filter((ele) => ele.id === post.id).length !== 0 ? (
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        // navigate("/cart")
                        dispatch(rmvcart(post.id))
                        
                      }}
                    >
                      Delete
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={(e) => {
                        dispatch(addcart(post));
                        navigate("/cart")
                      }}
                    >
                      add to cart
                    </Button>
                  )}

                  {/* <Button
                    variant="primary"
                    onClick={(e) => {
                      dispatch(addcart(post));
                      // navigate("/cart")
                    }}
                  >
                    add to cart
                  </Button> */}

                  {/* <Button
                    variant="danger"
                    onClick={(e) => {
                      // navigate("/cart")
                    }}
                  >
                    Delete
                  </Button> */}

                  <Button
                    variant="success"
                    onClick={(e) => {
                      navigate("prodetails", { state: post });
                    }}
                  >
                    Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* paginate component */}

      <ReactPaginate
        // className=" pagination "
        nextLabel="next >"
        onPageChange={handlePage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Product;
