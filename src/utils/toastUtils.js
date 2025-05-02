import { toast } from 'react-toastify';

// Reusable toast function
export const showToast = () => {
  console.log('Attempting to show toast');
  toast.info('Coming soon!', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeButton: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'android-toast',
    containerId: 'zappcart-toast',
    style: {
      padding: '0',
      margin: '0 auto',
    },
  });
};