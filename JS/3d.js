var elem = document.getElementById("root")

window.onclick = function(){
  document.body.removeChild(elem)
  setTimeout(function(){
      document.body.prepend(elem)
  }, 100)
}