/**
 * @jsx React.DOM
 */

var React = require('react')
var TopicAdd = require('./TopicAdd')
var TopicForm = require('./TopicForm')
var Topics = require('./Topics')
var _ = require('lodash')

var TopicsApp = React.createClass({

	getInitialState: function() {
		var TOPICS = [
			{ key: '1', title: 'The quick brown fox', description: 'jumps over the lazy dog.', likes: 34 },
			{ key: '2', title: 'This is the day', description: 'your life will surely change.', likes: 56 },
			{ key: '3', title: 'All work and no play', description: 'makes Jack a dull boy.', likes: 23 }
		]

		return {
			topics: TOPICS,
			formDisplayed: false
		}
	},

	onToggleForm: function() {
		this.setState({
			formDisplayed: !this.state.formDisplayed
		})
	},

	onNewTopic: function(newTopic) {
		var newTopics = this.state.topics.concat([newTopic])
		this.setState({
			topics: newTopics,
			formDisplayed: false,
			key: this.state.topics.length
		})
	},

	onLike: function(topic) {
		var topics = _.uniq(this.state.topics)
		var index = _.findIndex(topics, function(topics) {
			return topics.key === topic.key
		})
		var oldObj = topics[index]
		var newTopics = _.pull(topics, oldObj)
		newTopics.push(topic)
		this.setState({ topics: newTopics })
	},

	render: function() {
		return (
			<div>
				<div className="container">
					<TopicAdd displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
				</div>

				<TopicForm displayed={this.state.formDisplayed} onNewTopic={this.onNewTopic} />

				<br />
				<br />

				<Topics topics={this.state.topics} onLike={this.onLike} />
			</div>
		)
	}

})

module.exports = TopicsApp
