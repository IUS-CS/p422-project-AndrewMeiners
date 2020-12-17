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

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
