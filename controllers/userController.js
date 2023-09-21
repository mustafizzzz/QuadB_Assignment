const userModal = require('../models/userModal');


const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;

    //validation
    if (!name) {
      return res.send({ message: 'Name is Required' })
    }
    if (!email) {
      return res.send({ message: 'email is Required' })
    }
    if (!password) {
      return res.send({ message: 'password is Required' })
    }
    if (!phone) {
      return res.send({ message: 'phone number is Required' })
    }
    if (!address) {
      return res.send({ message: 'address is Required' })
    }
    if (!answer) {
      return res.send({ message: 'answer is Required' })
    }

    //check user
    const existingUser = await userModal.findOne({ email })
    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already register Please Login"

      })
    }
    //save
    const user = await new userModal({ name, email, phone, address, password, answer }).save();

    res.status(200).send({
      success: true,
      message: "User Registered Sucessfully",
      user
    })
    console.log("Registered Successfully".bgCyan.white);

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration".bgRed.white,
      error
    })

  }

}


module.exports = { registerController }