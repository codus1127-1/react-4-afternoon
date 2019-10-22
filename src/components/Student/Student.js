import React, { Component } from 'react';
import Axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount = () => {
    Axios
    .get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(results => {
      this.setState({
        studentInfo: results.data
      })
    })
  }

  goBack = () => {
    window.history.back()

  }

  render() {
    let student = this.state.studentInfo
    return (
      <div className="box">
        <button onClick={this.goBack}>Go Back</button>
        <h1>Student</h1>
        <h1>{student.first_name} {student.last_name}</h1>
        <h3>Grade: {student.grade}</h3>
        <h3>Email: {student.email} </h3>

      </div>
    )
  }
}