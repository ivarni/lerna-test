import type { ComponentProps, FC } from 'react';

type Props = {} & ComponentProps<"button">

const Button:FC<Props> = ({children}) => {
    return <button>{children}</button>
}

export default Button;
