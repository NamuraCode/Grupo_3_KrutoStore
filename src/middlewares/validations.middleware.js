const { body } = require('express-validator')

const validationsRegister = [
    body('username')
        .notEmpty().withMessage('Campo username vacio'),
    body('email')
        .notEmpty().withMessage('Campo email vacio').bail()
        .isEmail().withMessage('Formato de correo no valido'),
    body('password')
        .notEmpty().withMessage('Campo contraseña vacio').bail()
        .isLength({min: 8}).withMessage('Campo contraseña minimo 8 caracteres'),
    body('coPassword')
        .notEmpty().withMessage('Campo contraseña vacio'),
    body('checkbox')
        .notEmpty().withMessage('Acepta terminos y condiciones'),
]

const validationLogin = [
    body('username')
        .notEmpty().withMessage('Campo username vacio'),
    body('password')
        .notEmpty().withMessage('Campo contraseña vacio').bail()
        .isLength({min: 8}).withMessage('Campo contraseña minimo 8 caracteres'),
]

module.exports ={
    validationsRegister,
    validationLogin
}