import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
       {
        path: '', redirectTo: "/home", pathMatch: 'full'
       },
      {
         path: 'home',  component: HomeComponent
       },
       {
        path: 'about',  component: AboutComponent
       },
      {
        path: 'products',  component: ProductsComponent
     },
     {
       path: 'services',  component: ServicesComponent
     },
     {
       path: 'contacts',  component: ContactsComponent
     },
      
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
