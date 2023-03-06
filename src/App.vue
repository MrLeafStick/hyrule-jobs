<script lang="ts">
import { defineComponent, onRenderTracked, ref } from 'vue'
import JobList from './components/JobList.vue'
import Job from './types/job'
import OrderTerm from './types/OrderTerm'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from './firebaseinit'

export default defineComponent({
  name: 'App',
  components: { JobList },
  async setup() {
    const jobs = ref<Job[]>([
      {title: 'farmworker', location: 'lon lon ranch', salary: 30000, id:'1', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id mollitia consectetur esse eligendi non neque magnam, placeat impedit repudiandae vero corporis sapiente qui suscipit sunt similique harum, veritatis earum maxime?'},
      {title: 'quarryman', location: 'death mountian', salary: 60000, id:'2', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id mollitia consectetur esse eligendi non neque magnam, placeat impedit repudiandae vero corporis sapiente qui suscipit sunt similique harum, veritatis earum maxime?'},
      {title: 'Fisher', location: 'lake hylia', salary: 20000, id:'3', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id mollitia consectetur esse eligendi non neque magnam, placeat impedit repudiandae vero corporis sapiente qui suscipit sunt similique harum, veritatis earum maxime?'},
      {title: 'flute player', location: 'the lost woods', salary: 30, id:'4', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id mollitia consectetur esse eligendi non neque magnam, placeat impedit repudiandae vero corporis sapiente qui suscipit sunt similique harum, veritatis earum maxime?'},
      {title: 'prison guard', location: 'gerudo vally', salary: 130000, id:'5', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id mollitia consectetur esse eligendi non neque magnam, placeat impedit repudiandae vero corporis sapiente qui suscipit sunt similique harum, veritatis earum maxime?'}
    ])

    const order = ref<OrderTerm>('title')

    let currentData: string[] = []
    const snapshop = await getDocs(collection(db, "Jobs"));
    snapshop.forEach((doc) => {
      currentData.push(doc.data()["id"])
    })
    jobs.value.forEach((job) => {
      try {
        if (!currentData.includes(job.id)) {
          addDoc(collection(db, "Jobs"), {
            "id": job.id, 
            "title": job.title, 
            "location": job.location, 
            "description": job.description,
            "salary": job.salary
          })
        }
        else {
          console.log(`id ${job.id} already exists inside the database!`);
        }
      }
      catch (e) {
        console.log(e);
      }
    })
    

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    return { jobs, handleClick, order, }
  },
  methods: {

  }
})
</script>

<template>
  <div class='app'>
    <header>
      <div class="order">
        <button @click="handleClick('title')">order by title</button>
        <button @click="handleClick('salary')">order by salary</button>
        <button @click="handleClick('location')">order by location</button>    
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>


