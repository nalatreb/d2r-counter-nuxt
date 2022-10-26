<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useEncounterStore } from "~~/stores/EncounterStore";

const encounterStore = useEncounterStore();
const { encounters } = storeToRefs(encounterStore);
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold">Encounters</h1>
    <div class="flex justify-around flex-wrap gap-4 gap-y-9">
      <EncounterCard v-for="encounter of encounters" :encounter="encounter" />
    </div>
  </div>
</template>
