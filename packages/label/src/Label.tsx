import type { ComponentProps, FC } from 'react';

type Props = {} & ComponentProps<"label">

const Label:FC<Props> = ({children}) => {
    return <label>{children}</label>
}

export default Label;
