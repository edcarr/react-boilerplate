import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import { Link } from 'react-router'

export default class Foo extends Component {
  render() {
  	return (
		  <div>
		    <div>Home view.</div>
		  </div>
		);
  }
}