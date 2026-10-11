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
      this.lastJokeIndex = -1;
      this.rpsScores = { player: 0, bot: 0, ties: 0 };
      this.activeNumberGame = null;
      this.isSending = false;

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
      return `😄 Here's a tech joke for you:\n\n${this.jokes[idx]}\n\n(Ask for 'another joke' if you'd like another!)`;
    }

    calculateResponseDelay(intentId, responseText) {
      const companionIntents = ['calculator_card', 'number_game_card', 'rps_card', 'math_calc', 'joke', 'number_guess', 'game_clarification'];
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

      const shortIntents = ['greeting', 'thanks', 'how_are_you', 'empty', 'bye'];
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

    matchResponse(rawText) {
      const norm = this.normalize(rawText);
      if (!norm) {
        return {
          intentId: 'empty',
          response: {
            text: "I didn't catch that. Please type any question about Abdur's projects, skills, education, or contact details below!"
          }
        };
      }

      if (/(game\s*project|android\s*game|endless\s*runner|mobile\s*game|temple\s*run)/i.test(rawText)) {
        const gameProj = this.intents.find(i => i.id === 'project_game');
        if (gameProj) {
          return { intentId: 'project_game', response: gameProj.response };
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
              response: { text: `🎉 Correct! The number was ${this.activeNumberGame.secret}. You won in ${this.activeNumberGame.attempts} ${this.activeNumberGame.attempts === 1 ? 'attempt' : 'attempts'}! Type 'number game' to play again.` }
            };
          }
        }
      }

      if (/(play\s*)?(rock\s*paper\s*scissors|stone\s*paper\s*scissors|rock,\s*paper,\s*scissors|^rps$|play\s*rps|পাথর\s*কাগজ\s*কাঁচি)/i.test(rawText)) {
        return {
          intentId: 'rps_card',
          response: { type: 'rps_card' }
        };
      }

      if (/(play\s*)?(number\s*(game|guessing|khela|kheli)|guessing\s*game|guess\s*the\s*number|নাম্বার\s*খেলা)|let'?s\s*play(\s*a)?\s*game|game\s*khelbo|khela\s*kori/i.test(rawText)) {
        return {
          intentId: 'number_game_card',
          response: { type: 'number_game_card' }
        };
      }

      if (/^(game|play|khela|play\s*a\s*game|khelbo|let'?s\s*play|lets\s*play|wanna\s*play|khelte\s*chai)$/i.test(rawText.trim()) || /^(game|play|khela|khelbo|lets?\s*play)$/i.test(norm)) {
        return {
          intentId: 'game_clarification',
          response: {
            text: "🎮 Looking for something to play? You can try:\n• Number Guessing Game (1–20) — type 'number game'\n• Rock Paper Scissors — type 'rock paper scissors'\n• Or explore Abdur's 3D Android Endless Runner Game — type 'game project'!"
          }
        };
      }

      if (/\b(jokes?|জোক|জোকস|মজার\s*কথা|হাসাও)\b|make\s*me\s*laugh|funny\s*(story|one|tech)/i.test(rawText)) {
        return {
          intentId: 'joke',
          response: {
            text: this.getRandomJoke()
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
            } else if (cleanKw.length > 2 && norm.includes(cleanKw)) {
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
          response: best.response
        };
      }

      return {
        intentId: 'fallback',
        response: {
          text: "I'm not sure about that yet. I'm Abdur's Portfolio Assistant — feel free to ask about Abdur's projects, technical skills, education, or contact details by typing below!"
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

      const header = document.createElement('div');
      header.className = 'portfolio-chatbot-contact-header';
      header.innerHTML = `
        <h4 class="portfolio-chatbot-contact-title">Connect with Abdur</h4>
        <p class="portfolio-chatbot-contact-desc">Choose your preferred way to get in touch.</p>
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
        <span>Open Contact Form</span>
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
        </div>
      `;

      const scoreEl = card.querySelector('.portfolio-chatbot-rps-score');
      const statusEl = card.querySelector('.portfolio-chatbot-rps-status');
      const resultEl = card.querySelector('.portfolio-chatbot-rps-result');
      const resetBtn = card.querySelector('.portfolio-chatbot-rps-reset');

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

      return card;
    }

    appendBotMsg(res) {
      if (!res) return;
      const msg = document.createElement('div');
      msg.className = 'portfolio-chatbot-msg portfolio-chatbot-msg-bot portfolio-chatbot-msg-anim';

      const bubble = document.createElement('div');
      bubble.className = 'portfolio-chatbot-bubble';

      if (res.contactCard) {
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
      } else {
        bubble.textContent = res.text;

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
