import React from 'react';

const Realtors = () => {
  return (
    <div className='realtors'>
      <h3 className='heading-3'>Top 3 Realtors</h3>
      <div className='realtors__list'>
        <img
          src={require('../assets/realtor-1.jpeg')}
          alt='realtor 1'
          className='realtors__img'
        />
        <div className='realtors__details'>
          <h4 className='heading-4 heading-4--light'>Erik Feinman</h4>
          <p className='realtors__sold'>245 houses sold</p>
        </div>

        <img
          src={require('../assets/realtor-2.jpeg')}
          alt='realtor 2'
          className='realtors__img'
        />
        <div className='realtors__details'>
          <h4 className='heading-4 heading-4--light'>Kim Brown</h4>
          <p className='realtors__sold'>225 houses sold</p>
        </div>

        <img
          src={require('../assets/realtor-3.jpeg')}
          alt='realtor 3 '
          className='realtors__img'
        />
        <div className='realtors__details'>
          <h4 className='heading-4 heading-4--light'>Toby Ramsey</h4>
          <p className='realtors__sold'>198 houses sold</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
