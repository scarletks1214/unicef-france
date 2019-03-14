import swal from 'sweetalert';

export const alertError = message => {
  swal('Not quite!', message, 'error');
}

export const alertSuccess = message => {
  swal('Donation Complete!', message, 'success');
}
