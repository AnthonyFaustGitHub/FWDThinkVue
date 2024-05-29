import { createRouter, createWebHistory } from 'vue-router'
import TicketDetailsView from '../views/TicketDetailsView.vue'
import TicketDetailsSummaryView from '../views/TicketDetailsSummaryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ticketdetails',
      component: TicketDetailsView
    },
    {
      path: '/ticketdetailssummary',
      name: 'ticketdetailssummary',
      component: TicketDetailsSummaryView
    }
  ]
})

export default router