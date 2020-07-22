import { OperatorEnum } from './../../../shared/OperatorEnum';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-color-rule',
  templateUrl: './modal-color-rule.component.html',
  styleUrls: ['./modal-color-rule.component.scss'],
  exportAs: "modalForm"
})
export class ModalColorRuleComponent implements OnInit {

  @Input() inputData: any;
  model: any;
  operators = OperatorEnum;

  constructor(private activeModal: NgbActiveModal) {
    this.model = {};
   }

  ngOnInit() {}

  closeModal(){
    this.model.identifier = this.inputData.identifier;
    this.saveValuesToLocalStorage();
    this.activeModal.close(this.model);
  }

  private saveValuesToLocalStorage(){
    localStorage.setItem("colorRuleIdentifier", this.model.identifier);
    localStorage.setItem("colorRuleIdentifierValue", this.model.identifierValue);
    localStorage.setItem("colorRuleOperator", this.model.operator);
    localStorage.setItem("colorRuleColor", this.model.color);
  }
}
