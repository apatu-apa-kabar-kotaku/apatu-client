window.fbAsyncInit = function() {
  FB.init({
    appId      : '426429061147650',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });
    
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });  
  FB.AppEvents.logPageView()
    
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.12&appId=426429061147650&autoLogAppEvents=1";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
    if(response.status === 'connected'){
      console.log('logged in and authenticated',response.authResponse.accessToken);
      // testAPI(response.authResponse.accessToken)
      axios({
        method : 'post',
        url : 'http://localhost:3000/api/users/signinfb',
        headers:{
          fb_token : response.authResponse.accessToken
        }
      })
      .then(function (resLogin) {
        console.log("resLogin",JSON.stringify(resLogin));
        localStorage.setItem('token',resLogin.data.data.token)
      })
      .catch(function (error) {
        console.log(error);
      });
    }else{
      console.log('not authenticated');
    }
  }

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}





