import React from "react";
import "./SlideContent.css";
import { slideFoods } from "../SlideContent/slideContentData";
const SlideContent = () => {
  return (
    <div>
      <div className="slide__title">
        <p>이 상품 어때요?</p>
      </div>

      <div className="slide__contents">
        {slideFoods.map((item, index) => {
          return (
            <div className="slide__content">
              <img src={item.image} alt={item.company} />
              <p>
                [{item.manufacturer}]&nbsp; {item.price}
              </p>
              <span>{item.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideContent;
