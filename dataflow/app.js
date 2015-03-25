/** @jsx React.DOM */

var MessageBox = React.createClass({

	handleAdd: function(e) {
		var newMessage = this.refs.newMessage.getDOMNode().value
		var newMessages = this.state.messages.concat([newMessage])
		this.setState({ messages: newMessages })
		this.refs.newMessage.getDOMNode().value = ''
	},

	getInitialState: function() {
		return {
			isVisible: true,
			messages: [
				'This is the day',
				'Your life will surely change',
				'Life\'s an ocean',
				'Too much commotion'
			]
		}
	},

	deleteMessage: function(message) {
		var newMessages = this.state.messages
		var index = newMessages.indexOf(message)
		newMessages.splice(index, 1)
		this.setState({ messages: newMessages})
	},

	render: function() {
		var inlineStyles = {
			display: this.state.isVisible ? 'block' : 'none'
		}

		// var subMessage = 'Life is an ocean.'
		var subMessage = null
		var that = this
		var messages = this.state.messages.map(function(msg) {
			return (
				<SubMessage message={msg} onDelete={that.deleteMessage} />
			)
		})

		return (
			<div className="container jumbotron" style={inlineStyles}>
				<h1>Hello, Planet Mars</h1>
				<input ref="newMessage" type="text" />
				<button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
				{messages}
			</div>
		)
	}
})

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

var reactComponent = React.renderComponent(
	<MessageBox />,
	document.getElementById('app'),
	function() {
	console.log('First component')
	}
)

