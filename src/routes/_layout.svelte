<script>
	import Header from '../components/UI/Header.svelte'

	export let segment;
</script>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }

</style>

<Header />

<main>
	<slot></slot>
</main>