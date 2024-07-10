import express from 'express';
import Vendor from '../model/Vendor.js';
const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, email, upi } = req.body;
  if (!email) {
    return res.status(400).send({ msg: 'Email is required' });
  }
  try {
    const newVendor = new Vendor({
      name,
      email,
      upi
    });
    await newVendor.save();
    res.status(200).send('Emails sent (mocked)');
  } catch (error) {
    res.status(500).send({ msg: 'Error creating vendor', error });
  }
});
router.get("/getvendor",async(req,res)=>{
    try {
const vendor=await Vendor.find();
res.status(200).send(vendor);
} catch (error) {
    res.status(500).send({ message: 'Error fetching employees', error });
  }
})
export default router;
