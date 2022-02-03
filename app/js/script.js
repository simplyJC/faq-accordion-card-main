// let questions = document.querySelectorAll('.accordion__question-container');

// questions.forEach((question) =>
//   question.addEventListener('click', () => {
//     if (question.parentNode.classList.contains('active')) {
//       question.parentNode.classList.toggle('active');
//     } else {
//       questions.forEach((question) =>
//         question.parentNode.classList.remove('active')
//       );
//       question.parentNode.classList.add('active');
//     }
//   })
// );


let questions = document.querySelectorAll('.accordion__question-answer');
questions.forEach((question) => {
  question.addEventListener('click', () => {
    if (question.classList.contains('active')) {
      question.classList.remove('active');
      console.log('i was click');
    } else {
      questions.forEach((question) =>
        question.classList.remove('active')
      );

      question.classList.add('active');

    }
  });
});
