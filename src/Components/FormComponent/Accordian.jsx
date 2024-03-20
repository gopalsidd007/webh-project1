import React, { useState } from "react";

const Accordian = () => {

  
  const accordionData = {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const { title, content } = accordionData;

  const [isactive, setIsactive] = useState(false);
  return (
    <div>
      <h1>The Accordian</h1>
      <div className="accordian">
        <div className="acc-item">
          <div className="acc-title" onClick={() => setIsactive(!isactive)}>
            {title}
          </div>
          <div className="div">{isactive ? "-" : "+"}</div>

          {isactive && <div className="acc-cont">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
