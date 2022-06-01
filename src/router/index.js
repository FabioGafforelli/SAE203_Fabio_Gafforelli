import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue';
import ArtistesView from '../views/ArtistesView.vue';
import FestivalView from '../views/FestivalView.vue';
import BilletterieView from '../views/BilletterieView.vue';
import ContactView from '../views/ContactView.vue';
import MentionslegalesView from '../views/MentionslegalesView.vue';
import Page404View from '../views/404View.vue';
import Fiche_artisteView from '../views/Fiche_artisteView.vue';
import Fiche_concertView from '../views/Fiche_concertView.vue';
import StyleGuideView from '../views/StyleGuideView.vue';
import ModifierView from '../views/artistes/ModifierView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/festival', name: 'FestivamView', component: FestivalView },
    { path: '/billetterie', name: 'BilletterieView', component: BilletterieView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/mentions', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/:pathMatch(.*)*', name: 'Page404View', component: Page404View },
    { path: '/ficheartiste', name: 'Fiche_artisteView', component: Fiche_artisteView },
    { path: '/ficheconcert', name: 'Fiche_ConcertView', component: Fiche_concertView },
    { path: '/style-guide', name: 'StyleGuideView', component: StyleGuideView },
    { path: '/Modifier', name: 'ModifierView', component: ModifierView },
  ]
})

export default router;
