var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var questionSchema= new Schema({
  title:{
    type:String, required:true
  },
  answers:[
    {
      type:Schema.Type.ObjectId, ref:"Answer"
    }
  ],
  askedBy:{
    type:Schema.Type.ObjectId, ref:"User"
  },
  viewed:{
    type:Number, default:0
  },
  upVote:{
    type:Number, default:0
  },
  downLoad:{
    type:Number , default:0
  }
})

var Question=mongoose.model("Question", questionSchema);
module.exports= Question;