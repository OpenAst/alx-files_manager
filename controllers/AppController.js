const { checkRedis, checkDB } = require('../utils');

const AppController = {
    getStatus: (req, res) => {
        const redisStatus = checkRedis();
        const dbStatus = checkDB();
        if (redisStatus && dbStatus) {
            res.status(200).json({ redis: true, db: true });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    },

    getStats: async (req, res) => {
        try {
            const User = require('../models/User');
            const File = require('../models/File');

            const usersCount = await User.countDocuments();
            const filesCount = await File.countDocuments();

            res.status(200).json({ users: usersCount, files: filesCount });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    },
};

module.exports = AppController;