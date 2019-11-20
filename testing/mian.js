// async queryPokemonAPI = () => {
//     let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/257.json`)
//     let data = await req.json()
//     console.log(data)
// }


function queryPokemonAPI() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let text = this.responseText
      let data = JSON.parse(text)
      console.log(data.forms)
    }
  };
  // open(HTTPMETHOD, URL, true)
  xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/id/257.json", true);
  xhttp.send();
}

// fix function to make btn dissapeer 
function byeBye(id) {
  let b = document.getElementById(btn);
  if (b.style == 'block')
      b.style = 'none';
    else
      b.style = 'block';
    }
byeBye()
