import React from 'react';
import './App.css';
import {EpisodesList} from './app/components';
import {Toolbar} from "./app/components/Toolbar";
import {Typography} from "antd";
import styled from "styled-components";

const {Title} = Typography;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`

export const App = () => {
    return (
        <div className="App">
            <StyledWrapper>
                <Title level={1}>Rick And Morty Episodes App</Title>
                <Toolbar/>
                <EpisodesList/>
            </StyledWrapper>
        </div>
    );
}

export default App;
