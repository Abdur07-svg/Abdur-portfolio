(function () {
  'use strict';

  const ICONS = {
    sparkles: `<svg class="portfolio-chatbot-icon-sparkles" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="portfolio-chatbot-sparkle-main" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><g class="portfolio-chatbot-sparkle-top"><path d="M5 3v4"/><path d="M3 5h4"/></g><g class="portfolio-chatbot-sparkle-bottom"><path d="M19 17v4"/><path d="M17 19h4"/></g></svg>`,
    close: `<svg class="portfolio-chatbot-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    bot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M8 15h8"/><path d="M12 3v-2"/></svg>`,
    reset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    minimize: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    closePanel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    send: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
    external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 4H5.1l11.9 16z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 7.1C2.5 7.1 2.3 5.3 3.1 4.5 4 3.6 5.1 3.6 5.6 3.5 9 3.2 12 3.2 12 3.2s3 0 6.4.3c.5.1 1.6.1 2.5 1 .8.8 1 2.6 1 2.6s.3 2.1.3 4.2v1.8c0 2.1-.3 4.2-.3 4.2s-.2 1.8-1 2.6c-.9.9-2.1.9-2.6 1-3.6.3-6.4.3-6.4.3s-3 0-6.4-.3c-.5-.1-1.5-.1-2.4-1-.8-.8-1-2.6-1-2.6s-.3-2.1-.3-4.2v-1.8c0-2.1.3-4.2.3-4.2z"/><path d="M9.8 14.5l6-3.3-6-3.3v6.6z"/></svg>`,
    message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  };

  class PortfolioChatbot {
    constructor() {
      this.isOpen = false;
      this.isTyping = false;
      this.typingTimer = null;
      this.root = null;
      this.data = window.PORTFOLIO_DATA || {};
      this.intents = window.PORTFOLIO_INTENTS || [];
      this.jokes = window.PORTFOLIO_JOKES || [];
      this.riddles = window.PORTFOLIO_RIDDLES || [];
      this.lastJokeIndex = -1;
      this.rpsScores = { player: 0, bot: 0, ties: 0 };
      this.activeNumberGame = null;
      this.timeGreetings = window.PORTFOLIO_TIME_GREETINGS || null;
      this.i18n = window.PORTFOLIO_I18N || {};
      this.currentLanguage = 'en';
      this.isSending = false;
      this.selectedProject = null;
      this.lastDisplayedProjects = [];
      this.pendingFollowUpType = null;
      this.themeFunnyIndices = { dark: 0, light: 0 };

      this.init();
    }

    init() {
      if (document.getElementById('portfolio-chatbot-root')) {
        this.root = document.getElementById('portfolio-chatbot-root');
      } else {
        this.root = document.createElement('div');
        this.root.id = 'portfolio-chatbot-root';
        this.root.className = 'portfolio-chatbot-root';
        document.body.appendChild(this.root);
      }

      this.render();
      this.cacheElements();
      this.bindEvents();
      this.resetWelcome();
      this.setupPreloaderSync();
    }

    setupPreloaderSync() {
      const preloader = document.getElementById('preloader');

      if (!preloader || preloader.classList.contains('hide')) {
        this.root.classList.add('portfolio-chatbot-ready');
        return;
      }

      let revealed = false;
      const reveal = () => {
        if (revealed) return;
        revealed = true;
        setTimeout(() => {
          this.root.classList.add('portfolio-chatbot-ready');
        }, 350);
      };

      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === 'attributes' && m.attributeName === 'class') {
            if (preloader.classList.contains('hide')) {
              observer.disconnect();
              reveal();
              return;
            }
          }
        }
      });
      observer.observe(preloader, { attributes: true });

      preloader.addEventListener('transitionend', () => {
        if (preloader.classList.contains('hide')) {
          reveal();
        }
      }, { once: true });

      setTimeout(() => {
        reveal();
      }, 3800);
    }

    render() {
      this.root.innerHTML = `
        <button 
          type="button" 
          class="portfolio-chatbot-launcher" 
          id="portfolio-chatbot-launcher" 
          aria-label="Open portfolio chatbot assistant" 
          aria-expanded="false"
        >
          <span class="portfolio-chatbot-launcher-icon">
            <picture class="portfolio-chatbot-launcher-pic">
              <source srcset="images/chatbot-ghost.webp" type="image/webp" />
              <img src="images/chatbot-ghost.png" alt="Open Portfolio Assistant" class="portfolio-chatbot-launcher-img" />
            </picture>
            ${ICONS.close}
          </span>
        </button>

        <div 
          class="portfolio-chatbot-window" 
          id="portfolio-chatbot-window" 
          data-lenis-prevent="true"
          role="dialog" 
          aria-labelledby="portfolio-chatbot-title" 
          aria-hidden="true"
        >
          <header class="portfolio-chatbot-header">
            <div class="portfolio-chatbot-header-left">
              <div class="portfolio-chatbot-avatar" aria-hidden="true">
                <picture class="portfolio-chatbot-avatar-pic">
                  <source srcset="images/chatbot-ghost.webp" type="image/webp" />
                  <img src="images/chatbot-ghost.png" alt="Portfolio Assistant" class="portfolio-chatbot-avatar-img" />
                </picture>
              </div>
              <div class="portfolio-chatbot-header-text">
                <span class="portfolio-chatbot-title" id="portfolio-chatbot-title">Portfolio Assistant</span>
                <span class="portfolio-chatbot-subtitle">
                  <span class="portfolio-chatbot-online-dot"></span>
                  Ask me about Abdur's portfolio
                </span>
              </div>
            </div>
            <div class="portfolio-chatbot-header-actions">
              <button 
                type="button" 
                class="portfolio-chatbot-btn-icon" 
                id="portfolio-chatbot-btn-reset" 
                title="Clear chat" 
                aria-label="Clear chat"
              >
                ${ICONS.reset}
              </button>
              <button 
                type="button" 
                class="portfolio-chatbot-btn-icon" 
                id="portfolio-chatbot-btn-minimize" 
                title="Minimize assistant" 
                aria-label="Minimize assistant"
              >
                ${ICONS.minimize}
              </button>
              <button 
                type="button" 
                class="portfolio-chatbot-btn-icon" 
                id="portfolio-chatbot-btn-close" 
                title="Close assistant" 
                aria-label="Close assistant"
              >
                ${ICONS.closePanel}
              </button>
            </div>
          </header>

          <div class="portfolio-chatbot-messages" id="portfolio-chatbot-messages" data-lenis-prevent="true" role="log" aria-live="polite"></div>

          <form class="portfolio-chatbot-form" id="portfolio-chatbot-form" autocomplete="off">
            <input 
              type="text" 
              class="portfolio-chatbot-input" 
              id="portfolio-chatbot-input" 
              placeholder="Ask about Abdur's work..." 
              aria-label="Ask about Abdur's work" 
              maxlength="300"
            />
            <button 
              type="submit" 
              class="portfolio-chatbot-send" 
              id="portfolio-chatbot-send" 
              aria-label="Send message" 
              disabled
            >
              ${ICONS.send}
            </button>
          </form>
        </div>
      `;
    }

    cacheElements() {
      this.launcherBtn = this.root.querySelector('#portfolio-chatbot-launcher');
      this.windowPanel = this.root.querySelector('#portfolio-chatbot-window');
      this.messagesContainer = this.root.querySelector('#portfolio-chatbot-messages');
      this.form = this.root.querySelector('#portfolio-chatbot-form');
      this.input = this.root.querySelector('#portfolio-chatbot-input');
      this.sendBtn = this.root.querySelector('#portfolio-chatbot-send');
      this.resetBtn = this.root.querySelector('#portfolio-chatbot-btn-reset');
      this.minimizeBtn = this.root.querySelector('#portfolio-chatbot-btn-minimize');
      this.closeBtn = this.root.querySelector('#portfolio-chatbot-btn-close');
    }

    bindEvents() {
      this.launcherBtn.addEventListener('click', () => this.toggle());

      this.minimizeBtn.addEventListener('click', () => this.close());
      this.closeBtn.addEventListener('click', () => this.close());

      this.resetBtn.addEventListener('click', () => this.resetWelcome());

      this.windowPanel.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });

      this.messagesContainer.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });

      this.messagesContainer.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: true });

      this.input.addEventListener('input', () => {
        const hasText = Boolean(this.input.value.trim());
        this.sendBtn.disabled = !hasText || this.isTyping;
      });

      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
          this.launcherBtn.focus();
        }
      });
    }

    toggle() {
      if (this.isOpen) this.close();
      else this.open();
    }

    open() {
      this.isOpen = true;
      this.root.classList.add('portfolio-chatbot-open');
      this.launcherBtn.setAttribute('aria-expanded', 'true');
      this.launcherBtn.setAttribute('aria-label', 'Close portfolio chatbot assistant');
      this.windowPanel.setAttribute('aria-hidden', 'false');

      setTimeout(() => {
        if (this.input) this.input.focus();
        this.scrollToBottom();
      }, 100);
    }

    close() {
      this.isOpen = false;
      this.root.classList.remove('portfolio-chatbot-open');
      this.launcherBtn.setAttribute('aria-expanded', 'false');
      this.launcherBtn.setAttribute('aria-label', 'Open portfolio chatbot assistant');
      this.windowPanel.setAttribute('aria-hidden', 'true');
    }

    resetWelcome() {
      if (this.typingTimer) {
        clearTimeout(this.typingTimer);
        this.typingTimer = null;
      }
      this.isSending = false;
      this.currentLanguage = 'en';
      this.setTyping(false);

      this.messagesContainer.innerHTML = '';

      const welcomeWrap = document.createElement('div');
      welcomeWrap.className = 'portfolio-chatbot-welcome-wrap';
      welcomeWrap.id = 'portfolio-chatbot-welcome';
      welcomeWrap.innerHTML = `
        <div class="portfolio-chatbot-welcome-icon" aria-hidden="true">
          <picture class="portfolio-chatbot-welcome-pic">
            <source srcset="images/chatbot-ghost.webp" type="image/webp" />
            <img src="images/chatbot-ghost.png" alt="" class="portfolio-chatbot-welcome-img" />
          </picture>
        </div>
        <h3 class="portfolio-chatbot-welcome-greeting">Hey there! 👋</h3>
        <p class="portfolio-chatbot-welcome-desc">Ask me anything about Abdur's portfolio.</p>
      `;
      this.messagesContainer.appendChild(welcomeWrap);
      this.scrollToBottom();
    }

    handleSubmit() {
      if (this.isTyping || this.isSending) return;
      const text = this.input.value.trim();
      if (!text) return;

      this.input.value = '';
      this.sendBtn.disabled = true;
      this.sendQuery(text);
    }

    sendQuery(text) {
      if (!text || this.isTyping || this.isSending) return;
      this.isSending = true;

      if (this.typingTimer) {
        clearTimeout(this.typingTimer);
        this.typingTimer = null;
      }

      const welcomeEl = this.messagesContainer.querySelector('.portfolio-chatbot-welcome-wrap');
      if (welcomeEl) {
        welcomeEl.classList.add('portfolio-chatbot-welcome-exit');
        let done = false;
        const proceed = () => {
          if (done) return;
          done = true;
          if (welcomeEl.parentNode) {
            welcomeEl.remove();
          }
          this.executeUserQuery(text);
        };

        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
          proceed();
        } else {
          welcomeEl.addEventListener('animationend', proceed, { once: true });
          setTimeout(proceed, 180);
        }
      } else {
        this.executeUserQuery(text);
      }
    }

    executeUserQuery(text) {
      this.isSending = false;
      const leftovers = this.messagesContainer.querySelectorAll('.portfolio-chatbot-welcome-wrap');
      leftovers.forEach(el => el.remove());

      this.appendUserMsg(text);

      const matched = this.matchResponse(text);
      const delay = this.calculateResponseDelay(matched.intentId, matched.response ? matched.response.text : '');

      this.setTyping(true);

      this.typingTimer = setTimeout(() => {
        this.typingTimer = null;
        this.setTyping(false);
        this.appendBotMsg(matched.response);
      }, delay);
    }

    safeCalculate(expression) {
      if (!expression || typeof expression !== 'string') {
        return { ok: false, error: 'Empty expression' };
      }

      const pctOfMatch = expression.match(/(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)/i);
      if (pctOfMatch) {
        const p = parseFloat(pctOfMatch[1]);
        const val = parseFloat(pctOfMatch[2]);
        const res = (p / 100) * val;
        return { ok: true, expr: `${pctOfMatch[1]}% of ${pctOfMatch[2]}`, result: Math.round(res * 1e8) / 1e8 };
      }

      let cleaned = expression
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/\bx\b/gi, '*')
        .replace(/(\d+(?:\.\d+)?)\s*%\s*(?=[\+\-\*\/]|$|\))/g, '($1/100)')
        .replace(/[^\d\+\-\*\/\%\(\)\.\s]/g, '')
        .trim();

      if (!cleaned || !/\d/.test(cleaned)) {
        return { ok: false, error: 'Invalid math expression' };
      }

      const tokens = [];
      let i = 0;
      while (i < cleaned.length) {
        const ch = cleaned[i];
        if (/\s/.test(ch)) { i++; continue; }
        if (/\d|\./.test(ch)) {
          let numStr = '';
          while (i < cleaned.length && /[\d\.]/.test(cleaned[i])) { numStr += cleaned[i]; i++; }
          tokens.push({ type: 'number', value: parseFloat(numStr) });
          continue;
        }
        if ('+-*/%()'.includes(ch)) {
          if (ch === '-' && (tokens.length === 0 || tokens[tokens.length - 1].type === 'operator' || tokens[tokens.length - 1].value === '(')) {
            i++;
            let numStr = '-';
            while (i < cleaned.length && /[\d\.]/.test(cleaned[i])) { numStr += cleaned[i]; i++; }
            if (numStr === '-') return { ok: false, error: 'Invalid expression' };
            tokens.push({ type: 'number', value: parseFloat(numStr) });
            continue;
          }
          tokens.push({ type: ch === '(' || ch === ')' ? 'paren' : 'operator', value: ch });
          i++;
          continue;
        }
        return { ok: false, error: 'Unexpected character: ' + ch };
      }

      const outputQueue = [];
      const opStack = [];
      const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };

      for (const token of tokens) {
        if (token.type === 'number') {
          outputQueue.push(token);
        } else if (token.type === 'operator') {
          while (
            opStack.length > 0 &&
            opStack[opStack.length - 1].type === 'operator' &&
            precedence[opStack[opStack.length - 1].value] >= precedence[token.value]
          ) {
            outputQueue.push(opStack.pop());
          }
          opStack.push(token);
        } else if (token.value === '(') {
          opStack.push(token);
        } else if (token.value === ')') {
          let foundOpen = false;
          while (opStack.length > 0) {
            const top = opStack.pop();
            if (top.value === '(') { foundOpen = true; break; }
            outputQueue.push(top);
          }
          if (!foundOpen) return { ok: false, error: 'Mismatched parentheses' };
        }
      }

      while (opStack.length > 0) {
        const op = opStack.pop();
        if (op.type === 'paren') return { ok: false, error: 'Mismatched parentheses' };
        outputQueue.push(op);
      }

      const evalStack = [];
      for (const token of outputQueue) {
        if (token.type === 'number') {
          evalStack.push(token.value);
        } else if (token.type === 'operator') {
          if (evalStack.length < 2) return { ok: false, error: 'Invalid expression' };
          const b = evalStack.pop();
          const a = evalStack.pop();
          let res;
          switch (token.value) {
            case '+': res = a + b; break;
            case '-': res = a - b; break;
            case '*': res = a * b; break;
            case '/':
              if (b === 0) return { ok: false, error: 'Cannot divide by zero' };
              res = a / b;
              break;
            case '%':
              if (b === 0) return { ok: false, error: 'Cannot divide by zero' };
              res = a % b;
              break;
          }
          evalStack.push(res);
        }
      }

      if (evalStack.length !== 1 || isNaN(evalStack[0])) return { ok: false, error: 'Invalid expression' };
      const finalVal = Math.round(evalStack[0] * 1e8) / 1e8;
      return { ok: true, expr: expression, result: finalVal };
    }

    getRandomJoke() {
      if (!this.jokes || this.jokes.length === 0) {
        return "Why do programmers prefer dark mode? Because light attracts bugs! 🐛";
      }
      let idx = Math.floor(Math.random() * this.jokes.length);
      if (idx === this.lastJokeIndex && this.jokes.length > 1) {
        idx = (idx + 1) % this.jokes.length;
      }
      this.lastJokeIndex = idx;
      const lang = this.currentLanguage || 'en';
      if (lang === 'bn') {
        return `😄 আপনার জন্য একটি মজার জোক:\n\n${this.jokes[idx]}\n\n(আরেকটি জোক দেখতে চাইলে বলুন 'আরেকটি জোক'!)`;
      } else if (lang === 'banglish') {
        return `😄 Tomar jonno ekta tech joke:\n\n${this.jokes[idx]}\n\n(Arekta joke dekhte chaile bolo 'arekta joke'!)`;
      }
      return `😄 Here's a tech joke for you:\n\n${this.jokes[idx]}\n\n(Ask for 'another joke' if you'd like another!)`;
    }

    calculateResponseDelay(intentId, responseText) {
      const companionIntents = [
        'calculator_card', 'number_game_card', 'rps_card', 'math_calc', 'joke',
        'number_guess', 'game_clarification', 'fun_and_games', 'fun_joke_prompt',
        'fun_game_prompt', 'brain_teaser_card', 'project_search_results',
        'project_more_details', 'project_github_link', 'project_github_profile',
        'project_tech_stack', 'project_followup_ambiguous', 'project_not_found'
      ];
      if (companionIntents.includes(intentId)) {
        return 500 + Math.floor(Math.random() * 260);
      }

      const textLen = (responseText || '').length;

      const longIntents = [
        'projects_overview',
        'project_recommendation',
        'skills',
        'education',
        'project_jarvis',
        'project_fileforge',
        'project_polyglot',
        'project_image_classification',
        'project_game',
        'project_sentiment',
        'experience',
        'certifications'
      ];
      if (longIntents.includes(intentId) || textLen > 250) {
        return 1250 + Math.floor(Math.random() * 450);
      }

      const shortIntents = ['greeting', 'thanks', 'how_are_you', 'empty', 'bye', 'time_greeting', 'time_greeting_correction', 'theme_dark', 'theme_light', 'theme_already_dark', 'theme_already_light', 'theme_conflict'];
      if (shortIntents.includes(intentId) || textLen < 80) {
        return 560 + Math.floor(Math.random() * 280);
      }

      return 940 + Math.floor(Math.random() * 380);
    }

    normalize(text) {
      if (!text) return '';
      return text
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    detectLanguage(rawText) {
      if (!rawText || typeof rawText !== 'string') return this.currentLanguage || 'en';
      const clean = rawText.trim();
      if (!clean) return this.currentLanguage || 'en';

      const bengaliChars = (clean.match(/[\u0980-\u09FF]/g) || []).length;
      const latinChars = (clean.match(/[a-zA-Z]/g) || []).length;

      if (bengaliChars > 0 && bengaliChars >= latinChars * 0.25) {
        return 'bn';
      }

      const banglishPatterns = [
        /\b(tomar|apnar|amader|amar|tumi|apni|tui)\b/i,
        /\b(kemon|acho|asen|aso|achen)\b/i,
        /\b(somporke|bishoye|bepar|bepare)\b/i,
        /\b(project\s*gulo|projects?\s*gulo|skill\s*gulo|skills?\s*gulo)\b/i,
        /\b(bolo|bolun|bhalo|valo|val)\b/i,
        /\b(ki\s*ki|ki\s*ache|ki\s*koro|ki\s*korcho|ki\s*bolbo)\b/i,
        /\b(kivabe|keno|kothay|kokhon|kon)\b/i,
        /\b(ekta|akta|koyekta|kichu)\b/i,
        /\b(hasao|hasir|mojar|moja|khela|kheli|khelbo|khelte)\b/i,
        /\b(shuvo|subho|shokal|sokal|dupur|sondha|shondha|ratri|raat)\b/i,
        /\b(dhonnobad|dhonno|thik\s*ache|bujhlam|acha|accha|ha|na)\b/i,
        /\b(dekhte\s*chai|jante\s*chai|bolte\s*paro|parba|parbe)\b/i,
        /\b(shuru|shesh|notun|puraton)\b/i,
        /\b(koro|korun|chalu|bondho|hoyeche|naki|ar|ebong|kori|korchi)\b/i,
        /\b(dekhao|dekhaw|ache|ase|etar|er|bistarito|khujchi|konta|konti)\b/i
      ];

      let banglishMatches = 0;
      for (const pat of banglishPatterns) {
        if (pat.test(clean)) banglishMatches++;
      }

      if (banglishMatches >= 1) {
        return 'banglish';
      }

      const englishPatterns = [
        /\b(tell|me|about|your|what|are|is|how|can|i|contact|who|built|build|show|which|please|hello|hi|hey|thanks|thank\s*you|good\s*morning|good\s*afternoon|good\s*evening|good\s*night|morning|afternoon|evening|night|bye|goodbye)\b/i,
        /\b(projects?|skills?|experience|education|resume|cv|portfolio|socials?|work|code|github|email)\b/i,
        /\b(dark|light|mode|theme|turn|enable|disable|switch|on|off)\b/i
      ];
      let englishMatches = 0;
      for (const pat of englishPatterns) {
        if (pat.test(clean)) englishMatches++;
      }

      if (englishMatches > 0 && banglishMatches === 0) {
        return 'en';
      }

      if (clean.split(/\s+/).length <= 2 && banglishMatches === 0 && bengaliChars === 0) {
        return this.currentLanguage || 'en';
      }

      return this.currentLanguage || 'en';
    }

    getLocalizedResponse(intentId, defaultResponse, lang) {
      if (!defaultResponse) return defaultResponse;
      if (!lang || lang === 'en') return defaultResponse;

      const i18nEntry = this.i18n && this.i18n[intentId] ? this.i18n[intentId][lang] : null;
      if (!i18nEntry) return defaultResponse;

      const localized = { ...defaultResponse };
      if (i18nEntry.text) {
        localized.text = i18nEntry.text;
      }
      if (i18nEntry.actions) {
        localized.actions = i18nEntry.actions;
      }
      return localized;
    }

    setTheme(targetTheme) {
      const theme = (targetTheme === 'light' || targetTheme === 'light-theme') ? 'light-theme' : 'dark-theme';
      if (typeof window.setPortfolioTheme === 'function') {
        window.setPortfolioTheme(theme);
      } else {
        document.body.className = theme;
        try {
          localStorage.setItem('theme', theme);
        } catch (e) {}
        const themeIconLight = document.querySelector('.theme-icon-light');
        const themeIconDark = document.querySelector('.theme-icon-dark');
        if (themeIconLight && themeIconDark) {
          if (theme === 'light-theme') {
            themeIconLight.style.display = 'none';
            themeIconDark.style.display = 'block';
          } else {
            themeIconLight.style.display = 'block';
            themeIconDark.style.display = 'none';
          }
        }
      }
      return theme;
    }

    getCurrentTheme() {
      let isLight = false;
      if (typeof window.getPortfolioTheme === 'function') {
        const theme = window.getPortfolioTheme();
        isLight = (theme === 'light-theme' || theme === 'light');
      } else if (typeof document !== 'undefined' && document.body) {
        const hasLightClass = document.body.classList && typeof document.body.classList.contains === 'function' && document.body.classList.contains('light-theme');
        const hasLightName = typeof document.body.className === 'string' && document.body.className.includes('light-theme');
        isLight = Boolean(hasLightClass || hasLightName);
      }
      return isLight ? 'light' : 'dark';
    }

    getFunnyThemeAlreadyResponse(themeType, lang) {
      if (!this.themeFunnyIndices) {
        this.themeFunnyIndices = { dark: 0, light: 0 };
      }

      const funnyPools = {
        dark: {
          en: [
            "Dark mode is already ON! 🌙😂 Even the darkness is enjoying itself!",
            "Already in dark mode! 🌚 You can't make it any darker!",
            "Dark mode is already ON! 🌙 Mission accomplished before you asked!"
          ],
          bn: [
            "আরে, ডার্ক মোড তো আগেই চালু আছে! 🌙😂 আর কত অন্ধকার করবে?",
            "ডার্ক মোড তো আগেই চালু আছে! 🌚 এর চেয়ে আর বেশি অন্ধকার করা সম্ভব না!",
            "ডার্ক মোড তো আগেই চালু আছে! 🌙 মিশন তো আগেই সফল হয়েছে!"
          ],
          banglish: [
            "Arey, dark mode to agei ON ache! 🌙😂",
            "Already dark mode-e ache! 🌚 Ar koto dark korbe bolo?",
            "Dark mode to agei ON ache! 🌙 Mission to agei accomplished!"
          ]
        },
        light: {
          en: [
            "Light mode is already ON! ☀️😂 Your screen is already enjoying the sunshine!",
            "We're already shining bright! ☀️😎 Light mode is ON!",
            "Light mode is already ON! ☀️ No extra sunshine needed!"
          ],
          bn: [
            "লাইট মোড তো আগেই চালু আছে! ☀️😄 স্ক্রিনে তো রোদ ঝলমল করছে!",
            "আরে, লাইট মোড তো অনই আছে! ☀️😎 চারপাশ তো আগেই আলো ঝলমলে!",
            "লাইট মোড তো আগেই চালু আছে! ☀️ আর অতিরিক্ত আলোর কোনো প্রয়োজন নেই!"
          ],
          banglish: [
            "Light mode to agei ON ache! ☀️😄",
            "Already shining bright! ☀️😎 Light mode to agei ON!",
            "Light mode to agei ON ache! ☀️ No extra sunshine needed!"
          ]
        }
      };

      const langPool = (funnyPools[themeType] && funnyPools[themeType][lang]) || (funnyPools[themeType] && funnyPools[themeType].en);
      if (!langPool || langPool.length === 0) {
        return themeType === 'dark' ? "Dark mode is already ON! 🌙😂" : "Light mode is already ON! ☀️😄";
      }

      const idx = this.themeFunnyIndices[themeType] % langPool.length;
      this.themeFunnyIndices[themeType]++;
      return langPool[idx];
    }

    detectThemeCommand(rawText) {
      if (!rawText || typeof rawText !== 'string') return { type: 'none' };
      const clean = rawText.trim();

      const isQuestionPattern =
        /\b(how\s+does|how\s+to\s+build|how\s+do\s+you|what\s+is|what's|why|explain|tell\s+me\s+about|does\s+(it|this)|is\s+there)\b/i.test(clean) ||
        /\b(kivabe\s+kaj|keno|ki\s+vabe\s+kaj|ki\s+kaj)\b/i.test(clean) ||
        /(কিভাবে\s*কাজ|কীভাবে\s*কাজ|কেন|কি\s*কাজ|কী\s*কাজ)/i.test(clean) ||
        (/\b(how|what|why)\b/i.test(clean) && /\b(work|meaning|function|built)\b/i.test(clean));

      const hasExplicitCommandAction =
        /\b(turn\s+on|turn\s+off|enable|disable|activate|switch|change|set|koro|korun|chalu|bondho|চালু|বন্ধ)\b/i.test(clean);

      if (isQuestionPattern && !hasExplicitCommandAction) {
        return { type: 'question' };
      }

      const hasExplicitDarkOn =
        /\b(?:turn\s*on\s*dark|turn\s*dark\s*(?:mode|theme)?\s*on|enable\s*dark|activate\s*dark|switch\s*(?:to\s*)?dark|set\s*dark)\b/i.test(clean) ||
        /\bdark\s*(?:mode|theme)?\s*(?:on|chalu|enable)\b/i.test(clean) ||
        /(?:ডার্ক\s*(?:মোড|থিম)?\s*(?:চালু|অন))/i.test(clean);

      const hasExplicitDarkOff =
        /\b(?:turn\s*off\s*dark|turn\s*dark\s*(?:mode|theme)?\s*off|disable\s*dark)\b/i.test(clean) ||
        /\bdark\s*(?:mode|theme)?\s*(?:off|bondho|disable)\b/i.test(clean) ||
        /(?:ডার্ক\s*(?:মোড|থিম)?\s*(?:বন্ধ|অফ))/i.test(clean);

      const hasExplicitLightOn =
        /\b(?:turn\s*on\s*light|turn\s*light\s*(?:mode|theme)?\s*on|enable\s*light|activate\s*light|switch\s*(?:to\s*)?light|set\s*light)\b/i.test(clean) ||
        /\blight\s*(?:mode|theme)?\s*(?:on|chalu|enable)\b/i.test(clean) ||
        /(?:লাইট\s*(?:মোড|থিম)?\s*(?:চালু|অন))/i.test(clean);

      const hasExplicitLightOff =
        /\b(?:turn\s*off\s*light|turn\s*light\s*(?:mode|theme)?\s*off|disable\s*light)\b/i.test(clean) ||
        /\blight\s*(?:mode|theme)?\s*(?:off|bondho|disable)\b/i.test(clean) ||
        /(?:লাইট\s*(?:মোড|থিম)?\s*(?:বন্ধ|অফ))/i.test(clean);

      const darkOff = hasExplicitDarkOff;
      const lightOff = hasExplicitLightOff;

      const darkOn = (hasExplicitDarkOn && (!hasExplicitDarkOff || hasExplicitDarkOn)) ||
        (!hasExplicitDarkOff && (
          /\bdark\s*(?:mode|theme)?\s*(?:koro|korun)\b/i.test(clean) ||
          /(?:ডার্ক\s*(?:মোড|থিম)?\s*(?:করো|করুন))/i.test(clean) ||
          /^(?:please\s+)?(?:set\s+)?dark\s*(?:mode|theme)?(?:\s+please)?$/i.test(clean) ||
          /^(?:ডার্ক\s*(?:মোড|থিম)?)$/i.test(clean)
        ));

      const lightOn = (hasExplicitLightOn && (!hasExplicitLightOff || hasExplicitLightOn)) ||
        (!hasExplicitLightOff && (
          /\blight\s*(?:mode|theme)?\s*(?:koro|korun)\b/i.test(clean) ||
          /(?:লাইট\s*(?:মোড|থিম)?\s*(?:করো|করুন))/i.test(clean) ||
          /^(?:please\s+)?(?:set\s+)?light\s*(?:mode|theme)?(?:\s+please)?$/i.test(clean) ||
          /^(?:লাইট\s*(?:মোড|থিম)?)$/i.test(clean)
        ));

      if (/\b(?:dark\s*(?:mode|theme)?|ডার্ক\s*(?:মোড|থিম)?)\b/i.test(clean) &&
          /\b(?:light\s*(?:mode|theme)?|লাইট\s*(?:মোড|থিম)?)\b/i.test(clean)) {
        const darkAgreement = (hasExplicitDarkOn || darkOn) && (hasExplicitLightOff || lightOff) && !hasExplicitDarkOff && !hasExplicitDarkOn;
        const lightAgreement = (hasExplicitLightOn || lightOn) && (hasExplicitDarkOff || darkOff) && !hasExplicitLightOff && !hasExplicitDarkOn;
        if (darkAgreement) return { type: 'dark' };
        if (lightAgreement) return { type: 'light' };
        return { type: 'conflict' };
      }

      const wantsDark = darkOn || lightOff;
      const wantsLight = lightOn || darkOff;

      const isDirectConflict =
        (darkOn && darkOff) ||
        (lightOn && lightOff) ||
        (darkOn && lightOn) ||
        (darkOff && lightOff);

      if (isDirectConflict || (wantsDark && wantsLight)) {
        return { type: 'conflict' };
      }
      if (wantsDark) {
        return { type: 'dark' };
      }
      if (wantsLight) {
        return { type: 'light' };
      }
      return { type: 'none' };
    }

    handleThemeCommand(rawText, norm) {
      const parsed = this.detectThemeCommand(rawText);
      if (!parsed || parsed.type === 'none' || parsed.type === 'question') {
        return null;
      }

      const lang = this.detectLanguage(rawText);
      this.currentLanguage = lang;

      if (parsed.type === 'conflict') {
        const conflictMsgs = {
          en: "Which theme would you prefer: Dark mode 🌙 or Light mode ☀️?",
          bn: "আপনি কোন থিমটি চান: ডার্ক মোড 🌙 নাকি লাইট মোড ☀️?",
          banglish: "Tumi kon theme-ta preference dao: Dark mode 🌙 naki Light mode ☀️?"
        };

        const conflictActions = {
          en: [
            { label: "Dark Mode 🌙", query: "Dark mode on" },
            { label: "Light Mode ☀️", query: "Light mode on" }
          ],
          bn: [
            { label: "ডার্ক মোড 🌙", query: "ডার্ক মোড চালু করো" },
            { label: "লাইট মোড ☀️", query: "লাইট মোড চালু করো" }
          ],
          banglish: [
            { label: "Dark Mode 🌙", query: "Dark mode on koro" },
            { label: "Light Mode ☀️", query: "Light mode on koro" }
          ]
        };

        return {
          intentId: 'theme_conflict',
          response: {
            text: conflictMsgs[lang] || conflictMsgs.en,
            actions: conflictActions[lang] || conflictActions.en
          }
        };
      }

      const currentTheme = this.getCurrentTheme();

      if (parsed.type === 'dark') {
        if (currentTheme === 'dark') {
          const funnyMsg = this.getFunnyThemeAlreadyResponse('dark', lang);
          return {
            intentId: 'theme_already_dark',
            response: {
              text: funnyMsg
            }
          };
        }

        this.setTheme('dark');
        const confirmMsgs = {
          en: "Dark mode is now on. 🌙",
          bn: "ডার্ক মোড চালু করা হয়েছে। 🌙",
          banglish: "Dark mode chalu hoyeche. 🌙"
        };
        return {
          intentId: 'theme_dark',
          response: {
            text: confirmMsgs[lang] || confirmMsgs.en
          }
        };
      }

      if (parsed.type === 'light') {
        if (currentTheme === 'light') {
          const funnyMsg = this.getFunnyThemeAlreadyResponse('light', lang);
          return {
            intentId: 'theme_already_light',
            response: {
              text: funnyMsg
            }
          };
        }

        this.setTheme('light');
        const confirmMsgs = {
          en: "Light mode is now on. ☀️",
          bn: "লাইট মোড চালু করা হয়েছে। ☀️",
          banglish: "Light mode chalu hoyeche. ☀️"
        };
        return {
          intentId: 'theme_light',
          response: {
            text: confirmMsgs[lang] || confirmMsgs.en
          }
        };
      }

      return null;
    }

    findProjects(rawText, lang) {
      if (!rawText || typeof rawText !== 'string') return [];
      const clean = rawText.trim().toLowerCase();
      const projects = (this.data && this.data.projects) || [];
      if (!projects || projects.length === 0) return [];

      // Check if asking for all projects (general overview)
      const isAllProjectsQuery =
        /^(?:show\s*(?:me\s*)?(?:your|all|abdur'?s)?\s*projects|all\s*projects|list\s*(?:all\s*)?projects|portfolio\s*projects|projects|work|apps)[\s.?!]*$/i.test(clean) ||
        /(?:তোমার\s*প্রজেক্টগুলো\s*দেখাও|প্রজেক্ট\s*দেখাও|সব\s*প্রজেক্ট\s*দেখাও|তোমার\s*কাজগুলো\s*দেখাও|প্রজেক্টগুলো|প্রজেক্টসমূহ)/.test(rawText) ||
        /\b(?:tomar\s*project\s*gulo\s*dekhao|project\s*gulo\s*dekhao|project\s*dekhaw|shob\s*project\s*dekhao|project\s*list)\b/i.test(clean);

      const hasSpecificTechOrTopic =
        /\b(python|java\b|javascript|js\b|html|css|android|tensorflow|opencv|pytorch|nltk|gemini|livekit|ai\b|artificial\s*intelligence|machine\s*learning|ml\b|deep\s*learning|nlp|computer\s*vision|vision|game|runner|temple\s*run|voice|speech|assistant|translator|translation|fileforge|file\s*forge|polyglot|jarvis|cnn|sentiment|image|pdf|enhancer)\b/i.test(clean) ||
        /(পাইথন|জাভা|এআই|মেশিন\s*লার্নিং|ডিপ\s*লার্নিং|কম্পিউটার\s*ভিশন|গেম|ভয়েস|অনুবাদ|ছবি|ইমেজ|ফাইল)/.test(rawText);

      if (isAllProjectsQuery && !hasSpecificTechOrTopic) {
        return projects;
      }

      const results = [];

      for (const p of projects) {
        let score = 0;
        const pId = (p.id || '').toLowerCase();
        const pTitle = (p.title || '').toLowerCase();
        const pShort = (p.shortName || '').toLowerCase();
        const pCategory = (p.category || '').toLowerCase();
        const pTech = (p.tech || []).map(t => t.toLowerCase());
        const pKeywords = (p.keywords || []).map(k => k.toLowerCase());

        // Exact ID or Name match
        if (clean.includes(pId) || clean.includes(pTitle) || clean.includes(pShort)) {
          score += 150;
        }

        // Technology matching
        if (/\b(python|পাইথন)\b/i.test(clean)) {
          if (pTech.includes('python')) score += 80;
        }
        if (/\b(java|জাভা)\b/i.test(clean) && !/\b(javascript|js)\b/i.test(clean)) {
          if (pTech.includes('java')) score += 80;
        }
        if (/\b(javascript|js|html|html5|css|css3)\b/i.test(clean)) {
          if (pTech.some(t => t.includes('javascript') || t.includes('html') || t.includes('css'))) score += 70;
        }
        if (/\b(android|mobile\s*game|mobile\s*app)\b/i.test(clean)) {
          if (pTech.some(t => t.includes('android')) || pCategory.includes('mobile')) score += 70;
        }
        if (/\b(tensorflow|opencv)\b/i.test(clean)) {
          if (pTech.some(t => t.includes('tensorflow') || t.includes('opencv'))) score += 80;
        }
        if (/\b(pytorch|nltk)\b/i.test(clean)) {
          if (pTech.some(t => t.includes('pytorch') || t.includes('nltk'))) score += 80;
        }
        if (/\b(gemini|livekit)\b/i.test(clean)) {
          if (pTech.some(t => t.includes('gemini') || t.includes('livekit'))) score += 80;
        }

        // Category / Domain matching
        if (/\b(ai|artificial\s*intelligence)\b/i.test(clean) || /(এআই|কৃত্রিম\s*বুদ্ধিমত্তা)/.test(rawText)) {
          if (pCategory.includes('ai') || pCategory.includes('deep learning') || pCategory.includes('natural language') || pId === 'jarvis' || pId === 'image_classification' || pId === 'sentiment_analyzer') {
            score += 65;
          }
        }
        if (/\b(machine\s*learning|ml)\b/i.test(clean) || /(মেশিন\s*লার্নিং)/.test(rawText)) {
          if (pCategory.includes('deep learning') || pCategory.includes('natural language') || pId === 'image_classification' || pId === 'sentiment_analyzer') {
            score += 65;
          }
        }
        if (/\b(deep\s*learning)\b/i.test(clean) || /(ডিপ\s*লার্নিং)/.test(rawText)) {
          if (pCategory.includes('deep learning') || pId === 'image_classification' || pId === 'sentiment_analyzer') {
            score += 70;
          }
        }
        if (/\b(computer\s*vision|vision|cnn|object\s*detection)\b/i.test(clean) || /(কম্পিউটার\s*ভিশন)/.test(rawText)) {
          if (pId === 'image_classification') score += 80;
        }
        if (/\b(nlp|natural\s*language|sentiment)\b/i.test(clean) || /(ন্যাচারাল\s*ল্যাঙ্গুয়েজ)/.test(rawText)) {
          if (pId === 'sentiment_analyzer') score += 80;
        }
        if (/\b(voice|speech|wake\s*word)\b/i.test(clean) || /(ভয়েস|কণ্ঠ)/.test(rawText)) {
          if (pId === 'jarvis') score += 80;
        }
        if (/\b(game|games|runner|temple\s*run)\b/i.test(clean) || /(গেম|খেলা)/.test(rawText)) {
          if (pId === 'endless_runner') score += 80;
        }
        if (/\b(translator|translation|translate|multilingual|anubad)\b/i.test(clean) || /(অনুবাদ|অনুবাদক)/.test(rawText)) {
          if (pId === 'polyglot') score += 80;
        }
        if (/\b(pdf|file\s*processing|file\s*tool|privacy\s*file)\b/i.test(clean) || /(পিডিএফ|ফাইল)/.test(rawText)) {
          if (pId === 'fileforge') score += 80;
        }
        if (/\b(image|photo|picture|enhancer|compressor)\b/i.test(clean) || /(ছবি|ইমেজ)/.test(rawText)) {
          if (pId === 'fileforge' || pId === 'image_classification') {
            score += 55;
            if (/\benhancer\b/i.test(clean) && pId === 'fileforge') score += 35;
          }
        }

        // Project keywords match
        for (const kw of pKeywords) {
          if (clean.includes(kw)) {
            score += 40;
          }
        }

        if (score > 0) {
          results.push({ project: p, score });
        }
      }

      if (results.length === 0) return [];

      results.sort((a, b) => b.score - a.score);
      // If single top match has an overwhelming exact score
      if (results[0].score >= 120 && results.length > 1 && results[0].score - results[1].score >= 60) {
        return [results[0].project];
      }

      return results.map(r => r.project);
    }

    isProjectQuery(clean, rawText) {
      if (!clean) return false;

      // Mentions "project" in English, Bengali, or Banglish
      if (/\b(projects?|apps?|creations?|portfolio\s*projects?)\b/i.test(clean) ||
          /(প্রজেক্ট|কাজগুলো|প্রজেক্টসমূহ)/.test(rawText) ||
          /\b(project|projects|project-gulo|projectgulo|project-er|projecter)\b/i.test(clean)) {
        return true;
      }

      // Mentions specific project names or terms
      if (/\b(fileforge|file\s*forge|polyglot|jarvis|endless\s*runner|temple\s*run|sentiment\s*analyzer|image\s*classification|image\s*classifier|image\s*enhancer)\b/i.test(clean)) {
        return true;
      }

      // Asking what Abdur built / made / coded
      if (/\b(what\s*(did|has|have)\s*(you|abdur)\s*(built|made|created|developed|coded))\b/i.test(clean) ||
          /(বানিয়েছ|তৈরি\s*করেছ|কী\s*কী\s*বানিয়েছ)/.test(rawText) ||
          /\b(ki\s*ki\s*(banise|baniyeche|toiri\s*koreche))\b/i.test(clean)) {
        return true;
      }

      // Questions like "Do you have any AI / Python / ML / Web tools?"
      if (/\b(do\s*you\s*have|show\s*me|tell\s*me\s*about|any)\b/i.test(clean) &&
          /\b(ai|python|machine\s*learning|deep\s*learning|nlp|computer\s*vision|vision|translator|runner|speech|voice|livekit|gemini)\b/i.test(clean)) {
        return true;
      }

      // Banglish questions like "Tomar AI ache?", "Python project ache?"
      if (/\b(ache|ase)\b/i.test(clean) && /\b(ai|python|ml|java|game|tool|tools)\b/i.test(clean)) {
        return true;
      }

      return false;
    }

    handleProjectSearch(rawText, norm) {
      const clean = rawText.trim().toLowerCase();
      if (!this.isProjectQuery(clean, rawText)) {
        return null;
      }

      const lang = this.detectLanguage(rawText);
      this.currentLanguage = lang;
      const matches = this.findProjects(rawText, lang);

      if (!matches || matches.length === 0) {
        const notFoundTexts = {
          en: `I couldn't find any verified projects matching your query. Abdur's verified projects focus on Python, AI/ML (JARVIS, Image Classification, Sentiment Analyzer), and Web Applications (FileForge, Polyglot). Would you like to view all projects? 🚀`,
          bn: `দুঃখিত, আপনার অনুসন্ধানের সাথে মিলে এমন কোনো প্রজেক্ট পাওয়া যায়নি। আব্দুর রাজ্জাকের প্রজেক্টসমূহ মূলত পাইথন, এআই/এমএল (JARVIS, Image Classification, Sentiment Analyzer) এবং ওয়েব অ্যাপ্লিকেশন (FileForge, Polyglot) নিয়ে। আপনি কি সব প্রজেক্ট দেখতে চান? 🚀`,
          banglish: `Sorry, ei query onujayi kono project paoa jayni. Abdur-er verified projects gulo main-ly Python, AI/ML (JARVIS, Image Classification, Sentiment Analyzer) ar Web Apps (FileForge, Polyglot) niye. Shob projects dekhte chao? 🚀`
        };

        const showAllLabels = {
          en: 'View All Projects',
          bn: 'সব প্রজেক্ট দেখুন',
          banglish: 'Shob Projects Dekho'
        };

        return {
          intentId: 'project_not_found',
          response: {
            text: notFoundTexts[lang] || notFoundTexts.en,
            actions: [
              { label: showAllLabels[lang] || showAllLabels.en, query: 'Show me your projects' }
            ]
          }
        };
      }

      // Update conversation context
      if (matches.length === 1) {
        this.selectedProject = matches[0];
        this.lastDisplayedProjects = matches;
        this.pendingFollowUpType = null;
      } else {
        this.selectedProject = null;
        this.lastDisplayedProjects = matches;
        this.pendingFollowUpType = null;
      }

      // Localized Intro Text
      let introText = '';
      if (matches.length >= 6) {
        const allIntros = {
          en: "Here are Abdur Rajjak's verified portfolio projects across AI, Machine Learning, and Web Development: 🚀",
          bn: "এখানে আব্দুর রাজ্জাকের তৈরি এআই, মেশিন লার্নিং ও ওয়েব ডেভেলপমেন্টের প্রজেক্টসমূহ তুলে ধরা হলো: 🚀",
          banglish: "Ekhane Abdur-er toiri kora AI, Machine Learning ar Web Development-er verified projects dewa holo: 🚀"
        };
        introText = allIntros[lang] || allIntros.en;
      } else if (matches.length === 1) {
        const singleIntros = {
          en: `Here are the details for ${matches[0].title}: 🚀`,
          bn: `এখানে ${matches[0].title}-এর বিস্তারিত তথ্য: 🚀`,
          banglish: `Ekhane ${matches[0].title}-er details: 🚀`
        };
        introText = singleIntros[lang] || singleIntros.en;
      } else {
        const filterIntros = {
          en: `Found ${matches.length} verified projects matching your search: 🚀`,
          bn: `আপনার অনুসন্ধানের সাথে মিলে এমন ${matches.length}টি প্রজেক্ট পাওয়া গেছে: 🚀`,
          banglish: `Tomar search onujayi ${matches.length}-ti verified project paoa geche: 🚀`
        };
        introText = filterIntros[lang] || filterIntros.en;
      }

      return {
        intentId: 'project_search_results',
        response: {
          text: introText,
          introText,
          projectCards: matches
        }
      };
    }

    handleProjectFollowUp(rawText, norm) {
      if (!rawText) return null;
      const clean = rawText.trim().toLowerCase();
      const lang = this.detectLanguage(rawText);

      const isMoreDetails =
        /\b(tell\s*me\s*more|more\s*details?|more\s*info|more\s*about\s*(it|this|that)?|give\s*more\s*details|explain\s*more|bistarito\s*bolo|aro\s*bolo|aro\s*bistarito|details\s*bolo)\b/i.test(clean) ||
        /(আরও\s*বিস্তারিত|বিস্তারিত\s*বলো|আরও\s*বলো|ডিটেলস\s*বলো|বিস্তারিত)/.test(rawText) ||
        /^(tell\s*me\s*more|more\s*details?|more|details|aro\s*bolo)[\s.?!]*$/i.test(clean);

      const isGitHubLink =
        /\b(show\s*(its\s*)?github|give\s*(its\s*)?github|its\s*github|er\s*github|etar\s*github|github\s*link\s*dao|github\s*link\s*dekhaw|github\s*link|repo\s*link|repository\s*link|source\s*code\s*link)\b/i.test(clean) ||
        /(এটার|এর|etar|er)\s*(?:github|গিটহাব)/i.test(rawText) ||
        /(?:github|গিটহাব)\s*(?:লিংক|link|দাও|dao)/i.test(rawText) ||
        /(গিটহাব\s*লিংক|এটার\s*গিটহাব|এর\s*গিটহাব)/.test(rawText) ||
        /^(github\s*link|repo|github|গিটহাব|গিটহাব\s*লিংক|er\s*github\s*link\s*dao)[\s.?!]*$/i.test(clean);

      const isTechStack =
        /\b(what\s*(technolog\w*|tech|stack|tools)|which\s*(technolog\w*|tech|stack|tools)|what\s*does\s*it\s*use|technolog\w*(\s*used)?|tech\s*stack|tech\s*used|ki\s*tech|kon\s*tech|kon\s*technology)\b/i.test(clean) ||
        /(টেকনোলজি|প্রযুক্তি|কী\s*প্রযুক্তি)/.test(rawText);

      // Check if user is answering a previous clarification question
      if (!isMoreDetails && !isGitHubLink && !isTechStack) {
        if (this.pendingFollowUpType && this.lastDisplayedProjects && this.lastDisplayedProjects.length > 0) {
          const chosen = this.lastDisplayedProjects.find(p =>
            clean.includes(p.id.toLowerCase()) ||
            clean.includes(p.title.toLowerCase()) ||
            clean.includes(p.shortName.toLowerCase())
          );
          if (chosen) {
            this.selectedProject = chosen;
            const actionType = this.pendingFollowUpType;
            this.pendingFollowUpType = null;
            return this.deliverProjectFollowUpAnswer(chosen, actionType, lang);
          }
        }
        return null;
      }

      this.currentLanguage = lang;
      const followUpType = isGitHubLink ? 'github' : (isTechStack ? 'tech' : 'more');

      // Check if query explicitly names one of the projects
      const projects = (this.data && this.data.projects) || [];
      const explicitlyNamed = projects.find(p =>
        clean.includes(p.id.toLowerCase()) ||
        clean.includes(p.title.toLowerCase()) ||
        clean.includes(p.shortName.toLowerCase())
      );

      if (explicitlyNamed) {
        this.selectedProject = explicitlyNamed;
        this.lastDisplayedProjects = [explicitlyNamed];
        this.pendingFollowUpType = null;
        return this.deliverProjectFollowUpAnswer(explicitlyNamed, followUpType, lang);
      }

      // If a single project is currently selected in conversation context
      if (this.selectedProject) {
        this.pendingFollowUpType = null;
        return this.deliverProjectFollowUpAnswer(this.selectedProject, followUpType, lang);
      }

      // If multiple projects were displayed and question is ambiguous
      if (this.lastDisplayedProjects && this.lastDisplayedProjects.length > 1) {
        this.pendingFollowUpType = followUpType;

        const promptTexts = {
          en: `Which project would you like to know more about? (${this.lastDisplayedProjects.map(p => p.shortName || p.title).join(', ')})`,
          bn: `আপনি কোন প্রজেক্টটি সম্পর্কে জানতে চান? (${this.lastDisplayedProjects.map(p => p.shortName || p.title).join(', ')})`,
          banglish: `Tumi kon project-ta somporke jante chao? (${this.lastDisplayedProjects.map(p => p.shortName || p.title).join(', ')})`
        };

        const clarificationActions = this.lastDisplayedProjects.map(p => ({
          label: p.shortName || p.title,
          query: p.title
        }));

        return {
          intentId: 'project_followup_ambiguous',
          response: {
            text: promptTexts[lang] || promptTexts.en,
            actions: clarificationActions
          }
        };
      }

      // If no project context exists yet
      const noContextTexts = {
        en: "Which project would you like to know about? Abdur has built JARVIS AI, FileForge, Polyglot, Image Classification CNN, Endless Runner Game, and Sentiment Analyzer. Or ask to show all projects! 🚀",
        bn: "আপনি কোন প্রজেক্টটি সম্পর্কে জানতে চান? আব্দুর রাজ্জাকের তৈরি প্রজেক্টগুলো হলো: JARVIS AI, FileForge, Polyglot, Image Classification CNN, Endless Runner Game এবং Sentiment Analyzer। আপনি সব প্রজেক্ট দেখতে বলতে পারেন! 🚀",
        banglish: "Tumi kon project-ta somporke jante chao? Abdur-er projects gulo holo: JARVIS AI, FileForge, Polyglot, Image Classification CNN, Endless Runner Game ar Sentiment Analyzer. Shob projects dekhte bolte paro! 🚀"
      };

      return {
        intentId: 'project_followup_no_context',
        response: {
          text: noContextTexts[lang] || noContextTexts.en,
          actions: [
            { label: lang === 'bn' ? 'সব প্রজেক্ট দেখাও' : (lang === 'banglish' ? 'Shob Projects Dekhao' : 'Show All Projects'), query: 'Show me your projects' }
          ]
        }
      };
    }

    deliverProjectFollowUpAnswer(project, type, lang) {
      if (type === 'github') {
        if (project.repoUrl && project.repoUrl.startsWith('http')) {
          const msgs = {
            en: `Here is the verified GitHub repository for ${project.title}:\n\n🔗 ${project.repoUrl}`,
            bn: `${project.title}-এর ভেরিফাইড গিটহাব রিপোজিটরি লিংক:\n\n🔗 ${project.repoUrl}`,
            banglish: `${project.title}-er verified GitHub repository link:\n\n🔗 ${project.repoUrl}`
          };
          return {
            intentId: 'project_github_link',
            response: {
              text: msgs[lang] || msgs.en,
              links: [
                { label: lang === 'bn' ? 'গিটহাব রিপোজিটরি খুলুন ↗' : 'Open GitHub Repository ↗', href: project.repoUrl, external: true }
              ]
            }
          };
        } else {
          const msgs = {
            en: `The dedicated source repository for ${project.title} is currently in active development or research. You can explore Abdur's public repositories on his GitHub profile:\n\nGitHub: https://github.com/Abdur07-svg`,
            bn: `${project.title}-এর নির্দিষ্ট রিপোজিটরিটি বর্তমানে ডেভেলপমেন্ট ও রিসার্চ পর্যায়ে রয়েছে। আপনি আব্দুর রাজ্জাকের পাবলিক কোড দেখতে ওনার গিটহাব প্রোফাইল ভিজিট করতে পারেন:\n\nGitHub: https://github.com/Abdur07-svg`,
            banglish: `${project.title}-er specific repository-ti ekhon development ba research phase-e ache. Abdur-er public code dekhte tar GitHub profile visit korte paro:\n\nGitHub: https://github.com/Abdur07-svg`
          };
          return {
            intentId: 'project_github_profile',
            response: {
              text: msgs[lang] || msgs.en,
              links: [
                { label: lang === 'bn' ? "আব্দুর এর গিটহাব প্রোফাইল ↗" : "Abdur's GitHub Profile ↗", href: "https://github.com/Abdur07-svg", external: true }
              ]
            }
          };
        }
      }

      if (type === 'tech') {
        const techList = (project.tech || []).join(', ');
        const msgs = {
          en: `🛠️ ${project.title} is built using verified technologies:\n• ${techList}\n\nCategory: ${project.category}`,
          bn: `🛠️ ${project.title}-এ ব্যবহৃত ভেরিফাইড প্রযুক্তিসমূহ হলো:\n• ${techList}\n\nক্যাটাগরি: ${project.category}`,
          banglish: `🛠️ ${project.title}-e bebohar kora verified tech stack:\n• ${techList}\n\nCategory: ${project.category}`
        };
        return {
          intentId: 'project_tech_stack',
          response: {
            text: msgs[lang] || msgs.en
          }
        };
      }

      // Type: 'more'
      const desc = (project.i18n && project.i18n[lang] && project.i18n[lang].description) || project.description;
      const highlights = (project.highlights || []).map(h => `• ${h}`).join('\n');
      const msgs = {
        en: `📌 ${project.title} — Detailed Overview\n\n• Category: ${project.category}\n• Description: ${desc}\n• Tech Stack: ${(project.tech || []).join(', ')}\n• Key Highlights:\n${highlights}\n• Status: ${project.status}`,
        bn: `📌 ${project.title} — বিস্তারিত বিবরণ\n\n• ক্যাটাগরি: ${project.category}\n• বিবরণ: ${desc}\n• টেকনোলজি: ${(project.tech || []).join(', ')}\n• প্রধান বৈশিষ্ট্যসমূহ:\n${highlights}\n• স্ট্যাটাস: ${project.status}`,
        banglish: `📌 ${project.title} — Detailed Overview\n\n• Category: ${project.category}\n• Overview: ${desc}\n• Tech Stack: ${(project.tech || []).join(', ')}\n• Highlights:\n${highlights}\n• Status: ${project.status}`
      };

      const links = [];
      if (project.liveUrl && project.liveUrl.startsWith('http')) {
        links.push({ label: lang === 'bn' ? 'লাইভ প্রজেক্ট দেখুন ↗' : 'Launch Live Demo ↗', href: project.liveUrl, external: true });
      }
      if (project.repoUrl && project.repoUrl.startsWith('http')) {
        links.push({ label: lang === 'bn' ? 'গিটহাব রিপোজিটরি ↗' : 'GitHub Repository ↗', href: project.repoUrl, external: true });
      }

      return {
        intentId: 'project_more_details',
        response: {
          text: msgs[lang] || msgs.en,
          links: links.length > 0 ? links : undefined
        }
      };
    }

    renderProjectCards(projects, introText) {
      const container = document.createElement('div');
      container.className = 'portfolio-chatbot-project-cards-wrap';

      if (introText) {
        const introEl = document.createElement('div');
        introEl.className = 'portfolio-chatbot-project-intro';
        introEl.textContent = introText;
        container.appendChild(introEl);
      }

      const listEl = document.createElement('div');
      listEl.className = 'portfolio-chatbot-project-cards';

      const lang = this.currentLanguage || 'en';
      const viewLabels = {
        en: 'View Project',
        bn: 'প্রজেক্ট দেখুন',
        banglish: 'View Project'
      };
      const repoLabels = {
        en: 'GitHub Repository',
        bn: 'GitHub রিপোজিটরি',
        banglish: 'GitHub Repository'
      };

      projects.forEach(p => {
        const card = document.createElement('article');
        card.className = 'portfolio-chatbot-project-card';
        card.setAttribute('data-id', p.id);

        if (p.image) {
          const thumbWrap = document.createElement('div');
          thumbWrap.className = 'portfolio-chatbot-project-thumb-wrap';
          const img = document.createElement('img');
          img.className = 'portfolio-chatbot-project-thumb';
          img.src = p.image;
          img.alt = `${p.title} thumbnail`;
          img.loading = 'lazy';
          img.onerror = () => { thumbWrap.style.display = 'none'; };
          thumbWrap.appendChild(img);
          card.appendChild(thumbWrap);
        }

        const body = document.createElement('div');
        body.className = 'portfolio-chatbot-project-body';

        const titleEl = document.createElement('h4');
        titleEl.className = 'portfolio-chatbot-project-title';
        titleEl.textContent = p.title;
        body.appendChild(titleEl);

        const descEl = document.createElement('p');
        descEl.className = 'portfolio-chatbot-project-desc';
        const localizedDesc = (p.i18n && p.i18n[lang] && p.i18n[lang].description) || p.description;
        descEl.textContent = localizedDesc;
        body.appendChild(descEl);

        if (p.tech && p.tech.length > 0) {
          const techWrap = document.createElement('div');
          techWrap.className = 'portfolio-chatbot-project-tech';
          p.tech.forEach(t => {
            const pill = document.createElement('span');
            pill.className = 'portfolio-chatbot-project-pill';
            pill.textContent = t;
            techWrap.appendChild(pill);
          });
          body.appendChild(techWrap);
        }

        const hasLive = Boolean(p.liveUrl && p.liveUrl.startsWith('http'));
        const hasRepo = Boolean(p.repoUrl && p.repoUrl.startsWith('http'));

        if (hasLive || hasRepo) {
          const linksWrap = document.createElement('div');
          linksWrap.className = 'portfolio-chatbot-project-links';

          if (hasLive) {
            const liveLink = document.createElement('a');
            liveLink.className = 'portfolio-chatbot-project-btn portfolio-chatbot-project-btn-primary';
            liveLink.href = p.liveUrl;
            liveLink.target = '_blank';
            liveLink.rel = 'noopener noreferrer';
            liveLink.setAttribute('aria-label', `Launch ${p.title} live demo`);
            liveLink.innerHTML = `${ICONS.external} <span>${viewLabels[lang] || viewLabels.en}</span>`;
            linksWrap.appendChild(liveLink);
          }

          if (hasRepo) {
            const repoLink = document.createElement('a');
            repoLink.className = 'portfolio-chatbot-project-btn portfolio-chatbot-project-btn-secondary';
            repoLink.href = p.repoUrl;
            repoLink.target = '_blank';
            repoLink.rel = 'noopener noreferrer';
            repoLink.setAttribute('aria-label', `View ${p.title} repository on GitHub`);
            repoLink.innerHTML = `${ICONS.github} <span>${repoLabels[lang] || repoLabels.en}</span>`;
            linksWrap.appendChild(repoLink);
          }

          body.appendChild(linksWrap);
        }

        card.appendChild(body);
        listEl.appendChild(card);
      });

      container.appendChild(listEl);
      return container;
    }

    detectFunAndGameIntent(rawText, norm) {
      const isPortfolioGameQuery =
        /(game\s*project|games?\s*(you|abdur|built|build|made|make|created|create|developed|develop|worked\s*on)|(built|build|made|make|created|create|developed|develop)\s*(\w+\s*)?games?|android\s*game|endless\s*runner|video\s*game\s*project|mobile\s*game|temple\s*run)/i.test(rawText) ||
        /what\s*games?\s*(have\s*you|did\s*abdur|has\s*abdur)\s*(built|build|made|make|created|create|developed|develop)/i.test(rawText) ||
        /tell\s*me\s*about\s*(your\s*)?games?/i.test(rawText) ||
        /any\s*games?\s*(you|abdur)\s*(built|build|made|make|created|create|developed|develop)/i.test(rawText);
      if (isPortfolioGameQuery) {
        return { isJoke: false, isGame: false };
      }

      if (/\b(projects?|skills?|education|experience|contact|email|socials?|who\s*is\s*abdur|about\s*abdur|resume|cv)\b/i.test(rawText) && !/\b(bored|play|game|joke|fun)\b/i.test(rawText)) {
        return { isJoke: false, isGame: false };
      }

      const englishJokeRegex = /\b(jokes?|funny|fun|humou?r|comedy|make\s*me\s*laugh|something\s*funny|fun\s*mood|mood\s*fresh|bored|boring|i'?m\s*bored|i\s*am\s*bored|hasao)\b/i;
      const bengaliJokeRegex = /(হাসির\s*কিছু|মজার\s*কিছু|মজা|জোক|জোকস|হাসাও|একটা\s*জোক|কৌতুক)/i;
      const banglishJokeRegex = /\b(ekta\s*joke|joke\s*bolo|jokes\s*bolo|hasir\s*kichu|hasao|hasir\s*kotha|koutuk)\b/i;
      const isJoke = englishJokeRegex.test(rawText) || englishJokeRegex.test(norm) || bengaliJokeRegex.test(rawText) || banglishJokeRegex.test(rawText);

      const englishGameRegex = /\b(games?|let'?s\s*play|play\s*something|mini\s*games?|gaming|play\s*a\s*game|wanna\s*play|want\s*to\s*play|khelbo|khela|khelte\s*chai)\b|^play$/i;
      const bengaliGameRegex = /(খেলতে\s*চাই|গেম\s*খেলি|গেম|খেলা|একটা\s*গেম\s*খেলি|খেলব)/i;
      const banglishGameRegex = /\b(game\s*kheli|ekta\s*game\s*kheli|khelte\s*chai|khelbo|khela\s*kheli)\b/i;
      const isGame = englishGameRegex.test(rawText) || englishGameRegex.test(norm) || bengaliGameRegex.test(rawText) || banglishGameRegex.test(rawText);

      return { isJoke, isGame };
    }

    getVisitorTimePeriod(date = new Date()) {
      const hour = date.getHours();
      if (hour >= 5 && hour < 12) return 'morning';
      if (hour >= 12 && hour < 17) return 'afternoon';
      if (hour >= 17 && hour < 21) return 'evening';
      return 'night';
    }

    getRandomGreetingItem(list) {
      if (!list || !Array.isArray(list) || list.length === 0) return '';
      return list[Math.floor(Math.random() * list.length)];
    }

    detectGreetingIntent(rawText, norm) {
      if (!rawText) return null;
      const clean = rawText.trim();

      // Check if message is a non-greeting time query (e.g. "What did you build this morning?")
      const startsWithGreetingPrefix = /^(?:(?:hi|hii|hello|hey|hola|yo|assalamu\s*alaikum|salam|namaste)[\s,!.-]+)?(good\s*(?:morning|afternoon|evening|night)|gud\s*(?:morning|afternoon|evening|night)|sweet\s*dreams|সুপ্রভাত|শুভ\s*(?:সকাল|অপরাহ্ন|দুপুর|সন্ধ্যা|রাত্রি|রাত)|shuvo\s*(?:shokal|sokal|dupur|sondha|shondha|ratri|raat)|subho\s*(?:shokal|sokal|dupur|sondha|shondha|ratri|raat)|(?:shokal|sokal|dupur|sondha|shondha|ratri)\b|\b(?:gm|ga|ge|gn)\b)(?:\s*(?:bolo|bolchi))?[\s,!.-]*/i;

      const nonGreetingTimeQuery =
        /\b(this|yesterday|tomorrow|every|last|in\s+the|at|during|for\s+the)\s+(morning|afternoon|evening|night)\b/i.test(clean) ||
        /\b(morning|afternoon|evening|night)\s+(shift|routine|runner|mode|theme|time|walk|run)\b/i.test(clean) ||
        /\b(built|build|made|did\s+you|what\s+did|who\s+did|how\s+did|which\s+project|projects?|skills?)\b.*\b(morning|afternoon|evening|night)\b/i.test(clean);

      if (nonGreetingTimeQuery && !startsWithGreetingPrefix.test(clean)) {
        return null;
      }

      // Check generic greetings (e.g., "Hi", "Hello", "Hey", "Assalamu Alaikum", "Salam", "Hola", "Sup", "What's up", "হ্যালো", "নমস্কার")
      const genericGreetingOnly = /^(?:hi|hii|hello|hey|hola|yo|sup|what'?s\s*up|assalamu\s*alaikum|salam|namaste|হ্যালো|নমস্কার|সালাম)[\s!.,?-]*$/i;
      if (genericGreetingOnly.test(clean)) {
        const isIslamic = /(assalamu\s*alaikum|salam|সালাম)/i.test(clean);
        const isBengali = /[\u0980-\u09FF]/.test(clean);
        return {
          isGreeting: true,
          timeType: 'generic',
          isIslamic,
          isBengali,
          remainderText: '',
          hasSubstantiveQuery: false
        };
      }

      const match = clean.match(startsWithGreetingPrefix);
      if (!match) return null;

      const matchedPhrase = match[0];
      const remainder = clean.slice(matchedPhrase.length).trim();

      // Check language
      const isBengali = /[\u0980-\u09FF]/.test(clean) ||
        /\b(shuvo|subho|shokal|sokal|dupur|sondha|shondha|ratri|raat|bolo|bolchi|kemon|acho|asen|aso|tumi|apni|bhalo)\b/i.test(clean);

      // Determine greeting period from matched phrase
      let timeType = null;
      if (/\b(morning|gm)\b/i.test(matchedPhrase) || /(সুপ্রভাত|শুভ\s*সকাল|shokal|sokal)/i.test(matchedPhrase)) {
        timeType = 'morning';
      } else if (/\b(afternoon|ga)\b/i.test(matchedPhrase) || /(শুভ\s*অপরাহ্ন|শুভ\s*দুপুর|dupur)/i.test(matchedPhrase)) {
        timeType = 'afternoon';
      } else if (/\b(evening|ge)\b/i.test(matchedPhrase) || /(শুভ\s*সন্ধ্যা|sondha|shondha)/i.test(matchedPhrase)) {
        timeType = 'evening';
      } else if (/\b(night|gn|sweet\s*dreams)\b/i.test(matchedPhrase) || /(শুভ\s*রাত্রি|শুভ\s*রাত|ratri|raat)/i.test(matchedPhrase)) {
        timeType = 'night';
      }

      if (!timeType) return null;

      // Check if farewell context
      const isFarewell = /\b(bye|goodbye|see\s*you|sleep|sleeping|going\s*to\s*sleep|turning\s*in|bed|bedtime|take\s*care|biday|বিদায়)\b/i.test(clean);

      // Check if remainder is substantive query or just pleasantry
      const isPleasantryOnly = !remainder ||
        /^(?:how\s*are\s*you(?:\s*doing)?|kemon\s*(?:acho|asen|aso|achen)|ki\s*(?:khobor|obostha)|কেমন\s*(?:আছো|আছেন)|bye|goodbye|take\s*care|see\s*you)[\s!.,?-]*$/i.test(remainder) ||
        /^[\s!.,?-]+$/.test(remainder);

      return {
        isGreeting: true,
        timeType,
        isFarewell,
        isBengali,
        remainderText: isPleasantryOnly ? '' : remainder,
        hasSubstantiveQuery: !isPleasantryOnly
      };
    }

    handleTimeAwareGreeting(rawText, norm, customDate = null) {
      const parsed = this.detectGreetingIntent(rawText, norm);
      if (!parsed || !parsed.isGreeting) return null;

      const greetingsData = this.timeGreetings || window.PORTFOLIO_TIME_GREETINGS;
      const lang = this.detectLanguage(rawText);
      const langDict = greetingsData && greetingsData[lang] ? greetingsData[lang] : (greetingsData ? greetingsData.en : null);

      const now = customDate || this.mockDate || new Date();
      const currentPeriod = this.getVisitorTimePeriod(now);

      let defaultActions = [
        { label: "About Abdur", query: "Who is Abdur?" },
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" },
        { label: "Technical Skills", query: "What are Abdur's technical skills?" },
        { label: "Contact Abdur", query: "How can I contact Abdur?" }
      ];

      if (this.i18n && this.i18n.greeting && this.i18n.greeting[lang] && this.i18n.greeting[lang].actions) {
        defaultActions = this.i18n.greeting[lang].actions;
      }

      // Handle generic greeting without time mismatch correction
      if (parsed.timeType === 'generic') {
        let greetingMsg = "Hello! 👋 I'm your Portfolio Assistant. I'm here to help you explore Abdur Rajjak's projects, technical skills, education, and contact details. What would you like to know?";
        if (parsed.isIslamic) {
          if (lang === 'bn') {
            greetingMsg = "ওয়ালাইকুম আসসালাম! 👋 স্বাগতম! আব্দুর রাজ্জাকের পোর্টফোলিও সম্পর্কে কী জানতে চান?";
          } else if (lang === 'banglish') {
            greetingMsg = "Walaikum Assalam! 👋 Swagotom! Abdur Rajjak-er portfolio somporke ki jante chao?";
          } else {
            greetingMsg = "Walaikum Assalam! 👋 Welcome to Abdur Rajjak's portfolio assistant. What would you like to explore today?";
          }
        } else if (lang === 'bn') {
          greetingMsg = "হ্যালো! 👋 আমি আব্দুর রাজ্জাকের পোর্টফোলিও অ্যাসিস্ট্যান্ট। আব্দুর রাজ্জাকের প্রজেক্ট, স্কিল বা শিক্ষা সম্পর্কে কী জানতে চান?";
        } else if (lang === 'banglish') {
          greetingMsg = "Hello! 👋 Ami Abdur Rajjak-er Portfolio Assistant. Abdur Rajjak-er projects, skills ba education somporke ki jante chao?";
        }
        return {
          intentId: 'greeting',
          response: {
            text: greetingMsg,
            actions: defaultActions
          }
        };
      }

      let greetingText = '';
      let isCorrection = false;

      if (parsed.timeType === 'night' && parsed.isFarewell) {
        greetingText = this.getRandomGreetingItem(langDict && langDict.correction ? langDict.correction.farewellNight : null) ||
          (lang === 'bn' ? "শুভ রাত্রি! 🌙 ভালো ঘুম হোক ও শান্তিময় বিশ্রাম কাটুক!" :
           lang === 'banglish' ? "Good night! 🌙 Bhalo ghum hok ar shundor shopno dekho!" :
           "Good night! 🌙 Sleep well and have wonderful dreams! Feel free to return anytime.");
      } else if (parsed.timeType === currentPeriod) {
        greetingText = this.getRandomGreetingItem(langDict && langDict.match ? langDict.match[currentPeriod] : null) ||
          (lang === 'bn' ? `শুভ ${currentPeriod}! কীভাবে সাহায্য করতে পারি?` :
           lang === 'banglish' ? `Good ${currentPeriod}! Ki bhabe help korte pari?` :
           `Good ${currentPeriod}! How can I help you today?`);
      } else if (parsed.timeType === 'evening' && currentPeriod === 'night') {
        greetingText = this.getRandomGreetingItem(langDict && langDict.correction ? langDict.correction.eveningLateAtNight : null) ||
          (lang === 'bn' ? "শুভ সন্ধ্যা! 🌙 তবে এখন কিন্তু রাত হয়ে গেছে—কীভাবে সাহায্য করতে পারি?" :
           lang === 'banglish' ? "Good evening! 🌙 Tobe ekhon kintu raat hoye geche—ki bhabe help korbo?" :
           "Good evening! 🌙 It's getting late into the night—hope you're having a relaxing time! How can I help you tonight?");
      } else if (parsed.timeType === 'night' && currentPeriod !== 'night') {
        isCorrection = true;
        const daytimeOptions = langDict && langDict.correction && langDict.correction.nightInDaytime ? langDict.correction.nightInDaytime[currentPeriod] : null;
        greetingText = this.getRandomGreetingItem(daytimeOptions) ||
          (lang === 'bn' ? `এখন কিন্তু ${currentPeriod}! শুভ ${currentPeriod}!` :
           lang === 'banglish' ? `Ekhon kintu ${currentPeriod}! Good ${currentPeriod}!` :
           `It's actually ${currentPeriod} right now! Good ${currentPeriod}!`);
      } else {
        isCorrection = true;
        let targetList = null;
        if (langDict && langDict.correction) {
          if (currentPeriod === 'morning') targetList = langDict.correction.toMorning;
          else if (currentPeriod === 'afternoon') targetList = langDict.correction.toAfternoon;
          else if (currentPeriod === 'evening') targetList = langDict.correction.toEvening;
          else if (currentPeriod === 'night') targetList = langDict.correction.toNight;
        }
        greetingText = this.getRandomGreetingItem(targetList) ||
          (lang === 'bn' ? `আপনার স্থানীয় সময় অনুযায়ী এখন ${currentPeriod}! শুভ ${currentPeriod}! কীভাবে সাহায্য করতে পারি?` :
           lang === 'banglish' ? `Tomar local time onujayi ekhon ${currentPeriod}! Good ${currentPeriod}! Ki bhabe help korte pari?` :
           `It's actually ${currentPeriod} right now according to your local time! Good ${currentPeriod}! How can I help you?`);
      }

      if (parsed.hasSubstantiveQuery && parsed.remainderText) {
        const subMatched = this.matchResponse(parsed.remainderText, { skipGreeting: true });
        if (subMatched && subMatched.response) {
          const resp = { ...subMatched.response };
          if (resp.text) {
            resp.text = `${greetingText}\n\n${resp.text}`;
          } else {
            resp.greetingText = greetingText;
          }
          return {
            intentId: isCorrection ? 'time_greeting_correction' : 'time_greeting',
            response: resp
          };
        }
      }

      return {
        intentId: isCorrection ? 'time_greeting_correction' : 'time_greeting',
        response: {
          text: greetingText,
          actions: defaultActions
        }
      };
    }

    matchResponse(rawText, options = {}) {
      if (!options || !options.skipLanguageUpdate) {
        this.currentLanguage = this.detectLanguage(rawText);
      }

      const norm = this.normalize(rawText);
      if (!norm) {
        const emptyTexts = {
          en: "I didn't catch that. Please type any question about Abdur's projects, skills, education, or contact details below!",
          bn: "আমি বুঝতে পারিনি। আব্দুর রাজ্জাকের প্রজেক্ট, স্কিল, পড়াশোনা বা যোগাযোগ সম্পর্কে নিচে যেকোনো প্রশ্ন লিখুন!",
          banglish: "Ami thik moto bujhte parini. Abdur-er projects, skills, porashona ba contact niye niche jekono question type koro!"
        };
        return {
          intentId: 'empty',
          response: {
            text: emptyTexts[this.currentLanguage] || emptyTexts.en
          }
        };
      }

      // Theme Control Command (High-priority website control action)
      const themeAction = this.handleThemeCommand(rawText, norm);
      if (themeAction) {
        return themeAction;
      }

      if (!options || !options.skipGreeting) {
        const greetingRes = this.handleTimeAwareGreeting(rawText, norm);
        if (greetingRes) {
          return greetingRes;
        }
      }

      // Smart Project Finder - Follow-Up Questions (Check before general project search)
      const followUpRes = this.handleProjectFollowUp(rawText, norm);
      if (followUpRes) {
        return followUpRes;
      }

      // Smart Project Finder - Natural Project Search
      const projectSearchRes = this.handleProjectSearch(rawText, norm);
      if (projectSearchRes) {
        return projectSearchRes;
      }

      const isPortfolioGameQuery =
        /(game\s*project|games?\s*(you|abdur|built|build|made|make|created|create|developed|develop|worked\s*on)|(built|build|made|make|created|create|developed|develop)\s*(\w+\s*)?games?|android\s*game|endless\s*runner|video\s*game\s*project|mobile\s*game|temple\s*run)/i.test(rawText) ||
        /what\s*games?\s*(have\s*you|did\s*abdur|has\s*abdur)\s*(built|build|made|make|created|create|developed|develop)/i.test(rawText) ||
        /tell\s*me\s*about\s*(your\s*)?games?/i.test(rawText) ||
        /any\s*games?\s*(you|abdur)\s*(built|build|made|make|created|create|developed|develop)/i.test(rawText);
      if (isPortfolioGameQuery) {
        const gameProj = this.intents.find(i => i.id === 'project_game');
        if (gameProj) {
          return {
            intentId: 'project_game',
            response: this.getLocalizedResponse('project_game', gameProj.response, this.currentLanguage)
          };
        }
      }

      if (this.activeNumberGame && !this.activeNumberGame.isWon && /^\s*(\d{1,2})\s*$/.test(rawText)) {
        const guess = parseInt(RegExp.$1, 10);
        if (guess >= 1 && guess <= 20) {
          this.activeNumberGame.attempts++;
          if (guess < this.activeNumberGame.secret) {
            return {
              intentId: 'number_guess',
              response: { text: `🎯 ${guess} is too low! Try higher ⬆️ (Attempt ${this.activeNumberGame.attempts})` }
            };
          } else if (guess > this.activeNumberGame.secret) {
            return {
              intentId: 'number_guess',
              response: { text: `🎯 ${guess} is too high! Try lower ⬇️ (Attempt ${this.activeNumberGame.attempts})` }
            };
          } else {
            this.activeNumberGame.isWon = true;
            return {
              intentId: 'number_guess',
              response: { text: `🎉 Correct! The number was ${this.activeNumberGame.secret}. You won in ${this.activeNumberGame.attempts} ${this.activeNumberGame.attempts === 1 ? 'attempt' : 'attempts'}!` }
            };
          }
        }
      }

      if (/(guess\s*the\s*number|number\s*(guessing\s*)?game|play\s*number\s*game|নাম্বার\s*খেলা)/i.test(rawText)) {
        return {
          intentId: 'number_game_card',
          response: { type: 'number_game_card' }
        };
      }

      const funIntent = this.detectFunAndGameIntent(rawText, norm);
      if (funIntent.isJoke || funIntent.isGame) {
        const contextualActions = [];
        const lang = this.currentLanguage || 'en';

        const actionLabels = {
          tell_joke: {
            en: '😂 Tell Me a Joke',
            bn: '😂 একটি জোক বলো',
            banglish: '😂 Ekta Joke Bolo'
          },
          play_game: {
            en: '🎮 Play a Game',
            bn: '🎮 একটি গেম খেলি',
            banglish: '🎮 Game Kheli'
          },
          brain_teaser: {
            en: '🧠 Brain Teaser',
            bn: '🧠 ব্রেন টিজার ধাঁধা',
            banglish: '🧠 Brain Teaser'
          }
        };

        if (funIntent.isJoke) {
          contextualActions.push({
            type: 'tell_joke',
            label: actionLabels.tell_joke[lang] || actionLabels.tell_joke.en
          });
        }
        if (funIntent.isGame) {
          contextualActions.push({
            type: 'play_game',
            label: actionLabels.play_game[lang] || actionLabels.play_game.en
          });
          contextualActions.push({
            type: 'brain_teaser',
            label: actionLabels.brain_teaser[lang] || actionLabels.brain_teaser.en
          });
        }

        const replyTexts = {
          both: {
            en: "Boredom banished! Pick a game or enjoy a joke below: 🌟",
            bn: "বিরক্তি দূর হোক! নিচের যে কোনো একটি গেম খেলুন বা জোক শুনুন: 🌟",
            banglish: "Boring lagche? Ekta game khelo ba moja-r joke shono niche theke: 🌟"
          },
          joke: {
            en: "Looking for some fun or a good laugh? Click below whenever you're ready! 😄",
            bn: "একটু আনন্দ বা হাসির কিছু খুঁজছেন? নিচে ক্লিক করুন! 😄",
            banglish: "Kichu mojar ba hasir jinis khujcho? Click koro niche! 😄"
          },
          game: {
            en: "Ready to play? Choose an activity below to get started! 🎮",
            bn: "খেলতে প্রস্তুত? শুরু করতে নিচের যেকোনো একটি বেছে নিন! 🎮",
            banglish: "Khelte ready? Nicher theke shuru koro! 🎮"
          }
        };

        const replyType = funIntent.isJoke && funIntent.isGame ? 'both' : (funIntent.isJoke ? 'joke' : 'game');
        const replyText = replyTexts[replyType][lang] || replyTexts[replyType].en;

        return {
          intentId: funIntent.isJoke && funIntent.isGame ? 'fun_and_games' : (funIntent.isJoke ? 'fun_joke_prompt' : 'fun_game_prompt'),
          response: {
            text: replyText,
            contextualActions: contextualActions
          }
        };
      }

      if (/(open\s*(the\s*)?calculator|show\s*(the\s*)?calculator|launch\s*calculator|calculator\s*(open|khulo|chalu|card|koro)?\b|^calc$|hisab\s*koro|ক্যালকুলেটর)/i.test(rawText) && !/[\d]/.test(rawText)) {
        return {
          intentId: 'calculator_card',
          response: { type: 'calculator_card' }
        };
      }

      if (/\b(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)\b/i.test(rawText)) {
        const calcRes = this.safeCalculate(rawText);
        if (calcRes.ok) {
          return {
            intentId: 'math_calc',
            response: { text: `🧮 Result: ${calcRes.expr} = ${calcRes.result}` }
          };
        }
      }

      const mathPrefixMatch = rawText.match(/^(calculate|what\s*is|how\s*much\s*is|calc)\s+(.+)$/i);
      if (mathPrefixMatch && /[\d]/.test(mathPrefixMatch[2]) && /[\+\-\*\/\%x×÷]/.test(mathPrefixMatch[2])) {
        const calcRes = this.safeCalculate(mathPrefixMatch[2]);
        if (calcRes.ok) {
          return {
            intentId: 'math_calc',
            response: { text: `🧮 Result: ${calcRes.expr.trim()} = ${calcRes.result}` }
          };
        } else if (calcRes.error === 'Cannot divide by zero') {
          return {
            intentId: 'math_calc',
            response: { text: `⚠️ Math Error: Cannot divide by zero.` }
          };
        }
      }

      if (/^[\s\d\+\-\*\/\%\(\)\.x×÷]+$/.test(rawText.trim()) && /[\+\-\*\/\%x×÷]/.test(rawText) && /\d/.test(rawText)) {
        const calcRes = this.safeCalculate(rawText.trim());
        if (calcRes.ok) {
          return {
            intentId: 'math_calc',
            response: { text: `🧮 Result: ${calcRes.expr.trim()} = ${calcRes.result}` }
          };
        } else if (calcRes.error === 'Cannot divide by zero') {
          return {
            intentId: 'math_calc',
            response: { text: `⚠️ Math Error: Cannot divide by zero.` }
          };
        }
      }

      let best = null;
      let maxScore = 0;

      for (const intent of this.intents) {
        let score = 0;

        if (intent.patterns && Array.isArray(intent.patterns)) {
          for (const pattern of intent.patterns) {
            if (pattern.test(rawText) || pattern.test(norm)) {
              score += 120 + (intent.priority || 0);
              break;
            }
          }
        }

        if (intent.keywords && Array.isArray(intent.keywords)) {
          for (const kw of intent.keywords) {
            const cleanKw = this.normalize(kw);
            if (norm === cleanKw) {
              score += 100 + (intent.priority || 0);
              break;
            } else if (cleanKw.length > 2 && (new RegExp('(?:^|\\s)' + cleanKw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?:\\s|$)')).test(norm)) {
              score += 40 + (intent.priority || 0);
            }
          }
        }

        if (score > maxScore) {
          maxScore = score;
          best = intent;
        }
      }

      if (best && maxScore >= 40) {
        return {
          intentId: best.id,
          response: this.getLocalizedResponse(best.id, best.response, this.currentLanguage)
        };
      }

      const fallbackTexts = {
        en: "I'm not sure about that yet. I'm Abdur's Portfolio Assistant — feel free to ask about Abdur's projects, technical skills, education, or contact details by typing below!",
        bn: "আমি এখনো এই বিষয়ে নিশ্চিত নই। আমি আব্দুর রাজ্জাকের পোর্টফোলিও সহকারী — ওনার প্রজেক্ট, টেকনিক্যাল স্কিল, পড়াশোনা বা যোগাযোগ সম্পর্কে নিচে প্রশ্ন লিখতে পারেন!",
        banglish: "Ami ekhono eta niye sure na. Ami Abdur-er Portfolio Assistant — Abdur-er projects, skills, porashona ba contact details niye jekono question type korte paro!"
      };

      return {
        intentId: 'fallback',
        response: {
          text: fallbackTexts[this.currentLanguage] || fallbackTexts.en
        }
      };
    }

    appendUserMsg(text) {
      const msg = document.createElement('div');
      msg.className = 'portfolio-chatbot-msg portfolio-chatbot-msg-user portfolio-chatbot-msg-anim';
      const bubble = document.createElement('div');
      bubble.className = 'portfolio-chatbot-bubble';
      bubble.textContent = text;
      msg.appendChild(bubble);
      this.messagesContainer.appendChild(msg);
      this.scrollToBottom();
    }

    renderContactCard() {
      const card = document.createElement('div');
      card.className = 'portfolio-chatbot-contact-card';

      const lang = this.currentLanguage || 'en';

      const titles = {
        en: 'Connect with Abdur',
        bn: 'আব্দুর এর সাথে যোগাযোগ করুন',
        banglish: 'Connect with Abdur'
      };

      const descs = {
        en: 'Choose your preferred way to get in touch.',
        bn: 'আপনার পছন্দের মাধ্যমে যোগাযোগ করুন।',
        banglish: 'Choose your preferred way to get in touch.'
      };

      const formBtnLabels = {
        en: 'Open Contact Form',
        bn: 'কন্টাক্ট ফর্ম খুলুন',
        banglish: 'Open Contact Form'
      };

      const header = document.createElement('div');
      header.className = 'portfolio-chatbot-contact-header';
      header.innerHTML = `
        <h4 class="portfolio-chatbot-contact-title">${titles[lang] || titles.en}</h4>
        <p class="portfolio-chatbot-contact-desc">${descs[lang] || descs.en}</p>
      `;
      card.appendChild(header);

      const emailLink = document.createElement('a');
      emailLink.className = 'portfolio-chatbot-contact-email';
      emailLink.href = 'mailto:abdur.rajjak52786@gmail.com';
      emailLink.setAttribute('href', 'mailto:abdur.rajjak52786@gmail.com');
      emailLink.setAttribute('aria-label', 'Send email to Abdur Rajjak');
      emailLink.setAttribute('title', 'Email Abdur Rajjak');
      emailLink.innerHTML = `
        ${ICONS.mail}
        <span class="portfolio-chatbot-contact-email-text">abdur.rajjak52786@gmail.com</span>
      `;
      card.appendChild(emailLink);

      const socialsWrap = document.createElement('div');
      socialsWrap.className = 'portfolio-chatbot-contact-socials';
      socialsWrap.setAttribute('role', 'group');
      socialsWrap.setAttribute('aria-label', "Abdur's Social Profiles");

      const socials = [
        { label: 'X / Twitter', url: 'https://x.com/Abdur2007', icon: ICONS.twitter },
        { label: 'GitHub', url: 'https://github.com/Abdur07-svg', icon: ICONS.github },
        { label: 'Instagram', url: 'https://instagram.com/void_ms07', icon: ICONS.instagram },
        { label: 'YouTube', url: 'https://youtube.com/@ar7ffofficial', icon: ICONS.youtube }
      ];

      socials.forEach(s => {
        const a = document.createElement('a');
        a.className = 'portfolio-chatbot-social-btn';
        a.href = s.url;
        a.setAttribute('href', s.url);
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', s.label);
        a.setAttribute('title', s.label);
        a.innerHTML = s.icon;
        socialsWrap.appendChild(a);
      });
      card.appendChild(socialsWrap);

      const formBtn = document.createElement('button');
      formBtn.type = 'button';
      formBtn.className = 'portfolio-chatbot-contact-form-btn';
      formBtn.setAttribute('aria-label', 'Open Contact Form on portfolio');
      formBtn.innerHTML = `
        ${ICONS.message}
        <span>${formBtnLabels[lang] || formBtnLabels.en}</span>
      `;
      formBtn.addEventListener('click', () => {
        const target = document.querySelector('#contact');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          if (window.innerWidth <= 480) {
            this.close();
          }
        }
      });
      card.appendChild(formBtn);

      return card;
    }

    renderCalculatorCard() {
      const card = document.createElement('div');
      card.className = 'portfolio-chatbot-companion-card portfolio-chatbot-calc-card';

      card.innerHTML = `
        <div class="portfolio-chatbot-card-header">
          <span class="portfolio-chatbot-card-title">🧮 Mini Calculator</span>
        </div>
        <div class="portfolio-chatbot-calc-screen">
          <div class="portfolio-chatbot-calc-expr" aria-live="polite"></div>
          <div class="portfolio-chatbot-calc-val" aria-live="polite">0</div>
        </div>
        <div class="portfolio-chatbot-calc-pad">
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key="C">C</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key="(">(</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key=")">)</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key="/">÷</button>

          <button type="button" class="portfolio-chatbot-calc-btn" data-key="7">7</button>
          <button type="button" class="portfolio-chatbot-calc-btn" data-key="8">8</button>
          <button type="button" class="portfolio-chatbot-calc-btn" data-key="9">9</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key="*">×</button>

          <button type="button" class="portfolio-chatbot-calc-btn" data-key="4">4</button>
          <button type="button" class="portfolio-chatbot-calc-btn" data-key="5">5</button>
          <button type="button" class="portfolio-chatbot-calc-btn" data-key="6">6</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key="-">−</button>

          <button type="button" class="portfolio-chatbot-calc-btn" data-key="1">1</button>
          <button type="button" class="portfolio-chatbot-calc-btn" data-key="2">2</button>
          <button type="button" class="portfolio-chatbot-calc-btn" data-key="3">3</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key="+">+</button>

          <button type="button" class="portfolio-chatbot-calc-btn" data-key="0">0</button>
          <button type="button" class="portfolio-chatbot-calc-btn" data-key=".">.</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-op" data-key="%">%</button>
          <button type="button" class="portfolio-chatbot-calc-btn portfolio-chatbot-calc-btn-eq" data-key="=">=</button>
        </div>
      `;

      let currentExpr = '';
      const exprEl = card.querySelector('.portfolio-chatbot-calc-expr');
      const valEl = card.querySelector('.portfolio-chatbot-calc-val');

      card.querySelectorAll('.portfolio-chatbot-calc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const key = btn.getAttribute('data-key');
          if (key === 'C') {
            currentExpr = '';
            exprEl.textContent = '';
            valEl.textContent = '0';
          } else if (key === '=') {
            if (!currentExpr) return;
            const res = this.safeCalculate(currentExpr);
            if (res.ok) {
              exprEl.textContent = currentExpr + ' =';
              valEl.textContent = String(res.result);
              currentExpr = String(res.result);
            } else {
              valEl.textContent = res.error || 'Error';
            }
          } else {
            if (currentExpr.length >= 24) return;
            currentExpr += key;
            valEl.textContent = currentExpr;
          }
        });
      });

      return card;
    }

    renderNumberGameCard() {
      const game = {
        secret: Math.floor(Math.random() * 20) + 1,
        attempts: 0,
        isWon: false
      };
      this.activeNumberGame = game;

      const card = document.createElement('div');
      card.className = 'portfolio-chatbot-companion-card portfolio-chatbot-numgame-card';

      card.innerHTML = `
        <div class="portfolio-chatbot-card-header">
          <span class="portfolio-chatbot-card-title">🎯 Guess the Number</span>
          <span class="portfolio-chatbot-numgame-attempts">Attempts: 0</span>
        </div>
        <div class="portfolio-chatbot-numgame-msg">I'm thinking of a number between 1 and 20!</div>
        <form class="portfolio-chatbot-numgame-form">
          <input type="number" min="1" max="20" placeholder="1–20" class="portfolio-chatbot-numgame-input" aria-label="Enter your guess between 1 and 20" />
          <button type="submit" class="portfolio-chatbot-numgame-submit">Guess</button>
        </form>
        <div class="portfolio-chatbot-numgame-actions" style="display: none;">
          <button type="button" class="portfolio-chatbot-companion-btn portfolio-chatbot-numgame-restart">Play Again 🔄</button>
        </div>
      `;

      const input = card.querySelector('.portfolio-chatbot-numgame-input');
      const form = card.querySelector('.portfolio-chatbot-numgame-form');
      const msgEl = card.querySelector('.portfolio-chatbot-numgame-msg');
      const attemptsEl = card.querySelector('.portfolio-chatbot-numgame-attempts');
      const actionsEl = card.querySelector('.portfolio-chatbot-numgame-actions');
      const restartBtn = card.querySelector('.portfolio-chatbot-numgame-restart');

      const makeGuess = (val) => {
        if (game.isWon) return;
        const guess = parseInt(val, 10);
        if (isNaN(guess) || guess < 1 || guess > 20) {
          msgEl.textContent = 'Please enter a valid number between 1 and 20!';
          msgEl.className = 'portfolio-chatbot-numgame-msg portfolio-chatbot-numgame-warn';
          return;
        }

        game.attempts++;
        attemptsEl.textContent = `Attempts: ${game.attempts}`;

        if (guess < game.secret) {
          msgEl.textContent = `${guess} is Too low! Try higher ⬆️`;
          msgEl.className = 'portfolio-chatbot-numgame-msg portfolio-chatbot-numgame-low';
          input.value = '';
          input.focus();
        } else if (guess > game.secret) {
          msgEl.textContent = `${guess} is Too high! Try lower ⬇️`;
          msgEl.className = 'portfolio-chatbot-numgame-msg portfolio-chatbot-numgame-high';
          input.value = '';
          input.focus();
        } else {
          game.isWon = true;
          msgEl.textContent = `🎉 Correct! The number was ${game.secret}. You won in ${game.attempts} ${game.attempts === 1 ? 'attempt' : 'attempts'}!`;
          msgEl.className = 'portfolio-chatbot-numgame-msg portfolio-chatbot-numgame-win';
          form.style.display = 'none';
          actionsEl.style.display = 'flex';
        }
      };

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        makeGuess(input.value);
      });

      restartBtn.addEventListener('click', () => {
        game.secret = Math.floor(Math.random() * 20) + 1;
        game.attempts = 0;
        game.isWon = false;
        attemptsEl.textContent = 'Attempts: 0';
        msgEl.textContent = "New secret number chosen! Guess between 1 and 20:";
        msgEl.className = 'portfolio-chatbot-numgame-msg';
        form.style.display = 'flex';
        actionsEl.style.display = 'none';
        input.value = '';
        input.focus();
      });

      return card;
    }

    renderRpsCard() {
      const card = document.createElement('div');
      card.className = 'portfolio-chatbot-companion-card portfolio-chatbot-rps-card';

      card.innerHTML = `
        <div class="portfolio-chatbot-card-header">
          <span class="portfolio-chatbot-card-title">✊ Rock Paper Scissors</span>
          <span class="portfolio-chatbot-rps-score">You: ${this.rpsScores.player} | Bot: ${this.rpsScores.bot} | Ties: ${this.rpsScores.ties}</span>
        </div>
        <div class="portfolio-chatbot-rps-status">Choose your weapon:</div>
        <div class="portfolio-chatbot-rps-choices">
          <button type="button" class="portfolio-chatbot-rps-btn" data-choice="Rock" title="Rock">🪨 Rock</button>
          <button type="button" class="portfolio-chatbot-rps-btn" data-choice="Paper" title="Paper">📄 Paper</button>
          <button type="button" class="portfolio-chatbot-rps-btn" data-choice="Scissors" title="Scissors">✂️ Scissors</button>
        </div>
        <div class="portfolio-chatbot-rps-result" style="display: none;"></div>
        <div class="portfolio-chatbot-rps-footer">
          <button type="button" class="portfolio-chatbot-link-action portfolio-chatbot-rps-reset">Reset Score</button>
          <button type="button" class="portfolio-chatbot-link-action portfolio-chatbot-rps-exit" style="margin-left: 8px;">Exit Game ✖</button>
        </div>
      `;

      const scoreEl = card.querySelector('.portfolio-chatbot-rps-score');
      const statusEl = card.querySelector('.portfolio-chatbot-rps-status');
      const resultEl = card.querySelector('.portfolio-chatbot-rps-result');
      const resetBtn = card.querySelector('.portfolio-chatbot-rps-reset');
      const exitBtn = card.querySelector('.portfolio-chatbot-rps-exit');

      const icons = { Rock: '🪨', Paper: '📄', Scissors: '✂️' };
      const choices = ['Rock', 'Paper', 'Scissors'];

      card.querySelectorAll('.portfolio-chatbot-rps-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const userChoice = btn.getAttribute('data-choice');
          const botChoice = choices[Math.floor(Math.random() * choices.length)];

          let outcome = '';
          if (userChoice === botChoice) {
            this.rpsScores.ties++;
            outcome = "🤝 It's a Tie!";
          } else if (
            (userChoice === 'Rock' && botChoice === 'Scissors') ||
            (userChoice === 'Paper' && botChoice === 'Rock') ||
            (userChoice === 'Scissors' && botChoice === 'Paper')
          ) {
            this.rpsScores.player++;
            outcome = "🎉 You Win!";
          } else {
            this.rpsScores.bot++;
            outcome = "🤖 Bot Wins!";
          }

          scoreEl.textContent = `You: ${this.rpsScores.player} | Bot: ${this.rpsScores.bot} | Ties: ${this.rpsScores.ties}`;
          statusEl.textContent = `You: ${icons[userChoice]} ${userChoice} vs Bot: ${icons[botChoice]} ${botChoice}`;
          resultEl.textContent = outcome;
          resultEl.style.display = 'block';
        });
      });

      resetBtn.addEventListener('click', () => {
        this.rpsScores = { player: 0, bot: 0, ties: 0 };
        scoreEl.textContent = `You: 0 | Bot: 0 | Ties: 0`;
        statusEl.textContent = 'Score reset! Choose your weapon:';
        resultEl.style.display = 'none';
      });

      if (exitBtn) {
        exitBtn.addEventListener('click', () => {
          const exitTexts = {
            en: "Game exited! What would you like to explore next in Abdur's portfolio?",
            bn: "খেলা সমাপ্ত! আব্দুর রাজ্জাকের পোর্টফোলিও সম্পর্কে আর কী দেখতে চান?",
            banglish: "Game exited! Abdur-er portfolio niye ar ki explore korte chao?"
          };
          this.appendBotMsg({
            text: exitTexts[this.currentLanguage] || exitTexts.en
          });
        });
      }

      return card;
    }

    renderBrainTeaserCard() {
      const card = document.createElement('div');
      card.className = 'portfolio-chatbot-companion-card portfolio-chatbot-teaser-card';

      const riddles = this.riddles && this.riddles.length > 0 ? this.riddles : [
        {
          riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
          answer: "An Echo",
          keywords: ["echo"]
        }
      ];

      let currentIdx = Math.floor(Math.random() * riddles.length);
      let currentRiddle = riddles[currentIdx];

      card.innerHTML = `
        <div class="portfolio-chatbot-card-header">
          <span class="portfolio-chatbot-card-title">🧠 Brain Teaser Riddle</span>
          <button type="button" class="portfolio-chatbot-link-action portfolio-chatbot-teaser-exit">Exit ✖</button>
        </div>
        <div class="portfolio-chatbot-teaser-riddle">${currentRiddle.riddle}</div>
        <form class="portfolio-chatbot-teaser-form">
          <input type="text" placeholder="Type your guess..." class="portfolio-chatbot-teaser-input" aria-label="Guess the riddle answer" />
          <button type="submit" class="portfolio-chatbot-teaser-submit">Check</button>
        </form>
        <div class="portfolio-chatbot-teaser-feedback" style="display: none;"></div>
        <div class="portfolio-chatbot-card-actions">
          <button type="button" class="portfolio-chatbot-link-action portfolio-chatbot-teaser-reveal">Reveal Answer 💡</button>
          <div class="portfolio-chatbot-card-actions-right">
            <button type="button" class="portfolio-chatbot-companion-btn portfolio-chatbot-teaser-next">Next Riddle 🔄</button>
          </div>
        </div>
      `;

      const form = card.querySelector('.portfolio-chatbot-teaser-form');
      const input = card.querySelector('.portfolio-chatbot-teaser-input');
      const feedback = card.querySelector('.portfolio-chatbot-teaser-feedback');
      const revealBtn = card.querySelector('.portfolio-chatbot-teaser-reveal');
      const nextBtn = card.querySelector('.portfolio-chatbot-teaser-next');
      const exitBtn = card.querySelector('.portfolio-chatbot-teaser-exit');
      const riddleEl = card.querySelector('.portfolio-chatbot-teaser-riddle');

      const updateRiddleView = () => {
        currentRiddle = riddles[currentIdx];
        riddleEl.textContent = currentRiddle.riddle;
        input.value = '';
        feedback.className = 'portfolio-chatbot-teaser-feedback';
        feedback.style.display = 'none';
        feedback.textContent = '';
        input.focus();
      };

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = input.value.trim().toLowerCase();
        if (!val) return;

        const isMatch = currentRiddle.keywords.some(kw => val.includes(kw.toLowerCase()));
        if (isMatch) {
          feedback.textContent = `🎉 Correct! The answer is: ${currentRiddle.answer}`;
          feedback.className = 'portfolio-chatbot-teaser-feedback feedback-correct';
          feedback.style.display = 'block';
        } else {
          feedback.textContent = `🤔 Not quite! Try again, or click "Reveal Answer" for help.`;
          feedback.className = 'portfolio-chatbot-teaser-feedback feedback-wrong';
          feedback.style.display = 'block';
        }
      });

      revealBtn.addEventListener('click', () => {
        feedback.textContent = `💡 Answer: ${currentRiddle.answer}`;
        feedback.className = 'portfolio-chatbot-teaser-feedback feedback-revealed';
        feedback.style.display = 'block';
      });

      nextBtn.addEventListener('click', () => {
        currentIdx = (currentIdx + 1 + Math.floor(Math.random() * (riddles.length - 1))) % riddles.length;
        updateRiddleView();
      });

      if (exitBtn) {
        exitBtn.addEventListener('click', () => {
          const exitTexts = {
            en: "Hope you enjoyed the riddle! Feel free to ask about Abdur's projects, skills, or anything else.",
            bn: "ধাঁধাটি ভালো লেগেছে আশা করি! আব্দুর রাজ্জাকের প্রজেক্ট, স্কিল বা অন্য কিছু সম্পর্কে জিজ্ঞাসা করতে পারেন।",
            banglish: "Hope you enjoyed the riddle! Abdur-er projects ba skills niye jekono question korte paro."
          };
          this.appendBotMsg({
            text: exitTexts[this.currentLanguage] || exitTexts.en
          });
        });
      }

      return card;
    }

    handleContextAction(actionType) {
      const lang = this.currentLanguage || 'en';
      if (actionType === 'tell_joke') {
        const joke = this.getRandomJoke();
        const anotherLabels = {
          en: '😂 Another Joke 🔄',
          bn: '😂 আরেকটি জোক 🔄',
          banglish: '😂 Arekta Joke 🔄'
        };
        this.appendBotMsg({
          text: joke,
          contextualActions: [
            { type: 'tell_joke', label: anotherLabels[lang] || anotherLabels.en }
          ]
        });
      } else if (actionType === 'play_game') {
        this.appendBotMsg({
          type: 'rps_card'
        });
      } else if (actionType === 'brain_teaser') {
        this.appendBotMsg({
          type: 'brain_teaser_card'
        });
      }
    }

    appendBotMsg(res) {
      if (!res) return;
      const msg = document.createElement('div');
      msg.className = 'portfolio-chatbot-msg portfolio-chatbot-msg-bot portfolio-chatbot-msg-anim';

      const bubble = document.createElement('div');
      bubble.className = 'portfolio-chatbot-bubble';

      if (res.greetingText && (res.contactCard || res.type || res.projectCards)) {
        const intro = document.createElement('div');
        intro.className = 'portfolio-chatbot-card-intro';
        intro.style.cssText = 'padding: 6px 12px 6px; font-size: 13.5px; opacity: 0.92; line-height: 1.45;';
        intro.textContent = res.greetingText;
        bubble.appendChild(intro);
      }

      if (res.projectCards && Array.isArray(res.projectCards)) {
        msg.classList.add('portfolio-chatbot-msg-card');
        bubble.classList.add('portfolio-chatbot-bubble-card');
        bubble.appendChild(this.renderProjectCards(res.projectCards, res.introText));
      } else if (res.contactCard) {
        msg.classList.add('portfolio-chatbot-msg-card');
        bubble.classList.add('portfolio-chatbot-bubble-card');
        bubble.appendChild(this.renderContactCard());
      } else if (res.type === 'calculator_card') {
        msg.classList.add('portfolio-chatbot-msg-card');
        bubble.classList.add('portfolio-chatbot-bubble-card');
        bubble.appendChild(this.renderCalculatorCard());
      } else if (res.type === 'number_game_card') {
        msg.classList.add('portfolio-chatbot-msg-card');
        bubble.classList.add('portfolio-chatbot-bubble-card');
        bubble.appendChild(this.renderNumberGameCard());
      } else if (res.type === 'rps_card') {
        msg.classList.add('portfolio-chatbot-msg-card');
        bubble.classList.add('portfolio-chatbot-bubble-card');
        bubble.appendChild(this.renderRpsCard());
      } else if (res.type === 'brain_teaser_card') {
        msg.classList.add('portfolio-chatbot-msg-card');
        bubble.classList.add('portfolio-chatbot-bubble-card');
        bubble.appendChild(this.renderBrainTeaserCard());
      } else {
        bubble.textContent = res.text;

        if (res.contextualActions && Array.isArray(res.contextualActions) && res.contextualActions.length > 0) {
          const actionsWrap = document.createElement('div');
          actionsWrap.className = 'portfolio-chatbot-context-actions';
          actionsWrap.setAttribute('role', 'group');
          actionsWrap.setAttribute('aria-label', 'Contextual Fun Actions');

          res.contextualActions.forEach(action => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'portfolio-chatbot-action-btn';
            btn.setAttribute('data-action', action.type);
            btn.textContent = action.label;

            btn.addEventListener('click', () => {
              btn.disabled = true;
              this.handleContextAction(action.type);
            });

            actionsWrap.appendChild(btn);
          });

          bubble.appendChild(actionsWrap);
        }

        if (res.links && Array.isArray(res.links) && res.links.length > 0) {
          const linksWrap = document.createElement('div');
          linksWrap.className = 'portfolio-chatbot-links';

          res.links.forEach(link => {
            if (!link.href) return;
            const a = document.createElement('a');
            a.className = 'portfolio-chatbot-link';
            a.href = link.href;
            a.textContent = link.label || 'Learn more';

            if (link.external || link.href.startsWith('http') || link.href.startsWith('mailto:')) {
              if (!link.href.startsWith('mailto:')) {
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
              }
              a.innerHTML = `${link.label} ${ICONS.external}`;
            } else {
              a.addEventListener('click', (e) => {
                if (link.href.startsWith('#')) {
                  const target = document.querySelector(link.href);
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    if (window.innerWidth <= 480) this.close();
                  }
                }
              });
            }
            linksWrap.appendChild(a);
          });

          bubble.appendChild(linksWrap);
        }
      }

      if (res.actions && Array.isArray(res.actions) && res.actions.length > 0) {
        const actionsWrap = document.createElement('div');
        actionsWrap.className = 'portfolio-chatbot-context-actions';
        actionsWrap.setAttribute('role', 'group');
        actionsWrap.setAttribute('aria-label', 'Suggested Actions');

        res.actions.forEach(action => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'portfolio-chatbot-action-btn';
          btn.textContent = action.label;

          btn.addEventListener('click', () => {
            if (this.input) {
              this.input.value = action.query || action.label;
            }
            this.handleUserSubmit();
          });

          actionsWrap.appendChild(btn);
        });

        bubble.appendChild(actionsWrap);
      }

      msg.appendChild(bubble);
      this.messagesContainer.appendChild(msg);
      this.scrollToBottom();
    }

    setTyping(typing) {
      this.isTyping = typing;
      const hasText = Boolean(this.input && this.input.value && this.input.value.trim());

      if (this.sendBtn) {
        this.sendBtn.disabled = typing || !hasText;
        if (typing) {
          this.sendBtn.classList.add('portfolio-chatbot-send-loading');
          this.sendBtn.setAttribute('aria-busy', 'true');
        } else {
          this.sendBtn.classList.remove('portfolio-chatbot-send-loading');
          this.sendBtn.removeAttribute('aria-busy');
        }
      }

      if (this.input) {
        this.input.setAttribute('aria-busy', typing ? 'true' : 'false');
      }

      const existingWrap = this.messagesContainer.querySelector('.portfolio-chatbot-typing-wrap');

      if (typing) {
        if (!existingWrap) {
          const wrap = document.createElement('div');
          wrap.className = 'portfolio-chatbot-msg portfolio-chatbot-msg-bot portfolio-chatbot-typing-wrap';
          wrap.setAttribute('role', 'status');
          wrap.setAttribute('aria-live', 'polite');
          wrap.setAttribute('aria-label', 'Portfolio Assistant is typing');

          wrap.innerHTML = `
            <div class="portfolio-chatbot-typing">
              <span class="portfolio-chatbot-typing-icon" aria-hidden="true">
                <picture class="portfolio-chatbot-typing-ghost">
                  <source srcset="images/chatbot-ghost.webp" type="image/webp" />
                  <img src="images/chatbot-ghost.png" alt="" class="portfolio-chatbot-typing-ghost-img" />
                </picture>
              </span>
              <span class="portfolio-chatbot-typing-label">Portfolio Assistant is typing</span>
              <span class="portfolio-chatbot-dots" aria-hidden="true">
                <span class="portfolio-chatbot-dot"></span>
                <span class="portfolio-chatbot-dot"></span>
                <span class="portfolio-chatbot-dot"></span>
              </span>
            </div>
          `;
          this.messagesContainer.appendChild(wrap);
          this.scrollToBottom();
        }
      } else {
        if (existingWrap) existingWrap.remove();
        const leftovers = this.messagesContainer.querySelectorAll('.portfolio-chatbot-typing-wrap, .portfolio-chatbot-typing');
        leftovers.forEach(el => el.remove());
      }
    }

    scrollToBottom() {
      requestAnimationFrame(() => {
        if (this.messagesContainer) {
          this.messagesContainer.scrollTo({
            top: this.messagesContainer.scrollHeight,
            behavior: 'smooth'
          });
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.portfolioChatbotInstance = new PortfolioChatbot();
    });
  } else {
    window.portfolioChatbotInstance = new PortfolioChatbot();
  }
})();
