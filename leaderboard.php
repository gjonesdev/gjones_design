<?php
function leader_sort($a, $b) {
    return $a['score'] > $b['score'];
}

  try
  {
	   //Get form data
	   $new_score = array(
		'user'=> $_POST['user'],
		'score'=> $_POST['score'],
	 );

	   //Get data from existing json file
	   $json_leader = file_get_contents("leaderboard.json");

	   // converts json data into array
	   $leader_array = json_decode($json_leader);

	   // Push user data to array
	   array_push($leader_array,$new_score);

	   usort($leader_array, 'leader_sort');

       //Convert updated array to JSON
	   $json_leader = json_encode($leader_array, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents("leaderboard.json", $json_leader)) {
	        echo 'Data successfully saved';
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

   /** 
	solution 1:
   find a way to pass the score variable to html and use a form from html to pass the json to php. this would create a popup with one editable field for name and one non-editable field for score.
   the name field can be constrained to a certain number of characters, leaving the option for 3 letter inputs like classic arcade games. Censorship could be done in the php file when receiving the input

   solution 2: 
   find a way to create a form using js/ p5.js that accepts 3 letter inputs and on submit uses the current post implementations. 
   Solutions could possible use a drop down/scroll selection to chose leters an submit these letters on button press. best option to constrain users to certain inputs/ censor test.
   
   This is the code used to post from the javascript directly into the php:
   
   $json_score = file_get_contents('php://input');

	   $new_score = json_decode($json_score);

