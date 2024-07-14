"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

const LIBRARY = require('../models/library.model')

module.exports = {

    list: async (req, res) => {

        const data = await LIBRARY.findAndCountAll()
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create: async(req, res) => {

        const data = await LIBRARY.create(req.body)
    
        res.status(201).send({
            error: false,
            result: data.dataValues
        })
    },

    read: async (req, res) => {

        const data = await LIBRARY.findByPk(req.params.id)
    
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

    const data = await LIBRARY.update(req.body, {where: { id: req.params.id }})

    if(data[0]) {
        res.status(202).send({
            error: false,
            result: data,
            message: 'Updated',
            new: await LIBRARY.findByPk(req.params.id)
        })
    } else {
        res.errorStatusCode = 404
        throw new Error('Can not updated. Maybe there is no book to update')
    }
    },

    delete: async (req, res) => {

        const data = await LIBRARY.destroy({ where: { id:req.params.id } })
    
        if(data >= 1) {
  
            res.sendStatus(204)
    
        } else {
    
            res.errorStatusCode = 404
            throw new Error('Can not deleted. Maybe already deleted')
            
        }
    
    }

}