<?

//We use already made Twitter OAuth library
//https://github.com/mynetx/codebird-php
require_once ('codebird.php');

$oauth_access_token = "25427518-bAZULV6qpIbZ4CNJAHrA4BTJpPKr1z0U7FjdCywA0";
$oauth_access_token_secret = "gJRdZavhxUXDm5MF3aEdSbiC5uxIO4wmkqBOY1SvJN8";
$consumer_key = "s7qYbNWIIAhWEB9Db8h4Q";
$consumer_secret = "aTNrt3Nh1POWxVMFadPHxcGSnMoHZurY1ONHX7bzDw";
$username = "obewunkonebwe";
$num=10; 
//Twitter OAuth Settings, enter your settings here:
$CONSUMER_KEY = 's7qYbNWIIAhWEB9Db8h4Q';
$CONSUMER_SECRET = 'aTNrt3Nh1POWxVMFadPHxcGSnMoHZurY1ONHX7bzDw';
$ACCESS_TOKEN = '25427518-bAZULV6qpIbZ4CNJAHrA4BTJpPKr1z0U7FjdCywA0';
$ACCESS_TOKEN_SECRET = 'gJRdZavhxUXDm5MF3aEdSbiC5uxIO4wmkqBOY1SvJN8';

//Get authenticated
Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);
$cb = Codebird::getInstance();
$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);


//retrieve posts
$q = $_POST['q'];
$count = $_POST['count'];
$api = $_POST['api'];

//https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline
//https://dev.twitter.com/docs/api/1.1/get/search/tweets
$params = array(
	'screen_name' => $q,
	'q' => $q,
	'count' => $count
);

//Make the REST call
$data = (array) $cb->$api($params);

//Output result in JSON, getting it ready for jQuery to process
echo json_encode($data);

?>