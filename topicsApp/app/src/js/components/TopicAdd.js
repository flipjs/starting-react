/**
 * @jsx React.DOM
 */

var React = require('react')
var TopicAdd = require('./TopicAdd')

var TopicAdd = React.createClass({

	render: function() {
		return (
			<button className="btn btn-success btn-block">Add New Topic</button>
		)
	}

})

module.exports = TopicAdd
