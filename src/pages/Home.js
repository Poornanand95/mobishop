import React, { Fragment } from 'react';
import Card from '../components/home/Card';
import Filter from '../components/home/Filter';

function Home() {
  const mobileArray = [];

  for (let i = 10; i < 100; i++) {
    // console.log(i);
    if (
      JSON.parse(window.localStorage.getItem(i)) != {} &&
      JSON.parse(window.localStorage.getItem(i)) != null
    ) {
      // console.log(JSON.parse(window.localStorage.getItem(i)));
      let obj = JSON.parse(window.localStorage.getItem(i));
      console.log(typeof obj);
      // console.log(mobileArray);
      mobileArray.push(obj);
    }
  }

  console.log(mobileArray);
  return (
    <Fragment>
      <Filter />
      <div style={cardStyle}>
        {mobileArray.map((mobile) => (
          <Card mobile={mobile} />
        ))}
      </div>
    </Fragment>
  );
}

const cardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '5rem',
};
export default Home;
