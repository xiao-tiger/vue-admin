<template>
  <div>
    <el-container class="l-container">
      <el-header class="l-header">
        <h3 style="margin: 0; line-height: 60px;">{{ $conf.logo }}</h3>
        <el-menu
          :default-active="navBar.active"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item 
            :index="index|numToString" 
            v-for="(item, index) of navBar.list" 
            :key="index"
          >
            {{item.name}}
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <el-avatar
                shape="circle"
                size="small"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              ></el-avatar>我的
            </template>
            <el-menu-item index="6-1">修改</el-menu-item>
            <el-menu-item index="6-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>

      <el-container style="height: 100%; padding-bottom: 60px;">
        <!-- 侧边布局 -->
        <el-aside width="200px">  
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @select="slideSelect"
          >
            <el-menu-item 
              :index="index | numToString"
              v-for="(item, index) of slideMenu.submenu" 
              :key="index"
            >
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 主布局 -->
        <el-main>
          <li v-for="i in 100" :key="i">{{i}}</li>
        </el-main>
      </el-container>
    </el-container>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import common from '@/common/mixins/common.js'


export default {
  // 混入了filter numToString
  mixins: [common],
  data() {
    return {
      activeIndex2: 0,
      currentSelectedIndex: 0,
      navBar: {}
      // navBar: {
      //   active: '0',
      //   list: [
      //     {
      //       name: '首页',
      //       subActive: '0',
      //       submenu: [
      //         {
      //           icon: 'el-icon-s-home',
      //           name: '后台首页'
      //         },
      //         {
      //           icon: 'el-icon-s-claim',
      //           name: '商品列表'
      //         }
      //       ]
      //     },
      //     {
      //       name: '商品',
      //       submenu: [
      //         {
      //           icon: 'el-icon-s-claim',
      //           name: '商品列表'
      //         }
      //       ]
      //     },
      //     {
      //       name: '订单',
      //       submenu: []
      //     },
      //     {
      //       name: '会员',
      //       submenu: []
      //     },
      //     {
      //       name: '设置',
      //       submenu: []
      //     }
      //   ]
      // }
    }
  },
  created() {
    this.navBar = this.$conf.navBar
  },
  computed: {
    slideMenu() {
      return this.navBar.list[this.currentSelectedIndex] || []
    },
    
  },
  methods: {
    handleSelect(key, keyPath) {
      this.currentSelectedIndex = Number(key)
    },
    slideSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  // filters: {
  //   numToString(value) {
  //     return value.toString()
  //   }
  // }
};
</script>

<style>
.l-container {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
}
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #545c64;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>
