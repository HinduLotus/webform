<template>
  <div class="layout">
      <GridView></GridView>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import GridView from './GridView'

export default {
  name: 'home',
  components: { GridView },
  methods: {
    ...mapActions({
      fetchResources: 'fetchResources'
    })
  },
  created () {
    this.fetchResources()
  }
}
</script>
<style>
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%;
    }
    .ivu-layout.ivu-layout-has-sider {
    flex-direction: row;
    height: 100%;
}
</style>
