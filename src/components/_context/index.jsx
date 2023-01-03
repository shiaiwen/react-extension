import React, { Component } from 'react'
import './index.css'
// Context 的使用
// 1. 创建 Context 对象
const MyContext = React.createContext()
// 得到生产者和消费之
const { Provider, Consumer } = MyContext

export default class Demo extends Component {
  state = { username: 'tom', age: 18 }

  render() {
    const { username: name, age } = this.state
    return (
      <div className='parent'>
        <h3>我是父组件</h3>
        <h4>我的用户名为： {name}</h4>
        {/* 组件传值 */}
        <Provider value={{ name, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是 B 组件</h3>
        <C />
      </div>
    )
  }
}

// class C extends Component {
//   // 声明接收 context
//   static contextType = MyContext
//   render() {
//     const { name, age } = this.context
//     return (
//       <div className='grand'>
//         <h3>我是 C 组件</h3>
//         <h4>
//           我从A组件接收到的用户名为：{name}, 年龄是 {age}
//         </h4>
//       </div>
//     )
//   }
// }

function C() {
  return (
    <div className='grand'>
      <h3>我是 C 组件</h3>
      <h4>
        我从A组件接收到的用户名为:
        <Consumer>{value => `${value.name},年龄是${value.age}`}</Consumer>
      </h4>
    </div>
  )
}
