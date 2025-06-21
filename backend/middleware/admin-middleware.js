const adminMiddleware = async ( req,res,next ) =>{
    try{
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res
            .status(403)
            .json({message : "Access Denied . User is not an Admin"});
        }
        next();  //if isAdmin is true than move to all whole data show if false then access denied.
    }catch(error){
        next(error);
    }
}

module.exports = adminMiddleware;