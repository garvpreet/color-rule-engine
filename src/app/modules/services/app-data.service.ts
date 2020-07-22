import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppDataService {
  empData = [
    { id: 1, country: "Canada", name: "Robert", designation: "Developer" },
    { id: 2, country: "India", name: "Henry", designation: "Student" },
    { id: 3, country: "USA", name: "Victor", designation: "Manager" },
    { id: 4, country: "Canada", name: "Tony", designation: "Trainee" },
    { id: 5, country: "Japan", name: "Sam", designation: "Lead" },
    { id: 6, country: "USA", name: "Younis", designation: "Student" },
    { id: 7, country: "Australia", name: "Mo", designation: "Developer" },
    { id: 8, country: "Germany", name: "Victor", designation: "Developer" },
    { id: 9, country: "Australia", name: "Henry", designation: "Lead" },
    { id: 10, country: "France", name: "Singh", designation: "Manager" },
  ];

  //constructor(private http: Http) { }  use this while fetching data from server

  getData() {
    return this.empData;
    // return this.http.get(this.url); use this while fetching data from server
  }
}
