<script setup>
const route = useRoute();
</script>

<template>
  <div>Hello here! The route param is: {{ route.params.id }}</div>
</template>
