<template>
  <div>
    <ul>
      <li v-for="(task, index) in tasks" :key="`task-${index}`">
        <span class="">{{ task.desc }}</span>
        <button @click="remove(task)">Delete</button>
      </li>
    </ul>
    <div>
      <input type="text" placeholder="Inter a task name" v-model="newTask" @keyup.enter="addTask">
      <button @click="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    newTask: ''
  }),
  computed: {
    tasks() {
      return this.$store.state.tasks.list
    }
  },
  methods: {
    addTask(e) {
      this.$store.commit('tasks/add', this.newTask)
      this.newTask = ''
    },
    ...mapMutations({
      remove: 'tasks/remove'
    })
  }
}
</script>

<style>

</style>
