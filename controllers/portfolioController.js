const content = require('../content/content')

class PortfolioController {
    
    aboutme(req, res) {
        const context = {
            aboutmeactive: true,
            aboutme: content.aboutme
        }
        res.render('aboutme', context)
    }

    myprojects(req, res) {
        const context = {
            myprojectsactive: true,
            myprojects: content.myprojects,
            myportfolio: content.myportfolio,
            familyhealth: content.familyhealth,
            trivia: content.trivia
        }
        res.render('myprojects', context)
    }

    contactme(req, res) {
        const context = {
            contactmeactive: true,
            contactme: content.contactme
        }
        res.render('contactme', context)
    }
}

module.exports = PortfolioController