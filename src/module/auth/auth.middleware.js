import jwt from "jsonwebtoken";
import { pool } from "../../../index.mjs";
import ApiError from "../../common/utils/ApiError.utils.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next(ApiError.unAuthorized("Unauthorized request"))
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
        let result = await pool.query('Select id,name,email FROM users where id = $1', [decoded.userId])
        if (result.rowCount <= 0) {
            return next(ApiError.badRequest('Invalid token'))
        }
        req.user = result.rows[0];
        next()
    } catch (error) {
        // console.log(error)
        next(ApiError.unAuthorized('Unauthorized user'))
    }
}

