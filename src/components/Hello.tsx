import { FC } from 'react';

interface IHellowProps {
    message?: string
}

const Hellow: FC<IHellowProps> = (props) => {
    return <h2>{props.message}</h2>
}

Hellow.defaultProps = {
    message: '你好世界'
}

export default Hellow