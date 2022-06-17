import React, { useEffect, useState, useRef } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Input, Radio, Space, Card, Modal } from 'antd';
import './home.css';

const Home = ({ store }) => {
  const [value, setValue] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState('');
  const inputRef = useRef();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const radioChange = (e) => {
    setValue(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  }

  const handleOk = () => {
    setIsModalVisible(false);
    text.length && store.add(text);
    // const refValue = inputRef.current.input.value;
    setText('');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: 240, height: 300, overflow: 'auto' }}
      >
        <h3>待办事项：{store.count}</h3>
        <Button size="small" onClick={showModal}>新增</Button>
        <Button size="small" onClick={() => store.minus(value)}>完成</Button>
        <Button size="small" onClick={() => store.clear()}>清空</Button>
        {store.todoList.map((item, index) => {
          return (
            <Radio.Group onChange={radioChange} value={value} className="list">
              <Space direction="vertical">
                <Radio key={index} value={index}>{item}</Radio>
              </Space>
            </Radio.Group>
          )
        })}
      </Card>
      <Modal
        title="新增代办事项" visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={200}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            确认
          </Button>,
        ]}
      >
        <Input placeholder="请输入待办事项" maxLength={20} onChange={handleText} defaultValue={text} ref={inputRef} />
      </Modal>
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
