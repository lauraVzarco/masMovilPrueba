import React, { Component } from 'react';
import PhoneListContainer from './Components/PhoneListContainer';
import PhoneDetailComponent from './Components/PhoneDetailComponent'
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './App.css'
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchMobiles = this.fetchMobiles.bind(this);
  }

  // fectch de la api
  componentDidMount() {
    this.fetchMobiles();
  }


  fetchMobiles() {
    this.props.dispatch({
      type: 'loading'
    })
    axios.get('http://127.0.0.1:3000/phones')
      .then((json) => {
        this.props.dispatch({
          type: 'fetchMobilesSuccess',
          payload: json.data
        })
      })
  }

  render() {
    return (
      <div className="contentPage">
        <h1 className="titlePage">MasMovil</h1>
        {this.props.loading ? <div className="loader"> </div> : <Switch>
          <Route
            exact path='/'
            render={() =>
              <PhoneListContainer className="listPhone" />
            } />
          <Route
            path='/mobile/:id'
            render={(props) => {
              const id = props.match.params.id;
              const mobiles = this.props.list.find((mobiles) => mobiles.id === id)
              return (
                <PhoneDetailComponent
                  image={mobiles.image}
                  title={mobiles.title}
                  description={mobiles.description}
                  color={mobiles.color}
                  price={mobiles.price} />)
            }} />
        </Switch>}

      </div>
    );
  }
}

export default withRouter(connect(state => ({ list: state.list, loading: state.loading }))(App));
