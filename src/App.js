// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CardList from './Card/CardList';
import Form from './Form/Form';


class App extends React.Component{
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }
  state = {
    profiles: [],
  }
  render(){
  return (
  <div>
    <div className="header">{this.props.title}</div>
    <Form onSubmit={this.addNewProfile} />
    <CardList profiles={this.state.profiles}/>
  </div>
  )
  }
}
export default App;
