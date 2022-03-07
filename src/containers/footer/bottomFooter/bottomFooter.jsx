import React from "react";
import classes from "./bottomFooter.module.scss";

const BottomFooter = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.text}>Content owned by Department of Industries, Goverment of Bihar</div>
        <div className={classes.text}>Last Updated On 30th December 2021</div>
      </div>
    </div>
  );
};

export default BottomFooter;
