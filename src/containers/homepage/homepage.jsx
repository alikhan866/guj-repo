import React, { useState } from "react";
import classes from "./homepage.module.scss";
import GujaratMap from "../gujaratMap/gujaratMap";
import Layout from "../../layout/layout";
import BootstrapTable from "react-bootstrap-table-next";
import { columns } from "../../components/table/tableColumns";
import paginationFactory from "react-bootstrap-table2-paginator";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
const Homepage = () => {
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [currentDistrict, setCurrentDistrict] = useState();
  const [tableData, setTableData] = useState([]);
  const [tableDataLoading, setTableDataLoading] = useState();
  const [tableDataError, setTableDataError] = useState();
  const [tableDataSuccess, setTableDataSuccess] = useState();
  const districtName = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhotaudepur",
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

  console.log("TTTTTTTTTTTTTTT ", tableData);

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
                tableData={tableData}
                tableDataLoading={tableDataLoading}
                tableDataError={tableDataError}
                tableDataSuccess={tableDataSuccess}
                setTableData={setTableData}
                setTableDataLoading={setTableDataLoading}
                setTableDataError={setTableDataError}
                setTableDataSuccess={setTableDataSuccess}
              />
            </div>
          </div>
          <div className={classes.districtDesc}>
            <div className={classes.districtName}>{selectedDistrict.districtName}</div>
          </div>
          {tableDataSuccess && !tableDataLoading && tableData?.length !== 0 && (
            <BootstrapTable
              keyField="id"
              data={tableData}
              columns={columns}
              bordered
              pagination={paginationFactory()}
            />
          )}
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
