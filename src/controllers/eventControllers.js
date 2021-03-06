const Event = require('../models/event')
const request = require('request');

exports.createNewEvent = function(req,res) {
    console.log(req.query)
    Event.create({
        ...req.body      
        }, (err, events) => {
            if (err) {
                return res.status(500).json({message: err});
            }else {
                request(`https://imagegen.herokuapp.com/?category=${events.category}`, {json:true}, (err,response,body) => {
                    if (err) {
                        return res.status(500).json({message: err});
                    } 
                    events.image = body.image;
                    events.save((err, savedEvent) => {
                        if (err) {
                            return res.status(500).json({message: err});
                        }
                        return res.status(200).json({message: "Event successfully created", savedEvent})

                    })              
            })            
        }

        })                                                                        
}

exports.fetchEvents = (req,res) => {  
    let conditions = {};
    if (req.query.category) {
        conditions.category = req.query.category
    }
    if (req.query.cost) {
        conditions.cost = req.query.cost
    }
        console.log(conditions)
        console.log(req.query)
       
    Event.find(conditions, (err, events) => {
        if (err) {
            return res.status(500).json({message: err});
        } else {
            return res.status(200).json({message: events });
        }
    })

}

exports.fetchSingleEvent = (req, res) => {
    Event.findOne({_id: req.params.id}, (err, event) => {
        if (err) {
            return res.status(500).json({message: err})
        }else if (!event) {
            return res.status(404).json({message: 'event not found'})
                            
        }
        else {
            return res.status(200).json({event})
        }
    })
}

exports.updateSingleEvent = (req,res)=> {                                      
    Event.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        category:req.body.category
        }, (err, event) => {
        if (err) {
            return res.status(500).json({message: err})       
        }else if (!event) {
            return res.status(404).json({message: "event not found"})
        }else {
            event.save((err, savedEvent) => {
            if (err) {
                return res.status(400).json({message: err})
            }else {
                return res.status(200).json({message: "event updated successfully"})
            }
        })
           }
       })
}

exports.deleteSingleEvent = (req,res) => {                       
    Event.findByIdAndDelete(req.params.id, (err,event) => {
        if (err) {
            return res.status(500).json({message: err})
        }
        else if (!book) {
            return res.status(404).json({message: "event was not found"})
        }
        else {
            return res.status(200).json({message: "event was deleted successfully"})
        }
     })    
                
}


