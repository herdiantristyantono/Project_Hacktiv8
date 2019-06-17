import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Layout/Navbar';
import CardList from './component/Layout/imageGrid';
import Card from './component/Layout/Card';
import Character from './component/Layout/Character';

class Home extends Component {
  
  render(){
    return(
      <div className="Home">
        <Navbar/>
        <CardList />
        <br />
        <Card />
        <br />
        <Character />
        <br />
      </div>
      
    );
  }
} 

export default Home;