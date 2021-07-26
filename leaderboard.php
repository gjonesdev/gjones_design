<?php

  try
  {
	   //Get form data
	   $new_score = array(
	      'user'=> $_POST['user'],
	      'score'=> $_POST['score'],
	   );

	   //Get data from existing json file
	   $json_data = file_get_contents("leaderboard.json");

	   // converts json data into array
	   $data_array = json_decode($json_data);

	   // Push user data to array
	   array_push($data_array,$new_score);

       //Convert updated array to JSON
	   $json_data = json_encode($data_array, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents("leaderboard.json", $json_data)) {
	        echo 'Data successfully saved';
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

