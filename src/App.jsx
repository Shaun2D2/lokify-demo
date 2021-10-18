import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Demo from './Components/Demo';
import Navbar from './Components/Navbar';

import useAudioEnabled from './hooks/useAudioEnabled';

import 'lokify/dist/style.css';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    body {
        margin: 0px;
    }
`;

const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    @media(max-width: 690px) {
        position: absolute;
        top: -100px;
    }
`;

const MenuItem = styled.li`
    color: #FFF;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1.5rem;
    font-family: 'Bebas Neue', cursive;
    a {
        text-decoration: none;
        color: #FFF;
        transition: text-shadow .2s;
        &:hover {
            text-shadow: 0 0 10px #FFF;
        }
    }
`;

const GithubLink = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.1);
    }
`;

const App = () => {
    const audioEnabled = useAudioEnabled();


    return (
        <>
            <GlobalStyles />
            <Navbar>
                <Menu>
                    <MenuItem><a href="/">Readme</a></MenuItem>
                    <MenuItem><a href="https://www.shaunlobsinger.com">Meet Shaun</a></MenuItem>
                    <MenuItem><a href={`/?audio=${!audioEnabled}`}>{ audioEnabled ? 'Disable Audio' : 'Enable Audio' }</a></MenuItem>
                    <MenuItem><a href={`/?audio=${audioEnabled}`}>Replay</a></MenuItem>
                </Menu>
                <a href="https://github.com/Shaun2D2/lokify">
                    <GithubLink icon={faGithub} size="3x" color="#fff" />
                </a>
            </Navbar>
            <Demo />
        </>
    )
};



export default App;
