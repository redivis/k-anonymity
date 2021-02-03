import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import { grey } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
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
	formControlLabel: {
		marginLeft: 10,
		marginBottom: 10,
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
	settingsState,
	setSettingsState,
	collection,
	isFetchingCollection,
	collectionError,
	isFetchingMap,
	mapDataError,
}) {
	const accessToken = getCredentials();

	const handleSignIn = useCallback(async () => {
		try {
			await login();
			window.location.assign(window.location.href);
		} catch (e) {
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
		if (e.target.checked) {
			nextSelectedRoadsSet.add(e.target.name);
		} else {
			nextSelectedRoadsSet.delete(e.target.name);
		}
		setMapState({ ...mapState, roads: [...nextSelectedRoadsSet] });
	};

	const handleSetSettingsState = (e) => {
		setSettingsState({ ...settingsState, [e.target.name]: e.target.value });
	};

	const handleSetSettingsBooleanState = (e) => {
		setSettingsState({ ...settingsState, [e.target.name]: e.target.checked });
	};

	const [showTableOptions, setShowTableOptions] = useState(true);
	const [showRegion, setShowRegion] = useState(true);
	const [showLatLong, setShowLatLong] = useState(true);
	const [showRoads, setShowRoads] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	const formClasses = useFormStyles();

	const { owner, parentEntity, table } = tableState;
	const { region, subregion, latitudeIndicator, longitudeIndicator, roads } = mapState;
	const {
		coverageTravelTime,
		resolution,
		showPoints,
		showPopulationDensity,
		pointRadius,
		colorScale,
	} = settingsState;

	const selectedRoadsSet = new Set(roads);

	return (
		<div className={styles.sideBarWrapper}>
			<div className={styles.bodyWrapper}>
				<div className={styles.sectionWrapper}>
					{!accessToken && (
						<Button variant={'contained'} color={'primary'} onClick={handleSignIn}>
							{'Sign in to Redivis'}
						</Button>
					)}
					{!!accessToken && <Button onClick={handleSignOut}>{'Sign out'}</Button>}
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} error={!!collectionError} className={formClasses.formControl}>
						<ListItem
							button={true}
							onClick={() => setShowTableOptions(!showTableOptions)}
							className={formClasses.listItem}
						>
							<ListItemText className={formClasses.listItemText}>{'Data table'}</ListItemText>
							{isFetchingCollection && <CircularProgress size={20} className={formClasses.pending} />}
							{table && (
								<Badge badgeContent={''} variant={'dot'} color={'error'} invisible={!collectionError}>
									<Chip size={'small'} label={`${parentEntity}.${table}`} />
								</Badge>
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
									className={formClasses.formControlLabel}
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
									className={formClasses.formControlLabel}
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
									className={formClasses.formControlLabel}
								/>
							</FormGroup>
							<FormHelperText>{collectionError?.message || ''}</FormHelperText>
						</Collapse>
					</FormControl>
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} error={!!mapDataError} className={formClasses.formControl}>
						<ListItem
							button={true}
							onClick={() => setShowRegion(!showRegion)}
							className={formClasses.listItem}
						>
							<ListItemText primary={'Region'} className={formClasses.listItemText} />
							{isFetchingMap && <CircularProgress size={20} className={formClasses.pending} />}
							{region && <Chip size={'small'} label={`${region}${subregion ? `/${subregion}` : ''}`} />}
							{showRegion ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showRegion} className={formClasses.collapse}>
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
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</TextField>
									}
									className={formClasses.formControlLabel}
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
									className={formClasses.formControlLabel}
								/>
							</FormGroup>
							<FormHelperText>{mapDataError?.message || ''}</FormHelperText>
						</Collapse>
					</FormControl>
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl
						component={'fieldset'}
						required={true}
						error={!latitudeIndicator || !longitudeIndicator}
						className={formClasses.formControl}
					>
						<ListItem
							button={true}
							onClick={() => setShowLatLong(!showLatLong)}
							className={formClasses.listItem}
						>
							<ListItemText primary={'Latitude & longitude'} className={formClasses.listItemText} />
							{isFetchingCollection && <CircularProgress size={20} className={formClasses.pending} />}

							<Badge
								badgeContent={''}
								variant={'dot'}
								color={'error'}
								invisible={latitudeIndicator && longitudeIndicator}
							>
								<Chip
									size={'small'}
									label={`${latitudeIndicator || '_'}/${longitudeIndicator || '_'}`}
								/>
							</Badge>

							{showLatLong ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showLatLong} className={formClasses.collapse}>
							<FormGroup>
								<FormControlLabel
									control={
										<TextField
											name={'latitudeIndicator'}
											label={'Latitude'}
											value={latitudeIndicator}
											select={true}
											onChange={handleSetMapState}
											fullWidth={true}
											placeholder={'Select variable'}
										>
											{(collection?.indicators || []).map(({ variable: { name } = {} }) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</TextField>
									}
									className={formClasses.formControlLabel}
								/>
								<FormControlLabel
									control={
										<TextField
											name={'longitudeIndicator'}
											label={'Longitude'}
											value={longitudeIndicator}
											select={true}
											onChange={handleSetMapState}
											fullWidth={true}
											placeholder={'Select variable'}
										>
											{(collection?.indicators || []).map(({ variable: { name } = {} }) => (
												<MenuItem key={name} value={name}>
													{name}
												</MenuItem>
											))}
										</TextField>
									}
									className={formClasses.formControlLabel}
								/>
								<FormHelperText>{`Select ${
									!latitudeIndicator
										? `latitude ${!longitudeIndicator ? 'and longitude' : ''}`
										: 'longitude'
								} variable${!latitudeIndicator && !longitudeIndicator ? 's' : ''}`}</FormHelperText>
							</FormGroup>
						</Collapse>
					</FormControl>
				</div>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} className={formClasses.formControl}>
						<ListItem
							button={true}
							onClick={() => setShowRoads(!showRoads)}
							className={formClasses.listItem}
						>
							<ListItemText primary={'Roads'} className={formClasses.listItemText} />
							<Chip size={'small'} label={selectedRoadsSet.size} />
							{showRoads ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showRoads} className={formClasses.collapse}>
							<FormGroup>
								{roadOptions.map(({ label, name }) => (
									<FormControlLabel
										key={name}
										control={
											<Checkbox
												key={name}
												name={name}
												checked={selectedRoadsSet.has(name)}
												color={'primary'}
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
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} className={formClasses.formControl}>
						<ListItem
							button={true}
							onClick={() => setShowSettings(!showSettings)}
							className={formClasses.listItem}
						>
							<ListItemText primary={'Settings'} className={formClasses.listItemText} />
							{showSettings ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showSettings} className={formClasses.collapse}>
							<FormGroup>
								<FormControlLabel
									control={
										<TextField
											name={'coverageTravelTime'}
											label={'Coverage travel time (mins)'}
											value={coverageTravelTime}
											onChange={handleSetSettingsState}
											fullWidth={true}
											placeholder={'Minutes'}
										/>
									}
									className={formClasses.formControlLabel}
								/>
								<FormControlLabel
									control={
										<RadioGroup
											aria-label={'Resolution'}
											name={'resolution'}
											value={resolution}
											color={'primary'}
											onChange={handleSetSettingsState}
										>
											<FormHelperText className={formClasses.helperText}>
												{'Resolution'}
											</FormHelperText>
											<FormControlLabel control={<Radio />} value={'1024'} label={'1024'} />
											<FormControlLabel control={<Radio />} value={'2048'} label={'2048'} />
										</RadioGroup>
									}
									className={formClasses.formControlLabel}
								/>
								<FormControlLabel
									control={
										<Switch
											name={'showPoints'}
											checked={showPoints}
											onChange={handleSetSettingsBooleanState}
										/>
									}
									label={'Show points'}
								/>
								<FormControlLabel
									control={
										<Switch
											name={'showPopulationDensity'}
											checked={showPopulationDensity}
											onChange={handleSetSettingsBooleanState}
										/>
									}
									label={'Show population density'}
								/>
								<FormControlLabel
									control={
										<TextField
											name={'pointRadius'}
											label={'Point radius (px)'}
											value={pointRadius}
											onChange={handleSetSettingsState}
											fullWidth={true}
											placeholder={'px'}
										/>
									}
									className={formClasses.formControlLabel}
								/>
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
	settingsState: PropTypes.object,
	setSettingsState: PropTypes.func,
	collection: PropTypes.object,
	isFetchingCollection: PropTypes.bool,
	collectionError: PropTypes.object,
	mapDataError: PropTypes.object,
};
