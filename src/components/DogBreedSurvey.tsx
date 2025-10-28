'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Home, Heart, Clock, Ruler, Scissors, Users, Timer, Star, Shield } from 'lucide-react';
import { breedDatabase, Breed } from '@/data/breeds';

interface Question {
  id: number;
  question: string;
  icon: any;
  multiple?: boolean;
  maxSelections?: number;
  options: { value: string; label: string }[];
}

const surveyQuestions: Question[] = [
  {
    id: 1,
    question: "What's your home type?",
    icon: Home,
    options: [
      { value: "apartment", label: "Apartment or condo" },
      { value: "house", label: "House with yard" },
      { value: "farm", label: "Farm or rural property" }
    ]
  },
  {
    id: 2,
    question: "How active are you on a daily basis?",
    icon: Heart,
    options: [
      { value: "sedentary", label: "Mostly indoors / sedentary lifestyle" },
      { value: "light", label: "Light activity (short walks, errands)" },
      { value: "moderate", label: "Moderate activity (daily walks or light jogs)" },
      { value: "active", label: "Very active (runs, hikes, outdoor adventures)" }
    ]
  },
  {
    id: 3,
    question: "How much time can you dedicate to a dog each day?",
    icon: Clock,
    options: [
      { value: "low", label: "Less than 1 hour" },
      { value: "medium", label: "1–3 hours" },
      { value: "high", label: "Almost all day (I work from home or stay home)" }
    ]
  },
  {
    id: 4,
    question: "What size of dog do you prefer?",
    icon: Ruler,
    options: [
      { value: "small", label: "Toy / Small (under 10 kg / 22 lbs)" },
      { value: "medium", label: "Medium (10–25 kg / 22–55 lbs)" },
      { value: "large", label: "Large (25–40 kg / 55–88 lbs)" },
      { value: "giant", label: "Giant (over 40 kg / 88 lbs)" },
      { value: "any", label: "No preference" }
    ]
  },
  {
    id: 5,
    question: "How much grooming are you willing to maintain?",
    icon: Scissors,
    options: [
      { value: "minimal", label: "Minimal (short coat, easy maintenance)" },
      { value: "moderate", label: "Moderate (occasional brushing)" },
      { value: "high", label: "High (daily brushing, professional grooming)" },
      { value: "any", label: "No preference" }
    ]
  },
  {
    id: 6,
    question: "Do you have children or other pets at home?",
    icon: Users,
    multiple: true,
    options: [
      { value: "children", label: "Children under 10" },
      { value: "dogs", label: "Other dogs" },
      { value: "cats", label: "Cats" },
      { value: "none", label: "None" }
    ]
  },
  {
    id: 7,
    question: "How long would the dog typically be left alone each day?",
    icon: Timer,
    options: [
      { value: "short", label: "Less than 2 hours" },
      { value: "medium", label: "2–4 hours" },
      { value: "long", label: "4–8 hours" }
    ]
  },
  {
    id: 8,
    question: "What is most important to you in a dog? (choose up to 2)",
    icon: Star,
    multiple: true,
    maxSelections: 2,
    options: [
      { value: "easy-train", label: "Easy to train / intelligent" },
      { value: "calm", label: "Calm and affectionate" },
      { value: "energetic", label: "Energetic and playful" },
      { value: "hypoallergenic", label: "Low-shedding / hypoallergenic" },
      { value: "protective", label: "Loyal and protective" },
      { value: "apartment-friendly", label: "Adapts well to apartment life" }
    ]
  },
  {
    id: 9,
    question: "Would you prefer a dog that is more...",
    icon: Shield,
    options: [
      { value: "independent", label: "Independent and low-maintenance" },
      { value: "friendly", label: "Friendly and social" },
      { value: "protective", label: "Protective and alert" },
      { value: "gentle", label: "Gentle and calm" }
    ]
  }
];

interface BreedWithScore extends Breed {
  matchScore: number;
}

