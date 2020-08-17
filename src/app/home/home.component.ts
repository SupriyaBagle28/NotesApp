import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NotesService } from '../service/notes.service';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response;
  id:any;
  constructor(private router: Router,
    private db: AngularFireDatabase,
    private noteservice: NotesService,
    ) {

  }

  ngOnInit(): void {
   
    this.noteservice.getNotes()
      .subscribe(response => {
        this.response = response;
        console.log(response);
      })
  }

  // edit(){
   
  // }

  delete(){

  }

  newNotes() {
    this.router.navigate(['/new']);
  }

}
