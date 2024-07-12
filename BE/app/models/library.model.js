"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

// SEQUELIZE
// npm i sequelize sqlite3

const { Sequelize, DataTypes } = require("sequelize");

// Connection
const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  dialectModule: require('pg')
});

const LIBRARY = sequelize.define("books", {
 
  title: {
    type: DataTypes.STRING(256), 
    allowNull: false,
  },

  author: {
    type: DataTypes.STRING(256),
    allowNull: false,
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
    type: DataTypes.INTEGER, 
    allowNull: false,
  },

  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

});

// Syncronization
(async () => {
  await sequelize.sync({ alter: true }); // Tabloyu günceller, yoksa oluşturur
})();

// Connect to DB
sequelize.authenticate();

// Model Export
module.exports = LIBRARY;
