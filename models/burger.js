module.exports = function (sequelize, DataTypes) {
  let Burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    sessionid: {
      type: DataTypes.UUID,
      allowNull: false,
        }

  });

  return Burger;
};

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", [
//       "burger_name", "devoured"
//     ], [
//       name, false
//     ], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// module.exports = burger;

// *******

// module.exports = function (sequelize, DataTypes) {
//     let Users = sequelize.define("users", {
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             len: [1], 
//             unique: true
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             len: [1], 
//             unique: true
//         },
//         password: {
//             type: DataTypes.STRING.BINARY, 
//             allowNull:false,
//             len:[1]
//         },
//         sessionid: {
//             type: DataTypes.UUID
//         }
//     });
//     return Users;
// };