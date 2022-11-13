

exports.getLandingPage = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};


exports.getLoan = async (req, res) => {
  res.status(200).render('Loans', {
    title: `Get Loans`
  });
};
exports.createNewLoan = async (req, res) => {
  res.status(200).render('newLoan', {
    title: `Create New Loan`
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('signIn', {
    title: 'Sign in New Customer'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

