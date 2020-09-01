<template>
  <li class="list-group-item list-group-item-action d-flex align-items-center" 
      style="justify-content: space-between;"
      :class="active? 'sum-active active': ''"
      @click="changeAlbums(index)"
  >
    {{ item.name }}
    <el-dropdown>
      <span class="btn btn-light btn-sm border">
        {{ item.num }} <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.stop.native="$emit('edit', {item, index})">修改</el-dropdown-item>
        <el-dropdown-item  @click.stop.native="$emit('del', index)">删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </li>
  
</template>

<script>
export default {
  name: 'albumItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    changeAlbums(index) {
      this.$emit('change', index)
    },
  }

}
</script>

<style>

</style>