import React, {Fragment} from 'react';

import { P, ParagraphDiv, Items, Headline, Img} from './style';

const index = (props) => {

    const data = props.data_list.items;

    return (
        <Items>
            {data && data.map((item) => (
                <Fragment key={item.headline}>
                    <Headline>
                        <Img src={item.icon} />{item.headline}
                    </Headline>
                    <ParagraphDiv>
                        <P>{item.paragraph}</P>
                    </ParagraphDiv>
                </Fragment> 
            ))}
        </Items>
    )
}

export default index;