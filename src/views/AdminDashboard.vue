<template>

  <header class="header">
    <div class="header-logo">
      <h2><img src="@/assets/ts.png" width="70" height="70" alt="" srcset=""></h2>
    </div>
    <div class="header-links">
      <router-link to="/profile" class="profile-link">Profile</router-link>
      <a href="#" class="logout-link" @click="handleLogout">Logout</a>
    </div>
  </header>
  <main>
    <div class="admin-dashboard">
      <!-- Sidebar -->
      <aside class="sidebar">

        <nav class="sidebar-nav">
          <router-link to="/admin/dashboard" class="nav-link">
            <i class="fas fa-chart-line"></i> Dashboard
          </router-link>
          <router-link to="/admin/adminroute" class="nav-link">
            <i class="fas fa-plus"></i> Add Route
          </router-link>
          <router-link to="/admin/adminbus" class="nav-link active">
            <i class="fas fa-bus"></i> Add Bus
          </router-link>
          <router-link to="/admin/viewbuses" class="nav-link">
            <i class="fas fa-eye"></i> View Buses
          </router-link>
          <router-link to="/admin/viewroute" class="nav-link">
            <i class="fas fa-map-marked-alt"></i> View Routes
          </router-link>
          <a href="#" class="nav-link" @click="handleLogout">
            <i class="fas fa-sign-out-alt"></i> Logout
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <div class="dashboard-content">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Here you can manage routes, buses, and more.</p>
        </div>
      </main>
    </div>
  </main>
</template>

<script>
export default {
  name: "AdminDashboard",
  methods: {
    handleLogout() {
      // Perform logout action here
      // For example, clear local storage, redirect to login page, etc.
      console.log("Logout clicked");
      // Replace the following line with actual logout logic
      // Example: Clear local storage and redirect to login
      localStorage.removeItem("token"); // Example: Clear token from localStorage
      this.$router.push("/"); // Redirect to login page after logout
    },
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  height: 100vh;
}


.sidebar {
  width: 250px;
  background: #333;
  color: #fff;
  padding: 20px;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 20px;
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.sidebar-nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.dashboard-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dashboard-content h2 {
  margin-bottom: 10px;
  color: #333;
}

.dashboard-content p {
  color: #666;
}


.header {
  background-color: cadetblue;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
}

.header-links {
  display: flex;
  align-items: center;
}

.profile-link,
.logout-link {
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
}

.profile-link:hover,
.logout-link:hover {
  text-decoration: underline;
}


.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
