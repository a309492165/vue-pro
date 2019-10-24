<template>
    <div class="main">
        <h1 v-for="(item,idx) in titles" :key="idx" @click="JumpTo(idx)">{{item}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            titles:['核准','已建']
        }
    },
    methods: {
        JumpTo(idx){
            this.$router.push({path:"/test"});
        },
    },
}
</script>
<style lang="scss" scoped>
    .main{
        color:red;
        display: flex;
        width: 100px;
        margin:0 auto;
        justify-content: space-between;
        h1{
            font-size: 20px;
            color: #0ff;
            cursor: pointer;
        }
    }
</style>