const blogsRouter = require('express').Router()
const Blog = require('../model/blog')

blogsRouter.get('/', (request, response) => {
  Blog.find({}).then(blogs => {
    response.json(blogs)
  })
})

blogsRouter.post('/', (request, response, next) => {
  const body = request.body
  const blog = new Blog({
    title: body.title,
    autor: body.autor,
    url: body.url,
    likes: body.likes
  })
  blog
    .save()
    .then(saveBlog => {
      response.json(saveBlog)
    })
    .catch(error => next(error))
})

module.exports = blogsRouter
