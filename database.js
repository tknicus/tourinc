// ==========================================
// MASTERMINDS'CUP - CENTRAL DATABASE (v4.0)
// ==========================================

// 1. RIDER MASTERLIST (Mga ID, pangalan, ug Hashed Passcodes)
const riderDatabase = [
    { idNum: "0000", fullname: "ELKAPITAN", nickname: "invictus", level: "Street Pilot", category: "Adventure 500cc", classification: "Street Pilot", passcode: "a045f58fe4162bb9227e93f549390aef6219914df85029f74f6057c3fda6ca85", isMarshal: true },
    { idNum: "0001", fullname: "technicus", nickname: "rayHARGG", level: "AS26", category: "Adventure 525cc", classification: "Aspirant", passcode: "4c327801d652b4e7b3449684f83febb4fea62dbd2c80ee4136f32ecbccc0f45e", isMarshal: true },
    { idNum: "0002", fullname: "Long Way Ph", nickname: "Elkapitan Jr", level: "AS26", category: "ADV 350cc", classification: "MASTER", passcode: "e40e0225f947f1ae6cba2245dd9a1a50361512bb718c1ca1ce3f983fe3b3aa4e", isMarshal: true },
    { idNum: "0017", fullname: "MCcoy", nickname: "17", level: "G5", category: "BMW GS450cc", classification: "MASTER", passcode: "fe2592b42a727e977f055947385b709cc82b16b9a87f88c6abf3900d65d0cdc3", isMarshal: false },
    { idNum: "0251", fullname: "Zhack", nickname: "zhackyyy", level: "G1S", category: "Rouser RS2000", classification: "Aspirant", passcode: "e0799b5b526a8866b02243691e20c51cf33ef66d84c7c4e3b99727aa48d21d20", isMarshal: false },
    { idNum: "1605", fullname: "Jabla, Joshua ", nickname: "JOSHUA", level: "AS26", category: "LONEWOLF", classification: "MASTER", passcode: "5492dcdcf24546ce707e4c6e370ab4a0736d0defa0cbbf6f66798e57a309c6a1", isMarshal: false },
    { idNum: "1609", fullname: "PADRONES, ROCKY", nickname: "RaKiE", level: "AS26", category: "LONEWOLF", classification: "MASTER", passcode: "e40e0225f947f1ae6cba2245dd9a1a50361512bb718c1ca1ce3f983fe3b3aa4e", isMarshal: false },
    { idNum: "1617", fullname: "REMOLLENO, ALEXANDER ", nickname: "XRM SAKALAM", level: "AS26", category: "LONEWOLF", classification: "MASTER", passcode: "9f2ca3ad31656671b9e0bf12509c9e71dac5b8e8834145767f684bf193945d33", isMarshal: false },
    { idNum: "1634", fullname: "Galvadores, Riche Val", nickname: "Long Way PH", level: "AS26", category: "LONEWOLF", classification: "MASTER", passcode: "0", isMarshal: false },
    { idNum: "1635", fullname: "German, Henry Gulle", nickname: "technicus", level: "AS26", category: "LONEWOLF", classification: "MASTER", passcode: "0", isMarshal: false }
];


