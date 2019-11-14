console.log('connected');
const  box = document.querySelector('.box');
//box.style.display = '';
$('.box').hide();
box.style.display = 'block';

/*box.addEventListener('click', function () {
    alert('The box was clicked');
})*/

$('.box').click(function () {
    alert('You clicked me with jQuery');
})
