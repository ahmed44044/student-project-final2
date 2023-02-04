import { Schema , model,Types } from "mongoose";


const ScientificSchema=  new  Schema({

    LinkReference:{
        type:String,
        required:true,
     
    },
    courseName:{
        type:String,
        required:true,
      
    }

},
{
    timestamps:true
})

const ScientificModel= model('Scientific',ScientificSchema)
export default  ScientificModel  