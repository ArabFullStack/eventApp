const express = require('express');
const router = express.Router()
const eventCtrl = require('../controllers/eventControllers');


router.post('/events', eventCtrl.createNewEvent)
                
router.get('/events', eventCtrl.fetchEvents)
                
                
router.get('/books/:id', eventCtrl.fetchSingleEvent)
                
                
router.get('/books/:id', eventCtrl.fetchSingleEvent)
                
                
router.put('/books/:id', eventCtrl.updateSingleEvent)
            
                
router.delete('/books/:id', eventCtrl.deleteSingleEvent)

module.exports = router;