const Cloudant = require('@cloudant/cloudant');
const userInfoManager = new Cloudant({
  account:"69682cc4-f499-414a-b477-feb09e02e752-bluemix",
  plugins:{
    iamauth:{
      iamApiKey:"HJOilliPRQlihU-PMeIrxpsxVc1_7W2ehzTMAaXrR_SX"
    }
  }
})

const userInfoDB = userInfoManager.db.use("user-info");
