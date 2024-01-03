const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.about');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenAlinhar = document.querySelectorAll('.alinhar');
hiddenAlinhar.forEach((el) => observer.observe(el));

const hiddenConsltorio = document.querySelectorAll('.about-consultorio');
hiddenConsltorio.forEach((el) => observer.observe(el));


document.getElementById('botaoContato').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToElement('.agenda-consulta');
});

function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


document.getElementById('botaoConsultorio').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToElement('.about-consultorio');
});

function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}