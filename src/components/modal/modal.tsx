import React from "react";
import "./modal.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Props {
    active: boolean;
    setActive: (value: boolean) => void;
    children: string[];
  }

function Modal({ active, setActive, children}: Props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        fade:true,

      };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <Slider {...settings}>
         {children.map((item) => <img className="slider__img" src={item} key={item}/>)}
        </Slider>
      </div>
    </div>
  );
}

export default Modal;