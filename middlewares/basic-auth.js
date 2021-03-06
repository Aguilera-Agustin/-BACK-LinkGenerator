const auth = require('basic-auth')

const basicAuth = async (req, res, next) =>{

    const user = await auth(req)
    const username = process.env.APIUSER
    const password = process.env.APIPASSWORD
    if(!user){
        return res.status(403).json({
            msg: 'Access Denied'
        })
    }
    if(user.name.toLowerCase() === username.toLowerCase() && user.pass===password){
        next()
    }
    else{
        return res.status(403).json({
            msg: 'Access Denied'
        })
    }

}

module.exports={
    basicAuth
}