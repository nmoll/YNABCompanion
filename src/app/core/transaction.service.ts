import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators"
import { HttpClient, HttpHeaders } from "@angular/common/http";

const API_BASE_URL = "https://api.youneedabudget.com/v1";

export interface ITransaction {
    id: string;
    amount: number;
    payee_name: string;
}

@Injectable({
    providedIn: "root"
})
export class TransactionService {

    constructor(private httpClient: HttpClient) {}

    list(): Observable<ITransaction[]> {
        return this.httpClient.get(`${API_BASE_URL}/budgets/last-used/transactions`, {
            headers: new HttpHeaders({
                Authorization: "Bearer 1a73899fbd75a442d92f3abe5233a12e6cb673272c0aecec6fc1a34e5693b1d8"
            }),
            params: {
                type: "unapproved"
            }
        })
        .pipe(
            map(resp => resp['data']['transactions'])
        )
    }

    getTransaction(id: string): Observable<ITransaction> {
        return this.httpClient.get(`${API_BASE_URL}/budgets/last-used/transactions/${id}`, {
            headers: new HttpHeaders({
                Authorization: "Bearer 1a73899fbd75a442d92f3abe5233a12e6cb673272c0aecec6fc1a34e5693b1d8"
            })
        })
        .pipe(
            tap(resp => console.log("transaction", resp['data'])),
            map(resp => resp['data']['transaction'])
        )    
    }
}
