import React from 'react';
import '../styles/TipSelect.css';

export default function TipSelect(props) {
  const { changeTip } = props;

  const onBtnSelected = (e) => {
    const { target: activeBtn } = e;
    const tip = activeBtn.dataset['tip'];
    const allTipBtns = document.querySelectorAll('.tip-btn');
    allTipBtns.forEach((btn) => {
      btn.classList.remove('tip-btn--active');
    });
    activeBtn.classList.add('tip-btn--active');
    changeTip(tip);
  };

  return (
    <div className="tip-btns-group">
      <button className="tip-btn" data-tip={5} onClick={onBtnSelected}>
        5%
      </button>
      <button className="tip-btn" data-tip={10} onClick={onBtnSelected}>
        10%
      </button>
      <button className="tip-btn" data-tip={15} onClick={onBtnSelected}>
        15%
      </button>
      <button className="tip-btn" data-tip={25} onClick={onBtnSelected}>
        25%
      </button>
      <button className="tip-btn" data-tip={50} onClick={onBtnSelected}>
        50%
      </button>
      <input type="text" placeholder="Custom" className="custom-tip-input" />
    </div>
  );
}
