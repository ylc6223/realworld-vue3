<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<script>
import { eventDetails } from "@/api/user";
export default {
  name: "EventDetails",
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    // fetch event (by id) and set local event data
    this.getEventDetails(this.id);
  },
  methods: {
    getEventDetails(id) {
      eventDetails(id)
        .then((res) => {
          const { data } = res;
          this.event = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
