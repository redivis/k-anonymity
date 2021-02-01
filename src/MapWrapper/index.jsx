import * as styles from './styles.css';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Map from '../Map';
import Settings from '../Settings';

class MapWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const {
			location: { search },
			history,
		} = this.props;
	}

	static getDerivedStateFromProps(props, state) {
		const {
			location: { search },
		} = props;

		return null;
	}

	componentDidUpdate(prevProps) {
		const {
			location: { search },
		} = this.props;
	}

	render() {
		const {
			location: { search },
		} = this.props;
		const {} = this.state;

		return (
			<div className={styles.mapWrapper}>
				<div className={styles.settings}>{<Settings />}</div>
				<div className={styles.map}>
					<Map />
				</div>
			</div>
		);
	}
}

export default withRouter(MapWrapper);
