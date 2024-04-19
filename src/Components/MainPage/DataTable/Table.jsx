import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./Pagination";
import RowsPerPage from "./RowsPerPage";

const ContractTable = () => {
  const [contracts, setContracts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("http://localhost:8080/contracts/get")
      .then((response) => {
        setContracts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contracts:", error);
      });
  }, []);

  const totalPages = Math.ceil(contracts.length / rowsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSelectRowsPerPage = (option) => {
    setRowsPerPage(option);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentContracts = contracts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="contract-table-container">
      <div className="table-header">
        <div className="view-icon">
          <div className="icon-container">
            <FontAwesomeIcon icon={faBars} />
            <div className="popup">List View</div>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon icon={faWindowMaximize} />
            <div className="popup">Magazine View</div>
          </div>
        </div>

        <div className="radio-container">
          <div>
            <input type="radio" id="all" name="drone" value="all" checked />
            <label htmlFor="all">All</label>
          </div>
          <div>
            <input type="radio" id="my" name="drone" value="my" />
            <label htmlFor="my">My Contracts</label>
          </div>{" "}
        </div>
        <div className="total-records">
          <b>{contracts.length}</b> Records Found
        </div>
      </div>
      <table className="contract-table">
        <thead>
          <tr>
            <th>Contract ID</th>
            <th>Contract Name</th>
            <th>Contract Status</th>
            <th>Contract Type</th>
            <th>Contract Parties</th>
            <th>Contract Group</th>
          </tr>
        </thead>
        <tbody>
          {currentContracts.map((contract) => (
            <tr key={contract.id}>
              <td style={{ color: "#026C6F", fontWeight: "bold" }}>
                {contract.cid}
              </td>
              <td style={{ fontWeight: "bold" }}>{contract.cname}</td>
              <td>
                <span
                  className={`contract-status ${contract.cstatus.toLowerCase()}`}
                >
                  {contract.cstatus}
                </span>
              </td>
              <td>{contract.ctype}</td>
              <td>{contract.cparties}</td>
              <td>{contract.cgroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="t-bottom">
        <RowsPerPage
          options={[10, 20]}
          selectedOption={rowsPerPage}
          onSelectOption={handleSelectRowsPerPage}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default ContractTable;
