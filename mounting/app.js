/** @jsx React.DOM */

var Dashboard = React.createClass({

	componentWillMount: function() {
		console.log('will mount...')
	},

	componentDidMount: function() {
		console.log('did mount...')
		this.loadData(this.props.url).then(function(data) {
			this.setState({
				metric: data
			})
		}.bind(this))
	},

	componentWillReceiveProps: function(nextProps) {
		var lastUrl = this.props.url
		console.log('oldprops: ' + lastUrl + ' newprops: ' + nextProps.url)
		this.loadData(nextProps.url).then(function(data) {
			this.setState({
				metric: data,
				lastRoute: lastUrl
			})
		}.bind(this))
	},

	// controls re-rendering. if true, then re-render.
	shouldComponentUpdate: function(nextProps, nextState) {
		return nextState.metric > 100
	},

	loadData: function(url) {
		return $.get('https://gsr-demo.firebaseio-demo.com/' + url + '.json')
	},

	componentWillUnmount: function() {
		// when React.unmount... is called,
		// React.unmountComponentAtNode(document.getElementById('app'))
		// this function will be fired
		// then do some clean up here
	},

	getInitialState: function() {
		return {
			metric: 0,
			lastRoute: ''
		}
	},

	render: function() {
		return (
			<div className="jumbotron">
				<small>{this.state.lastRoute}</small>
				<h2>{this.state.metric}</h2>
			</div>
		)
	}
})

var dashComponent = React.renderComponent(
	<Dashboard url="metric" />,
	document.getElementById('app')
)

// this will fire componentWillReceiveProps()
dashComponent.setProps({ url: 'metric2' })
