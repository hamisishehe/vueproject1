<template>
  <button @click="navigateToAuth">Login</button>
</template>

<script setup lang="js">
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToAuth = () => {
  router.push({name: "Auth", replace: true});
}
</script>