/**
 * @jsx React.DOM
 */

var React = require('react')
var TopicForm = require('./TopicForm')

var TopicForm = React.createClass({

	render: function() {
		return (
			<form className="container">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Title" />
					<input type="text" className="form-control" placeholder="Description" />
					<button className="btn btn-primary btn-block">Submit</button>
				</div>
			</form>
		)
	}

})

module.exports = TopicForm
