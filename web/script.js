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
}function addIten() {

    const input = document.getElementById("ItenInput");

    const lista = document.getElementById("listaDeCompras");

    if (input.value.trim() !== "") {

        const li = document.createElement("li");

        li.textContent = input.value;

        li.classList.add("list-group-item");

        lista.appendChild(li);

        input.value = "";

        input.focus();

    } else {

        alert("Por favor, digite um Produto");

    }

}