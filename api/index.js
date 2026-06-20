export default function handler(req, res) {
    const destination = process.env.REDIRECT_URL || 'https://sadowskimichal.com';
    res.writeHead(307, { Location: destination });
    res.end();
  }