/** @jsx React.DOM */

var List = React.createClass({

	filterList: function(e) {
		var updatedList = this.state.initialItems
		updatedList = updatedList.filter(function(item) {
			return item.toLowerCase().search(
				e.target.value.toLowerCase()) !== -1
		})
		this.setState({ items: updatedList })
	},

	componentWillMount: function() {
		this.setState({ items: this.state.initialItems })
	},

	getInitialState: function() {
		return {
			initialItems: [
				'Robert Downey Jr.',
				'Mark Rufallo',
				'Chris Hemsworth',
				'Samuel L. Jackson',
				'Jeremy Remner'
			],
			items: []
		}
	},

	render: function() {
		return (
			<div className="filter-list">
				<input type="text" placeholder="Search" onChange="{this.filterList}" />
				<Items items={this.state.items} />
			</div>
		)
	}
})

var Items = React.createClass({
	render: function() {
		return (
			<ul>
			{
				this.props.items.map(function(item) {
					return <li key={item}>{item}</li>
				})
			}
			</ul>
		)
	}
})

React.renderComponent(
	<List />, document.getElementById('app')
)
