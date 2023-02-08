//APIを使用した実装//
$(function(){
  const settings = {
  url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
  method: "GET",
}
$('.search-btn').on("click",function(){
  $.ajax(settings).done(function (response) {
  const result = response['@graph'];
  displayResult(result)
}).fail(function (err) {
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
$('.search-btn').on("click",function(){
  $.ajax(settings).done(function (response) {
  const result = response['@graph'];
  displayResult(result)
}).fail(function (err) {
  displayError(err)
});
})
});
*/