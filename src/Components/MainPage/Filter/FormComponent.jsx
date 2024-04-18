import React, { useState } from 'react';
import './FormComponent.css';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    cname: '',
    cid: '',
    ctype: '',
    cstatus: '',
    cgroup: '',
    cparties: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/contracts/create', formData);
      console.log('Form data sent successfully:', response.data);
     setFormData({
      cname: '',
      cid: '',
      ctype: '',
      cstatus: '',
      cgroup: '',
      cparties: ''
      });
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p><b>This form sends data to database</b></p>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="cname">Contract Name</label>
          <input type="text" id="cname" name="cname" value={formData.cname} onChange={handleChange} />
        </div>
        <div className="form-col">
          <label htmlFor="cid">Contract ID</label>
          <input type="text" id="cid" name="cid" value={formData.cid} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="matter">Matter</label>
          <input type="text" id="matter" name="matter" value={formData.matter} onChange={handleChange} disabled />
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="user">User</label>
          <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} disabled />
        </div>
        <div className="form-col">
          <label htmlFor="ctype">Contract Type</label>
          <input type="text" id="ctype" name="ctype" value={formData.ctype} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="cstatus">Contract Status</label>
          <input type="text" id="cstatus" name="cstatus" value={formData.cstatus} onChange={handleChange} />
        </div>
        <div className="form-col">
          <label htmlFor="cgroup">Contract Group</label>
          <input type="text" id="cgroup" name="cgroup" value={formData.cgroup} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
          <label htmlFor="cparties">Contract Party</label>
          <input type="text" id="cparties" name="cparties" value={formData.cparties} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
      <button type="button">Reset</button>
        <button type="submit">Apply</button>
        
      </div>
    </form>
  );
};

export default FormComponent;
