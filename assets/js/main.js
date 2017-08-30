
var tabla = document.getElementById('container-tabla');
var img = ["assets/img/01.png", "assets/img/02.png", "assets/img/03.png", "assets/img/04.png","assets/img/01.png", "assets/img/02.png", "assets/img/03.png", "assets/img/04.png"];

var create_table = document.createElement("TABLE");
create_table.setAttribute("id", "tabla");
tabla.appendChild(create_table);

for (var i = 0; i < img.length; i++) {

	var tr = document.createElement("TR");
	var td = document.createElement("TD");
	var imgs = document.createElement("IMG");
	imgs.setAttribute("src", img[i]);
	td.appendChild(imgs); //cada imagen se guarda dentro de un TD y todos estos en un solo TR.

	var div = document.createElement("DIV");
	div.setAttribute("id", "capa");
	var capa = document.createElement("IMG"); //agrego una imagen 
	capa.setAttribute("src", "assets/img/29.png")
	capa.setAttribute("onclick", "mostrar(this);");
	div.appendChild(capa);
	td.appendChild(div);

	tr.appendChild(td);

	create_table.appendChild(td);
	tabla.appendChild(create_table);
}


var src =[];
function mostrar(e){
	var parent =e.parentNode;
	parent.removeAttribute("class");
	parent.setAttribute("class", "oculto");

	src.push((parent.parentNode).firstChild.src);

	console.log((parent.parentNode).firstChild.src);
	console.log(src);

	if(src.length == 2){
		if(src[0] == src[1]){
			console.log("hello");
			src = [];
		} else {
			src = [];
			parent.removeAttribute("class");
		}
	}
	
}

