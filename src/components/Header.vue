<template>
    <header>
      <nav>
        <router-link to="/">Main</router-link> |
        <router-link to="/contact">Contact us</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    background-color: gainsboro;
    padding: 10px;
    text-align: center;
    border-radius: 0.5rem;
  }
  
  nav {
    display: inline-block;
  }
  
  router-link {
    margin-right: 10px;
    color: #fff;
    text-decoration: none;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>