<template>
    <div class="login-container clearfix" v-title data-title="登录">
        <div class="login-title  clearfix">
            <div class="login-title-icon"></div>
            <div class="login-title-text">海上风电大数据平台上报系统</div>
        </div>
        <div class="user-body">
            <div class="user-box">
                <div class="user-header">
                    <span>用户登录</span>
                </div>
                <div class="user-body">
                    <div>
                        <el-input v-model="loginForm.username" placeholder="请输入用户名/手机号"></el-input>
                        <p v-if="!loginForm.username||loginForm.userIf">{{loginForm.userError}}</p>
                    </div>
                    <div>
                        <el-input v-model="loginForm.password" placeholder="请输入密码" show-password></el-input>
                        <p v-if="!loginForm.password||loginForm.passIf">{{loginForm.passError}}</p>
                    </div>
                    <el-button @click="loginIn" :loading="loading">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>