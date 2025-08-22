import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        }, 
        message: {
            type: String,
            required: [true, 'Message is required'],
        },
    },
    {
        timestamps: true, // Use default names: createdAt and updatedAt
    }
);

// Avoid model recompilation in development by checking if the model exists
// const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
// const Contact = mongoose.model("Contact", contactSchema)
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;