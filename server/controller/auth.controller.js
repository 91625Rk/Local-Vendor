import User from '../models/User'
//login process
export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findone({email});

        //agar user nhi mila db me ya password galat hua tab ye show hoga
        if(!user || !(await user.matchPassword(password))){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = user.generateToken(); //model method use

        res.json({
            message:"Login Succesful",
            token,
            user:{
                id: user._id,
                name: user._name,
                role: user._role
            }
        });
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
};