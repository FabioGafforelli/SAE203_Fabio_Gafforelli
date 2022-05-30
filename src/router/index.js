import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue';
import ArtistesView from '../views/ArtistesView.vue';
import FestivalView from '../views/FestivalView.vue';
import BilletterieView from '../views/BilletterieView.vue';
import ContactView from '../views/ContactView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/festival', name: 'FestivamView', component: FestivalView },
    { path: '/billetterie', name: 'BilletterieView', component: BilletterieView },
    { path: '/contact', name: 'ContactView', component: ContactView },
  ]
})

export default router;
