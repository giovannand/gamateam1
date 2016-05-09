<?php 
	$post = json_decode(file_get_contents("php://input"));

	$email = $post->email;
	$age = $post->age;
	$location = $post->location;

	$jsonFile = json_decode(file_get_contents('leads.json'), true);

	$jsonFile[$email] = array('email' => $email, 'age' => $age, 'location' => $location);

	file_put_contents('leads.json', json_encode($jsonFile));
?>