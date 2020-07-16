const Cloudant = require('@cloudant/cloudant');
const userInfoManager = new Cloudant({
  account: "69682cc4-f499-414a-b477-feb09e02e752-bluemix",
  plugins: {
    iamauth: {
      iamApiKey: "HJOilliPRQlihU-PMeIrxpsxVc1_7W2ehzTMAaXrR_SX"
    }
  }
})
const userDB = userInfoManager.db.use("user");
const teacherDB = userInfoManager.db.use("teacher");


//initialize db index
function createIndex(db) {
  const email = { name: "email", type: "json", index: { fields: ['email'] } }
  db.index(email, (err, res) => {
    if (err) { throw err }
    console.log(res.result)
  })

}

async function searchUser(db, info) {
  return new Promise((resolve, reject) => {
    console.log(info.email)
    db.find({ selector: { email: info.email } }, (err, result) => {
      if (err) {
        reject(err)
      };
      if (!result | result.docs.length == 0) {
        console.log("not_found")
        const summary = { message: "USER_NOT_FOUND", password: false }
        resolve(summary);
      } else {
        console.log('there');
        console.log(result)
        resolve({ message: "FOUND", password: result.docs[0].password });
      }
    })
  })


}

async function registerTeacher(info) {
  return searchUser(teacherDB, info).then(ret => {
    if (ret.message == "USER_NOT_FOUND") {
      teacherDB.insert(info, (err, res) => {
        if (err) { throw (err) };
      })
    } else {
      throw ("ALREADY_EXIST")
    }
  });
}


async function registerStudent(info) {
  return searchUser(userDB, info).then((ret) => {
    if (ret.message == "USER_NOT_FOUND") {
      userDB.insert(info, (err, res) => {
        if (err) { throw (err) };
      })
    } else {
      throw ("ALREADY_EXIST")
    }
  })
}

async function loginTeacher(info) {
  return searchUser(teacherDB, info).then((ret) => {
    if (ret.message == "NOT_FOUND") {
      throw ("NOT_REGISTERED")
    }
    return ret.password;
  })
}

async function loginStudent(info) {
  return searchUser(userDB, info).then((ret) => {
    if (ret.message == "NOT_FOUND") {
      throw ("NOT_REGISTERED")
    }
    return ret.password;
  })
}
// const teacher1 = {
//   "email": "yiyiiiiii@126.com",
//   "phone": "13606700237",
//   "name": "Yiyi",
//   "password": "1234"
// }
// registerTeacher(teacher1);
// searchUser(teacherDB, teacher1)
// const user1 = { parent_name: 'yiyi', email: "today@gmail.com", child_name: 'yy', password: '1234' };



module.exports = {
  searchUser, registerTeacher, registerStudent, loginTeacher, loginStudent
}
