import type { LocalityNode } from "./types";

export const PROJECT_NAME = "Superb Vikhroli";
// Vikhroli (E), Mumbai — anchor of the locality story
export const PROJECT_CENTER = { lat: 19.108, lng: 72.929 };

// Real Mumbai coordinates (approximate but geographically faithful).
export const NODES: LocalityNode[] = [
  // Nearby Areas
  { id: "near-powai", category: "nearbyAreas", name: "Powai", meta: "3 KM", lat: 19.1176, lng: 72.9060 },
  { id: "near-kanjur", category: "nearbyAreas", name: "Kanjurmarg", meta: "3.9 KM", lat: 19.1302, lng: 72.9370 },
  { id: "near-ghatkopar", category: "nearbyAreas", name: "Ghatkopar", meta: "1.8 KM", lat: 19.0860, lng: 72.9080 },
  { id: "near-mulund", category: "nearbyAreas", name: "Mulund", meta: "8.4 KM", lat: 19.1720, lng: 72.9560 },
  { id: "near-andheri", category: "nearbyAreas", name: "Andheri", meta: "7.5 KM", lat: 19.1197, lng: 72.8464 },
  { id: "near-thane", category: "nearbyAreas", name: "Thane", meta: "8.7 KM", lat: 19.2183, lng: 72.9781 },
  { id: "near-bkc", category: "nearbyAreas", name: "BKC", meta: "11.5 KM", lat: 19.0660, lng: 72.8680 },
  { id: "near-navimumbai", category: "nearbyAreas", name: "Navi Mumbai", meta: "12 KM", lat: 19.0330, lng: 73.0297 },

  // Business Parks
  { id: "bp-91", category: "businessParks", name: "91 Springboard", meta: "0.2 KM", lat: 19.1090, lng: 72.9322 },
  { id: "bp-embassy", category: "businessParks", name: "Embassy 247", meta: "1.4 KM", lat: 19.1112, lng: 72.9270 },
  { id: "bp-powai-supreme", category: "businessParks", name: "Powai Supreme Business Park", meta: "4.8 KM", lat: 19.1198, lng: 72.9050 },
  { id: "bp-godrej-one", category: "businessParks", name: "Godrej One", meta: "5.2 KM", lat: 19.1118, lng: 72.9250 },
  { id: "bp-lodha", category: "businessParks", name: "Lodha Supremus", meta: "7.5 KM", lat: 19.1248, lng: 72.9170 },
  { id: "bp-mtc", category: "businessParks", name: "Mumbai Trade Centre, BKC", meta: "11.3 KM", lat: 19.0658, lng: 72.8662 },
  { id: "bp-amani", category: "businessParks", name: "Amani Knowledge Park, Vikhroli", meta: "Vikhroli", lat: 19.1062, lng: 72.9295 },
  { id: "bp-mapletree", category: "businessParks", name: "Mapletree", meta: "Powai", lat: 19.1170, lng: 72.9110 },

  // Healthcare
  { id: "hc-samarth", category: "healthcare", name: "Samarth Hospital", meta: "0.8 KM", lat: 19.1050, lng: 72.9305 },
  { id: "hc-nursing", category: "healthcare", name: "Healthcare Nursing Home", meta: "1.5 KM", lat: 19.1033, lng: 72.9282 },
  { id: "hc-hiranandani", category: "healthcare", name: "Hiranandani Hospital", meta: "3.2 KM", lat: 19.1209, lng: 72.9085 },
  { id: "hc-godrej-mem", category: "healthcare", name: "Godrej Memorial Hospital", meta: "6.3 KM", lat: 19.1058, lng: 72.9202 },
  { id: "hc-parakh", category: "healthcare", name: "Parakh Hospital", meta: "4.3 KM", lat: 19.0950, lng: 72.9180 },
  { id: "hc-supreme", category: "healthcare", name: "Supreme Multi Speciality", meta: "2.7 KM", lat: 19.0982, lng: 72.9282 },
  { id: "hc-sai", category: "healthcare", name: "Sai Hospital", meta: "2 KM", lat: 19.1100, lng: 72.9292 },
  { id: "hc-atul", category: "healthcare", name: "Atul Lok Private Hospital", meta: "2.2 KM", lat: 19.1023, lng: 72.9258 },

  // Hospitality
  { id: "hs-ibis", category: "hospitality", name: "Ibis", meta: "1.3 KM", lat: 19.1167, lng: 72.9110 },
  { id: "hs-taj-trees", category: "hospitality", name: "Taj Trees", meta: "3.8 KM", lat: 19.1098, lng: 72.9289 },
  { id: "hs-meluha", category: "hospitality", name: "Meluha The Fern", meta: "4.6 KM", lat: 19.1190, lng: 72.9060 },

  // Entertainment
  { id: "en-rcity", category: "entertainment", name: "R City Mall", meta: "1.3 KM", lat: 19.0992, lng: 72.9175 },
  { id: "en-naturebasket", category: "entertainment", name: "Nature's Basket, Powai", meta: "1.5 KM", lat: 19.1192, lng: 72.9082 },
  { id: "en-hiranandanidmart", category: "entertainment", name: "Hiranandani D Mart", meta: "5 KM", lat: 19.1218, lng: 72.9072 },
  { id: "en-powaiplaza", category: "entertainment", name: "Powai Plaza", meta: "6.3 KM", lat: 19.1222, lng: 72.9052 },
  { id: "en-phoenix", category: "entertainment", name: "Phoenix Market City Mall", meta: "4.3 KM", lat: 19.0870, lng: 72.8890 },

  // Existing Connectivity
  { id: "ec-weh", category: "existingConnectivity", name: "Western Express Highway", meta: "9–10 min", lat: 19.1180, lng: 72.8700 },
  { id: "ec-eeh", category: "existingConnectivity", name: "Eastern Express Highway", meta: "2 min", lat: 19.1100, lng: 72.9370 },
  { id: "ec-vikhroli-bridge", category: "existingConnectivity", name: "Vikhroli East West Bridge", meta: "1.5–2 min", lat: 19.1075, lng: 72.9250 },
  { id: "ec-east-freeway", category: "existingConnectivity", name: "Eastern Freeway", meta: "12–14 min", lat: 19.0300, lng: 72.8600 },
  { id: "ec-jvlr", category: "existingConnectivity", name: "JVLR", meta: "4–5 min", lat: 19.1200, lng: 72.8950 },
  { id: "ec-sclr", category: "existingConnectivity", name: "SCLR", meta: "6–7 min", lat: 19.0830, lng: 72.8820 },
  { id: "ec-sionpanvel", category: "existingConnectivity", name: "Sion Panvel Highway", meta: "7–8 min", lat: 19.0450, lng: 73.0000 },
  { id: "ec-harbour", category: "existingConnectivity", name: "Harbour Line", meta: "6–7 min", lat: 19.0800, lng: 72.9000 },
  { id: "ec-blueline", category: "existingConnectivity", name: "Blue Line 1 Metro", meta: "5–6 min", lat: 19.0860, lng: 72.9080 },
  { id: "ec-csmiat2", category: "existingConnectivity", name: "CSMIA T2", meta: "7–9 min", lat: 19.0970, lng: 72.8740 },
  { id: "ec-t1", category: "existingConnectivity", name: "Domestic Airport T1", meta: "—", lat: 19.0887, lng: 72.8680 },
  { id: "ec-nmia", category: "existingConnectivity", name: "Navi Mumbai Intl. Airport", meta: "45 min", lat: 19.0200, lng: 73.0990 },

  // Upcoming Infrastructure
  { id: "ui-gmlr", category: "upcomingInfrastructure", name: "Goregaon Mulund Link Road", meta: "5–7 min", lat: 19.1550, lng: 72.9100 },
  { id: "ui-kkv-bridge", category: "upcomingInfrastructure", name: "KoparKhairane – Vikhroli Bridge", meta: "3–4 min", lat: 19.1150, lng: 72.9850 },
  { id: "ui-green4", category: "upcomingInfrastructure", name: "Metro Green Line 4", meta: "0 min", lat: 19.1100, lng: 72.9350 },
  { id: "ui-pink6", category: "upcomingInfrastructure", name: "Metro Pink Line 6", meta: "3–4 min", lat: 19.1400, lng: 72.8900 },
  { id: "ui-magenta14", category: "upcomingInfrastructure", name: "Metro Magenta Line 14", meta: "1–2 min", lat: 19.1350, lng: 72.9450 },
  { id: "ui-90feet", category: "upcomingInfrastructure", name: "90 Feet DP Road", meta: "3–4 min", lat: 19.0900, lng: 72.9200 },
];
