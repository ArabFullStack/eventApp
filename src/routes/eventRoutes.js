const express = require('express');
const router = express.Router()
const eventCtrl = require('../controllers/eventControllers');


router.post('/events', eventCtrl.createNewEvent)
                
router.get('/events', eventCtrl.fetchEvents)
                
                
router.get('/events/:id', eventCtrl.fetchSingleEvent)
                
                
router.get('/events/:id', eventCtrl.fetchSingleEvent)
                
                
router.put('/events/:id', eventCtrl.updateSingleEvent)
            
                
router.delete('/events/:id', eventCtrl.deleteSingleEvent)

module.exports = router;