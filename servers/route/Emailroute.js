import express from 'express';
import Vendor from '../model/Vendor.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  const { vendorEmails } = req.body;
  if (!vendorEmails || !Array.isArray(vendorEmails)) {
    return res.status(400).send({ msg: 'Invalid input, expected an array of email addresses' });
  }
  try {
    const vendors = await Vendor.find({ email: { $in: vendorEmails } });

    vendors.forEach(vendor => {
      console.log(`Sending payments to vendor ${vendor.name} at UPI ${vendor.upi}`);
    });

    res.status(200).send('Emails sent (mocked)');
  } catch (error) {
    res.status(500).send({ msg: 'Error sending emails', error });
  }
});

export default router;
