const express = require('express');
const request = require('request');
const router = express.Router()
const eventCtrl = require('../controllers/eventControllers');
const {authenticateUser, checkIfAdmin} =  require('../middlewares/authentication.js')


router.post('/events',authenticateUser, checkIfAdmin, eventCtrl.createNewEvent)
                
router.get('/events', authenticateUser, checkIfAdmin, eventCtrl.fetchEvents)
                
                
router.get('/events/:id', authenticateUser, checkIfAdmin, eventCtrl.fetchSingleEvent)
                
                
router.get('/events/:id', authenticateUser, eventCtrl.fetchSingleEvent)
                
                
router.put('/events/:id', authenticateUser, checkIfAdmin, eventCtrl.updateSingleEvent)
            
                
router.delete('/events/:id', authenticateUser, checkIfAdmin, eventCtrl.deleteSingleEvent)

module.exports = router;