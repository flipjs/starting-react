/**
 * @jsx React.DOM
 */

var React = require('react')

var Topic = React.createClass({

	like: function(newCount) {
		var topic = {
			key: this.props.key,
			title: this.props.title,
			description: this.props.desc,
			likes: newCount
		}
		this.props.onLike(topic)
	},

	onLike: function() {
		var count = parseInt(this.props.likes, 10)
		var newCount = count + 1
		this.like(newCount)
	},

	onUnlike: function() {
		var count = parseInt(this.props.likes, 10)
		var newCount = count - 1
		this.like(newCount)
	},

	render: function() {
		var badgeColor = this.props.likes >= 0 ? '#00f' : '#f00'
		var style = {
			"background-color": badgeColor
		}
		return (
			<li key={this.props.key} className="list-group-item">
				<span className="badge" style={style}>{ this.props.likes }</span>
				<h4>{ this.props.title }</h4>
				<span>{ this.props.desc }</span>
				<span className="pull-right">
					<button id="up" className="btn btn-sm btn-primary" onClick={this.onLike}>&uarr;</button>
					<button id="down" className="btn btn-sm btn-primary" onClick={this.onUnlike}>&darr;</button>
				</span>
			</li>
		)
	}

})

module.exports = Topic
