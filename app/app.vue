<script setup lang="ts">
const icons = [
  { src: '/favicon-16x16.png', size: 16, label: 'favicon-16x16.png' },
  { src: '/favicon-32x32.png', size: 32, label: 'favicon-32x32.png' },
  { src: '/favicon.ico', size: 48, label: 'favicon.ico' },
  { src: '/apple-touch-icon.png', size: 180, label: 'apple-touch-icon.png' },
  { src: '/icon-192.png', size: 192, label: 'icon-192.png' },
  { src: '/icon-512.png', size: 256, label: 'icon-512.png' }
]
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <main class="preview">
      <h1>Favicon preview</h1>
      <ul class="grid">
        <li
          v-for="icon in icons"
          :key="icon.src"
        >
          <img
            :src="icon.src"
            :width="icon.size"
            :height="icon.size"
            :alt="icon.label"
          >
          <span>{{ icon.label }}</span>
        </li>
      </ul>

      <h2>Browser tab mock</h2>
      <div class="tab">
        <img
          src="/favicon-16x16.png"
          width="16"
          height="16"
          alt=""
        >
        <span>Cleaning bez bruda</span>
      </div>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: #0d2347;
}

.preview {
  padding: 32px 16px;
  max-width: 960px;
  margin: 0 auto;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: flex-end;
  padding: 0;
  list-style: none;
}

.grid li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #e8ecf2;
  border-radius: 8px 8px 0 0;
  font-size: 13px;
}
</style>
