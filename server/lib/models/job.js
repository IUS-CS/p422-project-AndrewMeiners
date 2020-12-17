const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  dateEmployeed: String
});

JobSchema.query.byName = function(name) {
  return this.where({section: name});
}

const JobSchema = mongoose.model('Job', JobSchema);

module.exports = JobSchema;
