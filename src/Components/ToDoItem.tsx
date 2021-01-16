import React from 'react'
import Responsive from './Responsive'
import styled from 'styled-components'

const ItemContainer = styled(Responsive)`
	height: 8rem;
	background-color: black;
`

type ToDo = {
	isChecked: boolean;
	isPinned: boolean;
	title: string;
	content: string;
};



const ToDoItem = ({}:ToDo) => {
	return <ItemContainer></ItemContainer>
}

export default ToDoItem
