import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import styled from 'styled-components';
import Responsive from './Responsive';

const ItemList = styled(Responsive)`
	height: fit-content;
	margin-top: 2rem;
	box-shadow: 2px 2px 2px 2px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;
`;

type ToDo = {
	isChecked: boolean;
	isPinned: boolean;
	title: string;
	description: string;
	id: number;
};

type ListProps = {
	items: ToDo[];
	onCheck: (id: number) => void;
	onPin: (id: number) => void;
	onRemove: (id: number) => void;
};

const ToDoList = ({ items, onCheck, onPin, onRemove }: ListProps) => {
	const [sorted, setSorted] = useState<ToDo[]>([]);
	useEffect(() => {
		let pinnedNotChecked: ToDo[] = [];
		let pinnedChecked: ToDo[] = [];
		let notPinnedNotChecked: ToDo[] = [];
		let notPinnedChecked: ToDo[] = [];

		pinnedNotChecked = items.filter((item) => item.isPinned && !item.isChecked);
		pinnedChecked = items.filter((item) => item.isPinned && item.isChecked);
		notPinnedNotChecked = items.filter((item) => !item.isChecked && !item.isPinned);
		notPinnedChecked = items.filter((item) => !item.isPinned && item.isChecked);

		pinnedNotChecked = pinnedNotChecked.concat(pinnedChecked);
		pinnedNotChecked = pinnedNotChecked.concat(notPinnedNotChecked);
		pinnedNotChecked = pinnedNotChecked.concat(notPinnedChecked);
		setSorted(pinnedNotChecked);
	}, [items]);
	return (
		<ItemList>
			{sorted.map((item, index) => (
				<ToDoItem onCheck={onCheck} onPin={onPin} onRemove={onRemove} item={item} key={index} />
			))}
		</ItemList>
	);
};

export default ToDoList;
