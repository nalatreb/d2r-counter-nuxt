<script setup lang="ts">
import type { Encounter as EncounterInterface } from "~~/interfaces/Encounter";

const model: EncounterInterface = {
  name: "Mephisto",
  image: "https://placeimg.com/400/225/arch",
  count: 3,
};
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold">Encounters</h1>
    <encounter :encounter="model" />
  </div>
</template>
