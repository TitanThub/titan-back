import { Router } from "express";

import {
  allUsers,
  editUser,
  editAdminBtc,
  deleteUser,
  withdrawals,
  approveWithdrawal,
  declineWithdrawal,
  withdraw,
  deposits,
  deposit,
  approveDeposit,
  declineDeposit,
} from "../controllers/adminController.js";
const router = Router();

// const { requireA } = require('../middleware/AdminMiddleware');
// import requireAuth from '../middleware/authMiddleware.js';

// router.use(requireAuth);

router.get("/users", allUsers);

router.get("/withdrawals", withdrawals);
router.post("/withdraw", withdraw);
router.post("/withdraw/approve", approveWithdrawal);
router.post("/withdraw/decline", declineWithdrawal);

router.get("/deposits", deposits);
router.post("/deposit", deposit);
router.post("/deposit/approve", approveDeposit);
router.post("/deposit/decline", declineDeposit);

router.put("/users/:id", editUser);
router.put("/btc", editAdminBtc);

// router.delete('/users/:id', del);

router.post("/deleteuser", deleteUser);

export default router;
