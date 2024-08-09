import type { ComponentProps, FC } from 'react';

type Props = {} & ComponentProps<"button">

const Button:FC<Props> = ({children}) => {
    return <button style={{
        appearance: "none",
        border: "1px solid dimgrey",
        borderRadius: 4,
        backgroundColor: 'black',
        color: 'red',
        padding: '4px 8px'
    }}>{children}</button>
}

export default Button;
