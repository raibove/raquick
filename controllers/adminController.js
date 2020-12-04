const bcrypt = require('bcryptjs');

const catchAsync = require('../utils/catchAsync');

exports.createAdmin = catchAsync(async (req, res) => {
  const { username, password } = req.body;

  const newAdmin = new Admin({ username, password });

  //Hash password before saving in database
  await bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, async (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      await newAdmin
        .save()
        .then((admin) => res.json(admin))
        .catch((err) => console.log(err));
    });
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError('Invalid Email Or Password', 400));
  }
  await Admin.findOne({ username }).then(async (admin) => {
    //check if admin exist
    if (!admin) {
      return res.status(404).json({ usernamenotfound: 'Username not found' });
    }

    // check password

    await bcrypt.compare(password, admin.password).then((isMatch) => {
      if (isMatch) {
        // admin matched create jwt payload
        const payload = {
          id: admin.id,
          username: admin.username,
        };

        // sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926,
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer' + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
});
