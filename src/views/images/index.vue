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
        <el-button type="success" size="medium" @click="openAlbumDialog(false)">创建相册</el-button>
        <el-button type="warning" size="medium">上传图片</el-button>
      </el-header>
      <el-container>
        <el-aside class="bg-white border-right" width="200px" style="position: absolute; top: 60px; left: 0; bottom: 60px;">
          <ul class="list-group list-group-flush">
            <album-item 
              v-for="(item, index) of albums" 
              :key="index"
              :index="index"
              :item="item"
              :active="albumIndex == index"
              @change="changeAlbums"
              @edit="openAlbumDialog"
              @del="albumDelete"
            ></album-item>
          </ul>
        </el-aside>
        <el-main style="position: absolute; top: 60px; left: 200px; right: 0; bottom: 60px;">
          <div style="height: 1000px;"></div>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>

      <el-dialog title="编辑相册" :visible.sync="dialogAlbumVisible">
        <el-form :model="albumForm" label-width="100px">
          <el-form-item label="相册名称">
            <el-input v-model="albumForm.name" placeholder="亲输入相册名称" style="width: 300px;"></el-input>
          </el-form-item>
          <el-form-item label="相册排序">
            <el-input-number v-model="albumForm.order" :min="0"></el-input-number>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogAlbumVisible=false">取消</el-button>
          <el-button type="success" @click="confirAlbum">确认</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
import albumItem from './albumItem.vue';
export default {
  name: 'Images',
  components: {
    albumItem
  },
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
        albumEditIndex: -1,
        dialogAlbumVisible: false,
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
        ],
        albumForm: {
          name: '',
          order: ''
        }
    }
  },
  methods: {
    changeAlbums(index) {
      this.albumIndex = index
    },
    openAlbumDialog(obj) {
      // obj 存在就是编辑
      if(obj) {
        let { item, index } = obj;
        this.albumForm.name = item.name;
        this.albumForm.order = item.order;
        this.albumEditIndex = index;

        return this.dialogAlbumVisible = true
      }
      // 创建
      this.albumForm = {
        name: '',
        order: 0
      }
      this.albumEditIndex = -1
      this.dialogAlbumVisible = true
    },
    confirAlbum() {
      // 编辑
      if (this.albumEditIndex > -1) {
        this.albums[this.albumEditIndex].name = this.albumForm.name;
        this.albums[this.albumEditIndex].order = this.albumForm.order;
        this.dialogAlbumVisible = false
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
        return false
      } else {
        this.albums.unshift({
          name: this.albumForm.name,
          order: this.albumForm.order,
          num: 0
        })
        this.dialogAlbumVisible = false
        this.$message({
          type: 'success',
          message: '创建成功'
        })
      }
    },
    albumDelete(index) {
      this.$confirm('是否删除该相册', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        this.albums.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功'
        })
      })
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