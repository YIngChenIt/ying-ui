<template>
  <div id="app">
    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
    </y-container>

    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>

    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-main>Main</y-main>
    </y-container>

    <y-container>
      <y-header>Header</y-header>
      <y-container>
        <y-aside width="200px">Aside</y-aside>
        <y-main>Main</y-main>
      </y-container>
    </y-container>

    <y-container>
      <y-header>Header</y-header>
      <y-container>
        <y-aside width="200px">Aside</y-aside>
        <y-container>
          <y-main>Main</y-main>
          <y-footer>Footer</y-footer>
        </y-container>
      </y-container>
    </y-container>

    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-container>
        <y-header>Header</y-header>
        <y-main>Main</y-main>
      </y-container>
    </y-container>

    <y-container>
      <y-aside width="200px">Aside</y-aside>
      <y-container>
        <y-header>Header</y-header>
        <y-main>Main</y-main>
        <y-footer>Footer</y-footer>
      </y-container>
    </y-container>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    fn(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.red {
  background: red;
}
.green {
  background: green;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.y-header,
.y-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.y-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.y-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .y-container {
  margin-bottom: 40px;
}

.y-container:nth-child(5) .y-aside,
.y-container:nth-child(6) .y-aside {
  line-height: 260px;
}

.y-container:nth-child(7) .y-aside {
  line-height: 320px;
}
</style>
