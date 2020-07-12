<template>
  <div id="app">
    <!-- 默认按钮 -->
    <y-button>默认按钮</y-button>
    <br>
    <!-- 带类型的按钮 -->
    <y-button type="primary">主要按钮</y-button>
    <y-button type="warning">警告按钮</y-button>
    <y-button type="danger">危险按钮</y-button>
    <y-button type="success">成功按钮</y-button>
    <y-button type="info">信息按钮</y-button>
    <br>
    <!-- 带icon的按钮 -->
    <y-button type="info" icon="sousuo">信息按钮</y-button>
    <y-button type="primary" icon="sousuo"></y-button>
    <y-button type="success" icon="sousuo" icon-position="right">内容</y-button>
    <br>
    <!-- loading按钮 -->
    <y-button type="success" loading>加载中</y-button>
    <br>
    <!-- 触发事件 -->
    <y-button type="success" @click="fn">触发事件</y-button>
    <br>

    <y-button-group>
      <y-button  icon="left" icon-position="left">上一页</y-button>
      <y-button  icon="right" icon-position="right">下一页</y-button>
    </y-button-group>

    <zh-icon icon="sousuo"></zh-icon>
    <zh-icon icon="edit"></zh-icon>
    <br>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    fn(e){
      console.log(e)
    }
  }
}
</script>
