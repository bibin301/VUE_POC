<template>
<div class="header_container">
    <div class="container">
        <b-navbar toggleable="md" type="dark" variant="">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-img src="/static/images/t24prepaid_logo.png" />
                </b-navbar-nav>
                    <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-nav-item v-for="(item,index) in navItems" :key="index" class="nav-item">
                             <router-link v-bind:to = "{ path: item.path}">{{item.title}}</router-link>

                    </b-nav-item>
                        <img src="/static/images/ico-en.png" />
                    </b-nav-form>
                    <b-nav-item-dropdown text="" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</div>
</template>


<script>

  export default {
    name: 'topbar',
    data () {
      return {
        navItems: [{
          title: 'LOGIN',
          path: '/login'
        },
        {
          title: 'REGISTER CARD',
          path: '/register-card'
        },
        {
          title: 'FORGOTTEN DETAILS',
          path: '/forgotten-details'
        },
        {
          title: 'CONTACT US',
          path: '/contact-us'
        }
        ]
      }
    },
    components: {
       
      },
    methods: {
      
    },
    created() {
      
    }
  }
</script>

<style scoped>
.dropdown-item:hover{
  background-color: #02584c !important;
  border: 1px solid #02584c !important;
  color:#fff;
}
.dropdown-item{
  border: none;
}

.header_container a:hover, .header_container a:active, .header_container a:link, .header_container a:visited {
  color: #fff;
  background-color: #02584c !important;
  text-decoration: none;
}
</style>

