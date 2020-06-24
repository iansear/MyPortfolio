const express = require('express')
const router = express.Router()
const PortfolioController = require('../controllers/portfolioController')

const portfolioController = new PortfolioController()

router.get('/', portfolioController.aboutme)
router.get('/myprojects', portfolioController.myprojects)
router.get('/contactme', portfolioController.contactme)

module.exports = router