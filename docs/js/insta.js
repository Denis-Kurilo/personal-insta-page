$(document).ready(function(){ 

	var userFeed = new Instafeed({
        get: 'user',
        userId: '8435959384',
        accessToken: '8435959384.1677ed0.fb3151ef0bfe4ee7b64ba742aba99074',
        resolution : 'standard_resolution',
        limit : 60
    });
    userFeed.run();

    setTimeout(function(){
    	$('.instafeed').addClass('shadowed');
    }, 100);

});