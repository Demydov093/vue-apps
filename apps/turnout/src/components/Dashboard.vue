<template>
  <div class="">
    <h3>Dashboard Component</h3>
    <button class="btn btn-danger btn-sm signout-btn" name="button" @click="signOut">Sign Out</button>
    {{$store.state}}
    <hr>
    <AddEvent />
    <hr>
  </div>
</template>


<script>
  import { firebaseApp } from '../firebaseApp'
  import AddEvent from './AddEvent.vue'

  export default {
    methods: {
      signOut() {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    },
    components: {
      AddEvent
    }
  }

</script>
