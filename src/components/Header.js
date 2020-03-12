import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <img
        src={require('../assets/logo.png')}
        alt='nexter logo'
        className='header__logo'
      />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate personal freedom</h1>
      <button className='btn header__btn'>View our properties</button>
      <div className='header__seenon-text'>As seen on</div>
      <div className='header__seenon-logos'>
        <img src={require('../assets/logo-bbc.png')} alt='seen on logo 1' />
        <img src={require('../assets/logo-forbes.png')} alt='seen on logo 2' />
        <img
          src={require('../assets/logo-techcrunch.png')}
          alt='seen on logo 3'
        />
        <img src={require('../assets/logo-bi.png')} alt='seen on logo 4' />
      </div>
    </header>
  );
};

export default Header;
