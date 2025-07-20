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
    // Track drag state for each shortcut
    let explorerDragged = false;
    let mediaDragged = false;
    let binDragged = false;

    return (
        <div>
            <Draggable
                onStart={() => { explorerDragged = false; }}
                onDrag={() => { explorerDragged = true; }}
            >
                <StyledShorcut>
                    <Icon
                        className="pointer"
                        name="windows_explorer"
                        onClick={() => {
                            if (!explorerDragged) openExplorer();
                        }}
                    />
                    <div>Explorer</div>
                </StyledShorcut>
            </Draggable>
            <Draggable
                onStart={() => { mediaDragged = false; }}
                onDrag={() => { mediaDragged = true; }}
            >
                <StyledShorcut>
                    <Icon
                        className="pointer"
                        name="media_cd"
                        onClick={() => {
                            if (!mediaDragged) startWebamp();
                        }}
                    />
                    <div>Media</div>
                </StyledShorcut>
            </Draggable>
            <Draggable
                onStart={() => { binDragged = false; }}
                onDrag={() => { binDragged = true; }}
            >
                <StyledShorcut>
                    <Icon
                        className="pointer"
                        name="appwiz_1503"
                        onClick={() => {
                            if (!binDragged) openBin();
                        }}
                    />
                    <div style={{ marginLeft: '6px' }}>Bin</div>
                </StyledShorcut>
            </Draggable>
        </div>
    )
}

export default Shortcuts
