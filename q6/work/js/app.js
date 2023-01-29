//セレクトメニューでカテゴリーを選択するとそれにあった項目へ絞られる//
$(function(){
  //「select-box」要素の中身が変更された際にイベント処理実行//
  $('.select-box').change(function(){
  var a=$(this).val();
  b=$('.food-list li');
  if("all"===a){
    b.show();
  }else{
    //繰り返し処理//
    $.each(b,function(c,d){
      //HTMLのdata属性を取得//
      var e=$(d).data('category-type');
      if(a===e){
        $(d).show();
      }else{
        $(d).hide();
      }
    });
  }
})
});
