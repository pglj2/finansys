import { InMemoryDbService} from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories: Category[] = [
            {
                id:1,
                name: "Lazer",
                description: "cinema, parques, praia etc"
            },
            {
                id:2,
                name: "Saúde",
                description: "Plano de saúde e remédios"
            },
            {
                id:3,
                name: "Linguagens de Programação",
                description: "Java, C, C#, JavaScript e Haskell"
            },
            {
                id:4,
                name: "CIn",
                description: "Ciência da computação, Engenharia da Computação e Sistemas da Informação"
            },
            {
                id:5,
                name: "UFPE",
                description: "CIN, CAC, CTG, CCB, CFCH e CCSA"
            }
        ];
        
        return { categories }
    }
}