import React from "react";
import classes from "./middleNav.module.scss";
import DOI from "../../../assets/img/nav/gujarat-gov.png";
import SW from "../../../assets/img/nav/sw.png";
import EMBLEM from "../../../assets/img/nav/emblem.png";

const MiddleNav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.navWrapper}>
        <div className={classes.leftImgWrapper}>
          <img src={DOI} alt="logos" className={classes.leftImg}></img>
        </div>
        <div className={classes.rightImgWrapper}>
          <img src={SW} alt="logos" className={classes.rightImg}></img>
          <img src={EMBLEM} alt="logos" className={classes.rightImg}></img>
        </div>
      </div>
    </div>
  );
};

export default MiddleNav;
