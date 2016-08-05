var getRepos = require('./../.env').apiKey;

$(document).ready(function(){
  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("user-name").val()
  });
});
