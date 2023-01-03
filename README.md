## 组件通信的总结

### 组件之间的关系

1. 父子
2. 兄弟 (非嵌套组件) 
3. 祖孙 (跨级使用)

### 几种通信方式

1. props 
  1.1 children props 
  1.2 remder props
2. 消息订阅和发布
  pub-sub event
3. 集中式管理
  redux dva
4. context
   生产者消费者模式

### 搭配形式

1. 父子组件 props
2. 兄弟组件：消息订阅和发布 
3. 祖孙组件：消息订阅和发布 集中式管理 context



