import React, { Component } from 'react'
import Child from './Child'
// 错误边界 将 错误控制到组件内 应该在 父组件中进行处理

export default class Parent extends Component {
  // static getDerivedStateFromProps() {
  //   // 状态 取决于 外部的 props
  // }
  state = {
    hasError: '' //  用于标识子组件是否产生错误
  }
  static getDerivedStateFromError(error) {
    // 如果子组件的报错 会调用 这个 钩子
    console.log(error)

    // 这里的 return 会将 state 中的 hasError 的值 赋值为 error
    // 返回新的 state
    // 只能 捕获生命周期函数报的错
    return {
      hasError: error
    }
  }

  componentDidCatch() {
    console.log('组件渲染出错')
    // 一般 统计 错误次数 发送给后台,反馈给后台
  }

  render() {
    const { hasError } = this.state
    return (
      <div>
        <h3>我是 父组件 </h3>
        {hasError ? <h2>网络似乎出现了点问题......</h2> : <Child />}
      </div>
    )
  }
}
