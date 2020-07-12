<template>
  <div>
    <!-- 数据统计 -->
    <el-row :gutter="24">
      <el-col
        v-for="(item, index) of counts"
        :key="index" 
        :span="6"
      >
        <el-card shadow="hover">
          <div class="d-flex align-items-center">
            <i :class="[item.icon, item.color]" 
              class="h4 mb-0 bg-primary text-white text-center mr-3" 
              style="width: 40px; height: 40px;line-height: 40px;"></i>
            <div>
              <h4 class="mb-1">{{ item.num }}</h4>
              <small class="text-muted">{{ item.desc }}</small>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 店铺、订单提示 | 统计图 -->
    
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      counts: [
        { icon: 'el-icon-user-solid', num: 30, desc: '关注人数（个）', color: 'bg-primary' },
        { icon: 'el-icon-s-finance', num: 120, desc: '订单总数（笔）', color: 'bg-success' },
        { icon: 'el-icon-s-order', num: 41, desc: '今日订单总金额（元）', color: 'bg-danger' },
        { icon: 'el-icon-s-data', num: 100, desc: '本月销售（笔）', color: 'bg-warning' }
      ]
    };
  }
};
</script>

<style>
</style>