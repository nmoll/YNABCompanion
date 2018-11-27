import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TransactionService, ITransaction } from "../core/transaction.service";
import { Observable } from "rxjs";

@Component({
    selector: "ItemDetail",
    moduleId: module.id,
    templateUrl: "./transaction-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Observable<ITransaction>;

    constructor(
        private transactionService: TransactionService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.item = this.transactionService.getTransaction(id);
    }
}
