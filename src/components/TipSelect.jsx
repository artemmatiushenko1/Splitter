import React from 'react';
import '../styles/TipSelect.css';

export default function TipSelect(props) {
  return (
    <div className="tip-btns-group">
      <button className="tip-btn">5%</button>
      <button className="tip-btn">10%</button>
      <button className="tip-btn">15%</button>
      <button className="tip-btn">25%</button>
      <button className="tip-btn">50%</button>
      <input type="text" placeholder="Custom" className="custom-tip-input" />
    </div>
  );
}
