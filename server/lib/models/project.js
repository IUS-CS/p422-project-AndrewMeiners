const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  links: [String]
});

ProjectSchema.query.byName = function(name) {
  return this.where({name: name});
}

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
