const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const listSchema = new mongoose.Schema({
    user_Id: ObjectId,
    name: String,
    description: SVGStringList,
    public: {
      type: Boolean,
      default: true
    },
    sortBy: {
      type: String,
      enum: ["ASCENDING", "DESCENDING", "RATING_ASCENDING", "RATING_DESCENDING", "RELEASE_DATE_ASCENDING", "RELEASE_DATE_DESCENDING", "TITLE_A_Z", "TITLE_Z_A"]
    },
    movies: [
        {
          _id: ObjectId,
          type: ["MOVIE", "TVSHOW"]
        }
    ],
    image: String,
    avaliable: {
      type: Boolean,
      default: true
    }
}, {timestamps: true});




export default mongoose.model("list", listSchema);

