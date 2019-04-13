import Vue from 'vue';
import Router from 'vue-router';
import Navigation from '../components/navigation/Navigation';
import Users from '../components/users/Users';
import Footer from '../components/footer/Footer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Users',
      components: {
        navigation: Navigation,
        default: Users,
        footer: Footer,
      },
    },
    {
      path: '/user/:id',
      name: 'User',
      components: {
        navigation: Navigation,
        footer: Footer,
      },
    },
  ],
});
