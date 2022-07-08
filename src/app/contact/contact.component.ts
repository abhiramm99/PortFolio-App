import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeIn, fadeInFromTop, fadeOut, popIn } from '../shared-files/animations';
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

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

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

  public ping(): void {
    if (this.isLoading || this.isComplete) {
      return;
    }

    this.isLoading = true;
    this.contactService.ping().subscribe(x => {
      this.isLoading = false;
      this.isComplete = true;
      setTimeout(() => {
        this.isComplete = false;
      }, 1200);
      console.log(x);
    })
  }

}
