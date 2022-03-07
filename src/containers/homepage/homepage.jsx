import React, { useState } from "react";
import classes from "./homepage.module.scss";
import GujaratMap from "../gujaratMap/gujaratMap";
import Layout from "../../layout/layout";
import BootstrapTable from "react-bootstrap-table-next";
import columns from "../../components/table/tableColumns";
import axios from "axios";

const Homepage = () => {
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [currentDistrict, setCurrentDistrict] = useState();
  const districtName = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota-Udaipur",
    "Dahod",
    "Dangs",
    "Devbhoomi-Dwarka",
    "Gandhinagar",
    "Gir-Somnath",
    "Jamnagar",
    "Junagadh",
    "Kachchh",
    "Kheda",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ];
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.mainWrapper}>
          <div className={classes.title}>
            <span></span>DISTRICTS<span></span>
          </div>
          <div className={classes.districtWrapper}>
            <div className={classes.districtMap}>
              <GujaratMap
                currentDistrict={currentDistrict}
                setCurrentDistrict={setCurrentDistrict}
                setSelectedDistrict={setSelectedDistrict}
                selectedDistrict={selectedDistrict}
              />
            </div>
            <div className={classes.districtDesc}>
              <div className={classes.districtName}>{selectedDistrict.districtName}</div>
              {/* <div className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
              </div> */}
              {/* <BootstrapTable keyField="id" data={products} columns={columns} /> */}
              <div className={classes.btnWrapper}>
                <button className={classes.primaryTransparentBtn}>
                  Explore Now<i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className={classes.districtListWrapper}>
            {districtName.map((name, index) => {
              return (
                <div
                  className={
                    selectedDistrict.districtName === name
                      ? `${classes.selectedDistrictList}`
                      : `${classes.districtList}`
                  }
                  onClick={() =>
                    setSelectedDistrict({
                      districtName: name,
                      districtIndex: index,
                    })
                  }
                >
                  <span>{index + 1}</span>
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
