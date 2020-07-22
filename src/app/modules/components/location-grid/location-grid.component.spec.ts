import { OperatorEnum } from './../../../shared/OperatorEnum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppDataService } from './../../services/app-data.service';
import { AppComponent } from './../../../app.component';
import { LocationGridService } from './location-grid.service';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LocationGridComponent } from './location-grid.component';

class MockDataService {
  data = [
    { id: 1, country: "Canada", name: "Ram", designation: "Developer" },
    { id: 2, country: "India", name: "Shyam", designation: "Manager" }
  ];
  getData() {
    return this.data;
  }  
}

describe('LocationGridComponent', () => {
  let component: LocationGridComponent;
  let fixture: ComponentFixture<LocationGridComponent>;

  let appDataService: AppDataService;
  let modalService: NgbModal;
  let gridService: LocationGridService;

  let rule1 = {operator: OperatorEnum.EQUALS, identifier: "Name", identifierValue: "Babu Bhaiya", color: "red"};
  let rule2 = {operator: OperatorEnum.NOT_EQUALS, identifier: "Name", identifierValue: "", color: "red"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ LocationGridComponent, AppComponent ],
      providers: [
        {provide: AppDataService, useValue: MockDataService},
        AppDataService, NgbModal, LocationGridService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationGridComponent);
    component = fixture.componentInstance;
    appDataService = fixture.debugElement.injector.get(AppDataService);
    modalService = TestBed.get(NgbModal); // Different way when injected at root level. TODO check in main file.
    gridService = TestBed.get(LocationGridService);    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject the component\'s AppDataService instance',
    inject([AppDataService], (service: AppDataService) => {
    expect(service).toBe(appDataService);
  }));

  it('should gridData not contain actual service data after ngOnInit', () => {
    component.ngOnInit();
    expect(component.gridData).not.toContain(appDataService.empData);
  });

  it('should gridData not contain any data based on EQUALS and name', () => {
    component.ngOnInit();    
    component.checkRulesOnGrid(rule1);
    let filteredArr = component.gridData.filter((obj) => obj.color!=undefined);
    expect(filteredArr.length).toEqual(0);
  });

  it('should gridData contain one or more than one data based on NOT EQUALS and country', () => {
    component.ngOnInit();    
    component.checkRulesOnGrid(rule2);
    let filteredArr = component.gridData.filter((obj) => obj.color!=undefined);
    expect(filteredArr.length).not.toEqual(0);
  });

});