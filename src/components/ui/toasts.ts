import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  background: '#0f172a',
  color: '#ffffff',
  hideClass: {
    popup: 'fade-out'
  },
  timer: 3000,
  timerProgressBar: true,
  showConfirmButton: false,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer
    toast.onmouseleave = Swal.resumeTimer

    toast.addEventListener('click', () => {
      Swal.close()
    })

    const progressBar = toast.querySelector('.swal2-progress-bar') as HTMLElement;
    if (progressBar) {
      progressBar.style.background = '#3b82f6'; // Ustaw kolor progress bara
    }
  }
})

export const successToast = ({ text, position }: { text: string, position?: 'top' }) => {
  Toast.fire({
    icon: 'success',
    position: position ? position : 'top-end',
    iconColor: '#22c55e',
    title: `${text}`
  })
}

export const errorToast = ({ text, position }: { text: string, position?: 'top' }) => {
  Toast.fire({
    icon: 'error',
    position: position ? position : 'top-end',
    iconColor: '#ef4444',
    title: `${text}`
  })
}

export const pendingToast = ({ text, position }: { text: string, position?: 'top' }) => {
  Toast.fire({
    icon: 'warning',
    position: position ? position : 'top-end',
    iconColor: '#2e55ff',
    title: `${text}`
  })
}