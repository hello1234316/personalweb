
// awa
const url = "https://discord.com/api/oauth2/authorize?client_id=846737831766261790&permissions=380373313558&scope=bot";

let linkClicker = document.getElementById('link_click');

window.onload = window.onfocus = () => {
  this.document.location.href = url;
}
