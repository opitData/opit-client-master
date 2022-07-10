import {
    dark,
    dominant,
} from '../styles/SystemColor';

class Toast {

    showSystemToast(toast,message) {
        toast.show(message, {
            type: 'success',
            position: 'bottom',
            duration: 4000,
            offset: 30,
            textStyle: { color: dark },
            style: { backgroundColor: dominant, width: '80%', justifyContent: 'center' },
            animationType: 'slide-in | zoom-in'
        });
    }


}


export default new Toast()