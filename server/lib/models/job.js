const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  dateEmployeed: String
});

JobSchema.query.bySection = function(name) {
  return this.where({section: name});
}

JobSchema.query.bySectionAndName = function(section, name) {
  return this.where({section: section, name: name});
}

const JobSchema = mongoose.model('Job', JobSchema);

module.exports = JobSchema;
