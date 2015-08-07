<?php

$facebook = "charlottecapoeira";
$facebook_ID = "33226513164";
$facebook_Event = "53219688800";
$FB_appID = "434804283219692";
$FB_appSecret = "f19f0ba158e54b1c99bae777b4e14b4b";

?>

<?php
  // Remember to copy files from the SDK's src/ directory to a
  // directory in your application on the server, such as php-sdk/
  require_once('facebook.php');

  $config = array(
    'appId' => '434804283219692',
    'secret' => 'f19f0ba158e54b1c99bae777b4e14b4b',
  );

  $facebook = new Facebook($config);
  $user_id = $facebook->getUser();
?>
<html>
  <head></head>
  <body>

  <?php
// Get these from http://developers.facebook.com
$api_key = $FB_appID;
$secret  = $FB_appSecret;

include_once './facebook-platform/php/facebook.php';

$facebook = new Facebook($api_key, $secret);
$user = $facebook->require_login();

?>
<h1>Yummie Tester</h1>
Hello <fb:name uid='<?php echo $user; ?>' useyou='false' possessive='true' />! <br>
Your id : <?php echo $user; ?>.<br>

<h2>Event<h2>
<?
$events = $facebook->api_client->events_get(null, null, null, null, null);

echo "<h3>Return array from Facebook</h3>";
print_r($events);
?>

  </body>
</html>