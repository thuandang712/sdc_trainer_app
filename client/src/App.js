import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

import MenuBar from './components/MenuBar'
import Home from './components/Home'
import LoginForm from './components/LoginForm';
import BodyBuilding from './components/categories/BodyBuilding'
import Running from './components/categories/Running'
import Swimming from './components/categories/Swimming'
import Cycling from './components/categories/Cycling'
import PowerLifting from './components/categories/PowerLifting'


class App extends React.Component {
  state = {
    trainers: [],
    reviews: [],
    loading: false,
    singleTrainer: null,
  };


  async componentDidMount() {
    this.setState({ loading: true })
    const resTrainers = await axios.get("http://localhost:5500/api/trainers")
    this.setState({ trainers: resTrainers.data })
    this.setState({ loading: false })
  };


  render() {
    const { trainers, reviews, singleTrainer, loading } = this.state
    return (
      <Router>
        <Container>
          <MenuBar />
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path='/bodybuilding' render={() => <BodyBuilding trainers={trainers} />} />
          <Route exact path='/running' render={() => <Running trainers={trainers} />} />
          <Route exact path='/swimming' render={() => <Swimming trainers={trainers} />} />
          <Route exact path='/cycling' render={() => <Cycling trainers={trainers} />} />
          <Route exact path='/powerlifting' render={() => <PowerLifting trainers={trainers} />} />
          {/* <Route exact path="/posts/:postId" component={SingleTrainer}/> */}
        </Container>
      </Router>
    )
  }
}

export default App;
