const questions = [
      { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Making Language"], answer: 0 },
      { q: "What does CSS stand for?", options: ["Creative Style System", "Cascading Style Sheets", "Computer Style Syntax"], answer: 1 },
      { q: "Which language adds interactivity to websites?", options: ["Java", "JavaScript", "Python"], answer: 1 }
    ];
    
    let index = 0, score = 0;
    function loadQuestion() {
      if(index >= questions.length) {
        document.getElementById("quiz").innerHTML = "Quiz Over!";
        document.getElementById("result").innerHTML = `Your Score: ${score}/${questions.length}`;
        return;
      }
      let q = questions[index];
      document.getElementById("quiz").innerHTML = `
        <div class="question">${q.q}</div>
        ${q.options.map((opt,i)=>`<label><input type="radio" name="opt" value="${i}"> ${opt}</label><br>`).join("")}
      `;
    }
    function nextQuestion() {
      let selected = document.querySelector('input[name="opt"]:checked');
      if(selected && parseInt(selected.value) === questions[index].answer) score++;
      index++;
      loadQuestion();
    }
    loadQuestion();