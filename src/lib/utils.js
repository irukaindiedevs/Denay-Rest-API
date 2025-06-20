import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import moment from "moment-timezone";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function tanggal(numer) {
  const myMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const myDays = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum’at",
    "Sabtu",
  ];
  const tgl = new Date(numer);
  const day = tgl.getDate();
  const bulan = tgl.getMonth();
  const thisDay = myDays[tgl.getDay()];
  const yy = tgl.getYear();
  const year = yy < 1000 ? yy + 1900 : yy;

  return `${thisDay}, ${day}/${myMonths[bulan]}/${year}`;
}

export function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getBuffer(url, options = {}) {
  try {
    const res = await axios.get(url, {
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function fetchJson(url, options = {}) {
  try {
    const res = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

export function runtime(seconds = process.uptime()) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  return `${d ? d + "d " : ""}${h ? h + "h " : ""}${m ? m + "m " : ""}${
    s ? s + "s" : ""
  }`;
}