export default function DogBreedSurvey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showResults, setShowResults] = useState(false);
  const [matches, setMatches] = useState<BreedWithScore[]>([]);

  const question = surveyQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / surveyQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    const q = surveyQuestions[currentQuestion];
    
    if (q.multiple) {
      const currentAnswers = answers[q.id] || [];
      let newAnswers;
      
      if (value === 'none') {
        newAnswers = ['none'];
      } else {
        newAnswers = currentAnswers.includes(value)
          ? currentAnswers.filter((v: string) => v !== value)
          : currentAnswers.filter((v: string) => v !== 'none').concat(value);
        
        if (q.maxSelections && newAnswers.length > q.maxSelections) {
          newAnswers = newAnswers.slice(-q.maxSelections);
        }
      }
      
      setAnswers({ ...answers, [q.id]: newAnswers });
    } else {
      setAnswers({ ...answers, [q.id]: value });
    }
  };

  const isAnswered = () => {
    const answer = answers[question.id];
    if (question.multiple) {
      return answer && answer.length > 0;
    }
    return answer !== undefined;
  };

  const calculateMatches = () => {
    const scored = breedDatabase.map(breed => {
      let score = 0;
      let maxScore = 0;

      // Q1: Home type (weight: 10)
      maxScore += 10;
      if (breed.traits.homeType.includes(answers[1])) score += 10;

      // Q2: Activity level (weight: 10)
      maxScore += 10;
      if (breed.traits.activityLevel.includes(answers[2])) score += 10;

      // Q3: Time commitment (weight: 8)
      maxScore += 8;
      if (breed.traits.timeCommitment.includes(answers[3])) score += 8;

      // Q4: Size preference (weight: 9)
      maxScore += 9;
      if (answers[4] === 'any' || breed.traits.size.includes(answers[4])) score += 9;

      // Q5: Grooming (weight: 7)
      maxScore += 7;
      if (answers[5] === 'any' || breed.traits.grooming.includes(answers[5])) score += 7;

      // Q6: Good with (weight: 10)
      maxScore += 10;
      const goodWith = answers[6] || [];
      if (goodWith.includes('none')) {
        score += 10;
      } else {
        const matches = goodWith.filter((item: string) => breed.traits.goodWith.includes(item)).length;
        if (goodWith.length > 0) {
          score += (matches / goodWith.length) * 10;
        }
      }

      // Q7: Alone time (weight: 8)
      maxScore += 8;
      if (breed.traits.aloneTime.includes(answers[7])) score += 8;

      // Q8: Priorities (weight: 12)
      maxScore += 12;
      const priorities = answers[8] || [];
      const priorityMatches = priorities.filter((p: string) => breed.traits.priorities.includes(p)).length;
      if (priorities.length > 0) {
        score += (priorityMatches / priorities.length) * 12;
      }

      // Q9: Temperament (weight: 8)
      maxScore += 8;
      if (breed.traits.temperament.includes(answers[9])) score += 8;

      const percentage = Math.round((score / maxScore) * 100);
      return { ...breed, matchScore: percentage };
    });

    scored.sort((a, b) => b.matchScore - a.matchScore);
    setMatches(scored.slice(0, 5));
    setShowResults(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateMatches();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setMatches([]);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-4">
        <div className="max-w-4xl mx-auto py-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6 border-2 border-yellow-600/30">
            <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              PetGo Suggests Your Perfect Matches!
            </h1>
            <p className="text-center text-gray-800 leading-relaxed mb-3">
              Based on your lifestyle and preferences, here are the top 5 dog breeds personally curated by PetGo. 
            </p>
            <p className="text-center text-gray-800 leading-relaxed">
              Want to learn more about these breeds? 
              Visit the PetGo Pet Dictionary to explore full descriptions and traits!
            </p>
          </div>

          {matches.map((breed, index) => (
            <div key={breed.name} className="bg-white rounded-2xl shadow-xl p-6 mb-4 hover:shadow-2xl transition-all border border-yellow-600/20">
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden">
                    <img src={breed.image} alt={breed.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-3 -left-3 bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                    #{index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{breed.name}</h3>
                    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      {breed.matchScore}% Match
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{breed.description}</p>
                  <div className="w-full bg-yellow-100 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${breed.matchScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={restartSurvey}
            className="w-full mt-8 bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-700 text-white py-4 rounded-2xl font-semibold text-lg hover:from-yellow-800 hover:to-amber-800 transition-all shadow-xl"
          >
            Take Survey Again
          </button>
        </div>
      </div>
    );
  }

  const Icon = question.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-yellow-600/30">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-yellow-800">Question {currentQuestion + 1} of {surveyQuestions.length}</span>
              <span className="text-sm font-semibold text-gray-800">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-yellow-100 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-amber-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-3 rounded-2xl border border-yellow-600/20">
                <Icon className="w-8 h-8 text-yellow-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>
            </div>
            {question.multiple && (
              <p className="text-sm text-gray-800 mb-4">
                {question.maxSelections ? `Select up to ${question.maxSelections}` : 'Select all that apply'}
              </p>
            )}
          </div>

          <div className="space-y-3 mb-8">
            {question.options.map((option) => {
              const isSelected = question.multiple
                ? (answers[question.id] || []).includes(option.value)
                : answers[question.id] === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-700 text-white border-transparent shadow-lg transform scale-[1.02]'
                      : 'bg-white border-yellow-600/30 hover:border-yellow-600/60 hover:shadow-md text-gray-900'
                  }`}
                >
                  <span className="font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-6 py-3 bg-yellow-100 text-yellow-900 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-200 transition-all border border-yellow-600/20"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
            <button
              onClick={nextQuestion}
              disabled={!isAnswered()}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-700 text-white py-3 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-yellow-800 hover:to-amber-800 transition-all shadow-lg"
            >
              {currentQuestion === surveyQuestions.length - 1 ? 'See My Matches' : 'Next Question'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}