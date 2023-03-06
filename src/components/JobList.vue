<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import Job from '@/types/job'
import OrderTerm from '@/types/OrderTerm'

export default defineComponent({
    props: {
        jobs: {
            required: true,
            type: Array as PropType<Job[]>
        },
        order: {
            required: true,
            type: String as PropType<OrderTerm>
        }
    },
    setup(props) {
        const orderedJobs = computed(() => {
            return [...props.jobs].sort((a: Job, b: Job) => {
                return a[props.order] > b[props.order] ? 1 : -1
            })
        })

        return { orderedJobs }
    }

})

</script>

<template>
    <div class="job-list">
        <p>ordered by {{order }}</p>
        <ul>
            <li v-for="job in orderedJobs" :key="job.id">
                <h2>{{job.title}} in {{job.location }}</h2>
                <div class="salary">
                    <p>{{job.salary}}  <img src="@/assets/Rupee.png" alt="rubee"></p>
                    
                </div>
                <div class="description">
                    <p>
                        {{ job.description  }}
                    </p>
                    
                </div>
            </li>
        </ul>
    </div>
</template>



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
