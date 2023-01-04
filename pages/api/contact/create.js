import { newContact as validateNewContact } from 'server/validators/contact';
// import sendContact from "api/contact/create";

export default async function create(req, res, next) {
  // if(req.method !== 'POST') {
  //   return res.status(400).json({ message: 'Invalid request' });
  // }

  // let validationErrors = false;

  // try {
  //   validationErrors = await validateNewContact(req);
  // } catch(e) {
  //   console.log(e);
  // }

  // if (validationErrors !== true) {
  //   return res.status(400).json({
  //     errors: validationErrors,
  //     success: false,
  //     message: "There were errors with the form data"
  //   });
  // }

  // try {
  //   const result = await sendContact(req.body);
  //   return res.status(200).json(result);
  // } catch(e) {
  //   return res.status(400).json({
  //     message: "There was an error sending the mail",
  //     success: false
  //   });
  // }

  return res.status(200).body('Hello');
};