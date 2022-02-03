let questions = document.querySelectorAll('.accordion__question-container');

questions.forEach((question) =>
  question.addEventListener('click', () => {
    if (question.parentNode.classList.contains('active')) {
      question.parentNode.classList.remove('active');
    } else {
      questions.forEach((question) =>
        question.parentNode.classList.remove('active')
      );
      question.parentNode.classList.add('active');
    }
  })
);
