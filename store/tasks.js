export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, desc) {
    state.list.push({
      desc: desc,
      start: null,
      end: null,
      accumulated: 0,
    })
  },
  remove(state, task) {
    state.list.splice(state.list.indexOf(task), 1)
  },
  setStart(state, task) {
    task.start = new Date()
  },
  setEnd(state, task) {
    task.end = new Date()
    task.accumulated = task.end - task.start
  }
}
