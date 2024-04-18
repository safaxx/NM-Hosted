import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileLines } from "@fortawesome/free-solid-svg-icons";
import './KpiBox.css'

const KpiBox = () => {
  const [totalContracts, setTotalContracts] = useState(0);
  const [contractTypes, setContractTypes] = useState({});

  useEffect(() => {
    // Fetch all contracts
    axios.get('http://localhost:8080/contracts/get')
      .then(response => {
        setTotalContracts(response.data.length);
        
        const typesCount = {};
        response.data.forEach(contract => {
          typesCount[contract.cstatus] = (typesCount[contract.cstatus] || 0) + 1;
        });
        setContractTypes(typesCount);
      })
      .catch(error => {
        console.error('Error fetching contracts:', error);
      });
  }, []);

  return (
    <div className="kpi-box">
      <div className="total-contracts" title="Total Contracts">
        <div className="kpi-label">Contracts</div>
        <div className="kpi-value" style={{fontSize:"2em", fontWeight:"bold", fontFamily:"sans-serif"}}>{totalContracts}</div>
        
      </div>
      <div className="contract-types" title="Contract Types">
        <div className="kpi-label">Contracts</div>
        <div className="kpi-value">
          {Object.keys(contractTypes).map(cstatus => (
            <div key={cstatus}><b style={{fontSize:"20px"}}>{contractTypes[cstatus]} </b>{cstatus} </div>
          ))}
        </div>
      </div>
      <FontAwesomeIcon icon={faFileLines} className='kpi-icon'/>
    </div>
  );
};

export default KpiBox;
