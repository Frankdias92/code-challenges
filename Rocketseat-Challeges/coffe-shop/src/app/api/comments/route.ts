import { IncomingMessage } from "http"
import { NextResponse } from "next/server"



interface Comment {
    name: string
    email: string
    message: string
}

export async function GET(req: Request, res: Response) {
    const { name, email, message} = req.body

    const comment = {
        name,
        email,
        message,
    }
    
    
    return NextResponse.json({ message: String(comment) })
}

export async function POST(req: Request, res: Response) {
    // const { name } = req.body
    // const name = formData.get('name');
    // const email = formData.get('email');
    // const message = formData.get('message');

    // const data: Comment = {
    //     name: name as string,
    //     email: email as string,
    //     message: message as string
    // };


    return NextResponse.json({ message: 'body' })
}
