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
});
