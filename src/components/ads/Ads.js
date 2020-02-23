import React, { Component } from 'react';
import axios from "axios";
import Child from "./AdsDetail";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import './Ads.css';

export default class Advertisments extends Component {
    constructor(props){
        super(props);
        this.state = {
            ads: []
        }
    }

    componentDidMount = () => {
        axios.get('http://34.89.93.186:8080/apiv1/anuncios', 
        {withCredentials:true}
        ).then(res => {
            const ads = res.data.results;
            console.log(ads);
            this.setState({ ads });
        }).catch(err => {console.log(err)})
    }

    render() {
        const { ads } = this.state;
        return (
            <Router>
                <div className="list-ads">
                    { ads.map(ad => 
                        <Link key={ad._id} to={`/detail/${ad._id}`}>
                        <ul>
                            <h4>{ad.name}</h4>
                            <li>precio: {ad.price}</li>
                            <li>desc: {ad.description}</li>
                            <li>type: {ad.type}</li>
                            <li>photo: {ad.photo}</li>
                            <li>created: {ad.createdAt}</li>
                            <li>updated: {ad.updatedAt}</li>
                            <li>tags: {ad.tags.map(tag => `${tag}, `)}</li>
                        </ul>
                        </Link>
                    )}
                </div>

                <Route path={`/detail/:id`} component={Child}/>
            
                
            </Router>
        )
    }
}

// class Child extends Component{
//     state = {
//         adID: null
//     }

//     componentDidMount(){
//         const { id } = this.props.match.params;

//         axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${id}`, 
//         {withCredentials:true}
//         ).then(res => {
//             const adID = res.data;
//             console.log(adID);
//             this.setState(() => ({ adID }))
//         }).catch(err => {console.log(err)})
//     }

//     render(){
//         //const { adID } = this.state;
//         return(
//             <p>ola</p>
//         );
//     }
// }

// function Child()  {
//     // We can use the `useParams` hook here to access
//     // the dynamic pieces of the URL.
//     const { id } = useParams();
  
//     return (
//     //   <div>
//     //     <h3>ID: {id}</h3>
//     //   </div>
//         axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${id}`, 
//         {withCredentials:true}
//         ).then(res => {
//             const ads = res.data;
//             console.log(ads);
//         }).catch(err => {console.log(err)})
//     );
//   }