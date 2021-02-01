import React from 'react';
import { logout, login } from '../helpers/auth';
import * as styles from './styles.css';

export default function Settings({
	isLoggedIn = false,
	//	props
}) {
	return (
		<div className={styles.sideBarWrapper}>
			<div className={styles.bodyWrapper}>
				<div className={styles.sectionWrapper}>
					{!isLoggedIn && <button onClick={login}>Sign in to Redivis</button>}
					{isLoggedIn && <button onClick={logout}>Sign out</button>}
				</div>
				<div className={styles.sectionWrapper}></div>
			</div>
		</div>
	);
}
