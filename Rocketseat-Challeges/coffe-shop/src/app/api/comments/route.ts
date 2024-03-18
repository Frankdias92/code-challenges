import fsPromises from 'fs/promises'
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import path from 'path'


interface Comment {
    name: string
    email: string
    message: string
}


export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const dataFilePath = path.join(process.cwd(), 'src/app/api/comments/data.json');
    
    // Read the existing data from the JSON file
    const jsonData = await fsPromises.readFile(dataFilePath)
    const objectData: Comment[] = JSON.parse(String(jsonData));

    return NextResponse.json(objectData)
}

export async function GET(req: Response) {
    const dataFilePath = path.join(process.cwd(), 'src/app/api/comments/data.json');

    
    const jsonData = await fsPromises.readFile(dataFilePath, 'utf-8')
    const objectData: Comment[] = JSON.parse(String(jsonData))

    // get the data from the request body
    const { name, email, message } = req.json() as Comment

    // add the new data to the object
    const newData = {
        email,
        name,
        message
    }
    objectData.push(newData)

    // // Write the updated data to the JSON file
    await fsPromises.writeFile(dataFilePath, JSON.stringify(objectData, null, 2) )

    // Send a succes response
    return NextResponse.json({ message: objectData })

}