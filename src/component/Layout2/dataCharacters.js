import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Layout/Navbar';

export default class dataCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.state.filterText="";
  }
  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => this.setState({ people: response.data.results }));
  }

  render() {
    const{people}=this.state
    let mapByName = people.length != 0 ?
        people.map(data=>{
            return data
        })
        :
        []
    return (
        <div className="film">
            <Navbar />
            <div className="container">
            <br />
                <h1 className="data text-white">All Data Actors</h1>
                    <br />
                        <div className="jumbotron">
                            <ul>
                                {
                                    mapByName.length != 0 ?
                                    mapByName.map(result => {
                                        return (
                                            <React.Fragment key={result.name}>
                                                <ul>
                                                    <li>
                                                        <p><img src="https://source.unsplash.com/random" className="card-img-top col" alt="..." style={{width:"100px", height:"70px", borderRadius:"50%"}} /></p> 
                                                        <br/>                              
                                                        <p className="font-weight-bold">Name : {result.name}</p>
                                                        <p>Height : {result.height}</p>
                                                        <p>Mass : {result.mass}</p>
                                                        <p>Hair Color : {result.hair_color}</p>
                                                        <p>Skin Color : {result.skin_color}</p>
                                                        <p>Eye Color : {result.eye_color}</p>
                                                        <p>Birthday : {result.birth_year}</p>
                                                        <p>Gender : {result.gender}</p>
                                                    </li>
                                                    <br/>
                                                </ul>
                                            </React.Fragment>
                                            )
                                        })
                                    :
                                    <h3><center>Please Wait......</center></h3>
                                    }
                            </ul>
                        </div>
                    <br />
            </div>     
        </div>
    )
  }
}