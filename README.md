# SmartQuiz Jr. 
SmartQuiz Jr. is an interactive quiz application designed for children to make learning fun and engaging. It features a variety of topics, colorful graphics, and rewarding feedback to keep young learners motivated.

Data Flow Diagram Level - 0(Overall System Overview)
```mermaid
flowchart TD
    U[👦 User - Child] -->|Quiz Request / Answers| SQJ[🧠 SmartQuiz Jr System]
    SQJ -->|AI-Generated Questions| U
    SQJ -->|Store & Retrieve Data| DB[(📦 MongoDB Database)]
    SQJ -->|Uses AI Models & Speech APIs| AI[🤖 AI & External APIs]
    U -->|Voice / Text Feedback| SQJ
```

Data Flow Diagram Level - 1
(Major Modules of SmartQuiz Jr)
```mermaid
flowchart TD
    subgraph UserLayer[🎨 User Interface - Frontend]
        A1[Login & Profile] --> A2[Topic Selection]
        A2 --> A3[Quiz Interface - Text/Voice]
        A3 --> A4[Results & Badges Screen]
    end
    subgraph BackendLayer[🧩 Backend API Layer]
        B1[Auth & Session Manager]
        B2[Quiz Manager]
        B3[Response Evaluator]
        B4[Reward Engine]
        B5[Feedback Collector]
    end
    subgraph AILayer[🧠 AI Intelligence Layer]
        C1[Question Generator - LLM]
        C2[Answer Evaluation Module]
        C3[Difficulty Adaptation Engine]
        C4[Voice Module - STT/TTS]
    end
    subgraph DataLayer[📦 MongoDB Database]
        D1[(Users)]
        D2[(Questions)]
        D3[(Quizzes)]
        D4[(Responses)]
        D5[(Rewards)]
        D6[(Feedback)]
        D7[(Progress)]
    end
    %% Connections
    A1 --> B1
    A2 --> B2
    A3 --> B2
    A3 --> B3
    A4 --> B4
    A4 --> B5
    B1 --> D1
    B2 --> D2
    B2 --> C1
    B3 --> C2
    B3 --> D4
    B4 --> D5
    B5 --> D6
    C3 --> D7
    C4 --> A3
    C1 --> D2
```

DFD Level - 2 (Internal Data flow)
```mermaid
flowchart TD
    subgraph AIEngine[🤖 AI Intelligence Layer]
        A1[User Profile Data]
        A2[Topic & Difficulty Input]
        A3[Question Generator - LLM/Groq]
        A4[Answer Evaluator - NLP]
        A5[Difficulty Adapter]
        A6[Reward & Recommendation Module]
        A7[Voice Interaction - STT/TTS]
    end

    A1 --> A3
    A2 --> A3
    A3 -->|Generated Questions| A4
    A4 -->|Evaluation Results| A5
    A5 -->|Updated Level| A3
    A5 -->|Performance Summary| A6
    A6 -->|Badge & Suggestions| A1
    A7 -->|Voice Input| A4
    A4 -->|Feedback Response| A7
```