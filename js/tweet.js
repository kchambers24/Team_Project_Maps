$( document ).ready(function() {

    $('#submit').click(function(){

      var searchTerm = {
        q: 'javascript'
      };
      twitterSearch(searchTerm);
    });
});

//Create search function
function twitterSearch(searchTerm){
  console.log('searching for ');
  console.dir(searchTerm);

  //REMEMBER! GET the Data, Transform the Data, Show the Data
  //Using Twitter Search API endpoint for URL https://api.twitter.com/1.1/search/tweets.json
  //Using param() to clean up any weird spaces or characters to be passed
  //specifiying jsonp since we're requesting json data from twitter url
  //success function gets called when data is recieved to tell app what to do when twitter sends back data
  $.ajax({
    url: 'https://api.twitter.com/1.1/search/tweets.json' + $.param(searchTerm),
    dataType: 'jsonp',
    success: function(data){
      console.log(data);

      for(item in data['results']){
        $('#tweets').append('<li>' + data['results'][item]['text'] + '</li>');
      }

    }

  });








};
