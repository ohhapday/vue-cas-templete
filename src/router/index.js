import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter);

const UserHome = {template: '<div>Home</div>'};
const UserProfile = {template: '<div>Profile</div>'};
const UserPosts = {template: '<div>Posts</div>'};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/user/:id',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '',
          component: UserHome,
        }, {
          path: 'profile',
          component: UserProfile,
        }, {
          path: 'posts',
          component: UserPosts,
        }
      ],
    }
  ]
});

export default router;
