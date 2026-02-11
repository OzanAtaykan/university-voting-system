<template>
  <div class="home">
    <div id="sidebar">
      <!-- ------------ HEADER OF SIDEBAR ----------- -->
      <div class="sidebar-section" id="sidebar-header">
        <button class="sidebar-button siderbar-header-item">
          <img id="profile-picture" alt="Default profile image" src="../assets/default-avatar.jpg">
        </button>
      </div>

      <!-- ------------ MAIN OF SIDEBAR ----------- -->
      <div class="sidebar-section">
        <button class="sidebar-button sidebar-main-item">
          Announcements
        </button>
        <button class="sidebar-button sidebar-main-item">
          Votes
        </button>
        <button class="sidebar-button sidebar-main-item">
          Threads
        </button>
        <button class="sidebar-button sidebar-main-item">
          Communities
        </button>
      </div>

      <!-- ------------ FOOTER OF SIDEBAR ----------- -->
      <div class="sidebar-section">
        <button class="sidebar-button">
          SETTINGS
        </button>
        <button class="sidebar-button sidebar-footer-item">
          LOGOUT
        </button>
      </div>
      
    </div>

    <!-- ------------ CANVAS PAGE ----------- -->
    <div id="canvas">
      <h1>You have not selected anything yet! 🤖</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src so use it for '@/components/' 

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.home {
  display:flex;
}

#sidebar {
  width: 300px;
  height: 100vh; /* Full viewport height */
  background-color: #ffffff;
  display:grid;
  grid-template-rows: 250px 400px 150px;
  row-gap:0px;
  padding-bottom:10px;
  text-align:center;
}

.sidebar-section {
  border: 2px solid black;
  margin-bottom: -2px;
}

.sidebar-button {
  width:90%;
  margin-top:20px;
  margin-bottom:20px;
  cursor:pointer;
}

#sidebar-header {
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.siderbar-header-item {
  background-color: inherit;
  border: none;
  width:90%;
  height:90%;
  margin-top:0px;
  margin-bottom:0px;
}

.sidebar-main-item {
  background-color:rgb(0, 183, 255);
}

.sidebar-footer-item {
  background-color:rgb(255, 135, 135);

}

#profile-picture {
  display:block;
  width:inherit;
  height:auto;
  min-width:100px;
  max-width:200px;
  border-radius: 100px;
}

#canvas {
  flex:1;
}

</style>