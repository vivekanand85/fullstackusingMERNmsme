import express from 'express';
import Employee from '../model/Employee.js';

const router = express.Router();

router.post('/create', async (req, res) => {
  const { name, designation, ctc, email } = req.body;
  try {
    const newEmployee = new Employee({
      name,
      designation,
      ctc,
      email
    });
    await newEmployee.save();
    res.status(201).send(newEmployee);
  } catch (error) {
    res.status(500).send({ message: 'Error creating employee', error });
  }
});
router.get("/getall",async(req,res)=>{
  try {
    const employees = await Employee.find();
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching employees', error });
  }
})
export default router;