import express from 'express'
export const top_routes = express.Router()

top_routes.get('/', function (req, res) {
  res.render('home')
})
