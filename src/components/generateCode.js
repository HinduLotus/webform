function formatData(data){
  let result_data = [{type: 'hidden',field: 'id',value: '14'}];
  result_data = result_data.concat(JSON.parse(data));

  //vue-layout-grid 转换成 form-create的栅格布局
  return result_data = JSON.stringify(result_data);
}

export default function (data) {
  let result_data = formatData(data);
  return  `<!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/iview/dist/styles/iview.css'>
            <script src='https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js'></script>
            <script src='https://cdn.jsdelivr.net/npm/iview/dist/iview.min.js'></script>
            <script src='https://cdn.jsdelivr.net/npm/form-create/dist/form-create.min.js'></script>
          </head>
          <body>
            <div id="app">
              <form-create v-model="fApi" :rule="rule" :option="option"/>
            </div>
            <script>
                var maker = formCreate.maker;

                vm = new Vue({
                  el: '#app',
                  data: {
                    formData: {},
                    rule: mock(),
                    fApi:{},
                    option: {
                      resetBtn: true,
                      onSubmit: function(formData) {
                        alert(JSON.stringify(formData));
                        vm.fApi.btn.loading();
                        vm.fApi.resetBtn.disabled();
                        $f = that.$formCreate(mock, root);
                      },
                      mounted: function(){
                          
                      }
                    }
                  },
                  watch: {
                    
                  },
                  methods: {
                    
                  },
                  mounted: function() {
                    
                  }
                });

                function mock() {
                  return ${result_data}
                }
            </script>
          </body>
          </html>`;
}