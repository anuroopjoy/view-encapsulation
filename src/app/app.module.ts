import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InnerComponent } from './inner/inner.component';

@NgModule({
  declarations: [AppComponent, InnerComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: APP_ID,
      useValue: 'my-app',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
