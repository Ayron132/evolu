import React from 'react'
import { Pcontainer, Section } from './style'
import Items from "./items/index";

function StepByStep() {

    const data_items =
    {
        "items": [
            {
                "headline": "Encontre profissionais",
                "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus. ",
                "icon": "search.png"
            },
            {
                "headline": "Agende consultas",
                "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus. ",
                "icon": "schedule.png"
            },
            {
                "headline": "Pague pelo site",
                "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus. ",
                "icon": "creditcard.png"
            }
        ]
    }



    return (
        <Section>
            <Pcontainer>
                <Items data_list={data_items}/>
            </Pcontainer>
        </Section>
    )
}

export default StepByStep