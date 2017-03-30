
const views = [
    {
        path: '/',
        component: require('./views/Home.vue')
    },
    {
        path: '/overview',
        component: require('./views/Overview.vue')
    },
    {
        path: '/contact',
        component: require('./views/Contact.vue')
    },
    {
        path: '/news',
        component: require('./views/News.vue'),
    },

    {
        path: '/grant-information',
        component: require('./views/GrantInformation.vue')
    },
    {
        path: '/documents',
        component: require('./views/Documents.vue'),
    },
    {
        path: '/webinars',
        component: require('./views/Webinars.vue')
    },
    {
        path: '/faqs',
        component: require('./views/Faqs.vue'),
    },
    {
        path: '/news/sample0',
        component: require('./views/news/Sample0.vue'),
    },
    {
        path: '/news/sample1',
        component: require('./views/news/Sample1.vue'),
    },
    {
        path: '/news/sample2',
        component: require('./views/news/Sample2.vue'),
    },
    {
        path: '/news/sample3',
        component: require('./views/news/Sample3.vue'),
    },
    {
        path: '/grants',
        component: require('./views/grants'),
    },
    {
        path: '/grants/nofo-voca-legal-assist',
        component: require('./views/grants/NofoVocaLegalAssist'),
    },
    {
        path: '/grants/test-grant',
        component: require('./views/grants/TestGrant'),
    },
]

const utilities =  require('@/utilities')
export default utilities.generateRoutes(views)
