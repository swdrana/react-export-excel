import React from "react";
import { CSVLink } from "react-csv";
import Button from "react-bootstrap/Button";

const ExportReactCSV = ({ csvData, fileName }) => {
  return (
    <Button variant="warning">
        {console.log(csvData)}
      <CSVLink data={csvData} filename={fileName}>
        Export
      </CSVLink>
    </Button>
  );
};

export default ExportReactCSV;
