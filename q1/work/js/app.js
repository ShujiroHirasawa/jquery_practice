$(function(){
  //読み込んだ時に要素の色を変化//
  $('#q1').css('color','green');
  //クリックした時要素の背景色を変化//
  $('#q2').click(function(){
    $(this).css('background','pink');
  });
  //クリックした時要素を隠す//
  $('#q3').click(function(){
    $(this).fadeOut(3000);
  });
  //クリックした時要素を多きくする//
  $('#q4').click(function(){
    $(this).addClass('large');
  });
  //クリックした時DOMの挿入//
  $('#q5').click(function(){
    $(this).append("DOMの中の前").append("DOMの中の後").before("DOMの前").after("DOMの後");
  });
  //クリックした時要素を移動//
  $('#q6').click(function(){
    $(this).animate({"margin-top":100,"margin-left":100},3000);
  });
  //クリックした時idのノードをコンソールで表示//
  $('#q7').click(function(){
    console.log(this);
  });
  //要素をホバーした時サイズ変更//
  $('#q8').hover(
    function(){
      $(this).addClass('large');
    },
    function(){
      $(this).removeClass('large');
    }
  );
  //要素をクリックした時配列のアラート表示//
  $('#q9 li').click(function(){
    var index =$(this).index()+0;
    alert(index);
  });

  //要素をクリックした時別の要素のサイズ変更//
  $('#q10 li').click(function(){
    var i=$(this).index();
    console.log($('#q11 li').eq(i));
    $("#q11 li").eq(i).addClass("large-text");
  });
});