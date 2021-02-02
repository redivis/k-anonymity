import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText'
import { grey } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';

import { logout, login, getCredentials } from 'helpers/auth';
import countries from 'helpers/countryList';
import roadOptions from 'helpers/roadOptions';

import * as styles from './styles.css';

const useFormStyles = makeStyles({
	formControl: {
		width: '100%',
	},
	pending: {
		color: grey[500],
		marginRight: 5,
	},
	collapse: {
		entered: {
			marginBottom: 10,
		},
	},
	listItem: {
		width: 'calc(100% + 60px)',
		color: grey[900],
		paddingLeft: 30,
		marginLeft: -30,
		marginRight: -30,
	},
	listItemText: {
		primary: {
			fontWeight: 'bold',
		},
	},
	helperText: {
		color: grey[500],
		marginBottom: 0,
		'&:not(:last-of-type)': {
			marginBottom: 0,
		},
	},
});

export default function Settings({
	tableState,
	setTableState,
	mapState,
	setMapState,
}) {
	const accessToken = getCredentials();

	const handleSignIn = useCallback(async () => {
		try {
			await login();
			window.location.assign(window.location.href);
		} catch (e){
			console.error(e);
		}
	}, []);

	const handleSignOut = useCallback(async () => {
		logout();
		window.location.assign(window.location.href);
	}, []);

	const handleSetTableState = (e) => {
		setTableState({ ...tableState, [e.target.name]: e.target.value });
	};

	const handleSetMapState = (e) => {
		setMapState({ ...mapState, [e.target.name]: e.target.value });
	};

	const handleSetRoadState = (e) => {
		const nextSelectedRoadsSet = new Set([...selectedRoadsSet]);
		if (e.target.checked){
			nextSelectedRoadsSet.add(e.target.name);
		} else {
			nextSelectedRoadsSet.delete(e.target.name);
		}
		setMapState({ ...mapState, roads: [...nextSelectedRoadsSet] });
	};

	const [showTableOptions, setShowTableOptions] = useState(true);
	const [showRegion, setShowRegion] = useState(true);
	const [showLatLong, setShowLatLong] = useState(true);
	const [showRoads, setShowRoads] = useState(false);

	const formClasses = useFormStyles();

	const { owner, parentEntity, table } = tableState;
	const { region, subregion, latitude, longitude, roads } = mapState;

	const selectedRoadsSet = new Set(roads);

	const error = true;

	return (
		<div className={styles.sideBarWrapper}>
			<div className={styles.bodyWrapper}>
				<div className={styles.sectionWrapper}>
					{!accessToken && <Button variant={'contained'} color={'primary'} onClick={handleSignIn}>{'Sign in to Redivis'}</Button>}
					{!!accessToken && <Button onClick={handleSignOut}>{'Sign out'}</Button>}
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} className={formClasses.formControl}>
						<ListItem button={true} onClick={() => setShowTableOptions(!showTableOptions)} className={formClasses.listItem}>
							<ListItemText primary={'Data table'} className={formClasses.listItemText}/>
							{true && <CircularProgress className={formClasses.pending} />}
							{!!error && (
								<Chip size={'small'} label={'!'} />
							)}
							{showTableOptions ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showTableOptions} className={formClasses.collapse}>
							<FormGroup>
								<FormControlLabel
									control={
										<TextField
											name={'owner'}
											label={'Owner'}
											value={owner}
											onChange={handleSetTableState}
											fullWidth={true}
											placeholder={'username or organizationShortName'}
										/>
									}
								/>
								<FormControlLabel
									control={
										<TextField
											name={'parentEntity'}
											label={'Dataset/project'}
											value={parentEntity}
											onChange={handleSetTableState}
											fullWidth={true}
											placeholder={'dataset identifier or project identifier'}
										/>
									}
								/>
								<FormControlLabel
									control={
										<TextField
											name={'table'}
											label={'Table'}
											value={table}
											onChange={handleSetTableState}
											fullWidth={true}
											placeholder={'table identifier'}
										/>
									}
								/>
							</FormGroup>
						</Collapse>
					</FormControl>
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} className={formClasses.formControl}>
						<ListItem button={true} onClick={() => setShowRegion(!showRegion)} className={formClasses.listItem}>
							<ListItemText primary={'Region'} className={formClasses.listItemText}/>
							{true && <CircularProgress className={formClasses.pending} />}
							{showRegion ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showRegion} className={formClasses.collapse}>
							<FormHelperText className={formClasses.helperText}>{'Country'}</FormHelperText>
							<FormGroup>
								<FormControlLabel
									control={
										<TextField
											name={'region'}
											label={'Region'}
											value={region}
											select={true}
											onChange={handleSetMapState}
											fullWidth={true}
											placeholder={'country or region'}
										>
											{countries.map(({ name, code }) => (
												<MenuItem key={code} value={code}>
													{name}
												</MenuItem>
											))}
										</TextField>
									}
								/>
								<FormControlLabel
									control={
										<TextField
											name={'subregion'}
											label={'Subregion'}
											value={subregion}
											onChange={handleSetMapState}
											fullWidth={true}
										/>
									}
								/>
							</FormGroup>
						</Collapse>
					</FormControl>
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} className={formClasses.formControl}>
						<ListItem button={true} onClick={() => setShowLatLong(!showLatLong)} className={formClasses.listItem}>
							<ListItemText primary={'Lat. & long. variables'} className={formClasses.listItemText}/>
							{true && <CircularProgress className={formClasses.pending} />}
							{showLatLong ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showLatLong} className={formClasses.collapse}>
							<FormHelperText className={formClasses.helperText}>{'Country'}</FormHelperText>
							<FormGroup>
								<FormControlLabel
									control={
										<TextField
											name={'lat'}
											label={'Latitude'}
											value={latitude}
											select={true}
											onChange={handleSetMapState}
											fullWidth={true}
											placeholder={'Select variable'}
										>
											{countries.map(({ name, code }) => (
												<MenuItem key={code} value={code}>
													{name}
												</MenuItem>
											))}
										</TextField>
									}
								/>
								<FormControlLabel
									control={
										<TextField
											name={'long'}
											label={'Longitude'}
											value={longitude}
											select={true}
											onChange={handleSetMapState}
											fullWidth={true}
											placeholder={'Select variable'}
										>
											{countries.map(({ name, code }) => (
												<MenuItem key={code} value={code}>
													{name}
												</MenuItem>
											))}
										</TextField>
									}
								/>
							</FormGroup>
						</Collapse>
					</FormControl>
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} className={formClasses.formControl}>
						<ListItem button={true} onClick={() => setShowRoads(!showRoads)} className={formClasses.listItem}>
							<ListItemText primary={'Roads'} className={formClasses.listItemText}/>
							{true && <CircularProgress className={formClasses.pending} />}
							{showRoads ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showRoads} className={formClasses.collapse}>
							<FormGroup>
								{roadOptions.map(({ label, name }) => (
									<FormControlLabel
										control={
											<Checkbox
												name={name}
												checked={selectedRoadsSet.has(name)}
												onChange={handleSetRoadState}
											/>
										}
										label={label}
									/>
								))}
							</FormGroup>
						</Collapse>
					</FormControl>
				</div>
			</div>
		</div>
	);
}

Settings.propTypes = {
	tableState: PropTypes.object,
	setTableState: PropTypes.func,
	mapState: PropTypes.object,
	setMapState: PropTypes.func,
	roadOptions: PropTypes.arrayOf(PropTypes.object),
}
