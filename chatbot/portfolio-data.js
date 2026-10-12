window.PORTFOLIO_DATA = {
  profile: {
    name: "Abdur Rajjak",
    nickname: "Abdur",
    role: "1st Year B.Tech CSE (Data Science) Student & Developer",
    status: "Available for new opportunities",
    location: "West Bengal, India",
    bio: "A 1st-year CSE student from West Bengal and aspiring Data Scientist with a passion for machine learning, AI, predictive models, and intelligent web applications using Python.",
    idol: "Cristiano Ronaldo (inspired by his discipline, consistency, and 'In my mind, I'm always the best' mindset).",
    timeline: [
      {
        year: "2026 - Present",
        title: "B.Tech in CSE (Data Science)",
        role: "Student",
        desc: "Preparing and beginning undergraduate studies in Computer Science and Engineering with a specialization in Data Science."
      },
      {
        year: "Upcoming",
        title: "Data Scientist / ML Engineer",
        role: "Learning & Building",
        desc: "Building predictive models, exploratory data analysis, and intelligent solutions."
      },
      {
        year: "Upcoming",
        title: "Deep Learning Researcher",
        role: "Experimentation",
        desc: "Experimenting with neural networks, computer vision, NLP, and AI APIs."
      }
    ]
  },

  contact: {
    email: "abdur.rajjak52786@gmail.com",
    github: "https://github.com/Abdur07-svg",
    twitter: "https://x.com/Abdur2007",
    instagram: "https://instagram.com/void_ms07",
    youtube: "https://youtube.com/@ar7ffofficial",
    portfolioUrl: "https://abdur07-svg.github.io/Abdur-portfolio/",
    formAction: "https://formspree.io/f/xqewqknr",
    location: "West Bengal, India"
  },

  skills: {
    languages: ["Python", "JavaScript", "C++", "Java", "SQL", "HTML5", "CSS3"],
    dataScienceAndML: ["Pandas", "NumPy", "TensorFlow", "PyTorch", "OpenCV", "NLTK", "Jupyter Notebook"],
    toolsAndPlatforms: ["GitHub", "Git", "VS Code", "Android Studio", "LiveKit", "Gemini API", "Three.js", "GSAP"]
  },

  projects: [
    {
      id: "jarvis",
      title: "JARVIS AI Assistant",
      shortName: "JARVIS AI",
      category: "Voice AI & Conversational Assistant",
      description: "A voice-controlled AI assistant built with Python, LiveKit, and the Gemini API. Features real-time wake word detection and intelligent conversational abilities.",
      tech: ["Python", "Gemini API", "LiveKit"],
      liveUrl: null,
      githubUrl: "https://github.com/Abdur07-svg",
      status: "In Development / Upcoming GitHub link",
      highlights: [
        "Voice-activated wake word detection",
        "Real-time conversational streaming with LiveKit",
        "Powered by Google Gemini API"
      ]
    },
    {
      id: "fileforge",
      title: "FileForge",
      shortName: "FileForge",
      category: "Client-Side Privacy File Toolkit",
      description: "A privacy-focused, 100% client-side web toolkit for converting, compressing, editing, and processing images and PDFs directly in the browser without uploading files to any server.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "https://abdur07-svg.github.io/FileForge/",
      githubUrl: "https://github.com/Abdur07-svg/FileForge",
      status: "Live & Deployed",
      highlights: [
        "100% Client-side processing — zero server uploads",
        "Image format conversion & compression",
        "PDF manipulation & utilities in browser"
      ]
    },
    {
      id: "polyglot",
      title: "Polyglot",
      shortName: "Polyglot Translator",
      category: "Smart Web Translator",
      description: "A responsive, accessible web-based translator designed to make multilingual communication seamless, fast, and simple across all devices.",
      tech: ["HTML5", "CSS3", "JavaScript", "Translation API"],
      liveUrl: "https://abdur07-svg.github.io/Translator/",
      githubUrl: "https://github.com/Abdur07-svg/Translator",
      status: "Live & Deployed",
      highlights: [
        "Instant multi-language text translation",
        "Clean, responsive UI on mobile and desktop",
        "Fast and accessible translation tools"
      ]
    },
    {
      id: "image_classification",
      title: "Image Classification CNN",
      shortName: "Image Classifier",
      category: "Computer Vision & Deep Learning",
      description: "A deep learning model utilizing Convolutional Neural Networks (CNN) to accurately classify and detect objects and patterns within digital images.",
      tech: ["TensorFlow", "OpenCV", "Python"],
      liveUrl: null,
      githubUrl: "https://github.com/Abdur07-svg",
      status: "Research & Modeling",
      highlights: [
        "Convolutional Neural Network (CNN) architecture",
        "Image preprocessing with OpenCV",
        "Trained using TensorFlow"
      ]
    },
    {
      id: "endless_runner",
      title: "Endless Runner Game",
      shortName: "Endless Runner",
      category: "Mobile Game Development",
      description: "A Temple Run-style 3D endless runner mobile video game built using Android Studio and Java with dynamic obstacles and score tracking.",
      tech: ["Android Studio", "Java"],
      liveUrl: null,
      githubUrl: "https://github.com/Abdur07-svg",
      status: "Mobile Game Project",
      highlights: [
        "3D endless runner gameplay mechanics",
        "Native Android development with Java",
        "Obstacle generation and score tracking"
      ]
    },
    {
      id: "sentiment_analyzer",
      title: "Sentiment Analyzer",
      shortName: "NLP Sentiment Analyzer",
      category: "Natural Language Processing",
      description: "A Natural Language Processing (NLP) model to analyze text data, customer feedback, or tweets and predict sentiment as positive, negative, or neutral.",
      tech: ["NLTK", "PyTorch", "Python"],
      liveUrl: null,
      githubUrl: "https://github.com/Abdur07-svg",
      status: "NLP Machine Learning Project",
      highlights: [
        "Text tokenization & preprocessing with NLTK",
        "Deep learning classifier built with PyTorch",
        "Positive / Neutral / Negative sentiment classification"
      ]
    }
  ],

  quickActions: [
    { label: "Projects", query: "Tell me about Abdur's projects" },
    { label: "Skills", query: "What are Abdur's technical skills?" },
    { label: "About Abdur", query: "Who is Abdur?" },
    { label: "About Bot", query: "Who are you?" }
  ]
};

