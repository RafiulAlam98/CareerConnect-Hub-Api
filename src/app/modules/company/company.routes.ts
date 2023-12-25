import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'

import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { AllCompanyController } from './company.controller'
import { ComanyValidaion } from './company.validation'

const router = express.Router()

router.post(
  '/',
  RequestValidation.ValidateRequest(ComanyValidaion.companySchema),
  auth(ENUM_USER_ROLE.ADMIN),
  AllCompanyController.createCompany,
)
router.get('/', AllCompanyController.getAllCompanies)
router.get('/:id', AllCompanyController.getSingleCompany)

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllCompanyController.updateCompany,
)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AllCompanyController.deleteCompany,
)

export const CompanyRoutes = {
  router,
}
