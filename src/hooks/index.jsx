import React, { Fragment } from 'react'
// import ReactDOM from 'react-dom'
import { root } from '../index'

// class Demo2 extends Component {
//   state = { count: 0 }

//   add = () => {
//     this.setState(state => ({ count: state.count + 1 }))
//   }

//   render() {
//     return (
//       <div>
//         <h1>当前求和为 {this.state.count}</h1>
//         <button onClick={this.add}>点我加1</button>
//       </div>
//     )
//   }
// }

/**
 * 三个常见的 hooks
 * @returns
 */

function Demo() {
  // 这么写数字指数型增加
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    return () => {
      console.log(123)
      clearInterval(timer)
    }
  }, [])

  const add = () => {
    setCount(count => count + 1)
  }
  const unmont = () => {
    root.unmount()
  }

  

  return (
    <Fragment>
      <h1>当前求和{count}</h1>
      <button onClick={add}>点我加1</button>
      <button onClick={unmont}>卸载组件</button>
    </Fragment>
  )

}

export default Demo
