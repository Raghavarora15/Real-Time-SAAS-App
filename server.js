const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const initializeWebSocket = require('./src/utils/websocket');
const userRoutes = require('./src/routes/userRoutes');
const dataEntityRoutes = require('./src/routes/dataEntityRoutes');
const thirdPartyAPIRoutes = require('./src/routes/thirdPartyAPIRoutes');

const app = express();
const server = http.createServer(app);
const io = initializeWebSocket(server);

//DB Connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/data-entities', dataEntityRoutes);
app.use('/api/third-party', thirdPartyAPIRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
