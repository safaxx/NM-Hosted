import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock } from "@fortawesome/free-solid-svg-icons";
import './KpiBox3.css'

const KpiBox3 = () => {
    const taskTypes = {
        "Planned" : 20,
        "Completed" : 24,
        "Expired" : 12
    }
    const totalTasks = Object.values(taskTypes).reduce((total, count) => total + count, 0);


  return (
    <div className="kpi-box">
      <div className="total-tasks" title="Total Tasks">
        <div className="kpi-label">Total Tasks</div>
        <div className="kpi-value" style={{fontSize:"2em", fontWeight:"bold", fontFamily:"sans-serif"}}>{totalTasks}</div>
        
      </div>
      <div className="task-types" title="task Types">
        <div className="kpi-label">Total Tasks</div>
        <div className="kpi-value">
          {Object.keys(taskTypes).map(task => (
            <div key={task}><b style={{fontSize:"20px"}}>{taskTypes[task]} </b>{task} </div>
          ))}
        </div>
      </div>
      <FontAwesomeIcon icon={faClock} className='kpi3-icon'/>
    </div>
  );
};

export default KpiBox3;
