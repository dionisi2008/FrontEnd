document.addEventListener("DOMContentLoaded", () => 
{
    LoadAllMessage();
    console.log("s");
});

function LoadAllMessage()
{
    var LoadServer = new XMLHttpRequest();
    LoadServer.open("POST", "/api");
    LoadServer.send("Read");
    LoadServer.onload += () =>
    {
        document.getElementById('AllMessage').innerText = LoadServer.response;
    }
}