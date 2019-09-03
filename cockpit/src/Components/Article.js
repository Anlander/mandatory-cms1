import React from 'react';
import axios from 'axios';



export default class Blogg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      entries: [],

    }
  }


  componentDidMount() {
    axios.get(`http://192.168.99.100:8081/api/collections/get/Article`)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({data:res.data.entries})
        console.log(res.data.entries);
      })
  }

  render() {
    if (this.data === null){
      return <h1>There is no Data</h1>;
    }
    const loop = this.state.data.map(data => {
      return (
        <tbody key={data._id}>
           <tr>

             <h1>{data.Title}</h1>
             <h3>{data.Body}</h3>
             <h4>Published: {data.Date}</h4>
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
