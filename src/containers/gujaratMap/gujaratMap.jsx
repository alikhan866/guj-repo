import React, { useState, useEffect } from "react";
import { select } from "d3";
import SvgMap from "./svgMap/svgMap";
import classes from "./gujaratMap.module.scss";
import axios from "axios";

const GujaratMap = ({
  currentDistrict,
  setCurrentDistrict,
  selectedDistrict,
  setSelectedDistrict,
  tableData,
  tableDataLoading,
  tableDataError,
  tableDataSuccess,
  setTableData,
  setTableDataLoading,
  setTableDataError,
  setTableDataSuccess,
}) => {
  const getDistrictData = async (district) => {
    try {
      setTableDataLoading(true);
      setTableDataSuccess(false);
      const formData = new FormData();
      // if district contains - replace with space
      const districtName = district.replace(/-/g, " ");
      formData.append("district", districtName);
      const response = await axios.post("https://thecodebucket.com/frontend/gujarat/index.php", formData);
      console.log(response.data.data);
      setTableData(response.data.data);
      setTableDataLoading(false);
      setTableDataSuccess(true);
    } catch (e) {
      setTableDataLoading(false);
      setTableDataError(true);
      setTableDataSuccess(false);
    }
  };

  useEffect(() => {
    if (selectedDistrict?.districtName) {
      const selectedDistrictElement = document.getElementById(selectedDistrict.districtName);
      onStateClick(selectedDistrictElement);
    }
    // eslint-disable-next-line
  }, [selectedDistrict]);

  useEffect(() => {
    if (currentDistrict) {
      setSelectedDistrict({ districtName: currentDistrict });
      getDistrictData(currentDistrict);
    }
    // eslint-disable-next-line
  }, [currentDistrict]);

  useEffect(() => {
    // onStateClick("Ahemdabad");
    const element = document.getElementById("Ahmedabad");
    onStateClick(element);
  }, []);

  const onStateClick = (clickedDistrict) => {
    if (currentDistrict !== clickedDistrict.getAttribute("id")) {
      // setSelectedDistrict({});
      select(`#${currentDistrict}`).attr("fill", "#FCFCFC").transition().duration(500).attr("filter", "");
    }
    select(clickedDistrict).attr("fill", "#ee8711").transition().duration(500);
    if (clickedDistrict.getAttribute("id") !== null) {
      setCurrentDistrict(clickedDistrict.getAttribute("id"));
    }
  };
  const onStateMouseEnter = (clickedDistrict) => {
    if (clickedDistrict.getAttribute("fill") !== "#ee8711") {
      select(clickedDistrict).attr("fill", "#bfc1c2").transition().duration(500);
    }
  };

  const onStateMouseLeave = (clickedDistrict) => {
    if (clickedDistrict.getAttribute("fill") === "#bfc1c2" && clickedDistrict.getAttribute("fill") !== "#ee8711") {
      select(clickedDistrict).attr("fill", "#FCFCFC").transition().duration(500).attr("filter", "");
    }
  };

  return (
    <>
      <SvgMap
        clicked={onStateClick}
        entered={onStateMouseEnter}
        left={onStateMouseLeave}
        className={classes.biharSvg}
      />
    </>
  );
};

export default GujaratMap;
