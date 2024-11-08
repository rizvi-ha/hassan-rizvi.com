import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Academics from './views/Academics.vue';
import Projects from './views/Projects.vue';
import WorkExperience from './views/WorkExperience.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', component: Home, meta: {title: 'Hassan Rizvi'} },
  { path: '/academics', component: Academics, meta: {title: 'Hassan Rizvi - Academics'} },
  { path: '/projects', component: Projects, meta: {title: 'Hassan Rizvi - Projects'}},
  { path: '/work-experience', component: WorkExperience, meta: {title: 'Hassan Rizvi - Experience'}},
  { path: '/contact', component: Contact, meta: {title: 'Hassan Rizvi - Contact'}},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
