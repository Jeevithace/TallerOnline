import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Login from '@/views/customer-view/Login'
import Forgotpassword from '@/views/customer-view/Forgotpassword'
import Register from '@/views/customer-view/Register'
import Dashboard from '@/views/customer-view/Dashboard'
import Myvehicles from '@/views/customer-view/Myvehicles'
import Addnewvehicle from '@/views/customer-view/Addnewvehicle'
import Vehicledetail from '@/views/customer-view/Vehicledetail'
import Healthindex from '@/views/customer-view/Healthindex'
import MaintenanceHistory from '@/views/customer-view/MaintenanceHistory'
import Addnewquote from '@/views/customer-view/Addnewquote'
import Maintenancehistorydetail from '@/views/customer-view/Maintenancehistorydetail'
import Servicesselectdetail from '@/views/customer-view/Servicesselectdetail'
import GetQuote from '@/views/customer-view/GetQuote'
import GetquoteCheckdate from '@/views/customer-view/GetquoteCheckdate'
import ServicesInprogress from '@/views/customer-view/ServicesInprogress'
import ServiceGPS from '@/views/customer-view/ServiceGPS'
import ServiceImages from '@/views/customer-view/ServiceImages'
import Contactspecialist from '@/views/customer-view/Contactspecialist'
import CompletedService from '@/views/customer-view/CompletedService'
import CompletedServiceDetail from '@/views/customer-view/CompletedServiceDetail'
import QuoteRequest from '@/views/customer-view/QuoteRequest'
import Collisionandpaint from '@/views/customer-view/Collisionandpaint'
import Requestedforquote from '@/views/customer-view/Requestedforquote'
import Tallercommunity from '@/views/customer-view/Tallercommunity'
import Tallercommunitydetail from '@/views/customer-view/Tallercommunitydetail'
import ScheduleService from '@/views/customer-view/ScheduleService'
import SchedulePayment from '@/views/customer-view/SchedulePayment'
import ServiceConfirm1 from '@/views/customer-view/ServiceConfirm1'
import ServiceConfirm2 from '@/views/customer-view/ServiceConfirm2'
import ServiceConfirm3 from '@/views/customer-view/ServiceConfirm3'
import Workshop_CV from '@/views/customer-view/Workshop_CV'
import Myinformation from '@/views/customer-view/Myinformation'
import Cart from '@/views/customer-view/Cart'
import About_us from '@/views/customer-view/About_us'
import inbox from '@/views/customer-view/inbox'

import Contact_us from '@/views/customer-view/Contact_us'
import customerLayout from '@/layouts/customerLayout'
import workshopLayout from '@/layouts/workshopLayout'
import Login_SA from '@/views/super_admin-view/Login_SA'
import Profile_SA from '@/views/super_admin-view/Profile_SA'
import Dashboard_SA from '@/views/super_admin-view/Dashboard_SA'

import superAdminLayout from '@/layouts/superAdminLayout'

