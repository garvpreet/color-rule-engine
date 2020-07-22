import { LocationGridService } from './modules/components/location-grid/location-grid.service';

import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { LocationGridComponent } from "./modules/components/location-grid/location-grid.component";
import { ModalColorRuleComponent } from "./modules/components/modal-color-rule/modal-color-rule.component";
import { AppDataService } from "./modules/services/app-data.service";
import { GlobalErrorHandler } from './shared/GlobalErrorHandler';

@NgModule({
  declarations: [AppComponent, LocationGridComponent, ModalColorRuleComponent],
  entryComponents: [ModalColorRuleComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [AppDataService, NgbActiveModal, LocationGridService,
    {provide: ErrorHandler,useClass: GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {}

