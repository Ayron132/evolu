import React from 'react'
import {
  Input,
  DataList,
  Option,
  Button,
  InputContainer
} from "./SearchInPersonStyle"

function SearchInPerson() {
  const search_list = ["mapa solar", "mapa astral"];
  return (
    <InputContainer>
      <Input placeholder='Nome, especialidade ou serviço' list="list_search" />
      <DataList id="list_search">
        {search_list.map((item) => (
          <Option key={item} value={item} />
        ))}
      </DataList>

      <Input placeholder='Localidade' list="list_search" />
      <DataList id="list_search">
        {search_list.map((item) => (
          <Option key={item} value={item} />
        ))}
      </DataList>

      <Button>Pesquisar</Button>
    </InputContainer>
  )
}

export default SearchInPerson