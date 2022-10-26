import { Encounter } from "~~/interfaces/Encounter";

export const useEncounterStore = defineStore("encounterStore", () => {
  const encounters: Encounter[] = [
    {
      id: 1,
      name: "Mephisto",
      count: 41,
    },
    {
      id: 2,
      name: "Andariel",
      count: 15,
    },
    {
      id: 3,
      name: "Pit",
      count: 2,
    },
  ];

  function setCounter(id: number, value: number) {
    const encounter = find(id);
    if (!encounter) {
      return;
    }
    encounter.count += value;
  }

  function find(id: number): Encounter | null {
    return encounters.find((encounter) => encounter.id === id);
  }

  function increase(id: number) {
    setCounter(id, 1);
  }

  function decrease(id: number) {
    setCounter(id, -1);
  }

  return {
    encounters,
    increase,
    decrease,
  };
});
