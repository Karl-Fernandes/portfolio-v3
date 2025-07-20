import React, { useContext } from 'react'
import DataContext from '../contexts/dataContext'
import { TaskBar, List } from '@react95/core'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`


function Taskbar() {
    const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
    console.log(projectRepo, react95Repo)
    return (
        <TaskBar
            list={
                <List>
                    <List.Item className="pointer" icon="brush">
                        <Link href={react95Repo} target="_blank">Built with React95</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="folder_file">
                        <Link href={projectRepo} target="_blank">Repo</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item
                        className="pointer"
                        icon="systray_306"
                        onClick={() => showShutdownOverlay()}
                    >
                        Shutdown
                    </List.Item>
                </List>
            }
        />
    )
}

function showShutdownOverlay() {
    const shutdownDiv = document.createElement('div');
    shutdownDiv.style.position = 'fixed';
    shutdownDiv.style.top = 0;
    shutdownDiv.style.left = 0;
    shutdownDiv.style.width = '100vw';
    shutdownDiv.style.height = '100vh';
    shutdownDiv.style.background = 'black';
    shutdownDiv.style.color = 'white';
    shutdownDiv.style.display = 'flex';
    shutdownDiv.style.flexDirection = 'column';
    shutdownDiv.style.alignItems = 'center';
    shutdownDiv.style.justifyContent = 'center';
    shutdownDiv.style.fontSize = '2rem';
    shutdownDiv.style.zIndex = 9999;

    // Vintage Windows-style loader (dotted circle)
    const spinner = document.createElement('div');
    spinner.style.display = 'flex';
    spinner.style.justifyContent = 'center';
    spinner.style.alignItems = 'center';
    spinner.style.marginBottom = '24px';
    spinner.style.height = '60px';

    // Create 12 dots
    for (let i = 0; i < 12; i++) {
        const dot = document.createElement('div');
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.borderRadius = '50%';
        dot.style.background = '#fff';
        dot.style.position = 'absolute';
        dot.style.transform = `rotate(${i * 30}deg) translate(25px)`;
        dot.style.opacity = '0.3';
        dot.style.animation = `vintage-spin 1.2s linear infinite`;
        dot.style.animationDelay = `${i * 0.1}s`;
        spinner.appendChild(dot);
    }
    spinner.style.position = 'relative';
    spinner.style.width = '60px';

    // Add keyframes for spinner if not already present
    if (!document.getElementById('vintage-spinner-style')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'vintage-spinner-style';
        styleSheet.innerHTML = `
            @keyframes vintage-spin {
                0% { opacity: 0.3; }
                50% { opacity: 1; }
                100% { opacity: 0.3; }
            }
        `;
        document.head.appendChild(styleSheet);
    }

    shutdownDiv.appendChild(spinner);

    // Shutting down + thank you text
    const text = document.createElement('div');
    text.innerText = 'Shutting down...\nThank you for visiting my website!';
    text.style.textAlign = 'center';
    text.style.whiteSpace = 'pre-line';
    shutdownDiv.appendChild(text);

    document.body.appendChild(shutdownDiv);

    setTimeout(() => {
        window.close();
    }, 1800);
}

export default Taskbar
