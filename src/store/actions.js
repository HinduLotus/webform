// Import helper lib module
import * as lib from './lib'
// Importing sample JSON data for the state
import data from '../../static/data.json'

// Action to fetch resources and set in state through the mutation
export const fetchResources = ({ commit }) => {
  commit('setResources', data)
}

// Action to add title grid item in the state through the mutation
export const addTitleGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = {
      'x': 0,
      'y': 0,
      'w': 4,
      'h': 2,
      'i': g,
      'type': 'title',
      'title': 'Heading 1',
      'field':'title',
      'props': {},
      'validate':[],
      'headings': {
          'h1': false,
          'h2': false,
          'h3': false
      },
      
  }
  commit('setNewGridItem', k);
}

// Action to add content grid item in the state through the mutation
export const addContentGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = {
      'x': 0,
      'y': 0,
      'w': 4,
      'h': 3,
      'i': g,
      'type': 'content',
      'field':'content',
      'props': {},
      'validate':[]
  }
  commit('setNewGridItem', k);
}

// Action to add image grid item in the state through the mutation
export const addImageGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = {
      'x': 0,
      'y': 0,
      'w': 4,
      'h': 4,
      'i': g,
      'type': 'image',
      'field':'image',
      'props': {},
      'validate':[],
      'location': 'http://via.placeholder.com/600x350'
  }
  commit('setNewGridItem', k);
}
export const addInputGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = {
      'x': 0,
      'y': 0,
      'w': 2,
      'h': 1,
      'i': g,
      'type': 'input',
      'name': '输入框',
      'label':'Label',
      'value':'',
      'props': {
        'type': 'text',
        'size':'default',
        'placeholder':'',
        'clearable':false,
        'disabled':false,
        'readonly':false,
        'maxlength':60,
        'icon':null,
        'prefix':null,
        'suffix':null,
        'search':false,
        'enterButton':false,
        'rows':2,
        'autosize':false,
        'number':false,
        'autofocus':false,
        'autocomplete':'off'
      },
      'validate':[
        { required: true, message: '请输入', trigger: 'blur' }
      ]
  }
  commit('setNewGridItem', k);
}

export const addButtonGridItem = ({commit, state}, payload) => {
  let g = lib.guid()
  let k = {
      'x': 0,
      'y': 0,
      'w': 1,
      'h': 1,
      'i': g,
      'type': 'button',
      'title': '按钮',
      'name':'按钮',
      'props': {
        type:'default',
        ghost:false,
        size:'default',
        shape:null,
        long:false,
        htmlType:'button',
        icon:null,
        customIcon:'',
        disabled:false,
        loading:false,
        to:null,
        replace:false,
        target:'_self'
      },
      'validate':[
        
      ]
  }
  commit('setNewGridItem', k);

}

// Action to remove item from the state through the mutation
export const removeItem = ({commit, state}, payload) => {
  commit('removeItem', payload)
}

// Action to save updated headings through the mutation
export const saveHeadings = ({commit, state}, payload) => {
  let currentItem = state.resources[payload.itemIndex]
  currentItem.headings.h1 = payload.values[0]
  currentItem.headings.h2 = payload.values[1]
  currentItem.headings.h3 = payload.values[2]
  commit('setUpdatedItem', { itemIndex: payload.itemIndex, item: currentItem })
}

// Action to save item through the mutation
export const saveItem = ({commit, state}, payload) => {
  commit('setUpdatedItem', payload)
}

export const saveForm = ({commit, state}, payload) => {
  commit('setU9Form', payload)
}