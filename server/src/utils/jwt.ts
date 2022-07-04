import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'


class AuthToken {
    private static instance: AuthToken = new AuthToken()
    private bcryptjs = bcryptjs
    private jwt = jwt
    private salt = 'p@sSw0rd'

    public static getInstnace() {
        return this.instance
    }

    encryptPassword(password: string) {
        return this.bcryptjs.hashSync(password);
    }

    comparePassword(password: string, comparePassword: string) {
        return this.bcryptjs.compareSync(password, comparePassword)
    }

    generateToken(payload: string | object | Buffer) {
        return this.jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 1),
            payload
        }, this.salt)
    }

    refreshToken(token: string) {
        const oldPayload = this.jwt.verify(token, this.salt)
        return this.generateToken(oldPayload)
    }
    
    verifyToken(token: string) {
        return this.jwt.verify(token, this.salt);
    }

    decodeToken(token: string) {
        return this.jwt.decode(token)
    }
}


export const authToken = AuthToken.getInstnace();