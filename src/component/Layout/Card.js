import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Card extends Component {
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
    let filterByTitle = people.length != 0 ?
        people.filter(data=>{
            return data.director !== 'George Lucas'
        })
        :
        []
    return (
      <div className="container">
        <br />
          <div className="row">
            <ul className="col mr-auto">
              <li>
                <h3 className="text-white font-weight-bold">List Film</h3>
              </li>
            </ul>
            <ul className="col">
              <li>
                <h3 className="font-weight-bold text-right"><Link to="/allFilms" className="text-white">View All</Link></h3>
              </li>
            </ul>
          </div>
        <br />
        <ul>
          {
              filterByTitle.length != 0 ?
                  filterByTitle.map(result => {
                      return (
                      <React.Fragment key={result.director}>
                          <span className= "spacing=10dp">
                              <div className="card bg-light border-secondary" style={{width:"100%", height:"auto"}}><br />
                                <img src="https://source.unsplash.com/random" className="card-img-top col" alt="..." style={{width:"100px", height:"70px", borderRadius:"50%"}} />
                                  <div className="card-body">
                                    <h5 className="card-title">{result.title}</h5>
                                    <p className="card-text font-weight-normal text-truncate">{result.opening_crawl}</p>
                                  </div>
                              </div>
                          </span>
                        <br />
                      </React.Fragment>
                      )
                  })
              :
              <h3><center className="text-white">Please Wait......</center></h3>
              }
        </ul>
      </div>     
    )
  }
}