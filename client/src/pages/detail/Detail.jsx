import { PlayArrow, Star } from "@material-ui/icons";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Actor from "../../components/actor/Actor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./detail.scss";

export default function Detail() {
  const location = useLocation();
  const movie = location.movie;
  const [isShowDetail, setIsShowDetail] = useState(true);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
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

  const onViewDetailClick = () => {
    //immutable
    setIsShowDetail(!isShowDetail);
  };

  return (
    <div className="detailPage">
      <Navbar />
      <div className="detail-page">
        {/* CAROSEL */}

        {/* VIDEO */}

        <div className="detail-aria container">
          <div className="detail">
            <div className="leftSide">
              <img src={movie.imgTitle} alt="" />
              <div className="itemInfo">
                <div className="icons">
                  <Link to={{ pathname: "/watch", movie: movie }}>
                    <PlayArrow className="icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <h4 className="movieName">{movie.title}</h4>
              <p>{movie.desc}</p>
              Thể loại: <span>{movie.genre}</span>
              <br />
              Năm phát hành: <span>{movie.year}</span>
              <br />
              IMDb: <span>{movie.imdb}</span>
              <Star style={{ color: "orange" }} />
              <br />
              Thời lượng: <span>{movie.duration} phút</span>
              <br />
              Nhà sản xuất: <span>{movie.producer + " "}</span>
              <br />
              Phim trường: <span>{movie.filmLocations}</span>
              <br />
              Nhà viết sách: <span>{movie.writer + " "}</span>
              <br />
              {isShowDetail ? (
                <div>
                  Đạo diễn:{" "}
                  <span
                    onClick={onViewDetailClick}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    {movie.director.directorName}
                  </span>
                </div>
              ) : (
                <>
                  <span
                    onClick={onViewDetailClick}
                    style={{ cursor: "pointer" }}
                  >
                    {String(movie.director.directorDesc).substring(0, 250) +
                      "... "}
                  </span>
                  <span
                    className="directorMoreDetail"
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    Xem chi tiết hơn
                  </span>
                </>
              )}
              {/* Đạo diễn:{" "}
              <span style={{ cursor: "pointer", color: "blue" }}>
                {movie.director.directorName}
              </span> */}
              <br />
              <div className="directorAvatar">
                <img src={movie.director.directorAva} alt="" />
              </div>
            </div>
          </div>
          <div className="trailerDetailAria">
            <iframe
              src={movie.trailer}
              allow="autoplay"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="traierDescAria container">
            <p>{movie.desc}</p>
          </div>

          <div className="actor-detail-aria">
            <div className="actor-detail-aria-v2">
              <h3>DANH SÁCH DIỄN VIÊN THAM GIA</h3>
              <Slider {...settings}>
                {movie.stageName.map((item, i) => (
                  <div className="singleActorPlace">
                    <Actor index={i} item={item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* CHẮP VÁ */}
          <input
            type="radio"
            name="radio-btn"
            id="radio1"
            style={{ opacity: 0 }}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio2"
            style={{ opacity: 0 }}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio3"
            style={{ opacity: 0 }}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio4"
            style={{ opacity: 0 }}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}
