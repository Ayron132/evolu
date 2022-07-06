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


export const SearchIcon = styled(FaSearch)`
    background: rgba(234, 221, 255, 1);
`
export const ScheduleIcon = styled(GrSchedule)`
    background: rgba(234, 221, 255, 1);
`
export const CreditCardIcon = styled(BsCreditCard2Back)`
    background: rgba(234, 221, 255, 1)
`