
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
    $mysqli->set_charset("utf8");
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
    $mysqli->set_charset("utf8");
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
    $mysqli->set_charset("utf8");
    if ($result = $mysqli->query($query)) {
        $rows = array();
        while ($row = $result->fetch_assoc()) {
            $rows[] = $row;
        }
        echo json_encode($rows);
    }
    $mysqli->close();
}

function fetchStudents()
{
    $query = "SELECT u.id, u.name FROM `tbl_users_227` u WHERE u.type = 2 AND u.id NOT IN (
               SELECT tc.child_id FROM tbl_teacher_child_227 tc WHERE tc.teacher_id = 6
              )";
    $mysqli = connect();
    $mysqli->set_charset("utf8");
    if ($result = $mysqli->query($query)) {
        $select= '<select id="student-select" name="select">';

        while ($row = $result->fetch_assoc()) {
            $select.='<option value="'.$row['id'].'">'.$row['name'].'</option>';
        }
        $select.='</select>';
        echo $select;
    }
    $mysqli->close();

}


function insertStudentToTeacher($student_id)
{
    $query = "INSERT IGNORE INTO tbl_teacher_child_227 (child_id, teacher_id)VALUES ($student_id, 6)";
    $mysqli = connect();
    $mysqli->set_charset("utf8");
    if ($mysqli->query($query) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $query . "<br>" . $mysqli->error;
    }

    $mysqli->close();
}

function showStudentForTeacher()
{
    $query = "SELECT u.id, u.name FROM tbl_users_227 u JOIN tbl_teacher_child_227 tc ON tc.child_id = u.id WHERE tc.teacher_id = 6 AND u.type = 2";
    $mysqli = connect();
    $mysqli->set_charset("utf8");
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
    $mysqli->close();
}

function insertUser($name,$url,$type)
{
	var_dump($name,$url,$type);
    $query = "INSERT IGNORE INTO tbl_users_227 (name,url,type)VALUES ($name,$url,$id)";
    $mysqli = connect();
    $mysqli->set_charset("utf8");
    if ($mysqli->query($query) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $query . "<br>" . $mysqli->error;
    }

    $mysqli->close();
}

if ($_POST['func'] == "A")
    fetchParent($_POST['id']);
if ($_POST['func'] == "B")
    fetchUsersByParentId($_POST['id']);
if ($_POST['func'] == "P")
    fetchAssoc();
if ($_POST['func'] == "S")
    fetchStudents();
if ($_POST['func'] == "T")
    insertStudentToTeacher($_POST['id']);
if ($_POST['func'] == "D")
    showStudentForTeacher();
if ($_POST['func'] == "U")
{
	 echo 'console.log("im here")';
	var_dump($_POST['name']);
	insertUser($_POST['name'], $_POST['url'], $_POST['type']);
}
?>
