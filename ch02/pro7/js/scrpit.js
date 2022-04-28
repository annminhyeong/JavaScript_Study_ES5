// for(let i =0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',()=>{
//         tabOpen(i);
//     });
// }

$('.list').click((e)=>{
    tabOpen(e.target.dataset.id);
});





function tabOpen(i) {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');

    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').eq(i).addClass('show');
}