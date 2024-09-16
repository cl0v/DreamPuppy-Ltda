import { sql } from "@vercel/postgres";

import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    let response = { id: 0, token: '' }

    jwt.sign(body, 'user-preferences', { expiresIn: '30d' }, async (err, token) => {
        if (err) {

        }

        console.log(body)
        try {
            const id = await sql`INSERT INTO taxidogs (email, password, token) VALUES (${body.email}, ${body.password}, ${token}) RETURNING id`
            response.id = id.rows[0].id
            response.token = token ?? ''
        } catch {
             setResponseStatus(event, 404, 'Page Not Found')
             return {
                'message': 'Nada encontrado!!'
             }
        }

    })

    return response
})