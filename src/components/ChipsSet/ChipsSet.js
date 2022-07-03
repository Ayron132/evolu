import React from 'react'
import {
    LabelText,
    Button,
    OnlineFilter
} from "./ChipsSetStyle";

function ChipsSet() {
    //const lista = ["Aromaterapia","Ayurveda","Búzios","Mapa astral","Mapa solar", "Meditação","Astrocartografia","Ver todos"];
    return (
        // <OnlineFilter>
        //     {lista.map((item) => (
        //         <Fragment key={item}>
        //             <Button id={item} name="age"/>
        //             <LabelText htmlFor={item}>{item}</LabelText>
        //         </Fragment>
        //     ))}
        // </OnlineFilter>
        <>
            <OnlineFilter>
                <Button id='Aromaterapia' name='age' />
                <LabelText htmlFor='Aromaterapia'>Aromaterapia</LabelText>

                <Button id='Ayurveda' name='age' />
                <LabelText htmlFor='Ayurveda'>Ayurveda</LabelText>

                <Button id='Buzios' name='age' />
                <LabelText htmlFor='Buzios'>Búzios</LabelText>
            </OnlineFilter>
            <OnlineFilter>
                <Button id='MapaAstral' name='age' />
                <LabelText htmlFor='MapaAstral'>MapaAstral</LabelText>

                <Button id='MapaSolar' name='age' />
                <LabelText htmlFor='MapaSolar'>Mapa solar</LabelText>

                <Button id='Meditação' name='age' />
                <LabelText htmlFor='Meditação'>Meditação</LabelText>
            </OnlineFilter>
            <OnlineFilter>
                <Button id='Astrocartografia' name='age' />
                <LabelText htmlFor='Astrocartografia'>Astrocartografia</LabelText>

                <Button id='Ver todos' name='age' />
                <LabelText htmlFor='Ver todos'>Ver todos</LabelText>

            </OnlineFilter>
        </>
    )
}

export default ChipsSet;