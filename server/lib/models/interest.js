const mongoose = require('mongoose');

const InterestSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  links: [String]
});

InterestSchema.query.byName = function(name) {
  return this.where({name: name});
}

const Interest = mongoose.model('Interest', InterestSchema);

module.exports = Interest;
