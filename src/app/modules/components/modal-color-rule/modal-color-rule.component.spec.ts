import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalColorRuleComponent } from './modal-color-rule.component';

describe('ModalColorRuleComponent', () => {
  let component: ModalColorRuleComponent;
  let fixture: ComponentFixture<ModalColorRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalColorRuleComponent ],
      imports: [ FormsModule ],
      providers: [NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalColorRuleComponent);
    component = fixture.componentInstance;
    component.inputData = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
