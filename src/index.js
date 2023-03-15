import app from './app.js';
import sequelize from './database/database.js';
import './models/Projects.js';
import './models/Task.js';
async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log('Connection has been established successfully.');
    app.listen(3000);
    console.log('Server on port 3000');
  } catch (error) {
    console.log('unable to connect to database: ', error);
  }
}

main();
