<template>
  <div class="image-box">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px" style="position: absolute; top: 60px; left: 0; bottom: 60px;">
          <div style="height: 1000px;"></div>
        </el-aside>
        <el-main style="position: absolute; top: 60px; left: 200px; right: 0; bottom: 60px;">
          <div style="height: 1000px;"></div>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Images'
}
</script>

<style>
  .image-box > .el-container {
    position: absolute;
    top: 55px;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>