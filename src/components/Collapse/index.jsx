import React, { useState } from 'react';
import arrow from "../../assets/arrow_up.svg";

export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  const contentHeight = toggle ? 'auto' : '0';

  const marginBottom = toggle ? '60px' : '0';

  return (
    <div className="collapseHeight" style={{ height: contentHeight,marginBottom }}>
      <div className="collapse">
        <h3 className='collapse_title' onClick={() => setToggle(!toggle)}>
          {title}
          <img
            className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
            src={arrow}
            alt="show content"
          />
        </h3>
        <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
          {Array.isArray(content) ? content.map((item, index) => {
            return (
              <p key={index}>{item}</p>
            );
          }) : content}
        </div>
      </div>
    </div>
  );
}
