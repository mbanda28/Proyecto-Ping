const form = document.querySelector('.state')
const p2 = document.querySelector('.p2')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

form.addEventListener('submit',verificar)

function verificar(event) {
    event.preventDefault()

    const correo = input.value
    const valido = validarDireccionCorreo(correo)
    if (valido) {
        p2.style.color = 'green'
        form.submit()
    } else {
        p2.classList.remove('disable')
        input.style.border = '1px solid var(--Red)'
        p2.textContent = 'Please provide a valide email address'
    }
}

function validarDireccionCorreo(correo) {
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronCorreo.test(correo);
}

