import React from 'react'
import { P, Item, Items, Headline, Pcontainer, Section, Icon } from './PassoAPassoStyle'


function PassoAPasso() {
    return (
        <Section>
            <Pcontainer>
                <Items>
                    <Headline><Icon/>{'  '}Encontre profissionais</Headline>
                    <Item>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus.</P>
                    </Item>
                    <Headline>Agende consultas</Headline>
                    <Item>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus. </P>
                    </Item>
                    <Headline>Pague pelo site</Headline>
                    <Item>
                        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros justo, vestibulum ut dignissim sit amet, lobortis vel lacus. </P>
                    </Item>
                </Items>
            </Pcontainer>
        </Section>
    )
}

export default PassoAPasso