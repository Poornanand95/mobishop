import React, { Fragment } from 'react';
import '../css/Card.css';
function Card(mobile) {
  return (
    <Fragment>
      <div className='container'>
        <div className='card'>
          <div className='mobi-branding'>
            <div>
              <i class='fas fa-mobile-alt mobi-icon'></i>
            </div>
            <div className='mobi-name-brand'>
              <ul>
                <li className='mobi-name'>{mobile.mobile.mobiName}</li>
                <li className='mobi-brand'>{mobile.mobile.brandName}</li>
              </ul>
            </div>
          </div>
          <div className='mobi-specifications'>
            <ul>
              <li className='mobi-specs'>Specifications </li>
              <li className='mobi-color'>
                Mobile Color :. {mobile.mobile.mobiColor}
              </li>
              <li className='mobi-rom'>ROM :. {mobile.mobile.rom}</li>
              <li className='mobi-ram'>RAM :. {mobile.mobile.ram}</li>
              <li className='mobi-price'>Price(Rs) :. {mobile.mobile.price}</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
