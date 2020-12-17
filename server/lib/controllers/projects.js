const Project = require('../models/project');

module.exports = {
  root: (req, res) => {
    Project.find().exec((err, projects) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let project of projects) {
        ret.push(project.name);
      }
      res.json(ret);
    })
  },
  byName: (req, res) => {
    const name = req.params.name;

    Project.findOne().byName(name).exec((err, project) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!project) {
        res.status(404);
        res.json({'err': 'project not found'});
        return;
      }
      console.log('sending project: ' + project)
      res.json(project);
    })
  }
}
