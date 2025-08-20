<template>
  <div class="work-container">
    <h1>Work Experience</h1>
    <div class="work-entry">
      <div class="entry-content">
        <h2>Amazon Web Services, <i>Software Engineering Intern</i></h2>
        <p>Santa Monica, CA | June 2025 - September 2025</p>
	<p>○ Built an automated analytics pipeline in AWS Glue to transform raw malware scan data into Parquet datasets with file metadata, threat status, and scan order, enabling large-scale evaluation of threat prioritization strategies. </p> 
	<p>○ Collaborated with AWS security engineers to develop heuristic threat-scoring methods from file metadata, reordering malware scan manifests and achieving a 2.6× faster average threat detection than baseline. </p> 
	<p>○ Developed an end-to-end ML workflow using SageMaker + XGBoost to assign threat-likelihood scores and reprioritize scans, measuring both classification accuracy and detection speed improvements. </p> 
	<p>○ Engineered production-ready infrastructure with integrated CI/CD pipelines in AWS CDK, deploying to GuardDuty’s production environment, processing live EC2 malware scans to benchmark and compare multiple heuristic and ML approaches. </p> 
      </div>
      <img :src="require('@/assets/aws.png')" alt="AWS image" class="resume-image" />
    </div>
    <div class="work-entry">
      <div class="entry-content">
        <h2>Ultima Genomics, <i>Software Engineering Intern</i></h2>
        <p>Fremont, CA | June 2024 - September 2024</p>
        <p>○ Developed and integrated a thorough testing suite for an alerts API and internal dashboard, implementing 140+ unit and integration tests, ensuring reliability through automatic GitHub CI/CD hooks, reducing deployment errors by 100%.</p>
        <p>○ Designed a dynamic alert muting management system, utilizing a cloud-based PostgresSQL database to store mute cases, enabling seamless updates through a web interface, increasing the visibility and access of important information to engineers.</p>
        <p>○ Refactored core components of a data visualization platform, increasing code maintainability, leading to more efficient development, future scalability and long-term reliability.</p>
      </div>
      <img :src="require('@/assets/ugenomics.png')" alt="Ultima genomics image" class="resume-image" />
    </div>
    <div class="work-entry">
      <div class="entry-content">
        <h2>SpaceX, <i>Recovery Engineering Intern</i></h2>
        <p>Cape Canaveral, FL | June 2023 - September 2023</p>
        <p>○ Developed Python software to optimize Droneship ballast fill levels based on current ship configuration and ullage for 10% faster turnaround between rocket landings.</p>
        <p>○ Designed and implemented a pneumatic Remote Day Shapes system that remotely changes naval signals to allow for autonomous Droneship missions off-shore, clearing a regulatory hurdle within a limited timeframe.</p>
        <p>○ Planned and programmed PLC-powered test bench for rocket-catching Octagrabber robot, writing software in TwinCAT3 with modular functionality to more easily pinpoint faulty parts and identify root cause of failure modes.</p>
      </div>
      <img :src="require('@/assets/spacex.jpg')" alt="SpaceX image" class="resume-image" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WorkExperience',
};
</script>

<style>
.work-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.resume-image {
  max-width: 200px; 
  height: auto; 
  border-radius: 15px;
  margin-left: 1rem; 
}

.work-entry {
  padding: 1rem;
  border-radius: 8px;
  background-color: #dedac5;
  margin-bottom: 1rem;
  text-align: left;
  display: flex; 
  align-items: center; 
}

.entry-content {
  flex-grow: 1; 
}
</style>
