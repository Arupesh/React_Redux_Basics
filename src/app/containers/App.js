import React from "react";
import {connect} from "react-redux";

import { User } from '../components/User';
import { Main }  from '../components/Main';

import {setName} from '../actions/user.js';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps =(state) => {
  return{
      user: state
  };
};

const mapDispatchToProps =(dispatch)=>{
  console.log("mapDispatchToProps called>>");
  return{
      setName: (name) => {
        dispatch (setName(name))
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
