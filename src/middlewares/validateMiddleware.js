const path = require('path');
const { body } = require('express-validator');


const validations = [
    body('username').notEmpty().withMessage('Completa el campo'),
    body('email').notEmpty().withMessage('Completa el campo').bail()
    .isEmail().withMessage('Escribe un correo válido'),
    body('password').notEmpty().withMessage('Completa el campo'),
    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
        }

		return true;
	})
]