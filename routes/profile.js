// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // get a list of users from the database
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find()
//         res.send(user)
//     } catch (err) {
//         res.send(err.message)
//     }

// })

// // get a single user from the database
// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id)
//         if (!user) {
//             return res.status(400)
//                 .send({ msg: 'User not found' })
//         }
//         res.send(user)
//     } catch (err) {
//         res.send(err.message)
//     }
// })

// //update a user in the database
// router.patch('/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true
//         })
//         if (!user) {
//             return res.status(404)
//                 .send({ msg: 'User Not found' })
//         }
//         res.send(user)
//     } catch (err) {
//         res.send(err.message)
//     }
// })

// //delete a user from the db
// router.delete('/:id', async (req, res) => {
//     console.log('hello');
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)
//         if (!user) {
//             return res.status(404)
//                 .send('User not found.')
//         }
//         res.send({ msg: 'User deleted.' })
//     } catch (err) {
//         console.log('hello');
//         res.status(500)
//             .send(err.message)
//     }
// })

// module.exports = router;