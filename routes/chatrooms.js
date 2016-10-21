const express = require('express'),
      router = express.Router(),
      Chatroom = require('../models/Chatroom')

router.route('/')
  .get((req, res) => {
    Chatroom.find({})
      .then(chatrooms => {
        res.send(chatrooms)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  .post((req, res) => {
    Chatroom.create(req.body)
      .then(chatroom => {
        res.send(chatroom)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })

router.route('/:id')
  .get((req, res) => {
    Chatroom.findById(req.params.id)
      .then(room => {
        res.send(room)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  .put((req, res) => {
    Chatroom.findById(req.params.id)
      .then(chatroom => {
        console.log('chatroom: ', chatroom)
        console.log('chatroom.messages: ', chatroom.messages)
        chatroom.messages.unshift(req.body)
        console.log(chatroom.messages)
        return chatroom.save()
      })
      .then(savedChatroom => {
        res.send(savedChatroom)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  })
  // .put((req, res) => {
  //   Chatroom.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
  //     .then(updatedChatroom => {
  //       res.send(updatedChatroom)
  //     })
  //     .catch(err => {
  //       res.status(400).send(err)
  //     })
  //     // .then(Chatroom.findById(req.params.id))
  //     // .then(chatroom => {
  //     //   return chatroom.save()
  //     // })
  // })



// router.route('/')
//   .get((req, res) => {
//     Client.findAll()
//       .then(clients => {
//         res.send(clients)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })
//   })
//   .post((req, res) => {
//     Client.create(req.body)
//     .then(Client.findAll)
//     .then(clients => {
//       res.send(clients)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })


// router.route('/client')
//  .get((req, res) => {
//     Client.findSingleClient(req.query.email)
//       .then(clients => {
//         res.send(clients)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })
//   })
//  .put((req, res) => {
//     Client.editClient(req.body)
//       .then(Client.findAll)
//       .then(clients => {
//         res.send(clients)
//       })
//       .catch(err => {
//         res.status(400).send(err)
//       })
//  })

//  router.route('/:id')
//   .get((req, res) => {
//     let id = req.params.id
//     Client.getClientById(id)
//     .then(client => {
//       res.send(client)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })
//   .delete((req, res) => {
//     let id = req.params.id
//     Client.deleteClient(id)
//     .then(Client.findAll)
//     .then(clients => {
//       res.send(clients)
//     })
//     .catch(err => {
//       res.status(400).send(err)
//     })
//   })

module.exports = router