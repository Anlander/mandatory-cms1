import React from 'react';
import {BrowserRouter, Route } from "react-router";

import axios from 'axios';

export default class Authors extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      entries: [],

    }
  }


  componentDidMount() {
    axios.get(`http://192.168.99.100:8081/api/collections/get/Authors`)
      .then(res => {
        const data = res.data;
        console.log(data._id);
        this.setState({data:res.data.entries})
        console.log(res.data.entries);
      })
  }

  render() {
    if (this.data === null){
      return <h1>There is no Data</h1>;
    }
    const loop = this.state.data.map(data => {
      console.log(data._id);
      return (
        <tbody key={data._id}>
           <tr>
              <p><img src={"http://192.168.99.100:8081/" + data.Avatar.path} alt="picture" /> </p>
              <h1>{data.Name}</h1>
              <textfield>{data.Description}</textfield>
           </tr>
         </tbody>
      )

    })
    return (
      <div className="maindiv">
      <table className="table">
        {loop}
      </table>
    </div>
    )
  }
}
