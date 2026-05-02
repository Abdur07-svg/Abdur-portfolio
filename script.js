  
    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.opacity = Math.random() * 0.7 + 0.3;
      document.body.appendChild(star);
    }

  window.addEventListener('load', function() {
    setTimeout(function() {
      const loader = document.getElementById('loader');
      loader.classList.add('loader-hidden');
      setTimeout(function() {
        loader.style.display = 'none';
      }, 500);
    }, 3000);
  });


  const texts = [
    "Student",
    "AI Enthusiast", 
    "Game Developer",
    "Python Coder",
    
    
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

    let speed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentText.length) {
      speed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  // Loading screen শেষ হওয়ার পর শুরু হবে
  setTimeout(type, 3500);


  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function closeMobileMenu() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  }

  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(function(link) {
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


  const jarvisForm = document.getElementById('jarvis-form');
  const jarvisInput = document.getElementById('jarvis-input');
  const jarvisChat = document.getElementById('jarvis-chat');
  const jarvisVoiceButton = document.getElementById('jarvis-voice');
  const jarvisQuickButtons = document.querySelectorAll('[data-jarvis-question]');
  let jarvisVoiceEnabled = true;
  let jarvisVoiceUnlocked = false;
  let jarvisVoices = [];
  let selectedLanguage = null;
  let selectedVoice = null;
  let langSelectionDone = false;;

  function loadJarvisVoices() {
    if (!('speechSynthesis' in window)) return;
    jarvisVoices = window.speechSynthesis.getVoices();
  }

  loadJarvisVoices();

  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = loadJarvisVoices;
  }

  function addJarvisMessage(text, sender) {
    const message = document.createElement('div');
    message.className = 'jarvis-message ' + sender;
    message.textContent = text;
    jarvisChat.appendChild(message);
    jarvisChat.scrollTop = jarvisChat.scrollHeight;
    return message;
  }

  function speakJarvis(text) {
    if (!jarvisVoiceEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 0.95;
    speech.pitch = 0.85;
    speech.volume = 1;

  if (selectedVoice) {
    speech.voice = selectedVoice;
    speech.lang = selectedVoice.lang;
  } else {
    speech.lang = selectedLanguage ? selectedLanguage.code : 'en-US';
    const fallback = jarvisVoices.find(v => v.lang.startsWith('en')) || jarvisVoices[0];
    if (fallback) speech.voice = fallback;
  }

  window.speechSynthesis.speak(speech);
}

  function unlockJarvisVoice() {
    if (jarvisVoiceUnlocked || !('speechSynthesis' in window)) return;

    window.speechSynthesis.resume();

    const unlockSpeech = new SpeechSynthesisUtterance('Ready');
    unlockSpeech.lang = 'en-US';
    unlockSpeech.volume = 0.01;
    unlockSpeech.rate = 1;
    window.speechSynthesis.speak(unlockSpeech);
    jarvisVoiceUnlocked = true;
  }

  function setJarvisVoiceButton() {
    jarvisVoiceButton.textContent = jarvisVoiceEnabled ? 'VOICE ON' : 'VOICE OFF';
    jarvisVoiceButton.classList.toggle('active', jarvisVoiceEnabled);
  }

  function showJarvisReply(text, delay = 400) {
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
    const asksIdentity =
      cleanQuestion.includes('who are you') ||
      cleanQuestion.includes('what are you') ||
      cleanQuestion.includes('your name') ||
      cleanQuestion.includes('tumi ke') ||
      cleanQuestion.includes('ke tumi');

    if (asksIdentity) {
      return 'I am JARVIS, today your personal AI assistant. Created by Abdur, He is a developer, AI enthusiast, and programmer. How can I assist you today sir?';
    }

    if (cleanQuestion === 'good morning' || cleanQuestion.startsWith('good morning ')) {
      return "Good morning! Welcome to Abdur's AI Assistant. How can I assist you today?";
    }

    if (cleanQuestion === 'good afternoon' || cleanQuestion.startsWith('good afternoon ')) {
      return "Good afternoon! Welcome to Abdur's AI Assistant. How can I assist you today?";
    }

    if (cleanQuestion === 'good evening' || cleanQuestion.startsWith('good evening ')) {
      return "Good evening! Welcome to Abdur's AI Assistant. How can I assist you today?";
    }

    if (cleanQuestion === 'good night' || cleanQuestion.startsWith('good night ')) {
      return "Good night sir! Bye, see you tomorrow.";
    }

    if (
      cleanQuestion === 'hello' ||
      cleanQuestion === 'Hello' ||
      cleanQuestion === 'hii' ||
      cleanQuestion === 'Hii' ||
      cleanQuestion === 'hey' ||
      cleanQuestion === 'Hey' ||
      cleanQuestion.startsWith('hello ') ||
      cleanQuestion.startsWith('Hello ') ||
      cleanQuestion.startsWith('hii ') ||
      cleanQuestion.startsWith('Hii ') ||
      cleanQuestion.startsWith('hey ') ||
      cleanQuestion.startsWith('Hey ')
    ) {
      return "Hello! Welcome to Abdur's AI Assistant. How can I assist you today?";
    }

    if (
      cleanQuestion.includes('date') ||
      cleanQuestion.includes('today') ||
      cleanQuestion.includes('day') ||
      cleanQuestion.includes('tarikh')
    ) {
      const now = new Date();
      return 'The current date is ' + now.toLocaleDateString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) + '.';
    }

    if (
      cleanQuestion.includes('time') ||
      cleanQuestion.includes('somoy')
    ) {
      const now = new Date();
      return 'The current time is ' + now.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
      }) + '.';
    }

    if (cleanQuestion.includes('abdur')) {
      return 'Abdur is a student, beginner web developer, AI enthusiast, and programmer—who builds real-world projects. And he created me, too.';
    }

    return null;
  }

  function cleanWikipediaQuestion(question) {
    return question
      .replace(/[?!.]/g, '')
      .replace(/\b(who is|what is|what are|tell me about|search|wikipedia|define|about)\b/gi, '')
      .trim();
  }

  function calculateBasicMath(question) {
    let expression = question
      .toLowerCase()
      .replace(/what is|calculate|solve|answer|equals|equal to|please|sir|jarvis/gi, '')
      .replace(/plus/g, '+')
      .replace(/minus/g, '-')
      .replace(/times|multiplied by|multiply by|into|x|×/g, '*')
      .replace(/divided by|divide by|over|÷/g, '/')
      .replace(/[?=]/g, '')
      .trim();

    const percentMatch = expression.match(/(-?\d+(\.\d+)?)\s*(percent|%)\s*of\s*(-?\d+(\.\d+)?)/);

    if (percentMatch) {
      return (Number(percentMatch[1]) / 100) * Number(percentMatch[4]);
    }

    if (!/[0-9]/.test(expression) || /[^0-9+\-*/().\s]/.test(expression)) {
      return null;
    }

    const tokens = expression.match(/\d+(\.\d+)?|[+\-*/()]/g);

    if (!tokens || tokens.length === 0) return null;

    let index = 0;

    function parseExpression() {
      let value = parseTerm();

      while (tokens[index] === '+' || tokens[index] === '-') {
        const operator = tokens[index++];
        const nextValue = parseTerm();
        value = operator === '+' ? value + nextValue : value - nextValue;
      }

      return value;
    }

    function parseTerm() {
      let value = parseFactor();

      while (tokens[index] === '*' || tokens[index] === '/') {
        const operator = tokens[index++];
        const nextValue = parseFactor();

        if (operator === '/' && nextValue === 0) {
          throw new Error('divide-by-zero');
        }

        value = operator === '*' ? value * nextValue : value / nextValue;
      }

      return value;
    }

    function parseFactor() {
      if (tokens[index] === '-') {
        index++;
        return -parseFactor();
      }

      if (tokens[index] === '(') {
        index++;
        const value = parseExpression();

        if (tokens[index] !== ')') {
          throw new Error('invalid-expression');
        }

        index++;
        return value;
      }

      const value = Number(tokens[index++]);

      if (Number.isNaN(value)) {
        throw new Error('invalid-expression');
      }

      return value;
    }

    try {
      const result = parseExpression();

      if (index !== tokens.length || !Number.isFinite(result)) {
        return null;
      }

      return Math.round(result * 100000000) / 100000000;
    } catch (error) {
      return error.message === 'divide-by-zero' ? 'divide-by-zero' : null;
    }
  }

  function getMathReply(question) {
    const result = calculateBasicMath(question);

    if (result === null) return null;

    if (result === 'divide-by-zero') {
      return 'The answer is undefined (division by zero).';
    }

    return 'The answer is ' + result + '.';
  }

  function getLeaderQuestion(question) {
    const cleanQuestion = question.toLowerCase().replace(/[?!.]/g, ' ').trim();
    let role = '';

    if (cleanQuestion.includes('chief minister') || /\bcm\b/.test(cleanQuestion)) {
      role = 'chiefMinister';
    } else if (cleanQuestion.includes('prime minister') || /\bpm\b/.test(cleanQuestion)) {
      role = 'primeMinister';
    } else if (cleanQuestion.includes('president')) {
      role = 'president';
    } else {
      return null;
    }

    let countryText = cleanQuestion
      .replace(/\b(current|present|now|today|who is|who's|what is|the|of|country|state|prime minister|chief minister|president|pm|cm)\b/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const countryAliases = {
      american: 'United States',
      usa: 'United States',
      us: 'United States',
      british: 'United Kingdom',
      uk: 'United Kingdom',
      indian: 'India',
      bangladeshi: 'Bangladesh',
      pakistani: 'Pakistan',
      chinese: 'China',
      japanese: 'Japan',
      russian: 'Russia',
      french: 'France',
      german: 'Germany',
      italian: 'Italy',
      canadian: 'Canada',
      australian: 'Australia',
      brazilian: 'Brazil',
      nepali: 'Nepal',
      sri_lankan: 'Sri Lanka',
      wb: 'West Bengal',
      west_bengal: 'West Bengal',
      up: 'Uttar Pradesh',
      uttar_pradesh: 'Uttar Pradesh',
      mp: 'Madhya Pradesh',
      madhya_pradesh: 'Madhya Pradesh',
      ap: 'Andhra Pradesh',
      andhra_pradesh: 'Andhra Pradesh',
      arunachal_pradesh: 'Arunachal Pradesh',
      assam: 'Assam',
      bihar: 'Bihar',
      chhattisgarh: 'Chhattisgarh',
      goa: 'Goa',
      gujarat: 'Gujarat',
      haryana: 'Haryana',
      himachal_pradesh: 'Himachal Pradesh',
      jharkhand: 'Jharkhand',
      karnataka: 'Karnataka',
      kerala: 'Kerala',
      maharashtra: 'Maharashtra',
      manipur: 'Manipur',
      meghalaya: 'Meghalaya',
      mizoram: 'Mizoram',
      nagaland: 'Nagaland',
      odisha: 'Odisha',
      orissa: 'Odisha',
      punjab: 'Punjab',
      rajasthan: 'Rajasthan',
      sikkim: 'Sikkim',
      tamil_nadu: 'Tamil Nadu',
      telangana: 'Telangana',
      tripura: 'Tripura',
      uttarakhand: 'Uttarakhand',
      delhi: 'Delhi',
      puducherry: 'Puducherry',
      pondicherry: 'Puducherry',
      jammu_kashmir: 'Jammu and Kashmir'
    };

    countryText = countryAliases[countryText.replace(/\s+/g, '_')] || countryAliases[countryText] || countryText;

    if (!countryText) return null;

    return { role, countryText };
  }

  async function searchWikidataEntity(searchText) {
    const url = 'https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&origin=*&language=en&limit=1&search=' + encodeURIComponent(searchText);
    const response = await fetch(url);
    const data = await response.json();
    return data.search && data.search[0];
  }

  async function getWikipediaSummaryByTitle(title) {
    const summaryUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title);
    const summaryResponse = await fetch(summaryUrl);
    const summaryData = await summaryResponse.json();
    return summaryData.extract || '';
  }

  async function getLeaderReply(question) {
    const leaderQuestion = getLeaderQuestion(question);

    if (!leaderQuestion) return null;

    const country = await searchWikidataEntity(leaderQuestion.countryText);

    if (!country) {
      return "Sir, I could not identify that country clearly.";
    }

    const property = leaderQuestion.role === 'president' ? 'wdt:P35' : 'wdt:P6';
    const roleName = leaderQuestion.role === 'primeMinister'
      ? 'prime minister'
      : leaderQuestion.role === 'chiefMinister'
        ? 'chief minister'
        : 'president';
    const query = `
      SELECT ?person ?personLabel ?article WHERE {
        wd:${country.id} ${property} ?person.
        OPTIONAL {
          ?article schema:about ?person;
                   schema:isPartOf <https://en.wikipedia.org/>.
        }
        SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
      }
      LIMIT 1
    `;
    const url = 'https://query.wikidata.org/sparql?format=json&query=' + encodeURIComponent(query);
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results && data.results.bindings && data.results.bindings[0];

    if (!result) {
      return "Sir,I could not find the current " + roleName + " of " + country.label + ".";
    }

    const personName = result.personLabel.value;
    let details = '';

    if (result.article) {
      const title = decodeURIComponent(result.article.value.split('/wiki/')[1]).replace(/_/g, ' ');
      details = await getWikipediaSummaryByTitle(title);
    } else {
      details = await getWikipediaReply(personName);
    }

    return 'The current ' + roleName + ' of ' + country.label + ' is ' + personName + '. ' + details;
  }

  async function getWikipediaReply(question) {
    const searchText = cleanWikipediaQuestion(question);

    if (!searchText) {
      return "The answer is undefined.";
    }

    try {
      const searchUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=1&srsearch=' + encodeURIComponent(searchText);
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();
      const firstResult = searchData.query && searchData.query.search && searchData.query.search[0];

      if (!firstResult) {
        return "The answer is undefined.";
      }

      const summaryText = await getWikipediaSummaryByTitle(firstResult.title);

      if (!summaryText) {
        return "Sir,I found the topic on Wikipedia, but there is no short summary available.";
      }

      return summaryText;
    } catch (error) {
      return "Sir,I cannot connect to Wikipedia right now. Please check your internet connection and try again.";
    }
  }

  async function handleJarvisQuestion(question) {
  if (!question) return;

  if (!langSelectionDone) {
    addJarvisMessage(question, 'user');
    const GEMINI_KEY = 'AIzaSyCdPLeeUirDFssLJcLuXW6r5EASyxFAu_4';

async function translateWithGemini(text, targetLanguage) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Translate the following text to ${targetLanguage}. Return ONLY the translated text, nothing else, no explanation:\n\n${text}`
            }]
          }]
        })
      }
    );
    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
  } catch (error) {
    return text;
  }
}
    showLanguageSelector();
    return;
  }

  addJarvisMessage(question, 'user');
  jarvisInput.value = '';

  const localReply = getJarvisReply(question);

  if (localReply) {
    // Local reply কে selected language এ translate করো
    if (selectedLanguage && selectedLanguage.code !== 'en-US') {
      const translated = await translateWithGemini(localReply, selectedLanguage.name);
      showJarvisReply(translated, 0);
    } else {
      showJarvisReply(localReply, 0);
    }
    return;
  }

  const mathReply = getMathReply(question);

  if (mathReply) {
    if (selectedLanguage && selectedLanguage.code !== 'en-US') {
      const translated = await translateWithGemini(mathReply, selectedLanguage.name);
      showJarvisReply(translated, 0);
    } else {
      showJarvisReply(mathReply, 0);
    }
    return;
  }

  const thinkingMessage = addJarvisMessage('Thinking...', 'bot');
  let leaderReply = null;

  try {
    leaderReply = await getLeaderReply(question);
  } catch (error) {
    leaderReply = null;
  }

  const finalReply = leaderReply || await getWikipediaReply(question);

  // Selected language এ translate করো
  if (selectedLanguage && selectedLanguage.code !== 'en-US') {
    const translated = await translateWithGemini(finalReply, selectedLanguage.name);
    thinkingMessage.textContent = translated;
    jarvisChat.scrollTop = jarvisChat.scrollHeight;
    speakJarvis(translated);
  } else {
    thinkingMessage.textContent = finalReply;
    jarvisChat.scrollTop = jarvisChat.scrollHeight;
    speakJarvis(finalReply);
  }
}

  if (jarvisForm) {
    jarvisForm.addEventListener('submit', function(e) {
      e.preventDefault();
      unlockJarvisVoice();
      handleJarvisQuestion(jarvisInput.value.trim());
    });
  }

  jarvisQuickButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const question = button.getAttribute('data-jarvis-question');
      unlockJarvisVoice();
      jarvisInput.value = question;
      handleJarvisQuestion(question);
    });
  });

  if (jarvisVoiceButton) {
    setJarvisVoiceButton();

    jarvisVoiceButton.addEventListener('click', function() {
      unlockJarvisVoice();
      jarvisVoiceEnabled = !jarvisVoiceEnabled;

      if (!jarvisVoiceEnabled && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      setJarvisVoiceButton();

      if (jarvisVoiceEnabled) {
        speakJarvis('Voice activate.');
      }
    });
  }


  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('name');
  const contactMessage = document.getElementById('message');
  const contactButton = contactForm ? contactForm.querySelector('.btn-send') : null;
  const contactButtonText = document.getElementById('btn-text');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');

  function setContactFeedback(type, message) {
    formSuccess.style.display = 'none';
    formError.style.display = 'none';

    if (type === 'success') {
      formSuccess.textContent = message;
      formSuccess.style.display = 'block';
    }

    if (type === 'error') {
      formError.textContent = message;
      formError.style.display = 'block';
    }
  }

  function setContactLoading(isLoading) {
    contactButton.disabled = isLoading;
    contactButton.classList.toggle('loading', isLoading);
    contactButtonText.textContent = isLoading ? 'Sending...' : 'Send Message ➤';
  }

  function validateContactForm() {
    const name = contactName.value.trim();
    const message = contactMessage.value.trim();

    contactName.classList.remove('input-error');
    contactMessage.classList.remove('input-error');

    if (name.length < 2) {
      contactName.classList.add('input-error');
      setContactFeedback('error', 'Please enter your name.');
      contactName.focus();
      return false;
    }

    if (message.length < 5) {
      contactMessage.classList.add('input-error');
      setContactFeedback('error', 'Please write a little more in your message.');
      contactMessage.focus();
      return false;
    }

    return true;
  }

  if (contactForm && contactButton && contactButtonText && formSuccess && formError) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      if (!validateContactForm()) return;

      setContactFeedback('', '');
      setContactLoading(true);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Form submit failed');
        }

        contactForm.reset();
        setContactFeedback('success', "Message sent successfully! I'll reply soon.");
      } catch (error) {
        setContactFeedback('error', 'Something went wrong. Please check your internet and try again.');
      } finally {
        setContactLoading(false);
      }
    });

    [contactName, contactMessage].forEach(function(field) {
      field.addEventListener('input', function() {
        field.classList.remove('input-error');
        formError.style.display = 'none';
      });
    });
  }


  const cursorGlow = document.getElementById('cursor-glow');

  document.addEventListener('mousemove', function(e) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });

  // Button এ hover করলে glow বড় হবে
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', function() {
      cursorGlow.style.width = '600px';
      cursorGlow.style.height = '600px';
      cursorGlow.style.background = `radial-gradient(
        circle,
        rgba(0, 212, 255, 0.15) 0%,
        rgba(0, 212, 255, 0.05) 40%,
        transparent 70%
      )`;
    });

    el.addEventListener('mouseleave', function() {
      cursorGlow.style.width = '400px';
      cursorGlow.style.height = '400px';
      cursorGlow.style.background = `radial-gradient(
        circle,
        rgba(0, 212, 255, 0.08) 0%,
        rgba(0, 212, 255, 0.03) 40%,
        transparent 70%
      )`;
    });
  });


  // Skill bars animate হবে যখন screen এ দেখা যাবে
  const skillFills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const targetWidth = fill.getAttribute('data-width');
        setTimeout(function() {
          fill.style.width = targetWidth + '%';
        }, 200);
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  skillFills.forEach(fill => observer.observe(fill));


  const cr7Section = document.getElementById('cr7');
  const cr7Button = document.getElementById('cr7-btn');
  const cr7Quote = document.getElementById('cr7-quote');
  const cr7Note = document.querySelector('.cr7-note');
  const cr7Quotes = [
  '"Talent without work is nothing." — CR7',
  '"I\'m not perfectionist, but I like to feel that things are done well."',
  '"Your love makes me strong. Your hate makes me unstoppable."',
  '"Dreams are not what you see in your sleep. Dreams are the things which do not let you sleep."',
  '"I don\'t need to prove anything to anyone — I only need to prove it to myself."',
  '"Hard work beats talent when talent doesn\'t work hard."',
  '"Discipline turns dreams into reality."',
  '"Talent starts the journey. Consistency builds the legacy."',
  '"Train your mind like a champion, code like a builder."',
  '"Confidence, hard work, and focus."',
  '"SIUUUU! 🔥"',
  ];
  let cr7QuoteIndex = 0;

  if (cr7Button && cr7Quote && cr7Section) {
    cr7Button.addEventListener('click', function() {
      if (cr7Note) {
        cr7Note.style.display = 'none';
      }

      cr7Quote.classList.remove('hidden');
      cr7Quote.textContent = cr7Quotes[cr7QuoteIndex];
      cr7QuoteIndex = (cr7QuoteIndex + 1) % cr7Quotes.length;
      cr7Section.classList.remove('siuuu-active');

      setTimeout(function() {
        cr7Section.classList.add('siuuu-active');
      }, 10);
    });
  }


  function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // ESC চাপলে বন্ধ হবে
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // ===== LANGUAGE SELECTION =====
const languages = {
  english: { code: 'en-US', name: 'English' },
  hindi:   { code: 'hi-IN', name: 'Hindi' },
  bengali: { code: 'bn-IN', name: 'Bengali' }
};

function showLanguageSelector() {
  const existing = document.getElementById('lang-selector-msg');
  if (existing) return;

  const msg = document.createElement('div');
  msg.className = 'jarvis-message bot';
  msg.id = 'lang-selector-msg';
  msg.innerHTML = `
    Please select your preferred voice language:
    <div class="lang-buttons">
      <button onclick="selectLang('english')">🇬🇧 English</button>
      <button onclick="selectLang('hindi')">🇮🇳 हिंदी</button>
      <button onclick="selectLang('bengali')">🇧🇩 বাংলা</button>
    </div>
  `;
  jarvisChat.appendChild(msg);
  jarvisChat.scrollTop = jarvisChat.scrollHeight;
}

function selectLang(lang) {
  const langData = languages[lang];
  document.getElementById('lang-selector-msg')?.remove();

  loadJarvisVoices();

  const voice = jarvisVoices.find(v => v.lang.startsWith(langData.code.split('-')[0]));

  if (!voice && lang !== 'english') {
    selectedLanguage = languages['english'];
    selectedVoice = jarvisVoices.find(v => v.lang.startsWith('en')) || jarvisVoices[0];
    langSelectionDone = true;

    const apology = `I apologize, but I am unable to speak in ${langData.name}, as I could not find it within your system. So, I am speaking in English.`;
    addJarvisMessage(apology, 'bot');
    speakJarvis(apology);
  } else {
    selectedLanguage = langData;
    selectedVoice = voice || jarvisVoices.find(v => v.lang.startsWith('en')) || jarvisVoices[0];
    langSelectionDone = true;

    let greet = '';
    if (lang === 'english') greet = "Hello! Welcome to Abdur's AI Assistant. How can I assist you today?";
    if (lang === 'hindi')   greet = "नमस्ते! अब्दुर के AI सिस्टम में आपका स्वागत है।";
    if (lang === 'bengali') greet = "হ্যালো! আব্দুরের AI সিস্টেমে আপনাকে স্বাগতম।";

    addJarvisMessage(greet, 'bot');
    speakJarvis(greet);
  }
}

// Page load হলে language selector দেখাবে
setTimeout(function() {
  showLanguageSelector();
}, 3600);
