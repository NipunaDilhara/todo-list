import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	button: {
		margin: theme.spacing(2, 0, 2),
	},
	color_primary: {
		color: 'white',
		backgroundColor: theme.palette.primary.dark,
		'&:hover': {
			backgroundColor: blue[700],
		},
	},
	color_green: {
		color: 'white',
		backgroundColor: green[800],
		'&:hover': {
			backgroundColor: green[600],
		},
	},
}));

function TodoInput({ item, handleChange, handleSubmit, editItem }) {
	const classes = useStyles();
	const btn_color = editItem ? classes.color_green : classes.color_primary;
	return (
		<form onSubmit={handleSubmit} className={classes.form} noValidate>
			<Grid container>
				<Grid item xs={12}>
					<TextField
						variant="outlined"
						required
						fullWidth
						label="New Item"
						type="text"
						id="new_item"
						autoComplete="false"
						value={item}
						onChange={handleChange}
					/>
				</Grid>
			</Grid>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				className={clsx(classes.button, btn_color)}
			>
				{editItem ? 'Edit Item' : 'Add Item'}
			</Button>
		</form>
	);
}

export default TodoInput;
