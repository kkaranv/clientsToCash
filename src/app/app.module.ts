import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { MappingListComponent } from './mappings/mapping-list/mapping-list.component';
import { MappingComponent } from './mappings/mapping/mapping.component';
//import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MappingService } from './shared/mapping.service';
import { DatePipe, DecimalPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonthchargesComponent } from './worksheets/billdatainput/monthcharges/monthcharges.component';
import { ApplicableratesComponent } from './worksheets/rates/applicablerates/applicablerates.component';
import { BillchargeComponent } from './billcharges/billcharge/billcharge.component';
import { EntitiesListComponent } from './entities/entities-list/entities-list.component';
import { EntityComponent } from './entities/entity/entity.component';
import { RatesListComponent } from './rates/rates-list/rates-list.component';
import { RateComponent } from './rates/rate/rate.component';
import { MetarateListComponent } from './rateconfig/metarate-list/metarate-list.component';
import { MetarateComponent } from './rateconfig/metarate/metarate.component';

/*import { FormControl } from '@angular/forms';
import { FormGroupDirective, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
*/

@NgModule({
  declarations: [
    AppComponent,
    MappingListComponent,
    MappingComponent,
    HeaderComponent,
    FooterComponent,
    MonthchargesComponent,
    ApplicableratesComponent,
    BillchargeComponent,
    EntitiesListComponent,
    EntityComponent,
    RatesListComponent,
    RateComponent,
    MetarateListComponent,
    MetarateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MappingService, DatePipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
