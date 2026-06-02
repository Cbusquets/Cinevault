import { Component, OnInit, output } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";

@Component({
    selector: 'app-search-bar',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './search-bar.html',
    styleUrl: './search-bar.scss'
})
export class SearchBarComponent implements OnInit {
    searchControl = new FormControl("");
    searchChange = output<string>();
    loading: boolean = false;
    isSearching: boolean = false;

    ngOnInit(): void {
        this.searchControl.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged()
        ).subscribe(value => this.searchChange.emit(value ?? ''));
    }
}
