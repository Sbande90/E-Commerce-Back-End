$(document).ready(()=>{
    $('#submit').on('click', () => {
        var new_burger = $('#bg').val();
        console.log(new_burger);
        menu (new_burger);
    });
});

function menu (val){
    $.ajax({
        type: "POST",
        url: "/api/new-burger/"+val
    }).then((data)=>{
        location.reload();
    } );
};