const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController')

router.post('/newPost' , postController.createPost)
router.get('/allPosts', postController.getAllPosts)
router.get('/:postId', postController.getPostById)
router.put('/update/:postId', postController.updatePost)
router.delete('/delete/:postId', postController.deletePost)


module.exports = router;