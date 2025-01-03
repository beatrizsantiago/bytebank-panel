import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

type Props = {
  text: string,
  type: 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS',
};

const COLORS = {
  INFO: '#007BFF',
  WARNING: '#FFA500',
  ERROR: '#e90000',
  SUCCESS: '#47A138',
};

const toast = ({ text, type }: Props) => (
  Toastify({
    text,
    style: {
      background: COLORS[type],
      borderRadius: '10px',
    }
  }).showToast()
);

export default toast;
