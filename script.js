// ===== STAR BACKGROUND =====
function createStars() {
  const starCount = Math.min(50, window.innerWidth < 768 ? 25 : 50);
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `
      position: fixed;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3});
      border-radius: 50%;
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 100}vh;
      animation: twinkle ${Math.random() * 3 + 2}s infinite;
      animation-delay: ${Math.random() * 3}s;
      pointer-events: none;
      z-index: 0;
    `;
    document.body.appendChild(star);
  }
}

// Add twinkle keyframe dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
`;
document.head.appendChild(style);

createStars();

// ===== LOADING SCREEN =====
window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    loader.classList.add('loader-hidden');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 500);
  }, 2500);
});

if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

// ===== TYPING ANIMATION =====
const texts = [
  "Student",
  "AI Enthusiast",
  "Game Developer",
  "Python Coder",
  "Web Developer",
  "Future Engineer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

setTimeout(type, 3000);

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

function closeMobileMenu() {
  navToggle.classList.remove('active');
  navLinks.classList.remove('active');
}

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinkItems.forEach(function(link) {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 760) {
    closeMobileMenu();
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinkItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal-section').forEach(section => {
  revealObserver.observe(section);
});

// ===== GLOWING CURSOR =====
const cursorGlow = document.getElementById('cursor-glow');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

if (!window.matchMedia('(pointer: coarse)').matches) {
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursorGlow.style.left = cursorX + 'px';
    cursorGlow.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Make glow bigger on interactive elements
  document.querySelectorAll('a, button, .magnetic-btn, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', function() {
      cursorGlow.style.width = '500px';
      cursorGlow.style.height = '500px';
      cursorGlow.style.background = `radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(0, 212, 255, 0.05) 40%, transparent 70%)`;
    });

    el.addEventListener('mouseleave', function() {
      cursorGlow.style.width = '400px';
      cursorGlow.style.height = '400px';
      cursorGlow.style.background = `radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, rgba(0, 212, 255, 0.03) 40%, transparent 70%)`;
    });
  });
} else {
  cursorGlow.style.display = 'none';
}

// ===== MAGNETIC BUTTONS =====
if (!window.matchMedia('(pointer: coarse)').matches) {
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener('mouseleave', function() {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ===== SKILL BARS ANIMATION =====
const skillObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const targetWidth = fill.getAttribute('data-width');
      setTimeout(function() {
        fill.style.width = targetWidth + '%';
      }, 300);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-fill').forEach(fill => skillObserver.observe(fill));

// ===== CR7 SECTION =====
const cr7Section = document.getElementById('cr7');
const cr7Button = document.getElementById('cr7-btn');
const cr7Quote = document.getElementById('cr7-quote');
const cr7Note = document.querySelector('.cr7-note');

const cr7Quotes = [
  '"Talent without work is nothing." - CR7',
  '"I\'m not a perfectionist, but I like to feel that things are done well."',
  '"Your love makes me strong. Your hate makes me unstoppable."',
  '"Dreams are not what you see in your sleep. Dreams are things which do not let you sleep."',
  '"I don\'t need to prove anything to anyone - I only need to prove it to myself."',
  '"Hard work beats talent when talent doesn\'t work hard."',
  '"Discipline turns dreams into reality."',
  '"Talent starts the journey. Consistency builds the legacy."',
  '"Train your mind like a champion, code like a builder."',
  '"Confidence, hard work, and focus."',
  '"SIUUUU! 🔥"'
];

let cr7QuoteIndex = 0;

if (cr7Button && cr7Quote && cr7Section) {
  cr7Button.addEventListener('click', function() {
    if (cr7Note) cr7Note.style.display = 'none';

    cr7Quote.classList.add('hidden');

    setTimeout(function() {
      cr7Quote.textContent = cr7Quotes[cr7QuoteIndex];
      cr7Quote.classList.remove('hidden');
      cr7QuoteIndex = (cr7QuoteIndex + 1) % cr7Quotes.length;
    }, 350);

    cr7Section.classList.remove('siuuu-active');
    setTimeout(function() {
      cr7Section.classList.add('siuuu-active');
    }, 10);
  });
}

// ===== JARVIS AI DEMO =====
const jarvisForm = document.getElementById('jarvis-form');
const jarvisInput = document.getElementById('jarvis-input');
const jarvisChat = document.getElementById('jarvis-chat');
const jarvisVoiceButton = document.getElementById('jarvis-voice');

let jarvisVoiceEnabled = true;
let jarvisVoiceUnlocked = false;
let jarvisVoices = [];
let jarvisLanguage = 'en';
let jarvisWikipediaLanguage = 'en';
let jarvisCurrentSpeech = null;

const jarvisLanguageSettings = {
  en: {
    name: 'English',
    wikipedia: 'en',
    locale: 'en-US',
    voices: ['en-US', 'en-IN', 'en-GB', 'en'],
    greeting: "Hello! Welcome to Abdur's AI Assistant. How can I assist you today?",
    thinking: 'Searching smart sources...',
    fallback: 'I don\'t have information about that yet, but I\'m learning!',
    wikiEmpty: 'I found the topic, but there\'s no summary available.',
    wikiError: 'I cannot connect to Wikipedia right now. Please check your internet.',
    identifyError: 'I could not identify that clearly.',
    leaderMissing: function(roleName, countryName) {
      return 'I could not find the current ' + roleName + ' of ' + countryName + '.';
    },
    identity: 'I am JARVIS, your personal AI assistant. Created by Abdur Rajjak, a developer and AI enthusiast. How can I help you today?',
    morning: "Good morning! Welcome to Abdur's AI Assistant. How can I assist you?",
    afternoon: "Good afternoon! Welcome to Abdur's AI Assistant. How can I assist you?",
    evening: "Good evening! Welcome to Abdur's AI Assistant. How can I assist you?",
    night: 'Good night! Rest well and see you tomorrow.',
    hello: "Hello! Welcome to Abdur's AI Assistant. How can I assist you?",
    ready: "Yes Boss, I'm here. How can I assist you today?",
    datePrefix: 'Today is ',
    timePrefix: 'The current time is ',
    answerPrefix: 'The answer is ',
    divideByZero: 'Cannot divide by zero.',
    abdur: 'Abdur is a student from West Bengal, beginner web developer, AI enthusiast, and programmer. He created me!',
    leaderReply: function(roleName, countryName, personName, details) {
      return 'The current ' + roleName + ' of ' + countryName + ' is ' + personName + '. ' + details;
    }
  }
};

const jarvisRoleNames = {
  en: {
    primeMinister: 'Prime Minister',
    chiefMinister: 'Chief Minister',
    president: 'President'
  }
};

function loadJarvisVoices() {
  if (!('speechSynthesis' in window)) return;
  jarvisVoices = window.speechSynthesis.getVoices();
}

loadJarvisVoices();
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadJarvisVoices;
}

function getJarvisLanguageConfig() {
  return jarvisLanguageSettings[jarvisLanguage] || jarvisLanguageSettings.en;
}

function speakJarvis(text) {
  if (!text || !jarvisVoiceEnabled) return;

  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    if (jarvisVoiceButton) jarvisVoiceButton.textContent = 'NO VOICE';
    return;
  }

  const speech = new SpeechSynthesisUtterance(text);
  loadJarvisVoices();
  speech.voice = jarvisVoices.find(function(voice) {
    return voice.lang && voice.lang.toLowerCase().startsWith('en');
  }) || jarvisVoices[0] || null;
  speech.lang = speech.voice ? speech.voice.lang : 'en-US';
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  speech.onstart = function() {
    if (jarvisVoiceButton) jarvisVoiceButton.textContent = 'SPEAKING...';
  };

  speech.onend = function() {
    setJarvisVoiceButton();
  };

  speech.onerror = function() {
    if (jarvisVoiceButton) jarvisVoiceButton.textContent = 'VOICE ERROR';
    setTimeout(setJarvisVoiceButton, 1200);
  };

  jarvisCurrentSpeech = speech;
  window.speechSynthesis.cancel();

  setTimeout(function() {
    window.speechSynthesis.speak(jarvisCurrentSpeech);
  }, 100);
}

window.testJarvisVoiceFromHtml = function() {
  jarvisVoiceEnabled = true;
  if (jarvisVoiceButton) jarvisVoiceButton.textContent = 'TESTING...';
  unlockJarvisVoice();
  speakJarvis('Voice activated. Hello!');
};

window.submitJarvisFromHtml = function(event) {
  if (event) event.preventDefault();
  jarvisVoiceEnabled = true;
  setJarvisVoiceButton();
  unlockJarvisVoice();
  handleJarvisQuestion(jarvisInput.value.trim());
  return false;
};

function unlockJarvisVoice() {
  if (jarvisVoiceUnlocked || !('speechSynthesis' in window)) return;
  window.speechSynthesis.resume();
  jarvisVoiceUnlocked = true;
}

function setJarvisVoiceButton() {
  if (!jarvisVoiceButton) return;
  jarvisVoiceButton.textContent = jarvisVoiceEnabled ? 'VOICE ON' : 'VOICE OFF';
  jarvisVoiceButton.classList.toggle('active', jarvisVoiceEnabled);
}

function addJarvisMessage(text, sender) {
  const message = document.createElement('div');
  message.className = 'jarvis-message ' + sender;
  message.textContent = text;
  jarvisChat.appendChild(message);
  jarvisChat.scrollTop = jarvisChat.scrollHeight;
  return message;
}

function showJarvisReply(text, delay) {
  delay = delay || 400;
  if (delay === 0) {
    addJarvisMessage(text, 'bot');
    speakJarvis(text);
    return;
  }
  setTimeout(function() {
    addJarvisMessage(text, 'bot');
    speakJarvis(text);
  }, delay);
}

function getJarvisReply(question) {
  const cleanQuestion = question.toLowerCase().trim();
  const config = getJarvisLanguageConfig();

  const asksIdentity = /who are you|what are you|your name|tumi ke|ke tumi/.test(cleanQuestion);
  if (asksIdentity) return config.identity;

  if (/^good morning/.test(cleanQuestion)) return config.morning;
  if (/^good afternoon/.test(cleanQuestion)) return config.afternoon;
  if (/^good evening/.test(cleanQuestion)) return config.evening;
  if (/^good night/.test(cleanQuestion)) return config.night;
  if (/^(hello|hii|hey)/.test(cleanQuestion)) return config.hello;
  if (/^jarvis/.test(cleanQuestion)) return config.ready;

  if (/date|today|day|tarikh/.test(cleanQuestion)) {
    const now = new Date();
    return config.datePrefix + now.toLocaleDateString(config.locale, {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }) + '.';
  }

  if (/time|somoy/.test(cleanQuestion)) {
    const now = new Date();
    return config.timePrefix + now.toLocaleTimeString(config.locale, {
      hour: 'numeric', minute: '2-digit'
    }) + '.';
  }

  if (/abdur/.test(cleanQuestion)) return config.abdur;

  return null;
}

function calculateBasicMath(question) {
  let expression = question
    .toLowerCase()
    .replace(/what is|calculate|solve|answer|equals|equal to|please|sir|jarvis/gi, '')
    .replace(/plus/g, '+')
    .replace(/minus/g, '-')
    .replace(/times|multiplied by|multiply by|into|x/g, '*')
    .replace(/divided by|divide by|over/g, '/')
    .replace(/[?=]/g, '')
    .trim();

  const percentMatch = expression.match(/(-?\d+(\.\d+)?)\s*(percent|%)\s*of\s*(-?\d+(\.\d+)?)/);
  if (percentMatch) {
    return (Number(percentMatch[1]) / 100) * Number(percentMatch[4]);
  }

  if (!/[0-9]/.test(expression) || /[^0-9+\-*/().\s]/.test(expression)) {
    return null;
  }

  try {
    const result = Function('"use strict"; return (' + expression + ')')();
    if (!Number.isFinite(result)) return null;
    return Math.round(result * 100000000) / 100000000;
  } catch (e) {
    return null;
  }
}

function getMathReply(question) {
  const result = calculateBasicMath(question);
  const config = getJarvisLanguageConfig();
  if (result === null) return null;
  if (result === 'divide-by-zero') return config.divideByZero;
  return config.answerPrefix + result + '.';
}

function cleanWikipediaQuestion(question) {
  return question
    .replace(/[?!.]/g, '')
    .replace(/(who is|what is|what are|tell me about|search|wikipedia|define|about)/gi, '')
    .trim();
}

async function searchWikidataEntity(searchText) {
  try {
    const url = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&origin=*&language=en&limit=1&search=' + encodeURIComponent(searchText);
    const response = await fetch(url);
    const data = await response.json();
    return data.search && data.search[0];
  } catch (e) {
    return null;
  }
}

async function getWikipediaSummaryByTitle(title) {
  try {
    const summaryUrl = 'https://' + jarvisWikipediaLanguage + '.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title);
    const summaryResponse = await fetch(summaryUrl);
    const summaryData = await summaryResponse.json();
    return summaryData.extract || '';
  } catch (e) {
    return '';
  }
}

function getLeaderQuestion(question) {
  const cleanQuestion = question.toLowerCase().replace(/[?!.]/g, ' ').trim();
  let role = '';

  if (/chief minister|\bcm\b/.test(cleanQuestion)) {
    role = 'chiefMinister';
  } else if (/prime minister|\bpm\b/.test(cleanQuestion)) {
    role = 'primeMinister';
  } else if (/president/.test(cleanQuestion)) {
    role = 'president';
  } else {
    return null;
  }

  // Extract country/state name by removing role keywords and common words
  let countryText = cleanQuestion
    .replace(/\b(current|present|now|today|who is|who's|who|what is|tell me|the|of|country|state|prime minister|chief minister|president|pm|cm|minister)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Comprehensive aliases for countries and Indian states
  const countryAliases = {
    // Countries
    'united states': 'United States', 'america': 'United States', 'american': 'United States',
    'usa': 'United States', 'us': 'United States',
    'united kingdom': 'United Kingdom', 'britain': 'United Kingdom', 'british': 'United Kingdom',
    'uk': 'United Kingdom', 'england': 'United Kingdom',
    'india': 'India', 'indian': 'India', 'bharat': 'India', 'hindustan': 'India',
    'bangladesh': 'Bangladesh', 'bangladeshi': 'Bangladesh', 'bd': 'Bangladesh',
    'pakistan': 'Pakistan', 'pakistani': 'Pakistan',
    'china': 'China', 'chinese': 'China',
    'japan': 'Japan', 'japanese': 'Japan',
    'russia': 'Russia', 'russian': 'Russia',
    'france': 'France', 'french': 'France',
    'germany': 'Germany', 'german': 'Germany',
    'italy': 'Italy', 'italian': 'Italy',
    'canada': 'Canada', 'canadian': 'Canada',
    'australia': 'Australia', 'australian': 'Australia',
    'brazil': 'Brazil', 'brazilian': 'Brazil',
    'nepal': 'Nepal', 'nepali': 'Nepal',
    'sri lanka': 'Sri Lanka', 'sri_lanka': 'Sri Lanka', 'srilanka': 'Sri Lanka',

    // Indian States
    'west bengal': 'West Bengal', 'west_bengal': 'West Bengal', 'wb': 'West Bengal',
    'bengal': 'West Bengal', 'bangla': 'West Bengal', 'kolkata': 'West Bengal',
    'uttar pradesh': 'Uttar Pradesh', 'uttar_pradesh': 'Uttar Pradesh', 'up': 'Uttar Pradesh',
    'madhya pradesh': 'Madhya Pradesh', 'madhya_pradesh': 'Madhya Pradesh', 'mp': 'Madhya Pradesh',
    'andhra pradesh': 'Andhra Pradesh', 'andhra_pradesh': 'Andhra Pradesh', 'ap': 'Andhra Pradesh',
    'bihar': 'Bihar',
    'chhattisgarh': 'Chhattisgarh',
    'goa': 'Goa',
    'gujarat': 'Gujarat',
    'haryana': 'Haryana',
    'himachal pradesh': 'Himachal Pradesh', 'himachal_pradesh': 'Himachal Pradesh',
    'jharkhand': 'Jharkhand',
    'karnataka': 'Karnataka', 'bangalore': 'Karnataka', 'bengaluru': 'Karnataka',
    'kerala': 'Kerala',
    'maharashtra': 'Maharashtra', 'mumbai': 'Maharashtra', 'pune': 'Maharashtra',
    'manipur': 'Manipur',
    'meghalaya': 'Meghalaya',
    'mizoram': 'Mizoram',
    'nagaland': 'Nagaland',
    'odisha': 'Odisha', 'orissa': 'Odisha',
    'punjab': 'Punjab',
    'rajasthan': 'Rajasthan',
    'sikkim': 'Sikkim',
    'tamil nadu': 'Tamil Nadu', 'tamil_nadu': 'Tamil Nadu', 'tamilnadu': 'Tamil Nadu',
    'telangana': 'Telangana', 'hyderabad': 'Telangana',
    'tripura': 'Tripura',
    'uttarakhand': 'Uttarakhand',
    'delhi': 'Delhi', 'new delhi': 'Delhi',
    'jammu and kashmir': 'Jammu and Kashmir', 'jammu_kashmir': 'Jammu and Kashmir',
    'puducherry': 'Puducherry', 'pondicherry': 'Puducherry'
  };

  // Try exact match first, then normalized
  let normalized = countryText.replace(/\s+/g, '_').toLowerCase();
  let lookup = normalized;

  // Remove trailing underscores if any
  lookup = lookup.replace(/^_+|_+$/g, '');

  let resolved = countryAliases[lookup] || countryAliases[countryText.toLowerCase()];

  if (!resolved && countryText.length > 0) {
    // Try partial matching for longer names
    for (let [key, value] of Object.entries(countryAliases)) {
      if (countryText.toLowerCase().includes(key.replace(/_/g, ' '))) {
        resolved = value;
        break;
      }
    }
  }

  countryText = resolved || countryText;
  if (!countryText || countryText.length < 2) return null;

  return { role, countryText };
}

async function getLeaderReply(question) {
  const leaderQuestion = getLeaderQuestion(question);
  if (!leaderQuestion) return null;

  const country = await searchWikidataEntity(leaderQuestion.countryText);
  const config = getJarvisLanguageConfig();
  if (!country) return config.identifyError;

  const roleName = (jarvisRoleNames[jarvisLanguage] || jarvisRoleNames.en)[leaderQuestion.role];

  // P6 = head of government (Prime Minister, Chief Minister)
  // P35 = head of state (President)
  const property = leaderQuestion.role === 'president' ? 'P35' : 'P6';

  // CORRECTED QUERY: Get CURRENT office holder using p:/ps:/pq: pattern
  // p:P6 connects entity to statement
  // ps:P6 gets the value (person) from statement
  // pq:P582 is end date qualifier - FILTER NOT EXISTS ensures currently in office
  const query = `SELECT ?person ?personLabel WHERE {
    wd:${country.id} p:${property} ?statement .
    ?statement ps:${property} ?person .
    FILTER NOT EXISTS { ?statement pq:P582 ?end }
    SERVICE wikibase:label { bd:serviceParam wikibase:language "${jarvisWikipediaLanguage},en". }
  }
  LIMIT 1`;

  try {
    const url = 'https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(query);
    const response = await fetch(url);

    if (!response.ok) {
      console.warn('Wikidata SPARQL error:', response.status);
      return null; // Let the caller handle the fallback message
    }

    const data = await response.json();
    const result = data.results && data.results.bindings && data.results.bindings[0];

    if (!result || !result.personLabel) {
      console.warn('No current leader found for', country.label);
      return null; // No current holder found
    }

    const personName = result.personLabel.value;

    // Try to get a brief description from Wikipedia
    let details = '';
    try {
      details = await getWikipediaSummaryByTitle(personName);
      // Limit details to first sentence to keep response concise
      if (details) {
        const firstSentence = details.split(/[.!?]/).filter(s => s.trim().length > 0)[0];
        if (firstSentence) details = firstSentence.trim() + '.';
      }
    } catch (e) {
      details = '';
    }

    return config.leaderReply(roleName, country.label, personName, details);
  } catch (e) {
    console.error('Leader query error:', e);
    return null; // Return null so caller shows proper fallback
  }
}

async function getWikipediaReply(question) {
  const searchText = cleanWikipediaQuestion(question);
  const config = getJarvisLanguageConfig();
  if (!searchText) return config.fallback;

  try {
    const searchUrl = 'https://' + jarvisWikipediaLanguage + '.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=' + encodeURIComponent(searchText);
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    const firstResult = searchData.query && searchData.query.search && searchData.query.search[0];

    if (!firstResult) return config.fallback;

    const summaryText = await getWikipediaSummaryByTitle(firstResult.title);
    if (!summaryText) return config.wikiEmpty;

    return summaryText;
  } catch (error) {
    return config.wikiError;
  }
}

async function handleJarvisQuestion(question) {
  if (!question) return;

  addJarvisMessage(question, 'user');
  jarvisInput.value = '';

  const localReply = getJarvisReply(question);
  if (localReply) {
    showJarvisReply(localReply, 0);
    return;
  }

  const mathReply = getMathReply(question);
  if (mathReply) {
    showJarvisReply(mathReply, 0);
    return;
  }

  // Check if this is a leader question BEFORE showing thinking
  const leaderQuestion = getLeaderQuestion(question);

  const thinkingMessage = addJarvisMessage(getJarvisLanguageConfig().thinking, 'bot');

  try {
    if (leaderQuestion) {
      // This is a leader question - try to get answer from Wikidata
      const leaderReply = await getLeaderReply(question);
      if (leaderReply) {
        thinkingMessage.textContent = leaderReply;
        jarvisChat.scrollTop = jarvisChat.scrollHeight;
        speakJarvis(leaderReply);
        return;
      }
      // If leader query fails, don't fall back to Wikipedia (which returns office article)
      // Instead return a helpful message
      const config = getJarvisLanguageConfig();
      const roleName = (jarvisRoleNames[jarvisLanguage] || jarvisRoleNames.en)[leaderQuestion.role];
      const fallbackMsg = 'I apologize, but I could not retrieve the current ' + roleName + ' information from my knowledge base right now. Please try again later or check official government sources.';
      thinkingMessage.textContent = fallbackMsg;
      jarvisChat.scrollTop = jarvisChat.scrollHeight;
      speakJarvis(fallbackMsg);
      return;
    }

    // Not a leader question - safe to use Wikipedia
    const wikiReply = await getWikipediaReply(question);
    thinkingMessage.textContent = wikiReply;
    jarvisChat.scrollTop = jarvisChat.scrollHeight;
    speakJarvis(wikiReply);
  } catch (e) {
    thinkingMessage.textContent = 'Sorry, I encountered an error. Please try again.';
  }
}

if (jarvisForm) {
  jarvisForm.addEventListener('submit', function(e) {
    e.preventDefault();
    jarvisVoiceEnabled = true;
    setJarvisVoiceButton();
    unlockJarvisVoice();
    handleJarvisQuestion(jarvisInput.value.trim());
  });
}

if (jarvisVoiceButton) {
  setJarvisVoiceButton();
  jarvisVoiceButton.addEventListener('click', function() {
    jarvisVoiceEnabled = true;
    unlockJarvisVoice();
    setJarvisVoiceButton();
    speakJarvis('Voice activated.');
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('name');
const contactMessage = document.getElementById('message');
const contactButton = contactForm ? contactForm.querySelector('.btn-send') : null;
const contactButtonText = document.getElementById('btn-text');
const formSuccess = document.getElementById('form-success');
const formError = document.getElementById('form-error');

function setContactFeedback(type, message) {
  if (formSuccess) formSuccess.style.display = 'none';
  if (formError) formError.style.display = 'none';

  if (type === 'success' && formSuccess) {
    formSuccess.textContent = message;
    formSuccess.style.display = 'block';
  }
  if (type === 'error' && formError) {
    formError.textContent = message;
    formError.style.display = 'block';
  }
}

function setContactLoading(isLoading) {
  if (!contactButton) return;
  contactButton.disabled = isLoading;
  contactButton.classList.toggle('loading', isLoading);
  if (contactButtonText) {
    contactButtonText.textContent = isLoading ? 'Sending...' : 'Send Message';
  }
}

function validateContactForm() {
  const name = contactName ? contactName.value.trim() : '';
  const message = contactMessage ? contactMessage.value.trim() : '';

  if (contactName) contactName.classList.remove('input-error');
  if (contactMessage) contactMessage.classList.remove('input-error');

  if (name.length < 2) {
    if (contactName) {
      contactName.classList.add('input-error');
      contactName.focus();
    }
    setContactFeedback('error', 'Please enter your name (at least 2 characters).');
    return false;
  }

  if (message.length < 5) {
    if (contactMessage) {
      contactMessage.classList.add('input-error');
      contactMessage.focus();
    }
    setContactFeedback('error', 'Please write a little more in your message (at least 5 characters).');
    return false;
  }

  return true;
}

if (contactForm && contactButton && formSuccess && formError) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    if (!validateContactForm()) return;

    setContactFeedback('', '');
    setContactLoading(true);

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) throw new Error('Form submit failed');

      contactForm.reset();
      setContactFeedback('success', "✅ Message sent successfully! I'll reply soon.");
    } catch (error) {
      setContactFeedback('error', '❌ Something went wrong. Please check your internet and try again.');
    } finally {
      setContactLoading(false);
    }
  });

  [contactName, contactMessage].forEach(function(field) {
    if (field) {
      field.addEventListener('input', function() {
        field.classList.remove('input-error');
        if (formError) formError.style.display = 'none';
      });
    }
  });
}

// ===== LIGHTBOX =====
window.openLightbox = function(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== PERFORMANCE: LAZY LOAD IMAGES =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== CONSOLE EASTER EGG =====
console.log('%c🔥 AR7 PORTFOLIO v2.0', 'color: #00d4ff; font-size: 24px; font-weight: bold; font-family: Orbitron;');
console.log('%cBuilt by Abdur Rajjak', 'color: #ffd166; font-size: 14px;');
console.log('%c"Still learning, still improving — just getting started 🚀"', 'color: #00ff88; font-style: italic;');