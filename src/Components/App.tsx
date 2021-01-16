import React, { useCallback, useEffect, useState, useRef } from 'react';

import GlobalStyle from '../Styles/GlobalStyle';
import Header from './Header';
import Input from './Input';
import ToDoList from './ToDoList';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

type ToDo = {
	isChecked: boolean;
	isPinned: boolean;
	title: string;
	content: string;
	id: number;
};

function App() {
	const [items, setItems] = useState<ToDo[]>([
		{ isChecked: true, isPinned: true, title: 'ToDo 만들기', content: '일요일까지', id: 1 },
		{ isChecked: false, isPinned: true, title: '독서', content: '퀀트투자', id: 2 },
		{ isChecked: false, isPinned: false, title: '골방.dev 회의', content: '일요일 4시', id: 3 },
	]);
	const nextId = useRef(4);

	const onCheck = useCallback(
		(id: number) => {
			setItems(
				items.map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item))
			);
		},
		[items]
	);

	const onRemove = useCallback(
		(id: number) => {
			setItems(items.filter((item) => item.id !== id));
		},
		[items]
	);

	const onInsert = useCallback(
		(title: string, content: string) => {
			let item: ToDo = {
				title: title,
				content: content,
				id: nextId.current,
				isChecked: false,
				isPinned: false,
			};
			setItems(items.concat(item));
			nextId.current = nextId.current + 1;
		},
		[items]
	);

	const onPin = useCallback(
		(id: number) => {
			setItems(
				items.map((item) => (item.id === id ? { ...item, isPinned: !item.isPinned } : item))
			);
		},
		[items]
	);

	return (
		<Container>
			<GlobalStyle />
			<Header />
			<Input onInsert={onInsert} />
			<ToDoList onCheck={onCheck} onPin={onPin} onRemove={onRemove} items={items} />
		</Container>
	);
}

export default App;
