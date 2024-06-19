<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>

      <!-- Display error message if loginError is true -->
      <div v-if="loginError" class="alert alert-danger" role="alert">
        Incorrect email or password. Please try again.
      </div>

      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>

      <p class="register-link">
        Don't have an account? <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      email: '',
      password: '',
      loginError: false // Flag to track login error
    };
  },
  methods: {
    handleLogin() {
      const payload = {
        email: this.email,
        password: this.password
      };

      axios.post('http://localhost:3000/api/users/login', payload)
          .then(response => {
            console.log('Login successful');
            localStorage.setItem('token', response.data.token);
            // Redirect to dashboard or another route after successful login
            this.$router.push('/admin/dashboard');
          })
          .catch(error => {
            console.error('Login error:', error.response.data.message);
            // Update loginError flag to true to show error message
            this.loginError = true;
            // Optionally clear sensitive data like password
            this.password = '';
          });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100vw;
  margin: 0 auto;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
}

.login-container > * {
  max-width: 50vw;
  min-width: 50vh;
  overflow: hidden;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-form h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.login-button {
  background: #007bff;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.login-button:hover {
  background: #0056b3;
}

.register-link {
  margin-top: 1rem;
  color: #007bff;
  font-size: 0.875rem;
}

.register-link a {
  text-decoration: none;
  color: inherit;
}

.register-link a:hover {
  text-decoration: underline;
}

.alert {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.alert-danger {
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
}
</style>
