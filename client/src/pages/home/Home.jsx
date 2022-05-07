import { AcUnit } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import ListMovieTheater from "../../components/list/ListMovieTheater";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
// import "./home.scss";
import Footer from "../../components/footer/Footer";
import Watch from "../watch/Watch";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTgyNTIwNywiZXhwIjoxOTExMDI1MjA3fQ.zUnmi1ldGu_OBidqwP6V2MQc1cpCohfWySOxLIwww18",
            },
          }
        );

        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      {/* NAVBAR */}
      <Navbar />
      {/* FEATURE */}
      <Featured type={type} setGenre={setGenre} checked={checked} />

      {/* LIST */}
      <div className="showList">
        {lists.map((list, index) => {
          return (
            <div key={index}>
              <List list={list} />;
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
