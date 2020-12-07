import './App.css';
import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListIcon from '@material-ui/icons/List';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { v1 as uuid } from 'uuid';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
}));

function App() {
	const items = [];
	const classes = useStyles();
	const [itemList, updateItemList] = useState(items);
	const [item, updateItem] = useState('');
	const [editItem, updateEditState] = useState(false);
	const [id, updateId] = useState(uuid());
	//const item = '';

	function handleSubmit(e) {
		e.preventDefault();
		const newItem = {
			id: id,
			title: item,
		};
		const updatedItems = [...itemList, newItem];
		updateItemList(updatedItems);
		updateItem('');
		updateId(uuid());
		updateEditState(false);
		//console.log('Submit: ' + newItem.id + ',' + newItem.title);
	}

	function handleChange(e) {
		updateItem(e.target.value);
	}

	function clearList() {
		updateItemList([]);
	}

	function handleEdit(id) {
		const filteredItems = itemList.filter((item) => item.id !== id);
		const selectedItem = itemList.find((item) => item.id === id);
		//console.log('Selected Item: ' + selectedItem);
		updateItemList(filteredItems);
		updateItem(selectedItem.title);
		updateId(id);
		updateEditState(true);
	}

	function handleDelete(id) {
		const filteredItems = itemList.filter((item) => item.id !== id);
		updateItemList(filteredItems);
	}
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<ListIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Todo List
				</Typography>
				<TodoInput
					item={item}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					editItem={editItem}
				/>
				<TodoList
					itemList={itemList}
					clearList={clearList}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			</div>
		</Container>
	);
}

export default App;
