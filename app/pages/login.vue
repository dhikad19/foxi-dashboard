<script setup lang="ts">
const { login } = useAuth()

const email = ref('')
const password = ref('')

definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})
</script>

<template>
  <div>
    <input v-model="email" placeholder="email" />
    <input v-model="password" type="password" />
    <button type="button" @click="login(email, password)">
      Login
    </button>
  </div>
</template>