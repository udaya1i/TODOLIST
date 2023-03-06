import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  constructor() { }
  listoftask:any[] =[];
  ngOnInit(): void {
  }
  gotclicked(list: any){
   this.listoftask.push({id:this.listoftask.length, name:list})
  }
  deleteit(id:number){
    this.listoftask=this.listoftask.filter(tasks=>tasks.id!==id)
    console.log(id);
    
  }
  }


