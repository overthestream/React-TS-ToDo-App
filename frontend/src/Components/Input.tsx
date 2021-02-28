import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { MdAdd } from 'react-icons/md';

const Box = styled(Responsive)`
	width: calc(width - 100px);
	margin-top: 8rem;
	height: 14rem;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);

	form {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		justify-content: space-between;
		display: flex;
		align-items: center;
		input {
			width: 34rem;
			margin-left: 1rem;
			border-radius: 10px;
			border-color: black;
		}
		.title {
			height: 2rem;
		}
		.content {
			height: 8rem;
		}
		button {
			width: 20%;
			height: 80%;
			border-radius: 10px;
			background: none;
			border: none;
			background-color: green;
			margin-right: 1rem;
			cursor: pointer;
			font-size: 4rem;
		}
	}
`;
const Description = styled.div`
	display: flex;
	flex-direction: column;
	height: 80%;
	justify-content: space-between;
`;

type inputProps = {
	onInsert: (title: string, content: string) => void;
};

const Input = ({ onInsert }: inputProps) => {
	const [newTitle, setNewTitle] = useState<string>('');
	const [newContent, setNewContent] = useState<string>('');

	const onTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTitle(e.target.value);
	}, []);

	const onContentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setNewContent(e.target.value);
	}, []);

	const onSubmit = useCallback(
		(e: any) => {
			onInsert(newTitle, newContent);
			setNewContent('');
			setNewTitle('');
			e.preventDefault();
		},
		[onInsert, newTitle, newContent]
	);

	return (
		<Box>
			<form onSubmit={onSubmit}>
				<Description>
					<input className="title" value={newTitle} onChange={onTitleChange} />
					<input className="content" value={newContent} onChange={onContentChange} />
				</Description>
				<button type="submit">
					<MdAdd />
				</button>
			</form>
		</Box>
	);
};

export default Input;
