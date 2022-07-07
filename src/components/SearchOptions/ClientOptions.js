import React, { useState } from 'react'
import ChipsSet from '../ChipsSet/ChipsSet';

//style
import {
    OnlineContainer,
    LabelText,
    Button,
    OnlineContent,
    OnlineFilter,
    OnlineH1,
    OnlineP,
    Img
} from "./ClientOptionsStyle";


//components
import CheckBtn from '../../assets/chips/check.svg'

import SearchAll from './SearchAll/SearchAll';
import SearchInPerson from './SearchInPerson/SearchInPerson';
import SearchOnline from './SearchOnline/SearchOnline';


function ClientOptions() {

    const [checked, setChecked] = useState('online');


    const handleChange = (x) => {
        setChecked(x)
    }
    return (
        <>
        <OnlineContainer>
            <OnlineContent>
                <OnlineH1>
                    Agende agora serviços de terapia holística
                </OnlineH1>
                <OnlineP>
                    Mais de 500 tipos de terapias holísticas
                </OnlineP>

                <OnlineFilter>

                    <Button id="todos" name="a"  />
                    <LabelText onClick={() => handleChange('todos')} htmlFor='todos'>{checked === 'todos' ? <Img src={CheckBtn}/> : " "}Todos</LabelText>

                    <Button id='online' name="a" defaultChecked={checked === 'online' ? true : false}/>
                    <LabelText onClick={() => handleChange('online')} htmlFor='online'>{checked === 'online' ? <Img src={CheckBtn}/> : ""}Online</LabelText>

                    <Button id='presencial' name="a" />
                    <LabelText onClick={() => handleChange('presencial')} htmlFor='presencial'>{checked === 'presencial' ? <Img src={CheckBtn}/> : " "}Presencial</LabelText>
                </OnlineFilter>
            </OnlineContent>


            {/* corpo */}
            {checked === 'todos' ? <SearchAll /> : ""}
            {checked === 'online' ? <SearchOnline/> : ""}
            {checked === 'presencial' ? <SearchInPerson /> : ""}

            <ChipsSet/>
        </OnlineContainer>
        </>
    )
}

export default ClientOptions