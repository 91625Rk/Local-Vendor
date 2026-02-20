import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:['admin', 'vendor', 'user'],
        default: 'user'
    }
}, {timestamps: true}
);

//hash password before save

UserSchema.pre('save', async function(next){
    if(!this.isModified('password'))return next(); //agar pass change na hua to skip and next run hoga

    const salt = await bcrypt.genSalt(10);
    //salt generate hogya
     
    this.password = await bcrypt.hash(this.password, salt);
    //password hash hogya 

    next();

})

//password match krte hai aab jab user login krega tab

UserSchema.method.matchPassword = async function(enteredPassword){
    return bcrypt.compare(enteredPassword, this.password); //entered password ko db ke hash password se compare kr rhe hai
}

UserSchema.method.generateToken = function(){
    return jwt.sign(
        {
            id: this._id,
            role: this.role,

        },
        process.env.JWT_SECRET,
        {
            expiresIn:'1d'
        }
    );
};
export default mongoose.model('User',UserSchema);