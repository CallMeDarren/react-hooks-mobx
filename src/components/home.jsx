import React, { useEffect, useState, Component } from 'react';
import { inject, observer } from 'mobx-react';

const Home = ({ store }) => {
  return (
    <>
      <h3>待办事项：{store.count}</h3>
      <button onClick={() => store.add()}>新增一条</button>
      <button onClick={() => store.minus()}>完成一条</button>
      <button onClick={() => store.clear()}>清空所有</button>
      {store.todoList.map((item, index) => {
        return (
          <h3 key={index}>{item}</h3>
        )
      })}
    </>
  )
}

// 函数式组件写法
export default inject('store')(observer(Home));

// class 组件的装饰器写法
// @inject('store')
// @observer
// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const { store } = this.props;
//     return (
//       <>
//         <h3>{store.count}</h3>
//         <button onClick={() => { store.addCount() }}>count+1</button>
//         <button onClick={() => { store.add() }}>新增一条</button>
//         <button onClick={() => { store.minus() }}>完成一条</button>
//         <button onClick={() => { store.clear() }}>清空所有</button>
//         {store.todoList.map((item, index) => {
//           return (
//             <span key={index}>{item}</span>
//           )
//         })}
//       </>
//     )
//   }
// }

// export function ClickTimes() {
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState('Jack');
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
//     useEffect(function updateTitle() {
//         document.title = `${name}`
//     });
//     return (
//         <div>
//             <h3>times: {count}</h3>
//             <button onClick={() => { setCount(count + 1) }}><h3>+1</h3></button>&nbsp;&nbsp;&nbsp;
//             <button onClick={() => { setCount(count - 2) }}><h3>- 2</h3></button>
//         </div>
//     )
// }
