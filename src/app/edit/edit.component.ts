import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NotesService } from '../service/notes.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // id;
  // title;
  // content;

  constructor(private router: Router,
    private ns:NotesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  // save(editedData){
  //   let response = {
  //     title: this.title,
  //     content: this.content
  // }

  // this.ns.updateListing(this.id, response);

  // }

}
