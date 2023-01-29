//ドロップダウンメニューの実装//
$(function(){
  $('.dropdwn li').hover(
    //マウスをのせたたとき指定した子要素のアニメーションを停止しスライドして要素を表示//
  function(){
    $(this).children('ul').stop().slideDown();
  },
  //マウスをはずしたとき指定した子要素のアニメーションを停止しスライドして表示していた要素を消す//
  function(){
    $(this).children('ul').stop().slideUp();
  })
});