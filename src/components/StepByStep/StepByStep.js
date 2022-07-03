import React from 'react'
import { P, Item, Items, Headline, Pcontainer, Section, SearchIcon, ScheduleIcon, CreditCardIcon } from './StepByStepStyle'


function StepByStep() {
    return (
        <Section>
            <Pcontainer>
                <Items>
                    <Headline><SearchIcon/>{'  '}Encontre profissionais</Headline>
                    <Item>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus.</P>
                    </Item>
                    <Headline><ScheduleIcon/>{'  '}Agende consultas</Headline>
                    <Item>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus. </P>
                    </Item>
                    <Headline><CreditCardIcon/>{'  '}Pague pelo site</Headline>
                    <Item>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus. </P>
                    </Item>
                </Items>
            </Pcontainer>
        </Section>
    )
}

export default StepByStep