import React from 'react';
import Agent from './../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		let agent = new Agent({id: this.props.params.agentId});
		return {agent: agent};
	},
	componentDidMount: function() {
		this.state.agent.on('change', this.update);
		this.state.agent.fetch();
	},
	componentWillUnmount: function() {
		this.state.agent.off('change');
	},
	render: function() {
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/agents">Agents</a>
				<h1>Agent Page for {this.state.agent.get('firstName')} {this.state.agent.get('lastName')}</h1>
				<div>
					<img className="detailsPhoto" src={this.state.agent.get('image')}/>
				</div>
				<div className="agentDetailsBlock">
					<ul>
						<li>{this.state.agent.get('bio')}</li>
						<li>Phone: {this.state.agent.get('phone')}</li>
						<li>Email: {this.state.agent.get('email')}</li>
						<li><a href={this.state.agent.get('facebook')}><i className="fa fa-facebook-square"></i></a></li>
						<li><a href={this.state.agent.get('twitter')}><i className="fa fa-twitter-square"></i></a></li>
						<li><a href={this.state.agent.get('linkedin')}><i className="fa fa-linkedin-square"></i></a></li>
					</ul>
				</div>
			</div>
			);
	},
	update: function(agent) {
		this.setState({agent: agent});
	}
});