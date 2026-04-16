// utils/chatbotLogic.js
// Pure function — no side effects, no imports.
// Takes a user's raw input string and the full services array.
// Returns the best-matching service object, or null if no match.

/**
 * @param {string} input — raw text from the chatbot input
 * @param {Array}  services — array from services.json
 * @returns {object|null} matched service or null
 */
export function matchService(input, services) {
  if (!input || !services?.length) return null;

  const query = input.toLowerCase().trim();

  // Score each service by how many of its keywords appear in the query
  const scored = services.map((service) => {
    const hits = service.keywords.filter((kw) =>
      query.includes(kw.toLowerCase())
    );
    return { service, score: hits.length };
  });

  // Pick the highest-scoring service
  const best = scored.reduce((a, b) => (b.score > a.score ? b : a));

  // Only return a match if at least one keyword was found
  return best.score > 0 ? best.service : null;
}
