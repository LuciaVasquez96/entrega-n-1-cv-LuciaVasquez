function titilarTitulo() {
    var titulo = document.title;
    var tituloAlternativo = "CV " + document.getElementById("MiNombre").textContent;
    var estado = false;
    setInterval(function() {
      document.title = estado ? titulo : tituloAlternativo;
      estado = !estado;
    }, 1000);
  }

  titilarTitulo();
  