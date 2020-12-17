const mongoose = require('mongoose');
const Interest = require('./lib/models/interest');
const Job = require('./lib/models/job');
const Project = require('./lib/models/project');

// Interests
const unity = new Interest({
    name: 'Unity Game Development',
    description: 'Creating games in C# on the Unity platform',
    links: ['https://unity.com/']
});

const blender = new Interest({
    name: '3D Animation',
    description: 'Creating 3D assets and artwork using the Blender software',
    links: ['https://www.blender.org/']
});


// Jobs
const eagle6 = new Job({
    name: 'Eagle6',
    description: 'Software Engineer - Backend',
    dateEmployeed: 'May 2019 - September 2020'
});

const humana = new Job({
    name: 'Humana',
    description: 'NOC Analyst Intern II',
    dateEmployeed: 'December 2017 - May 2019'
});

// Projects
const knightsTour = new Project({
    name: 'Knights Tour',
    description: 'An implementation of the knights tour problem in Java',
    links: ['https://github.com/AndrewMeiners/KnightsTour']
});

mongoose.connect('mongodb://localhost:27017/resumeproject', {useNewUrlParser: true, useUnifiedTopology: true});

async function save() {
  await Interest.deleteMany();
  await Job.deleteMany();
  await Project.deleteMany();

  await unity.save();
  await blender.save();
  
  await eagle6.save();
  await humana.save();

  await knightsTour.save();
}

save().then(() => console.log('done'));
