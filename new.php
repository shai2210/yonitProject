<?php


	function connect()
	{
	//create a mySQL DB connection:
	$dbhost = "182.50.133.146";
	$dbuser = "auxstudDB6c";
	$dbpass = "auxstud6cDB1!";
	$dbname = "auxstudDB6c";
	
		 $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
	
	 //testing connection success
	 if(mysqli_connect_errno()) {
		 die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
 	 }
 	 return $conn;
	}
	function fetchAssoc(){
		$query = "SELECT * FROM tbl_users_227";
		$mysqli = connect();
			if ($result = $mysqli->query($query)) {
				 while ($row = $result->fetch_assoc()) {
					 echo($row["name"]. " " .$row["id"]."<br>");		
				 }
		}
	}
	
	function fetchPerson($id){
		$query = "SELECT url FROM tbl_users_227 WHERE id=$id";
		$mysqli = connect();
		if ($result = $mysqli->query($query)) {
			$row = $result->fetch_assoc();
			$pic = $row["url"];
			echo ("<img src=$pic alt=parent/>");			
			
			// $query = "SELECT tbl_users_227.url 
				  // FROM tbl_users_227 
				  // INNER JOIN tbl_parent_child_227
				  // WHERE parent_id=$id";
		// $mysqli = connect();
		// if ($result = $mysqli->query($query)) {
			// $row = $result->fetch_assoc();
			// $pic = $row["url"];
			// echo ($pic);			
		}
	}
	
	if($_POST['func']=="A")
		fetchPerson($_POST['id']);
	if($_POST['func']=="P")
		fetchAssoc();
	
?>
