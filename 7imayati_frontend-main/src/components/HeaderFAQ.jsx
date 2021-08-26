import React from "react";
import { Button } from "./Button";
import { Container, Row, Image, Col } from "react-bootstrap";
import logo from "../assets/img/transparent-logo-background.png";
import map from "../assets/img/map.svg";
import "./HeroSection.css"
import styled from 'styled-components';
import {Link, Redirect, useHistory} from "react-router-dom";

import city from "./../assets/img/pincity.svg";



function HeaderFAQ() {
  const Button = styled.button`
  background-color: #0A7DCD;
  color: white;
  font-family: Poppins;
  font-size: 18px;
  padding: 5px 20px;
  border-color: #0A7DCD;
  border: none;
  border-radius: 0px;
  margin: 2px 2px;
  cursor: pointer;
  height: 244px;
  width: 243px;
  
`;


const history = useHistory();


  return (

      <div className="container" align="left">
        <div className="row">
          <span className="hero-title" align="left" >
           E-7imayati,
          </span>
          <span className="hero-subtitle">
            <p><b>découvrez ce que vous ne savez toujours pas.</b></p>
            </span>
        </div>

        
            <img src={city} alt="city"
            height="300"
            width="300"/>




        <div className="row">
          <div className="col">
          <span className="hero-subtitle">
            <p><b>Notre mission</b></p>
            </span>
            
          </div>

          <div className="col">
            Demo
          </div>
        </div>
      </div>






  );
}

export default HeaderFAQ;
