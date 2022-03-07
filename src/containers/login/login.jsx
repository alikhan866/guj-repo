import React from "react";
import classes from "./login.module.scss";
import LoginCard from "./loginCard/loginCard";
import Layout from "../../layout/layout";

const Login = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.mainWrapper}>
          <div className={classes.titleWrapper}>
            <div className={classes.title}>Gujarat Goverment</div>
            <div className={classes.statsMainWrapper}></div>
            <div className={classes.paragraph}>
              The Government of Gujarat, also known as the State Government of Gujarat, or locally as State Government,
              is the supreme governing authority of the Indian state of Gujarat and its 33 districts.
            </div>
            <div className={classes.paragraph}>
              One of India's most industrialized states, Gujarat maintains a variety of industries, the principal ones
              being general and electrical engineering and the manufacture of textiles, vegetable oils, chemicals, soda
              ash, and cement.
            </div>
            <div className={classes.paragraph}>
              Gujarat is one of the wealthiest states in the country. It contains only 4.7 per cent of the India
              population (UDAI 2019) but contributes to 7.9 per cent of the total domestic output of all states.
            </div>
          </div>
          <div className={classes.registerCardWrapper}>
            <LoginCard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
