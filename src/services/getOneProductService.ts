import { readFile } from "../database/functions";


export class GetOneProductService {
    async execute(id: string) {
        const data = readFile()

        const product = await data.find((item: { id: string; }) => item.id == id)

        return (product);

    }
}