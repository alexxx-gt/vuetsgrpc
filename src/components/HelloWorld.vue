<template>
  <div class="hello">
    <button @click="callBackend">call</button>
  </div>
</template>

<script lang="ts">
/* tslint:disable */
// import {SandwichServiceClient} from "../dist/sandwich_pb_service.d.ts"
import {Component, Watch, Vue} from "vue-property-decorator"
import {mapGetters, mapState} from "vuex"

@Component({
  name: 'hello-world',
  computed: {
    ...mapState('app', {
      ingredients: 'ingredients',
    })
  }
})

export default class HelloWorld extends Vue{
  callBackend() {
    debugger
      // const listServ = new SandwichServiceClient('https://localhost:9111');

      // listServ.list('', () => {
      //   // debugger
      //   // console.log(p1);
      //   // console.log(p2);
      // })

    // requestMessage: sandwich_pb.ListRequest,
    // callback: (error: ServiceError|null, responseMessage: sandwich_pb.ListResponse|null) => void
  
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
