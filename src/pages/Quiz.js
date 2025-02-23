import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 'vision',
      text: 'Où en êtes-vous avec votre vision et stratégie d\'entreprise ?',
      options: [
        { value: 1, text: 'Tout est flou, je navigue à vue' },
        { value: 2, text: 'J\'ai une idée mais ce n\'est pas très clair' },
        { value: 3, text: 'C\'est clair mais pas encore formalisé' },
        { value: 4, text: 'J\'ai une vision claire et documentée' }
      ]
    },
    {
      id: 'time',
      text: 'Combien de temps consacrez-vous aux tâches opérationnelles ?',
      options: [
        { value: 1, text: 'Plus de 80% de mon temps' },
        { value: 2, text: 'Entre 60% et 80% de mon temps' },
        { value: 3, text: 'Entre 40% et 60% de mon temps' },
        { value: 4, text: 'Moins de 40% de mon temps' }
      ]
    },
    {
      id: 'processes',
      text: 'Comment gérez-vous vos processus et votre organisation ?',
      options: [
        { value: 1, text: 'Tout est dans ma tête' },
        { value: 2, text: 'J\'ai quelques documents éparpillés' },
        { value: 3, text: 'J\'ai commencé à documenter les process importants' },
        { value: 4, text: 'Tout est documenté et optimisé' }
      ]
    },
    {
      id: 'team',
      text: 'Comment se passe la gestion de votre équipe/prestataires ?',
      options: [
        { value: 1, text: 'Je fais tout moi-même' },
        { value: 2, text: 'Je délègue au coup par coup' },
        { value: 3, text: 'J\'ai une équipe mais la coordination est difficile' },
        { value: 4, text: 'Mon équipe est autonome et bien coordonnée' }
      ]
    },
    {
      id: 'growth',
      text: 'Comment évaluez-vous votre croissance actuelle ?',
      options: [
        { value: 1, text: 'Stagnation ou croissance chaotique' },
        { value: 2, text: 'Croissance lente et imprévisible' },
        { value: 3, text: 'Croissance régulière mais pas optimale' },
        { value: 4, text: 'Croissance saine et maîtrisée' }
      ]
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [questions[step].id]: value };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const total = Object.values(finalAnswers).reduce((sum, value) => sum + value, 0);
    const maxPossible = questions.length * 4;
    
    if (total <= maxPossible * 0.4) {
      setResult({
        type: 'urgent',
        title: 'Un accompagnement OBM serait très bénéfique',
        description: 'Votre entreprise montre des signes clairs de besoin en structuration. Un accompagnement vous permettrait de poser des fondations solides pour une croissance sereine.',
        cta: 'Réserver un appel stratégique',
        link: 'VOTRE_LIEN_CALENDLY_1'
      });
    } else if (total <= maxPossible * 0.7) {
      setResult({
        type: 'consider',
        title: 'Un échange pourrait être utile',
        description: 'Vous avez de bonnes bases, mais certains aspects pourraient être optimisés. Discutons de comment améliorer votre organisation.',
        cta: 'Planifier un échange',
        link: 'VOTRE_LIEN_CALENDLY_2'
      });
    } else {
      setResult({
        type: 'good',
        title: 'Votre entreprise est bien structurée',
        description: 'Félicitations ! Vous avez mis en place une organisation efficace. Je peux vous partager quelques conseils pour maintenir cette dynamique.',
        cta: 'Recevoir des conseils par email',
        link: 'VOTRE_LIEN_CALENDLY_3'
      });
    }
  };

  const getResultClass = (type) => {
    switch (type) {
      case 'urgent':
        return 'bg-red-50 border-red-200';
      case 'consider':
        return 'bg-yellow-50 border-yellow-200';
      case 'good':
        return 'bg-green-50 border-green-200';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Évaluez votre besoin en OBM
        </h1>
        
        {!result ? (
          <div>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-700 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / (questions.length - 1)) * 100}%` }}
                />
              </div>
              <div className="text-sm text-gray-600 text-right mt-2">
                Question {step + 1} sur {questions.length}
              </div>
            </div>

            {/* Question card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-6">
                {questions[step].text}
              </h2>
              <div className="space-y-4">
                {questions[step].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 rounded-lg border hover:bg-purple-50 transition-colors"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={`rounded-lg border p-6 ${getResultClass(result.type)}`}>
            <h2 className="text-2xl font-bold mb-4">
              {result.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {result.description}
            </p>
            <a 
              href={result.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors inline-block"
            >
              {result.cta}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;