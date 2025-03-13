const shortid = require('shortid')
const Url = require('../models/url')

class urlController {
    async shortenUrl(req,res) {
        const { longUrl } = req.body;
        const baseUrl = process.env.BASE_URL
        const urlCode = shortid.generate();

        try {
            let url = await Url.findOne({ longUrl })

            if (url) {
                return res.json(url);
            }

            const shortUrl = `${baseUrl}/${urlCode}`;
            url = new Url({longUrl, shortUrl, urlCode });
            await url.save();
        } catch (err) {
            return res.status(500).json({error: 'Server Error'})
        }
    }

    async redirectUrl(req, res) {
        try {
          const url = await Url.findOne({ urlCode: req.params.code });
    
          if (url) {
            return res.redirect(url.longUrl);
          }
    
          return res.status(404).json({ error: 'URL not found' });
        } catch (err) {
          return res.status(500).json({ error: 'Server Error' });
        }
      }
}