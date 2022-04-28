document.getElementById('btn1').addEventListener('click',()=>{
    $('.modal-container').css('visibility','visible');
    $('.modal-container').css('opacity','100');
});

$('.btn-danger').eq(0).on('click',()=>{
    $('.modal-container').css('visibility','hidden');
    $('.modal-container').css('opacity','0');
});

$('.modal-container').on('click',(e)=>{
    if(e.target == document.querySelector('.modal-container')){
        $('.modal-container').css('visibility','hidden');
        $('.modal-container').css('opacity','0');
    }

});