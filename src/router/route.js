import Layout from '../views/Layout.vue'

const routes = [
    {
        path: '/',
        name: 'layout',
        redirect: { name: 'index' },
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'index',
                meta: { title: '后台首页' },
                component: () => import('../views/index/index.vue')
            },
            {
                path: 'shop/goods/list',
                name: 'shop_goods_list',
                meta: { title: '商品列表' },
                component: () => import('../views/shop/goods/list.vue')
            },
            {
                path: 'images',
                name: 'images',
                meta: { title: '相册管理' },
                component: () => import('../views/images/index.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '*',
        redirect: { name: 'index' }
    }
]


export default routes