/**
 * @jsx React.DOM
 */

var React = require('react')
var TopicsApp = require('./components/TopicsApp')

React.renderComponent(
	<TopicsApp />,
	document.getElementById('app')
)
