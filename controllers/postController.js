const mongoose = require('mongoose');
const Post = require('../models/postModel');

exports.createPost = async function(req,res) {


    const newPost = await new Post({
        ...req.body
    })
    
    const savedPost = await newPost.save()
    return res.json(savedPost)

}

exports.getAllPosts = async function(req, res) {
const posts = await Post.find();
return res.json(posts);
}

exports.getPostById = async function(req, res) {
    const postId = req.params.postId
    const post = await Post.findById(postId);
    return res.json(post);
}

exports.updatePost = async function(req, res) { 

  const postId= req.params.postId;
  const updateData = req.body;
        const post = await Post.findByIdAndUpdate(
            postId,
            updateData,
            { new: true, useFindAndModify: false }
            
        );
  return res.json(post);

}

exports.deletePost = async function(req, res){

    const postId = req.params.postId;

            const post = await Post.findOneAndDelete({
            _id: new mongoose.Types.ObjectId(postId)
        });

        return res.json({ message: 'Post deleted successfully' });

}