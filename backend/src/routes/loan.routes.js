import express from 'express'
import { getLoans, getUserLoans, requestLoan, returnLoan } from '../controllers/loan.controller.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = express.Router()

//Route to get all loans
router.get("/", getLoans);

// Route to get all loans for a specific user
router.get('/:userId/loans', getUserLoans);

//Route to request a book
router.post('/:userId/request/:bookId', requestLoan)

//Route to return a book
router.put('/:loanId/return', returnLoan)


export default router