import React,{Fragment} from 'react'
import { P, Item, Items, Headline, Img} from './style';
const index = (props) => {
    const data = props.data_list.items
    return (
        <Items>
            {data && data.map((item) => (
                <Fragment key={item.headline}>
                    <Headline>
                        <Img src={item.icon} /> {"  "}{'  '}{item.headline}
                    </Headline>
                    <Item>
                        <P>{item.paragraph}</P>
                    </Item>
                </Fragment> 
            ))}
        </Items>
    )
}

export default index