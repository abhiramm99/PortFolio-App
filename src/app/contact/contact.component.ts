import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { fadeIn, fadeInFromTop, fadeOut, popIn } from '../shared-files/animations';
import { ISendMessageRequestModel } from './contact.interface';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    fadeIn,
    fadeOut,
    popIn,
    fadeInFromTop
  ]
})
export class ContactComponent implements OnInit {

  public messageForm: FormGroup;
  public isLoading: boolean = false;
  public isComplete: boolean = false;

  constructor(private fb: FormBuilder, private contactService: ContactService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.messageForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    })
  }

  public sendMessage(): void {
    if (this.isLoading || this.isComplete || !this.messageForm.valid) {
      return;
    }

    this.isLoading = true;
    const sendModel: ISendMessageRequestModel = {
      name: this.messageForm.value.name,
      email: this.messageForm.value.email,
      message: this.messageForm.value.message
    };

    this.contactService.sendMessage(sendModel).subscribe(x => {
      this.isLoading = false;
      this.isComplete = true;
      setTimeout(() => {
        this.isComplete = false;
        this.messageForm.reset();
      }, 5000);
      this.toaster.success("I have received your message", "Thanks 😊");
    }, () => {
      this.isLoading = false;
      this.isComplete = false;
      this.messageForm.reset();
      this.toaster.error("Your message is not delivered. Sorry 😟", "Uh oh. An error occured")
    })
  }
  
}
