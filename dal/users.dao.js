const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const {users} = prisma;

module.exports = {
    addOne,
    findOne,
    findWhere,
    update,
    deleteOne
};

function findOne(paramsObject) {
    const options = paramsObject;
    return users.findFirst(options);
}

function addOne(user) {
    return users.create({
        data: {...user} 
    });
}


function findWhere(paramsObject) {
    const options = paramsObject;
    return users.findMany(options);
}


function update(data, options) {
    return users.update(data, options);
}

function deleteOne(id) {
    return users.delete({
        where: {
          id
        },
      })
}
