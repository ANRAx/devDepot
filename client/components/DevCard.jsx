import React, { useState, useEffect } from 'react';
import AddToCartButton from './AddToCartButton';

// devs prop will be an array of objects

//first step - fetch from DB using necessary criteria for devs and set state
//second step - write a function that maps each dev in state to a relevant JSX
//third step - encapsulate that function into a div

const DevCard = ({ name, stack, hourly_rate, devs, set_devs, in_cart, set_cart, dev_selected, set_dev_selected }) => {

  useEffect(() => {
    fetch('http://localhost:3000/developers')
      .then((res) => res.json())
      .then((data) => {
        set_devs(data);
    });
  }, []);

  const renderDevs = () => {
    devs.map((dev) => {
      const { name, stack, hourly_rate } = dev;
      console.log(dev);
      return (
        <div>
          <img src="#" alt="dev-pic" />
          <h4>
            <b>{name}</b>
          </h4>
          <p>
            Tech Stack:
            {stack}
          </p>
          <p>
            Hourly Rate:
            {hourly_rate}
          </p>
          <div>
          <AddToCartButton 
            dev_selected={dev_selected}
            set_dev_selected={set_dev_selected}
            in_cart={in_cart}
            set_cart={set_cart}
            name={name}
            hourly_rate={hourly_rate}
          />
          </div>
        </div>
      )
    });
  }
  return (
    <div>
      {renderDevs()}
    </div>
  );
};

export default DevCard;
