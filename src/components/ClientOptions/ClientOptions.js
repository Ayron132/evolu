import React, { useState } from 'react'
import PesquisaOnline from '../PesquisaOnline/PesquisaOnline';
import ConjuntoChips from '../ConjuntoChips/ConjuntoChips';
import PassoAPasso from '../PassoAPasso/PassoAPasso';
import {
    OnlineContainer,
    LabelText,
    Button,
    OnlineContent,
    OnlineFilter,
    OnlineH1,
    OnlineP,
    CheckBtn
} from "./ClientOptionsStyle";
import PesquisaTodos from '../PesquisaTodos/PesquisaTodos';
import PesquisaPresencial from '../PesquisaPresencial/PesquisaPresencial';


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
                    <LabelText onClick={() => handleChange('todos')} htmlFor='todos'>{checked === 'todos' ? <CheckBtn /> : ""}Todos</LabelText>

                    <Button id='online' name="a" defaultChecked={checked === 'online' ? true : false}/>
                    <LabelText onClick={() => handleChange('online')} htmlFor='online'>{checked === 'online' ? <CheckBtn /> : ""}Online</LabelText>

                    <Button id='presencial' name="a" />
                    <LabelText onClick={() => handleChange('presencial')} htmlFor='presencial'>{checked === 'presencial' ? <CheckBtn /> : ""}Presencial</LabelText>
                </OnlineFilter>
            </OnlineContent>


            {/* corpo */}
            {checked === 'todos' ? <PesquisaTodos /> : ""}
            {checked === 'online' ? <PesquisaOnline/> : ""}
            {checked === 'presencial' ? <PesquisaPresencial /> : ""}
            <ConjuntoChips />
            <PassoAPasso/>
        </OnlineContainer>
        </>
    )
}

export default ClientOptions