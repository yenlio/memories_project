const PostMessModel = require('../model/postMessage')
exports.getPosts = async (req, res) => {

    try {
        const postMessage = await PostMessModel.find();
        console.log(postMessage);
        res.json(postMessage)


    } catch (error) {
        res.send({ message: error.message })

    }
}

exports.createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessModel(post);


    try {
        await newPost.save();
        res.json(newPost);


    } catch (error) {
        res.send({ message: error.message })

    }
}

exports.updatePost = async (req, res) => {
    try {
        const { id: _id } = req.params
        console.log(_id,"id");
        const post= req.body
        const updatePost= await PostMessModel.findByIdAndUpdate(_id,post,{new:true})
        res.json(updatePost)




    } catch (error) {
        res.send({ message: error.message })

    }
}

exports.deletePost = async (req, res) => {
    try {
        const id = req.params._id
       
        const deletePost= await PostMessModel.findByIdAndDelete(id)
        res.json({ message:"thanh cong"})

    } catch (error) {
        res.send({ message: error.message })

    }
}