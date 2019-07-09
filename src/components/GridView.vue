<template>
  <Layout>
      <Sider width="200" v-if="!preview">
          <Button @click="addButtonGridItem"> Button </Button>
          <Button @click="addInputGridItem"> Input </Button>
      </Sider>
      <Layout>
          <div style="text-align: center;padding:5px 0;background:#f5f7f9">
            <span v-if="!preview">
            <!--
              <Button @click="addTitleGridItem"> H1 </Button>
              <Button @click="addContentGridItem"> Content </Button>
              <Button @click="addImageGridItem"> Image </Button>
            -->
            </span>
            <Button @click="disableGrid"> 
              <span v-if="preview"> Edit </span>
              <span v-else="preview"> Preview </span>
            </Button>
            <template v-if="preview">
              <Button @click="handleNewForm" title="新建单据">New</Button>
              <Button @click="handleGenerateJson" title="生成json">Save</Button>

              <Select v-model="value"  placeholder="单据模板" @on-change="handleLoad" style="width:200px">
                  <Option v-for="item in filterForm" :value="item.name" :key="item.name">{{ item.name }}</Option>
              </Select>

            </template>
          </div>
          <hr>
          <grid-layout :layout="getResources.data"
            :col-num="12" :row-height="32" :is-draggable="isDraggable" :is-resizable="isResizable"
            :is-mirrored="false" :vertical-compact="true" :margin="[10, 5]"
            :use-css-transforms="true">
            <grid-item v-for="(item, index) in getResources.data" :key="index" :class="{ 'editMode' : !preview }"
            :autoSize="true" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
              <div v-if="!preview" class="operate">
                <i class="fa fa-trash" aria-hidden="true"  @click="removeItem({key: index})"></i>
                <i class="fa fa-edit" aria-hidden="true"  @click="changeWidgetData(item,index)"></i>
              </div> 
              <text-widget v-if="item.type == 'title'" :preview="preview"
              :contenteditable="contenteditable" :item="item" :itemIndex="index"></text-widget>

              <text-area-widget v-if="item.type == 'content'" :preview="preview"
              :contenteditable="contenteditable" :item="item" :itemIndex="index"></text-area-widget>

              <image-widget v-if="item.type == 'image'"  :preview="preview"
              :contenteditable="contenteditable" :item="item" :itemIndex="index"></image-widget>

              <input-widget v-if="item.type == 'input'"  :preview="preview"
              :contenteditable="contenteditable" :item="item" :itemIndex="index"></input-widget>

              <button-widget v-if="item.type == 'button'"  :preview="preview"
              :contenteditable="contenteditable" :item="item" :itemIndex="index"></button-widget>

            </grid-item>
          </grid-layout>
      </Layout>
      <Sider width="300">
          <GridSet :item="widget" :itemIndex="widgetIndex"></GridSet>
      </Sider>
  </Layout>
 
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import TextWidget from './editor/TextWidget'
import TextAreaWidget from './editor/TextAreaWidget'
import ImageWidget from './editor/ImageWidget'
import InputWidget from './editor/InputWidget'
import ButtonWidget from './editor/ButtonWidget'
import { GridLayout, GridItem } from 'vue-grid-layout'
import GridSet from './GridSet'
export default {
  name: 'gridview',
  components: { GridLayout, GridItem, GridSet, TextWidget, TextAreaWidget, ImageWidget, InputWidget, ButtonWidget},
  data () {
    return {
      isDraggable: false,
      isResizable: false,
      preview: true,
      contenteditable: false,
      value:'',
      u9form:localStorage.getItem('u9form'),
      widget:{},
      widgetIndex:0
    }
  },
  computed: {
    ...mapGetters([
      'getResources'
    ]),
    filterForm(){
      return localStorage.getItem('u9form')?JSON.parse(localStorage.getItem('u9form')):[];
    }
  },
  methods: {
    ...mapActions([
      'addTitleGridItem',
      'addContentGridItem',
      'addImageGridItem',
      'addInputGridItem',
      'addButtonGridItem',
      'newForm',
      'removeItem'
    ]),
    disableGrid () {
      this.isDraggable = !this.isDraggable
      this.isResizable = !this.isResizable
      this.preview = !this.preview
      this.contenteditable = !this.contenteditable
    },
    //提交保存表单
    handleGenerateJson(){
      this.$store.commit('setResources', this.getResources);
      if(!this.u9form){
        localStorage.setItem('u9form', JSON.stringify([this.getResources]));
      } else {
        this.u9form = JSON.parse(this.u9form).concat(this.getResources);
        localStorage.setItem('u9form', JSON.stringify(this.u9form));
      }
      alert("数据已存储到localstrage");
    },
    //新建表单
    handleNewForm(){
      this.getResources.name = prompt("输入单据名称");
      this.disableGrid();
      this.getResources.data = [];
      this.$store.commit('setResources', this.getResources);
    },
    handleLoad(name){
      let obj = {};
      if(this.u9form){
        obj = JSON.parse(this.u9form).find((item)=>{
            return item.name === name;
        })  
      }
      this.$store.commit('setResources',obj);
    },
    changeWidgetData(item,index){
      debugger
      this.widget = item;
      this.widgetIndex = index;
    }
  }
}
</script>
<style>
.editMode {
  background-color: #fafafa;
  border-radius: 5px;
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
.fa{
  cursor:pointer;
}
.operate{
  position: absolute; 
  top: 0px; 
  right: 4px;
  z-index:1;
}
.ivu-layout {
    background-image: linear-gradient(90deg, rgba(200, 200, 200, 0.1) 10%, rgba(200, 200, 200, 0) 10%), linear-gradient(rgba(200, 200, 200, 0.1) 10%, rgba(200, 200, 200, 0) 10%);
    background-size: 10px 10px;
}
</style>
