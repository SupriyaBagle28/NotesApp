import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {NotesService} from '../service/notes.service'; 
import {Router, ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

 


  constructor(private router:Router,
    private db:AngularFireDatabase,
    private noteservice:NotesService) { }

  ngOnInit(): void {
   
  }

  save(note){
    this.noteservice.addNotes(note);
    console.log(note);
    this.router.navigate(['/home']);
  }

}
