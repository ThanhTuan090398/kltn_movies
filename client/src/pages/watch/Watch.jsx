import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import axios from "axios";
import List from "../../components/list/List";
// import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        //const paramsString = queryString.stringify(filters);

        const res = await axios.get("lists", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTgyNTIwNywiZXhwIjoxOTExMDI1MjA3fQ.zUnmi1ldGu_OBidqwP6V2MQc1cpCohfWySOxLIwww18",
          },
        });

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, []);

  return (
    <div className="watchPage">
      <Navbar />
      <div className="watch-page-left">
        {/* CAROSEL */}

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

        {/* VIDEO */}

        <div className="watch container">
          <video autoPlay progress controls src={movie.video} />
          {/* <Link to="/">
            <div className="back">
              <ArrowBackOutlined />
              Home
            </div>
          </Link> */}
        </div>
      </div>
      <div className="watch-page-right">
        <div className="recommendMovie">
          {lists.splice(0, 2).map((list, index) => {
            return (
              <div key={index}>
                <List list={list} />;
              </div>
            );
          })}
        </div>
      </div>
      <div className="footerAria">
        <Footer />
      </div>
    </div>
  );
}
