<template>
  <div id="app">
    <y-row>
      <y-col :span="12">
        <div>aaaa</div>
      </y-col>
      <y-col :span="12">
        <div>bbb</div>
      </y-col>
    </y-row>
    <y-row>
      <y-col>
        <div>vvv</div>
      </y-col>
    </y-row>

    <hr />

    <y-row>
      <y-col :span="6">
        <div>vvv</div>
      </y-col>
      <y-col :span="6" :offset="12">
        <div>vvv</div>
      </y-col>
    </y-row>

    <hr />

    <y-row :gutter="20">
      <y-col :span="6">
        <div class="red">vvv</div>
      </y-col>
      <y-col :span="6">
        <div class="green">vvv</div>
      </y-col>
      <y-col :span="6">
        <div class="red">vvv</div>
      </y-col>
      <y-col :span="6">
        <div class="green">vvv</div>
      </y-col>
    </y-row>

    <hr />

    <y-row justify="center">
      <y-col :span="3">
        <div class="red">ccc</div>
      </y-col>
      <y-col :span="3">
        <div class="red">ccc</div>
      </y-col>
    </y-row>

    <hr />

    <y-row :gutter="10">
      <y-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
      <y-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </y-col>
      <y-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </y-col>
    </y-row>
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
</style>
