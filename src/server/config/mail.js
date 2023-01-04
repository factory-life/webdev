const config = {
  driver: process.env.MAIL_DRIVER,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  username: process.env.MAIL_USERNAME,
  password: process.env.MAIL_PASSWORD,
  encryption: !!process.env.MAIL_ENCRYPTION ? process.env.MAIL_ENCRYPTION : null
};

export default {
  host: config.host,
  port: config.port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.username, // generated ethereal user
    pass: config.password // generated ethereal password
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
};