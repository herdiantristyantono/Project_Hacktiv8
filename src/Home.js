import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { userActions } from '../actions';
import './App.css';
import Navbar from './component/Layout/Navbar';
import CardList from './component/Layout/imageGrid';
import Card from './component/Layout/Card';
import Character from './component/Layout/Character';
import Data from '../src/component/Layout2/data';

class Home extends Component {
  // componentDidMount() {
  //   this.props.dispatch(userActions.getAll());
  // }

  // handleDeleteUser(id) {
  //   return (e) => this.props.dispatch(userActions.delete(id));
  // }
  
  render(){
    // const { user, users } = this.props;
    return(
      <div className="Home">
        <Navbar/>
        <CardList />
        <br />
        <Card />
        <br />
        <Character />
        <br />
        <Data/>
        {/* <center>
          <hr className="bg-light"/>
        <h3 className="text-white">All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id} className="text-white">
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span>  <button onClick={this.handleDeleteUser(user.id)}>Delete</button></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                </center>
                <br /> */}
      </div>
      
    );
  }
} 

// function mapStateToProps(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return {
//       user,
//       users
//   };
// }

// const connectedHomePage = connect(mapStateToProps)(Home);
// export { connectedHomePage as Home };

export default Home;