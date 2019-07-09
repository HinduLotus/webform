<template>
  <div v-if="item.type == 'button'">
    <Button 
    :type="item.props.type" 
    :ghost="item.props.ghost"
    :size="item.props.size"
    :shape="item.props.shape"
    :html-type="item.props.htmlType"
    :icon="item.props.icon"
    :custom-icon="item.props.customIcon"
    :long="item.props.long"
    :disabled="item.props.disabled"
    :loading="item.props.loading"
    :to="item.props.to"
    :replace="item.props.replace"
    :target="item.props.target"
    >{{item.name}}</Button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import map from 'lodash/map'
export default {
  props: ['preview', 'contenteditable', 'item', 'itemIndex'],
  data () {
    return {
      hVisible: false
    }
  },
  methods: {
    ...mapActions([
      'saveItem'
    ]),
    save (e) {
      this.saveItem({ item: this.item, index: this.itemIndex })
    }
  }
}
</script>

<style scoped>

</style>
