import React from "react";
import classes from "./loginCard.module.scss";
import IMG from "../../../assets/img/nav/sw.png";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.mainWrapper}>
      <img src={IMG} alt="img" className={classes.img} />
      <form className={classes.formWrapper}>
        <input type="email" placeholder="Enter Email" className={classes.registerInput} />

        <input type="password" placeholder="Enter Password" className={classes.registerInput} />

        <div className={classes.btnWrapper}>
          <button onClick={() => navigate("/homepage")} type="submit" className={classes.accentBtn}>
            Login
          </button>
        </div>
      </form>
      <div className={classes.loginLink}>
        New User? <span>REGISTER NOW</span>
      </div>
    </div>
  );
};

export default LoginCard;
