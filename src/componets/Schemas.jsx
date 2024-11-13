import * as Yup from "yup"

export const signUpschma = Yup.object({
    name:Yup.string().min(2).max(30).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(6).required("Plaese Enter Your Password"),
    confirm_password:Yup.string().required("Please Enter Confirm Password").oneOf([Yup.ref("password"),null],"Password must match"),
    
})