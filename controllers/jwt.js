import jwt from 'jsonwebtoken';

const secret = 'CDA44B9D1C0CDAC115655AB452B8DA3439134900FFB2468B05AED338A5CCE187'

export const sign = payload => jwt.sign(payload, secret, { expiresIn: 86400 })
export const verify = token => jwt.verify(token, secret)
