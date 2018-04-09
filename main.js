$(function(){

    function updateTwitterValues(container_div_name, share_url, title) {
  $(container_div_name).html('<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + share_url +'" data-size="large" data-text="' + title + '" data-count="none">Tweet</a>');
  twttr.widgets.load();
}

  var colors = ["pinkPower", "blueOcean", "fadeGreen", "lightSalmon", "paleGold", "leafy", "deepSea", "cobaltBlue", "paleAqua"];
  var pickClass = 0;
  var usedNumb = 0;
  var lastQuote = "";


  $("#getQuote").on("click", function(){
  $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data,status){
     $(".quoteText").html('<p>"' + data.message + '"</p>' + "<br>" + "<p> - Donald Trump          </p>");
    lastQuote = data.message;
    for (i = 0; i < colors.length; i++){
        if (usedNumb === pickClass){
          pickClass = colors[Math.floor(Math.random()*colors.length)]
      }
      usedNumb = pickClass;
    }
    $("body").attr("class", pickClass)
    //$("body").removeClass(pickClass);
    //$("body").addClass(pickClass);
    updateTwitterValues("#tweet-wrapper","url", lastQuote);
    });
  });
});
