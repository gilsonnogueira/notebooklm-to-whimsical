import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert Mind Map Architect specialized in Whimsical.
Your goal is to convert unstructured text into a strictly formatted indented list that Whimsical can paste directly as a Mind Map.

**Input:** Raw text, notes, summaries, or HTML content.
**Output:** A hierarchical text outline using indentation.

**Strict Whimsical Compatibility Rules:**
1.  **Format:** Use Markdown unordered lists with hyphens (\`-\`) or just plain text with strict indentation. **Hyphens are preferred** for compatibility.
2.  **Indentation:** Use **Tab** or **4 spaces** for hierarchy levels.
3.  **Structure:**
    - The first line is the Central Topic (Root Node).
    - Child nodes are indented below it.
4.  **Conciseness:** Keep node content short and punchy. Avoid long paragraphs.
5.  **No Fluff:** Do NOT include introductions, conclusions, or conversational text. Output ONLY the list.
6.  **No Headings:** Do NOT use Markdown Headings (\`#\`). Use indentation for structure.

**Example Output:**
- Artificial Intelligence
    - Machine Learning
        - Supervised Learning
            - Classification
            - Regression
        - Unsupervised Learning
            - Clustering
    - Deep Learning
        - Neural Networks
        - Convolutional Networks
`;

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMindMapMarkdown = async (inputText: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: inputText,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Low temperature for structured/deterministic output
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No content generated from the model.");
    }
    return text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};