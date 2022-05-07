import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./listitem.scss";
import {
  PlayArrow,
  Add,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axios from "axios";

export default function Listitem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTgyNTIwNywiZXhwIjoxOTExMDI1MjA3fQ.zUnmi1ldGu_OBidqwP6V2MQc1cpCohfWySOxLIwww18",
          },
        });
        setMovie(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/detail", movie: movie }}>
      <div className="singleItemPlace">
        <div className="zoom-in" id="zoom-in">
          <div
            className="listItem"
            style={{ left: isHovered }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src={movie.img} alt="" className="" />
            {/* thêm điều kiện để xem trước bằng cách nếu hover vào */}

            {isHovered && (
              <div>
                <iframe
                  src={movie.trailer}
                  allow="autoplay"
                  allowFullScreen={true}
                ></iframe>

                <div className="itemInfo">
                  <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">{movie.limit}</span>
                    <span>{movie.year}</span>
                    <span className="genre">{movie.genre}</span>
                  </div>
                  <div className="desc">
                    {String(movie.desc).substring(0, 180) + "..."}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
