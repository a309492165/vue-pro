<template>
  <div class="testone">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TestOne',
  data () {
    return {
      msg: '孙子页面22222222'
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
