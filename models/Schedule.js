const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Semester = require('./Semester');
const Room = require('./Room');
const Lecturer = require('./Lecturer');
const ClassType = require('./ClassType');
const StudyProgram = require('./StudyProgram');

const Schedule = sequelize.define('Schedule', {
  eventTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isHoliday: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Schedule.belongsTo(Lecturer, {
  foreignKey: 'LecturerId',
});
Schedule.belongsTo(Semester, {
  foreignKey: 'SemesterId',
});
Schedule.belongsTo(ClassType, {
  foreignKey: 'ClassTypeId',
});
Schedule.belongsTo(Room, {
  foreignKey: 'RoomId',
});
Schedule.belongsTo(StudyProgram, {
  foreignKey: 'StudyProgramId',
});

sequelize.sync();

module.exports = Schedule;
