import React from 'react'
import  {withRouter} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      gender: '',
      errorName: '',
      errorUsername: '',
      errorEmail: '',
      errorPassword: '',
      errorGender: '',
    }
  }

  updateName(value){
    if (value === ''){
      this.setState({
        name: '',
        errorName: "Cannot be empty"
      })
    }
    this.setState({
      name: value,
    })
  }

  updateUsername(value){
    if(value === '') this.setState({errorUsername: "Cannot be emty"});
    this.setState({
      username: value,
    })
  }

  updateEmail(value){
      if(value === '') this.setState({errorEmail: "Cannot be emty"});
    this.setState({
      email: value,
    })
  }

  updatePassword(value){
      if(value === '') this.setState({errorPassword: "Cannot be emty"});
    this.setState({
      password: value,
    })
  }

  updateGender(value){
      if(value === '') this.setState({errorGender: "Cannot be emty"});
    this.setState({
      gender: value,
    })
  }

  submit(){

  }

  render(){
    return(
      <div className="container test">
      <img className="rounded-circle img" src={require('../img/signup.jpg')} />
      <h1> Welcome to Chitter App!</h1>
    <div className="row">
      <div className="col">
        <div className="form-group">
          <label>Full name</label>
          <input type="text" className="form-control" placeholder="Enter your name" onBlur={(e) => {this.updateName(e.target.value)}}/>
          <small className="form-text text-muted">What's your name?.</small>
          <p className="error">{this.state.errorName}</p>
      </div>
      <div className="form-group">
        <label>username</label>
        <input type="text" className="form-control" placeholder="Username" onBlur={(e) => {this.updateUsername(e.target.value)}}/>
        <p className="error">{this.state.errorUsername}</p>
    </div>
      </div>
      <div className="col">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onBlur={(e) => {this.updateEmail(e.target.value)}}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email.</small>
        <p className="error">{this.state.errorEmail}</p>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onBlur={(e) => {this.updatePassword(e.target.value)}}/>
      <p className="error">{this.state.errorPassword}</p>
      </div>
    </div>
    </div>
    <div className= "input-group mb-3 small-select">
    <select className="custom-select" id="inputGroupSelect01" onBlur={(e) => {this.updateGender(e.target.value)}}>
        <option selected value="">Choose...</option>
        <option value="F">Female</option>
        <option value="M">Male</option>
    </select>
    </div>
      <p className="error">{this.state.errorGender}</p>
    <button type="submit" className="btn btn-primary large-btn" onClick={() => {this.submit()}}>Submit</button>
  </div>
    )
  }
}

export default withRouter(Signup)
