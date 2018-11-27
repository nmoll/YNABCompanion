import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { TransactionService, ITransaction } from "../core/transaction.service";
import { Observable } from "rxjs";

@Component({
    selector: "transaction-list",
    moduleId: module.id,
    templateUrl: "./transaction-list.component.html"
})
export class TransactionListComponent implements OnInit {
    items: Observable<ITransaction[]>;

    constructor(private transactionService: TransactionService, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.items = this.transactionService.list();
    }
}
