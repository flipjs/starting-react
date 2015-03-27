/** @jsx React.DOM */

var React = require('react')
var MessageBox = require('./MessageBox')

var reactComponent = React.renderComponent(
	<MessageBox />,
	document.getElementById('app')
)

