import React from "react";

const StatusSelect = ({ value, onChange }) => (
  <div >
    <select className = "form-control" value={value} onChange={e => onChange(e.target.value)}>
      <option value="all">All</option>
      <option value="pending">Pending</option>
      <option value="done">Done</option>
    </select>
  </div>
);

export default StatusSelect;
