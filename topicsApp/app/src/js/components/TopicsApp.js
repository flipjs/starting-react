/**
 * @jsx React.DOM
 */

var React = require('react')
var TopicAdd = require('./TopicAdd')
var TopicForm = require('./TopicForm')
var Topics = require('./Topics')

var TopicsApp = React.createClass({

	getInitialState: function() {
		var TOPICS = [
			{ key: '1', title: 'The quick brown fox', description: 'jumps over the lazy dog.', likes: 34 },
			{ key: '2', title: 'This is the day', description: 'your life will surely change.', likes: 56 },
			{ key: '3', title: 'All work and no play', description: 'makes Jack a dull boy.', likes: 23 }
		]

		return {
			topics: TOPICS
		}
	},

	render: function() {
		return (
			<div>
				<div className="container">
					<TopicAdd />
				</div>

				<TopicForm />

				<br />
				<br />

				<Topics topics={ this.state.topics }/>
			</div>
		)
	}

})

module.exports = TopicsApp
