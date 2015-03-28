/**
 * @jsx React.DOM
 */

var React = require('react')
var TopicForm = require('./TopicForm')

var TopicForm = React.createClass({

	handleForm: function(e) {
		e.preventDefault()

		var newTopic = {
			title: this.refs.title.getDOMNode().value,
			description: this.refs.desc.getDOMNode().value,
			likes: 0
		}

		this.refs.topicForm.getDOMNode().reset()

		this.props.onNewTopic(newTopic)
	},

	render: function() {

		var display = this.props.displayed ? 'block' : 'none'
		var styles = {
			display: display
		}

		return (
			<form ref="topicForm" id="topicForm" style={styles} className="container" onSubmit={this.handleForm}>
				<div className="form-group">
					<input ref="title" type="text" className="form-control" placeholder="Title" />
					<input ref="desc" type="text" className="form-control" placeholder="Description" />
					<button className="btn btn-primary btn-block">Submit</button>
				</div>
			</form>
		)
	}

})

module.exports = TopicForm
