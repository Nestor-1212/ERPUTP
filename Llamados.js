$('#BtnIngresarMontos').click(function (e) { 
  
    $("#exampleModal").modal("show");
    console.log("entre");
    
});

$('#BtnNuevoRegistro').click(function (e) { 
    e.preventDefault();
   
    $("#myModal").modal("show");
  
    console.log("perra");
    
});

$('#Salir').click(function (e) { 
    e.preventDefault();
    
$(location).attr('href','index.html');
return;
    
    
});

