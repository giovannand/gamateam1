<?php 
	$email = $_POST['email'];
	$age = $_POST['age'];
	$location = $_POST['location'];

	$jsonFile = json_decode(file_get_contents('leads.json'), true);

	$jsonFile[$email] = array('email' => $email, 'age' => $age, 'location' => $location);

	file_put_contents('leads.json', $jsonFile);
?>