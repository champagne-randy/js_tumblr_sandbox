/**
*
*	Create a Client
* npmjs.com/package/tumblr
*/

var tumblr          = require('tumblr');
var consumer_key 	  = '4Mg5HL4moD4l2g28eIeMF2bpoqg6w4UHVGY71iFlfxL9dpezap';
var consumer_secret = 'yfRzyOhaaKRNHQmfjSGiu7Ka6Cs7rUohHyfdrxC5emdoIndHnk';
var token 			    = '8YvVD3dG2pDZZTq5kPRgkCbeE1gDk17ESXH7YGHBBB0SP7I6R3';
var token_secret	  = 'Ikwbnbxavftw1LgF3UTQlfaa0u2JYp9x9MH38tqHgpnjDnKO4x';
var oauth           = 
{
    consumer_key    : consumer_key,
    consumer_secret : consumer_secret,
    token           : token,
    token_secret    : token_secret
};




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


















