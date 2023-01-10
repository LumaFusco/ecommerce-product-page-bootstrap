/*toastr.success('Have fun storming the castle!', 'Miracle Max Says');*/

const btnAdd = document.querySelector(".btn");
toastr.options.positionClass = "toast-bottom-center";

btnAdd.onclick = () => {
toastr.success("Adicionado com sucesso!");
}

