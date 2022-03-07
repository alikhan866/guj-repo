import React from "react";
import classes from "./topFooter.module.scss";

const TopFooter = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.sectorContainer}>
          <div className={classes.header}>Sector</div>
          <div className={classes.content}>Aerospace and Defence</div>
          <div className={classes.content}>Auto, Auto Components & Electric Vehicles</div>
          <div className={classes.content}>Biotech, Pharmaceuticals And Medical Devices</div>
          <div className={classes.content}>Capital Goods</div>
          <div className={classes.content}>Clean Energy</div>
          <div className={classes.content}>Electronic System Design & Manufacturing</div>
          <div className={classes.content}>Food Processing</div>
          <div className={classes.content}>Innovation And Startup</div>
          <div className={classes.content}>Steel Industry</div>
          <div className={classes.content}>Textile And Apparel</div>
          <div className={classes.content}>Tourism & Wellness</div>
          <div className={classes.content}>Toys</div>
        </div>

        <div className={classes.locationsContainer}>
          <div className={classes.header}>Locations</div>
          <div className={classes.content}>Ahmedabad</div>
          <div className={classes.content}>Vadodara</div>
          <div className={classes.content}>Anand</div>
          <div className={classes.content}>Chhota Udaipur</div>
          <div className={classes.content}>Dahod</div>
          <div className={classes.content}>Kheda</div>
          <div className={classes.content}>Mahisagar</div>
          <div className={classes.content}>Panchmahal</div>
          <div className={classes.content}>Rajkot</div>
          <div className={classes.content}>Botad</div>
          <div className={classes.content}>Devbhoomi Dwarka</div>
          <div className={classes.content}>Gir Somnath</div>
          <div className={classes.content}>Junagadh</div>
          <div className={classes.content}>Morbi</div>
          <div className={classes.content}>Porbandar</div>
          <div className={classes.content}>Surendranagar</div>
          <div className={classes.content}>Kachchh</div>
        </div>
        <div className={classes.forInvestorsContainer}>
          <div className={classes.header}>For Investors</div>
          <div className={classes.content}>Startups</div>
          <div className={classes.content}>MSMEs</div>
          <div className={classes.content}>Large & Mega Scale Industries</div>
          <div className={classes.content}>International Businesses</div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
