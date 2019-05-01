<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/"></b-nav-item>
          <b-nav-item to="/games"></b-nav-item>
           <b-nav-item to="/">Обекти</b-nav-item>
           <b-nav-item to="/">Ценова листа</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  export default {
    components: {

    }
  };
</script>
