//components
import StepByStep from '../StepByStep/StepByStep';
import ChipsSet from '../ChipsSet/ChipsSet';
import ClientOptions from '../SearchOptions/ClientOptions';

import React from 'react'

const Body = () => {
    return (
        <>
            <ClientOptions/>
            <StepByStep/>
        </>
    )
}

export default Body