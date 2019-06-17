import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Layout/Navbar';

export default class DataFilm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
    this.state.filterText="";
  }
  componentDidMount() {
    axios
      .get("https://swapi.co/api/films/")
      .then(response => this.setState({ people: response.data.results }));
  }

  render() {
    const{people}=this.state
    let mapByTitle = people.length != 0 ?
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
                <h1 className="data text-white">All Data Film</h1>
                    <br />
                        <div className="jumbotron">
                            <ul>
                                {
                                    mapByTitle.length != 0 ?
                                        mapByTitle.map(result => {
                                            return (
                                                <React.Fragment key={result.title}>
                                                    <ul>
                                                        <li>
                                                            <p><img src="https://source.unsplash.com/random" className="card-img-top col" alt="..." style={{width:"500px", height:"400px", borderRadius:"20%"}} /></p> 
                                                            <br/>                              
                                                            <p className="font-weight-bold">{result.title}</p>
                                                            <p>{result.opening_crawl}</p>
                                                            <p>Director : {result.director}</p>
                                                            <p>Producer : {result.producer}</p>
                                                            <p>Release Date : {result.release_date}</p>
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
    );
  }
}