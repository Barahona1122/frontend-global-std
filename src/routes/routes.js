import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import MoviesList from 'src/pages/movies/Movies.vue'
import MoviesShitf from 'src/pages/movies_shift/MoviesShitf.vue';
import LogOut from 'src/pages/auth/Logout.vue';

//CUSTOMER PAGES
import Login from 'src/pages/auth/Login.vue';

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/logout',
    name: 'LogOut',
    component: LogOut
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'movies',
        name: 'Movies',
        component: MoviesList
      },
      {
        path: 'shift',
        name: 'Shift',
        component: MoviesShitf
      },

    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
