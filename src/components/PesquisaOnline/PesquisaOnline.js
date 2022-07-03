import React from 'react'
import {
    Input,
    DataList,
    Option,
    Button,
    InputContainer
} from "./PesquisaOnlineStyle"

function PesquisaOnline() {


    const lista = ["mapa solar", "mapa astral"];
    return (
        <InputContainer>
            <Input placeholder='Nome, especialidade ou serviço' list="lista" />
            <DataList id="lista">
                {lista.map((item) => (
                    <Option key={item} value={item} />
                ))}
            </DataList>
            <Button>Pesquisar</Button>
        </InputContainer>
    )
}

export default PesquisaOnline