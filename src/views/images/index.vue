<template>
  <div class="image-box">
    <el-container>
      <el-header class="d-flex align-items-center border-bottom">
        <div class="mr-auto">
            <el-select v-model="value" size="medium" placeholder="请选择" style="width: 150px;" class="mr-2">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="value" size="medium" placeholder="请输入内容" style="width: 150px;" class="mr-2"></el-input>
            <el-button type="success" size="medium">搜索</el-button>
        </div>
        <el-button type="success" size="medium">创建相册</el-button>
        <el-button type="warning" size="medium">上传图片</el-button>
      </el-header>
      <el-container>
        <el-aside class="bg-white border-right" width="200px" style="position: absolute; top: 60px; left: 0; bottom: 60px;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item list-group-item-action d-flex align-items-center" style="justify-content: space-between;"
                v-for="(item, index) of albums" :key="index"
                :class="albumIndex == index? 'sum-active active': ''"
                @click="changeAlbums(index)"
            >
              {{ item.name }}
              <el-dropdown>
                <span class="btn btn-light btn-sm border">
                  {{ item.num }} <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>修改</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
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
  name: 'Images',
  data() {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        albumIndex: 0,
        albums: [
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
          { name: '相册1', num: 4 },
        ]
    }
  },
  methods: {
    changeAlbums(index) {
      this.albumIndex = index
    }
  }
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
  .sum-active {
    color: #67c23A !important;
    background-color: #f0f9eb !important;
    border-color: #c2e7b0 !important;
  }
</style>