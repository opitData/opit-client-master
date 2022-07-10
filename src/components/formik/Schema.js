
import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Please enter your name'),
    email: Yup.string()
        // .label('Email')
        .email('Enter a valid email')
        .required('Please enter your email address'),
    lastName: Yup.string().required('Please enter your name'),
    // carKind: '',
    // carNum: '',
    // phoneNumber: Yup.string()
    //     .label('Phone number')
    //     .required('Please enter your phone number')
    //     .matches(new RegExp('[0-9]{7}'), 'must have at least 10 digits'),
    // facebook: Yup.string()
    //     .label('facebook account')
    //     .matches(new RegExp(/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i), 'Please enter valid facebook account'),
    // twitter: Yup.string()
    //     .label('twitter account')
    //     .matches(new RegExp(/^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i), 'Please enter valid twitter account'),
    // youtube: Yup.string()
    //     .label('youtube account')
    //     .matches(new RegExp(/^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/), 'Please enter valid youtube account'),
    // instagram: Yup.string()
    //     .label('instagram account')
    //     .matches(new RegExp(/^\s*(http\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i), 'Please enter valid instagram account'),
    //whatApp is equal to phonenumber
})

export const paymentsSchema = Yup.object().shape({
    fullName: Yup.string().required('Please enter your name'),
    cardNum: Yup.string().required('Please enter your card number'),
    expireMonth: Yup.number().max(0).required('Please enter expire date'),
    expireYear: Yup.number().max(0).required('Please enter expire date'),
    CVC: Yup.number().max(0).required('Please enter expire date')
})