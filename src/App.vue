<template>
  <div class='app'>
    <h1>Hyrule Jobs</h1>
    <p>Hello, {{ name }} - {{age}}</p>
    <button @click="changeName('Zelda')">Change Name</button>
    <button @click="changeAge('34')">Change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'



export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    // const state = reactive({
    //   name: 'Link',
    //   age: 25 as string | number
    // })

    // return { ...toRefs(state) }

    const name = ref('Link')
    const age = ref(<number | number>(25))

    return {name, age}

  },
  methods: {
    changeName(name: string) {
      this.name = name
    },
    changeAge(age: number | string)  {
      this.age = age
    }
  }
})
</script>
