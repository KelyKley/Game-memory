
var tabla = document.getElementById('container-tabla');
var image = ["assets/img/01.png",
			 "assets/img/02.png", 
			 "assets/img/03.png", 
			 "assets/img/04.png",
			 "assets/img/05.png", 
			 "assets/img/06.png", 
			 "assets/img/01.png", 
			 "assets/img/02.png",
			 "assets/img/03.png", 
			 "assets/img/04.png", 
			 "assets/img/05.png", 
			 "assets/img/06.png",
			 "assets/img/07.png",
			 "assets/img/08.png",
			 "assets/img/08.png",
			 "assets/img/07.png"
			 ];

var create_table = document.createElement("DIV");
create_table.setAttribute("class", "tabla");
tabla.appendChild(create_table);

for (var i = 0; i < image.length; i++) {

	var td = document.createElement("DIV");
	td.setAttribute("class", "container-imgs")
	var imgs = document.createElement("IMG");
	imgs.setAttribute("id", "imagenes"+i);
	imgs.setAttribute("class","oculto");
	imgs.setAttribute("src", image[i]);
	td.appendChild(imgs); 

	create_table.appendChild(td);
	tabla.appendChild(create_table);
}

var first_image;
var image_id;
var clicks = 0; // contador de clicks

var tabla = document.getElementsByClassName("tabla")[0]; //Llama el div contenedor primer clase.
tabla.addEventListener("click", (e)=>{  //funcion arrow -  sintaxis más corta
	var img = e.target.children[0]; //target devuelve elemento, primer hijo
  	var image_id2 = img.id; //devuelve el id de la imagen

	if(img.nodeName == "IMG"){ // devuelve el nombre del elemento
    	img.className = "visible"; //le la clase para que la imagen oculta sea visible
    	clicks++;

    if(clicks == 1){
    	first_image = img.src; //devuelve la ruta de la imagen
    	image_id = img.id; //devuelve el id de la imagen del siguente click
    }else if(clicks == 2) { // en el segundo click evaluara si sus rutas son iguales
      if(first_image == img.src){
        console.log("Son tarjetas iguales :)");
      } else {
        setTimeout(function(){ //si no son iguales las ocultara otra vez.
          $( "#" + image_id).removeAttr("class").attr("class", "oculto");
          $( "#" + image_id2).removeAttr("class").attr("class", "oculto");
        }, 500)
      }
      clicks = 0; //el contador de clicks reiniciara
    }
  }
});
