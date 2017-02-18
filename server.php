
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
    if (mysqli_connect_errno()) {
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
    }
    return $conn;
}
function fetchAssoc()
{
    $query  = "SELECT id ,name FROM tbl_users_227";
    $mysqli = connect();
    if ($result = $mysqli->query($query)) {
        echo "<table ><tr><th>מספר מזהה</th><th>שם</th></tr>";
        
        while ($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['name'] . "</td>";
            echo "</tr>";
        }
        echo "</table>";
    }
}

/**
 * @param $id
 */
function fetchParent($id)
{
    $query  = "SELECT name, url FROM tbl_users_227 WHERE id = $id";
    $mysqli = connect();
    if ($result = $mysqli->query($query)) {
        $row = $result->fetch_assoc();
        echo json_encode($row);
    }
}

/**
 * @param $id
 */
function fetchUsersByParentId($id)
{
    $query = "SELECT u.url `child_url`, b.url `book_url` 
  			  FROM tbl_users_227 u 
			  JOIN tbl_user_book_227 ub ON u.id = ub.user_id
			  JOIN tbl_books_227 b ON ub.book_id = b.id 
			  WHERE u.id IN (
			  SELECT pc.child_id 
			  FROM tbl_parent_child_227 pc 
			  WHERE pc.parent_id =" . $id . ")";
    
    $mysqli = connect();
    if ($result = $mysqli->query($query)) {
        $rows = array();
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    }
}

if ($_POST['func'] == "A")
    fetchParent($_POST['id']);
if ($_POST['func'] == "B")
    fetchUsersByParentId($_POST['id']);
if ($_POST['func'] == "P")
    fetchAssoc();

?>