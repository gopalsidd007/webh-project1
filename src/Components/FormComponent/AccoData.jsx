import React, { useState } from "react";
import Accordian from "./Accordian";

const AccoData = () => {
    const [activeindex, setAvtiveindex] = useState(null);

    const handleItem=(index)=>{
        setAvtiveindex((preIndex)=>(preIndex===index ?null:index))
    }
  const accordionData = [
    {
        id:1,
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
    },
    {
        id:2,
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
        id:3,
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
    },
  ];

  return (
    <div>
        <h1>AccoData Component</h1>
      
      <div className="accordian">
        {accordionData?.map((post,index) => (
         
        <div className="div"key={post.id}>
            <div className="accordian">
        <div className="acc-item">
          <div className="acc-title"
          
           
           
        >
            {post.title}
          </div>
          <div className="div">{isactive ? "-" : "+"}</div>

          {<div className="acc-cont">{post.content}</div>}
        </div>
      </div>
            {/* <Accordian post={post.title} content={post.content}/> */}
        </div>
       
        ))}
       
      </div>
    </div>
  );
};

export default AccoData;
