import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jh11SharedModule } from 'app/shared/shared.module';
import { Jh11CoreModule } from 'app/core/core.module';
import { Jh11AppRoutingModule } from './app-routing.module';
import { Jh11HomeModule } from './home/home.module';
import { Jh11EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jh11SharedModule,
    Jh11CoreModule,
    Jh11HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jh11EntityModule,
    Jh11AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Jh11AppModule {}
