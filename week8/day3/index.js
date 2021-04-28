const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:Americ@@localhost:5432/nailasgarden"
);

// creates table within database listed above

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

// creates user in database and prints to the console the information added

(async () => {
  await sequelize.sync();
  const joey = await User.create({
    username: "joey",
    birthday: new Date(1996, 9, 2),
  });
  console.log(joey.toJSON());
})();

// month is counded like indexes. January is month 0. So the code above has a birthday month of October
