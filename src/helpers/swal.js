import swal from 'sweetalert';

export const alertError = message => {
  swal('Not quite!', message, 'error');
}
