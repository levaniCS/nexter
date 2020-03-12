import React from 'react';
import Icons from '../assets/sprite.svg';

const Homes = () => {
  return (
    <section className='homes'>
      <div className='home'>
        <img
          src={require('../assets/house-1.jpeg')}
          alt='House 1'
          className='home__img'
        />
        <svg className='home__like'>
          <use xlinkHref={`${Icons}#icon-heart-full`} />
        </svg>
        <h5 class='home__name'>Beautiful Family House</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref={`${Icons}#icon-map-pin`} />
          </svg>
          <p>USA</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref={`${Icons}#icon-profile-male`} />
          </svg>
          <p>5 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref={`${Icons}#icon-expand`} />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref={`${Icons}#icon-key`} />
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>

      <div className='home'>
        <img
          src={require('../assets/house-2.jpeg')}
          alt='House 2'
          className='home__img'
        />
        <svg className='home__like'>
          <use xlinkHref={`${Icons}#icon-heart-full`} />
        </svg>
        <h5 class='home__name'>Modern Glass Villa</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref={`${Icons}#icon-map-pin`} />
          </svg>
          <p>Canada</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref={`${Icons}#icon-profile-male`} />
          </svg>
          <p>6 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref={`${Icons}#icon-expand`} />
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref={`${Icons}#icon-key`} />
          </svg>
          <p>$2,750,000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>

      <div className='home'>
        <img
          src={require('../assets/house-3.jpeg')}
          alt='House 3'
          className='home__img'
        />
        <svg className='home__like'>
          <use xlinkHref={`${Icons}#icon-heart-full`} />
        </svg>
        <h5 class='home__name'>Cozy Country House</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref={`${Icons}#icon-map-pin`} />
          </svg>
          <p>UK</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref={`${Icons}#icon-profile-male`} />
          </svg>
          <p>4 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref={`${Icons}#icon-expand`} />
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref={`${Icons}#icon-key`} />
          </svg>
          <p>$850,000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img
          src={require('../assets/house-4.jpeg')}
          alt='House 4'
          className='home__img'
        />
        <svg className='home__like'>
          <use xlinkHref={`${Icons}#icon-heart-full`} />
        </svg>
        <h5 class='home__name'>Large Rustical Villa</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref={`${Icons}#icon-map-pin`} />
          </svg>
          <p>Portugal</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref={`${Icons}#icon-profile-male`} />
          </svg>
          <p>6 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref={`${Icons}#icon-expand`} />
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref={`${Icons}#icon-key`} />
          </svg>
          <p>$1,950,000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img
          src={require('../assets/house-5.jpeg')}
          alt='House 5'
          className='home__img'
        />
        <svg className='home__like'>
          <use xlinkHref={`${Icons}#icon-heart-full`} />
        </svg>
        <h5 class='home__name'>Majestic Palace House</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref={`${Icons}#icon-map-pin`} />
          </svg>
          <p>Germany</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref={`${Icons}#icon-profile-male`} />
          </svg>
          <p>18 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref={`${Icons}#icon-expand`} />
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref={`${Icons}#icon-key`} />
          </svg>
          <p>$9,200,000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
      <div className='home'>
        <img
          src={require('../assets/house-6.jpeg')}
          alt='House 6'
          className='home__img'
        />
        <svg className='home__like'>
          <use xlinkHref={`${Icons}#icon-heart-full`} />
        </svg>
        <h5 class='home__name'>Modern Family Apartment</h5>
        <div className='home__location'>
          <svg>
            <use xlinkHref={`${Icons}#icon-map-pin`} />
          </svg>
          <p>Italy</p>
        </div>
        <div className='home__rooms'>
          <svg>
            <use xlinkHref={`${Icons}#icon-profile-male`} />
          </svg>
          <p>3 rooms</p>
        </div>
        <div className='home__area'>
          <svg>
            <use xlinkHref={`${Icons}#icon-expand`} />
          </svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className='home__price'>
          <svg>
            <use xlinkHref={`${Icons}#icon-key`} />
          </svg>
          <p>$600,000</p>
        </div>
        <button className='btn home__btn'>Contact realtor</button>
      </div>
    </section>
  );
};

export default Homes;
