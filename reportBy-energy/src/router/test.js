export default {
    path:'/test',
    component: () => import('@/components/test/Test.vue'),
    children:[
        // ...TestChild
        { path: 'a', name: 'a', component: ()=> import('@/components/test/child/TestOne.vue'),
            children:[
                {path: 'sona', name: 'sona', component: ()=> import('@/components/test/child/son/OneSon.vue')},
            ] 
        },
        { path: 'b', name: 'b', component: ()=> import('@/components/test/child/TestTwo.vue'),
            children:[
                {path: 'sonb', name: 'sonb', component: ()=> import('@/components/test/child/son/TwoSon.vue')},
            ] 
        },
    ]
}