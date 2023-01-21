const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;




const movieSchema = new mongoose.Schema({
    user_Id: ObjectId,
    title: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    IMDB_Id:  String,
    Adult:{
      type:  Boolean,
      default: false,

    },
    video:{
       type: Boolean,
        default: false,

      },
    date: {
      type: Date,
      default: Date.now
    },
    tagline: String,
    runtime: Number,
    budget: Number,
    revenue: Number,
    webpage: String,
    rate: {
      type: Number,
      default: 0
    },
    views: {
      type: Number,
      default: 0
    }
}, {timestamps: true});



export default mongoose.model("movie", movieSchema);

