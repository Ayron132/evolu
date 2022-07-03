import styled from "styled-components";

export const Input = styled.input.attrs({ type: "text" })`
    width: 100%;
    padding: 14px 20px;
    margin-top: 30px;

    font-size: 14px;
    color: rgba(121, 116, 126, 1);

    border: 1px solid rgba(121, 116, 126, 1);
    border-radius: 4px;
    cursor: pointer;
    
`;

export const DataList = styled.datalist`

`;

export const Option = styled.option`

`;

export const InputContainer = styled.div`
    
    padding: 0px 21px 0px 21px;
   

`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: rgba(103, 80, 164, 1);

    margin-top: 30px;

    color: white;
  
 
    border: none;
    border-radius: 24px;
    cursor: pointer;

    font-size: 16px
    weight: 500
`

export const Form = styled.form`

`