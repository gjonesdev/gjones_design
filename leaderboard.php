<?php

  try
  {
	   //Get form data
	   $json_score = file_get_contents('php://input');

	   $new_score = json_decode($json_score);

	   //Get data from existing json file
	   $json_leader = file_get_contents("leaderboard.json");

	   // converts json data into array
	   $leader_array = json_decode($json_leader);

	   // Push user data to array
	   array_push($leader_array,$new_score);

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

