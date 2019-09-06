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
      currentPage: 0,
      perPage: 3
    }

  }





  componentDidMount() {
    axios.get(`http://192.168.99.100:8081/api/collections/get/Article?limit=${this.state.perPage}&skip=0`)
      .then(res => {
        const data = res.data;

        console.log(data);
        this.setState
          ({
          data:res.data.entries,
        })
      })
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      const skip = this.state.currentPage * this.state.perPage;
      axios.get(`http://192.168.99.100:8081/api/collections/get/Article?limit=${this.state.perPage}&skip=${skip}`)
        .then(res => {
          const data = res.data;

          console.log(data);
          this.setState
            ({
            data:res.data.entries,
          })
        })
    }
  }


  render() {


    const loop = this.state.data.map(data => {
      return (
        <tbody key={data._id}>
           <tr>
            <td> <Link to={`/Article/${data._id}`} className="title">{data.Title}</Link> <br></br></td>
            <td> <a>{data.Author.display}</a></td>
            <td> <h3>{data.Date}</h3></td>
           </tr>

         </tbody>
      )

    })
    return (
      <div className="maindiv">
        <table className="main-tr">
          {loop}
        </table>
      <button className="next" onClick={() => this.setState({ currentPage: Math.max(0, this.state.currentPage - 1) })}>Prev</button>
      <button className="next" onClick={() => this.setState({ currentPage: this.state.currentPage + 1 })}>Next</button>
      <p>Page {this.state.currentPage + 1}</p>
    </div>
    )
  }
}
