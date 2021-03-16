import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { JurossComponent } from "./juross/juross.component";
import { JuroscComponent } from './jurosc/jurosc.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "juross", component: JurossComponent }
      // {
      //   // path: "veriparimpa", component: VeriparimpaComponent
      // }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    JurossComponent,
    JuroscComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
