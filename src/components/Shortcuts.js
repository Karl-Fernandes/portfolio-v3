import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'
import { startWebamp } from '../utils/startWebamp'
import Draggable from 'react-draggable' // Add this import

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
`;

function Shortcuts({ openExplorer, openBin }) {
    return (
        <div>
            <Draggable>
                <StyledShorcut>
                    <Icon
                        className="pointer"
                        name="windows_explorer"
                        onClick={() => openExplorer()}
                    />
                    <div>Explorer</div>
                </StyledShorcut>
            </Draggable>
            <Draggable>
                <StyledShorcut>
                    <Icon
                        className="pointer"
                        name="media_cd"
                        onClick={() => startWebamp()}
                    />
                    <div>Media</div>
                </StyledShorcut>
            </Draggable>
            <Draggable>
                <StyledShorcut>
                    <Icon
                        className="pointer"
                        name="appwiz_1503"
                        onClick={() => openBin()}
                    />
                    <div style={{ marginLeft: '6px' }}>Bin</div>
                </StyledShorcut>
            </Draggable>
        </div>
    )
}

export default Shortcuts
