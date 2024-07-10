import express from 'express';
import Employee from '../model/Employee';

const router=express.Router();

export const create=async (req, res) => {
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
  };
  
//   export default router;