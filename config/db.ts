const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const {MONGO_URI} = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.warn('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);

        process.exit(1);
    }
};

export default connectDB;
