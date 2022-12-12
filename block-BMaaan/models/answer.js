var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var answerSchema= new Schema({
  conntent:{type:String, reuired:true},
  users:[{
    type:Schema.Type.ObjectId, ref:"User"
  }],
  question:{type:Schema.Type.ObjectId, ref:"Question"},
  upVote:{type:Number, default:0},
  downVote:{type:Number, default:0 }
});

var Answer=mongoose.model("Answer", answerSchema);