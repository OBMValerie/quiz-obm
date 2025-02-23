import React from 'react';
import { Sparkles, ArrowRight, Target, Cog, TrendingUp } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-purple-700">Votre Nom</div>
          <div className="space-x-6">
            <a href="/" className="text-gray-600 hover:text-purple-700">Accueil</a>
            <a href="/quiz" className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md hover:bg-purple-200">
              Faire le test
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transformez votre entreprise en une machine opérationnelle efficace
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Online Business Manager spécialisée dans l'accompagnement des créateurs et marques éthiques pour une croissance saine et prévisible
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-md hover:bg-purple-800 transition-colors">
            Découvrir ma méthodologie
          </button>
        </div>
      </header>

      {/* Methodology Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Une méthodologie éprouvée en 3 étapes</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 bg-purple-50 rounded-lg">
              <Target className="w-12 h-12 text-purple-700 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Simplifier</h3>
                <p className="text-gray-600">Clarification de votre vision, objectifs et positionnement. Nous posons ensemble les fondations solides de votre croissance en simplifiant votre stratégie et vos offres.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-purple-50 rounded-lg">
              <Cog className="w-12 h-12 text-purple-700 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Systématiser</h3>
                <p className="text-gray-600">Implémentation de votre machine opérationnelle avec des systèmes, outils et processus efficaces. Libérez votre temps pour vous concentrer sur votre rôle de dirigeant.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-6 bg-purple-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-purple-700 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Développer</h3>
                <p className="text-gray-600">Mise en place de stratégies de croissance pour augmenter vos revenus de manière prévisible et rentable, sans le chaos habituel des affaires.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Pour les entrepreneurs ambitieux</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Créateurs de bijoux artisanaux</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-700" />
                  <span>Une activité établie avec une vision de croissance</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-700" />
                  <span>Collections exclusives et savoir-faire unique</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-700" />
                  <span>Besoin de libérer du temps pour la création</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Marques de mode éthique</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-700" />
                  <span>Engagées dans une démarche responsable</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-700" />
                  <span>En phase de structuration opérationnelle</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-purple-700" />
                  <span>Prêtes à investir dans leur croissance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-purple-700 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Les bénéfices de notre collaboration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Temps retrouvé</h3>
              <p>Libérez-vous des tâches opérationnelles pour vous concentrer sur votre vision</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Organisation optimisée</h3>
              <p>Des processus clairs et efficaces pour une gestion sereine</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Croissance maîtrisée</h3>
              <p>Un développement sain et prévisible de votre activité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre entreprise ?</h2>
          <p className="text-xl text-gray-600 mb-8">Réservez un appel stratégique pour découvrir comment je peux vous aider à atteindre vos objectifs</p>
                      <iframe
              src="calendly.com/obmvalerie"
              width="100%"
              height="100%"
              className="w-full min-h-[600px]"
              frameBorder="0"
            />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2025 Votre Nom - Online Business Manager</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;