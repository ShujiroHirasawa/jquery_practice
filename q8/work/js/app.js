//APIを使用した実装//
$(function(){
  $('.search-btn').on("click",function(){
    $.ajax({
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20",
      method: "GET",
    }).done(function(response){
      //成功したときの処理//
      const result=response['@graph'];
      displayResult(result)
    }).fail(function(err){
      //失敗したときの処理//
      displayError(err)
    });
  })
});









/*API
$(function(){
  const settings = {
  "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
  "method": "GET",
}
$('.search-btn btn').click(function(){
  $.ajax(settings).done(function (response) {
  const result = response['@graph'];
  displayResult(result)
}).fail(function (err) {
  displayError(err)
});
})
});
*/