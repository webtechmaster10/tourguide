
export async function queryAIAgent(data) {
  try {
    const response = await fetch(
      "https://rhpxilzb.usw.sealos.io/api/v1/prediction/051194e2-f2f8-4058-988e-49ac46183d6e",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error querying AI agent:", error);
    throw error;
  }
}

export function formatTime(date = new Date()) {
  return date.toLocaleTimeString();
}


export function generateMessageId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000);
}
