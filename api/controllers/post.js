import { db } from '../connect.js'

export const getPosts = (req, res) => {
  const query = `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`

  db.query(query, (err, data) => {
    if (err)
      return res
        .status(500)
        .json({ error: 'Internal Server Error', message: error.message })
    return res.status(200).json(data)
  })
}
