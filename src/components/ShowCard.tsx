import React, { useState } from 'react';
import type { Show } from '../types';
import { AnimatePresence, motion } from 'framer-motion';

interface ShowCardProps {
  show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
  const [prediction, setPrediction] = useState<number>(0);
  const [isPredicted, setIsPredicted] = useState<boolean>(false);

  const handlePredictionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrediction(Number(e.target.value) * 2.5);
  };

  const handleValidatePrediction = () => {
    setIsPredicted(true);
  };

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden">
      <img
        src={show.imageUrl}
        alt={show.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-purple-400">{show.channel}</span>
          <div className="flex items-center text-gray-400 text-sm">
            <span>
              {new Date(show.datetime).toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-100 mb-2">{show.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{show.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-purple-400">Audience prédite</span>
          <span className="text-sm text-gray-400">{prediction}M</span>
        </div>
        <div className="relative mb-4">
          <input
            type="range"
            min="0"
            max="4"
            step="0.1"
            value={prediction / 2.5}
            onChange={handlePredictionChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none"
            disabled={isPredicted}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-2 bg-purple-500 rounded-lg" style={{ width: `${(prediction / 10) * 100}%` }} />
          </div>
        </div>
        <div className="flex justify-between text-gray-400 text-sm mb-4">
          <span>0M</span>
          <span>2.5M</span>
          <span>5M</span>
          <span>7.5M</span>
          <span>10M</span>
        </div>
        <button
          onClick={handleValidatePrediction}
          className={`w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ${
            isPredicted ? 'bg-green-500 hover:bg-green-500 cursor-not-allowed' : ''
          }`}
          disabled={isPredicted}
        >
          {isPredicted ? (
            <AnimatePresence>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                Pronostic validé
              </motion.span>
            </AnimatePresence>
          ) : (
            'Pronostiquer'
          )}
        </button>
      </div>
    </div>
  );
}
