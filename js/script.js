function addIten() {
    const input = document.getElementById("ItenInput");
    const lista = document.getElementById("listaDeCompras");
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        lista.appendChild(li);
        input.value = "";
        input.focus();
    } else {
        alert("Por favor, digite um Produto");
    }
}