import Login_WW from '@/views/workshop-view/Login_WW'
import Forgotpassword_WW from '@/views/workshop-view/Forgotpassword_WW'
import Profile_WW from '@/views/workshop-view/Profile_WW'
import Services_WW from '@/views/workshop-view/Services_WW'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/Forgotpassword',
      name: 'Forgotpassword',
      component: Forgotpassword
    },

    {
      path: '/Login_WW',
      name: 'Login_WW',
      component: Login_WW
    },

    {
      path: '/Forgotpassword_WW',
      name: 'Forgotpassword_WW',
      component: Forgotpassword_WW
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },

    {
      path: '/Login_SA',
      name: 'Login_SA',
      component: Login_SA
    },

    
    {
      path: '/customerLayout',
      name: 'customerLayout',
      component: customerLayout,
       children: [
         {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
         },
         {
          path: '/Myvehicles',
          name: 'Myvehicles',
          component: Myvehicles
         },
         {
          path: '/Addnewvehicle',
          name: 'Addnewvehicle',
          component: Addnewvehicle
         },   
         {
          path: '/Vehicledetail',
          name: 'Vehicledetail',
          component: Vehicledetail
         },
         {
          path: '/Healthindex',
          name: 'Healthindex',
          component: Healthindex
         },
         {
          path: '/MaintenanceHistory',
          name: 'MaintenanceHistory',
          component: MaintenanceHistory
         },
         {
          path: '/Addnewquote',
          name: 'Addnewquote',
          component: Addnewquote
         },
         {
          path: '/Maintenancehistorydetail',
          name: 'Maintenancehistorydetail',
          component: Maintenancehistorydetail
         },
         {
          path: '/Servicesselectdetail',
          name: 'Servicesselectdetail',
          component: Servicesselectdetail
         },
         {
          path: '/GetQuote',
          name: 'GetQuote',
          component: GetQuote
         },
         {
          path: '/GetquoteCheckdate',
          name: 'GetquoteCheckdate',
          component: GetquoteCheckdate
         },
         {
          path: '/ServiceGPS',
          name: 'ServiceGPS',
          component: ServiceGPS
         },
         {
          path: '/ServiceImages',
          name: 'ServiceImages',
          component: ServiceImages
         },
         {
          path: '/ServicesInprogress',
          name: 'ServicesInprogress',
          component: ServicesInprogress
         },
         {
          path: '/QuoteRequest',
          name: 'QuoteRequest',
          component: QuoteRequest
         },
         
         {
          path: '/Contactspecialist',
          name: 'Contactspecialist',
          component: Contactspecialist
         },
         {
          path: '/CompletedService',
          name: 'CompletedService',
          component: CompletedService
         },
         {
          path: '/CompletedServiceDetail',
          name: 'CompletedServiceDetail',
          component: CompletedServiceDetail
         },
         {
          path: '/Collisionandpaint',
          name: 'Collisionandpaint',
          component: Collisionandpaint
         },
         {
          path: '/Requestedforquote',
          name: 'Requestedforquote',
          component: Requestedforquote
         },
         {
          path: '/Tallercommunity',
          name: 'Tallercommunity',
          component: Tallercommunity
         },

         {
          path: '/Tallercommunitydetail',
          name: 'Tallercommunitydetail',
          component: Tallercommunitydetail
         },

         {
          path: '/ScheduleService',
          name: 'ScheduleService',
          component: ScheduleService
         },

         {
          path: '/SchedulePayment',
          name: 'SchedulePayment',
          component: SchedulePayment
         },

         

         {
          path: '/ServiceConfirm1',
          name: 'ServiceConfirm1',
          component: ServiceConfirm1
         },
         {
          path: '/ServiceConfirm2',
          name: 'ServiceConfirm2',
          component: ServiceConfirm2
         },
         {
          path: '/ServiceConfirm3',
          name: 'ServiceConfirm3',
          component: ServiceConfirm3
         },
         
         {
          path: '/Workshop_CV',
          name: 'Workshop_CV',
          component: Workshop_CV
         },

         {
          path: '/Myinformation',
          name: 'Myinformation',
          component: Myinformation
         },
         

         {
          path: '/Cart',
          name: 'Cart',
          component: Cart
         },

         
         {
          path: '/Contact_us',
          name: 'Contact_us',
          component: Contact_us
         },

         
         {
          path: '/About_us',
          name: 'About_us',
          component: About_us
         },
         {
          path: '/inbox',
          name: 'inbox',
          component: inbox
         }

         
        
       ]
    },
   
    {
      path: '/workshopLayout',
      name: 'workshopLayout',
      component: workshopLayout,
       children: [
         {
            path: '/Services_WW',
            name: 'Services_WW',
            component: Services_WW
         },
         {
          path: '/Profile_WW',
          name: 'Profile_WW',
          component: Profile_WW
         },
       ]
    },


    {
      path: '/superAdminLayout',
      name: 'superAdminLayout',
      component: superAdminLayout,
       children: [
         {
            path: '/Dashboard_SA',
            name: 'Dashboard_SA',
            component: Dashboard_SA
         },
         {
          path: '/Profile_SA',
          name: 'Profile_SA',
          component: Profile_SA
         }
       ]
    },
  ]
})