// 2. CHECKPOINT & ROUTE DIRECTORY (Para sa 8 ka Ruta)
// Pwede nimong usbon ang "AS26", "G5", "G1S" base sa saktong pangalan sa level/ruta sa imong riders.
const routeCheckpoints = {
    
    // --- RUTA 1: AS26 ---
    "AS26": {
        "CP 00": "Start Point / Assembly Area",
        "CP 01": "Mr. DIY Panabo",
        "CP 02": "Junction Paquibato - Kalagangan Rd / Calinan Rd.",
        "CP 03": "New Paquibato District Hall",
        "CP 04": "Pungco Hill",
        "CP 05": "Junction Panaga - Tapak Road / Paquibato - Kalagangan Rd",
        "CP 06": "Junction Kalagangan - Talaingod Rd",
        "CP 07": "Junction Bukidnon - Laak Road",
        "CP 08": "Sitio Bulo, Brgy Namnam, San Fernando, Bukidnon, Terracing Landscape View",
        "CP 09": "Pipisan Bridge, Sitio Pipisan, Brgy. Gupitan, Kapalong, Davao del Norte",
        "CP 10": "Lumondong Bridge / Falls, Sitio Lumondong, Brgy Gupitan, Kapalong, Davao del Norte",
        "CP 11": "Junction Kili-Kili, Sitio Kili-Kili, Brgy Gupitan, Kapalong, Davao del Norte",
        "CP 12": "Gatnaon Road, Sitio Butoy, Gupitan, Kapalong, Davao del Norte",
        "CP 13": "Junction Imelda, Brgy. Imelda, Laak, Davao de Oro",
        "CP 14": "Laak ta Bai",
        "CP 15": "Sampaguita Junction Park",
        "CP 16": "Sta Josefa Petron",
        "CP 17": "Crossing Brgy. Angas & Brgy. Awao",
        "CP 18": "Awao River Crossing (A)",
        "CP 19": "Awao River Crossing (B)",
        "CP 20": "Awao Ticket Booth",
        "CP 21": "Awao Falls",
        "CP 22": "Crossing Brgy. Angas & Brgy. Awao",
        "CP 23": "INC, Monkayo",
        "CP 24": "JESREL STORE, Mount Diwata",
        "CP 25": "GKK Santo Niño",
        "CP 26": "Goldie Mark Store, Purok 1-A, Mount Diwata",
        "CP 27": "Libunao Store",
        "CP 28": "Tru-Cut, Diwalwal",
        "CP 29": "Petron Boston",
        "CP 30": "Aliwagwag Falls Ecopark",
        "CP 31": "Manurigao highlands 5650 ft. Above sea level",
        "CP 32": "Shadol's Coffee Paste",
        "CP 33": "Maragusan Rotunda",
        "CP 34": "Araibo, Pantukan, Davao de Oro Checkpoint",
        "CP 35": "Special Village, Las Arenas, Pantukan",
        "CP 36": "Motor Parts, Brgy. Tagugpo, Pantukan",
        "CP 37": "Napapan Mandatory Photo Op",
        "CP 38": "Jolibee Pantukan",
        "CP FL": "ELKAPITAN's Headstone (Finish Line)"
    },

    // --- RUTA 2 ---
    "G5": {
        "CP 00": "Start Point - Ruta 2",
        "CP 01": "Unang Checkpoint sa Ruta 2",
        // ... i-type ang mga sunod ...
        "CP FL": "Finish Line - Ruta 2"
    },

    // --- RUTA 3 ---
    "G1S": {
        "CP 00": "DavNor Sports Complex",
        "CP 01": "F Bangoy Central Elementary School",
        "CP 02": "Davao City Coastal Road",
        "CP 03": "Davao Coastal Road",
        "CP 04": "McDo Petron Cogon Digos",
        "CP 05": "Flying V Otsenta",
        "CP 06": "Malita Municipal Plaza",
        "CP 07": "Joyce Paradise",
        "CP 08": "Baños Point Lighthouse",
        "CP 09": "JAS Municipal Hall",
        "CP 10": "TOUR Town Glan",
        "CP 11": "Plaza Heneral Santos",
        "CP 12": "Maitum Municipal Hall",
        "CP 13": "Baywalk Palimbang",
        "CP 14": "Lebak Roundball",
        "CP 15": "Grand Mosque of Cotabato",
        "CP 16": "Picung Tunnel",
        "CP 17": "Rotunda Park Pagadian",
        "CP 18": "Ipil Rotunda Obelisk",
        "CP 19": "Zamboanga City Signage",
        "CP 20": "Boyscout of the Philippines",
        "CP 21": "Limpana TRUSS Bridge",
        "CP 22": "Pangian Bridge",
        "CP 23": "Sibuco Municipality",
        "CP 24": "Siocon Rotonda Plaza",
        "CP 25": "Baliguian Eadle Landmark",
        "CP 26": "I Love Gutalac Landmard",
        "CP 27": "Liloy Municipal Hall",
        "CP 28": "Giant Chicken Statue",
        "CP 29": "Dipolog Rotonda",
        "CP 30": "Dapitan Park",
        "CP 31": "Tag-ulo",
        "CP 32": "Plaridel",
        "CP 33": "I Love Oroquieta",
        "CP 34": "Panguil Bay Bridge",
        "CP 35": "Iligan City (711/Petron)",
        "CP 36": "MV Beach & Pool Resort",
        "CP 37": "El Salvador City Hall",
        "CP 38": "Divine Mercy Statue",
        "CP 39": "Bugo CDO Shell Gasoline Station",
        "CP 40": "Sugbongcogon Municipal Hall",
        "CP 41": "The Bay Gingoog",
        "CP 42": "Magsaysay Munipal Park",
        "CP 43": "Cervantina Elementary School",
        "CP 44": "Vinapor Beach Park",
        "CP 45": "Rotunda Bancasi",
        "CP 46": "Jollibee Cabadbaran",
        "CP 47": "Jabonga People's Park",
        "CP 48": "Hanagdong Project",
        "CP 49": "Looc Landmark",
        "CP 50": "Punta Bilar Lighthouse",
        "CP 51": "I Love Surigao",
        "CP 52": "Nabago Elementary School",
        "CP 53": "Claver 711",
        "CP 54": "Noventa View Deck",
        "CP 55": "Tandag City Baywalk Boulevard",
        "CP 56": "Hinatuan Signage",
        "CP 57": "Petron Cateel",
        "CP 58": "Baganga Sunrise Boulevard",
        "CP 59": "Pusan Point Caraga",
        "CP 60": "Balete Primary School",
        "CP 61": "WOW Manay Landmark",
        "CP 62": "Dahican Rotunda",
        "CP 63": "Mati Baywalk Park",
        "CP 64": "711/SeaOil Governor Generoso",
        "CP 65": "Centennial Tree (dedo na :-( )",
        "CP 66": "Cape San Agustin",
        "CP 67": "Manikling Rotonda",
        "CP 68": "Davao Oriental Welcome Park",
        "CP 69": "Diocesan Shrine of Our Mother of Pertual Help",
        "CP 70": "Fe Misa Ayala Seniors Park",
        "CP 71": "ELKAPITAN 's Burial Ground ",
        "CP FL": "DavNor Sports Complex"      
    },

    // --- RUTA 4 ---
    "RUTA_4": {
        "CP 00": "Start Point - Ruta 4",
        "CP FL": "Finish Line - Ruta 4"
    },

    // --- RUTA 5 ---
    "RUTA_5": {
        "CP 00": "Start Point - Ruta 5",
        "CP FL": "Finish Line - Ruta 5"
    },

    // --- RUTA 6 ---
    "RUTA_6": {
        "CP 00": "Start Point - Ruta 6",
        "CP FL": "Finish Line - Ruta 6"
    },

    // --- RUTA 7 ---
    "RUTA_7": {
        "CP 00": "Start Point - Ruta 7",
        "CP FL": "Finish Line - Ruta 7"
    },

    // --- RUTA 8 ---
    "RUTA_8": {
        "CP 00": "Start Point - Ruta 8",
        "CP FL": "Finish Line - Ruta 8"
    }
};