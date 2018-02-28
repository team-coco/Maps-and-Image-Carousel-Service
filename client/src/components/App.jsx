import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { BusinessInfo } from './BusinessInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: {},
      photos: [],
    };
  }

  componentDidMount() {
    axios.get('/business/--9e1ONYQuAa-CB_Rrw7Tw')
      .then((response) => {
        return response.data;
      })
      .then((businessData) => {
        this.setState({business: businessData});
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get('/business/photos/--9e1ONYQuAa-CB_Rrw7Tw')
      .then((response) => {
        return response.data;
      })
      .then((photosData) => {
        this.setState({photos: photosData});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',

        width: '1000px',
        height: '300px',

        margin: 'auto',
        background: 'lightgray',
      }
    }

    return (
      <div style={styles.container}>
        <BusinessInfo business={this.state.business}/>
      </div>
    );
  }
}

App.PropTypes = {

}

export { App };