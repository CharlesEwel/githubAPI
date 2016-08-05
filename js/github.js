var apiKey = require('./../.env').apiKey;

function gitHubRequest(username) {
  this.username = username;
}

gitHubRequest.prototype.getRepos = function(){
  var username = this.username;
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repository){
      $("#repository-list").append("<li><span class='repository-name'>"+repository.name+"</span> "+repository.description+"</li>");
    });
  }).fail(function(error){
    alert(error.responseJSON.message);
  });
};

exports.gitHubModule = gitHubRequest;
