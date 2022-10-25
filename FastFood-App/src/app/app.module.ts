import { CopyService } from './services/copy.service';
import { CopyPipe } from './pipes/copy.pipe';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

export function copyFactory(provider: CopyService) {
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CopyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [
    CopyService,
    {
      provide: APP_INITIALIZER,
      useFactory: copyFactory,
      deps: [CopyService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
