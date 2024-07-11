"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

// SEQUELIZE
// npm i sequelize sqlite3

const { Sequelize, DataTypes } = require("sequelize");

// Connection
const sequelize = new Sequelize(
  "sqlite:" + process.env.SQLITE || "./db.sqlite3"
); 

const LIBRARY = sequelize.define("books", {
 
  title: {
    type: DataTypes.STRING(256), 
    allowNull: false,
  },

  author: {
    type: DataTypes.STRING(256), 
  },

  ISBN: {
    type: DataTypes.STRING(256), 
    allowNull: false,
  },

  genre: {
    type: DataTypes.STRING(256), 
    allowNull: false,
  },

  publicationYear: {
    type: DataTypes.DATE, 
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

// Syncronization
// sequelize.sync();
// sequelize.sync({alter: true})

// Connect to DB
sequelize.authenticate();

// Model Export
module.exports = LIBRARY;
