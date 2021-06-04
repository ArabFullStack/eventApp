const  {decodedToken, decodeToken} = require('../services/jwtServices')

exports.authenticateUser = (req,res,next) => {
    if(!req.headers.authorization) {                                   
        return res.status(401).json({message: "authorization header reaquired"})
    }
    let splittedHeader = req.headers.authorization.split(' ');
    console.log(splittedHeader)
    if (splittedHeader[0] !== "Bearer") {
        return res.status(401).json({message: "authorization format is Bearer <token>"})
    } 
    let token = splittedHeader[1];
    let decodedToken = decodeToken(token); 

        if (!decodedToken) {                                            
            return res.status(401).json({message: "user not found"})
        }else {
            req.user = decodedToken;
            next()
        }    
}

exports.checkIfAdmin = (req, res, next) => {
    if(req.user.role !== "admin") {
        return res.status(401).json({message: "This route is restricted to admin users"})
    }
    return next()

}