import React from 'react';
import '../styles/TipSelect.css';

export default function TipSelect({ changeTip }) {
  const allTipBtns = document.querySelectorAll('.tip-btn');
  const onTipSelected = (e) => {
    e.preventDefault();
    const { target: activeTip } = e;
    if (activeTip.classList.contains('custom-tip-input')) {
      activeTip.dataset['tip'] = e.target.value;
    }
    const tipValue = activeTip.dataset['tip'];
    allTipBtns.forEach((btn) => {
      btn.classList.remove('tip-btn--active');
    });

    activeTip.classList.add('tip-btn--active');
    changeTip(tipValue);
  };

  return (
    <div className="tip-btns-group">
      <button className="tip-btn" data-tip={5} onClick={onTipSelected}>
        5%
      </button>
      <button className="tip-btn" data-tip={10} onClick={onTipSelected}>
        10%
      </button>
      <button className="tip-btn" data-tip={15} onClick={onTipSelected}>
        15%
      </button>
      <button className="tip-btn" data-tip={25} onClick={onTipSelected}>
        25%
      </button>
      <button className="tip-btn" data-tip={50} onClick={onTipSelected}>
        50%
      </button>
      <input
        type="text"
        placeholder="Custom"
        className="custom-tip-input"
        data-tip={0}
        onInput={onTipSelected}
        onFocus={onTipSelected}
      />
    </div>
  );
}
