var apiKey = require('./../.env').apiKey;
function gitHubRequest(username) {
  this.username = username;
}

gitHubRequest.prototype.getRepos = function(){
  var username = this.username;
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    response.forEach(function(repository){
      $("#repository-list").append("<li><span class='repository-name'>" + repository.name + "</span><ul><li>Description: " + repository.description + "</li><li>Date Created: " + moment(repository.created_at).format('MM/DD/YYYY') + "</li></ul></li>");
    });
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};

exports.gitHubModule = gitHubRequest;
