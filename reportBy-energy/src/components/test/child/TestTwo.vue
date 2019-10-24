<template>
  <div class="testtwo">
    <h1>{{ msg }}</h1>
    <router-link :to="{name:'sonb'}">去到孙子Two</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TestTwo',
  data () {
    return {
      msg: '子页面2222222'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  $color:red;
  h1, h2 {
    font-weight: normal;
    color:$color;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
