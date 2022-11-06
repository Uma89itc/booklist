import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../Shared/services/booklist.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  constructor(public booklistService:BooklistService) { }

  ngOnInit(): void {
    this.booklistService.getBookList().subscribe(response=>
      {
             console.log(response)
      },(err)=> {
        
      });
   
  }

}
