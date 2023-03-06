<template>
    <div class="job-list">
        <ul>
            <li v-for="job in jobs" :key="job.id">
                <h2>{{job.title}} in {{job.location }}</h2>
                <div class="salary">
                    <p>{{job.salary}}  <img src="@/assets/Rupee.png" alt="rubee"></p>
                    
                </div>
                <div class="description">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Id mollitia consectetur esse eligendi non n
                        eque magnam, placeat impedit repudiandae vero corporis 
                        sapiente qui suscipit sunt similique harum, veritatis earum maxime?
                    </p>
                    
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Job from '@/types/job'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        }
    }

})

</script>

<style scoped>
.job-list {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
}

.job-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.job-list li {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.job-list h2 {
    margin: 0 0 10px;
    padding: capitalize;
}

.salary {
    font-weight: flex;

}

.salary img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.salary p {
    margin: 0;
    font-weight: bold;
    margin: 10px 4;
    color: #17bf66;
    height: 5rem;
}
</style>
