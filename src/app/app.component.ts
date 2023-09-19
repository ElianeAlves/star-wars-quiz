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
  correct?: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStarWars();
  }

  getStarWars() {
    this.http.get<any[]>('http://localhost:3333/questions').subscribe(
      data => {
        // Manipule os dados recebidos aqui
        console.log(data);

        // Formate os dados se necessário
        this.quiz = data.map(question => {
          // Analise a propriedade "answer" para obter um objeto
          const answerOptions = JSON.parse(question.answer);
          console.log(answerOptions);

          // Crie uma cópia das opções de resposta
          const shuffledOptions = [...answerOptions];

          // Embaralhe apenas a ordem de exibição
          shuffleArray(shuffledOptions);

          return {
            question: question.question,
            answer: shuffledOptions, // Use as opções embaralhadas
            img: question.img,
            id: question.id
          };
        });

        console.log(this.quiz);
      },
      error => {
        console.error('Erro:', error);
      }
    );
  }

  resp(item: any, opcao: any, i: any) {
    if (opcao.id == 1) {
      opcao.selected = true;
      console.log(opcao.id);
    } else if (opcao.id != 1) {
      opcao.selected = false;
      alert('Errou, tenta de novo enquanto você pode')
    }
  }

  currentQuestionIndex = 0;

  resp1(question: any, selectedOption: any, index: any) {
    if (selectedOption.id == 1) {
      selectedOption.selected = true;
      console.log(selectedOption.id);
    } else if (selectedOption.id != 1) {
      selectedOption.selected = false;
      alert('Errou, tenta de novo enquanto você pode')
    }

    // Aqui você pode adicionar lógica para lidar com a resposta dada pelo usuário.
    // Por exemplo, marcar a opção como selecionada.
    question.answer.forEach((option: { selected: boolean; }, i: any) => {
      option.selected = i === index;
    });
  }

  nextQuestion() {
    // Verifica se já chegou à última pergunta.
    if (this.currentQuestionIndex < this.quiz.length - 1) {
      // Se não, avance para a próxima pergunta.
      this.currentQuestionIndex++;
    } else {
      // Se sim, o quiz foi concluído.
      // Você pode adicionar lógica aqui para exibir a pontuação ou uma mensagem de conclusão.
    }
  }
}






// Função para embaralhar a ordem de exibição de um array
function shuffleArray(array: any[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
