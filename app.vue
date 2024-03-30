<script setup lang="ts">

const router = useRouter();
const nav = [{ label: "index", to: "/" }];

</script>

<template>
  <NuxtExample dir="pages" :nav="nav" current-route>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtExample>
</template>
