let pessoas = ["João", "José", "Maria", "Antônio"]

$('#teste').click(function (event) {
    return $.each(pessoas, function(index, item) {
        alert(item);
    })
})

$('#teste').dblclick(function (event){
    return $('p').show() .css('background', 'black');;
})