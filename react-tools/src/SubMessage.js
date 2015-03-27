/** @jsx React.DOM */

var React = require('react')

var SubMessage = React.createClass({
	propTypes: {
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function() {
		return {
			message: 'The quick fox.'
		}
	},

	handleDelete: function() {
		this.props.onDelete(this.props.message)
	},

	render: function() {
		return (
			<div>
				{this.props.message}
				<button onClick={this.handleDelete} className="btn btn-danger">X</button>
			</div>
		)
	}
})

module.exports = SubMessage
