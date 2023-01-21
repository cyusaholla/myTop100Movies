const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const tvShowSchema = new mongoose.Schema({
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
    season:[
      {
        name: {
          type: String,
          required: true
        },
        number: {
          type: Number,
          required: true
        },
        episode:[
          {
            name: {
              type: String,
              required: true
            },
            overview: {
              type: String,
              required: true
            },
            date: {
              type: Date,
              required: true
            },
            number: {
              type: Number,
              required: true
            }
          }
        ]
      }
    ],
    rate: {
      type: Number,
      default: 0
    },
    views: {
      type: Number,
      default: 0
    }
}, {timestamps: true});



export default mongoose.model("tvShow", tvShowSchema);

