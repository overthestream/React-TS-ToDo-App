import React from 'react';
import Responsive from './Responsive';
import styled from 'styled-components';

const ItemContainer = styled(Responsive)`
	height: 10rem;
	width: 95%;
	margin-top: 1rem;
	border-radius: 20px;
	border-color: black;
	border: 2px dotted;
`;

const Title = styled.div<{ isChecked: boolean }>`
	text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`;
const Content = styled.div<{ isChecked: boolean }>`
	text-decoration: ${(props) => (props.isChecked ? 'line-through' : 'none')};
`;

type ToDo = {
	isChecked: boolean;
	isPinned: boolean;
	title: string;
	content: string;
	id: number;
};

type itemProps = {
	item: ToDo;
	onCheck: (id: number) => void;
	onPin: (id: number) => void;
	onRemove: (id: number) => void;
};

const ToDoItem = ({ item, onCheck, onPin, onRemove }: itemProps) => {
	return (
		<ItemContainer>
			<input
				type="checkbox"
				checked={item.isChecked ? true : false}
				onClick={() => onCheck(item.id)}
			/>
			<Title isChecked={item.isChecked}>{item.title}</Title>
			<Content isChecked={item.isChecked}>{item.content}</Content>
			<input
				type="checkbox"
				checked={item.isPinned ? true : false}
				onClick={() => onPin(item.id)}
			/>
			<button onClick={() => onRemove(item.id)} />
		</ItemContainer>
	);
};

export default ToDoItem;
