import React, {useState, useEffect} from 'react';
import axios from 'axios';



export default class Blogg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      entries: [],
      title: "",
      des: "",
      date:"",
    

    }
  }


  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://192.168.99.100:8081/api/collections/get/Article?filter[_id]=${id}`)
      .then(res => {
        const data = res.data;
        console.log(data.entries[0]);
        console.log(data);
        this.setState({
          data:res.data.entries
        })
        console.log(data.entries);
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
             <h1>{data.Author.display}</h1>
             <textfield>{data.Body}</textfield>
             <h3>{data.Date}</h3>

           </tr>
         </tbody>
      )

    })

    return (
      <div className="maindiv">
        {loop}
    </div>
    )
  }
}
