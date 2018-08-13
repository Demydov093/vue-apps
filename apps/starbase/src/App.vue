<template>
  <div id="app">
    <h3>{{title}}</h3>
    <div class="col-md-12">
      <Character
        v-for="(id, index) in initials_ids"
        :id="id"
        key="index"
      />
    </div>

  </div>
</template>

<script>
  import Character from './components/Character.vue'
  export default {
    name: 'app',
    data() {
      return {
        title: 'Generate Your Team',
        initials_ids: [1, 14, 15]
      }
    },
    components: {
      Character
    }
  }
</script>
