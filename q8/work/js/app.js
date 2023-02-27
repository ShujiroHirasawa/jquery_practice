//APIを使用した実装//
$(function(){
  const searchWord="図鑑";
  const pageCount=1;
  $(".search-btn").on("click",function(){
    const settings = {
      url: `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
      method: "GET",
    }
    $.ajax(settings).done(function (response) {
      //const settings="";//
      console.log(settings);
      const result = response['@graph'];
      displayResult(result)
    }).fail(function (response) {
      displayError(response)
    });
  $(".reset.btn").on("click",function(){
    $(".lists").empty();
  })
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