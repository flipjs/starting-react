/** @jsx React.DOM */

var App = React.createClass({
	getInitialState: function() {
		return {
			todoList: [
				'buy food',
				'fetch kids',
				'walk dog'
			]
		}
	},

	addTodo: function() {
		var newTodos = this.state.todoList.concat([this.refs.newTodo.getDOMNode().value])
		this.setState({ todoList: newTodos })
		this.refs.newTodo.getDOMNode().value = ''
	},

	deleteTodo: function(todo) {
		var newTodos = this.state.todoList
		var index = newTodos.indexOf(todo)
		newTodos.splice(index, 1)
		this.setState({ todoList: newTodos})
	},

	render: function() {
		var todos = this.state.todoList.map(function(data) {
			return(<Todo todo={data} onDelete={this.deleteTodo}/>)
		}.bind(this))

		return (
			<div>
				<TodoTitle />
				<div className="container">
					<input type="text" ref="newTodo" />&nbsp;
					<button type="button" className="btn btn-primary" onClick={this.addTodo}>Add</button>
				</div>
				{todos}
			</div>
		)
	}
})

var TodoTitle = React.createClass({
	render: function() {
		return (
			<div className="jumbotron text-center">
				<h1>The Great Todo List</h1>
			</div>
		)
	}
})

var Todo = React.createClass({
	getDefaultProps: function() {
		return {
			todo: 'buy food'
		}
	},

	handleDelete: function() {
		this.props.onDelete(this.props.todo)
	},

	render: function() {
		return (
			<div>
				<p>
					{this.props.todo}&nbsp;
					<button onClick={this.handleDelete} className="btn btn-danger">X</button>
				</p>
			</div>
		)
	}
})

var rrc = React.renderComponent(<App />, document.getElementById('app'))
