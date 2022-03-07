import React from "react";
import classes from "./middleFooter.module.scss";

const MiddleFooter = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <div className={classes.header}>
            If you need any assistance, please contact us on 18003456214 or email to{" "}
            <span className={classes.subHeader}> sipb.care@bihar.gov.in </span>
          </div>
        </div>
        <div className={classes.rtiContainer}>
          <div className={classes.rti}>
            <i className="fa-regular fa-file"></i> RTI
          </div>
          <div className={classes.department}>
            <i className="fa-solid fa-user"></i> Department Login
          </div>
        </div>
        <div className={classes.policiesContainer}>
          <div className={classes.policies}>
            Sitemap | Accessibility Statement | Hyperlinking Policy | Private Policy | Copyright Policy | Terms &
            Conditions | Help
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
