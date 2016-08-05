var gitHubRequest = require('./../js/github.js').gitHubModule;

$(document).ready(function(){
  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#user-name").val();
    console.log(username)
    var newGitHubRequest = new gitHubRequest(username);
    console.log(newGitHubRequest)
    newGitHubRequest.getRepos();
  });
});
