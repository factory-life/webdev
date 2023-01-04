// import validate from 'validate.js';
// import recaptcha from 'recaptcha-validator';

// const newContact = async req => {
//     validate.validators.captcha = function(value) {
//         return new validate.Promise(function(resolve, reject) {
//             if(!value || value.length < 2) {
//                 return resolve("Invalid captcha");
//             }

//             recaptcha(process.env.RECAPTCHA_SECRET_V2, value, req.ip)
//               .then(result => {
//                   if(result && "success" in result && result.success === true){
//                       resolve();
//                   } else {
//                       resolve('Captcha could not be verified');
//                   }
//               })
//               .catch(err => {
//                   resolve('Captcha could not be verified');
//               });
//         });
//     };

//     // validate.validators.captcha = value => validateCaptchaPromise(value, req);

//     const constraints = {
//         name: {
//             presence: { allowEmpty: false },
//             length: { maximum: 150, minimum: 3 }
//         },
//         email: {
//             presence: { allowEmpty: false },
//             length: { maximum: 150, minimum: 3 },
//             email: true
//         },
//         tel: {
//             presence: { allowEmpty: true },
//             format: {
//                 pattern: /^[0-9\s]+$/,
//                 message: "Please only use numbers and spaces"
//             },
//             length: { maximum: 50, minimum: 3 }
//         },
//         type: {
//             presence: { allowEmpty: false },
//             length: { maximum: 150, minimum: 3 }
//         },
//         captcha: {
//             captcha: true,
//             presence: { allowEmpty: false }
//         }
//     };

//     // return validate(req.body, constraints);
//     try {
//         await validate.async(req.body, constraints);
//         return true;
//     } catch (err) {
//         return err;
//     }
// };

// export {
//     newContact
// };
