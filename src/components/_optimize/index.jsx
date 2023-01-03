import React, { Component } from 'react'

export default class parent extends Component {
  state = { carName: '奔驰' }
  changeCar = () => {
    this.setState({
      carName: '宝马'
    })
  }

  render() {
    const { carName } = this.state
    return (
      <div className='parent'>
        <h3> 我是 Parent 组件 </h3>
        <span> 我的车名字为: {carName} </span> <br />
        <button onClick={this.changeCar}>换车</button>
      </div>
    )
  }
}
