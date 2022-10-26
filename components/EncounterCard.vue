<script setup lang="ts">
import type { PropType } from "vue";
import type { Encounter } from "~~/interfaces/Encounter";
import { useEncounterStore } from "~~/stores/EncounterStore";

defineProps({
  encounter: Object as PropType<Encounter>,
});

const encounterStore = useEncounterStore();
</script>

<template>
  <div class="card w-80 bg-base-100 shadow-xl">
    <figure>
      <img src="~/assets/img/no_img.jpg" :alt="encounter.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ encounter.name }} ({{ encounter.count }})</h2>
      <p>Description</p>
      <div class="card-actions justify-center">
        <button
          class="btn btn-secondary btn-square"
          @click="encounterStore.decrease(encounter.id)"
        >
          -
        </button>
        <button
          class="btn btn-primary btn-square"
          @click="encounterStore.increase(encounter.id)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
