
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

	var div = document.createElement("DIV");//Creo un div q contenera las imagenes
	div.setAttribute("class", "container-imgs")
	var imgs = document.createElement("IMG");//creo element imagen
	imgs.setAttribute("id", "imagenes"+i); 
	imgs.setAttribute("class","oculto"); //Creamos una clase oculto
	imgs.setAttribute("src", image[i]);
	div.appendChild(imgs); 

	create_table.appendChild(div);
	tabla.appendChild(create_table);
}

var first_image;//evalua imagen 
var image_id; //contenedor de ids
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
      if(first_image == img.src){//Evalua si las rutas son iguales
        swal({
			title: "Estupendo!",
		 	text: "Tu memoria es increible! :)",
		  	timer: 1000,
		  	showConfirmButton: false,
		  	imageUrl: img.src
		});
      } else {
      	    swal({
			title: "FATAL!",
		 	text: "Sigue ejercitandote :(",
		  	timer: 800,
		  	showConfirmButton: false,
		  	imageUrl: "assets/img/94.png"
		});
        setTimeout(function(){ //si no son iguales las ocultara otra vez.
          $( "#" + image_id).removeAttr("class").attr("class", "oculto");
          $( "#" + image_id2).removeAttr("class").attr("class", "oculto");
        }, 500)
      }
      clicks = 0; //el contador de clicks reiniciara
    }
  }
});
