import React from "react";
import "./Sidebar.css";
import profileImage from "../images/profile.jpg";
import fileLogoImg from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faQrcode,
  faList,
  faBalanceScale,
  faCogs,
  faChartLine,
  faObjectGroup,
  faCalendar,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null); 

    const handleLinkClick = (event, link) => {
      event.preventDefault(); 
      setActiveLink(link); 
    };

  
  return (
    <div className="sidebar">
        <div className="sidebar-logo">
          <img src={fileLogoImg} alt="Profile" />
          <p>Mukavele</p>
        </div>

        <div className="sidebar-top">

        {/* Navigation Links */}

        <ul>
          <li className={activeLink === 'overview' ? 'active' : ''}>
            <FontAwesomeIcon icon={faQrcode} />
            <a href="/" onClick={(e) => handleLinkClick(e, 'overview')}>
              <span><Link to="/overview-page">Overview</Link> </span> 
            </a>
          </li>
          <li className={activeLink === 'contracts' ? 'active' : ''}>
            <FontAwesomeIcon icon={faList} />
            <a href="/as" onClick={(e) => handleLinkClick(e, 'contracts')}>
              <span><Link to='/contracts-list'>List of Contracts</Link></span> 
            </a>
          </li>
          <li className={activeLink === 'legal' ? 'active' : ''}>
            <FontAwesomeIcon icon={faBalanceScale} />
            <a href="/reports" onClick={(e) => handleLinkClick(e, 'legal')}>
              <span><Link to="legal-page">Legal</Link> </span> 
            </a>
          </li>
          <li className={activeLink === 'operational' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCogs} />
            <a href="/ass" onClick={(e) => handleLinkClick(e, 'operational')}>
              <span><Link to="operation-page">Operational</Link> </span> 
            </a>
          </li>
          <li className={activeLink === 'financial' ? 'active' : ''}>
            <FontAwesomeIcon icon={faChartLine} />
            <a href="/sdsd" onClick={(e) => handleLinkClick(e, 'financial')}>
              <span><Link to="financial-page">Financial</Link> </span> 
            </a>
          </li>
          <li className={activeLink === 'activities' ? 'active' : ''}>
            <FontAwesomeIcon icon={faObjectGroup} />
            <a href="/sdasd" onClick={(e) => handleLinkClick(e, 'activities')}>
              <span><Link to="activity-page">Activities</Link> </span>  
            </a>
          </li>
          <li className={activeLink === 'calendars' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCalendar} />
            <a href="/asf" onClick={(e) => handleLinkClick(e, 'calendars')}>
              <span>Calendars</span> 
            </a>
          </li>
          <li className={activeLink === 'reporting' ? 'active' : ''}>
            <FontAwesomeIcon icon={faBarChart} />
            <a href="/wdxz" onClick={(e) => handleLinkClick(e, 'reporting')}>
              <span>Reporting</span> 
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        {/* Profile Information */}
        <div className="profile">
          <img src={profileImage} alt="Profile" />
          <div className="profile-name">
          <p>Safa Khan</p>
          <p style={{color: "lightgray"}}>skahsn</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
