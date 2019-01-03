import { InMemoryDbService} from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";
import { Entry } from "./pages/entries/shared/entry.model";
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

        const entries: Entry[] = [
            { id: 1, name: 'Gás de Cozinha', categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "usado para cozinhar"} as Entry,
            { id: 2, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: true, date: "14/10/2018", amount: "15,00", type: "expense", description: "whey"} as Entry,
            { id: 3, name: 'Salário na empresa', categoryId: categories[2].id, category: categories[2], paid: false, date: "25/10/2018", amount: "4405,80", type: "expense", description: "Real, Dolar, Euro"} as Entry,
            { id: 4, name: 'Aluguel de filme', categoryId: categories[3].id, category: categories[3], paid: false, date: "26/10/2018", amount: "30,00", type: "reveneu", description: "Força aerea 1"} as Entry,
            { id: 5, name: 'Video Game', categoryId: categories[1].id, category: categories[1], paid: true, date: "30/11/2018", amount: "160,00", type: "expense", description: "ps4, xbox"} as  Entry,
            { id: 6, name: 'Jogos', categoryId: categories[4].id, category: categories[4], paid: true, date: "31/11/2018", amount: "200,00", type: "revenue", description: "overwatch, dota"} as Entry,
            { id: 7, name: 'Cinema', categoryId: categories[3].id, category: categories[3], paid: false, date: "12/12/2018", amount: "15,00", type: "expense", description: "Cinemark"} as Entry,
        ]
        
        return { categories, entries}
    }
}