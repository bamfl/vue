import { createStore } from 'vuex'

const baseURL = 'https://vue-voursework-composition-api-default-rtdb.europe-west1.firebasedatabase.app'
const endpoints = {
  tasks: `${baseURL}/tasks`
}

export default createStore({
  state() {
    return {
      tasks: []
    }
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    activeTasks(state) {
      return state.tasks.filter(task => task.status === 'active')
    }
  },
  mutations: {
  },
  actions: {
    async getTasks({ state }) {
      try {
        const response = await fetch(`${endpoints.tasks}.json`)
        const data = await response.json()
        const keys = Object.keys(data)
        state.tasks = []

        keys.forEach(key => {
          state.tasks.push({
            id: key,
            ...data[key]
          })
        })
      } catch (error) {
        console.error(error)
      }
    },
    async createNewTask({ state }, taskData) {
      try {
        const response = await fetch(`${endpoints.tasks}.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(taskData)
        })

        const id = await response.json()

        const newTask = { id, ...taskData }

        state.tasks.push(newTask)
      } catch (error) {
        console.error(error)
      }
    },
    async changeStatus({ state }, { id, status }) {
      try {
        const response = await fetch(`${endpoints.tasks}/${id}/status.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(status)
        })

        const changingTask = state.tasks.find(task => task.id === id)
        changingTask.status = status

        return await response.json()
      } catch (error) {
        console.erro(error)
      }
    }
  },
  modules: {
  }
})
