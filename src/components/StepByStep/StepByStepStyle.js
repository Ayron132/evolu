import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import { GrSchedule } from 'react-icons/gr';
import { BsCreditCard2Back } from 'react-icons/bs';



export const Section = styled.section`
    
    width: 100%;
    padding: 35px 21px;
    background-color: rgba(234, 221, 255, 1);
    margin-top: 30px;


`

export const Pcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(234, 221, 255, 1);

`

export const Headline = styled.div`
    font-size: 16px;
    color: rgba(33, 0, 93, 1);

    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    background: rgba(234, 221, 255, 1);

`

export const Items = styled.div`
    background: rgba(234, 221, 255, 1);

    width: 650px;
`

export const Item = styled.div`
    display: flex;

    margin: 15px 0;
    font-size: 1.2rem;
    background: rgba(234, 221, 255, 1);

`

export const P = styled.p`
    font-size: 14px;    
    background: rgba(234, 221, 255, 1);

`


export const SearchIcon = styled(FaSearch)`
    background: rgba(234, 221, 255, 1);

`
export const ScheduleIcon = styled(GrSchedule)`
    background: rgba(234, 221, 255, 1);
`
export const CreditCardIcon = styled(BsCreditCard2Back)`
    background: rgba(234, 221, 255, 1)
`