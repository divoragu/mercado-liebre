
    function enviarFormulario() {
        let nombre = document.querySelector("input[name='nombre']").value;
        let email = document.querySelector("input[name='email']").value;

        if (nombre === "" || email === "") {
            alert("Debes rellenar todos los campos obligatorios.");
            return;
        }

        window.location.href = "/";
    }

    document.querySelector("input[type='submit']").addEventListener("click", enviarFormulario);
