import Swal from "sweetalert2";

export function successAlert(title) {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
}

export function deleteAlert() {
  Swal.fire({
    title: "¿Eliminar?",
    text: "No se puede revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, eliminar!",
  }).then((result) => {
    if (result.isConfirmed)
      Swal.fire({
        title: "Eliminada!",
        text: "Tu tarea ha sido eliminada.",
        icon: "success",
      });
  });
}
