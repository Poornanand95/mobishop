import React, { Fragment } from 'react';
import '../css/Filter.css';

function Filter() {
  return (
    <Fragment>
      <div className='filter-container'>
        <div className='brand-select'>
          <label for='brand-name'>Select Brand Name</label>
          <input type='text' id='brand-name' placeholder='Brand name' />
        </div>
        <div className='price-select'>
          <label for='price'>Select price range</label>
          <select name='price' id='price'>
            <option value='5000'>less than 5000</option>
            <option value='50001 10000'>between 5000 & 10000</option>
            <option value='10001 15000'>between 10000 & 15000</option>
            <option value='15001 20000'>between 15000 & 20000</option>
            <option value=' 20000'>more than 20,000</option>
          </select>
        </div>
      </div>
    </Fragment>
  );
}

export default Filter;
