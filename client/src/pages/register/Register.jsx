import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
// import "./register.scss";

export default function Register({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
  };

  return (
    <div className="register">
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
        <h1>
          Không giới hạn phim điện ảnh, truyền hình thực tế, và còn nhiều hơn
          nữa đang đợi bạn khám phá...
        </h1>
        <h2>Xem mọi lúc, mọi nơi.</h2>
        <p>
          Bạn đã sẵn sàng? Hãy
          <Link to="/login" className="Link loginButton">
            {" "}
            Đăng nhập{" "}
          </Link>
          hoặc nhập email của bạn vào đây để bắt đầu trở thành thành viên.
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="Vui lòng nhập địa chỉ email để đăng kí thành viên"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Bắt đầu
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="Tên hiển thị"
              ref={usernameRef}
            />
            <input type="password" placeholder="Mật khẩu" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Đăng ký
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
