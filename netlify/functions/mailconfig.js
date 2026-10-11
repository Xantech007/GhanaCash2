// ============================================================
//  Ghana Cash — MAIL CONFIG
// ============================================================
//  Lives on the server side (Netlify function), so it is never
//  sent to the browser.
//
//  Set these in Netlify → Site settings → Environment variables:
//    SMTP_USER  = the dedicated Gmail address used for sending
//    SMTP_PASS  = 16-character Google App Password (no spaces)
//  Optional: SMTP_HOST, SMTP_PORT
//
//  Do NOT set MAIL_FROM_ADDRESS. The From address must always be
//  the same Gmail account that logs in, otherwise the message
//  fails DMARC and lands in spam.
//
//  After changing environment variables, trigger a new deploy.
// ============================================================

module.exports = {
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) === 465 : true, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER, // no placeholder fallback: fail loudly if missing
      pass: process.env.SMTP_PASS
    }
  },

  from: {
    name: 'Ghana Cash',
    address: process.env.SMTP_USER // always identical to the authenticated account
  },

  replyTo: process.env.SMTP_USER,

  // Plain subject: no emoji, no money words
  subject: 'Welcome to Ghana Cash',

  // Website base URL used in the email. Keep to one link.
  siteURL: 'https://ghanacashmine.netlify.app' // switch to your own domain when you get one
};
