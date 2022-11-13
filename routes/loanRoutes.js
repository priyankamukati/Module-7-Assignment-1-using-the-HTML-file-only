const express = require('express');
const loanController = require('../controllers/loanController');

const router = express.Router();

router.get('/loan', loanController.getLandingPage);
router.get('/loans', loanController.getLoan);
router.get('/login', loanController.getLoginForm);
router.get('/signIn', loanController.getSignInForm);


module.exports = router;
