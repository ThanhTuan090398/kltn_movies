import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link } from "react-router-dom";
// import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="img/logo.png" alt="" />
        </div>
      </div>
      <div className="container">
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
        <form>
          <h1>Đăng nhập</h1>
          <input
            type="email"
            placeholder="Địa chỉ email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Đăng nhập
          </button>
          <span>
            Bạn lần đầu đến Vmovie?
            <Link className="signupLink" to="/register">
              <b>Đăng ký ngay!</b>
            </Link>
          </span>
          <small>
            Trang này được bảo vệ bởi reCAPTCHA của Google để đảm bảo bạn không
            phải là bot. <b>Tìm hiểu thêm</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
