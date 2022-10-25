import { ProductService } from './services/product.service';
import { HeaderComponent } from './components/header/header.component';
import { CopyService } from './services/copy.service';
import { CopyPipe } from './pipes/copy.pipe';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { ListProductComponent } from './components/list-product/list-product.component';

export function copyFactory(provider: CopyService) {
  return () => provider.getData();
}

export function productFactory(provider: ProductService) {
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListCategoryComponent,
    ListProductComponent,
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
    },
    ProductService,
    {
      provide: APP_INITIALIZER,
      useFactory: productFactory,
      deps: [ProductService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
