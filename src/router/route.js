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
                component: () => import('../views/index/index.vue')
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