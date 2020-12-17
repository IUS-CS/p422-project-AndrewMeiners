const Interest = require('../models/interest');

module.exports = {
  root: (req, res) => {
    Interest.find().exec((err, interests) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      let ret = [];
      for (let interest of interests) {
        ret.push(interest.name);
      }
      res.json(ret);
    })
  },
  byName: (req, res) => {
    const name = req.params.name;

    Interest.findOne().byName(name).exec((err, interest) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      if (!interest) {
        res.status(404);
        res.json({'err': 'interest not found'});
        return;
      }
      console.log('sending interest: ' + interest)
      res.json(interest);
    })
  }
}
