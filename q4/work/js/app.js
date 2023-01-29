//ホーム、ページA～Eのどれかを押すと下の文字の表示が変わる//
$(function(){$('.nav li').click(function(){
  //「nav li」のindex番号を取得//
  var index = $('.nav li').index(this);
  //「description li」に「is-hidden」クラスを追加//
  $('.description li').addClass('is-hidden');
  //「description li」にindex番号を指定してクリックされた要素を取得する//
  $('.description li').eq(index).removeClass('is-hidden');
})
});