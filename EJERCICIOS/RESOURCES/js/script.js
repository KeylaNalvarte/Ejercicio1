function cargarDatos(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:'GET',
        dataType:'JSON',
        beforeSend: function (xhr){
            
        },
        success : function(respuesta){
            var resultado =$ ("#resultado");
            $.each(respuesta,function(index,elemento){
                resultado.append('<div>'+elemento.userId+elemento.id+elemento.title+elemento.body+'<div>');
            });
        },
        error :function (jqXHR,textStatus,errorThrown){
            console.log("ERROR EN LA EJECUCION");
        },
        complete:function (jqXHR,textStatus){
            alert("Operacion Completada");
        }
    });
}
function ConsultarPorId(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts",
        type:'get',
        dataType:'JSON',
        success:function(re){
            var resultado =$("#resultado");
            var id=document.getElementById('codigo').value;
            alert(id);
            resultado.append(re[id].userId+'<br>'+re[id].id+'<br>'+re[id].title+'<br>'+re[id].body+'<br>');
        },
        error :function (jqXHR,textStatus,errorThrown){
            console.log("ERROR EN LA EJECUCION");
        },
        complete:function (jqXHR,textStatus){
            alert("Operacion Completada");
        }
    });
}