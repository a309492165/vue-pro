<script>
import TestHtml from './Test.html'
import vHeader from '@/components/Header.vue'

import ship from '@/request/api'

export default {
  extends: TestHtml,
  name: 'test',
  components:{
    vHeader
  },
  data () {
    return {
      msg: '测试的页面',
      shipList:[],
      testList:[1,2,3]
    }
  },
  created(){
    
    // console.log(this);
    // console.log(ship);
    // this.$axios.post("https://www.easy-mock.com/mock/5d8b2445bd97e52ccb4997e2/example/test")
    // .then(res => {
    //   console.log(res);
    // });
    // 测试路径：http://47.111.184.198:8080/equipment/
    
    ship.video({
      windNumber:'32000002'
    })
    .then(res => {
      if(res.data.code == '0' || res.data.code == 0){
        this.shipList = res.data.data;
      }
    })
    .catch(error => {
      console.log(error);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/css">
  @import 'Test.scss';
</style>
