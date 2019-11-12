<template>
  <div class="home">
    <p>{{ message }}</p>
    <h1>{{ $store.state.counter }}</h1>
    <button @click="increment(10)">increment</button>
    <button @click="asyncIncrement(10)">asyncIncrement</button>
    <h1>{{ cartItemsCount }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState({
      message: 'message',
      counter: 'counter',
      cartItems: 'cartItems',
    }),
    ...mapGetters([
      'cartItemsCount'
    ]),
    // cartItemsCount() {
    //   return this.$store.getters.cartItemsCount;
    // }
  },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    // increment() {
    //   this.$store.dispatch('increment', 10);
    // }
    ...mapActions({
      asyncIncrement: 'increment'
    })
  }
}
</script>
