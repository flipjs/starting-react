/**
 * @jsx React.DOM
 */

var React = require('react')
var Topic = require('./Topic')

var Topics = React.createClass({

	render: function() {

		var topics = this.props.topics.map(function(topic) {
			return <Topic title={ topic.title } desc={ topic.description } likes={ topic.likes } />
		})

		return (
			<ul className="list-group container">
				{topics}
			</ul>
		)
	}

})

module.exports = Topics
