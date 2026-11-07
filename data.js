// Kansai Japan Travel Plans 2026 - Multi-Plan Registry & Structured Checkpoints Data

// 100% Kyoto Base (Peach Aviation • APA Hotel Kyoto Ekihigashi)
const PLAN_A_DATA = {
  id: "plan_a",
  name: "Kyoto Trip",
  badge: "100% Kyoto Base (5 คืน)",
  tripTitle: "🍁 Kyoto Trip [พัก Kyoto 5 คืน + Nara & Osaka Day Trip]",
  dateRange: "1 - 6 ธันวาคม 2026",
  airline: "Peach Aviation (BKK ↔ KIX Terminal 2)",
  totalICCardCostJPY: 13900,
  exchangeRate: 0.24, // 1 JPY ~ 0.24 THB

  // Numeric values are canonical for both currency views; the published totals are plan estimates.
  budget: {
    transport: { minJPY: 13900, maxJPY: 13900, note: "รวม Haruka ซื้อใหม่ 2,700 เยน × 2 เที่ยวและเงินเผื่อรายวัน; หากมีตั๋วเดิมให้ปรับตามราคาซื้อจริง ไม่รวมแท็กซี่" },
    meals: { minJPY: 25000, maxJPY: 34000, note: "ไม่รวม Taiho-an ซึ่งนับรวมในค่าเข้าชมและกิจกรรมชา" },
    admissions: { minJPY: 9000, maxJPY: 11500, note: "รวม Taiho-an Usucha และ Kaiyukan งบเผื่อ 3,500; ปรับตามราคาตั๋วจริง" },
    accommodationTax: { minJPY: 2000, maxJPY: 2000, note: "สมมติ 400 เยน × 5 คืน; ยืนยันจากราคาห้องต่อคนต่อคืน" },
    beforeReserve: { minJPY: 49900, maxJPY: 61400 },
    reserve: { minJPY: 5000, maxJPY: 5000, note: "เงินสำรองบางส่วน ไม่ใช่งบรับประกันกิจกรรมเสริม" },
    total: { minJPY: 54900, maxJPY: 66400 },
    exchangeRate: 0.24,
    accommodationTaxBands: [
      { threshold: "ต่ำกว่า 6,000 เยน", amountJPY: 200 },
      { threshold: "6,000–ต่ำกว่า 20,000 เยน", amountJPY: 400 },
      { threshold: "20,000–ต่ำกว่า 50,000 เยน", amountJPY: 1000 },
      { threshold: "50,000–ต่ำกว่า 100,000 เยน", amountJPY: 4000 },
      { threshold: "ตั้งแต่ 100,000 เยน", amountJPY: 10000 }
    ],
    admissionBaseJPY: 7500,
    kaiyukanEstimateJPY: 3500,
    usuchaJPY: 1500,
    phoenixHallExtraJPY: 300,
    handsOnTeaExtraJPY: 2100
  },

  budgetSummary: [
    {
      item: "1. งบรถสาธารณะรวม Haruka ไป-กลับ",
      costTHB: "~3,336 ฿",
      note: "13,900 เยน รวมเงินเผื่อรายวัน เป็นงบวางแผน ไม่ใช่ยอดค่าโดยสารที่ยืนยันครบทุกช่วง และไม่รวมแท็กซี่"
    },
    {
      item: "2. อาหารและคาเฟ่ทั่วไป",
      costTHB: "~6,000 - 8,160 ฿",
      note: "25,000–34,000 เยน ไม่รวมกิจกรรมชา Taiho-an ที่นับในค่าเข้าชมด้านล่าง"
    },
    {
      item: "3. ค่าเข้าชม / Taiho-an / Kaiyukan",
      costTHB: "~2,160 - 2,760 ฿",
      note: "9,000–11,500 เยน รวม Taiho-an Usucha และ Kaiyukan งบเผื่อ 3,500; Phoenix Hall / คอร์สลงมือชงเป็นตัวเลือก"
    },
    {
      item: "4. ภาษีที่พัก Kyoto (สมมติ)",
      costTHB: "~480 ฿",
      note: "2,000 เยน จากสมมติฐาน 400 เยน × 5 คืน; โรงแรมต้องยืนยันตามราคาที่พักต่อคนต่อคืนจริง"
    },
    {
      item: "รวมก่อนเงินสำรอง",
      costTHB: "~11,976 - 14,736 ฿",
      note: "49,900–61,400 เยน / คน ไม่รวมตั๋วเครื่องบิน ค่าห้อง และช้อปปิ้ง"
    },
    {
      item: "เงินสำรองทั่วไป",
      costTHB: "~1,200 ฿",
      note: "5,000 เยน สำหรับค่าใช้จ่ายเพิ่มบางส่วน ไม่ใช่งบรับประกันสำหรับทุกกิจกรรมเสริม"
    },
    {
      item: "รวมพร้อมเงินสำรอง",
      costTHB: "~13,176 - 15,936 ฿",
      note: "54,900–66,400 เยน / คน ที่อัตราอ้างอิงเดิม 1 เยน ≈ 0.24 บาท ไม่ใช่อัตราแลกเปลี่ยนสด"
    }
  ],

  categories: {
    spot: { name: "สถานที่เที่ยวไฮไลท์", icon: "fa-landmark", color: "#e74c3c" },
    nature: { name: "ใบไม้เปลี่ยนสี & ธรรมชาติ", icon: "fa-leaf", color: "#e67e22" },
    food: { name: "ร้านอาหารเด็ดท้องถิ่น & มัทฉะ", icon: "fa-utensils", color: "#f1c40f" },
    shopping: { name: "ช้อปปิ้ง & ตลาดโบราณ", icon: "fa-bag-shopping", color: "#9b59b6" },
    transport: { name: "การเดินทาง / สถานี", icon: "fa-plane-departure", color: "#3498db" }
  },

  hotelInfo: {
    name: "APA Hotel Kyoto Ekihigashi (APAホテル〈京都駅東〉)",
    address: "JR Kyoto Station Central Gate เดินประมาณ 3 นาที / Subway Exit A5 เดินประมาณ 1 นาที",
    nights: "5 คืน (1 - 6 ธ.ค. 2026)",
    features: "เช็คอิน 15:00 / เช็คเอาท์ 10:00; ยืนยันเงื่อนไขฝากกระเป๋าและภาษีที่พักจากราคาจองจริงกับโรงแรม",
    mapLink: "https://www.google.com/maps/search/?api=1&query=APA+Hotel+Kyoto+Ekihigashi",
    sourceLink: "https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/"
  },

  flightInfo: {
    airline: "Peach Aviation • เวลาท้องถิ่น",
    departure: {
      flight: "MM092",
      from: "สุวรรณภูมิ (BKK) 01:10 น. วันอังคาร 1 ธ.ค. (ไปสนามบินคืน 30 พ.ย.)",
      to: "สนามบินคันไซ (KIX) Terminal 2 เวลา 08:45 น."
    },
    return: {
      flight: "MM091",
      from: "สนามบินคันไซ (KIX) Terminal 2 เวลา 19:15 น. วันอาทิตย์ 6 ธ.ค.",
      to: "สุวรรณภูมิ (BKK) เวลา 23:55 น. คืนวันที่ 6 ธ.ค."
    },
    terminalNote: "อ้างอิงตารางฤดูหนาว Peach ฉบับ 21 ต.ค. 2026; ใช้ใบจองและประกาศล่าสุดตรวจเวลา/สัมภาระอีกครั้ง ไม่ผูกแผนกับชนิดเครื่องบินที่อาจเปลี่ยนได้",
    sourceLink: "https://www.flypeach.com/application/files/8917/9245/8562/20261021_W26_20261025-20270327_int_JP.pdf"
  },

  travelTips: [
    { icon: "fa-ticket", title: "Kaiyukan — จองวันและเวลา", desc: "5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง ราคาเปลี่ยนตามวัน งบเผื่อ 3,500 เยนยังไม่ใช่ราคายืนยัน ตรวจราคา เวลาเปิดและที่ว่างก่อนซื้อ ตั๋วหน้างานอาจต้องรอรอบ", link: "https://www.kaiyukan.com/info/ticket/kaiyukan/", linkLabel: "Kaiyukan — ราคาและตั๋ว" },
    {
      icon: "fa-plane",
      title: "ตารางบินและเวลา",
      desc: "ตารางฤดูหนาว Peach ฉบับ 21 ต.ค. 2026 เป็นแหล่งอ้างอิงเวลาในแผน; ตรวจใบจอง เที่ยวบิน และเงื่อนไขสัมภาระล่าสุดก่อนเดินทาง ไม่รับประกันว่าเวลาในแผนจะไม่เปลี่ยน",
      link: "https://www.flypeach.com/application/files/8917/9245/8562/20261021_W26_20261025-20270327_int_JP.pdf",
      linkLabel: "ตารางฤดูหนาว Peach"
    },
    {
      icon: "fa-train",
      title: "Haruka และช่องทางตั๋ว",
      desc: "ตั้งงบตั๋วส่วนลดนักท่องเที่ยว 2,700 เยน/เที่ยว รวมไปกลับ 5,400 เยน สำหรับตั๋วที่ขายตั้งแต่ 1 พ.ย. 2026 ราคาขึ้นกับวันซื้อ; หากซื้อไว้ก่อนแล้วให้ตรวจเงื่อนไขตั๋วเดิม ตรวจคุณสมบัติและผลิตภัณฑ์ที่ซื้อ: WEST QR ต้องลงทะเบียนและใช้โทรศัพท์ออนไลน์ ส่วน JR-WEST Online/Exchange Order อาจต้องรับหรือแลกตั๋วตามช่องทาง อย่ากดเริ่มใช้ก่อนวันเดินทาง",
      link: "https://www.westjr.co.jp/global/en/ticket/westqr/haruka/",
      linkLabel: "JR-WEST WEST QR",
      secondaryLink: "https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/",
      secondaryLinkLabel: "JR-WEST Haruka"
    },
    {
      icon: "fa-id-card",
      title: "บัตร IC Card (ICOCA / Suica)",
      desc: "ใช้กับรถไฟและรถบัสทั่วไปตามเงื่อนไขผู้ให้บริการ Haruka ซื้อแยก เติมเริ่มต้นประมาณ 3,000–5,000 เยนแล้วเติมเพิ่มตามใช้; งบรถสาธารณะ 13,900 เยนเป็นกรอบประมาณการรวม Haruka และเงินเผื่อรายวัน ไม่ใช่ยอดค่าโดยสารที่ยืนยันครบทุกช่วง",
    },
    {
      icon: "fa-bus",
      title: "KIX Terminal 2 Shuttle",
      desc: "จากสถานีสนามบินเดินไป Aeroplaza ชั้น 1 แล้วต่อ Shuttle ฟรีไป T2 ใช้เวลาบนรถราว 7–9 นาที เผื่อเดินและรอรวมประมาณ 30 นาที",
      link: "https://www.kansai-airport.or.jp/en/faq/1101",
      linkLabel: "ข้อมูล Shuttle จาก KIX"
    },
    {
      icon: "fa-receipt",
      title: "Tax-free ที่ KIX T2",
      desc: "ระบบคืนภาษีแบบใหม่เริ่ม 1 พ.ย. 2026: จ่ายรวมภาษีก่อน ศุลกากรยืนยันการนำออกภายใน 90 วันก่อนโหลดกระเป๋าที่บรรจุสินค้า; KIX ใช้ Tax Refund Kiosk หรือ VJW ในพื้นที่ Wi-Fi ที่กำหนดก่อนจุดตรวจความปลอดภัย ตามประกาศ 2 พ.ย. หากถูกเลือกตรวจให้นำสินค้าไปศุลกากร ร้านคืนเงินตามวิธีที่ลงทะเบียน ตรวจตำแหน่งบริการ T2 International อีกครั้ง",
      link: "https://www.customs.go.jp/kaigairyoko/taxrefund.htm",
      linkLabel: "Japan Customs — Tax-free",
      secondaryLink: "https://services.digital.go.jp/en/visit-japan-web/news/20261102-01/",
      secondaryLinkLabel: "VJW — ประกาศ 2 พ.ย. 2026"
    },
    {
      icon: "fa-utensils",
      title: "อาหารใน KIX T2",
      desc: "ตรวจร้านในเขตขาออก International แยกจาก Domestic; ฟูดคอร์ต 4 ร้านที่เปิด 1 เม.ย. 2026 อยู่ T2 Domestic จึงไม่ใช่ตัวเลือกหลังผ่าน ตม. ขาออกระหว่างประเทศ",
      link: "https://www.kansai-airports.co.jp/en/news/e-260303-pressrelease-t2open/",
      linkLabel: "Kansai Airports — ข่าวเปิด T2"
    },
    {
      icon: "fa-calendar-check",
      title: "จองและตรวจเงื่อนไขก่อนเดินทาง",
      desc: "จอง Taiho-an ตามปฏิทินจริง (Usucha 1,500 เยน หรือคอร์สลงมือชง 3,600 เยน จองล่วงหน้าอย่างน้อย 3 วัน); ตรวจ Murin-an หากเลือกแทนคาเฟ่, Menami หากต้องการมื้อเย็น และภาษีที่พักตามราคาต่อคนต่อคืน",
      link: "https://www.kyoto-uji-kankou.or.jp/taihoan-en.html",
      linkLabel: "Taiho-an — ข้อมูลและจอง",
      secondaryLink: "https://kyoto.travel/en/news/tax-change/",
      secondaryLinkLabel: "Kyoto City — ภาษีที่พัก"
    },
    {
      icon: "fa-circle-info",
      title: "ปรับแผน · 6 พ.ย. 2026",
      desc: "ปรับ Day 5 เป็น Osaka Castle / Kaiyukan / Dotonbori พร้อมงบใหม่; Shimogamo เป็น Day 4 โดยเก็บวัดทอง Day 3; ข้อมูลสถานที่เดิมตรวจ 3 พ.ย.; ตารางบินอ้างอิงฉบับ 21 ต.ค. 2026 ยังต้องยืนยันใบจอง ขบวนรถ ที่ว่างกิจกรรม และวันเปิดพิเศษของร้านสำรอง เวลารายวันเป็นกรอบเผื่อเดิน/รอ ไม่ใช่รอบรถที่จองแล้ว"
    },
    {"icon":"fa-landmark","title":"Byodoin — ภายใน Phoenix Hall","desc":"จำกัด 35 คน/รอบตั้งแต่ 16 ต.ค. อาจรอนานขึ้น พลาดรอบแล้วเปลี่ยนเวลาหรือคืนเงินไม่ได้; เลือกรอบที่ไม่ชน Taiho-an งานซ่อมเดือน พ.ย. ยังไม่ทับ 2 ธ.ค. ตามกำหนดปัจจุบัน","link":"https://www.byodoin.or.jp/news/cat23/20261016/","linkLabel":"Byodoin — ประกาศจำนวนคน"},
    {"icon":"fa-leaf","title":"Murin-an — ตัวเลือกแทนคาเฟ่","desc":"4 ธ.ค. ค่าเข้า 1,500 เยน เปิดจองก่อน 30 วันและยกเลิกเสียค่าธรรมเนียม 100%; เลือกรอบ 16:00 ตามที่ว่าง ออกประมาณ 16:30 เพื่อไป Eikando หากต้องการชมสวนนานให้ลดจุดก่อนหน้าและจองรอบเร็วขึ้น ตรวจแพ็กเกจเครื่องดื่มแยก","link":"https://murin-an.jp/info/","linkLabel":"Murin-an — ราคาและเงื่อนไข"},
    {"icon":"fa-leaf","title":"ใบไม้แดง — พยากรณ์ 29 ต.ค.","desc":"Weathernews คาด Arashiyama เริ่มช่วงชมสวยราว 23 พ.ย. เป็นพยากรณ์ ไม่รับประกันสภาพวันที่ 3 ธ.ค.; ตรวจใบไม้จริงและวันหยุดร้านอีกครั้ง 24–27 พ.ย. โดยเก็บ Kinkakuji ตามแผน","link":"https://jp.weathernews.com/news/57986/","linkLabel":"Weathernews — รอบ 29 ต.ค. 2026"}
  ],

  alternatives: [
    { name: "Ippodo / Kaboku", replaces: "Nishiki ใน Day 6 เมื่อให้ความสำคัญกับชา", note: "เลือกแห่งเดียว ซื้อชา/ดื่มสั้น 10:30–11:15 ตามคิว แล้วกลับโรงแรมราว 12:00; ไม่เพิ่มกลับเข้า Day 4 ร้านเปิด 10:00–17:00 สั่งสุดท้าย 16:30 หยุดพุธที่สองของเดือน ตรวจประกาศพิเศษ", link: "https://global.ippodo-tea.co.jp/pages/store-kyoto" },
    {
      name: "Kenninji",
      replaces: "Kiyomizu ใน Day 4 เมื่อฝนตกหรือไม่ไหวกับเนิน",
      note: "เริ่ม 10:00 โดยงด Kiyomizu / Asahido แล้วเลือก Shimogamo ตามแรงก่อนต่อ Nanzenji / Eikando; รับเข้าถึง 16:30 ปิด 17:00 ค่าเข้า 800 เยนในทริปนี้ (ขึ้นเป็น 1,000 เยน 1 ม.ค. 2027); งดคัดพระสูตร 1 พ.ย.–6 ธ.ค. ตามประกาศ 22 ต.ค.",
      link: "https://www.kenninji.jp/access/"
    },
    {
      name: "CHAZUNA",
      replaces: "Taiho-an เมื่อจองไม่ได้หรืออยากทำกิจกรรมชา",
      note: "พิพิธภัณฑ์เปิด 09:00–17:00 รับเข้าถึง 16:30; ตารางกิจกรรมเดือน ธ.ค. ประกาศแล้ว 28 ต.ค. ต้องจองผ่านเว็บไซต์และตรวจราคา/ที่ว่าง 2 ธ.ค. หากยังไป Nara ให้ออกจาก Uji ไม่เกิน 13:00",
      link: "https://uji-chazuna.kyoto/3221/"
    },
  ],

  contingencies: [
    { title: "Day 1: พักก่อน เที่ยวเย็นตามแรง", detail: "รักษาเช็คอิน 15:00 และนอนพักถึงราว 17:30; งด Gion / Pontocho ได้ทั้งหมด ถ้าถึงหลัง 15:00 ให้เช็คอินก่อนแล้วค่อยกิน ย้าย Kiyomizu / Asahido ไป Day 4 และ Nishiki ไป Day 6 แล้ว" },
    { title: "Day 2: Uji / Nara ช้า", detail: "คง Taiho-an รอบที่จอง ตัด Phoenix Hall ภายในและการช้อปก่อน; หากออก Uji หลัง 13:00 ให้ไป Todaiji ก่อน เผื่อรถบัส Nara ล่าช้า" },
    { title: "Day 4: Kiyomizu / Shimogamo / Eikando", detail: "เมื่อช้าลดเดิน Tadasu no Mori และเวลาชม Nanzenji ก่อน งด Murin-an แต่เก็บเวลานั่งพัก ถ้าออกจากถนนเก่าหลัง 11:00 ให้เลื่อนศาลเจ้าตามจริง เลือกมื้อคิวสั้น ไม่เพิ่มวัดเงินหรือ Philosopher’s Path; ถ้าคิว Eikando ชน Menami ปรับตามเงื่อนไขร้าน" },
    { title: "Day 5: รักษารอบ Kaiyukan", detail: "เมื่อช้า เหนื่อย หรือฝนหนัก ให้ลดการเดินสวนปราสาทก่อน รักษารอบ Kaiyukan และมื้อพักกลางวัน กลับจาก Dotonbori เร็วขึ้นได้ ไม่เพิ่มสถานที่ที่สี่" },
    { title: "Day 6: ตัดตลาดก่อนบีบเวลาสนามบิน", detail: "ถ้าออกจาก Fushimi หลัง 09:30 ให้งด Nishiki; ออกจากตลาดไม่เกิน 11:15 กลับโรงแรมราว 12:00 รับกระเป๋า/เข้าสถานี 12:00–13:00; ฝนหนักหรือ Haruka มีปัญหาให้ตัด Fushimi และตลาดแล้วจัดการเดินทางสนามบินทันที" },
  ],

  nearbyRestaurants: [
    {
      name: "Honke Daiichi Asahi (本家 第一旭 本店)",
      category: "Ramen (โชยุ)",
      walkTime: "4 นาที",
      desc: "🍜 ร้านราเมนซุปโชยุหมูเข้มข้นใกล้สถานี Kyoto เปิด 06:00–01:00 หยุดพฤหัสบดี; ไม่ใช้เป็นร้านสำรองวันที่ 3 ธ.ค.",
      link: "https://www.google.com/maps/search/?api=1&query=Honke+Daiichi+Asahi"
    },
    {
      name: "Shinpuku Saikan (新福菜館 本店)",
      category: "Ramen (โชยุดำ)",
      walkTime: "4 นาที",
      desc: "🍜 ราเมนซุปโชยุดำและข้าวผัด ร้านเปิด 09:00–20:00 หยุดวันพุธบางสัปดาห์ รับเฉพาะเงินสด; ณ 3 พ.ย. ยังไม่พบประกาศวันหยุดเดือน ธ.ค. 2026 ต้องยืนยันก่อนวางเป็นมื้อเย็น",
      link: "https://www.google.com/maps/search/?api=1&query=Shinpuku+Saikan"
    },
    {
      name: "Kyoto Ramen Koji (京都拉麺小路)",
      category: "Ramen Street",
      walkTime: "4 นาที (ชั้น 10 สถานีเกียวโต)",
      desc: "🍜 รวมร้านราเมนในสถานี Kyoto ชั้น 10 เปิด 11:00–22:00 สั่งสุดท้าย 21:30",
      link: "https://www.google.com/maps/search/?api=1&query=Kyoto+Ramen+Street"
    },
    {
      name: "Chojiro Sushi (CHOJIRO 京都駅前店)",
      category: "Sushi / Sashimi",
      walkTime: "Avanti / ฝั่ง Hachijo",
      desc: "🍣 ซูชิสายพานในห้าง Avanti ฝั่ง Hachijo; เผื่อเวลาเดินข้ามสถานีจากโรงแรม",
      link: "https://www.google.com/maps/search/?api=1&query=Chojiro+Sushi+Kyoto+Station"
    },
    {
      name: "Sushi no Musashi (寿しのむさし)",
      category: "Sushi / Sashimi",
      walkTime: "ฝั่ง Hachijo Gate",
      desc: "🍣 ซูชิสายพานบริเวณ Hachijo Gate; เผื่อเวลาเดินข้ามสถานีจากโรงแรม",
      link: "https://www.google.com/maps/search/?api=1&query=Sushi+no+Musashi+Kyoto+Station"
    },
    {
      name: "GYUKATSU Kyoto Katsugyu (牛カツ京都勝牛)",
      category: "Gyukatsu (เนื้อวัวทอด)",
      walkTime: "3 นาที (หน้าสถานีเกียวโต)",
      desc: "🥩 ร้านกิวคัตสึบริเวณสถานี Kyoto",
      link: "https://www.google.com/maps/search/?api=1&query=GYUKATSU+Kyoto+Katsugyu+Kyoto+Station"
    },
    {
      name: "isoism (イソイズム)",
      category: "Kyoto Veggie / Fusion",
      walkTime: "4 นาที",
      desc: "🥗 ร้านอาหารผักเกียวโตหมัก (Tsukemono)",
      link: "https://www.google.com/maps/search/?api=1&query=isoism+Kyoto"
    },
    {
      name: "Kyotofu Fujino (京豆富 不二乃)",
      category: "Kyoto Tofu / Yudofu & Yuba",
      walkTime: "ชั้น 11 Isetan",
      desc: "🍲 ร้านเต้าหู้และฟองเต้าหู้ Yuba ชั้น 11 ห้าง JR Kyoto Isetan; เผื่อเวลาเดินในห้าง",
      link: "https://www.google.com/maps/search/?api=1&query=Kyotofu+Fujino+Kyoto+Station"
    },
    {
      name: "Porta Dining (ร้านอาหารใต้สถานี Kyoto)",
      category: "Kyoto Veggie / Fusion",
      walkTime: "บริเวณ Porta ใต้สถานี",
      desc: "ตัวเลือกอาหารใต้สถานี Kyoto; เผื่อเวลาเดินภายในสถานีและตรวจคิว/เวลาเปิดของร้านที่เลือก",
      link: "https://www.google.com/maps/search/?api=1&query=Porta+Kyoto+Station"
    },
    {
      name: "Katsukura Tonkatsu (かつくら)",
      category: "Tonkatsu (หมูทอด)",
      walkTime: "4 นาที (Isetan / Porta)",
      desc: "🥩 ร้านทงคัตสึใน Isetan/Porta; เผื่อเวลาเดินภายในห้างหรือสถานี",
      link: "https://www.google.com/maps/search/?api=1&query=Katsukura+Kyoto+Station"
    },
    {
      name: "Teppanyaki Musubi (鉄板焼 むすび)",
      category: "Wagyu Teppanyaki",
      walkTime: "4 นาที",
      desc: "🥩 ร้านเทปปันยากิในย่านสถานี Kyoto; ตรวจตำแหน่งร้านและเวลาเปิดก่อนเดินทาง",
      link: "https://www.google.com/maps/search/?api=1&query=Teppanyaki+Musubi+Kyoto"
    }
  ],
  nearbyRestaurantsNote: "ร้านที่เลือกไว้รอบโรงแรมและสถานี Kyoto; เวลาเดินเป็นค่าประมาณและบางร้านอยู่คนละฝั่งสถานี (เช่น Hachijo / Avanti) หรืออยู่ภายในห้าง ควรเผื่อเวลาเดินและตรวจวันเปิด/คิว",

  days: [
    {
      dayNum: 1,
      date: "1 ธ.ค. 2026 (อังคาร)",
      title: "ถึง KIX → กินใกล้สถานี → เช็คอิน / นอนพัก → Gion หัวค่ำตามแรง",
      theme: "Kyoto Arrival & Rest",
      color: "#ff7675",
      totalFareJPY: 3200,
      routeCoords: [[34.4389,135.2323],[34.9878,135.7612],[35.0036,135.7765],[35.0056,135.7712],[34.9878,135.7612]],
      checkpoints: [
        { id:"pa-d1-1", order:1, time:"08:45–10:30", name:"ถึง KIX Terminal 2 (MM092)", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"Peach MM092 ถึง 08:45 ตามตารางฤดูหนาว; เวลาผ่าน ตม. รับกระเป๋า และต่อรถเป็นกรอบเผื่อ ไม่รับประกันเวลา", transportInfo:"T2 → Shuttle ฟรี → Aeroplaza ชั้น 1 / สถานีสนามบิน → JR Haruka; เลือกขบวนที่ขึ้นได้หลังทำขั้นตอนสนามบิน", cost:"0 JPY (Shuttle ฟรี)", link:"https://www.google.com/maps/search/?api=1&query=Kansai+International+Airport+Terminal+2" },
        { id:"pa-d1-2", order:2, time:"ประมาณ 12:15–12:45", name:"ฝากกระเป๋าที่ APA Hotel Kyoto Ekihigashi", jpName:"APAホテル〈京都駅東〉", category:"transport", lat:34.9878, lng:135.7612, desc:"ถึงโรงแรมผ่าน JR Kyoto Station Central Gate เดินราว 3 นาที หรือ Subway Exit A5 ราว 1 นาที; เช็คอิน 15:00 เช็คเอาท์ 10:00 ยืนยันเงื่อนไขฝากกระเป๋ากับโรงแรม", transportInfo:"เดินจาก Kyoto Station Central Gate / Subway Exit A5", cost:"0 JPY (ตรวจนโยบายโรงแรม)", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/" },
        { id:"pa-d1-3", order:3, time:"12:45–15:00", name:"กินใกล้โรงแรม แล้วนั่งพักรอเช็คอิน", jpName:"京都駅 / ポルタ", category:"food", lat:34.9858, lng:135.7588, desc:"เลือก Porta / Kyoto Ramen Koji / ร้านรอบสถานีหนึ่งแห่งตามคิว; 14:00–15:00 นั่งพัก ไม่เพิ่มวัดหรือช้อป ถามเข้าห้องก่อนเวลาได้แต่ไม่ตั้งสมมติฐานว่าจะได้ห้อง", transportInfo:"เดินใกล้โรงแรมและสถานี ไม่ไป Nishiki วันนี้", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Porta+Kyoto+Station" },
        { id:"pa-d1-4", order:4, time:"15:00–17:30", name:"เช็คอิน อาบน้ำ และนอนพัก", jpName:"APAホテル〈京都駅東〉", category:"transport", lat:34.9878, lng:135.7612, desc:"ช่วงพักหลักของวัน เริ่มเช็คอิน 15:00 ตามโรงแรม ตั้งปลุกแล้วประเมินแรงอีกครั้ง; ตื่นช้าได้โดยลดหรืองดเที่ยวเย็น Kiyomizu / Asahido ย้ายไป Day 4 แล้ว", transportInfo:"พักในโรงแรม", cost:"ค่าห้องตามการจอง", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/" },
        { id:"pa-d1-5", order:5, time:"17:30–19:00 · ถ้ามีแรง", name:"เดินทางไป Gion / ริม Kamo แล้วเดินสั้น ๆ", jpName:"祇園 / 鴨川", category:"spot", lat:35.0036, lng:135.7765, desc:"เผื่อเดินทาง 17:30–18:15 แล้วเลือกเดิน Gion หรือริม Kamo ระยะสั้น; งดได้ทั้งหมดเมื่อยังเพลีย ไม่เดินขึ้น Kiyomizu คืนนี้ เคารพป้ายห้ามเข้า/ถ่ายภาพ แวะ Gion Tsujiri เฉพาะเมื่อเปิดและคิวสั้น", transportInfo:"รถสาธารณะตามเส้นทางจริง แล้วเดินสั้น ๆ", cost:"ตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Gion+Kyoto" },
        { id:"pa-d1-6", order:6, time:"19:00–20:45", name:"มื้อเย็นตามแรง แล้วกลับโรงแรม", jpName:"先斗町 / 河童寿司", category:"food", lat:35.0056, lng:135.7712, desc:"กินใกล้จุดที่อยู่; Pontocho / Kappa Sushi เป็นตัวเลือกถ้ายังไหวและร้านเปิด/คิวเหมาะสม งบอาหารเดิม 2,500–4,000 เยน ไม่จองมื้อที่ยกเลิกยาก; กลับโรงแรมราว 20:00–20:45 หรือกินใกล้โรงแรมแล้วพักต่อ", transportInfo:"เดินทางตามแรงและตำแหน่งร้านจริง", cost:"อาหารประมาณ 2,500–4,000 JPY", link:"https://www.google.com/maps/search/?api=1&query=Pontocho+Kappa+Sushi" }
      ]
    },
    {
      dayNum: 2,
      date: "2 ธ.ค. 2026 (พุธ)",
      title: "Uji: Byodoin + Taiho-an → Nara: Todaiji + กวาง → Kyoto",
      theme: "Uji Tea & Nara",
      color: "#00cec9",
      totalFareJPY: 2000,
      routeCoords: [[34.9858,135.7588],[34.8893,135.8077],[34.8890,135.8087],[34.68899,135.83982],[34.6851,135.8430],[34.9858,135.7588]],
      checkpoints: [
        { id:"pa-d2-1", order:1, time:"07:45–08:45", name:"JR Kyoto → JR Uji", jpName:"JR京都駅 → JR宇治駅", navigationQuery:"JR Uji Station, Uji, Kyoto, Japan", category:"transport", lat:34.9858, lng:135.7588, desc:"ออกจากโรงแรมขึ้น JR Nara Line ไป JR Uji; ระวังไม่สับสนกับ Keihan Uji และเผื่อเวลารอรถ/เดิน", transportInfo:"JR Nara Line; รอบและค่าโดยสารตรวจจากผู้ให้บริการ", cost:"รวมในงบรถ 2,000 JPY โดยประมาณ", link:"https://www.google.com/maps/search/?api=1&query=JR+Uji+Station" },
        { id:"pa-d2-2", order:2, time:"08:45–10:15", name:"Byodoin Temple", jpName:"平等院", category:"spot", lat:34.8893, lng:135.8077, desc:"สวนเปิด 08:45 พิพิธภัณฑ์ 09:00 ตั๋วสวนและพิพิธภัณฑ์ 700 เยน; ภายใน Phoenix Hall เพิ่ม 300 เยน จำกัด 35 คน/รอบตั้งแต่ 16 ต.ค. อาจรอนานขึ้น เลือกรอบที่จบก่อน Taiho-an พลาดรอบแล้วเปลี่ยนเวลาหรือคืนเงินไม่ได้ ถ้ารอบชนพิธีชาให้ชมสวน/พิพิธภัณฑ์เป็นหลัก", transportInfo:"เดินจาก JR Uji", cost:"700 JPY; Phoenix Hall เพิ่ม 300 JPY (ตัวเลือก)", link:"https://www.byodoin.or.jp/guide/" },
        { id:"pa-d2-3", order:3, time:"ประมาณ 10:30–11:15", name:"Taiho-an Tea House (จองรอบจริง)", jpName:"対鳳庵", lat:34.8890, lng:135.8087, navigationQuery:"Taiho-an, 1-5 Uji Togawa, Uji, Kyoto, Japan", category:"food", desc:"Usucha 1,500 เยน ราว 20–30 นาที; ลงมือชง 3,600 เยน ราว 40 นาที จองก่อนอย่างน้อย 3 วัน วันที่ 2 ธ.ค. ไม่อยู่ในวันปิดที่ประกาศ แต่ยังต้องจองรอบและตรวจชนิดชา ไม่รับประกันที่ว่างหรือ Walk-in; หมุดแผนที่เป็นตำแหน่งโดยประมาณจากที่อยู่ทางการ", transportInfo:"ใช้เวลาตามรอบที่จองจริง", cost:"Usucha 1,500 JPY / ลงมือชง 3,600 JPY", link:"https://www.city.uji.kyoto.jp/map/17359.html" },
        { id:"pa-d2-4", order:4, time:"11:15–13:00", name:"อาหารกลางวันและ Uji Omotesando", jpName:"宇治 / 宇治川", navigationQuery:"Uji Omotesando, Uji, Kyoto, Japan", category:"food", lat:34.8893, lng:135.8077, desc:"เลือกโซบะมัทฉะและเดินริมแม่น้ำ/ถนน Omotesando สั้น ๆ งบอาหาร 1,500–2,500 เยน; ตั้งเป้าออกจาก Uji ไม่เกิน 12:30–13:00", transportInfo:"เดินในย่าน Uji แล้วกลับ JR Uji", cost:"อาหารประมาณ 1,500–2,500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Uji+Omotesando" },
        { id:"pa-d2-5", order:5, time:"13:45–15:00", name:"Todaiji Daibutsuden (Great Buddha Hall)", jpName:"東大寺大仏殿", lat:34.68899, lng:135.83982, navigationQuery:"Todai-ji Daibutsuden, Nara, Japan", category:"spot", desc:"เข้าวิหารก่อนเดินเล่นกวาง ค่าเข้า 800 เยน รับเงินสด; ฤดูหนาววิหารเปิด 08:00–17:00 พิพิธภัณฑ์รับเข้าถึง 16:30 เป็นคนละเวลาบริการ", transportInfo:"JR ไป Nara แล้วต่อรถบัสหรือเดิน; ตรวจสาย/ค่าโดยสารจริง", cost:"800 JPY (เตรียมเงินสด)", link:"https://www.todaiji.or.jp/en/access/" },
        { id:"pa-d2-6", order:6, time:"15:00–16:15", name:"Nara Park (พื้นที่เดินชมกวาง)", jpName:"奈良公園", lat:34.6851, lng:135.8430, navigationQuery:"Nara Park, Nara, Japan", category:"nature", desc:"เดินเล่นในเขตสวนตามแสงและสภาพอากาศ ระวังอาหารและของในมือใกล้กวาง; หมุดแผนที่แสดงบริเวณสวนโดยประมาณ ไม่ใช่ทางเข้าจุดเดียว", transportInfo:"เดินกลับสถานีหรือใช้รถบัสเมื่อเหนื่อย", cost:"ตามจริง", link:"https://www.pref.nara.lg.jp/n113/57798.html" },
        { id:"pa-d2-7", order:7, time:"16:15–20:00", name:"กลับ Kyoto และมื้อเย็นรอบสถานี", jpName:"奈良 → 京都", category:"food", lat:34.9873, lng:135.7607, desc:"เผื่อเดินทางกลับ Kyoto รวมรอรถ; Shinpuku Saikan เป็นตัวเลือกเมื่อยืนยันว่าเปิด ณ 3 พ.ย. ยังไม่พบประกาศวันหยุดเดือน ธ.ค. 2026 (หยุดพุธบางสัปดาห์ รับเงินสด) สำรอง Kyoto Ramen Koji / Porta", transportInfo:"รถไฟกลับ Kyoto; ค่าโดยสารตรวจตามเส้นทางจริง", cost:"อาหารตามจริง", link:"https://shinpukusaikan.net/" }
      ]
    },
    {
      dayNum: 3,
      date: "3 ธ.ค. 2026 (พฤหัสบดี)",
      title: "Arashiyama → Randen เปลี่ยนที่ Katabiranotsuji → Kinkakuji",
      theme: "Arashiyama & Kinkakuji",
      color: "#fdcb6e",
      totalFareJPY: 1200,
      routeCoords: [[34.9858,135.7588],[35.0170,135.6713],[35.0155,135.6777],[35.0157,135.6775],[35.0394,135.7292],[34.9858,135.7588]],
      checkpoints: [
        { id:"pa-d3-1", order:1, time:"07:45–11:15", name:"Bamboo Grove → Tenryuji Garden → Togetsukyo Bridge", jpName:"嵐山竹林 / 天龍寺 / 渡月橋", category:"nature", lat:35.0170, lng:135.6713, desc:"JR Sagano Line ไป Saga-Arashiyama แล้วเดินชมป่าไผ่ สวน Tenryuji ค่าเข้า 500 เยน เปิด 08:30 (เปิดพิเศษ 07:30 จบ 30 พ.ย. ไม่ครอบคลุมวันนี้) และสะพาน Togetsukyo", transportInfo:"JR Sagano Line; ตรวจรอบและค่าโดยสารจริง", cost:"Tenryuji Garden 500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove" },
        { id:"pa-d3-2", order:2, time:"11:15–12:45", name:"เลือกร้านหลักหนึ่งร้าน: Yoshimura หรือ eX café", jpName:"嵐山よしむら / eXカフェ", category:"food", lat:35.0155, lng:135.6777, desc:"Yoshimura โซบะตั้งงบ 1,800–3,000 เยน ตรวจเมนูพิเศษช่วง 23 ต.ค.–7 ธ.ค. และราคาจริง หรือ eX café ดังโงะ/มัทฉะราว 1,500 เยนพร้อมมื้อกลางวันสั้นเพิ่ม; ร้านที่สองแวะเมื่อคิวสั้น รอเกิน 30 นาทีให้เปลี่ยนร้าน", transportInfo:"เดินใน Arashiyama", cost:"อาหารตามร้านที่เลือก", link:"https://www.google.com/maps/search/?api=1&query=Arashiyama+Yoshimura" },
        { id:"pa-d3-3", order:3, time:"13:00–14:15", name:"Randen ไป Kitanohakubaicho", jpName:"嵐電", category:"transport", lat:35.0157, lng:135.6775, desc:"ขึ้น Randen จาก Arashiyama เปลี่ยนขบวนที่ Katabiranotsuji ไป Kitanohakubaicho แล้วต่อรถสาธารณะสู่วัดทอง ตรวจสายและเวลาเดินรถจริง", transportInfo:"Randen + ต่อรถสาธารณะ; fare ตามจริง", cost:"รวมในงบรถ 1,200 JPY โดยประมาณ", link:"https://www.google.com/maps/search/?api=1&query=Katabiranotsuji+Station" },
        { id:"pa-d3-4", order:4, time:"14:15–15:30", name:"Kinkakuji", jpName:"金閣寺", category:"spot", lat:35.0394, lng:135.7292, desc:"ชมวัดทอง งบเข้า 500 เยน แล้วกลับ Kyoto Station เผื่อรอรถ/รถติด", transportInfo:"ต่อรถสาธารณะจาก Randen; ตรวจสาย/ค่าโดยสารจริง", cost:"500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Kinkakuji+Temple" },
        { id:"pa-d3-5", order:5, time:"17:00–19:00", name:"Kyoto Ramen Koji หรือ Kyotofu Fujino", jpName:"京都拉麺小路 / 京豆富 不二乃", category:"food", lat:34.9858, lng:135.7588, desc:"เลือกร้านเดียวในสถานี Kyoto แล้วกลับพัก — Night 3; Honke Daiichi Asahi สาขาหลักหยุดพฤหัสบดี จึงไม่ใช้เป็นร้านสำรองวันนี้", transportInfo:"กลับ Kyoto Station ตามเส้นทางจริง", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Kyoto+Ramen+Street" }
      ]
    },
    {
      dayNum: 4,
      date: "4 ธ.ค. 2026 (ศุกร์)",
      title: "Kiyomizu → Asahido / ถนนเก่า → Shimogamo Shrine → Nanzenji → พัก → Eikando รอบค่ำ",
      theme: "Kiyomizu, Shimogamo & Eikando",
      color: "#6c5ce7",
      totalFareJPY: 1700,
      routeCoords: [[34.9878,135.7612],[34.9949,135.785],[34.9958,135.7828],[35.0389,135.773],[35.0301,135.7723],[35.0112,135.7939],[35.0118,135.7895],[35.0144,135.7956],[35.0076,135.7709],[34.9878,135.7612]],
      checkpoints: [
        {"id":"pa-d4-1","order":1,"time":"07:15–09:20 · รวมเดินทาง","name":"Kiyomizu-dera เช้า (ย้ายจาก Day 1)","jpName":"清水寺","category":"spot","lat":34.9949,"lng":135.785,"desc":"ออกโรงแรม 07:15 เผื่อรถและเดินขึ้นเนิน เข้าวัดประมาณ 08:00–09:20 วัดเปิด 06:00 ค่าเข้า 500 เยน; ไฟประดับฤดูใบไม้แดงปี 2026 จบ 30 พ.ย. จึงชมเช้าตามแผน รักษาเวลานั่งพักช่วงบ่าย","transportInfo":"รถสาธารณะและเดินขึ้นเนิน; แท็กซี่คิดเพิ่มหากเลือกใช้","cost":"500 JPY","link":"https://www.kiyomizudera.or.jp/en/location/"},
        {"id":"pa-d4-9","order":2,"time":"09:30–10:15","name":"Asahido + Sannenzaka / Ninenzaka แบบสั้น","jpName":"朝日堂 / 三年坂 / 二寧坂","category":"shopping","lat":34.9958,"lng":135.7828,"desc":"ย้ายจาก Day 1; Asahido สาขาหลักเปิด 09:30–18:00 แวะ 15–25 นาทีแล้วเดินถนนเก่าสั้น ๆ ไม่เพิ่มคาเฟ่คิวยาวหรือกิจกรรมปั้นเซรามิก","transportInfo":"เดินลงจาก Kiyomizu แล้วไปจุดขึ้นรถ","cost":"ซื้อของตามจริง","link":"https://www.asahido.co.jp/shops/"},
        {"id":"pa-d4-2","order":3,"time":"10:15–11:30 เดินทาง / 11:30–12:30 ศาลเจ้า","name":"Shimogamo Shrine / Tadasu no Mori ช่วงสั้น","jpName":"下鴨神社 / 糺の森","category":"spot","lat":35.0389,"lng":135.773,"desc":"เดินลงไป Keihan Kiyomizu-gojo → Demachiyanagi แล้วเดินเข้าสู่ศาลเจ้า เผื่อเดินทางรวม 75 นาที; ชมศาลเจ้าและป่าช่วงสั้น 11:30–12:30 เข้าสักการะฟรี 06:30–17:00 ชมพิเศษจ่ายแยก ใช้แทน Ginkakuji / Omen / Philosopher’s Path โดยเก็บวัดทอง Day 3","transportInfo":"เดินลงเนิน → Keihan Kiyomizu-gojo → Demachiyanagi → เดิน; เลือกขบวนที่จอด Kiyomizu-gojo","cost":"เข้าสักการะ 0 JPY; ชมพิเศษจ่ายแยก","link":"https://www.shimogamo-jinja.or.jp/prayers/question"},
        {"id":"pa-d4-3","order":4,"time":"12:30–13:30","name":"มื้อกลางวันและนั่งพักแถว Shimogamo / Demachiyanagi","jpName":"下鴨 / 出町柳","category":"food","lat":35.0301,"lng":135.7723,"desc":"รวมเวลาเดินออกจากศาลเจ้า เลือกร้านคิวสั้นและนั่งพัก งบประมาณ 1,000–2,000 เยน ไม่ผูกกับร้านที่ต้องรอนาน","transportInfo":"เดินออกจาก Shimogamo มาทาง Demachiyanagi ตามร้านจริง","cost":"ประมาณ 1,000–2,000 JPY","link":"https://www.google.com/maps/search/?api=1&query=restaurants+Demachiyanagi+Kyoto"},
        {"id":"pa-d4-4","order":5,"time":"13:30–14:30","name":"เดินทาง Shimogamo / Demachiyanagi → Nanzenji","jpName":"出町柳 → 三条 → 蹴上 → 南禅寺","category":"transport","lat":35.0301,"lng":135.7723,"desc":"Keihan Demachiyanagi → Sanjo แล้วเดินเชื่อม Subway Sanjo Keihan → Keage → เดินไป Nanzenji เผื่อรวม 60 นาที ไม่เดินทั้งระยะจากศาลเจ้า","transportInfo":"Keihan + Subway Tozai + เดิน; ตรวจขบวนจริง","cost":"รวมในงบรถ Day 4 ประมาณ 1,700 JPY","link":"https://www2.city.kyoto.lg.jp/kotsu/tikadia/hyperdia/line01.htm"},
        {"id":"pa-d4-5","order":6,"time":"14:30–15:30","name":"Nanzenji และ Suirokaku","jpName":"南禅寺 / 水路閣","category":"spot","lat":35.0112,"lng":135.7939,"desc":"แผนหลักชมภายนอก; อาคาร/สวนที่เก็บค่าเข้าเป็นตัวเลือก","transportInfo":"เดินจาก Keage หลังนั่งรถจาก Demachiyanagi","cost":"ภายนอก 0 JPY; ส่วนอื่นตามจริง","link":"https://www.google.com/maps/search/?api=1&query=Nanzenji+Temple"},
        {"id":"pa-d4-6","order":7,"time":"15:30–16:30","name":"นั่งพักขาแถว Nanzenji","jpName":"ブルーボトル / 無鄰菴","category":"nature","lat":35.0118,"lng":135.7895,"desc":"รักษาเวลานั่งพักไว้ เลือก Blue Bottle / คาเฟ่ใกล้เคียงตามคิวเป็นหลัก; หากเลือก Murin-an แทนคาเฟ่ ให้จองรอบ 16:00 ตามที่ว่างและออกประมาณ 16:30 ค่าเข้า 1,500 เยน ตรวจแพ็กเกจเครื่องดื่มแยก เปิดจองก่อน 30 วัน ยกเลิกเสียค่าธรรมเนียม 100% หากต้องการชมสวนนานให้ลดจุดก่อนหน้าและจองรอบเร็วขึ้น","transportInfo":"เดินสั้น ๆ ในย่าน Nanzenji","cost":"คาเฟ่ตามจริง / Murin-an ค่าเข้า 1,500 JPY (ตัวเลือก)","link":"https://murin-an.jp/info/","choiceNote":"คาเฟ่เป็นหลัก; Murin-an จองรอบ 16:00 ตามที่ว่าง ออกประมาณ 16:30 เพื่อไป Eikando","optionalActivities":["Murin-an ค่าเข้า 1,500 เยน · ยกเลิกเสียค่าธรรมเนียม 100%"]},
        {"id":"pa-d4-7","order":8,"time":"16:30–19:00","name":"Eikando รอบค่ำ","jpName":"永観堂 禅林寺","category":"spot","lat":35.0144,"lng":135.7956,"desc":"เผื่อเดินจากจุดพัก 20–30 นาทีและคิว; ประกาศปี 2026 ระบุ 20 พ.ย.–6 ธ.ค. รับเข้าชม 17:30–20:30 ปิด 21:00 ค่าเข้า 1,000 เยน รอบกลางวัน/กลางคืนแยกตั๋ว ตรวจประกาศก่อนวันจริง","transportInfo":"เดิน 20–30 นาทีจากจุดพักโดยประมาณ","cost":"1,000 JPY","link":"https://www.eikando.or.jp/osirase.html"},
        {"id":"pa-d4-8","order":9,"time":"ประมาณ 19:00–21:45","name":"เดินทางและมื้อเย็น Menami (ถ้าจองได้)","jpName":"めなみ","category":"food","lat":35.0076,"lng":135.7709,"desc":"เผื่อเดินไป Keage ต่อ Subway Tozai → Sanjo Keihan; เลือกรอบ Menami ที่เผื่อออกจาก Eikando ร้านเปิด 15:00–22:00 สั่งสุดท้าย 21:30 หยุดพุธ รับจองทางโทรศัพท์เท่านั้น หากจองไม่ได้ให้เลือกร้านสำรอง; ขากลับขึ้น Subway จาก Kyoto Shiyakusho-mae เปลี่ยนสายที่ Karasuma Oike แล้วไป Kyoto","transportInfo":"เดินไป Keage → Subway Tozai → Sanjo Keihan; ขากลับ Kyoto Shiyakusho-mae → เปลี่ยนสาย Karasuma Oike → Kyoto","cost":"มื้อเย็นเดิมประมาณ 2,500–4,000 JPY","link":"https://www.menami.jp/"}
      ]
    },
    {
      dayNum: 5,
      date: "5 ธ.ค. 2026 (เสาร์)",
      title: "Osaka Castle → Osaka Aquarium Kaiyukan → Dotonbori → Kyoto",
      theme: "Osaka Day Trip",
      color: "#00cec9",
      totalFareJPY: 2500,
      routeCoords: [[34.9858,135.7588],[34.6873,135.5262],[34.6545,135.429],[34.6687,135.5013],[34.9858,135.7588]],
      checkpoints: [
        {"id":"pa-d5-1","order":1,"time":"08:00–09:30","name":"เดินทาง Kyoto → Osaka Castle","jpName":"JR京都 → 大阪城","category":"transport","lat":34.9858,"lng":135.7588,"desc":"JR Special Rapid Kyoto → Osaka แล้ว JR Loop Line → Osakajokoen เผื่อเดินเข้าสวนและรอรถ","transportInfo":"JR Special Rapid + JR Loop Line; ตรวจขบวนจริง","cost":"รวมในงบรถ 2,500 JPY โดยประมาณ","link":"https://www.google.com/maps/search/?api=1&query=Kyoto+Station"},
        {"id":"pa-d5-2","order":2,"time":"09:30–11:00","name":"Osaka Castle Park / วิวปราสาท","jpName":"大阪城公園","category":"spot","lat":34.6873,"lng":135.5262,"desc":"เน้นสวนทั่วไป คูน้ำและปราสาทภายนอกฟรี แล้วออกทาง Morinomiya; หากเข้า Tenshukaku 1,200 เยน ให้ใช้แทนเดินสวนยาว เปิด 09:00–18:00 รับถึง 17:30 เผื่อคิวให้ทัน Kaiyukan ไม่เพิ่ม Nishinomaru ในแผนหลัก","transportInfo":"เดินผ่านปราสาทออกทาง Morinomiya ไม่วนครบสวน","cost":"สวนทั่วไปฟรี; Tenshukaku 1,200 JPY เป็นตัวเลือก","link":"https://www.osakacastle.net/guide/"},
        {"id":"pa-d5-6","order":3,"time":"11:00–12:00","name":"เดินทาง Osaka Castle → Kaiyukan","jpName":"森ノ宮 → 大阪港","category":"transport","lat":34.6818,"lng":135.5247,"desc":"เดินไป Morinomiya แล้ว Chuo Line ตรงไป Osakako; จากทางออก 1 เดินประมาณ 5 นาทีถึง Kaiyukan เผื่อเดินออกจากสวนและรอรถ","transportInfo":"Osaka Metro Chuo Line: Morinomiya → Osakako","cost":"รวมในงบรถรายวัน","link":"https://www.kaiyukan.com/info/access/"},
        {"id":"pa-d5-7","order":4,"time":"12:00–13:00","name":"มื้อกลางวันและพักแถว Tempozan","jpName":"天保山","category":"food","lat":34.6564,"lng":135.4306,"desc":"เลือกร้านคิวสั้นแถว Tempozan Marketplace และนั่งพักก่อนเข้ารอบ Kaiyukan ไม่เพิ่มชิงช้าสวรรค์หรือเรือเที่ยว","transportInfo":"เดินใกล้ Kaiyukan","cost":"อาหารประมาณ 1,000–2,000 JPY","link":"https://www.kaiyukan.com/"},
        {"id":"pa-d5-3","order":5,"time":"13:00–15:30","name":"Osaka Aquarium Kaiyukan","jpName":"海遊館","category":"spot","lat":34.6545,"lng":135.429,"desc":"เผื่อชม 2.5 ชั่วโมง เลือก e-ticket วันที่ 5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง; ราคาเปลี่ยนตามวัน ตั้งงบเผื่อ 3,500 เยน ไม่ใช่ราคายืนยันของวันที่ 5 ธ.ค. ตรวจราคา เวลาเปิดและที่ว่างจริงก่อนซื้อ ตั๋วหน้างานอาจต้องรอรอบ","transportInfo":"เดินจาก Tempozan / Osakako ทางออก 1 ประมาณ 5 นาที","cost":"ตั้งงบเผื่อ 3,500 JPY; ปรับตามราคาจริง","link":"https://www.kaiyukan.com/info/ticket/kaiyukan/"},
        {"id":"pa-d5-4","order":6,"time":"15:30–16:30 เดินทาง / 16:30–19:15 Dotonbori","name":"Dotonbori / Glico Sign และมื้อเย็น","jpName":"道頓堀","category":"shopping","lat":34.6687,"lng":135.5013,"desc":"Osakako → Chuo Line → Hommachi เปลี่ยน Midosuji Line ไป Namba แล้วเดินเข้า Dotonbori; เดินริมคลอง ถ่ายป้ายไฟ กิน Takoyaki / Okonomiyaki ตามคิว เช่น Wanaka หรือ Mizuno รอเกิน 30 นาทีเปลี่ยนร้าน ไม่เพิ่ม Shinsaibashi กลับเข้ามา","transportInfo":"Osakako → Hommachi → Namba แล้วเดิน","cost":"อาหารตามตัวเลือก รวมในงบอาหาร","link":"https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Sign"},
        {"id":"pa-d5-5","order":7,"time":"19:15–20:45","name":"กลับ Kyoto","jpName":"大阪 → 京都","category":"transport","lat":34.9858,"lng":135.7588,"desc":"เดินไป Namba → Metro Umeda → เชื่อม JR Osaka → JR Special Rapid Kyoto; เผื่อ 60–90 นาที กลับเร็วขึ้นได้เมื่อเหนื่อย — Night 5","transportInfo":"Metro + JR; ตรวจรอบจริง","cost":"รวมในงบรถ 2,500 JPY โดยประมาณ","link":"https://www.google.com/maps/search/?api=1&query=Kyoto+Station"}
      ]
    },
    {
      dayNum: 6,
      date: "6 ธ.ค. 2026 (อาทิตย์)",
      title: "Fushimi ช่วงล่าง → Nishiki แบบสั้น → รับกระเป๋า → Haruka → KIX T2",
      theme: "Fushimi Inari, Nishiki & Return Flight",
      color: "#e17055",
      totalFareJPY: 3300,
      routeCoords: [[34.9878,135.7612],[34.9671,135.7727],[35.0036,135.7765],[35.005,135.7649],[34.9878,135.7612],[34.9858,135.7588],[34.4389,135.2323]],
      checkpoints: [
        { id:"pa-d6-1", order:1, time:"07:30–08:00", name:"เช็คเอาท์และฝากกระเป๋า", jpName:"チェックアウト", category:"transport", lat:34.9878, lng:135.7612, desc:"เช็คเอาท์และยืนยันเวลารับกระเป๋ากับโรงแรม เช็คเอาท์กำหนด 10:00; หากฝนหนักหรือรถมีปัญหาให้ตัด Fushimi และ Nishiki แล้วอยู่รอบสถานี", transportInfo:"เดินไป JR Kyoto Station", cost:"0 JPY (ยืนยันนโยบายฝากกระเป๋า)", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/" },
        { id:"pa-d6-2", order:2, time:"08:00–09:15 · รวมเดินทาง", name:"Fushimi Inari ช่วงล่างแบบสั้น", jpName:"伏見稲荷大社", category:"spot", lat:34.9671, lng:135.7727, desc:"JR Nara Line ที่จอด Inari; ชมศาลเจ้า/โทริอิช่วงล่าง 08:30–09:15 ไม่ขึ้นยอดเขา ถ้าอยากเดินนานให้งด Nishiki; ออกจาก Fushimi หลัง 09:30 ให้กลับ Kyoto Station โดยไม่แวะตลาด", transportInfo:"JR Kyoto → Inari; จากนั้นเดินไป Keihan Fushimi-inari เมื่อต่อ Nishiki", cost:"รวมในงบรถ 3,300 JPY โดยประมาณ", link:"https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha" },
        { id:"pa-d6-3", order:3, time:"09:15–12:00 · รวมเดินทาง", name:"Nishiki Market แบบสั้น แล้วกลับโรงแรม", jpName:"錦市場", category:"shopping", lat:35.005, lng:135.7649, desc:"Keihan Fushimi-inari → Gion-shijo แล้วเดิน 15–20 นาที เผื่อถึงตลาด 10:15; ชิม/กินสั้น 10:15–11:15 ร้านเปิดต่างกันตามร้าน รับประทานในพื้นที่ร้าน ไม่รอคิวยาว; ออกจากตลาดไม่เกิน 11:15 กลับโรงแรมราว 12:00 งด Higashi Honganji; Ippodo เป็นตัวเลือกแทนตลาดเท่านั้น ดูรายละเอียดในแผนต้นฉบับ", transportInfo:"Keihan → Gion-shijo แล้วเดิน; กลับ Subway Shijo → Kyoto และเดินถึงโรงแรม", cost:"อาหารตามจริง; รถรวมในงบประมาณ", link:"https://www.kyoto-nishiki.or.jp/en/contact/" },
        { id:"pa-d6-4", order:4, time:"12:00–13:00", name:"รับกระเป๋าและเตรียมขึ้น Haruka", jpName:"京都駅", category:"transport", lat:34.9858, lng:135.7588, desc:"รับกระเป๋าและเข้าสถานี ไม่เริ่มกิจกรรมใหม่; เลือก/จอง Haruka จริงช่วงประมาณ 13:30–14:00 ให้ถึงสถานี KIX ราว 15:00–15:30 ตารางนี้ไม่ยืนยันว่ามีขบวน 14:00 พอดี", transportInfo:"JR Haruka; จองขากลับและตรวจผลิตภัณฑ์ตั๋ว", cost:"Haruka 2,700 JPY รวมในงบ (ซื้อใหม่ตั้งแต่ 1 พ.ย. 2026)", link:"https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/" },
        { id:"pa-d6-5", order:5, time:"15:00–16:00", name:"Aeroplaza ชั้น 1 → Shuttle ฟรี → KIX T2 International", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"เป้าหมายถึง T2 ไม่เกิน 16:00 เผื่อเดิน/รอ Shuttle รวมประมาณ 30 นาที; ยืนยันสินค้าคืนภาษีก่อนโหลดกระเป๋าที่บรรจุสินค้า แล้วเช็คอินตามขั้นตอนที่เปิดจริง", transportInfo:"Aeroplaza ชั้น 1 → Free Shuttle ไป T2", cost:"0 JPY (Shuttle ฟรี)", link:"https://www.kansai-airport.or.jp/en/faq/1101" },
        { id:"pa-d6-6", order:6, time:"16:00–19:15", name:"KIX T2 International และ Peach MM091", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"Tax-free Refund Method: จ่ายรวมภาษีก่อน ยืนยันการนำออกภายใน 90 วันก่อนโหลดกระเป๋าที่บรรจุสินค้า ใช้ Kiosk หรือ VJW ในพื้นที่ Wi-Fi ที่กำหนดก่อนจุดตรวจความปลอดภัย หากถูกเลือกตรวจให้นำสินค้าไปศุลกากร ร้านคืนเงินตามวิธีที่ลงทะเบียน; Peach เช็คอิน 150–50 นาทีก่อนออก (16:45–18:25 สำหรับ 19:15) ให้เสร็จก่อนปิด ตรวจร้าน International แยกจาก Domestic", transportInfo:"Peach MM091 ออก 19:15; ตรวจข้อมูลวันเดินทาง", cost:"0 JPY", link:"https://www.flypeach.com/sg/lm/ai/airports/airportguide_international/kix" }
      ]
    }
  ]
};

// Authoritative daily source notes, copied locally from Plan_A_Kyoto_1-6Dec_2026.md.
const PLAN_A_DAILY_SOURCE_NOTES = [
  [
    "### Day 1 | อังคาร 1 ธันวาคม — ถึง Kyoto กินใกล้โรงแรม เช็คอินและนอนพัก",
    "",
    "- **08:45–10:30:** ถึง KIX T2 ผ่าน ตม. รับกระเป๋าและศุลกากร ต่อ Shuttle ไป Aeroplaza/สถานีสนามบิน ช่วงนี้เป็นเวลาเผื่อ ไม่รับประกันเวลาผ่าน ตม.",
    "- **ประมาณ 10:30–12:15:** เลือก Haruka ขบวนที่ขึ้นได้หลังทำขั้นตอนสนามบินเสร็จ ตรวจเวลาเดินรถจริง ไม่เร่งวิ่งให้ทันขบวนที่กำหนดในแผน",
    "- **12:15–12:45:** ฝากกระเป๋าที่ APA ผ่าน JR **Central Gate** / Subway **A5** โรงแรมเช็คอิน 15:00 และเช็คเอาท์ 10:00 ตาม [เว็บไซต์โรงแรม](https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/) ยืนยันเงื่อนไขฝากกระเป๋ากับโรงแรม",
    "- **12:45–14:00:** มื้อกลางวันใกล้โรงแรม เลือก **Porta / Kyoto Ramen Koji / ร้านรอบสถานีหนึ่งแห่ง** ตามคิว ไม่ต้องข้ามเมืองไป Nishiki ถ้าคิวยาวให้เปลี่ยนร้านหรือซื้ออาหารกลับ",
    "- **14:00–15:00:** นั่งพักใกล้สถานีหรือโรงแรม รอเวลาเช็คอิน ไม่เพิ่มวัดหรือแหล่งช้อป ถามเรื่องเข้าห้องก่อนเวลาได้ แต่ไม่ตั้งสมมติฐานว่าจะได้ห้อง",
    "- **15:00–17:30:** เช็คอิน อาบน้ำ และนอนพักเป็นช่วงหลักของวันนี้ ตั้งปลุกแล้วประเมินแรงอีกครั้ง ตื่นช้ากว่านี้ได้โดยลดช่วงเที่ยวเย็น",
    "- **17:30–18:15:** ถ้ามีแรงค่อยเดินทางไป [Gion](https://www.google.com/maps/search/?api=1&query=Gion+Kyoto) เผื่อรถและเดิน ถ้ายังเพลียให้อยู่รอบ Kyoto Station ได้เลย",
    "- **18:15–19:00:** เดิน Gion / ริมแม่น้ำ Kamo ระยะสั้น เลือกแค่หนึ่งย่าน ไม่เดินขึ้น Kiyomizu หรือถนนเนินคืนนี้ เดินเฉพาะพื้นที่ที่อนุญาต เคารพป้ายห้ามเข้า/ห้ามถ่ายภาพ แวะ Gion Tsujiri เฉพาะเมื่อยังเปิดและคิวสั้น",
    "- **19:00–20:00:** มื้อเย็นใกล้จุดที่อยู่ ถ้ายังไหวค่อยข้ามไป Pontocho และเลือก [Kappa Sushi](https://www.google.com/maps/search/?api=1&query=Pontocho+Kappa+Sushi) ตามเวลาเปิด/คิว งบอาหารเดิม 2,500–4,000 เยน ไม่จองมื้อที่ยกเลิกยากในคืนแรก",
    "- **ประมาณ 20:00–20:45:** กลับโรงแรมและพัก — Night 1; หากไม่ออกไป Gion ให้กินใกล้โรงแรมแล้วนอนต่อได้",
    "",
    "**เมื่อช้า/เหนื่อย:** รักษาเวลาพักในห้องเป็นหลัก เลื่อนหรืองด Gion / Pontocho ได้ทั้งหมด หากเที่ยวบินหรือ ตม. ช้าจนถึงโรงแรมหลัง 15:00 ให้เช็คอินก่อนแล้วค่อยกิน ไม่มีสถานที่ที่ต้องรีบเก็บในวันนี้ ถ้าพลาด Gion ให้ใช้ย่าน Sanjo / ริม Kamo หลังมื้อเย็น Day 4 แทน โดยไม่บังคับเดินครบสองฝั่ง",
    "",
    "**งบรถสาธารณะ:** 3,200 เยน รวม Haruka 2,700 เยนและเงินเผื่อเที่ยวเย็น ไม่รวมแท็กซี่"
  ].join("\n"),
  [
    "### Day 2 | พุธ 2 ธันวาคม — Uji และ Nara โดยไม่แทรก Fushimi",
    "",
    "- **07:45–08:45:** ออกจากโรงแรม ขึ้น JR Nara Line ไป **JR Uji** เผื่อรอรถและเดินจากสถานี ไม่สับสนกับสถานี Keihan Uji",
    "- **08:45–10:15:** [Byodoin](https://www.google.com/maps/search/?api=1&query=Byodoin+Temple+Uji) สวนเปิด **08:45** พิพิธภัณฑ์ 09:00 ตั๋วสวนและพิพิธภัณฑ์ **700 เยน** [เวลาและราคา](https://www.byodoin.or.jp/guide/)",
    "  - ถ้าจะเข้า **ภายใน Phoenix Hall** จ่ายเพิ่ม **300 เยน** รับตั๋วรอบเวลาในสวนตั้งแต่ 09:10 เริ่มชม 09:30 จองหน้างานตามที่ว่าง หากรอบชนพิธีชาให้เลือกสวน/พิพิธภัณฑ์เป็นหลัก [Phoenix Hall](https://www.byodoin.or.jp/en/guide/internal-view/)",
    "  - ตั้งแต่ **16 ต.ค. 2026 จำกัด 35 คน/รอบ** จากเดิม 50 คน อาจรอนานขึ้น; เลือกรอบที่จบก่อนพิธีชา พลาดรอบแล้วเปลี่ยนเวลาหรือคืนเงินไม่ได้ [ประกาศจำนวนคน](https://www.byodoin.or.jp/news/cat23/20261016/)",
    "- **ประมาณ 10:30–11:15:** [Taiho-an](https://www.google.com/maps/search/?api=1&query=Taiho-an+Tea+House+Uji) ใช้เวลาตามรอบที่จองจริง",
    "  - แผนหลัก **Usucha 1,500 เยน/คน** โดยทั่วไปประมาณ 20–30 นาที ตรวจวันว่าจัดมัทฉะหรือชาแบบอื่น และจองผ่านเว็บไซต์",
    "  - ถ้าเลือก **ลงมือชงมัทฉะ 3,600 เยน/คน** ใช้เวลาประมาณ 40 นาทีและจองล่วงหน้าอย่างน้อย 3 วัน เพิ่มงบจากแผนหลัก **2,100 เยน**",
    "  - วันที่ **2 ธ.ค. ไม่อยู่ในวันปิดที่ประกาศ** แต่ยังต้องจองรอบและตรวจชนิดชาที่จัด ไม่รับประกันที่ว่างหรือ Walk-in [Uji Tourist Association](https://www.kyoto-uji-kankou.or.jp/taihoan-en.html) / [วันปิด](https://www.kyoto-uji-kankou.or.jp/pdf/taihoan-close.pdf)",
    "- **11:15–12:15:** มื้อกลางวันโซบะมัทฉะ เดิน Uji Omotesando/ริมแม่น้ำสั้น ๆ งบอาหาร 1,500–2,500 เยน เลี่ยงรอร้านคิวยาว",
    "- **12:15–13:45:** เดินกลับ JR Uji และต่อรถไป Nara **ตั้งเป้าออกจาก Uji ไม่เกิน 12:30–13:00** แล้วเผื่อรถบัส/เดินเข้าวัด",
    "- **13:45–15:00:** [Todaiji Daibutsuden](https://www.google.com/maps/search/?api=1&query=Todaiji+Temple) เข้าวิหารก่อนเดินเล่นกวาง ค่าเข้า **800 เยน รับเงินสด** ฤดูหนาววิหารเปิด **08:00–17:00** ส่วนพิพิธภัณฑ์รับเข้าถึง 16:30 เป็นคนละเวลาบริการ [Todaiji](https://www.todaiji.or.jp/information/haikan/)",
    "- **15:00–16:15:** [Nara Park](https://www.google.com/maps/search/?api=1&query=Nara+Park) และกวาง ตามแสงและสภาพอากาศ",
    "- **16:15–17:15:** เดินกลับทาง Sanjo-dori หรือใช้รถบัสเมื่อเหนื่อย",
    "- **17:15–18:30:** รถไฟกลับ Kyoto รวมเวลารอรถและเดินถึงโรงแรม",
    "- **18:30–20:00:** มื้อเย็นรอบสถานี Kyoto — Night 2",
    "",
    "**ร้านเย็น:** Shinpuku Saikan เป็นตัวเลือกเมื่อยืนยันว่าเปิดเท่านั้น เพราะร้านหยุดวันพุธบางสัปดาห์และเปิด 09:00–20:00 รับเฉพาะเงินสด วันที่ 2 ธ.ค. ยังต้องตรวจประกาศเดือนนั้น สำรอง Kyoto Ramen Koji / Porta ไว้ [เว็บไซต์ร้าน](https://shinpukusaikan.net/)",
    "",
    "**เมื่อช้า:** คงรอบพิธีชาที่จองไว้ ตัด Phoenix Hall ภายในและการช้อปก่อน หากออก Uji หลัง 13:00 ให้ไป Todaiji ก่อนจุดอื่น รถบัสใน Nara อาจล่าช้าจากจราจรตาม [Nara Kotsu](https://www.narakotsu.co.jp/route/) ตรวจค่าโดยสารและสายจริง ไม่ยึดราคา 220 เยนในไฟล์เดิม",
    "",
    "**งบรถสาธารณะ:** 2,000 เยน รวมเงินเผื่อรถบัส Nara"
  ].join("\n"),
  [
    "### Day 3 | พฤหัสบดี 3 ธันวาคม — Arashiyama, Randen และ Kinkakuji",
    "",
    "- **07:45–08:30:** JR Sagano Line จาก Kyoto → Saga-Arashiyama แล้วเดินเข้าย่านป่าไผ่",
    "- **08:30–11:15:** [Bamboo Grove](https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove) → [Tenryuji Garden](https://www.google.com/maps/search/?api=1&query=Tenryuji+Temple) สวนเปิด 08:30 ค่าเข้า 500 เยน (เปิดพิเศษ 07:30 จบ 30 พ.ย. ไม่ครอบคลุมวันนี้) [Tenryuji](https://www.tenryuji.com/visit/) → [Togetsukyo Bridge](https://www.google.com/maps/search/?api=1&query=Togetsukyo+Bridge)",
    "- **11:15–12:45:** เลือกร้านหลัก **หนึ่งร้าน**",
    "  - [Arashiyama Yoshimura](https://www.google.com/maps/search/?api=1&query=Arashiyama+Yoshimura): โซบะ ตั้งงบ 1,800–3,000 เยนและตรวจเมนูฤดูกาลจริง ร้านมีเมนูพิเศษ **23 ต.ค.–7 ธ.ค.** [เว็บไซต์ร้าน](https://www.yoshimura-gr.com/arashiyama/shop/)",
    "  - [eX café Arashiyama](https://www.google.com/maps/search/?api=1&query=eX+cafe+Arashiyama): ดังโงะ/มัทฉะ งบประมาณ 1,500 เยน ถ้าเลือกร้านนี้เป็นหลักให้จัดมื้อกลางวันสั้นเพิ่มเติม",
    "  - อีกร้านแวะได้เฉพาะเมื่อคิวสั้น ถ้ารอเกิน 30 นาทีให้เปลี่ยนร้าน ไม่บังคับกินสองร้านให้ทันใน 90 นาที",
    "- **13:00–14:15:** Randen จาก Arashiyama **เปลี่ยนขบวนที่ Katabiranotsuji** ไป Kitanohakubaicho แล้วต่อรถสาธารณะสู่วัดทอง ตรวจสายและเวลาเดินรถจริง",
    "- **14:15–15:30:** [Kinkakuji](https://www.google.com/maps/search/?api=1&query=Kinkakuji+Temple) งบเข้า 500 เยน",
    "- **15:30–17:00:** กลับ Kyoto Station เผื่อรถติด/รอรถ",
    "- **17:00–19:00:** Kyoto Ramen Koji หรือ Kyotofu Fujino ในสถานี เลือกหนึ่งแห่งแล้วกลับพัก — Night 3; **Honke Daiichi Asahi สาขาหลักหยุดพฤหัสบดี** จึงไม่ใช้เป็นร้านสำรองวันนี้ [เว็บไซต์ร้าน](https://www.honke-daiichiasahi.com/shop.html)",
    "",
    "**เก็บวัดทองเป็นจุดหลัก:** คง Arashiyama → Randen → Kinkakuji ตามตารางนี้ หากคิวมื้อกลางวันยาวให้ลดร้านเสริม ไม่เพิ่ม Shimogamo วันนี้ เพราะย้ายไป Day 4 แล้ว",
    "",
    "**งบรถสาธารณะ:** 1,200 เยน หากเปลี่ยนเส้นทางให้ปรับตามจริง"
  ].join("\n"),
  [
    "### Day 4 | ศุกร์ 4 ธันวาคม — Kiyomizu → Shimogamo Shrine → Nanzenji → Eikando รอบค่ำ",
    "",
    "- **07:15–08:00:** ออกจากโรงแรม เดินทางไป Kiyomizu เผื่อรอรถและเดินขึ้นเนิน หากเลือกแท็กซี่ให้คิดค่าใช้จ่ายเพิ่มและยังเผื่อเดินช่วงสุดท้าย",
    "- **08:00–09:20:** [Kiyomizu-dera](https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera) ย้ายจาก Day 1 งบเข้าชม 500 เยน วัดเปิดตั้งแต่ **06:00** ตาม [เว็บไซต์วัด](https://www.kiyomizudera.or.jp/en/location/) จึงเข้าวัดก่อนร้านค้าได้; ไฟประดับฤดูใบไม้แดงปี 2026 จบ **30 พ.ย.** จึงไม่มีรอบค่ำในทริปนี้ [ปฏิทินวัด](https://www.kiyomizudera.or.jp/event/)",
    "- **09:30–10:15:** แวะ [Asahido สาขาหลัก](https://www.asahido.co.jp/shops/) 15–25 นาที แล้วเดิน Sannenzaka / Ninenzaka สั้น ๆ ตามแรง ร้านหลักเปิด **09:30–18:00** ตามข้อมูลที่ตรวจ 21 ต.ค. 2026 ไม่เพิ่มคาเฟ่คิวยาวหรือกิจกรรมปั้นเซรามิกในช่วงนี้",
    "- **10:15–11:30:** เดินลงไป **Keihan Kiyomizu-gojo → Demachiyanagi** แล้วเดินเข้าสู่ Shimogamo เผื่อรวมประมาณ 75 นาที ทั้งเดินลงเนิน รอรถ และเดินจากสถานี เลือกขบวนที่จอด Kiyomizu-gojo ไม่เพิ่มร้านแวะระหว่างทาง [Keihan Kiyomizu-gojo](https://www.keihan.co.jp/traffic/station/161/info.html) / [การเดินทางเข้าศาลเจ้า](https://www.shimogamo-jinja.or.jp/access)",
    "- **11:30–12:30:** [Shimogamo Shrine](https://www.shimogamo-jinja.or.jp/prayers/question) และ **Tadasu no Mori ช่วงสั้น** เข้าสักการะฟรี เวลา 06:30–17:00 ส่วนการเข้าชมพิเศษจ่ายแยก ใช้เวลานี้แทน **Ginkakuji / Omen / Philosopher’s Path** ไม่เพิ่มทั้งสองเส้นทาง",
    "- **12:30–13:30:** มื้อกลางวันและนั่งพักแถว Shimogamo / Demachiyanagi งบประมาณ 1,000–2,000 เยน รวมเวลาเดินออกจากศาลเจ้า เลือกร้านคิวสั้น ไม่ผูกกับร้านที่ต้องรอนาน",
    "- **13:30–14:30:** เดินทางไป Nanzenji เช่น **Keihan Demachiyanagi → Sanjo → เดินเชื่อม Subway Sanjo Keihan → Keage → เดินไป Nanzenji** เผื่อรวมประมาณ 60 นาที ไม่เดินจาก Shimogamo ไป Nanzenji ทั้งระยะ [Keihan](https://www.keihan.co.jp/traffic/station/) / [Subway Tozai](https://www2.city.kyoto.lg.jp/kotsu/tikadia/hyperdia/line01.htm)",
    "- **14:30–15:30:** [Nanzenji และ Suirokaku](https://www.google.com/maps/search/?api=1&query=Nanzenji+Temple) แผนหลักชมภายนอก ส่วนอาคาร/สวนที่มีค่าเข้าเป็นตัวเสริม",
    "- **15:30–16:30:** พัก **Blue Bottle Kyoto / คาเฟ่ใกล้เคียง** ตามคิว เป็นแผนหลัก หากเลือก **Murin-an แทนคาเฟ่** ให้จองรอบ **16:00** ตามที่ว่าง ถึงก่อนรอบและออกประมาณ 16:30 เพื่อไป Eikando; ค่าเข้า **1,500 เยน** ในวันที่ 4 ธ.ค. ตรวจแพ็กเกจเครื่องดื่มแยก เปิดจองล่วงหน้า 30 วันและยกเลิกเสียค่าธรรมเนียม 100% หากต้องการชมสวนนานกว่านี้ให้ลดจุดก่อนหน้าแล้วจองรอบเร็วขึ้น [Murin-an](https://murin-an.jp/info/)",
    "- **16:30–17:00:** เดินไป Eikando เผื่อประมาณ 20–30 นาทีจากจุดพัก ไม่ใช้เวลา 5 นาทีแบบเหมารวมทั้งบริเวณ Nanzenji",
    "- **17:00–ประมาณ 19:00:** ต่อคิวและชม [Eikando รอบค่ำ](https://www.google.com/maps/search/?api=1&query=Eikando+Temple)",
    "  - **ประกาศปี 2026:** 20 พ.ย.–6 ธ.ค. รับเข้าชม **17:30–20:30 ปิด 21:00** ค่าเข้า **1,000 เยน** รอบกลางวันและรอบค่ำแยกตั๋ว ตรวจประกาศก่อนวันจริงเผื่อการเปลี่ยนแปลง [Eikando Official](https://www.eikando.or.jp/osirase.html)",
    "  - ไปก่อนเปิดเป็นเวลาเผื่อคิว ไม่รับประกันว่าจะได้เข้ากลุ่มแรกหรือจุดถ่ายภาพว่าง",
    "- **19:00–20:00:** เผื่อเดินไป Keage ต่อ Subway Tozai → **Sanjo Keihan** แล้วเดินไปมื้อเย็น",
    "- **ประมาณ 20:00–21:00:** [Menami Obanzai](https://www.google.com/maps/search/?api=1&query=Menami+Obanzai+Kyoto) งบเดิม 2,500–4,000 เยน หากจองได้ เลือกเวลาจองที่เผื่อออกจาก Eikando แล้ว; ร้านเปิด 15:00–22:00 สั่งสุดท้าย 21:30 หยุดพุธ รับจองทางโทรศัพท์เท่านั้น หากไม่ได้จองให้มีร้านสำรอง [Menami](https://www.menami.jp/)",
    "- **21:00–21:45:** กลับโรงแรม เลือก Subway จาก Kyoto Shiyakusho-mae → เปลี่ยนสายที่ **Karasuma Oike** → Kyoto หรือเส้นทางที่สะดวกจากร้านจริง — Night 4",
    "",
    "**เมื่อช้า/เหนื่อย:** เก็บ Kiyomizu / Shimogamo / Eikando เป็นจุดหลัก ลดการเดิน Tadasu no Mori และเวลาชม Nanzenji ก่อน งด Murin-an แต่เก็บเวลานั่งพัก ถ้าออกจากถนนเก่าหลัง 11:00 ให้เลื่อน Shimogamo ตามจริงและกินมื้อสั้นโดยไม่ต่อคิวยาว ไม่ชดเชยด้วยการเพิ่มวัดเงินหรือ Philosopher’s Path; ถ้าคิว Eikando ชนมื้อเย็นที่จอง ให้ปรับตามเงื่อนไขร้าน",
    "",
    "**งบรถสาธารณะ:** **1,700 เยน** รวมเงินเผื่อ Keihan และ Subway ตามเส้นทางใหม่ ไม่ใช่ยอดค่าโดยสารยืนยันทุกช่วง ไม่รวมแท็กซี่; ค่าเข้าสักการะ Shimogamo ฟรี"
  ].join("\n"),
  [
    "### Day 5 | เสาร์ 5 ธันวาคม — Osaka Castle → Osaka Aquarium Kaiyukan → Dotonbori",
    "",
    "เที่ยวหลักเพียง **3 จุด** ตัด Shinsekai / Tsutenkaku และ Shinsaibashi-suji ออกจากวันนี้ โดย Osaka Castle คงเน้นสวนและภายนอกตามแผนเดิม",
    "",
    "- **08:00–09:30:** ออกจากโรงแรม JR Special Rapid Kyoto → Osaka แล้ว JR Loop Line → Osakajokoen เผื่อเดินเข้าบริเวณปราสาท เวลาเป็นกรอบเดินทาง ไม่ใช่ขบวนที่จองแล้ว",
    "- **09:30–11:00:** [Osaka Castle Park](https://www.osakacastlepark.jp/) เดินสวน ถ่ายรูปคูน้ำและปราสาทภายนอก สวนทั่วไปฟรี เลือกเส้นทางผ่านปราสาทแล้วออกทาง Morinomiya ไม่เดินวนครบสวน",
    "  - หากต้องการ **เข้า Tenshukaku** ผู้ใหญ่ **1,200 เยน** เปิด 09:00–18:00 รับเข้าถึง 17:30 ให้ใช้ช่วงนี้เข้าตัวปราสาทแทนการเดินสวนยาวและซื้อตั๋วล่วงหน้า; หากคิวยาวต้องลดการเดินสวนหรือขยับรอบ Kaiyukan ตามเงื่อนไขตั๋วก่อน อย่าเร่งมื้อกลางวัน [เว็บไซต์ปราสาท](https://www.osakacastle.net/guide/)",
    "  - ไม่เพิ่ม Nishinomaru ในแผนหลัก เพื่อเก็บแรงเดินในพิพิธภัณฑ์สัตว์น้ำ",
    "- **11:00–12:00:** เดินไป **Morinomiya → Osaka Metro Chuo Line → Osakako** แล้วเดินจากทางออก 1 ประมาณ 5 นาทีถึง Kaiyukan ใช้สาย Chuo ตรงโดยไม่ต้องเปลี่ยนสาย [การเดินทางจาก Kaiyukan](https://www.kaiyukan.com/info/access/)",
    "- **12:00–13:00:** มื้อกลางวันและนั่งพักแถว **Tempozan Marketplace** เลือกร้านคิวสั้น งบประมาณ 1,000–2,000 เยน ไม่เพิ่มชิงช้าสวรรค์หรือเรือเที่ยว",
    "- **13:00–15:30:** [Osaka Aquarium Kaiyukan](https://www.kaiyukan.com/info/ticket/kaiyukan/) เผื่อชม **2.5 ชั่วโมง** เป็นเวลาแนะนำในแผน ไม่ใช่เวลาบังคับของสถานที่",
    "  - เลือก e-ticket **วันที่ 5 ธ.ค. รอบเป้าหมาย 13:00** หากมีที่ว่าง เว็บไซต์แนะนำตั๋วระบุวันและเวลา; ตั๋วหน้างานอาจไม่ได้เข้ารอบที่ต้องการ ราคาปรับตามวัน **ตั้งงบเผื่อ 3,500 เยน/คน** ตัวเลขนี้ยังไม่ใช่ราคายืนยันของวันที่ 5 ธ.ค. ตรวจราคา เวลาเปิด และที่ว่างจริงก่อนชำระเงิน [ราคา/ตั๋ว](https://www.kaiyukan.com/info/ticket/kaiyukan/) / [เวลาเปิด](https://www.kaiyukan.com/info/hours/)",
    "- **15:30–16:30:** เดินกลับ Osakako → Chuo Line ไป **Hommachi → เปลี่ยน Midosuji Line ไป Namba** แล้วเดินไป Dotonbori เผื่อเปลี่ยนสายและเดินในสถานี",
    "- **16:30–19:15:** [Dotonbori / Glico Sign](https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Sign) เดินริมคลอง ถ่ายป้ายไฟ กินมื้อเย็นและซื้อของในย่านนี้",
    "  - เลือก Takoyaki / Okonomiyaki ตามคิว เช่น Wanaka หรือ Mizuno; ราคามื้อเย็นเดิมเป็นงบประมาณ ไม่ใช่ราคาเมนูยืนยัน ถ้าคิวเกิน 30 นาทีให้เปลี่ยนร้าน ไม่แทรก Shinsaibashi กลับเข้ามา",
    "- **19:15–20:45:** เดินไป Namba → Metro Umeda → เชื่อม JR Osaka → JR Special Rapid Kyoto → โรงแรม เผื่อ **60–90 นาที** — Night 5",
    "",
    "**เมื่อช้า/เหนื่อยหรือฝนหนัก:** ลดการเดินสวนปราสาทก่อน รักษารอบ Kaiyukan ที่ซื้อไว้และมื้อพักกลางวัน; กลับจาก Dotonbori เร็วขึ้นได้ ไม่เพิ่มแหล่งเที่ยวที่สี่ วันนี้ยังเดินมากทั้งสวนและในอาคาร แม้เหลือ 3 จุด",
    "",
    "**งบรถสาธารณะ:** **2,500 เยน** รวมเงินเผื่อเส้นทางไปอ่าว Osaka และกลับ Kyoto ไม่ใช่ยอดค่าโดยสารยืนยันทุกช่วง; **ค่า Kaiyukan ตั้งไว้แยก 3,500 เยน** รวมในงบกิจกรรมทั้งทริปแล้ว ส่วน Tenshukaku 1,200 เยนยังเป็นตัวเลือก"
  ].join("\n"),
  [
    "### Day 6 | อาทิตย์ 6 ธันวาคม — Fushimi ช่วงล่าง → Nishiki แบบสั้น และกลับไทย",
    "",
    "- **07:30–08:00:** เช็คเอาท์ ฝากกระเป๋าและยืนยันเวลารับกลับ โรงแรมกำหนดเช็คเอาท์ 10:00",
    "- **08:00–08:30:** JR Nara Line Kyoto → **Inari** เลือกขบวนที่จอดสถานีนี้",
    "- **08:30–09:15:** [Fushimi Inari Taisha](https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha) ชมศาลเจ้าและเสาโทริอิช่วงล่างแบบสั้น **ไม่ขึ้นยอดเขาในวันบินกลับ** ถ้าอยากเดินนานกว่านี้ให้งด Nishiki",
    "- **09:15–10:15:** เดินไป **Keihan Fushimi-inari → Gion-shijo** แล้วเดินไปตลาด Nishiki เผื่อรอรถและเดิน 15–20 นาทีจากย่าน Shijo ไม่ต้องย้อนกลับ Kyoto Station ก่อน และไม่สับสน JR Inari กับ Keihan Fushimi-inari ตรวจขบวนจริง",
    "- **10:15–11:15:** [Nishiki Market](https://www.kyoto-nishiki.or.jp/en/) ย้ายจาก Day 1 เดินตลาดและชิม/กินมื้อสั้นในพื้นที่ร้าน ไม่เดินกิน ร้านค้าเปิดไม่พร้อมกันและมีวันหยุดแยกตาม [FAQ ตลาด](https://www.kyoto-nishiki.or.jp/en/contact/) หากร้านที่อยากกินยังไม่เปิดหรือคิวยาว ไม่รอจนเกินเวลา",
    "- **11:15–12:00:** ออกจากตลาด เดินไป Subway **Shijo → Kyoto** แล้วกลับโรงแรม รับประทานมื้อสั้นรอบสถานีได้เฉพาะเมื่อยังมีเวลา งด Higashi Honganji และไม่เพิ่มร้านจองยาว",
    "- **12:00–13:00:** รับกระเป๋าและเข้าสถานี เตรียมขึ้น Haruka ไม่เริ่มกิจกรรมใหม่",
    "- **เลือก Haruka ช่วงประมาณ 13:30–14:00:** ตรวจและจองขบวนจริงให้ถึงสถานี KIX ราว 15:00–15:30 หรือก่อนหน้านั้น ตารางนี้ยังไม่ใช่การยืนยันว่ามีขบวนเวลา 14:00 พอดี",
    "- **15:00–16:00:** เดินไป **Aeroplaza ชั้น 1 → Shuttle ฟรี → T2 International** เป้าหมายถึง T2 **ไม่เกิน 16:00** เผื่อเวลาเดิน/รอรวมประมาณ 30 นาที",
    "- **16:00 เป็นต้นไป:** ทำขั้นตอนสินค้าคืนภาษีและเช็คอินตามที่เปิดบริการ เตรียมพาสปอร์ต สินค้า และหลักฐานการซื้อไว้หยิบตรวจได้",
    "  - ระบบ **Refund Method เริ่ม 1 พ.ย. 2026:** จ่ายราคารวมภาษีที่ร้านก่อน ศุลกากรยืนยันการนำสินค้าออกภายใน 90 วันจากการซื้อ แล้วร้าน/ผู้ดำเนินการคืนภาษีให้ **ไม่รับประกันว่าได้เงินสดจากตู้สนามบินทันที** [Japan Customs — คู่มือระบบใหม่](https://www.customs.go.jp/kaigairyoko/taxrefund.htm)",
    "  - **ทำขั้นตอนยืนยันสินค้าก่อนโหลดกระเป๋าที่บรรจุสินค้า** ใช้ Tax Refund Kiosk หรือ Visit Japan Web ในพื้นที่ Wi-Fi สำหรับคืนภาษีที่กำหนดในโถงขาออกก่อนจุดตรวจความปลอดภัย; ประกาศ Digital Agency **2 พ.ย. 2026** ยืนยันว่า KIX รองรับ VJW หากระบบแจ้งให้ตรวจสินค้าต้องนำสินค้าไปให้ศุลกากร ตรวจตำแหน่งบริการ **T2 International** อีกครั้งก่อนวันกลับ [ประกาศ VJW](https://services.digital.go.jp/en/visit-japan-web/news/20261102-01/)",
    "  - Peach ระบุขั้นตอน KIX International เปิดเช็คอิน **150–50 นาทีก่อนออก** สำหรับเวลา 19:15 เท่ากับประมาณ **16:45–18:25** ตรวจข้อมูลเที่ยวบินจริงและทำให้เสร็จก่อนเวลาปิด ไม่ใช้ 18:25 เป็นเวลาเป้าหมายมาถึง [Peach KIX International](https://www.flypeach.com/sg/lm/ai/airports/airportguide_international/kix)",
    "  - ร้านอาหารต้องตรวจฝั่ง International แยก ข่าวฟูดคอร์ตใหม่ 4 ร้านที่เปิด 1 เม.ย. 2026 เป็น **T2 Domestic** จึงไม่ใช่ตัวเลือกในเขตขาออกระหว่างประเทศ [Kansai Airports — ข่าว 3 มี.ค. 2026](https://www.kansai-airports.co.jp/en/news/e-260303-pressrelease-t2open/)",
    "- **19:15:** Peach **MM091** ออกจาก KIX T2",
    "- **23:55:** ถึง BKK คืนวันที่ 6 ธ.ค.",
    "",
    "**เวลาที่ต้องรักษา:** ออกจาก Nishiki **ไม่เกิน 11:15** กลับถึงโรงแรมราว **12:00** และรับกระเป๋า/เข้าสถานีช่วง **12:00–13:00** หากออกจาก Fushimi หลัง 09:30 ให้ตัด Nishiki แล้วกลับสถานี ไม่บีบเวลา Haruka เพื่อชดเชยตลาด",
    "",
    "**ถ้าอยากไป Ippodo มากกว่าตลาด:** เลือก Ippodo / Kaboku **แทน Nishiki** เพียงแห่งเดียว หลัง Fushimi เดินทางผ่าน Keihan ไป Sanjo แล้วต่อ Subway Tozai ไป Kyoto Shiyakusho-mae และเดิน เผื่อรวมถึงประมาณ 10:30; ซื้อชา/นั่งดื่มสั้นตามคิว **10:30–11:15** แล้วกลับ Kyoto ทาง Subway โดยเปลี่ยนสายที่ Karasuma Oike ให้ถึงโรงแรมราว 12:00 ร้านเปิด 10:00–17:00 สั่งสุดท้าย 16:30 หยุดพุธที่สองของเดือนตาม [Ippodo](https://global.ippodo-tea.co.jp/pages/store-kyoto) แต่ต้องตรวจประกาศพิเศษและงด Tearoom หากรอคิว",
    "",
    "**เมื่อฝนตก/รถมีปัญหา:** ตัด Fushimi และ Nishiki แล้วอยู่รอบสถานี ถ้า Haruka มีปัญหาให้ตัดกิจกรรม/มื้อยาวแล้วหาวิธีไปสนามบินจากข้อมูลผู้ให้บริการทันที ไม่รอถึงช่วงบ่าย Sanjusangendo ใช้แทน Fushimi เฉพาะเมื่อเลือกไว้ก่อนและตรวจเวลา/ราคาแล้ว โดยงด Nishiki ด้วย",
    "",
    "**งบรถสาธารณะ:** 3,300 เยน รวม Haruka 2,700 เยน และเงินเผื่อ JR / Keihan / Subway ตามเส้นทางใหม่ ไม่ใช่ยอดค่าโดยสารยืนยันรายเที่ยว",
    "",
    "---"
  ].join("\n")
];

PLAN_A_DATA.dailySourceNotes = PLAN_A_DAILY_SOURCE_NOTES;

const checkpointById = id => PLAN_A_DATA.days.flatMap(day => day.checkpoints).find(checkpoint => checkpoint.id === id);
checkpointById('pa-d1-5').optionalActivities = ['งดเที่ยวเย็นได้ทั้งหมดเมื่อเพลีย', 'Gion Tsujiri เฉพาะเมื่อเปิดและคิวสั้น'];
checkpointById('pa-d1-6').choiceNote = 'เลือกร้าน Pontocho หรือมื้อใกล้โรงแรมตามแรง';
checkpointById('pa-d2-2').optionalActivities = ['เข้าชมภายใน Phoenix Hall · เพิ่ม 300 เยน'];
checkpointById('pa-d2-3').choiceNote = 'เลือก Usucha 1,500 เยน หรือคอร์สลงมือชง 3,600 เยน · ต้องจองรอบจริง';
checkpointById('pa-d2-4').time = '11:15–12:15 · มื้อกลางวัน / 12:15–13:45 · เดินทาง Uji → Nara';
checkpointById('pa-d2-4').desc = 'มื้อกลางวันโซบะมัทฉะและเดิน Uji Omotesando/ริมแม่น้ำสั้น ๆ เวลา 11:15–12:15; ตั้งเป้าออกจาก Uji ไม่เกิน 12:30–13:00 แล้วเผื่อรถและเดินทางต่อไป Nara ช่วง 12:15–13:45';
checkpointById('pa-d2-4').transportInfo = 'เดินกลับ JR Uji แล้วต่อรถไฟไป Nara; เผื่อรอรถและเดินทาง';
checkpointById('pa-d3-2').choiceNote = 'เลือกร้านหลักหนึ่งร้าน: Yoshimura หรือ eX café; ร้านที่สองแวะเมื่อคิวสั้นเท่านั้น';
checkpointById('pa-d4-6').choiceNote = 'คาเฟ่เป็นหลัก; Murin-an จองรอบ 16:00 ตามที่ว่าง ออกประมาณ 16:30 เพื่อไป Eikando';
checkpointById('pa-d4-6').optionalActivities = ['Murin-an ค่าเข้า 1,500 เยน · ยกเลิกเสียค่าธรรมเนียม 100%'];
checkpointById('pa-d4-8').desc = 'เผื่อเดินไป Keage ต่อ Subway Tozai → Sanjo Keihan; เลือกรอบ Menami ที่เผื่อออกจาก Eikando ร้านเปิด 15:00–22:00 สั่งสุดท้าย 21:30 หยุดพุธ รับจองทางโทรศัพท์เท่านั้น หากจองไม่ได้ให้เลือกร้านสำรอง; ขากลับขึ้น Subway จาก Kyoto Shiyakusho-mae เปลี่ยนสายที่ Karasuma Oike แล้วไป Kyoto';
checkpointById('pa-d4-8').transportInfo = 'เดินไป Keage → Subway Tozai → Sanjo Keihan; ขากลับ Kyoto Shiyakusho-mae → เปลี่ยนสาย Karasuma Oike → Kyoto';
checkpointById('pa-d5-2').optionalActivities = ['ขึ้น Tenshukaku 1,200 เยนแทนเดินสวนยาว · เผื่อคิวให้ทัน Kaiyukan'];
checkpointById('pa-d5-3').choiceNote = 'รอบเป้าหมาย 13:00 ตามที่ว่าง · ตรวจราคาและเวลาเปิดวันที่ 5 ธ.ค. ก่อนซื้อ';
checkpointById('pa-d6-3').optionalActivities = ['Ippodo แทน Nishiki เพียงแห่งเดียว ไม่ทำทั้งสองแห่ง'];
checkpointById('pa-d6-3').choiceNote = 'ออกจากตลาดไม่เกิน 11:15; ถ้าออกจาก Fushimi หลัง 09:30 ให้งดตลาด';

// 🌐 MASTER PLANS REGISTRY (Designed for easy future expansion)
const PLANS_REGISTRY = {
  plan_a: {
    id: "plan_a",
    name: "Kyoto Trip",
    badge: "100% Kyoto Base (5 คืน)",
    label: "พัก Kyoto 5 คืน",
    desc: "เน้นเที่ยวธรรมชาติเกียวโต นารา เล่นกับกวาง Osaka Day Trip ดื่มมัทฉะอูจิ (Ippodo เป็นตัวเลือกแทน Nishiki) และทานอาหาร local เกียวโต",
    data: PLAN_A_DATA
  }
};

// Backwards compatibility alias default
const TRAVEL_DATA = PLANS_REGISTRY.plan_a.data;
