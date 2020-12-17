const Job = require('../models/job');

module.exports = {
  root: (req, res) => {
    Job.find().exec((err, jobs) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let job of jobs) {
        ret.push(job.section);
      }
      res.json(ret);
    })
  },
  byName: (req, res) => {
    const name = req.params.name;

    Job.findOne().byName(name).exec((err, job) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!job) {
        res.status(404);
        res.json({'err': 'job not found'});
        return;
      }
      console.log('sending job: ' + job)
      res.json(job);
    })
  }
}
