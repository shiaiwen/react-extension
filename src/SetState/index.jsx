import React, { Component } from 'react'

export default class Demo extends Component {
  state = { count: 0 }
  add = () => {
    // const { count } = this.state
    // this.setState(
    //   {
    //     count: count + 1
    //   },
    // 在状态和界面更新完成后执行这个函数
    //   () => {
    //     console.log(this.state.count, '这是改之后的数据')
    //   }
    // )
    // console.log(this.state.count, '这是改之前的数据')
    // setState 能传一个对象,第二个参数可以传一个回调函数
    // 以上是对象式的 setState
    this.setState(
      state => ({
        count: state.count + 1
      })
      // 上面是函数的写法
      // 使用 原则如下
      /**
       * 如果新的状态不依赖原来的状态 使用的对象式
       * 如果依赖原来的状态使用函数式
       *
       */
    )
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>当前求和为:{count}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}
