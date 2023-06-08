import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialComponentsModule } from './common/material-components.module';
import { ConversionComponent } from './components/conversion/conversion.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversionComponent,
  ],
  imports: [
    MaterialComponentsModule,
    AppRoutingModule,
  ],
  exports: [MaterialComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
