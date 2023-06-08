import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialComponentsModule } from './common/material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    MaterialComponentsModule
  ],
  exports: [MaterialComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
