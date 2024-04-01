var Assn9 = require('../models/assn9')
var bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
module.exports = function (app) {
    //server routes 

    //get all users
    app.get('/user/getAll', function (req, res) {
        Assn9.find(function (err, samples) {
            if (err)
                res.send(err);
            console.log('samples', samples);
            res.json(samples);
        });
    });

    //login route
    app.post('/user/login', function (req, res) {
        res.set('Access-Control-Allow-Origin', '*');
        console.log(req.body);
        var regexEmail = /[a-z0-9]+@northeastern.edu/;
        var regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
        var em = req.body.email;
        var pass = req.body.password;
        if (!em.match(regexEmail)) {
            res.json( {status: "Email is in invalid format, use northeastern.edu format"} );
        }
        else if (!pass.match(regexPwd)) {
            res.json( {status: "Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters"} );
        }
        else {
            var query = { email: req.body.email };
            Assn9.findOne(query, function (err, user) {
                if (err) {
                    res.json( {status: err} );
                }
                else {
                    console.log("User: " + user);
                    if (user != null) {
                        bcrypt.compare(req.body.password, user.password, function (err, result) {
                            console.log("Result: " + result);
                            if (result) {
                                token = jwt.sign(
                                    { email: em, password: pass, type: "user" },
                                    "assignment9",//secret key
                                    { expiresIn: "90d" }
                                  );
                                  let options = {
                                    maxAge: 1000 * 60 * 60 * 24 * 90, // would expire after 90 days
                                    httpOnly: false, // The cookie only accessible by the web server
                                    //signed: true // Indicates if the cookie should be signed
                                  };

                                  //res.cookie("token", token, options); //
                                  res.json( {status: "ok", data: token, email:em});                               
                            }
                            else {
                                res.json( {status: "Incorrect Password, try again!"} );
                            }
                        });
                    }
                    else {
                        res.json( {status: "User does not exists!"} );
                    }
                }
            });
        }
    });

    //insert route
    app.post('/user/insert', function (req, res) {
        console.log(req.body);
        var regexEmail = /[a-z0-9]+@northeastern.edu/;
        var regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
        var regExName = /^[a-zA-Z\s]+$/;
        var em = req.body.email;
        var pass = req.body.password;
        var fname = req.body.full_name;
        var query = { email: req.body.email };
        if (!fname.match(regExName)) {
            res.send("Name is in invalid format");
        }
        else if (!em.match(regexEmail)) {
            res.send("Email is in invalid format, use northeastern.edu format");
        }
        else if (!pass.match(regexPwd)) {
            res.send("Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters");
        }
        else {
            Assn9.count(query, function (err, count) {

                if (err) {
                    res.send(err);
                }
                if (count == 1) {

                    res.send("Email Id Exists!");
                }
                else {
                    bcrypt.genSalt(saltRounds, function (err, salt) {
                        bcrypt.hash(req.body.password, salt, function (err, hash) {
                            var record = new Assn9({
                                full_name: req.body.full_name,
                                email: req.body.email,
                                password: hash
                            });
                            record.save(function (err, rec) {
                                if (err)
                                    res.send(err);
                                console.log('Saved ' + rec);
                                res.send("Created User successfully");
                            });
                        });
                    });
                }
            });
        }
    });

    //update route
    app.put('/user/edit', function (req, res) {
        console.log(req.body);
        var query = { email: req.body.email };
        var regexEmail = /[a-z0-9]+@northeastern.edu/;
        var regexPwd = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&*]).{8,}$/;
        var regExName = /^[a-zA-Z\s]+$/;
        var em = req.body.email;
        var pass = req.body.password;
        var fname = req.body.full_name;

        if (!fname.match(regExName)) {
            res.send("Name is in invalid format");
        }
        else if (!em.match(regexEmail)) {
            res.send("Email is in invalid format, use northeastern.edu format");
        }
        else if (!pass.match(regexPwd)) {
            res.send("Password is in invalid format, follow password rules : 1 Uppercase Character, 1 lower character, 1 special character, 1 digit and minimum 8 characters");
        }
        else {
            Assn9.count(query, function (err, count) {
                if (err) {
                    res.send(err);
                }
                if (count == 0) {
                    res.send("User does not exists!");
                }
                else {
                    bcrypt.genSalt(saltRounds, function (err, salt) {
                        bcrypt.hash(req.body.password, salt, function (err, hash) {
                            var upd = { $set: { full_name: req.body.full_name, password: hash } };
                            Assn9.updateOne(query, upd, function (err, dc) {
                                if (err)
                                    res.send(err);
                                else
                                    res.send("Updated user");
                            });
                        });
                    });

                }
            });

        }
    });

    //delete route
    app.delete('/user/delete', function (req, res) {
        console.log(req.body);
        var query = { email: req.body.email };
        var regexEmail = /[a-z0-9]+@northeastern.edu/;
        var em = req.body.email;

        if (!em.match(regexEmail)) {
            res.send("Email is in invalid format, use northeastern.edu format");
        }
        else {
            Assn9.count(query, function (err, count) {
                if (err) {
                    res.send(err);
                }
                if (count == 0) {
                    res.send("User does not exists!");
                }
                else {
                    Assn9.deleteOne(query, function (err, dc) {
                        if (err)
                            res.send(err);
                        else
                            res.send("Deleted User Successfully");
                    });
                }
            });

        }
    });
// Define storage for the uploaded images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/backendImages');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Check file type
function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only! (JPEG, PNG, GIF)');
    }
}

// Initialize upload
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('file'); 

// Upload image endpoint
app.post('/user/uploadImage', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            res.send(err);
        } else {
            if (req.file == undefined) {
                res.send('Error: No File Selected!');
            } else {
                // Here we would save the path to the database
                const imagePath = req.file.path;
                
                var record = new Assn9({ imagePath: imagePath });
                record.save(function (err, rec) {
                    if (err)
                        res.send(err);
                    console.log('Saved ' + rec);
                    res.send("File Uploaded! Path: " + imagePath);
                });
            }
        }
    });
});

// Fetch company images endpoint
app.get('/company/images', function (req, res) {
    // Fetch company images from the database, selecting only the imagePath field
    Assn9.find({ imagePath: { $ne: null } }, 'imagePath', function (err, images) {
        if (err) {
            res.status(500).json({ error: 'Internal server error' });
        } else {
            // Extract image paths from the database response
            const imagePaths = images.map(image => image.imagePath);
            console.log("TWEST", imagePaths)
            res.status(200).json(imagePaths);
        }
    });
});

// Example route to handle logout
app.post('/user/logout', (req, res) => {
    // Clear the token cookie
    res.clearCookie('token'); 
    res.status(200).send('Logout successful');
});


}
//session: