export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch("https://api.country.is/");
    if (!response.ok) throw new Error("Failed to fetch location");

    const data = await response.json();
    if (!data.country) {
      throw new Error("Country code not found in response");
    }

    res.status(200).json({ countryCode: data.country.toLowerCase() });
  } catch (error) {
    console.error("Error fetching location:", error);
    res.status(500).json({ error: "Failed to fetch location" });
  }
}
