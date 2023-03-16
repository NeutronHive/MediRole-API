const User = require('../model/User');


const updateStatus = async(req,res) => {
    const {username,status} = req.body;
    const user = await User.findOne({username});
    if(!user){
        const msg = {
            "msg": "failed"
        }
        res.status(404).json(msg);
    }
    user.isOnline  = status;
    await user.save()
    res.status(200).json({user});
}

const getRole = async(req,res) => {
    const user = await User.find({});
    let finalUser = "";
    let finalRole = "";
    user.map(singleUser => {
        if(singleUser.isOnline == 'true'){
            finalUser = singleUser.username;
            finalRole = singleUser.role
        }
    })
    res.status(200).json({finalUser,finalRole});
}
module.exports = {updateStatus,getRole};