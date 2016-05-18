import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link } from 'react-router'

export default class Navbar extends Component {
  render() {
  	return (
		  <div>
		    <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
		  </div>
		);
  }
}