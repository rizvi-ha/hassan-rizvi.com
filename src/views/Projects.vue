<template>
  <div>
    <div class="title-container">
      <h1>Projects</h1>
    </div>
    <div class="tabs">
      <button 
        class="tab" 
        :class="{ active: activeTab === 'forFun' }" 
        @click="activeTab = 'forFun'">
        Fun
      </button>
      <button 
        class="tab" 
        :class="{ active: activeTab === 'technical' }" 
        @click="activeTab = 'technical'">
        Technical
      </button>
    </div>
    <div class="projects">
      <div v-if="activeTab === 'forFun'" class="project-list">
        <div v-for="(project, index) in forFunProjects" :key="index" class="project-entry">
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
          <div class="image-carousel">
            <button @click="prevImage(index)" class="carousel-button">‹</button>
            <img :src="project.images[carouselIndices[activeTab][index]]" alt="Project Image" class="project-image" />
            <button @click="nextImage(index)" class="carousel-button">›</button>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'technical'" class="project-list">
        <div v-for="(project, index) in technicalProjects" :key="index" class="project-entry">
          <div class="project-info">
            <div v-if="project.link == '#'">
	      <h3>{{ project.title }}</h3>
	    </div>
	    <div v-else>
	      <a :href="project.link" target="_blank" rel="noopener noreferrer">
	        <h3>{{ project.title }}</h3>
	      </a>
	    </div>
            <p>{{ project.description }}</p>
          </div>
          <div class="image-carousel">
	    <div v-if="project.images.length > 1">
               <button @click="prevImage(index)" class="carousel-button">‹</button>
	    </div>
            <img :src="project.images[carouselIndices[activeTab][index]]" alt="Project Image" class="project-image" />
            <div v-if="project.images.length > 1">
               <button @click="nextImage(index)" class="carousel-button">›</button>
	    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      activeTab: 'technical' as 'technical' | 'forFun',
      carouselIndices: {'technical' : [0, 0, 0, 0, 0, 0, 0], 'forFun': [0]},
      forFunProjects: [
        {
          title: 'Bakeneko 65',
          link: '#',
          description: 'I built my current keyboard from scratch using my resources at 3D4E. It is a 65% layout keyboard with a custom-ordered PCB, a 3D-printed case, and lubed MMD Princess Tactile switches. Keycaps are NicePBT Black on White. Plate is also hand-made, I laser-cut it myself as you can see in the attached pictures.',
          images: [require('@/assets/keeb.jpg'), require('@/assets/pcb.jpg'), require('@/assets/plate.jpg')],
        },
      ] as { title: string; link: string; description: string; images: string[] }[],
      technicalProjects: [
        {
	  title: "task-tomato",
          link: 'https://tt.hassan-rizvi.com/',
          description: 'I found myself often times using Pomodoro timers online (shoutout to pomofocus.io) while writing out timelines on paper, which made me realize that an online tool that combined these things would be really useful to me. This website aims to be a much more complete scheduling/productivity tool than a simple timer. At the top you have a timeline of events that you can populate with tasks from your To-Do list, and you get a timer based on the current time and the scheduling of your events. Developed using Svelte and Javascript.',
          images: [require('@/assets/tomato.png')],
        },
        {
          title: 'JZipParallel (CS 131)',
          link: 'https://github.com/rizvi-ha/JZipParallel',
          description: 'Developed in Java to parallelize gzip-style compression, splitting the input stream into chunks between multiple cores. Implemented advanced concurrency mechanisms, achieving a significant reduction in compression time compared to traditional gzip, with performance tests showing an average speed increase of 300%.',
          images: [require('@/assets/compress.png')],
        },
	{
	  title: '\'Surgery\' Robot (3D4E Biomed)',
	  link: '#',
	  description: 'Led 15 members in developing a proof-of-concept \'surgery\' robot. I put surgery in quotes because it was far too small in scale and inaccurate to be trusted with a human life, but it was a great technical challenge and a fun project to work on. We used Arduino and 3D-printed parts to create a robot that could move in 3 dimensions and rotate an interchangable pen-tool around. The robot was controlled by tracking a user\'s own special pen-tool with a camera and OpenCV.',
	  images: [require('@/assets/robot.jpg'), require('@/assets/group.jpg'), require('@/assets/tracking.png')],
        },	
        {
	  title: 'Partial Convolution Web Demo (CS 188)',
	  link: 'https://github.com/rizvi-ha/pconv-demo',
	  description: 'For extra credit in CS 188, a classmate and I made a functional web demo to show off partial convolutions for image inpainting (filling in holes in images using AI). We used PyTorch to implement the partial convolution algorithm and Flask to serve the model to a web interface. The demo allows users to upload an image with a hole in it, and the model will fill in the hole with realistic-looking content.',
	  images: [require('@/assets/pconv.gif')],
        },
        {
	  title: 'hassan-rizvi.com',
	  link: '#',
	  description: 'This website! Build using Vue.js and TypeScript, as you can tell this was pretty hastily thrown together but I think it\'s a nice way to display my interests and experiences.', 
	  images: [require('@/assets/website.png')],
        },
        {
	  title: 'Kalah (CS 32)',
	  link: 'https://github.com/rizvi-ha/Kalah',
	  description: 'Developed in C++ to implement the game Mancala, a 2-player board game where players move stones around a board to try to capture the most stones. The game was implemented with a text-based interface and a simple AI opponent that used a minimax algorithm to make decisions. The game was designed to be easily extensible to allow for different board sizes and rule variations.', 
	  images: [require('@/assets/mancala.jpg')],
        },
        {
	  title: 'Sova\'s Drone From Valorant (3D4E Flight)',
	  link: '#',
	  description: 'We built a replica of Sova\'s drone from the game Valorant. The drone body was 3D-printed, and we used a Teensy microcontroller to control the motors. Being a two-propeller drone, flight stabilization and converting pitch/yaw/roll to motor actuation was pretty nontrivial. I worked on the software side to enable the controls, utilizing the dRehmFlight library to interface with the Teensy\'s sensors and motors in Arduino C.', 
	  images: [require('@/assets/sova.png'), require('@/assets/sova2.png')],
        },
      ] as { title: string; link: string; description: string; images: string[] }[],
    };
  },
  
methods: {
  nextImage(index: number) {
    const projects = this.activeTab === 'forFun' ? this.forFunProjects : this.technicalProjects;
    if (projects[index] && projects[index].images) {
      this.carouselIndices[this.activeTab][index] = (this.carouselIndices[this.activeTab][index] + 1) % projects[index].images.length;
    }
  },
  prevImage(index: number) {
    const projects = this.activeTab === 'forFun' ? this.forFunProjects : this.technicalProjects;
    if (projects[index] && projects[index].images) {
      this.carouselIndices[this.activeTab][index] =
        (this.carouselIndices[this.activeTab][index] - 1 + projects[index].images.length) % projects[index].images.length;
    }
  },
}
});
</script>

<style>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.tab {
  background-color: #c9c5b1;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tab.active {
  background-color: #999687; 
}

.project-list {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.project-entry {
  display: flex;
  align-items: center; 
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #dedac5;
  width: 80%;
  position: relative;
}

.image-carousel {
  display: flex;
  align-items: center;
  margin-left: 1rem; 
}

.carousel-button {
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
}

.project-image {
  max-width: 500px; 
  height: auto;
  border-radius: 8px;
}

.project-info {
  text-align: left; 
}

.title-container {
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 5rem;
}

.projects {
  margin-top: 3rem;
}
</style>
