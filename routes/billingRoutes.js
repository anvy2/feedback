const keys = require('../config/keys');
const express = require('express');
const stripe = require('stripe')(keys.stripeSecretKey);
const router = new express.Router();
const logincheck = require('../middleware/requireLogin');

router.post('/api/stripe', logincheck, async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: 'inr',
    description: 'Emaily credits',
    source: req.body.id,
  });

  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});

module.exports = router;
