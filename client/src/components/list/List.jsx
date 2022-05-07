import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  MovieOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listitem/Listitem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./list.scss";

export default function List({ list }) {
  // const [isMoved, setIsMoved] = useState(false);
  // const [slideNumber, setSlideNumber] = useState(0);
  // const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  // const slider = useRef(null);

  // const handleClick = (direction) => {
  //   setIsMoved(true);
  //   let distance = listRef.current.getBoundingClientRect().x - 50;
  //   if (direction === "left" && slideNumber > 0) {
  //     setSlideNumber(slideNumber - 1);
  //     listRef.current.style.transform = `translateX(${230 + distance}px)`;
  //   }
  //   if (direction === "right" && slideNumber < 13 - clickLimit) {
  //     setSlideNumber(slideNumber + 1);
  //     listRef.current.style.transform = `translateX(${-230 + distance}px)`;
  //   }
  // };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="list">
      <span className="listTitle">
        <img src="img/cinema.jpg" className="cinemaPng" />
        {list.title}
      </span>
      <div className="wrapper">
        {/* <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        /> */}
        <div className="listItemShow">
          <Slider {...settings}>
            {list.content.map((item, i) => (
              <div className="itemPlace" key={i}>
                <ListItem item={item} />
              </div>
            ))}
          </Slider>
        </div>
        {/* <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        /> */}
      </div>
    </div>
  );
}
