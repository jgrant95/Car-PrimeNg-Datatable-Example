import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/components/common/api";
import { LazyLoadEvent } from "primeng/components/common/lazyloadevent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datatable Testing';
  brands: SelectItem[]
  colors: SelectItem[]

  cars: Car[]
  carsMod: Car[]
  totalRecords: number
  defaultRow = 1

  loadCarsLazy(event: LazyLoadEvent) {
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        
        //imitate db connection over a network
        setTimeout(() => {
          this.carsMod = this.cars.slice(event.first, (event.first + event.rows));
        }, 250);

        this.totalRecords = this.cars.length
    }

  ngOnInit(){
    this.setupBrands()

    this.setupColorLookups()

    this.setupCars()   

    this.carsMod = this.cars

    this.totalRecords = this.cars.length - this.defaultRow
  }

  private setupBrands() {
    this.brands = []

    this.brands.push({label: 'All Brands', value: null});
    this.brands.push({value: "VW", label: "VW"})
    this.brands.push({value: "BMW", label: "BMW"})
    this.brands.push({value: "Jaguar", label: "Jaguar"})
  }

  private setupCars() {
    this.cars = []

    this.cars.push({
      vin: "1234",
      year: "1998",
      brand: "BMW",
      color: "Red"
    })
    this.cars.push({
      vin: "3535",
      year: "1988",
      brand: "Jaguar",
      color: "Black"
    })
    this.cars.push({
      vin: "7541",
      year: "2001",
      brand: "BMW",
      color: "Blue"
    })
    this.cars.push({
      vin: "6254",
      year: "2011",
      brand: "Jaguar",
      color: "Black"
    })
    this.cars.push({
      vin: "6622",
      year: "1998",
      brand: "Jaguar",
      color: "Green"
    })
    this.cars.push({
      vin: "8655",
      year: "2004",
      brand: "BMW",
      color: "Red"
    })
    this.cars.push({
      vin: "3331",
      year: "2004",
      brand: "VW",
      color: "Blue"
    })
  }

  private setupColorLookups() {
    this.colors = []
    
    this.colors.push({label: 'White', value: 'White'});
    this.colors.push({label: 'Green', value: 'Green'});
    this.colors.push({label: 'Silver', value: 'Silver'});
    this.colors.push({label: 'Black', value: 'Black'});
    this.colors.push({label: 'Red', value: 'Red'});
    this.colors.push({label: 'Maroon', value: 'Maroon'});
    this.colors.push({label: 'Brown', value: 'Brown'});
    this.colors.push({label: 'Orange', value: 'Orange'});
    this.colors.push({label: 'Blue', value: 'Blue'});
  }
}

class Car {
  vin: string
  year: string
  brand: string
  color: string
}
