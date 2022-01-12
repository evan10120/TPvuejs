import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recherche from '../views/Recherche.vue'
import Categories from '../views/Categories.vue'
import Messages from '../views/Messages.vue'
import CategorieMessages from '../views/CategoriesMessages'
import NouvelleCategorie from '../views/NouvelleCategorie'
import CategorieEdit from "@/views/CategorieEdit";
import MessageEdit from "@/views/MessageEdit";
import NouveauMessage from "@/views/NouveauMessage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nouvelle-categorie',
    name: 'nouvelle-categorie',
    component: NouvelleCategorie
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    children: [
      {
        path: ':id',
        name: 'categorie_messages',
        component: CategorieMessages
      },
    ]
  },
  {
    path: '/edit-categorie/:id',
    name: 'categorie_edit',
    component: CategorieEdit
  },
  {
    path: '/delete-categorie/:id',
    name: 'categorie_delete'
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages,
  },
  {
    path: '/nouveau-message',
    name: 'nouveau-message',
    component: NouveauMessage
  },
  {
    path: '/message-edit/:id',
    name: 'message_edit',
    component: MessageEdit
  },
  {
    path: '/message-delete/:id',
    name: 'message_delete'
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche
  },
  {
    path: '/a-propos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
