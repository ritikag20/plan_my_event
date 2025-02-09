const mongoose = require('mongoose');

const { Schema }  = mongoose;

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: [true],
            minLength: 6
        },
        description: {
            type: String,
            required: [true],
            minLength: 50
        },
        published: Boolean
    },
    { timestamps: true }
);

blogSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;