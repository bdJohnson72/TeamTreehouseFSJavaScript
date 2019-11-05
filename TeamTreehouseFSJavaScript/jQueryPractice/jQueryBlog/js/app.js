//$('#flashMessage').hide();
/*
$('#flashMessage').slideDown(1000);
$('#flashMessage').delay(2000);
$('#flashMessage').slideUp(1000);*/

//below is an exmaple of chaining the jQuery methods together
/*


const title = 'Blog Post Title';

const content = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ' +
    'voluptate velit esse cillum dolore eu fugiat nulla pariatur.';*/

$('#flashMessage').hide();


$('#previewButton').click(function () {
 const title = $('#blogTitleInput').val();
 const content = $('#blogContentInput').val();

 $('#blogTitlePreview').text(title);
 $('#blogContentPreview').text(content);

 $('#flashMessage').slideDown(1000)
        .delay(3000)
        .slideUp();
});