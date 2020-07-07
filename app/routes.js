const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/DP222JP', function(req, res){
  const file = `${__dirname}/assets/document-templates/DP222JP-0520-V5.pdf`;
  res.download(file); // Set disposition and send it.
});

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  req.folder = req.originalUrl.split('/')[1];
  req.subfolder = req.originalUrl.split('/')[2];
  res.locals.currentURL = req.originalUrl;
  res.locals.prevURL = req.get('Referrer');
  res.locals.folder = req.folder;
  res.locals.subfolder = req.subfolder;


  console.log(req.session.data);


/*   console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
  console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL ); */
  next();
});



module.exports = router
