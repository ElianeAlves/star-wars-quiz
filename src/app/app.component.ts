import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'star-wars-quiz';
  quiz: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3333/questions')
      .subscribe(
        data => {
          // Manipule os dados recebidos aqui
          console.log(data);
  
          // Formate os dados se necessário
          this.quiz = data.map(question => {
            // Analise a propriedade "answer" para obter um objeto
            const answerOptions = JSON.parse(question.answer);
            console.log(answerOptions)
  
            return {
              question: question.question,
              answer: answerOptions,
              img: question.img,
              id: question.id
            };
          });

          console.log(this.quiz)
        },
        error => {
          console.error('Erro:', error);
        }
      );
  }
  
  
  
}
