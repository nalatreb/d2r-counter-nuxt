<script setup lang="ts">
import type { Encounter as EncounterInterface } from "~~/interfaces/Encounter";

const model: EncounterInterface = {
  name: "Mephisto",
  image: "image.png",
  count: 3,
};
</script>

<template>
  <div>
    <h1>Encounters</h1>
    <encounter :encounter="model" />
  </div>
</template>
