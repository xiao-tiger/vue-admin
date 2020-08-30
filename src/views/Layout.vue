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

      <el-container style="height: 100%;">
        <!-- 侧边布局 -->
        <el-aside width="200px">  
          <el-menu
            :default-active="sildeMenuActive"
            class="el-menu-vertical-demo"
            @select="slideSelect"
            style="height: 100%;"
          >
            <el-menu-item 
              :index="index | numToString"
              v-for="(item, index) of slideMenu" 
              :key="index"
            >
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- 主布局 -->
        <el-main class="bg-light" style="padding-bottom: 60px; position: relative;">
          <div 
            class="border-bottom bg-white" 
            style="padding: 20px; margin: -20px; margin-bottom: 0;"
            v-if="bran.length > 0"
          >
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item 
                v-for="(item, index) of bran"
                :key="index"
                :to="{ path: item.path }"
              >
                {{ item.title }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>

          <router-view></router-view>

          <!-- 回到顶部 -->
          <el-backtop target=".el-main"></el-backtop>
        </el-main>
      </el-container>
    </el-container>

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
      navBar: {},
      bran: []
    }
  },
  created() {
    this.navBar = this.$conf.navBar
    this.getRouterBran()
    this._initNavBar()
  },
  computed: {
    slideMenu() {
      // return this.navBar.list[this.currentSelectedIndex].submenu || []
      return this.navBar.list[this.navBar.active].submenu || []
    },
    sildeMenuActive() {
      return this.navBar.list[this.navBar.active].subActive
    }
  },
  watch: {
    // '$route'(to, from) {
    //   this.getRouterBran()
    // }
    '$route': {
      handler(to, from) {
        localStorage.setItem('navActive', JSON.stringify({
          top: this.navBar.active || '0',
          left: this.navBar.list[this.navBar.active].subActive || '0'
        }))
        this.getRouterBran()
      },
      // immediate: true
    }
  },
  methods: {
    _initNavBar() {
      let r = localStorage.getItem('navActive')
      if (r) {
        r = JSON.parse(r)
        this.navBar.active = r.top
        this.navBar.list[r.top].subActive = r.left
      }
    },
    handleSelect(key, keyPath) {
      // 选中第几个
      this.navBar.active = key
      // this.currentSelectedIndex = Number(key)
      // 默认选中跳转到当前激活项
      if (this.slideMenu.length > 0) {
        this.$router.push({
          name: this.slideMenu[this.navBar.list[this.navBar.active].subActive].pathname
        }).catch(err => {err})
      }
    },
    slideSelect(key, keyPath) {
      this.navBar.list[this.navBar.active].subActive = key
      
      this.$router.push({
        name: this.slideMenu[key].pathname
      }).catch(err => {err})
    },
    // 获取面包屑导航
    getRouterBran() {
      // $route.matched 将会是一个从上到下的所有对象（副本）
      // 包含当前路由的所有嵌套路径片段的路由记录（包含children）
      let b = this.$route.matched.filter(v => v.name)
      let branArr = []
      b.forEach(e => {
        // 过滤 layout 和 index  
        if (e.name === 'index' || e.name === 'layout') {
          return
        } else {
          branArr.push({
            name: e.name,
            path: e.path,
            title: e.meta.title
          })
        }
      });
      // 因为上面的forEach去除掉了
      if (branArr.length > 0) { 
        // 添加首页到面包屑中
        branArr.unshift({
          name: 'index',
          path: '/index',
          title: '首页'
        })
      }
      this.bran = branArr
    }
  }
};
</script>

<style scoped>
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
