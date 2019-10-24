<template>
  <div class="testone">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,idx) in dataList.length > 0 ? dataList : shipList" :key="idx">{{item.installDate}}</li>
    </ul>
    <router-link :to="{name:'sona'}">去到孙子One</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'TestOne',
  props:{
    shipList:{
      type:Array,
      default:() =>{
        return []
      },
      deep:true,
    }
  },
  data () {
    return {
      msg: '子页面1111111',
      dataList:[]
    }
  },
  watch: {
    shipList: {
      deep: true,
      handler: function (val, oldVal) {
        this.dataList = val
        this.get();
      }
    }
  },
  mounted(){
    console.log(this.shipList);
  },
  methods:{
    get(){
      console.log(this.dataList);
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
