const express = require('express'),
router = express.Router(),
BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
clientId: 'aya1mrqqiqq752enethy8pd738zp9d',
secret: 'f83a57799b6bb4a2e2532daf150ae04b90448ddb543d3d820661abd83f3876f1',
callback: 'https://7c1e8192.ngrok.io/auth',
responseType: 'json'
});

router.get('/', (req, res, next) => {
    console.log("auth hit>>>",req.query)
    //res.send("hello")
    //return "Hello"
bigCommerce.authorize(req.query)
.then(data => console.log(data))
.then(data => res.send("hello")/* res.render('auth', { title: 'Authorized!' }) */)
//.catch(err));
});
module.exports = router;