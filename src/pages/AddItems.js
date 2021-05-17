import React from 'react';
import '../components/css/AddItems.css';
function AddItems() {
  return (
    <div className='add-form-container'>
      <form>
        <div className='label-input'>
          <label for='add-mobi-name'>Mobile name:</label>
          <input type='text' id='add-mobi-name' />
        </div>
        <div className='label-input'>
          <label for='add-mobi-brand-name'>Brand Name:</label>
          <input type='text' id='add-mobi-brand-name' />
        </div>
        <div className='label-input'>
          <label for='add-mobi-price'>Price(Rs.):</label>
          <input type='text' id='add-mobi-price' />
        </div>
        <div className='label-input'>
          <label for='add-mobi-color'>Mobile Color:</label>
          <input type='text' id='add-mobi-color' />
        </div>
        <div className='label-input'>
          <label for='add-mobi-ram'>RAM:</label>
          <input type='text' id='add-mobi-ram' />
        </div>
        <div className='label-input'>
          <label for='add-mobi-rom'>ROM:</label>
          <input type='text' id='add-mobi-rom' />
        </div>
        <div className='label-input'>
          <input className='add' type='submit' value='Add' />
        </div>
      </form>
    </div>
  );
}

export default AddItems;
