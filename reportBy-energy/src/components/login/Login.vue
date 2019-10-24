<script>
import Login from './Login.html'
export default {
    extends:Login,
    data(){
        return{
            htmlTitle:'O-Wind上报系统登录',
            loginForm: {
                // username: 'admin',
                // password: '123456'
                username: 'user',
                password: 'user123*',
                userError:'用户名不能为空',
                passError:'密码不能为空',
                userIf:false,
                passIf:false
            },
            none: false,
            loading: false
        }
    },
    mounted(){
        document.title = this.htmlTitle;
    },
    methods:{
        loginIn () {
            // const passTest = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,}$/;
            // if (!this.loginForm.username || !this.loginForm.password) {
            //     return
            // }
            // if(!passTest.test(this.loginForm.password)){
            //     this.loginForm.passIf = true;
            //     this.loginForm.passError = '密码格式有误';
            //     return
            // }else{
            //     this.loginForm.passIf = false;
            //     this.loginForm.passError = '密码不能为空'; 
            // }
            sessionStorage.setItem('token', 1)
            this.$router.push({name:'main'});
        }
    }
}
</script>
<style lang="scss" scoped>
@import './Login.scss';
</style>