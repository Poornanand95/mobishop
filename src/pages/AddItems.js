import React, { useState, useEffect } from 'react';
import '../components/css/AddItems.css';
function AddItems() {
  const [mobiName, setMobiName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [price, setPrice] = useState('');
  const [mobiColor, setMobiColor] = useState('');
  const [ram, setRam] = useState('');
  const [rom, setRom] = useState('');
  const [item, setItem] = useState({});

  useEffect(() => {
    console.log(item.mobiName);
    console.log(item.brandName);
    console.log(item.price);
    console.log(item.mobiColor);
    console.log(item.ram);
    console.log(item.rom);
  }, [item]);

  return (
    <div className='add-form-container'>
      <div className='add-form'>
        <div className='label-input'>
          <label for='add-mobi-name'>Mobile name:</label>
          <input
            type='text'
            id='add-mobi-name'
            onChange={(e) => {
              e.preventDefault();
              setMobiName(e.target.value);
            }}
          />
        </div>
        <div className='label-input'>
          <label for='add-mobi-brand-name'>Brand Name:</label>
          <input
            type='text'
            id='add-mobi-brand-name'
            onChange={(e) => {
              e.preventDefault();
              setBrandName(e.target.value);
            }}
          />
        </div>
        <div className='label-input'>
          <label for='add-mobi-price'>Price(Rs.):</label>
          <input
            type='text'
            id='add-mobi-price'
            onChange={(e) => {
              e.preventDefault();
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className='label-input'>
          <label for='add-mobi-color'>Mobile Color:</label>
          <input
            type='text'
            id='add-mobi-color'
            onChange={(e) => {
              e.preventDefault();
              setMobiColor(e.target.value);
            }}
          />
        </div>
        <div className='label-input'>
          <label for='add-mobi-ram'>RAM:</label>
          <input
            type='text'
            id='add-mobi-ram'
            onChange={(e) => {
              e.preventDefault();
              setRam(e.target.value);
            }}
          />
        </div>
        <div className='label-input'>
          <label for='add-mobi-rom'>ROM:</label>
          <input
            type='text'
            id='add-mobi-rom'
            onChange={(e) => {
              e.preventDefault();
              setRom(e.target.value);
            }}
          />
        </div>
        <div className='label-input'>
          <input
            className='add'
            type='submit'
            value='Add'
            onClick={() =>
              setItem({
                mobiName,
                brandName,
                price,
                mobiColor,
                ram,
                rom,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AddItems;
