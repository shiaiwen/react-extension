import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
const Home = lazy(() => import('../components/home'))
const About = lazy(() => import('../components/about'))

export default class Demo2 extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <NavLink className='list-group-item' to='/about'>
                About
              </NavLink>
              <NavLink className='list-group-item' to='/home'>
                Home
              </NavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              {/* 注意 react-router-dom 需要使用 5 版本的 */}
              <div className='panel-body'>
                <Suspense fallback={<div>Loading……</div>}>
                  <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
