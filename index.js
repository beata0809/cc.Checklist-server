const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const exampleRoutes = require('./routes/example');
const listRoutes = require('./routes/list')
const projectRoutes = require('./routes/project');
const taskRoutes = require('./routes/task');
const userRoutes = require('./routes/user');
const auth = require('./routes/auth');

app.use(express.json());
app.use(helmet());
app.use(cors());

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.info('Morgan enabled');
}


app.use('/api/example', exampleRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', auth);

const main = async () => {
    try{
        await mongoose.connect(config.get('MONGO_URI'), { useNewUrlParser: true })
        console.info('Connected to database...');

        const port = process.env.PORT || 5000;
        app.listen(port, () => console.info(`Listening on port ${port}`));
    } catch (ex) {
        console.error(ex);
    }
};

main();