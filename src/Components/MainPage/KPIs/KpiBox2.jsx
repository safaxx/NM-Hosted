import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import './KpiBox2.css'

const KpiBox2 = () => {
  return (
    <div className="kpi-box">
      <div className="ending-contracts" title="Total Contracts">
        <div className="kpi-label">Contracts Ending This Month</div>
        <div className="kpi-value" style={{fontSize:"2em", fontWeight:"bold", fontFamily:"sans-serif"}}>42</div>
        
      </div>
      
      <FontAwesomeIcon icon={faCircleExclamation} className='kpi2-icon'/>
    </div>
  );
};

export default KpiBox2;
