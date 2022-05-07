import axios from "axios";
import React, { useEffect, useState } from "react";
import ListMovieTheater from "../../components/list/ListMovieTheater";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./movieTheater.scss";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";
import queryString from "query-string";

export default function MovieTheater({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 1,
    _totalRows: 5,
  });

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        //const paramsString = queryString.stringify(filters);

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
  }, [pagination]);

  const handlePageChange = (newPage) => {
    console.log(newPage);
    setPagination({
      ...pagination,
      _page: newPage,
    });
  };

  return (
    <div className="homeTheaterMovie">
      {/* NAVBAR */}
      <Navbar />
      {/* FEATURE */}
      <Featured type={type} setGenre={setGenre} />
      <div className="theaterMoviePage">
        {lists.splice(0, 2).map((list, index) => {
          return (
            <div key={index}>
              <ListMovieTheater listes={list} />;
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination pagination={pagination} onPageChange={handlePageChange} />
      </div>

      <Footer />
    </div>
  );
}
