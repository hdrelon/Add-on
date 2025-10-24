function askQuestions() {
  const questions = [
    "Supprimer les mails de plus de 2 ans ?",
    "Vider la corbeille ?",
    "Supprimer les notifications Teams ?",
    "Supprimer les mails envoyés à LST-Societe ?",
    "Lister les 100 mails les plus volumineux ?"
  ];

  let output = document.getElementById("output");
  output.innerHTML = "<h3>Questionnaire :</h3>";

  questions.forEach(q => {
    const btnYes = `<button onclick="handleResponse('${q}', true)">Oui</button>`;
    const btnNo = `<button onclick="handleResponse('${q}', false)">Non</button>`;
    output.innerHTML += `<p>${q}<br>${btnYes} ${btnNo}</p>`;
  });
}

function handleResponse(question, answer) {
  console.log(`Réponse à "${question}": ${answer}`);
  alert(`Tu as répondu ${answer ? 'Oui' : 'Non'} à "${question}"`);
}
