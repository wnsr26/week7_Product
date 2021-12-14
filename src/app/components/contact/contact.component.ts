import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact : Contact;
  strResult : string;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.name);
    this.contact = new Contact();
  }

  readData(){
    console.log(this.contact.name);
    console.log(this.contact.email);
    console.log(this.contact.msg);
    console.log(this.contact.tel);
  }

  onSubmit(f:NgForm) {
    this.strResult = JSON.stringify(this.contact);;
    window.alert(JSON.stringify(this.contact));
    console.log(this.contact);
  }

}