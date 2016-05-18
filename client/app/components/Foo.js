import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export default class Foo extends Component {
  render() {
  	return (
		  <div>
		    <div>Foo view.</div>
		  </div>
		);
  }
}
