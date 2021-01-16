import React from 'react'
import styled from 'styled-components'

import Responsive from './Responsive'

const Bar = styled.div`
	width: 100%;
	height: 6rem;
	background-color: white;
	position: fixed;
	box-shadow: 0px 2px 2px 2px rgba(4, 4, 4, 0.5);
`
const Box = styled(Responsive)`
	margin: 0 auto;
	text-align: center;
	vertical-align: middle;
	height: 4rem;
	font-size: 3rem;
	font-family: DXNPeriod;
	padding-top: 1.5rem;
`

const Header = () => {
	return (
		<Bar>
			<Box>
				<div>To Do</div>
			</Box>
		</Bar>
	)
}

export default Header
