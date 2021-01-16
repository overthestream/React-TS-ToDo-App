import React, { useState } from 'react';

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
};

function App() {
	const [items, setItems] = useState<ToDo[]>([
		{ isChecked: true, isPinned: true, title: 'ToDo 만들기', content: '일요일까지' },
		{ isChecked: false, isPinned: true, title: '독서', content: '퀀트투자' },
		{ isChecked: false, isPinned: false, title: '골방.dev 회의', content: '일요일 4시' },
	]);

	return (
		<Container>
			<GlobalStyle />
			<Header />
			<Input />
			<ToDoList items={items} />
		</Container>
	);
}

export default App;
