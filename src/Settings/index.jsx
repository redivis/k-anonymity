import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

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

import countries from 'helpers/countryList';
import roadOptions from 'helpers/roadOptions';

import * as styles from './styles.css';

function getRegionHeader(countryName) {
	const countryObject = countries.find(({ name }) => name === countryName);
	if (countryObject) {
		return countryObject.code;
	} else {
		return countryName;
	}
}

const tableReferenceRegex = /^\/tables\/([^.]+)\.([^.]+)\.([^.]+)$/i;
function getTableReference({ uri = '', name }) {
	const match = uri.match(tableReferenceRegex);
	if (match) {
		const fullReference = {
			ownerReference: match[1],
			parentEntityReference: match[2].split(':')[0],
			qualifiedParentEntityReference: match[2],
			tableReference: match[3].split(':')[0],
			qualifiedTableReference: match[3],
		};
		return fullReference.tableReference;
	} else {
		return name;
	}
}

const useFormStyles = makeStyles({
	formControl: {
		width: '100%',
	},
	formControlLabel: {
		marginTop: 7,
		marginBottom: 15,
	},
	radioGroup: {
		marginLeft: 11,
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
	owner,
	setOwner,
	parentEntity,
	setParentEntity,
	table,
	setTable,
	region,
	setRegion,
	subregion,
	setSubregion,
	latitudeIndicator,
	setLatitudeIndicator,
	longitudeIndicator,
	setLongitudeIndicator,
	roads,
	setRoads,
	coverageTravelTime,
	setCoverageTravelTime,
	resolution,
	setResolution,
	showPoints,
	setShowPoints,
	showPopulationDensity,
	setShowPopulationDensity,
	pointRadius,
	setPointRadius,
	colorScale,
	setColorScale,
	tables,
	isFetchingTables,
	tablesError,
	collection,
	isFetchingCollection,
	collectionError,
	isFetchingMap,
	mapDataError,
}) {
	const resetLatAndLong = useCallback(() => {
		setLatitudeIndicator('');
		setLongitudeIndicator('');
	}, []);

	const handleSetOwner = useCallback((e) => {
		setOwner(e.target.value);
		resetLatAndLong();
	}, []);

	const handleSetParentEntity = useCallback((e) => {
		setParentEntity(e.target.value);
		resetLatAndLong();
	}, []);

	const handleSetTable = useCallback((e) => {
		setTable(e.target.value);
		resetLatAndLong();
	}, []);

	const handleSetRegion = useCallback((e) => {
		setRegion(e.target.value);
	}, []);

	const handleSetSubregion = useCallback((e) => {
		setSubregion(e.target.value);
	}, []);

	const handleSetLatitudeIndicator = useCallback((e) => {
		setLatitudeIndicator(e.target.value);
	}, []);

	const handleSetLongitudeIndicator = useCallback((e) => {
		setLongitudeIndicator(e.target.value);
	}, []);

	const handleSetRoads = useCallback(
		(e) => {
			const nextSelectedRoadsSet = new Set(roads);
			if (e.target.checked) {
				nextSelectedRoadsSet.add(e.target.name);
			} else {
				nextSelectedRoadsSet.delete(e.target.name);
			}
			setRoads([...nextSelectedRoadsSet]);
		},
		[roads],
	);

	const handleSetCoverageTravelTime = useCallback((e) => {
		setCoverageTravelTime(e.target.value);
	}, []);

	const handleSetResolution = useCallback((e) => {
		setResolution(e.target.value);
	}, []);

	const handleSetShowPoints = useCallback((e) => {
		setShowPoints(e.target.checked);
	}, []);

	const handleSetShowPopulationDensity = useCallback((e) => {
		setShowPopulationDensity(e.target.checked);
	}, []);

	const handleSetPointRadius = useCallback((e) => {
		setPointRadius(e.target.value);
	}, []);

	const formClasses = useFormStyles();

	const selectedRoadsSet = new Set(roads);
	const useCustomRoads = region.toLowerCase() === 'united states' && !subregion;

	const [showTableOptions, setShowTableOptions] = useState(true);
	const [showRegion, setShowRegion] = useState(true);
	const [showLatLong, setShowLatLong] = useState(!!(latitudeIndicator && longitudeIndicator));
	const [showRoads, setShowRoads] = useState(false);
	const [showSettings, setShowSettings] = useState(false);

	const selectedListTable = tables.find(({ uri, name }) => getTableReference({ uri, name }) === table.toLowerCase());

	return (
		<div className={styles.sideBarWrapper}>
			<div className={styles.bodyWrapper}>
				<div className={styles.sectionWrapper}>
					<FormControl component={'fieldset'} error={!!collectionError} className={formClasses.formControl}>
						<ListItem
							button={true}
							onClick={() => setShowTableOptions(!showTableOptions)}
							className={formClasses.listItem}
						>
							<ListItemText className={formClasses.listItemText}>{'Data table'}</ListItemText>
							{(isFetchingCollection || isFetchingTables) && (
								<CircularProgress size={20} className={formClasses.pending} />
							)}
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
											onChange={handleSetOwner}
											fullWidth={true}
											variant={'outlined'}
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
											onChange={handleSetParentEntity}
											fullWidth={true}
											variant={'outlined'}
											placeholder={'dataset or project identifier'}
										/>
									}
									className={formClasses.formControlLabel}
								/>
								<FormControlLabel
									control={
										tables.length ? (
											<TextField
												name={'table'}
												label={'Table'}
												value={selectedListTable ? getTableReference(selectedListTable) : ''}
												select={true}
												onChange={handleSetTable}
												fullWidth={true}
												variant={'outlined'}
												placeholder={'table identifier'}
											>
												{tables.map(({ uri, name }) => {
													const tableReference = getTableReference({ uri, name });
													return (
														<MenuItem key={tableReference} value={tableReference}>
															{tableReference}
														</MenuItem>
													);
												})}
												}
											</TextField>
										) : (
											<TextField
												name={'table'}
												label={'Table'}
												value={table}
												onChange={handleSetTable}
												fullWidth={true}
												variant={'outlined'}
												placeholder={'table identifier'}
											/>
										)
									}
									className={formClasses.formControlLabel}
								/>
							</FormGroup>
							<FormHelperText>{collectionError?.message || tablesError?.message || ''}</FormHelperText>
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
							{region && (
								<Chip
									size={'small'}
									label={`${getRegionHeader(region)}${subregion ? ` (${subregion})` : ''}`}
								/>
							)}
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
											onChange={handleSetRegion}
											fullWidth={true}
											variant={'outlined'}
										>
											{countries.map(({ name }) => (
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
											label={'Subregion (optional)'}
											value={subregion}
											onChange={handleSetSubregion}
											fullWidth={true}
											variant={'outlined'}
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
								invisible={isFetchingCollection || !!(latitudeIndicator && longitudeIndicator)}
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
											onChange={handleSetLatitudeIndicator}
											fullWidth={true}
											variant={'outlined'}
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
											onChange={handleSetLongitudeIndicator}
											fullWidth={true}
											variant={'outlined'}
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
								{!isFetchingCollection && (!latitudeIndicator || !longitudeIndicator) && (
									<FormHelperText>{`Select ${
										!latitudeIndicator
											? `latitude ${!longitudeIndicator ? 'and longitude' : ''}`
											: 'longitude'
									} variable${!latitudeIndicator && !longitudeIndicator ? 's' : ''}`}</FormHelperText>
								)}
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
							<Tooltip
								title={
									useCustomRoads ? (
										`The ${region} map uses a custom roads configuration`
									) : (
										<React.Fragment>
											<a
												href={'https://wiki.openstreetmap.org/wiki/Key:highway'}
												target={'_blank'}
											>
												{'Learn more'}
											</a>
											<span>{' about OpenStreetMap roads'}</span>
										</React.Fragment>
									)
								}
								interactive={true}
								placement={'bottom-start'}
								arrow={true}
							>
								<Chip size={'small'} label={useCustomRoads ? 'Custom' : selectedRoadsSet.size} />
							</Tooltip>
							{showRoads ? <ExpandMore edge={'end'} /> : <ExpandLess edge={'end'} />}
						</ListItem>
						<Collapse in={showRoads} className={formClasses.collapse}>
							<FormGroup>
								{roadOptions.map(({ label, name }) => (
									<FormControlLabel
										key={name}
										disabled={useCustomRoads}
										control={
											<Checkbox
												key={name}
												name={name}
												checked={!useCustomRoads && selectedRoadsSet.has(name)}
												indeterminate={useCustomRoads}
												color={'primary'}
												onChange={handleSetRoads}
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
											onChange={handleSetCoverageTravelTime}
											fullWidth={true}
											variant={'outlined'}
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
											onChange={handleSetResolution}
											className={formClasses.radioGroup}
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
											onChange={handleSetShowPoints}
										/>
									}
									label={'Show points'}
									className={formClasses.formControlLabel}
								/>
								<FormControlLabel
									control={
										<Switch
											name={'showPopulationDensity'}
											checked={showPopulationDensity}
											onChange={handleSetShowPopulationDensity}
										/>
									}
									label={'Show population density'}
									className={formClasses.formControlLabel}
								/>
								<FormControlLabel
									control={
										<TextField
											name={'pointRadius'}
											label={'Point radius (px)'}
											value={pointRadius}
											onChange={handleSetPointRadius}
											fullWidth={true}
											variant={'outlined'}
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
	owner: PropTypes.string,
	setOwner: PropTypes.func,
	parentEntity: PropTypes.string,
	setParentEntity: PropTypes.func,
	table: PropTypes.string,
	setTable: PropTypes.func,
	tables: PropTypes.arrayOf(PropTypes.object),
	region: PropTypes.string,
	setRegion: PropTypes.func,
	subregion: PropTypes.string,
	setSubregion: PropTypes.func,
	latitudeIndicator: PropTypes.string,
	setLatitudeIndicator: PropTypes.func,
	longitudeIndicator: PropTypes.string,
	setLongitudeIndicator: PropTypes.func,
	roads: PropTypes.arrayOf(PropTypes.string),
	setRoads: PropTypes.func,
	coverageTravelTime: PropTypes.string,
	setCoverageTravelTime: PropTypes.func,
	resolution: PropTypes.string,
	setResolution: PropTypes.func,
	showPoints: PropTypes.bool,
	setShowPoints: PropTypes.func,
	showPopulationDensity: PropTypes.bool,
	setShowPopulationDensity: PropTypes.func,
	pointRadius: PropTypes.string,
	setPointRadius: PropTypes.func,
	colorScale: PropTypes.arrayOf(PropTypes.string),
	setColorScale: PropTypes.func,
	collection: PropTypes.object,
	isFetchingCollection: PropTypes.bool,
	collectionError: PropTypes.object,
	mapDataError: PropTypes.object,
};
