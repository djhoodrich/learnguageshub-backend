function pickByLevel(level, count) {
  return vocabulary
    .filter(v => v.level === level)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export const generateWordMatch = (level) => {
    const vocabulary = {
        "A1": [
            { de: "Haus", en: "House" },
            { de: "Brot", en: "Bread" },
            { de: "Wasser", en: "Water" }
        ],
        "B1": [
            { de: "Entscheidung", en: "Decision" },
            { de: "Erfahrung", en: "Experience" }
        ]
    };

    return {
        gameType: "word-match",
        level: level,
        data: vocabulary[level] || vocabulary["A1"]
    };
};

export const generateSpeedQuiz = (level) => {
    return {
        gameType: "speed-quiz",
        level: level,
        questions: [
            { question: "What is 'Apple' in German?", answer: "Apfel" }
        ]
    };
};

export function generateArticleGame(level) {
  const word = pickByLevel(level, 1)[0];

  return {
    type: "ARTICLE",
    word: word.german,
    options: ["der", "die", "das"],
    answer: word.article
  };
}

export function generateListening(level) {
  const word = pickByLevel(level, 1)[0];

  return {
    type: "LISTENING",
    text: word.german,
    options: [
      word.english,
      "Chair",
      "Window",
      "Water"
    ].sort(() => Math.random() - 0.5),
    answer: word.english
  };
}