function adduser()
{
    player_1 = document.getElementById("player1_name").Value;
    player_2 = document.getElementById("player1_name").value;

    localStorage.setItem("playe_1 _name" , player_1);
    localStorage.setItem("player 2 name" , player_2);

    window.location = "game_screen_html";
}