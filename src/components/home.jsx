import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

const Home = observer(({ store }) => {
    return <>
        <button onClick={() => { store.add() }}>新增一条</button>
        <button onClick={()=>{store.minus()}}>完成一条</button>
        <button onClick={()=>{store.clear()}}>清空所有</button>
        {store.todoList.map((item, index) => {
            return (
                <h3 key={index}>{item}</h3>
            )
        })}
    </>
})
export default inject(store => store)(Home);

// export function ClickTimes() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = `You have click button ${count} times`
//     });
//     useEffect(() => {
//         console.log('count changed');
//     }, [count]);
//     useEffect(() => {
//         console.log('changed2');
//     }, []); // []相当于componentDidMount,只在初始化的时候执行一次
//     useEffect(() => {
//         if (count === 0) {
//             console.log('count === 0');
//         }
//     })
//     return (
//         <div>
//             <h3>times: {count}</h3>
//             <button onClick={() => { setCount(count + 1) }}><h3>+1</h3></button>&nbsp;&nbsp;&nbsp;
//             <button onClick={() => { setCount(count - 2) }}><h3>- 2</h3></button>
//         </div>
//     )
// }
// export function From() {
//     const [name, setName] = useState('Jack');
//     useEffect(function persistForm() {
//         if (name !== '') {
//             localStorage.setItem('FromData', name);
//         }
//     });
//     const [surName, setSurName] = useState('Li');
//     useEffect(function updateTitle() {
//         document.title = `${name}--${surName}`
//     });
// }

