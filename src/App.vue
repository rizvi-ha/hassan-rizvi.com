<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/academics">Academics</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/work-experience">Work Experience</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

nav {
  display: flex;
  gap: 2rem; 
  padding: 1rem;
  background-color: #c9c5b1;
  border-radius: 20px; 
  max-width: 600px;
  margin: 1rem auto;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: #333;
}

* {
  font-family: 'Marcellus', sans-serif;
}

html, body {
  height: 100%;
  background-color: #ede8d0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#content {
  flex: 1;
}

.router-link-active {
  font-weight: bold;
  color: #6e632e; 
  border-bottom: 2px solid #6e632e;
}

</style>
