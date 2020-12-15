import { FC, useState, useEffect } from 'react';

const LikeButton: FC = () => {
    // const [state, setState] = useState(0);
    // const [onOff, setOnOff] = useState(true);
    // return <>
    //     <button onClick={() => { setState(state + 1) }}>
    //         {state}👍
    //     </button>
    //     <button onClick={() => { setOnOff(!onOff) }}>
    //         {onOff ? 'ON' : 'OFF'}
    //     </button>
    // </>
    const [obj, setObj] = useState({ like: 0, on: false })
    useEffect(() => {
        console.log('useEffect is running')
        document.title = `您点击了${obj.like}次`
    }, [obj]);
    return <>
        <button onClick={() => { setObj({ like: obj.like + 1, on: obj.on }) }}
        >{obj.like}</button>
        <button onClick={() => { setObj({ like: obj.like, on: !obj.on }) }}
        >{obj.on ? 'ON' : 'OFF'}</button>
    </>
}
export default LikeButton