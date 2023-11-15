import express from 'express'
import { requestLoan, returnLoan } from '../controllers/loan.controller.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = express.Router()

//Route to request a book
router.post('/:userId/request/:bookId', authRequired, requestLoan)

//Route to return a book
router.put('/:loanId/return', authRequired, returnLoan)

export default router