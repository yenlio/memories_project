const express = require('express')
const routes = express.Router()

const Task = require('../controller/index')
routes.route('/item')
    .get(Task.getPosts)
    .post(Task.createPost)

routes.route('/item/:id')
   .patch(Task.updatePost)
   .delete(Task.deletePost)


module.exports = routes

