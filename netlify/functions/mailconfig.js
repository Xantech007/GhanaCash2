// ============================================================
//  Ghana Cash — MAIL CONFIG  (edit this file to change SMTP settings)
// ============================================================
//  Lives on the server side (Netlify function), so it is never
//  sent to the browser.
//
//  SAFER: leave the password blank here and set these in
//  Netlify → Site settings → Environment variables instead:
//    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM_ADDRESS
//  Values set there override the ones below.
//
//  Gmail SMTP: host smtp.gmail.com, port 465 (secure: true),
//  user = your Gmail, pass = a 16-character Google "App Password"
//  (Google Account → Security → 2-Step Verification → App passwords).
// ============================================================

module.exports = {
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: (process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) === 465 : true), // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER || 'your-email@gmail.com',
      pass: process.env.SMTP_PASS || 'your-app-password'
    }
  },

  from: {
    name: 'Ghana Cash',
    address: process.env.MAIL_FROM_ADDRESS || process.env.SMTP_USER || 'your-email@gmail.com'
  },

  subject: 'Welcome to Ghana Cash 🎉',

  // Website base URL used for the dashboard button and logo in the email.
  // Leave blank to auto-use your Netlify site URL.
  siteURL: 'https://ghanacashmine.netlify.app' // e.g. 'https://ghanacash.com'
};
