<script lang="ts">
import { defineComponent, ref } from 'vue'
import JobList from './components/JobList.vue'
import Job from './types/job'

export default defineComponent({
  name: 'App',
  components: { JobList },
  setup() {
    const jobs = ref<Job[]>([
      {title: 'farmworker', location: 'lon lon ranch', salary: 30000, id:'1'},
      {title: 'quarryman', location: 'death mountian', salary: 60000, id:'2'},
      {title: 'Fisher', location: 'lake hylia', salary: 20000, id:'3'},
      {title: 'flute player', location: 'the lost woods', salary: 30, id:'4'},
      {title: 'prison guard', location: 'gerudo vally', salary: 130000, id:'5'}
    ])

    return { jobs }
  },
  methods: {

  }
})
</script>

<template>
  <div class='app'>
    <JobList :jobs="jobs" />
  </div>
</template>


