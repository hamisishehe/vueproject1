<template>
  <main>
    <div class="register-container">
      <div class="register-form">
        <h2>Register</h2>

        <!-- Display success message if registrationSuccessful is true -->
        <div v-if="registrationSuccessful" class="alert alert-success" role="alert">
          Registration successful! You can now <router-link to="/">login here</router-link>.
        </div>

        <form @submit.prevent="handleRegister">
          <div class="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit" class="register-button">Register</button>
        </form>

        <p class="login-link">Already have an account? <router-link to="/login">Login here</router-link></p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      registrationSuccessful: false // Flag to track registration success
    };
  },
  methods: {
    handleRegister() {
      const payload = {
        email: this.email,
        password: this.password
      };

      axios.post('http://localhost:3000/api/users/register', payload)
          .then(response => {
            console.log('Registration successful:', response.data.message);
            // Update registrationSuccessful flag to true
            this.registrationSuccessful = true;
            // Optionally handle success (e.g., show success message, redirect to login page)
            // Redirect to login page after successful registration
            // this.$router.push('/');
          })
          .catch(error => {
            console.error('Registration error:', error.response.data.message);
            // Handle registration error (e.g., show error message to user)
          });
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  font-family: Arial, sans-serif;
}

header.main {
  font-size: 2em;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f2f5;
  padding: 20px;
  padding-top: 80px; /* To ensure main content does not overlap with the fixed header */
}

.register-container {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.register-form h2 {
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

.register-button {
  background: #28a745;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.register-button:hover {
  background: #218838;
}

.login-link {
  margin-top: 1rem;
  color: #007bff;
  font-size: 0.875rem;
}

.login-link a {
  text-decoration: none;
  color: inherit;
}

.login-link a:hover {
  text-decoration: underline;
}

/* Media Queries */
@media (max-width: 1200px) {
  header.main {
    font-size: 1.5em;
    padding: 12px;
  }

  main {
    padding: 18px;
    padding-top: 72px; /* Adjusted to maintain spacing with the fixed header */
  }
}

@media (max-width: 900px) {
  header.main {
    font-size: 1.3em;
    padding: 10px;
  }

  main {
    padding: 15px;
    padding-top: 65px; /* Adjusted to maintain spacing with the fixed header */
  }
}

@media (max-width: 768px) {
  .register-container {
    padding: 1.5rem;
  }

  .register-button {
    padding: 0.6rem;
  }
}

@media (max-width: 480px) {
  .register-container {
    padding: 1rem;
  }

  .register-button {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
