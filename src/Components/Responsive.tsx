import React from 'react'
import styled from 'styled-components'

const ResponsiveBlock = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	width: 768px;
	margin: 0 auto;

	@media (max-width: 1024px) {
		width: 524px;
	}

	@media (max-width: 768px) {
		width: 80%;
	}
`

interface ResponsiveProps {
	children?: React.ReactNode
}

const Responsive = ({ children, ...rest }: ResponsiveProps) => {
	return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
}

export default Responsive
