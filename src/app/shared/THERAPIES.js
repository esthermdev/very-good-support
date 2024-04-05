import articulationImage from '../assets/image1.jpg';
import fluencyImage from '../assets/image2.jpg';
import voiceImage from '../assets/image3.jpg';

export const THERAPIES = [
    {
        id: 0,
        name: "Articulation Therapy",
        image: articulationImage,
        description: "Articulation therapy focuses on improving the clarity and precision of speech sounds. It helps individuals produce sounds correctly by targeting specific articulators such as the lips, tongue, and palate.",
        techniques: ["Phonetic placement", "Minimal pairs therapy", "Drill practice"],
        benefits: ["Improved speech intelligibility", "Enhanced communication skills", "Increased confidence in speaking"],
        duration: "Varies depending on severity, typically 30-60 minutes per session",
        cost: "Approximately $75-$150 per session"
    },
    {
        id: 1,
        name: "Fluency Therapy",
        image: fluencyImage,
        description: "Fluency therapy aims to improve the flow of speech by addressing stuttering or other fluency disorders. It includes strategies to reduce stuttering behaviors and enhance smooth, effortless speech production.",
        techniques: ["Slow speech techniques", "Breath regulation exercises", "Desensitization to speaking situations"],
        benefits: ["Reduced stuttering frequency", "Increased speech fluency", "Improved overall communication"],
        duration: "Typically 45-60 minutes per session, frequency varies",
        cost: "Approximately $80-$200 per session"
    },
    {
        id: 2,
        name: "Voice Therapy",
        image: voiceImage,
        description: "Voice therapy focuses on improving the quality, resonance, and projection of the voice. It addresses vocal disorders such as hoarseness, pitch problems, and vocal fatigue through exercises and techniques.",
        techniques: ["Vocal exercises", "Resonance therapy", "Vocal hygiene education"],
        benefits: ["Improved vocal quality", "Enhanced vocal endurance", "Reduced vocal strain and fatigue"],
        duration: "Varies depending on the severity and type of voice disorder, typically 45-60 minutes per session",
        cost: "Approximately $90-$180 per session"
    },
];
