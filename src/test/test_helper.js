const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'Prueba-1',
    author: 'Prueba-1',
    url: '/Prueba/1',
    likes: 1
  },
  {
    title: 'Prueba-2',
    author: 'Prueba-2',
    url: '/Prueba/2',
    likes: 2
  }
]

const noExistingId = async () => {
  const blog = new Blog({ content: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return notEqual._id.toString()
}

const blogsInDb = async () => {
  const blog = await Blog.find({})
  return blog.map(blog => blog.toJSON())
}

module.exports = {
  initialBlogs,
  noExistingId,
  blogsInDb
}
