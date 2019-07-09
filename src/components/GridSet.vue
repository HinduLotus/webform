<template>
  <div class="list" v-if="item">
    <Button type="primary" long  style="margin-bottom:10px" @click="submitWidgetData">提交</Button>
     <template v-for="(value,key,index) in item" >
        <template v-if="item[key] != 'props'">
          <Input v-model="item[key]" :key="index"  style="margin-bottom:10px">
            <span slot="prepend">{{key}}</span>
          </Input>
        </template>
    </template>
    <template  v-for="(value,key,index) in item.props">
      <Input v-model="item.props[key]" :key="'prop'+index"  style="margin-bottom:10px">
        <span slot="prepend">{{key}}</span>
      </Input>
    </template>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import InputWidget from './editor/InputWidget'
import ButtonWidget from './editor/ButtonWidget'

export default {
  name: 'gridset',
  components: {InputWidget, ButtonWidget},
  props: ['item','itemIndex'],
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters([
      'getResources'
    ])
  },
  methods: {
    ...mapActions([
      'addInputGridItem',
      'addButtonGridItem',
      'saveItem'
    ]),
    submitWidgetData(){
      this.saveItem({ item: this.item, index: this.itemIndex })
      alert("保存成功");
    }
  }
}
</script>
<style>
  .list{
    padding:10px
  }
</style>
