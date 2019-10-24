<template>
  <div class="test">
    <v-header></v-header>
    <h1>{{ msg }}</h1>
    <router-link to="/main">主页</router-link>
    <router-link :to="{name:'a'}">去到aaaaaa</router-link>
    <router-link :to="{name:'b'}">去到bbbbbb</router-link>
    <ul>
      <!-- <li v-for="(item,idx) in shipList" :key="idx">
        <span>{{item.accessMode}}</span>&nbsp;&nbsp;<span>{{item.equipmentName}}</span>
        <p>{{item.positionName}}</p>
      </li> -->
    </ul>
    <router-view  :ship-list="shipList"></router-view>
  </div>
</template>