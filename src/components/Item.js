import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'

const StyledItem = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 25%;
	padding: 10px 0;
`;

const StyledSpan = styled.span`
	margin-top: 5px;
`

function File({ item, openNotepad }) {
	const { name, icon, url } = item;

	if (url) {
		return (
			<StyledItem>
				<a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
					<Icon name={icon} className="pointer" />
					<StyledSpan>{name}</StyledSpan>
				</a>
			</StyledItem>
		);
	}

	// Default for normal items
	return (
		<StyledItem>
			<Icon
				name={icon}
				className="pointer"
				onClick={() => openNotepad(item)}
			/>
			<StyledSpan>{name}</StyledSpan>
		</StyledItem>
	)
}

export default File
