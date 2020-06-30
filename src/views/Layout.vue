<template>
  <div>
    <el-container class="l-container">
      <el-header class="l-header">
        <h3 style="margin: 0; line-height: 60px;">VUE-ADMIN</h3>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">商品</el-menu-item>
          <el-menu-item index="3">订单</el-menu-item>
          <el-menu-item index="4">会员</el-menu-item>
          <el-menu-item index="5">设置</el-menu-item>
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
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </el-menu-item>

            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>

            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
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
export default {
  data() {
    return {
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect() {}
  }
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
