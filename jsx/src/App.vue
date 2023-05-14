<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      info: 'this is parent info'
    }
  },
  render() {
    return (
      <div>
        <HelloWorld info={this.info} />
      </div>
    )
  }
}
</script>
