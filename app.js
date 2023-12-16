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

