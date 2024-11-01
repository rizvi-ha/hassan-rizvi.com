<template>
  <div class="academics-container">
    <h1>Academics</h1>
    
    <!-- Tab Buttons -->
    <div class="tabs">
      <button :class="{ active: activeTab === 'research' }" @click="activeTab = 'research'">Research</button>
      <button :class="{ active: activeTab === 'classes' }" @click="activeTab = 'classes'">Favorite Courses</button>
      <button :class="{ active: activeTab === 'extracurriculars' }" @click="activeTab = 'extracurriculars'">Extracurriculars</button>
    </div>
    
    <!-- Tab Content -->
    <transition name="slide-fade" mode="out-in">
    <div :key="activeTab" class="tab-content">
      <div v-if="activeTab === 'research'">
	<div class="list-entry">
        <h2>UCLA Brain Tumor Imaging Laboratory</h2>
        <p>During the school year, I do computer vision and deep learning research on MRI images with UCLA Health's Brain Tumor Imaging Laboratory.</p>
	<p>This involves running experiments using the PyTorch and MONAI frameworks. For example, one of my projects is to generate PET scans from MRI images using a Generative Adversarial Network. (which would be cool because getting PET scans is expensive, invasive, and radioactive)</p>
        <img :src="require('@/assets/ddd.png')" alt="BTIL Image" class="btil-image" />
	</div>
      </div>
      <div v-if="activeTab === 'classes'">
	<div class="list-entry">
           <h2>CS 131 - Programming Languages</h2>
	   <h3>Professor: Paul Eggert</h3>
	   <p>Concepts in design and use of programming languages, including abstraction, modularity, control mechanisms, types, declarations, syntax, and semantics. Study of several different language paradigms, including functional, object-oriented, and logic programming.</p> 
	   <p>I particularly enjoyed our deep dive into functional programming, including implementing grammar parsers in OCaml.</p>
	</div>
        <div class="list-entry">
           <h2>CS 188 - Deep Learning for Computer Vision</h2>
	   <h3>Professor: Bolei Zhou</h3>
	   <p> Study of deep learning approaches for computer vision. Students learn to implement and tune the deep neural networks used in various computer vision, such as visual recognition and image generation. Covers learning algorithms, neural architecture design, and practical skills of training and debugging neural networks.</p>
	   <p>For extra credit, a classmate and I made a functional <a href=https://github.com/rizvi-ha/pconv-demo>web demo</a> to show off partial convolutions for image inpainting (filling in holes in images using AI).</p>
	</div>
        <div class="list-entry">
           <h2>CS 111 - Operating Systems</h2>
	   <h3>Professor: Peter Reiher</h3>
	   <p>Principles and design of operating systems. Topics include process management, interprocess communication, memory management, file systems, and device drivers. Basically you learn how your computer *actually* works, which I found fascinating.</p> 
	   <p>I found the concept of paging and virtual memory really interesting, and it was in general just cool to see what goes on in the middle between hardware and application-level software.</p>
	</div>
        <p></p>
      </div>
      <div v-if="activeTab === 'extracurriculars'">
	<div class="list-entry">
	<h2>3D4E @ UCLA (3D Printing for Everyone)</h2>
	<p>○ 1st year: Flight team member (worked on plane)</p>
	<p>○ 2nd year: Flight team member, Secretary</p>
	<p>○ 3rd year: Biomed Project Lead</p>
	<p>○ 4th year: Mechanical Keyboards Project Lead</p>
	<p> I have been with 3D4E since my first year at UCLA, and it has been a rewarding leadership experience, as well as a great avenue for creativity and tinkering! See my project page for some of the things I've built with the club </p> 
	</div>
	<div class="list-entry">
		<h2> UCLA Mildred E. Mathias Botanical Garden </h2>
		<p> On quarters where my schedule allows, I volunteer at the Botanical Garden and assist with planting, weeding, mulching, and other general maintenance! (If you ever visit UCLA you've got to check out the Botanical Garden) </p>
	</div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Academics',
  data() {
    return {
      activeTab: 'research', 
    };
  },
};
</script>

<style>
.academics-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.tabs {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
  padding-top: 1rem;
}

.list-entry {
  padding: 1rem;
  border-radius: 8px;
  background-color: #dedac5;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: #c9c5b1;
  border-radius: 8px;
  transition: background-color 0.3s;
}

button.active {
  background-color: #999687;
}

.tab-content {
  padding-top: 2rem;
  text-align: left;
}

.btil-image {
  max-width: 600px; 
  height: auto; 
  padding: 1rem;
  border-radius: 50px;
}

</style>
