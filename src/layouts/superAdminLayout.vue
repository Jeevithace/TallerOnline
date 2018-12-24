<template>
<div class="flexible-content superadmin_content">
    <!--Navbar-->
    <navbar class="flexible-navbar white" position="top" name="MDB" href="#" scrolling>
      <navbar-collapse>
        <navbar-nav right>
          <navbar-item href="" waves-fixed active>Who we are</navbar-item>
          <navbar-item href="https://mdbootstrap.com/vue/vue-bootstrap-getting-started/" waves-fixed>About Services</navbar-item>
          <navbar-item href="https://mdbootstrap.com/vue/vue-bootstrap-getting-started/" waves-fixed>Free Contact Us</navbar-item>
          <navbar-item href="https://mdbootstrap.com/bootstrap-tutorial/" waves-fixed>Free tutorials</navbar-item>
          <navbar-item href="#!" waves-fixed class="cart_info"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></navbar-item>
          <span class="prof_ico"><img src="../assets/images/profile_mg.png"/></span>
          <mdb-dropdown>
            <mdb-dropdown-toggle slot="toggle">Basic dropdown</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
              <div class="dropdown-divider"></div>
              <mdb-dropdown-item>Separated link</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </navbar-nav>
        
        <!--<navbar-nav right>
          <navbar-item href="#!" waves-fixed><fa class="text-black" icon="facebook"/></navbar-item>
          <navbar-item href="#!" waves-fixed><fa icon="twitter"/></navbar-item>
          <navbar-item href="https://github.com/mdbootstrap/bootstrap-material-design" waves-fixed class="border border-light rounded mr-1" target="_blank"><fa icon="github" class="mr-2"/>MDB GitHub </navbar-item>
          <navbar-item href="https://mdbootstrap.com/product/vue-bootstrap-pro/" waves-fixed class="border border-light rounded" target="_blank"><fa icon="diamond" class="mr-2"/>Go Pro </navbar-item>
        </navbar-nav>-->
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->

      
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper"><img alt="" class="img-fluid" src="../assets/images/logo.png"/></a>
      <list-group class="list-group-flush">
        <router-link to="/Dashboard_SA" @click.native="activeItem = 1">
          <list-group-item :action="true" :class="activeItem === 1 && 'active'"><img src="../assets/images/sidebar_icon/dash_icon.png"/> Dashboard</list-group-item>
        </router-link>
        <router-link to="/Profile_SA" @click.native="activeItem = 2">
          <list-group-item :action="true" :class="activeItem === 2 && 'active'"><img src="../assets/images/sidebar_icon/vehicle_icon.png"/>My Vehicles</list-group-item>
        </router-link>
        <router-link to="/tables"  @click.native="activeItem = 3">
          <list-group-item :action="true" :class="activeItem === 3 && 'active'"><img src="../assets/images/sidebar_icon/service_icon.png"/>Services</list-group-item>
        </router-link>
        <router-link to="/maps" @click.native="activeItem = 4">
          <list-group-item :action="true" :class="activeItem === 4 && 'active'"><img src="../assets/images/sidebar_icon/inbox_icon.png"/>Inbox</list-group-item>
        </router-link>
        <router-link to="/404" @click.native="activeItem = 5">
          <list-group-item :action="true" :class="activeItem === 5 && 'active'"><img src="../assets/images/sidebar_icon/taller_icon.png"/>Taller Online Community</list-group-item>
        </router-link>
          <router-link to="/404" @click.native="activeItem = 6">
          <list-group-item :action="true" :class="activeItem === 6 && 'active'"><img src="../assets/images/sidebar_icon/workshop_icon.png"/>Our Workshop</list-group-item>
        </router-link>
          <router-link to="/404" @click.native="activeItem = 7">
          <list-group-item :action="true" :class="activeItem === 7 && 'active'"><img src="../assets/images/sidebar_icon/signout_icon.png"/>Sign Out</list-group-item>
        </router-link>
      </list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 pt-2">
        <router-view></router-view>
      </div>
     
    </main>
  </div>
</template>

<script>
import { Container, Navbar, NavbarItem, NavbarNav, NavbarCollapse, mdbDropdown , mdbDropdownToggle , mdbDropdownMenu, mdbDropdownItem, Btn, Fa, ListGroup, ListGroupItem, CardBody, Footer, waves } from 'mdbvue'

import Dashboard from '@/views/customer-view/Dashboard'
import Myvehicles from '@/views/customer-view/Myvehicles'
import Addnewvehicle from '@/views/customer-view/Addnewvehicle'
import Vehicledetail from '@/views/customer-view/Vehicledetail'
import Healthindex from '@/views/customer-view/Healthindex'
import MaintenanceHistory from '@/views/customer-view/MaintenanceHistory'
import GetQuote from '@/views/customer-view/GetQuote'
export default {
  name: 'customerLayout',
  components: {
  Container,
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Btn,
    ListGroup,
    ListGroupItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem,
    Fa,
    CardBody,
    'ftr': Footer,
     Dashboard,
     Myvehicles,
     Addnewvehicle,
     Vehicledetail,
     Healthindex,
     MaintenanceHistory,
     GetQuote
  },
   data () {
    return {
      activeItem: 1
    }
  },
  beforeMount () {
    this.activeItem = this.$route.matched[0].props.default.page
  },
  mixins: [waves]

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main {
  background-color: #EDEDEE;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img{
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
<style>
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>