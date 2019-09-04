import React from 'react';
import {BrowserRouter, Route } from "react-router";
import {Link} from "react-router-dom";
import './style.css';
import axios from 'axios';

export default class Forum extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      entries: [],
      Article:[],
      id:[],
    }
  }


  componentDidMount() {
    axios.get(`http://192.168.99.100:8081/api/collections/get/Article`)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState
          ({
          data:res.data.entries

        })
      })
  }




  render() {
    if (this.data === null){
      return <h1>There is no Data</h1>;
    }
    const loop = this.state.data.map(data => {
      return (
        <tbody key={data._id}>
           <tr className="main-tr">
             <Link to={`/Article/${data._id}`} className="title">{data.Title}</Link> <br></br>
             <a>{data.Author.display}</a>
             <h3>{data.Date}</h3>
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
