import React, { Component } from 'react';
import axios from 'axios';

export class TagsList extends Component {

  state = {
    tags: []
  }

  componentDidMount = () => {
    axios.defaults.withCredentials = true;
    axios.get(`http://34.89.93.186:8080/apiv1/tags`)
      .then(res => {
        const tagsResponse = res.data.results;
      
        this.setState({ tags: tagsResponse.filter(tag => tag !== null) });
      })
  }

  render() {
    const {tags} = this.state;
    return (
      <>
       {tags.map(t =>
            <option key={t} value={t}>{t}</option>
        )}
      </>
    )
  }
}

export class PriceList extends Component {

    state = {
        prices: []
    }
    
      componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.get(`http://34.89.93.186:8080/apiv1/anuncios`)
          .then(res => {
            const prices = res.data.results;
            this.setState({ prices });
          })
      }
    
      render() {
        const { prices } = this.state;
        const dateForFilter = [...new Set(prices)];

        return (
          <>
           {dateForFilter.sort().map(p =>
                <option key={p._id} value={p.price}>{p.price}</option>
            )}
          </>
        
        );
      }

}