
let showFriends = () => {
    let lista = $('#lista');
    lista.empty();
    $.get ('http://localhost:5000/amigos', (response) => {
        response.forEach(element => {
            let list= `<li>${element.name}</li>`;
            lista.append(list);    
        });
    });
};

$('#boton').click(showFriends);


$('#search').click( () => {
    let id= $('#input').val();
    $.get(`http://localhost:5000/amigos/${id}`, (response) =>{
        $('#amigo').text(response.name);
    });
});

$('#delete').click( () => {
    let id = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: () => {
            $('#success').text(`El amigo con el ID ${id} fue borrado con éxito`)
            showFriends()
        },    
    });
   
});

