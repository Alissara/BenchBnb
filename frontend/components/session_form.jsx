import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <h3>{this.props.formType}</h3>
        <br/>
        {this.renderErrors()}
        <div>
          <label htmlFor="un">Username</label>
          <input
            id="un"
            type="text"
            value={this.state.username}
            onChange={this.update('username')} />
          <label htmlFor="pw">Password</label>
          <input
            id="pw"
            type="password"
            value={this.state.password}
            onChange={this.update('password')} />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

// export default SessionForm;
export default withRouter(SessionForm);
