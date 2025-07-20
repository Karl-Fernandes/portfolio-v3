import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'
import {startWebamp} from '../utils/startWebamp';

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
	align-items: center;
`;

function Shortcuts({ openExplorer, openBin }) {
    return (
        <div>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="windows_explorer"
                    onClick={() => openExplorer()}
                />
                <div>Explorer</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                    onClick={()=>startWebamp()}
                />
                <div>Media</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="appwiz_1503"
                    onClick={()=>openBin()}
                />
                <div style={{marginLeft:'6px'}}>Bin</div>
            </StyledShorcut>
        </div>
    )
}

export default Shortcuts
