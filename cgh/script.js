
// awa
const url = "https://discord.com/oauth2/authorize?client_id=837564399833055272&permissions=4063559251&scope=bot%20applications.commands";

let linkClicker = document.getElementById('link_click');

window.onload = window.onfocus = () => {
  this.document.location.href = url;
}
