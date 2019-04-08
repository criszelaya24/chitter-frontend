import React from 'react'
import  {withRouter} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  render(){
    return(
      <div class="container test">
      <img class="rounded-circle img" src={require('../img/signup.jpg')} />
      <h1> Welcome to Chitter App!</h1>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Full name</label>
          <input type="text" class="form-control" placeholder="Enter your name"/>
          <small class="form-text text-muted">What's your name?.</small>
      </div>
      <div class="form-group">
        <label>username</label>
        <input type="text" class="form-control" placeholder="Username"/>
    </div>
      </div>
      <div class="col">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
    </div>
    </div>
    <div class= "input-group mb-3 small-select">
    <select class="custom-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="F">Female</option>
        <option value="M">Male</option>
    </select>
    </div>
    <button type="submit" class="btn btn-primary large-btn">Submit</button>
  </div>
    )
  }
}

export default withRouter(Signup)
