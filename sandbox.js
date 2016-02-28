/**
*
*	Create a Client
* npmjs.com/package/tumblr
*/

var tumblr  = require('tumblr');
var oauth   = require('./credentials.json');


/**
*
*	Get user info
*
*/

var user = new tumblr.User(oauth);
user.info(function(error, response) {
  if (error) {
    throw new Error(error);
  }
 
  console.log(response.user);
});






/**
*
*	Get all posts
*
*/
/*
var blog = new tumblr.Blog('creolemusings.tumblr.com', oauth);
blog.text({limit: 2}, function(error, response) {
  if (error) {
    throw new Error(error);
  }
 
  console.log(response.posts);
});
*/


















