import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users: [
    //   { id: 1, name: 'tom', age: 19 },
    //   { id: 2, name: 'saw', age: 20 },
    //   { id: 3, name: 'jack', age: 21 }
    // ]
    users: 'asd'
  }

  // test()

  render() {
    const { users } = this.state
    return (
      <div>
        <h3>我是 child 组件</h3>
        {users.map(user => {
          return (
            // 遍历谁就在谁的身上加key
            <h4 key={user.id}>
              {user.name} ----- {user.age}
            </h4>
          )
        })}
      </div>
    )
  }
}
