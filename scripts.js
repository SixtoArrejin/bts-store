document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        if (button.innerText == 'Agregado al carrito'){
            button.innerText = 'Comprar';
            button.classList.remove('btn-success');
        } else {
            button.innerText = 'Agregado al carrito';
            button.classList.add('btn-success');
        };
    });
});
