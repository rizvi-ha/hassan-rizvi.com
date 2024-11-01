<template>
  <div class="home-container">
    <div class="text-content">
      <h1>Hassan Rizvi</h1>
      <p>I'm a currently a Computer Science student at UCLA (with some courses in Mechanical Engineering as well)</p>
      <p>My professional interests include software engineering, developer tooling, CI/CD, machine learning, embedded software, and more!</p>
      <p>My personal interests include studying Mandarin, reading, gardening, building mechanical keyboards, and exploring LA's restaurant scene (and cats ;P)</p>
    </div>
	<img :src="require('@/assets/cat.jpg')" alt="Portfolio Image" class="portfolio-image" />
    </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>

<style>
.home-container {
  display: flex;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  max-width: 800px;
  margin: 0 auto; 
  padding: 2rem;
  padding-top: 2rem;
  margin-top: 9rem;
  gap: 1.5rem; 
  background: #dedac5;
  border-radius: 15px;
}

.text-content {
  flex: 1; 
}

.portfolio-image {
  max-width: 200px; 
  height: auto; 
  border-radius: 15px;
}
</style>
