import { pool } from "../../../index.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ApiError from "../../common/utils/ApiError.utils.js";
import ApiResponse from "../../common/utils/ApiResponse.utils.js";
const SALT = 10;

async function register(req, res, next) {
    try {
        const { name, email, password } = req.body;

        const userQuery = "SELECT * FROM users WHERE email=$1";
        let existingUser = await pool.query(userQuery, [email]);
        if (existingUser.rowCount > 0) {
            return next(ApiError.conflict("User already exists!"))
        }

        let hashedPassword = await bcrypt.hash(password, SALT);

        let insertedUser = await pool.query('INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,name,email', [name, email, hashedPassword]);

        return ApiResponse.created(res, 'User Registration Successful', { id: insertedUser.rows[0].id, name: insertedUser.rows[0].name })
    } catch (error) {
        next(error)
    }
};
async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        const userQuery = "SELECT * FROM users WHERE email=$1";

        let result = await pool.query(userQuery, [email]);

        if (result.rowCount <= 0) {
            return next(ApiError.notFound("User not found !"));
        }
        let user = result.rows[0]

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        
        if (!isCorrectPassword) {
            return next(ApiError.badRequest("Invalid credentials !"))
        }
        
        const accessToken = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.ACCESS_SECRET,
            { expiresIn: "1d" }
        );
        
        return ApiResponse.ok(res, 'User logged-in successfully', { accessToken })

    } catch (error) {
        return next(ApiError.badRequest("Invalid credentials !"))
    }
};

export { register, login };
