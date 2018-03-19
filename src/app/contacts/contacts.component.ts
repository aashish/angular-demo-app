import { Component, OnInit } from '@angular/core';
import { CONTACTS } from '../mock-contacts';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;
  contact: any = {};
  contactForm;
  //This will hide the DIV by default.
  is_visible: boolean = false;

  //If DIV is visible it will be hidden and vice versa.
  toggle() {
    this.is_visible = !this.is_visible;
  }

  //Add new contact
  add() {
    if (this.contact.type != null) {
      this.contacts.push(this.contact)
      this.contact = {};
    }
  }

  //delete contact
  delete(index) {
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
  constructor() {

  }

  ngOnInit() {
    this.contactForm = new FormGroup ({
      type: new FormControl(this.contact.type, Validators.required)
    });
  }

get type() { return this.contactForm.get('type'); }
}
