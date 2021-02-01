import * as styles from './styles.css';

import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import MapWrapper from '../MapWrapper';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const CustomTitle = withStyles({
	root: {
		fontSize: 20,
	},
})(Typography);

const CustomSubTitle = withStyles({
	root: {
		marginLeft: 10,
		fontSize: 20,
		color: grey[600],
	},
})(Typography);

class App extends Component {
	constructor(props) {
		super(props);
		const { history } = props;
		let path = localStorage.getItem('path');
		if (path) {
			localStorage.removeItem('path');
			history.replace(`/${path}`);
		}
	}

	renderHeader = () => {
		return (
			<div className={styles.headerWrapper}>
				<div className={styles.header}>
					<CustomTitle component={'h4'}>{'Redivis Labs'}</CustomTitle>
					<CustomSubTitle component={'h4'}>{'Geospatial coverage analyzer'}</CustomSubTitle>
				</div>
			</div>
		);
	};

	renderBody = () => {
		return (
			<div className={styles.bodyWrapper}>
				<Switch>
					<Route component={MapWrapper} />
				</Switch>
			</div>
		);
	};

	render() {
		return (
			<div className={styles.appWrapper}>
				{this.renderHeader()}
				{this.renderBody()}
			</div>
		);
	}
}

export default withRouter(App);
