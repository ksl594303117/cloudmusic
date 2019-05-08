import Vue from 'vue';
import Router from 'vue-router';

    
import _15573011663769d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _1557301166376d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _155730116637667830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    

    
import _155730116637609e856ed414cb8e875057a8dc144e56e from '@/pages/rank/index.vue';
    

    
import _1557301166376e70859066b0d7f267f4e62817961426e from '@/pages/recommend/index.vue';
    

    
import _155730116637647c9e41cb257bc26c9a65ca6c3ad19f1 from '@/pages/search/index.vue';
    

    
import _1557301166376f53d45102b47bda53816b739b6e5fdf5 from '@/pages/singer/index.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15573011663769d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/",
        "component": _155730116637667830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/rank/index",
        "component": _155730116637609e856ed414cb8e875057a8dc144e56e,
        "meta": {},
        "name": "rank"
    },
    {
        "path": "/recommend/index",
        "component": _1557301166376e70859066b0d7f267f4e62817961426e,
        "meta": {},
        "name": "recommend"
    },
    {
        "path": "/search/index",
        "component": _155730116637647c9e41cb257bc26c9a65ca6c3ad19f1,
        "meta": {},
        "name": "search"
    },
    {
        "path": "/singer/index",
        "component": _1557301166376f53d45102b47bda53816b739b6e5fdf5,
        "meta": {},
        "name": "singer"
    },
    {
        "path": "/error",
        "component": _1557301166376d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/cloudmusic/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
