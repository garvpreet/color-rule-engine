import { LocationGridService } from './location-grid.service';
import { OperatorEnum } from './../../../shared/OperatorEnum';
import { ModalColorRuleComponent } from './../modal-color-rule/modal-color-rule.component';
import { AppDataService } from "./../../services/app-data.service";
import { Component, OnInit, NgModuleRef } from "@angular/core";
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "location-grid",
  templateUrl: "./location-grid.component.html",
  styleUrls: ["./location-grid.component.scss"],
})
export class LocationGridComponent implements OnInit {
  gridData: any[];
  constructor(private dataService: AppDataService, private modalService: NgbModal, 
    private gridService: LocationGridService) {}

  ngOnInit() {
    this.getGridData();
  }

  openColorModal(identifier: string) {
    const modalRef = this.modalService.open(ModalColorRuleComponent);
    modalRef.componentInstance.inputData = {identifier};
    modalRef.result.then((output) => {
      if (output) {
        console.log("Modal closed with output as: ", output);
        this.gridData.forEach((data) => delete data.color);
        this.checkRulesOnGrid(output);
      }
    }, (reason) => {
      console.log("Modal dismissed with reason as: ", reason);
    });
  }

  checkRulesOnGrid(ruleObj): void {
    switch (ruleObj.operator) {
      case OperatorEnum.EQUALS: {
        this.gridData.forEach((arrItem) => this.gridService.checkEquals(arrItem, ruleObj));
        break;
      }
      case OperatorEnum.NOT_EQUALS: {
        this.gridData.forEach((arrItem) => this.gridService.checkNotEquals(arrItem, ruleObj));
        break;
      }
      case OperatorEnum.CONTAINS: {
        this.gridData.forEach((arrItem) => this.gridService.checkContains(arrItem, ruleObj));
        break;
      }
      case OperatorEnum.NOT_CONTAINS: {
        this.gridData.forEach((arrItem) => this.gridService.checkNotContains(arrItem, ruleObj));
        break;
      }
      default:
        break;
    }    
  }

  private getGridData(): void {
    this.gridData = this.dataService.getData();
  }  
}