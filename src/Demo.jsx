import React from 'react';
import styled from 'styled-components';
import Lokify from 'lokify';

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

const Demo = () => {

    const completeHanlder = () => {
        console.log('complete!');
    }

    return (
        <Container>
            <Lokify onComplete={completeHanlder} />
        </Container>
    )
}

export default Demo;
