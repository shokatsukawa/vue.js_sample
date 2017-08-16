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
            console.log(this);
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

  // Table Rowspan -------------------------------------------------------------

  var TableRowspan = new Vue({
    el: '#table-rowspan',
    data: {
      datas: [{val: 'A'}, {val: 'B'}, {val: 'C'}],
    },
  });

  // Table Input ---------------------------------------------------------------

  var TableInput = new Vue({
    el: '#table-input',
    components: {
      'table-input': {
        props: ['val'],
        template: '<input type="text" id="" value="" style="width:auto; text-align:center;">',
        methods: {
          // セレクトボックスチェンジイベント
          change: function (e) {
            console.log(this);
            var val = $(e.target).val();
            alert('select -- val -- ' + val);
          }
        }
      },
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

  // Table Title ---------------------------------------------------------------
  var TableTitle = new Vue({
    el: '#table-title',
    data: {
      a: 'A',
      b: 'B',
      c: 'C',
    },
  });








});
