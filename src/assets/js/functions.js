const copyToClipBoard = (id_elemento) => {
  let aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("Copied Phone")
}

export default copyToClipBoard