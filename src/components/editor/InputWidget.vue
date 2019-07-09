<template>
    <div v-if="item.type == 'input'">
      <label width="80px;">{{item.label}}</label>
      <Input 
      v-model="item.value" 
      :type="item.props.type"
      :size="item.props.size"
      :placeholder="item.props.placeholder"
      :clearable="item.props.clearable"
      :disabled="item.props.disabled"
      :readonly="item.props.readonly"
      :maxlength="item.props.maxlength"
      :icon="item.props.icon"
      :search="item.props.search"
      :number="item.props.number"
      :suffix="item.props.suffix"
      :rows="item.props.rows"
      style="width: auto" >
        <span slot="prepend" v-if="item.props.prepend">{{item.props.prepend}}</span>
        <span slot="append" v-if="item.props.append">{{item.props.append}}</span>
      </Input>
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

 .el-input .el-input__inner{
    height:28px;
    line-height:28px;
 }

</style>
