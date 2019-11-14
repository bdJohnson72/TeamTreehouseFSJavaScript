const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');
const pdfCheckBox = ('<label><input type="checkbox">Allow PDF Downloads </input></label>');
const linkContainer = $('#links');
$pdfs.attr('download', 'true');
$pdfs.addClass('pdf');

$secureLinks.attr('target', '_blank');
$secureLinks.addClass('secure');

$pdfs.on('click', function (e) {
    if( $(':checked').length === 0){
        event.preventDefault();
        alert('Please check the box to allow PDF downloads');
    }
})

linkContainer.append(pdfCheckBox);






