import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmationService,MessageService } from 'primeng/api';
import {ProgressBarModule} from 'primeng/progressbar';

const module = [
  CommonModule,
  MessageModule,
  MessagesModule,
  ConfirmDialogModule,
  ToastModule,
  BrowserAnimationsModule,
  MenubarModule,
  InputTextareaModule,
  ButtonModule,
  CardModule,
  SplitterModule,
  TableModule,
  ToolbarModule,
  FileUploadModule,
  RatingModule,
  DialogModule,
  DropdownModule,
  RadioButtonModule,
  InputNumberModule,
  ProgressBarModule
];

@NgModule({
  declarations: [],
  imports: [...module],
  exports: [...module],
  providers: [ConfirmationService,MessageService]
})
export class PrimeNgModule {}
