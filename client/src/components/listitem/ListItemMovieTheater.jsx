import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listItemMovieTheater.scss";

import axios from "axios";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";

export default function ListItemMovieTheater({ index, item }) {
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
    <div className="listItemMovieTheater">
      <Link to={{ pathname: "/watch", movie: movie }}>
        <div className="singleFilm">
          <img src={movie.img} className="imgMovie" />
          <div>
            <div className="itemInfo">
              <span className="titleMovie">{movie.title}</span>
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span className="limit">{movie.limit}</span>
                <span className="year">{movie.year}</span>
                <span className="genre">{movie.genre}</span>
              </div>
            </div>
          </div>
        </div>
        {/* thêm điều kiện để xem trước bằng cách nếu hover vào */}
      </Link>
    </div>
  );
}
