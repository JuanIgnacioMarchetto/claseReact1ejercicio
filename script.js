
const tipoSeguro = document.getElementById("tipo-seguro");
const valorSeguro = document.getElementById("valor-seguro");

tipoSeguro.addEventListener("change", () => {
    const selectedTipoSeguro = tipoSeguro.value;
    let precioSeguro = 0;

    switch (selectedTipoSeguro) {
        case "basico":
            precioSeguro = 500;
            break;
        case "intermedio":
            precioSeguro = 1000;
            break;
        case "premium":
            precioSeguro = 1500;
            break;
    }

    valorSeguro.textContent = `Precio: $${precioSeguro}`;
});