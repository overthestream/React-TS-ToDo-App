import React, { useCallback, useEffect, useState, useRef } from 'react';
import axios from 'axios';

import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header';
import Input from './Components/Input';
import ToDoList from './Components/ToDoList';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
type ToDo = {
	isChecked: boolean;
	isPinned: boolean;
	title: string;
	description: string;
	id: number;
};

function App() {
	const [items, setItems] = useState<ToDo[]>([]);

	useEffect(() => {
		fetch('http://localhost:3000/items')
			.then((res) => res.json())
			.then((toDoItems: ToDo[]) => {
				setItems(toDoItems);
			})
			.catch((err) => console.log(err));
	}, []);

	const nextId = useRef(4);

	const onCheck = useCallback(
		(id: number) => {
			axios
				.put(`http://localhost:3000/check/${id}`)
				.then((res) => alert(res))
				.catch((err) => console.log(err));
			setItems(
				items.map((item) => (item.id === id ? { ...item, isChecked: !item.isChecked } : item))
			);
		},
		[items]
	);

	const onRemove = useCallback(
		(id: number) => {
			setItems(items.filter((item) => item.id !== id));
			axios
				.delete(`http://localhost:3000/delete/${id}`)
				.then((res) => alert(res))
				.catch((err) => console.log(err));
		},
		[items]
	);

	const onInsert = useCallback(
		(title: string, content: string) => {
			let item: ToDo = {
				title: title,
				description: content,
				id: nextId.current,
				isChecked: false,
				isPinned: false,
			};
			axios
				.post(`http://localhost:3000/add/${title}/${content}`)
				.then((res) => alert(res))
				.catch((err) => console.log(err));

			setItems(items.concat(item));
			nextId.current = nextId.current + 1;
		},
		[items]
	);

	const onPin = useCallback(
		(id: number) => {
			axios
				.put(`http://localhost:3000/pin/${id}`)
				.then((res) => alert(res))
				.catch((err) => console.log(err));
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
