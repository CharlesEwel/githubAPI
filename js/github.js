var apiKey = require('./../.env').apiKey;

function gitHubRequest(username) {
  this.username = username;
}

gitHubRequest.prototype.getRepos = function(){
  var username = this.username;
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitHubModule = gitHubRequest;
