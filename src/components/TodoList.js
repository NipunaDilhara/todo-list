import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(2, 0, 2),
	},
	paper: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	table: {
		width: '100%',
	},
	main_cell: {
		width: '80%',
	},
	icon_cell: {
		width: '10%',
	},
}));

function TodoList({ itemList, clearList, handleEdit, handleDelete }) {
	const classes = useStyles();
	return (
		<div className={classes.paper}>
			{/* <TodoItem /> */}

			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableBody>
						{itemList.length === 0 ? (
							<TableRow>
								<TableCell component="th" scope="row">
									No Items Yet
								</TableCell>
							</TableRow>
						) : (
							itemList.map((item) => (
								<TableRow key={item.id}>
									<TableCell
										component="th"
										scope="row"
										className={classes.main_cell}
									>
										{item.title}
									</TableCell>
									<TableCell align="right" className={classes.icon_cell}>
										<EditIcon
											style={{ color: green[500] }}
											onClick={() => handleEdit(item.id)}
										/>
									</TableCell>
									<TableCell align="right" className={classes.icon_cell}>
										<DeleteIcon
											color="secondary"
											onClick={() => handleDelete(item.id)}
										/>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<Button
				type="button"
				fullWidth
				variant="contained"
				color="secondary"
				className={classes.button}
				onClick={clearList}
			>
				Clear List
			</Button>
		</div>
	);
}

export default TodoList;
