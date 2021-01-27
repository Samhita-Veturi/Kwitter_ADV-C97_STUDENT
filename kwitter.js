function Login(){
    User_Name_Var = document.getElementById("User_Name").value;
    localStorage.setItem("User_1", User_Name_Var);
    window.location = "kwitter_room.html";
}