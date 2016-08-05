var gitHubRequest = require('./../js/github.js').gitHubModule;

$(document).ready(function(){
  $("#user-form").submit(function(event){
    event.preventDefault();
    var username = $("#user-name").val();
    var newGitHubRequest = new gitHubRequest(username);
    newGitHubRequest.getRepos();
  });
});
