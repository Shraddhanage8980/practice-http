import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpService } from "./shared/services/http-data.service";

@NgModule({
    declarations :[
        AppComponent,
        HeaderComponent,
        OneComponent,
        TwoComponent
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers : [
        HttpService
    ],
    bootstrap : [AppComponent]
})
export class AppModule{}