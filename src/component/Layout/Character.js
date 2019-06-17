import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Character extends Component{
    constructor(props) {
        super(props);
        this.state = {
          people: []
        };
        this.state.filterText="";
      }
      componentDidMount() {
        axios
          .get("https://swapi.co/api/people")
          .then(response => this.setState({ people: response.data.results }));
      }

    render(){
        const{people}=this.state
        let filterByHeight = people.length != 0 ?
        people.filter(data=>{
            return data.height >= 150
        })
        :
        []
        return(
            <div className="jumbotron container">
                <h1>Actors Film</h1>
                <br />
                <ul>
                {
                    filterByHeight.length != 0 ?
                        filterByHeight.map(result => {
                            return (
                            <React.Fragment key={result.name}>
                                <span className= "spacing=10dp">
                                    <li>              
                                        {result.name},
                                    </li>
                                </span>
                            </React.Fragment>
                    )
                })
            :
            <h5>...</h5>
            }
            <hr class="my-4"/>
            </ul>
            <Link to="/allCharacters" className="btn btn-outline-danger">View All Actors</Link>
            </div>
        );
    }
}