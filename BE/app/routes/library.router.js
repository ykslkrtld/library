"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

// Routes
const router = require('express').Router()

// Controller
const LIBRARY = require('../controllers/library.controller')

/* ------------------------------------------------------- *

// List LIBRARY
router.get('/', LIBRARY.list)

// create LIBRARY
router.post('/', LIBRARY.create )

// Read LIBRARY
router.get('/:id', LIBRARY.read)

// Update LIBRARY
router.put('/:id', LIBRARY.update)

// Delete LIBRARY
router.delete('/:id', LIBRARY.delete)

/* ------------------------------------------------------- */

router.route('/books')
    .get(LIBRARY.list)
    .post(LIBRARY.create)

router.route('/books/:id')
    .get(LIBRARY.read)
    .put(LIBRARY.update)
    .delete(LIBRARY.delete)


module.exports = router