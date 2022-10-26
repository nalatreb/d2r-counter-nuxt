<script setup lang="ts">
import type { PropType } from "vue";
import type { Encounter } from "~~/interfaces/Encounter";

defineProps({
  encounter: Object as PropType<Encounter>,
});
</script>

<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img :src="encounter.image" :alt="encounter.name" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ encounter.name }} ({{ encounter.count }})</h2>
      <p>Description</p>
      <div class="card-actions justify-center">
        <button class="btn btn-secondary btn-square">-</button>
        <button class="btn btn-primary btn-square">+</button>
      </div>
    </div>
  </div>
</template>
