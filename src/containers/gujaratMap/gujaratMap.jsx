import React, { useState, useEffect } from "react";
import { select } from "d3";
import SvgMap from "./svgMap/svgMap";
import classes from "./gujaratMap.module.scss";

const GujaratMap = ({ selectedDistrict, setSelectedDistrict }) => {
  const [currentDistrict, setCurrentDistrict] = useState();

  useEffect(() => {
    if (selectedDistrict?.districtName) {
      const selectedDistrictElement = document.getElementById(selectedDistrict.districtName);
      console.log(selectedDistrictElement);
      onStateClick(selectedDistrictElement);
    }
    // eslint-disable-next-line
  }, [selectedDistrict]);

  useEffect(() => {
    if (currentDistrict) {
      setSelectedDistrict({ districtName: currentDistrict });
    }
    // eslint-disable-next-line
  }, [currentDistrict]);

  const onStateClick = (clickedDistrict) => {
    console.log(clickedDistrict.getAttribute("id"));
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
