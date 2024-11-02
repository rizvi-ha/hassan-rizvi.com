<template>
  <div class="contact-container"> 
    <div class="contact-content">
    <h1>Contact</h1>
    <p>Feel free to reach out to me at:</p> 
    <p>harizvi1414 AT ucla DOT edu for any inquiries! </p> 
    <p> You can also find me on <a href="https://www.linkedin.com/in/hassan-rizvi-01a804214/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/rizvi-ha" target="_blank">Github</a></p> 
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Contact',
};
</script>

<style>

.contact-container {
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

.contact-content {
  flex: 1;
}

</style>

