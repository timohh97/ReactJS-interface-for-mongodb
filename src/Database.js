import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Android from './Android'
import Person from './Person'
import Messenger from './Messenger'
import TestData from './Test'
import './App.css'


export default class Databases extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h1>React Interface for mongoDB databases</h1>
        <Slider {...settings}>
          <div>
            <Android/>
          </div>
          <div>
            <Person/>
          </div>
          <div>
            <Messenger/>
          </div>
          <div>
            <TestData/>
          </div>
          </Slider>
      </div>
    );
  }
}