window.PORTFOLIO_INTENTS = [
  {
    id: "greeting",
    priority: 40,
    keywords: [
      "hi", "hii", "hello", "hey", "hola", "sup", "yo", "good morning", "good afternoon",
      "good evening", "assalamu alaikum", "salam", "namaste", "kem cho",
      "kemon acho", "ki khobor", "ki obostha", "kemon aso", "helo", "hy", "hlw"
    ],
    patterns: [
      /^(hi|hello|hey|hola|yo|salam|assalamu\s*alaikum|namaste|hlw)[\s!.]*$/i,
      /^(good\s*(morning|afternoon|evening|day))[\s!.]*$/i,
      /^(kemon\s*(acho|asen|aso)|ki\s*(khobor|obostha))[\s!?.]*$/i,
      /^(কেমন\s*(আছো|আছেন)|হ্যালো|নমস্কার|সালাম)[\s!?.]*$/i
    ],
    response: {
      text: "Hello! 👋 I'm your Portfolio Assistant. I'm here to help you explore Abdur Rajjak's projects, technical skills, education, and contact details. What would you like to know?",
      actions: [
        { label: "About Abdur", query: "Who is Abdur?" },
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" },
        { label: "Technical Skills", query: "What are Abdur's technical skills?" },
        { label: "Contact Abdur", query: "How can I contact Abdur?" }
      ]
    }
  },
  {
    id: "how_are_you",
    priority: 45,
    keywords: [
      "how are you", "how r u", "how do you do", "kemon acho", "kemon asen", "kemon achen",
      "tumi kemon acho", "apni kemon achen"
    ],
    patterns: [
      /how\s*(are|r)\s*you/i,
      /(kemon\s*(acho|asen|achen|aso))/i,
      /(কেমন\s*(আছো|আছেন))/i
    ],
    response: {
      text: "I'm running smoothly and ready to assist you! 😊 I can answer questions about Abdur's projects, technical skills, academic journey in CSE (Data Science), or help you reach out to him.",
      actions: [
        { label: "About Abdur", query: "Who is Abdur?" },
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" }
      ]
    }
  },
  {
    id: "who_made_you",
    priority: 88,
    keywords: [
      "who made you", "who created you", "who built you", "who is your creator",
      "who programmed you", "toke ke banise", "tomake ke baniyeche", "ke baniyeche",
      "who developed you", "who coded you"
    ],
    patterns: [
      /who\s*(made|created|built|developed|programmed|coded)\s*you/i,
      /(tomake|toke)\s*ke\s*(baniyeche|banise|create\s*koreche|toiri\s*koreche)/i,
      /কে\s*(বানিয়েছে|তৈরি\s*করেছে)/i
    ],
    response: {
      text: "I was built by Abdur Rajjak as a lightweight, 100% client-side assistant for this portfolio website! I run entirely in your browser without any paid API keys or backend servers.",
      actions: [
        { label: "About Abdur", query: "Who is Abdur?" },
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" }
      ]
    }
  },

  {
    id: "bot_identity",
    priority: 95,
    keywords: [
      "who are you", "who r u", "who are u", "who r you",
      "about bot", "about the bot", "about this bot", "about this chatbot",
      "what is your name", "what's your name", "whats your name",
      "tomar nam ki", "tomar naam ki", "apnar nam ki", "apnar naam ki",
      "tumi ke", "apni ke", "tui ke",
      "introduce yourself", "tell me about yourself", "about you", "about yourself",
      "what is this bot", "who is this bot", "who is the bot",
      "are you an ai", "are you ai", "are you a bot", "are you bot",
      "tomar porichoy", "apnar porichoy", "porichoy dao", "tumi ki", "apni ki",
      "তোমার নাম কি", "তুমি কে", "আপনি কে", "তোমার পরিচয়", "বট সম্পর্কে", "নিজের পরিচয় দাও"
    ],
    patterns: [
      /^(who\s*(are|r)\s*(you|u))[\s!?.]*$/i,
      /^(what('?s|\s*is)\s*(your|this\s*bot'?s)\s*name)[\s!?.]*$/i,
      /^(introduce\s*yourself|tell\s*me\s*about\s*yourself|about\s*(yourself|you))[\s!?.]*$/i,
      /^(about\s*(this\s*|the\s*)?(chatbot|bot|assistant))[\s!?.]*$/i,
      /^(tumi|apni|tui)\s*ke[\s!?.]*$/i,
      /^(tomar|apnar)\s*na?am\s*ki[\s!?.]*$/i,
      /^(tumi|apni)\s*ki[\s!?.]*$/i,
      /^(tomar|apnar)\s*(porichoy|kotha)[\s!?.]*$/i,
      /^(who\s*is\s*this\s*(bot|chatbot|assistant))[\s!?.]*$/i,
      /\b(who\s*(are|r)\s*(you|u))\b/i,
      /(তোমার\s*নাম\s*কি|তুমি\s*কে|আপনি\s*কে|তোমার\s*পরিচয়)/i
    ],
    response: {
      text: "I'm your Portfolio Assistant! 🤖 I am a lightweight, rule-based assistant created to help you explore Abdur's projects, technical skills, education, and portfolio. What would you like to explore?",
      actions: [
        { label: "Projects", query: "Tell me about Abdur's projects" },
        { label: "Skills", query: "What are Abdur's technical skills?" },
        { label: "About Abdur", query: "Who is Abdur?" }
      ]
    }
  },

  {
    id: "about_abdur",
    priority: 90,
    keywords: [
      "who is abdur", "tell me about abdur", "who is the portfolio owner", "about abdur",
      "abdur ke", "abdur somporke bolo", "who is abdur rajjak", "abdur rajjak ke",
      "tell me about the owner", "who created this portfolio", "portfolio owner",
      "website owner", "abdur er porichoy", "abdur profile", "abdur rajjak",
      "abdur somporke jante chai", "abdur er kotha bolo", "owner of this portfolio",
      "who made this website", "tell me about the creator", "who is the developer",
      "who is this developer", "abdur intro", "abdur bio", "abdur background",
      "আব্দুর কে", "আব্দুর সম্পর্কে বলো", "আব্দুর রাজ্জাক কে", "ওয়েবসাইট মালিক কে"
    ],
    patterns: [
      /who\s*is\s*(abdur(\s*rajjak)?|the\s*(portfolio\s*|website\s*)?(owner|developer|creator))/i,
      /(tell\s*me\s*about|know\s*about|about)\s*(abdur(\s*rajjak)?|the\s*(portfolio\s*|website\s*)?(owner|developer|creator))(?!\s*(projects|skills|education|contact|study|github))/i,
      /^(abdur|abdur\s*rajjak)[\s!?.]*$/i,
      /(abdur(\s*rajjak)?)\s*(ke|somporke|er\s*porichoy|er\s*kotha)/i,
      /(owner|creator|developer)\s*(of\s*this|ke)/i,
      /(আব্দুর(\s*রাজ্জাক)?\s*কে|আব্দুর\s*সম্পর্কে)/i
    ],
    response: {
      text: "Abdur Rajjak is a 1st-year B.Tech CSE (Data Science) student from West Bengal, India. He is an aspiring Data Scientist and developer passionate about machine learning, artificial intelligence, and building intelligent digital tools. He enjoys working with Python, data modeling, and web technologies.",
      links: [
        { label: "Scroll to About Section", href: "#about" },
        { label: "Abdur's GitHub ↗", href: "https://github.com/Abdur07-svg", external: true }
      ],
      actions: [
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" },
        { label: "Technical Skills", query: "What are Abdur's technical skills?" },
        { label: "Education", query: "Where does Abdur study?" },
        { label: "Contact Abdur", query: "How can I contact Abdur?" }
      ]
    }
  },

  {
    id: "education",
    priority: 85,
    keywords: [
      "education", "study", "studying", "college", "degree", "btech", "cse", "data science",
      "student", "university", "school", "first year", "1st year", "which year",
      "where does abdur study", "abdur education", "abdur study", "where do you study",
      "porashona", "porasuna", "kothay poro", "ki poro", "kono year", "class",
      "কোথায় পড়াশোনা", "পড়াশোনা", "ডিগ্রি", "বিটেক"
    ],
    patterns: [
      /(what|where)\s*(are\s*you|is\s*abdur|does\s*abdur)\s*(studying|study)/i,
      /(education|academic|college|university|degree|b\.?tech|cse)/i,
      /where\s*does\s*abdur\s*study/i,
      /(kothay|ki)\s*(poro|porashona|porasuna)/i,
      /(পড়াশোনা|ডিগ্রি|কলেজ)/i
    ],
    response: {
      text: "🎓 Abdur's Academic Profile:\n• Program: B.Tech in Computer Science & Engineering (CSE) with specialization in Data Science (2026 - Present)\n• Current Status: 1st Year Student\n• Location: West Bengal, India\n• Focus Areas: Machine Learning, Data Analytics, Python programming, and Deep Learning research.",
      links: [
        { label: "View Timeline on Page", href: "#about" }
      ],
      actions: [
        { label: "Technical Skills", query: "What are Abdur's technical skills?" },
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" },
        { label: "About Abdur", query: "Who is Abdur?" }
      ]
    }
  },

  {
    id: "inspiration",
    priority: 70,
    keywords: [
      "idol", "inspiration", "cr7", "ronaldo", "cristiano ronaldo", "role model",
      "favorite player", "quote", "motivate", "motivation", "onuporona", "priyo player"
    ],
    patterns: [
      /(who\s*is\s*your\s*(idol|inspiration|role\s*model|hero))/i,
      /(ronaldo|cr7|cristiano)/i,
      /(onuporona|priyo\s*khelowar)/i
    ],
    response: {
      text: "⚽ Abdur draws great inspiration from his idol, Cristiano Ronaldo. He admires Ronaldo's relentless discipline, work ethic, consistency, and never-give-up mentality. His guiding quote is:\n\n\"In my mind, I'm always the best.\"",
      actions: [
        { label: "About Abdur", query: "Who is Abdur?" },
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" }
      ]
    }
  },

  {
    id: "skills",
    priority: 85,
    keywords: [
      "skills", "technologies", "tech stack", "languages", "tools", "programming", "python",
      "frameworks", "libraries", "what do you know", "what can you do", "stack", "tech",
      "technical skills", "abdur skills", "what are abdur's technical skills",
      "what are your technical skills", "what are your skills", "what are abdur's skills",
      "abdur technical skills", "ki ki jano", "skills ki", "tomar skills", "programming language",
      "স্কিল", "প্রোগ্রামিং ভাষা", "টেকনোলজি", "কি কি জানো"
    ],
    patterns: [
      /(what\s*are\s*(your|abdur'?s|the)\s*(technical\s*)?(skills|technologies|tools|languages|tech\s*stack))/i,
      /(which|what)\s*(languages|tools|technologies)\s*(do\s*you|does\s*abdur)\s*know/i,
      /^(technical\s*skills|skills|technologies|tech\s*stack|languages)[\s!?.]*$/i,
      /(skills|tech)\s*(ki|kya)/i,
      /(ki\s*ki\s*(jano|paro|sekha))/i,
      /(স্কিল|প্রোগ্রামিং\s*ভাষা|দক্ষতা)/i
    ],
    response: {
      text: "🛠️ Abdur's Technical Skills & Technologies:\n\n• Core Languages: Python, JavaScript, C++, Java, SQL, HTML5, CSS3\n• Data Science & AI: Pandas, NumPy, TensorFlow, PyTorch, OpenCV, NLTK, Jupyter Notebook\n• Tools & Development: GitHub, Git, VS Code, Android Studio, LiveKit, Google Gemini API",
      links: [
        { label: "View Skills Section", href: "#about" }
      ],
      actions: [
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" },
        { label: "Education", query: "Where does Abdur study?" },
        { label: "About Abdur", query: "Who is Abdur?" }
      ]
    }
  },

  {
    id: "project_recommendation",
    priority: 95,
    keywords: [
      "which project should i explore first",
      "which project to explore first",
      "which project should i see first",
      "which project should i check first",
      "which project first",
      "which project to start with",
      "what project should i explore first",
      "what project to see first",
      "what project to check first",
      "best project",
      "featured project",
      "top project",
      "recommended project",
      "project recommendation",
      "where to start",
      "where should i start",
      "kono project aage dekhbo"
    ],
    patterns: [
      /which\s*project(\s*(should\s*i|to)\s*(explore|see|check|view|start))?/i,
      /what\s*project(\s*(should\s*i|to)\s*(explore|see|check|view|start))?/i,
      /(best|featured|top|recommended)\s*project/i,
      /where\s*should\s*i\s*start/i
    ],
    response: {
      text: "A great project to start with is the JARVIS AI Assistant — a voice-controlled AI assistant built with Python, LiveKit, and Google Gemini API. If you'd like to try an interactive web tool right away, check out FileForge, a 100% client-side privacy file & PDF converter!",
      links: [
        { label: "Explore JARVIS AI", href: "#projects" },
        { label: "Try FileForge ↗", href: "https://abdur07-svg.github.io/FileForge/", external: true }
      ]
    }
  },

  {
    id: "project_fileforge",
    priority: 100,
    keywords: [
      "fileforge", "file forge", "file processing", "image compressor", "pdf tool",
      "file converter", "client side tool", "fileforge project", "fileforge app"
    ],
    patterns: [
      /file\s*forge/i,
      /file\s*processing\s*(app|tool|project)/i,
      /(image|pdf)\s*(compress|convert|toolkit)/i
    ],
    response: {
      text: "📁 FILEFORGE — Client-Side File & Image Toolkit\n\n• Overview: A privacy-focused, 100% client-side web application for converting, compressing, editing, and processing images and PDFs directly in your browser without uploading data to servers.\n• Technologies: HTML5, CSS3, Vanilla JavaScript\n• Status: Live and accessible to use right now!",
      links: [
        { label: "Launch FileForge App ↗", href: "https://abdur07-svg.github.io/FileForge/", external: true },
        { label: "GitHub Repository", href: "https://github.com/Abdur07-svg/FileForge", external: true }
      ],
      actions: [
        { label: "Polyglot Translator", query: "Tell me about Polyglot" },
        { label: "JARVIS AI Assistant", query: "Tell me about JARVIS AI" },
        { label: "All Projects", query: "Show all projects" }
      ]
    }
  },

  {
    id: "project_polyglot",
    priority: 100,
    keywords: [
      "polyglot", "translator", "translation", "smart translator", "language translator",
      "polyglot app", "polyglot project", "anubad"
    ],
    patterns: [
      /polyglot/i,
      /(smart\s*)?translator/i,
      /translation\s*(app|tool|project)/i
    ],
    response: {
      text: "🌐 POLYGLOT — Smart Web Translator\n\n• Overview: A clean, responsive web application designed for fast, accessible multi-language translation across desktop, tablet, and mobile devices.\n• Technologies: HTML5, CSS3, JavaScript, Translation API\n• Status: Live and deployed on GitHub Pages!",
      links: [
        { label: "Launch Polyglot Translator ↗", href: "https://abdur07-svg.github.io/Translator/", external: true },
        { label: "GitHub Repository", href: "https://github.com/Abdur07-svg/Translator", external: true }
      ],
      actions: [
        { label: "FileForge Toolkit", query: "Tell me about FileForge" },
        { label: "JARVIS AI Assistant", query: "Tell me about JARVIS AI" },
        { label: "All Projects", query: "Show all projects" }
      ]
    }
  },

  {
    id: "project_jarvis",
    priority: 100,
    keywords: [
      "jarvis", "jarvis ai", "voice assistant", "voice ai", "livekit", "gemini api",
      "wake word", "jarvis project"
    ],
    patterns: [
      /jarvis/i,
      /voice\s*(assistant|controlled|ai)/i,
      /livekit/i
    ],
    response: {
      text: "🎙️ JARVIS AI — Voice-Controlled AI Assistant\n\n• Overview: An intelligent conversational assistant with wake-word detection and voice interaction capabilities.\n• Technologies: Python, LiveKit, Google Gemini API\n• Key Features: Hands-free wake word listening, conversational AI streaming, and intelligent task responses.",
      links: [
        { label: "View Projects Section", href: "#projects" },
        { label: "Abdur's GitHub", href: "https://github.com/Abdur07-svg", external: true }
      ],
      actions: [
        { label: "Check FileForge", query: "Tell me about FileForge" },
        { label: "Check Polyglot", query: "Tell me about Polyglot" },
        { label: "All Projects", query: "Show all projects" }
      ]
    }
  },

  {
    id: "project_cnn",
    priority: 95,
    keywords: [
      "image classification", "cnn", "computer vision", "convolutional neural network",
      "opencv", "object detection", "image classifier"
    ],
    patterns: [
      /image\s*classif/i,
      /convolutional\s*neural\s*network/i,
      /computer\s*vision/i,
      /\bcnn\b/i
    ],
    response: {
      text: "👁️ Image Classification CNN\n\n• Overview: A deep learning computer vision model utilizing Convolutional Neural Networks (CNN) to detect and classify image objects accurately.\n• Technologies: Python, TensorFlow, OpenCV\n• Focus: Feature map extraction, image preprocessing, and neural network training.",
      links: [
        { label: "View Projects Section", href: "#projects" }
      ],
      actions: [
        { label: "Sentiment Analyzer", query: "Tell me about Sentiment Analyzer" },
        { label: "All Projects", query: "Show all projects" }
      ]
    }
  },

  {
    id: "project_game",
    priority: 95,
    keywords: [
      "endless runner", "game project", "temple run", "android game", "android studio",
      "mobile game", "runner game", "java game"
    ],
    patterns: [
      /endless\s*runner/i,
      /(temple\s*run|android\s*game|mobile\s*game)/i,
      /(game\s*project|video\s*game\s*project)/i
    ],
    response: {
      text: "🎮 Endless Runner Game\n\n• Overview: A 3D Temple Run-style endless runner video game built natively for Android devices.\n• Technologies: Java, Android Studio\n• Features: Responsive mobile swipe controls, dynamic procedural obstacle generation, and real-time high score tracking.",
      links: [
        { label: "View Projects Section", href: "#projects" }
      ],
      actions: [
        { label: "FileForge Web App", query: "Tell me about FileForge" },
        { label: "All Projects", query: "Show all projects" }
      ]
    }
  },

  {
    id: "project_sentiment",
    priority: 95,
    keywords: [
      "sentiment analyzer", "sentiment analysis", "nlp", "natural language processing",
      "nltk", "pytorch text", "sentiment model"
    ],
    patterns: [
      /sentiment/i,
      /\bnlp\b/i,
      /natural\s*language\s*processing/i
    ],
    response: {
      text: "💬 Sentiment Analyzer (NLP)\n\n• Overview: A Natural Language Processing model designed to analyze unstructured text data and predict emotional polarity (Positive, Neutral, or Negative).\n• Technologies: Python, PyTorch, NLTK\n• Applications: Review sentiment scoring, social text analysis, and feedback classification.",
      links: [
        { label: "View Projects Section", href: "#projects" }
      ],
      actions: [
        { label: "Image Classification", query: "Tell me about Image Classification" },
        { label: "JARVIS AI Assistant", query: "Tell me about JARVIS AI" },
        { label: "All Projects", query: "Show all projects" }
      ]
    }
  },

  {
    id: "projects_overview",
    priority: 80,
    keywords: [
      "projects", "what projects", "show projects", "portfolio projects", "work", "apps",
      "build", "built", "creations", "live demos", "project gulo", "project list",
      "abdur's projects", "abdur projects", "tell me about abdur's projects",
      "tell me about projects", "what projects has abdur built", "what projects have you built",
      "tomar project", "ki ki project ache", "project dekhaw", "কাজ", "প্রজেক্ট", "প্রজেক্ট দেখাও"
    ],
    patterns: [
      /(what|show|list|tell\s*me\s*about)\s*(are\s*)?(all\s*|the\s*)?(abdur'?s\s*)?projects/i,
      /what\s*(have\s*you|did\s*abdur|has\s*abdur)\s*(built|made|created)/i,
      /^(projects|work|portfolio(\s*projects)?|apps|abdur'?s\s*projects)[\s!?.]*$/i,
      /(tomar|apnar|abdur\s*er)\s*project/i,
      /(ki\s*ki\s*project|project\s*gulo)/i,
      /(প্রজেক্ট|কাজ|তৈরি\s*করেছ)/i
    ],
    response: {
      text: "🚀 Abdur has built 6+ verified projects across Data Science, AI, and Web Development:\n\n1. FileForge — 100% Client-side privacy file & image processor (Live Demo)\n2. Polyglot — Smart responsive web translator (Live Demo)\n3. JARVIS AI Assistant — Voice-controlled assistant with LiveKit & Gemini API\n4. Image Classification CNN — Computer vision object classifier with TensorFlow & OpenCV\n5. Endless Runner Game — 3D Android action game in Java\n6. Sentiment Analyzer — NLP sentiment classifier with PyTorch & NLTK\n\nWhich project would you like to explore?",
      links: [
        { label: "Explore Projects Section", href: "#projects" },
        { label: "Try FileForge Live ↗", href: "https://abdur07-svg.github.io/FileForge/", external: true },
        { label: "Try Polyglot Live ↗", href: "https://abdur07-svg.github.io/Translator/", external: true }
      ],
      actions: [
        { label: "FileForge Details", query: "Tell me about FileForge" },
        { label: "Polyglot Details", query: "Tell me about Polyglot" },
        { label: "JARVIS AI Details", query: "Tell me about JARVIS AI" },
        { label: "About Abdur", query: "Who is Abdur?" }
      ]
    }
  },

  {
    id: "github",
    priority: 85,
    keywords: [
      "github", "git", "repo", "repositories", "source code", "code", "github link",
      "github profile", "github er link", "github dekhaw", "গিটহাব", "কোড"
    ],
    patterns: [
      /(show|give|what\s*is)\s*(me\s*)?(your|the|abdur'?s)?\s*(github|repo|code|repository)/i,
      /\bgithub\b/i,
      /github\s*(link|profile|dao|dekhaw)/i,
      /(গিটহাব|সোর্স\s*কোড)/i
    ],
    response: {
      text: "💻 You can explore all of Abdur's public code, repositories, and open-source work directly on his GitHub profile:\n\nGitHub: https://github.com/Abdur07-svg",
      links: [
        { label: "Visit Abdur's GitHub ↗", href: "https://github.com/Abdur07-svg", external: true }
      ],
      actions: [
        { label: "Abdur's Projects", query: "Tell me about Abdur's projects" },
        { label: "Technical Skills", query: "What are Abdur's technical skills?" }
      ]
    }
  },

  {
    id: "contact",
    priority: 85,
    keywords: [
      "contact", "contact details", "how to contact", "how can i contact abdur",
      "how to contact abdur", "contact abdur", "reach out", "reach abdur", "get in touch",
      "how to reach", "hire", "hire abdur", "message abdur", "connect", "connect with abdur",
      "contact info", "contact information", "jogajog", "kivabe jogajog korbo",
      "jogajog er maddhom", "যোগাযোগ", "যোগাযোগের মাধ্যম", "কিভাবে যোগাযোগ করব"
    ],
    patterns: [
      /how\s*(can\s*i|to)\s*(contact|reach|message|hire|connect\s*with)\s*(you|abdur)?/i,
      /(contact\s*abdur|reach\s*abdur|hire\s*abdur|message\s*abdur)/i,
      /(contact\s*(details|info|information)?|reach\s*out|get\s*in\s*touch)/i,
      /^(contact|contact\s*details|contact\s*info|hire|jogajog|যোগাযোগ)[\s!?.]*$/i,
      /(kivabe\s*jogajog|jogajog\s*(korbo|korte\s*chai|er\s*maddhom))/i,
      /(যোগাযোগ|যোগাযোগের\s*মাধ্যম)/i
    ],
    response: {
      contactCard: true,
      text: "Connect with Abdur — Choose your preferred way to get in touch:\n• Email: abdur.rajjak52786@gmail.com\n• Form: #contact"
    }
  },

  {
    id: "email",
    priority: 95,
    keywords: [
      "email", "mail", "email address", "mail address", "email id", "mail id",
      "what is your email", "what is abdur's email", "what's your email", "whats your email",
      "what is abdur's mail", "abdur's email", "abdur email", "abdur er email",
      "email ki", "mail ki", "ইমেইল", "ই-মেইল", "মেইল"
    ],
    patterns: [
      /^(what('?s|\s*is)\s*(your|abdur'?s)\s*(email|mail|email\s*address|email\s*id))[\s!?.]*$/i,
      /^(email|mail|email\s*address|email\s*id)[\s!?.]*$/i,
      /(what\s*is\s*(the\s*)?(email|mail))/i,
      /(email|mail)\s*(address|id|dao|bolo|ki)/i,
      /(abdur'?s|tomar|apnar)\s*(email|mail)/i,
      /(ইমেইল|ই-মেইল|মেইল)/i
    ],
    response: {
      text: "You can email Abdur directly at abdur.rajjak52786@gmail.com.",
      links: [
        { label: "Send Email (abdur.rajjak52786@gmail.com)", href: "mailto:abdur.rajjak52786@gmail.com" }
      ]
    }
  },

  {
    id: "socials",
    priority: 90,
    keywords: [
      "social", "socials", "social media", "social links", "social profiles",
      "social media links", "handles", "social media accounts", "where can i follow you",
      "where to follow", "follow abdur", "twitter", "x profile", "instagram", "youtube",
      "সোশ্যাল মিডিয়া", "সোশ্যাল লিঙ্ক"
    ],
    patterns: [
      /(social\s*(media|profiles|links|handles|accounts)?|socials)/i,
      /(where\s*(can\s*i|to)\s*follow\s*(you|abdur))/i,
      /^(social|socials|social\s*media|social\s*links)[\s!?.]*$/i,
      /(সোশ্যাল\s*মিডিয়া|সোশ্যাল\s*লিঙ্ক)/i
    ],
    response: {
      text: "You can follow and connect with Abdur on his official social profiles:",
      links: [
        { label: "X / Twitter ↗", href: "https://x.com/Abdur2007", external: true },
        { label: "GitHub ↗", href: "https://github.com/Abdur07-svg", external: true },
        { label: "Instagram ↗", href: "https://instagram.com/void_ms07", external: true },
        { label: "YouTube ↗", href: "https://youtube.com/@ar7ffofficial", external: true }
      ]
    }
  },

  {
    id: "location",
    priority: 90,
    keywords: [
      "location", "where do you live", "where does abdur live", "where is abdur located",
      "where are you located", "where is abdur from", "where are you from", "address",
      "city", "state", "country", "hometown", "place", "where based", "abdur kothay thake",
      "kothay thako", "kothay thake", "bari kothay", "thikana", "thikana ki",
      "লোকেশন", "ঠিকানা", "কোথায় থাকো", "কোথায় বাড়ি"
    ],
    patterns: [
      /where\s*(are\s*you|is\s*abdur)\s*(located|from|living|based)/i,
      /where\s*(do\s*you|does\s*abdur)\s*live/i,
      /^(location|address|city|country|hometown|place)[\s!?.]*$/i,
      /(kothay\s*(thako|thake|bas|bari)|thikana\s*ki|kothakar)/i,
      /(লোকেশন|ঠিকানা|কোথায়\s*(থাকো|থাকে|বাড়ি))/i
    ],
    response: {
      text: "Abdur is based in West Bengal, India 📍"
    }
  },

  {
    id: "resume",
    priority: 75,
    keywords: [
      "resume", "cv", "curriculum vitae", "biodata", "job", "experience", "work experience",
      "hiring", "c.v"
    ],
    patterns: [
      /(resume|cv|curriculum\s*vitae|biodata)/i,
      /(work\s*experience|job\s*history)/i
    ],
    response: {
      text: "📄 Abdur is currently a 1st-year B.Tech CSE (Data Science) undergraduate focusing on projects, practical programming, and deep learning research. For detailed inquiries, project collaboration, or an updated resume, feel free to send him a message directly!",
      links: [
        { label: "Contact Abdur", href: "#contact" },
        { label: "View GitHub", href: "https://github.com/Abdur07-svg", external: true }
      ],
      actions: [
        { label: "Check Skills", query: "What are your skills?" },
        { label: "Check Projects", query: "What projects have you built?" }
      ]
    }
  },

  {
    id: "navigation",
    priority: 60,
    keywords: [
      "theme", "dark mode", "light mode", "navigation", "how to navigate", "scroll",
      "sections", "design", "spiderman", "aurora", "animation"
    ],
    patterns: [
      /(how\s*to\s*(navigate|use\s*site|switch\s*theme|toggle\s*mode))/i,
      /(dark\s*mode|light\s*mode|theme\s*toggle)/i,
      /(spiderman|easter\s*egg|aurora)/i
    ],
    response: {
      text: "🎨 Portfolio Navigation Guide:\n\n• Theme: Toggle between Dark & Light themes using the Sun/Moon button in the navbar.\n• Navigation: Click Home, About, Projects, or Contact links in the navbar.\n• Interactive Feature: Try clicking or dragging the hanging Spider-Man near the top bar!\n• Live Demos: Click project cards to view project details or launch live web apps.",
      actions: [
        { label: "Projects", query: "Show me your projects" },
        { label: "Contact", query: "How to contact Abdur?" }
      ]
    }
  },

  {
    id: "thanks",
    priority: 50,
    keywords: [
      "thanks", "thank you", "thx", "dhonnobad", "dhonnobaad", "shukriya", "great",
      "awesome", "cool", "nice", "valobhalo", "onek dhonnobad", "ধন্যবাদ"
    ],
    patterns: [
      /^(thanks|thank\s*you|thx|dhonnobad|shukriya|great|awesome|nice|cool)[\s!.]*$/i,
      /(onek\s*dhonnobad|ধন্যবাদ)/i
    ],
    response: {
      text: "You're very welcome! 😊 Feel free to ask anything else about Abdur's work, or explore the rest of the website.",
      actions: [
        { label: "View Projects", query: "Show me your projects" },
        { label: "Contact Abdur", query: "How can I contact you?" }
      ]
    }
  },

  {
    id: "help",
    priority: 55,
    keywords: [
      "help", "what can you do", "commands", "options", "questions", "menu", "how does this work",
      "sahajjo", "ki korte paro", "সাহায্য", "কি করতে পারো"
    ],
    patterns: [
      /^(help|commands|menu|options)[\s!?.]*$/i,
      /what\s*can\s*(you|this\s*bot)\s*do/i,
      /(sahajjo|ki\s*korte\s*paro)/i,
      /(সাহায্য|কি\s*করতে\s*পারো)/i
    ],
    response: {
      text: "💡 I can assist you with:\n\n• Learning about Abdur Rajjak and his background\n• Exploring his 6+ projects (FileForge, Polyglot, JARVIS AI, CNN, etc.)\n• Checking his technical skills (Python, TensorFlow, PyTorch, JS, SQL)\n• Academic details (B.Tech CSE Data Science, 1st year)\n• Getting in touch via Email, Formspree, or Social Links\n• English, Bengali, and Banglish questions are supported!",
      actions: [
        { label: "About Abdur", query: "Tell me about Abdur" },
        { label: "Featured Projects", query: "What projects have you built?" },
        { label: "Skills", query: "What are your skills?" },
        { label: "Contact", query: "How can I contact you?" }
      ]
    }
  }
];

window.PORTFOLIO_JOKES = [
  "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
  "There are 10 types of people in the world:\nThose who understand binary, and those who don't. 💻",
  "Why was the JavaScript developer sad?\nBecause they didn't Node how to Express themselves! 🚀",
  "A SQL query walks into a bar, strolls up to two tables, and asks:\n'Can I join you?' 📊",
  "Why do Python programmers have great vision?\nBecause they don't use C! 🐍",
  "How do you comfort a JavaScript bug?\nYou console it! 🖥️",
  "Why did the web developer go broke?\nBecause they used up all their cache! 💰",
  "An optimist sees the glass half full.\nA pessimist sees it half empty.\nA developer sees the glass twice as large as it needs to be! 🥛",
  "Why was the computer cold?\nIt left its Windows open! 🪟",
  "A programmer had a problem, so they decided to use regex.\nNow they have two problems! 😅",
  "Why do machine learning algorithms love coffee?\nBecause they run on Java and need lots of epochs to wake up! ☕",
  "What did the HTML element say to the CSS stylesheet?\n'Without you, I'm just plain text!' 🎨",
  "Why did the database administrator leave their partner?\nToo many one-to-many relationships! 💔",
  "Why do developers hate nature?\nToo many bugs and zero documentation! 🌲",
  "What's a programmer's favorite workout?\nGit push and Git pull! 💪",
  "How many programmers does it take to change a lightbulb?\nNone, that's a hardware problem! 💡"
];

window.PORTFOLIO_RIDDLES = [
  {
    riddle: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An Echo",
    keywords: ["echo", "an echo", "sound"]
  },
  {
    riddle: "The more you code me, the more I exist. Programmers hate seeing me, but love finding me. What am I?",
    answer: "A Bug",
    keywords: ["bug", "a bug", "error", "glitch", "bugs"]
  },
  {
    riddle: "I have keys, but no locks. I have space, but no room. You can enter, but you can't go outside. What am I?",
    answer: "A Keyboard",
    keywords: ["keyboard", "a keyboard", "key board", "computer keyboard"]
  },
  {
    riddle: "I am taken from a mine and shut up in a wooden case, from which I am never released, yet I am used by almost everyone. What am I?",
    answer: "Pencil Lead (Graphite)",
    keywords: ["pencil lead", "lead", "graphite", "pencil", "pencil graphite"]
  },
  {
    riddle: "I have branches, but no fruit, trunk, or leaves. What am I?",
    answer: "A Bank (or Git Branch!)",
    keywords: ["bank", "a bank", "git", "git branch", "branch"]
  },
  {
    riddle: "What runs all day without legs, and has a bank but no money?",
    answer: "A River",
    keywords: ["river", "a river", "stream"]
  },
  {
    riddle: "What has many teeth, but cannot bite?",
    answer: "A Comb",
    keywords: ["comb", "a comb"]
  },
  {
    riddle: "I can be cracked, made, told, and played. What am I?",
    answer: "A Joke",
    keywords: ["joke", "a joke"]
  },
  {
    riddle: "What goes up and never comes down?",
    answer: "Your Age",
    keywords: ["age", "your age", "my age", "years"]
  },
  {
    riddle: "What begins with T, finishes with T, and has T inside it?",
    answer: "A Teapot",
    keywords: ["teapot", "a teapot", "tea pot"]
  }
];

window.PORTFOLIO_TIME_GREETINGS = {
  en: {
    match: {
      morning: [
        "Good morning! ☀️ How can I help you today?",
        "Good morning! ☀️ Hope your day is off to a great start! What would you like to explore in Abdur's portfolio?",
        "Good morning! ☀️ Ready to assist you—feel free to ask about Abdur's projects, skills, or experience!"
      ],
      afternoon: [
        "Good afternoon! 😊 How can I help you today?",
        "Good afternoon! ☀️ Hope your day is going well! What would you like to know about Abdur Rajjak?",
        "Good afternoon! 😊 How may I assist you with Abdur's portfolio today?"
      ],
      evening: [
        "Good evening! 🌆 What can I help you with today?",
        "Good evening! 🌆 Hope you had a productive day! What would you like to explore tonight?",
        "Good evening! 🌆 Glad to connect—feel free to ask about Abdur's projects, skills, or experience."
      ],
      night: [
        "Good night! 🌙 Hope you have a peaceful night!",
        "Good night! 🌙 Wishing you a relaxing evening and a restful sleep ahead!",
        "Good night! 🌙 Exploring late? Feel free to browse Abdur's projects or reach out anytime!"
      ]
    },
    correction: {
      toMorning: [
        "It's actually morning right now! ☀️ Good morning! How can I help you?",
        "It's morning here according to your local time! ☀️ Good morning! What can I help you with today?",
        "Good morning! ☀️ (It's still morning right now in your local time.) How can I assist you?"
      ],
      toAfternoon: [
        "It's afternoon here according to your local time! 😊 Good afternoon! What can I help you with?",
        "It's actually afternoon right now! 😊 Good afternoon! What would you like to explore?",
        "Good afternoon! 😊 (It's afternoon right now in your local time.) How may I help you today?"
      ],
      toEvening: [
        "It's evening right now! 🌆 Good evening! How can I help you?",
        "It's evening here according to your local time! 🌆 Good evening! What can I help you with tonight?",
        "Good evening! 🌆 (It's evening right now in your local time.) What would you like to know?"
      ],
      toNight: [
        "It's nighttime right now! 🌙 Good night! Hope you're having a relaxing evening.",
        "It's actually nighttime right now! 🌙 Good night! What can I help you with tonight?",
        "Good night! 🌙 (It's nighttime right now in your local time.) How can I assist you?"
      ],
      eveningLateAtNight: [
        "Good evening! 🌙 It's getting late into the night—hope you're having a relaxing time! How can I help you tonight?",
        "Good evening! 🌙 It's pretty late into the night now! Feel free to ask anything about Abdur's portfolio.",
        "Good evening! 🌙 Late hours! Hope you have a peaceful night ahead. What would you like to know?"
      ],
      nightInDaytime: {
        morning: [
          "Heading to sleep early? It's actually morning right now! ☀️ Good morning! How can I help you today?",
          "Turning in early? It's morning right now! ☀️ Have a restful sleep if you're resting, or ask me anything!"
        ],
        afternoon: [
          "Heading to sleep early? It's actually afternoon right now! 😊 Good afternoon! What can I help you with?",
          "Taking an afternoon rest? It's afternoon right now! 😊 Have a wonderful rest, or ask about Abdur's work!"
        ],
        evening: [
          "It's still evening right now! 🌆 Good evening! Are you heading to bed early, or can I help you explore Abdur's work?",
          "Heading to bed early? It's evening right now! 🌆 Have a peaceful night if you're sleeping, or feel free to explore!"
        ]
      },
      farewellNight: [
        "Good night! 🌙 Sleep well and have wonderful dreams! Feel free to return anytime.",
        "Good night! 🌙 Hope you have a peaceful and restful sleep. Take care!",
        "Good night and take care! 🌙 Rest well—Abdur's portfolio will be right here whenever you return!"
      ]
    }
  },
  bn: {
    match: {
      morning: [
        "সুপ্রভাত! ☀️ আশা করি আপনার দিনটি দারুণ কাটবে! আপনাকে কীভাবে সাহায্য করতে পারি?",
        "শুভ সকাল! ☀️ কেমন আছেন? আব্দুর রাজ্জাকের পোর্টফোলিও সম্পর্কে কী জানতে চান?"
      ],
      afternoon: [
        "শুভ অপরাহ্ন! 😊 আশা করি ভালো আছেন! আব্দুর রাজ্জাকের পোর্টফোলিও সম্পর্কে কী জানতে চান?",
        "শুভ দুপুর! ☀️ আশা করি দিনটি চমৎকার যাচ্ছে! আপনাকে কীভাবে সাহায্য করতে পারি?"
      ],
      evening: [
        "শুভ সন্ধ্যা! 🌆 আশা করি আপনার দিনটি সুন্দর কেটেছে! আপনাকে কীভাবে সাহায্য করতে পারি?",
        "শুভ সন্ধ্যা! 🌆 কেমন আছেন? আব্দুর রাজ্জাকের প্রজেক্ট বা স্কিল সম্পর্কে কী জানতে চান?"
      ],
      night: [
        "শুভ রাত্রি! 🌙 আশা করি আপনার রাতটি শান্তিময় ও সুন্দর কাটবে!",
        "শুভ রাত্রি! 🌙 ভালো ঘুম হোক ও শুভ স্বপ্ন দেখুন! কোনো প্রশ্ন থাকলে করতে পারেন।"
      ]
    },
    correction: {
      toMorning: [
        "আপনার স্থানীয় সময় অনুযায়ী এখন কিন্তু সকাল! ☀️ সুপ্রভাত! আপনাকে কীভাবে সাহায্য করতে পারি?",
        "এখন কিন্তু সকাল বেলা! ☀️ শুভ সকাল! আব্দুর রাজ্জাকের পোর্টফোলিও সম্পর্কে কী জানতে চান?"
      ],
      toAfternoon: [
        "আপনার স্থানীয় সময় অনুযায়ী এখন কিন্তু দুপুর! ☀️ শুভ দুপুর! আপনাকে কীভাবে সাহায্য করতে পারি?",
        "এখন অপরাহ্ন! 😊 শুভ অপরাহ্ন! কী জানতে চান আব্দুর রাজ্জাক সম্পর্কে?"
      ],
      toEvening: [
        "আপনার স্থানীয় সময় অনুযায়ী এখন কিন্তু সন্ধ্যা! 🌆 শুভ সন্ধ্যা! আপনাকে কীভাবে সাহায্য করতে পারি?",
        "এখন সন্ধ্যা হয়ে গেছে! 🌆 শুভ সন্ধ্যা! কী সাহায্য করতে পারি?"
      ],
      toNight: [
        "আপনার স্থানীয় সময় অনুযায়ী এখন কিন্তু রাত! 🌙 শুভ রাত্রি! আশা করি ভালো আছেন।",
        "এখন রাত হয়ে গেছে! 🌙 শুভ রাত্রি! আপনাকে কীভাবে সাহায্য করতে পারি?"
      ],
      eveningLateAtNight: [
        "শুভ সন্ধ্যা! 🌙 তবে এখন বেশ রাত হয়ে গেছে—আশা করি ভালো আছেন! রাতে কীভাবে সাহায্য করতে পারি?",
        "শুভ সন্ধ্যা! 🌙 রাতের এই সময়ে স্বাগতম! কী জানতে চান?"
      ],
      nightInDaytime: {
        morning: [
          "তাড়াতাড়ি ঘুমাতে যাচ্ছেন? এখন কিন্তু সকাল! ☀️ সুপ্রভাত! কীভাবে সাহায্য করতে পারি?",
          "এখন কিন্তু সকালের সময়! ☀️ শুভ সকাল! যদি ঘুমাতে যান তবে শুভ বিশ্রাম!"
        ],
        afternoon: [
          "দুপুরে বিশ্রাম নিচ্ছেন? এখন কিন্তু দুপুর! 😊 শুভ দুপুর! কীভাবে সাহায্য করতে পারি?",
          "এখন কিন্তু দুপুর বেলা! 😊 শুভ অপরাহ্ন! কোনো প্রশ্ন থাকলে করতে পারেন।"
        ],
        evening: [
          "এখন সবে সন্ধ্যা! 🌆 শুভ সন্ধ্যা! তাড়াতাড়ি ঘুমাচ্ছেন নাকি পোর্টফোলিও দেখতে চান?",
          "এখন তো সন্ধ্যা বেলা! 🌆 শুভ সন্ধ্যা! কীভাবে সাহায্য করতে পারি?"
        ]
      },
      farewellNight: [
        "শুভ রাত্রি! 🌙 ভালো ঘুম হোক ও শান্তিময় বিশ্রাম কাটুক! আবার আসবেন।",
        "শুভ রাত্রি! 🌙 যত্ন নেবেন, ভালো থাকবেন!"
      ]
    }
  }
};

