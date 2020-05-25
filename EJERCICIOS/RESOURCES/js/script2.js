function llenarDatos(){
    $.ajax({
        url:"cliente.json",
        type:'get',
        dataType:'JSON',
        success:function(data){
            $("#contenido").append("<div>"+data.nombre+'<br>'+data.apellido+'<br>'+data.dni+'<br>'+data.correo+'<br>'+data.pais+"<div>");
        },
          error :function (jqXHR,textStatus,errorThrown){
            console.log("ERROR EN LA EJECUCION");
        },
        complete:function (jqXHR,textStatus){
            alert("Operacion Completada");
        }
    });
}