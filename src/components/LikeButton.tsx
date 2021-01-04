import { FC, useState, useEffect, useRef } from 'react';

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
    const likeRef = useRef(0)
    const iptRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        console.log('useEffect is running')
        document.title = `您点击了${obj.like}次`
    }, [obj]);
    function alertLike() {
        setTimeout(() => {
            alert(`最终的like值为${likeRef.current}`)
            if (iptRef.current) {
                iptRef.current.focus()
            }
        }, 3000);
    }

    return <>
        <button onClick={() => { setObj({ like: obj.like + 1, on: obj.on }); likeRef.current++ }}
        >{obj.like}</button>
        <button onClick={() => { setObj({ like: obj.like, on: !obj.on }) }}
        >{obj.on ? 'ON' : 'OFF'}</button>
        <button onClick={alertLike}>输出</button>
        <input type="text" ref={iptRef} />
    </>
}
export default LikeButton