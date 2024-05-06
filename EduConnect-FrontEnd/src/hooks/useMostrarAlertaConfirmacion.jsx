import Swal from 'sweetalert2'

function mostrarToast (e) {
  e.preventDefault()
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    }
  })

  Toast.fire({
    icon: 'success',
    title: 'Ingresado con Éxito'
  })
}

export default mostrarToast
