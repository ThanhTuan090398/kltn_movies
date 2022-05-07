import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
// import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")).username;
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img className="logo" src="img/logo.png" alt="" />
          <a href="/" className="link">
            <span>TRANG CHỦ</span>
          </a>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">PHIM NHIỀU TẬP</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">PHIM LẺ</span>
          </Link>
          <div className="singleFilm">
            DANH SÁCH PHIM
            <div className="selectGenre">
              <span className="itemGenre">
                <Link to="/phimchieurap" className="link">
                  PHIM CHIẾU RẠP
                </Link>
              </span>

              <span className="itemGenre">Phim hành động</span>
              <span className="itemGenre">Phim lãng mạn - tình cảm</span>
              <span className="itemGenre">Phim kinh dị</span>
              <span className="itemGenre">Phim giải trí</span>
              <span className="itemGenre">Phim phiêu lưu</span>
              <span className="itemGenre">Phim hành động</span>
              <span className="itemGenre">Phim lãng mạn - tình cảm</span>
              <span className="itemGenre">Phim kinh dị</span>
              <span className="itemGenre">Phim giải trí</span>
              <span className="itemGenre">Phim phiêu lưu</span>
            </div>
          </div>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Xin chào, {user}</span>
          <Notifications className="icon" />
          <img src="img/avatar.jpg" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
