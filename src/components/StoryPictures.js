import React from 'react';

const StoryPictures = () => {
  return (
    <div className='story__pictures'>
      <img
        src={require('../assets/story-1.jpeg')}
        alt='Couple with new house1'
        className='story__img--1'
      />
      <img
        src={require('../assets/story-2.jpeg')}
        alt='Couple with new house2'
        className='story__img--2'
      />
    </div>
  );
};

export default StoryPictures;
