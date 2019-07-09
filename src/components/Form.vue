<template>
  <div>
    {{$route.params.id}} {{id}}
    <grid-layout :layout="getResources.data"
      :col-num="12" :row-height="30" :is-draggable="isDraggable" :is-resizable="isResizable"
      :is-mirrored="false" :vertical-compact="true" :margin="[5, 5]"
      :use-css-transforms="true">
      <grid-item v-for="(item, index) in getResources.data" :key="index" :class="{ 'editMode' : !preview }"
      :autoSize="true" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
        <div v-if="!preview" @click="removeItem({key: index})" style="position: absolute; bottom: 0px; left: 4px;">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </div> 
        <text-widget v-if="item.type == 'title'" :preview="preview"
        :contenteditable="contenteditable" :item="item" :itemIndex="index" ></text-widget>

        <text-area-widget v-if="item.type == 'content'" :preview="preview"
        :contenteditable="contenteditable" :item="item" :itemIndex="index"></text-area-widget>

        <image-widget v-if="item.type == 'image'"  :preview="preview"
        :contenteditable="contenteditable" :item="item" :itemIndex="index"></image-widget>

        <input-widget v-if="item.type == 'input'"  :preview="preview"
        :contenteditable="contenteditable" :item="item" :itemIndex="index"></input-widget>

      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TextWidget from './editor/TextWidget'
import TextAreaWidget from './editor/TextAreaWidget'
import ImageWidget from './editor/ImageWidget'
import InputWidget from './editor/InputWidget'
import { GridLayout, GridItem } from 'vue-grid-layout'

export default {
  name: 'form',
  components: { GridLayout, GridItem, TextWidget, TextAreaWidget, ImageWidget ,InputWidget},
  props:['id'],
  data () {
    return {
      isDraggable: false,
      isResizable: false,
      preview: true,
      contenteditable: false
    }
  },
  created(){
    console.log(this.$route.params.id);
  },
  computed: {
    ...mapGetters([
      'getResources'
    ])
  },
  methods: {
    ...mapActions([
      'addTitleGridItem',
      'addContentGridItem',
      'addImageGridItem',
      'addInputGridItem',
      'removeItem'
    ])
  }
}
</script>
<style>
.editMode {
  background-color: #fafafa;
  border-radius: 5px;
}
.site-title {
  font-family: 'Lilita One', cursive;
  font-size: 50px;
  color: #F48FB1;
  text-align: center;
}
.heading1 { 
  font-family: 'Crushed', cursive;
  font-size: 35px;
  border: none;
  color: #2196F3;
}
.heading2 { 
  font-family: 'Patrick Hand', cursive;
  font-size: 20px;
  border: none;
  color: #3096f3;
  background-color: #FFF9C4;
  width: 100%;
  padding: 10px 5px;
}
.heading3 {
  font-family: 'Homemade Apple', cursive;
  font-size: 20px;
  border: none;
  color: #66d2b3;
  padding: 0 7px;
}
.content {
  font-family: 'Patrick Hand', cursive;
  font-size: 20px;
  color: #2196F3;
}
</style>
