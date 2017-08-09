$(function() {

  // select --------------------------------------------------------------------

  var Select = new Vue({
    el: '#select',
    data: {
      options: [],
      selected: ''
    },
    methods: {
      // セレクトボックスチェンジイベント
      change: function (e) {
        var val = $(e.target).val();
        alert('select -- val -- ' + val);
      }
    }
  });


  Select.options = [{val: 'A'}, {val: 'B'}, {val: 'C'}];

  // table ----------------------------------------------------------------------

  var Table = new Vue({
    el: '#table',
    components: {
      'table-input': {
        props: ['val'],
        template: '<input type="text" v-on:change="change" :value="val"/>',
        methods: {
          // セレクトボックスチェンジイベント
          change: function (e) {
            var val = $(e.target).val();
            alert('select -- val -- ' + val);
          }
        }
      },
      'message': {
        props: ['message'],
        template: '<span>{{ message }}</span>',
      }
    },
    data: {
      datas: [{val: 'A'}, {val: 'B'}, {val: 'C'}],
      methods: {
        // セレクトボックスチェンジイベント
        change: function (e) {
          var val = $(e.target).val();
          alert('select -- val -- ' + val);
        }
      }
    },
  });

  // table2 --------------------------------------------------------------------

  var Table2 = new Vue({
    el: '#table2',
    data: {
      datas: [{val: 'A'}, {val: 'B'}, {val: 'C'}],
      methods: {
        // セレクトボックスチェンジイベント
        change: function (e) {
          var val = $(e.target).val();
          alert('select -- val -- ' + val);
        }
      }
    },
  });
});
