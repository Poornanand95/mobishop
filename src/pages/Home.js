import React, { Fragment } from 'react';
import Card from '../components/home/Card';
import Filter from '../components/home/Filter';

function Home() {
  const mobileArray = [];

  for (let i = 10; i < 100; i++) {
    if (
      JSON.parse(window.localStorage.getItem(i)) != null &&
      Object.keys(JSON.parse(window.localStorage.getItem(i))).length > 0
    ) {
      let obj = JSON.parse(window.localStorage.getItem(i));

      mobileArray.push(obj);
    }
  }

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
