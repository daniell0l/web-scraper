import { readFile } from "../database/functions";

export class GetAllProductService {
    async execute() {
        const data = readFile()
        return (data)
    }
}