const $body = document.getElementsByTagName("body")[0],
  $openButton = document.getElementById("lightbox-button"),
  $closeButton = document.getElementById("lightbox-close"),
  $openUserManualButton = document.getElementById("open-userManual-button"),
  $userManual = document.getElementById("anchor-userManual"),
  $lightbox = document.getElementById("lightbox");
$openButton.onclick = () => {
  $closeButton.disabled = false;
  $openButton.disabled = true;
  $lightbox.classList.remove("hidden");
  $body.classList.add("lightbox");
};
$closeButton.onclick = () => {
  $closeButton.disabled = true;
  $openButton.disabled = false;
  $lightbox.classList.add("hidden");
  $body.classList.remove("lightbox");
};
$openButton.innerText = $openButton.title;
$openButton.disabled = false;
$openUserManualButton.onclick = (e) => {
  e.preventDefault();
  $userManual.setAttribute("open", true);
};
$userManual.removeAttribute("open");
