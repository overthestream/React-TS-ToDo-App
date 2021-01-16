import React from 'react'
import styled from 'styled-components'
import Responsive from './Responsive'
import { MdAdd } from 'react-icons/md'

const Box = styled(Responsive)`
	width: calc(width - 100px);
	margin-top: 8rem;
	height: 14rem;
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);

	form {
		width: 100%;
		height: 100%;
		background-color: black;
		margin: 0 auto;
		justify-content: space-between;
		display: flex;
		align-items: center;
		input {
			width: 23rem;
			margin-left: 1rem;
			border-radius: 10px;
			border: none;
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
`
const Description = styled.div`
	display: flex;
	flex-direction: column;
	height: 80%;
	justify-content: space-between;
`

const Input = () => {
	return (
		<Box>
			<form>
				<Description>
					<input className="title" />
					<input className="content" />
				</Description>
				<button type="submit">
					<MdAdd />
				</button>
			</form>
		</Box>
	)
}

export default Input
