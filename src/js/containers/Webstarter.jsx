import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Webstarter from '../components/Webstarter'

import * as WebstarterActions from '../actions/webstarter'

function mapStateToProps(state) {
	return {
		webstarter: state.webstarter
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, WebstarterActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Webstarter)
