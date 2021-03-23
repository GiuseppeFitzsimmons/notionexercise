import { React } from 'react';

export default function Header(props) {
    console.log('header props', props)
    return (
        <div>
            {props?.location}
        </div>
    )
}