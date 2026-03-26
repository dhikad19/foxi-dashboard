<script setup lang="ts">
const count = ref(0)
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div class="p-6 space-y-4">
    <h1 class="text-2xl font-bold">Hello Nuxt UI 🚀</h1>

    <UButton @click="count++">
      Klik saya: {{ count }}
    </UButton>

    <UInput placeholder="Ketik sesuatu..." />

    <UCard>
      <template #header>
        Card Title
      </template>

      Ini isi card
    </UCard>
  </div>
</template>