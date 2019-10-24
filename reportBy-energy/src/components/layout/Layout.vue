<script>
import Layout from './Layout.html'
import vHeader from '@/components/Header.vue'
export default {
    extends:Layout,
    data(){
        return{
            msg:'我是主页'
        }
    },
    components:{
        vHeader
    },
    mounted() {
        console.log(this.$route.matched);
    },
}
</script>
<style lang="scss" scoped>
    @import './Layout.scss';
</style>