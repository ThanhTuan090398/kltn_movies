import { PlayArrow } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Actor from "../../components/actor/Actor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios";

export default function Detail() {
  const location = useLocation();
  const movie = location.movie || JSON.parse(localStorage.getItem("movies"));
  const [isShowDetail, setIsShowDetail] = useState(true);
  const { addMovieToWatchList, watchList } = useContext(GlobalContext);
  const userNow = JSON.parse(localStorage.getItem("user"));
  let storiedMovie = watchList.find((o) => o._id === movie._id);
  const watchListDisabled = storiedMovie ? true : false;

  const getActorName = () => {
    return movie.listActor.map((item, index) => {
      return (
        <div>
          <Actor key={index} item={item} type="name" />
        </div>
      );
    });
  };

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

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movie));
    localStorage.setItem("index", JSON.stringify(null));
    localStorage.setItem("indexTM", JSON.stringify(null));
  }, [movie]);

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
              <div className="btnAria">
                <Link
                  to={{ pathname: "/watch", movie: movie }}
                  className="link"
                >
                  <button className="btnXemPhim">Xem</button>
                </Link>

                <button
                  disabled={watchListDisabled}
                  onClick={() => addMovieToWatchList(movie)}
                  className="btnAddToWatchList"
                >
                  L??u xem sau
                </button>
              </div>
            </div>
            <div className="rightSide">
              <h4 className="movieName">{movie.title}</h4>
              <p>{movie.desc}</p>
              Th??? lo???i: <span>{movie.genre}</span>
              <br />
              ??ang ph??t: <span>{movie.isSup}</span>
              <br />
              Gi???i h???n ????? tu???i: <span className="limit">{movie.limit} +</span>
              <br />
              N??m ph??t h??nh: <span className="year">{movie.year}</span>
              <br />
              IMDb: <span className="imdb">{movie.imdb}</span>
              <br />
              Th???i l?????ng: <span>{movie.duration} ph??t</span>
              <br />
              Nh?? s???n xu???t: <span>{movie.producer + " "}</span>
              <br />
              Phim tr?????ng: <span>{movie.filmLocations}</span>
              <br />
              Nh?? vi???t s??ch: <span>{movie.writer + " "}</span>
              <br />
              Di???n vi??n ch??nh:{" "}
              <span className="actorShowName">
                {getActorName().splice(0, 4)}
              </span>
              <br />
              {isShowDetail ? (
                <div>
                  ?????o di???n:{" "}
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
                    Xem chi ti???t h??n
                  </span>
                </>
              )}
              {/* ?????o di???n:{" "}
              <span style={{ cursor: "pointer", color: "blue" }}>
                {movie.director.directorName}
              </span> */}
              <br />
              <div className="directorAvatar">
                {movie.director.directorAva ? (
                  <img src={movie.director.directorAva} alt="" />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="trailerDetailAria">
            <iframe
              src={movie.trailer}
              allow="autoplay"
              allowFullScreen={true}
              title="myDetailTrailerMovie"
            ></iframe>
          </div>
          <div className="trailerDescAria container">
            <p>{movie.desc}</p>
            <img src={movie.imgPost} alt="" />
          </div>

          <div className="actor-detail-aria">
            <div className="actor-detail-aria-v2">
              <h3>DANH S??CH DI???N VI??N THAM GIA</h3>
              <Slider {...settings}>
                {movie.listActor.map((item, index) => (
                  <div key={index} className="singleActorPlace">
                    <Actor item={item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* CH???P V?? */}
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
