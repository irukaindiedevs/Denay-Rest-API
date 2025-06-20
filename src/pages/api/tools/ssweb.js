// src/pages/api/tools/ssweb.js
import { fetchJson } from "@/lib/utils";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ status: false, message: "Method not allowed" });
  }

  const { url } = req.query;

  if (!url) {
    return res
      .status(400)
      .json({ status: false, message: "Missing url parameter" });
  }

  try {
    const result = await fetchJson(
      `https://api.pikwy.com/?tkn=125&d=3000&u=${url}&fs=0&w=1280&h=1200&s=100&z=100&f=$jpg&rt=jweb`
    );

    return res.status(200).json({
      status: true,
      result,
    });
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
}
