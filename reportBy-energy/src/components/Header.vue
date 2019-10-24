<template>
    <div class="header-container">
        <div class="header-box clearfix">
            <h1>{{msg}}</h1>
            <div class="img-box">
                <span>...欢迎你</span>
                <p class="head-img" @click="handlerPrompt"></p>
                <div v-if="isPrompt" class="prompt">
                    <div>
                        <p></p>
                        <div>
                            <div>账号：{{promptBox.user}}<i></i></div>
                            <div>姓名：{{promptBox.name}}</div>
                        </div>
                    </div>
                    <div>
                        <p>后台管理</p>
                        <p @click="logOut">退出登录</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
    export default {
        name:'vheader',
        data(){
            return{
                msg:'我是组件标题头',
                isPrompt:false,
                promptBox:{
                    user:'lalal',
                    name:'Lucy',
                }
            }
        },
        methods:{
            handlerPrompt(){
                if(!this.isPrompt){
                    this.isPrompt = true;
                }else{
                    this.isPrompt = false;
                }
            },
            logOut(){
                this.$router.push({name:'login'});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header-box{
        padding: 20px;
        h1{
            float: left;
            font-size: 36px;
            font-weight:bold; 
        }
        .img-box{
            float: right;
            display: flex;
            align-items: center;
            position: relative;
            span{
                font-size: 20px;
            }
            .head-img{
                height: 58px;
                width: 58px;
                background: #fff;
                border-radius: 50%;
                margin-left:20px;
                cursor: pointer;
            }
            
        }
    }
    // 点击头像弹窗
    .prompt{
        position: absolute;
        top: 63px;
        right: 5px;
        width: 300px;
        height:160px;
        padding: 20px;
        background: #0A4737;
        div:first-child{
            height:calc(100% - 24px);
            display: flex;
            justify-content: space-between;
            p{
                width: 36px;
                height: 36px;
                background: #fff;
                border-radius:50%;
            }
            div{
                width: calc(100% - 56px);
                display: block;
                div{
                    width: 100%;
                    height: auto;
                    margin-bottom: 10px;
                    i{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        background: #fff;
                        float:right;
                    }
                }
            }
        }
        div:last-child{
            display: flex;
            justify-content: space-between;
            p{
                font-size: 16px;
                display: flex;
                align-items: center;
                cursor: pointer;
                &::before{
                    content: "";
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background: #fff;
                    border-radius: 50%;
                    margin-right:5px;
                }
            }
        }
    }
</style>