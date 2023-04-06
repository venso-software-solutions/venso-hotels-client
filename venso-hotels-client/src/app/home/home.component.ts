import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('picker1') picker1!: MatDatepicker<Date>;
  startDateControl = new FormControl(new Date());

  sortBy: any;
  lifeCycle: any;
  categoriesList: any;
  applyFiltersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.applyFiltersForm = this.formBuilder.group({
      assetCategoryControl: [''],
      lifecycleControl: [''],
      sortByControl:[''],
    });
  }

  ngOnInit(): void {
    this.categoriesList = ['Arugambey', 'Hikkaduwa', 'Nilaveli'];
    this.lifeCycle = ['gtr', 'trgr']
    this.sortBy = ['dsfvd', 'dscfsd'];
  }

  applyFiltersSearch() {}
  clearSelectedDropDownValues() {}
}
