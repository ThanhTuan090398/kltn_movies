import axios from "axios";
import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";
import ListitemTag from "../../components/listitem/ListitemTag";
import Skeleton from "../../components/skeleton/Skeleton";
export default function MovieGenre() {
  const [allMovie, setAllMovie] = useState([]);
  const [genre, setGenre] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAll = async () => {
      try {
        const res = await axios.get(
          `/movies/taggenre${genre ? "?genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjMyNzgyMCwiZXhwIjoxOTExNTI3ODIwfQ.Plo5eyi6GO6CsvX1k7qeIJIi2h2PK8OTqdyxyJOKkYo",
            },
          }
        );
        setAllMovie(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    getAll();
  }, [genre]);

  //Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentAllMovies = allMovie.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* LIST */}
      {loading ? (
        <Skeleton type="circle" />
      ) : (
        <div className="homeGenreMovie">
          {/* NAVBAR */}
          <Navbar />
          {/* FEATURE */}
          <Featured />

          <div className="categoryGenreMovie container mt-5 mb-5">
            <img src="img/cinema.jpg" className="cinemaPngMovie" alt="none" />
            <select
              name="genre"
              id="genre"
              className="genreSelect"
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>Ch???n th??? lo???i</option>

              <option value="dc">DC Commic</option>
              <option value="marvel">Marvel</option>
              <option value="romance">T??nh C???m</option>
              <option value="action">H??nh ?????ng</option>
              <option value="horror">Kinh D???</option>
              <option value="science">Khoa H???c Vi???n T?????ng</option>
              <option value="zombie">X??c S???ng</option>
              <option value="toon">Ho???t H??nh</option>
              <option value="adventure">Phi??u L??u</option>
              <option value="crime">T???i Ph???m H??nh S???</option>
            </select>
          </div>

          <ListitemTag movie={currentAllMovies} />

          <div>
            <Pagination
              moviesPerPage={moviesPerPage}
              totalMovies={allMovie.length}
              paginate={paginate}
            />
          </div>
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
          <div className="footerAria container">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
