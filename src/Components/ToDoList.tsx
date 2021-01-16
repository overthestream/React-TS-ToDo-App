import React from 'react';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';
import Responsive from './Responsive';

const ItemList = styled(Responsive)`
	min-height: 40vw;
	max-height: 60vw;
	background-color: black;
	overflow-y: scroll;
`;

type ToDo = {
	isChecked: boolean;
	isPinned: boolean;
	title: string;
	content: string;
};

type ListProps = {
	items: ToDo[];
};

const ToDoList = ({ items }: ListProps) => {
	return (
		<ItemList>
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
		</ItemList>
	);
};

export default ToDoList;
