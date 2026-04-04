import app from './app.js';
const PORT = process.env.PORT || 5173;
console.log("ENV:", process.env.MONGO_URI);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);

});
