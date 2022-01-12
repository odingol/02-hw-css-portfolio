// Creating a glow for the input box//

var inputs = document.querySelector('#input');


for (var i = 0; i < inputs.length; i++);


inputs.addEventListener('click', function() {
    inputs.setAttribute('style', 'color:blue');
    inputs[1].setAttribute('style', 'color:blue');
    inputs[2].setAttribute('style', 'color:blue');
});

// Scrolling between different sections //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(select){
        select.preventDefault();
        document.quertySelector(this.getAttribute('href')).scrollIntoView({
            behavior : 'smooth'
        });
    });
});