import {NgModule, NO_ERRORS_SCHEMA, ErrorHandler, NgModuleFactoryLoader, LOCALE_ID} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { HomeComponent } from './components/home/home.component';
import { FindComponent } from './components/find/find.component';
import { FleetComponent } from './components/fleet/fleet.component';
import { enable as traceEnable, addCategories } from "tns-core-modules/trace";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import {TabsComponent} from "~/app/components/tabs/tabs.component";

traceEnable();

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import {LoaderInterceptor} from "~/app/helpers/loader/loader.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePl);

export class MyErrorHandler implements ErrorHandler {
    handleError(error) {
        console.log(error);
        console.log("### ErrorHandler Error: " + error.toString());
        console.log("### ErrorHandler Stack: " + error.stack);
    }
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        FleetComponent
    ],
    providers: [
        { provide: ErrorHandler, useClass: MyErrorHandler },
        {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
        {provide: LOCALE_ID, useValue: 'pl'},
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
