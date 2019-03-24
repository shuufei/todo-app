import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TextComponent } from './components/text/text.component';
import { InputTextModalComponent } from './components/input-text-modal/input-text-modal.component';
import { FooterComponent } from './components/fotter/footer.component';
import { TodoDetailModalComponent } from './components/todo-detail-modal/todo-detail-modal.component';
import { CompletComponent } from './components/complet/complet.component';
import { ShareComponent } from './components/share/share.component';

// const config: SocketIoConfig = { url: 'http://localhost:7000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddTodoComponent,
    TextComponent,
    InputTextModalComponent,
    FooterComponent,
    TodoDetailModalComponent,
    CompletComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // SocketIoModule.forRoot(config),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
