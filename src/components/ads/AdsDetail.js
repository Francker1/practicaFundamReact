import React, {Component} from 'react';
import axios from "axios";

export default class AdDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            ad: []
        }
    }

    componentDidMount = () => {
        const {match: {params}} = this.props;
        
        axios.defaults.withCredentials = true;
        axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${params.id}`
        ).then(res => {
        const ad = res.data.result;
        this.setState({ad:ad})
        }).catch(err => {console.log(err)})
    }

    
    render(){
        const { ad } = this.state;
                
        return(
            <>
                <h3>{ad.name}</h3>
                <p>Precio: {ad.price}</p>
                <p>desc: {ad.description}</p>
                <p>tipo: {ad.type}</p>
                <p>img: {ad.photo}</p>
                <p>fecha anuncio: {ad.createdAt}</p>
                <p>tags:</p>
                <ul>
                { ad.tags && ad.tags.map(tag => (
                    <li key={tag}>
                        <span>{tag}</span>
                    </li>
                    ))
                }
                </ul>
            </>
        );
    }
}
