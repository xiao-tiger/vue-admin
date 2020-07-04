export default {
  logo: 'UNI-ADMINE',
  navBar: {
    active: '0',
    list: [
      {
        name: '首页',
        subActive: '0',
        submenu: [
          {
            icon: 'el-icon-s-home',
            name: '后台首页'
          },
          {
            icon: 'el-icon-s-claim',
            name: '商品列表'
          }
        ]
      },
      {
        name: '商品',
        submenu: [
          {
            icon: 'el-icon-s-claim',
            name: '商品列表'
          }
        ]
      },
      {
        name: '订单',
        submenu: []
      },
      {
        name: '会员',
        submenu: []
      },
      {
        name: '设置',
        submenu: []
      }
    ]
  }
}