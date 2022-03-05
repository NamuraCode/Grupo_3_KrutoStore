const { body } = require('express-validator')

const validationsRegister = [
    body('username')
        .notEmpty().withMessage('Campo username vacio').bail,
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

const validationsProductCreate = [
    body('product')
        .notEmpty().withMessage('Campo nombre de producto vacio'),
    body('price')
        .notEmpty().withMessage('Campo precio vacio'),
    body('description')
        .notEmpty().withMessage('Campo descripción vacio'),
]

module.exports ={
    validationsRegister,
    validationLogin,
    validationsProductCreate
}