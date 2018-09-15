<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h2 id="introduction" class="mb-3">Introduction</h2>
        <vue-markdown :source="description"/>
      </v-flex>
    </v-layout>
    <endpoints v-if="items" :data="items"/>
  </div>
</template>
<script>
import docs from "../docs.json"
import endpoints from "~/components/endpoints"
import VueMarkdown from "vue-markdown"
export default {
  components: {
    endpoints,
    "vue-markdown": VueMarkdown
  },
  data() {
    return {
      description: "",
      items: []
    }
  },
  mounted() {
    this.description = docs.info.description || ""
    this.items = docs.item || []
  }
}
</script>
