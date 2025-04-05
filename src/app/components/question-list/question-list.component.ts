import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [HttpClientModule,CommonModule, InputTextareaModule, ButtonModule, CardModule, FormsModule],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit{
  questions: string[] = [];
  answers: string[] = [];
  feedbacks: string[] = [];

  constructor(private http: HttpClient){}
  ngOnInit(): void {

    const role = localStorage.getItem('selectedRole');
    this.http.post<any>('http://localhost:3000/api/questions',{role}).subscribe(res=>{
      this.questions=res.questions;
      this.answers=new Array( this.questions.length).fill('');
      this.feedbacks=new Array(this.questions.length).fill('');
    })

  }

  submitAnswer(index: number) {
    const payload = {
      question: this.questions[index],
      answer: this.answers[index]
    };
    this.http.post<any>('http://localhost:3000/api/submit-answer', payload).subscribe(res => {
      this.feedbacks[index] = res.feedback;
    });
  }
  
}
