import Vue from 'vue';
import Router from 'vue-router';
import Navigation from '../components/navigation/Navigation';
import Users from '../components/users/Users';
import Object from '../components/object/Object';
import Price from '../components/object/Price';
import Footer from '../components/footer/Footer';
import UserDetails from '../components/userdetails/UserDetails';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Object',
      components: {
        navigation: Navigation,
        default: Object,
        footer: Footer,
      },
    },
    
  ],
  
});
