<script setup lang="ts">
import type { PropType } from "vue";
import type { Encounter } from "~~/interfaces/Encounter";

defineProps({
  encounter: Object as PropType<Encounter>,
});
</script>

<template>
  <div>
    <img :src="encounter.image" :alt="encounter.name" />
    <span>{{ encounter.count }}</span>
    {{ encounter.name }}
    <button>+</button>
    <button>-</button>
  </div>
</template>
