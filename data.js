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
  exchangeRate: 0.212, // ค่าเริ่มต้น: 1 JPY ≈ 0.212 THB (อ้างอิง 6 พ.ย. 2026 ที่ 1 THB ≈ 4.716 JPY) ผู้ใช้ปรับเองได้ที่หน้างบประมาณ

  // Numeric values are canonical for both currency views; the published totals are plan estimates.
  budget: {
    travelers: 2, // ตัวเลขทุกแถวเป็นต่อคน หน้า Budget คูณจำนวนคนให้
    transport: { minJPY: 13900, maxJPY: 13900, note: "รวม Haruka 2,700 เยน × 2 เที่ยวและเงินเผื่อรายวัน ไม่รวมแท็กซี่" },
    meals: { minJPY: 25000, maxJPY: 34000, note: "ไม่รวม CHAZUNA ซึ่งนับรวมในค่าเข้าชมและกิจกรรมชา" },
    admissions: { minJPY: 10300, maxJPY: 11800, note: "รวม CHAZUNA 2,800 และ Kaiyukan งบเผื่อ 3,500; เพดานรวม Phoenix Hall 300 และ Tenshukaku 1,200 หรือ Tenjuan 500" },
    accommodationTax: { minJPY: 2000, maxJPY: 2000, note: "สมมติ 400 เยน × 5 คืน; ยืนยันจากราคาห้องต่อคนต่อคืน" },
    beforeReserve: { minJPY: 51200, maxJPY: 61700 },
    reserve: { minJPY: 5000, maxJPY: 5000, note: "เงินสำรองบางส่วน ไม่ใช่งบรับประกันกิจกรรมเสริม" },
    total: { minJPY: 56200, maxJPY: 66700 },
    accommodationTaxBands: [
      { threshold: "ต่ำกว่า 6,000 เยน", amountJPY: 200 },
      { threshold: "6,000–ต่ำกว่า 20,000 เยน", amountJPY: 400 },
      { threshold: "20,000–ต่ำกว่า 50,000 เยน", amountJPY: 1000 },
      { threshold: "50,000–ต่ำกว่า 100,000 เยน", amountJPY: 4000 },
      { threshold: "ตั้งแต่ 100,000 เยน", amountJPY: 10000 }
    ],
    admissionBaseJPY: 7500,
    kaiyukanEstimateJPY: 3500,
    chazunaJPY: 2800,
    phoenixHallExtraJPY: 300
  },

  // วันแรกของทริปตามเวลาญี่ปุ่น ใช้เลือก "วันนี้" อัตโนมัติระหว่างเดินทาง
  tripStartDate: "2026-12-01",

  // ข้อความท้ายหน้า: ปรับเมื่อแก้แผน
  footerNote: "ปรับแผนล่าสุด 25 พ.ย. 2026 · ข้อมูลตรวจ 14–25 พ.ย. ตามแหล่งที่แนบ · เวลารายวันเป็นกรอบวางแผน ไม่ใช่รอบรถที่จองแล้ว · ตรวจใบจองและประกาศก่อนเดินทาง",


  preTripChecklist: [
    "เทียบ MM092/MM091 เวลา กระเป๋า และเงื่อนไขเช็คอินกับใบจองล่าสุด",
    "ยืนยันฝากกระเป๋าและภาษีที่พักจากราคาต่อคนต่อคืนกับโรงแรม",
    "Day 4: CHAZUNA จองแล้ว 4 ธ.ค. รอบ 14:45 2 คน ภาษาอังกฤษ ชำระแล้ว 5,600 เยน; เก็บตั๋ว PDF (มี QR) ไว้ในมือถือแบบออฟไลน์; ยกเลิกก่อนวันงานอย่างน้อย 1 วันได้เงินคืน; โทรถามระยะเวลากิจกรรม 0774-24-2700",
    "Haruka: ซื้อก่อนออกเดินทาง (ตั๋วส่วนลดซื้อในญี่ปุ่นไม่ได้) 2,700 เยน/เที่ยว; จองขากลับให้ถึง T2 ไม่เกิน 16:00",
    "Day 2: โทรยืนยันว่า Hisago เปิดวันพุธ 2 ธ.ค. (075-561-2109); ตรวจเวลาเปิด Sushi no Musashi Sanjo / Katsukura Sanjo สำหรับมื้อเย็น",
    "29–30 พ.ย. ดูพยากรณ์ tenki.jp ถ้า 2 ธ.ค. ฝนตกและ 3 ธ.ค. แดดดี ให้สลับ Day 2 ↔ Day 3",
    "ซื้อ e-ticket Kaiyukan แบบระบุเวลา 5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง ตรวจราคาและเวลาเปิดก่อนซื้อ",
    "Day 3: Shimogamo ต่อท้าย Kinkakuji ตรวจรอบรถบัสสาย 205 และทางกลับ Kyoto Station จริง",
    "24–27 พ.ย. ตรวจวันหยุดร้านหลัก (Hisago, Katsugyu, Chojiro, Sushi no Musashi) รอบรถ/ค่าโดยสาร สภาพใบไม้และประกาศไฟประดับ",
    "เตรียม VJW และวิธีรับเงินคืนตามร้าน ตรวจแผนผัง Tax-free ที่ KIX T2 International; ยืนยันสินค้าก่อนโหลดกระเป๋าที่บรรจุสินค้า",
    "ก่อนแต่ละวัน ดูฝนและสถานะรถ กำหนดจุดหลักหนึ่งถึงสองแห่งและตัดกิจกรรมเสริมเมื่อช้า"
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
    { icon: "fa-ticket", title: "Kaiyukan — จองวันและเวลา", desc: "5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง ราคาเปลี่ยนตามวัน งบเผื่อ 3,500 เยน ตรวจราคาและที่ว่างก่อนซื้อ ตั๋วหน้างานอาจต้องรอรอบ; ออกแล้วกลับเข้าซ้ำไม่ได้", link: "https://www.kaiyukan.com/info/ticket/kaiyukan/", linkLabel: "Kaiyukan — ราคาและตั๋ว" },
    {
      icon: "fa-train",
      title: "Haruka และช่องทางตั๋ว",
      desc: "ตั๋วส่วนลดนักท่องเที่ยว 2,700 เยน/เที่ยว รวมไปกลับ 5,400 เยน ซื้อในญี่ปุ่นไม่ได้; WEST QR ต้องลงทะเบียนและใช้โทรศัพท์ออนไลน์ กด Use ticket อย่างน้อย 3 นาทีก่อนขบวนที่จองออก ไม่อย่างนั้นที่นั่งถูกยกเลิกอัตโนมัติ (ตรวจ 23 พ.ย.); JR-WEST Online/Exchange Order อาจต้องรับหรือแลกตั๋วตามช่องทาง; อย่ากดเริ่มใช้ก่อนวันเดินทาง",
      link: "https://www.westjr.co.jp/global/en/ticket/westqr/haruka/",
      linkLabel: "JR-WEST WEST QR",
      secondaryLink: "https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/",
      secondaryLinkLabel: "JR-WEST Haruka"
    },
    {
      icon: "fa-id-card",
      title: "บัตร IC Card (ICOCA / Suica)",
      desc: "ใช้กับรถไฟและรถบัสทั่วไปตามเงื่อนไขผู้ให้บริการ Haruka ซื้อแยก เติมเริ่มต้นประมาณ 3,000–5,000 เยนแล้วเติมเพิ่มตามใช้",
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
      desc: "จ่ายรวมภาษีที่ร้านก่อน ยืนยันการนำสินค้าออกก่อนโหลดกระเป๋าที่บรรจุสินค้า ด้วย Tax Refund Kiosk หรือ VJW ในพื้นที่ Wi-Fi ที่กำหนดก่อนจุดตรวจความปลอดภัย; หากถูกเลือกตรวจให้นำสินค้าไปศุลกากร ร้านคืนเงินตามวิธีที่ลงทะเบียน",
      link: "https://www.customs.go.jp/kaigairyoko/taxrefund.htm",
      linkLabel: "Japan Customs — Tax-free",
      secondaryLink: "https://services.digital.go.jp/en/visit-japan-web/news/20261102-01/",
      secondaryLinkLabel: "VJW — KIX รองรับ"
    },
    {
      icon: "fa-utensils",
      title: "อาหารใน KIX T2",
      desc: "หลังผ่านตรวจความปลอดภัยฝั่ง International ชั้น 1 มี 日本のごちそう (Nihon no Gochiso) เปิด 05:30–22:25 สั่งสุดท้าย 21:55 มีโอโคโนมิยากิ ทาโกะยากิ ราเมง (ตรวจ 23 พ.ย.)",
      link: "https://www.kansai-airport.or.jp/shop-and-dine/dine/d054",
      linkLabel: "KIX — 日本のごちそう"
    },
    {"icon":"fa-landmark","title":"Byodoin — ภายใน Phoenix Hall","desc":"Day 4 เข้า Byodoin 13:30–14:20 ก่อน CHAZUNA: ภายใน Phoenix Hall เลือกรอบ 13:50 รับตั๋วรอบในสวน ทุก 20 นาที (รอบสุดท้าย 16:10) จำกัด 35 คน/รอบ ตั๋วหมดก่อนได้ พลาดรอบแล้วเปลี่ยนเวลาหรือคืนเงินไม่ได้ (ตรวจ 25 พ.ย.)","link":"https://www.byodoin.or.jp/news/cat23/20261016/","linkLabel":"Byodoin — จำนวนคนต่อรอบ"},
    {"icon":"fa-mug-hot","title":"CHAZUNA — กิจกรรมโม่มัทฉะ","desc":"จองแล้ว 4 ธ.ค. รอบ 14:45 2 คน ภาษาอังกฤษ ถึงจุดลงทะเบียนหน้าทางเข้า 14:30 แสดง QR ในตั๋ว; 2,800 เยน/ผู้ใหญ่ รวมตั๋วพิพิธภัณฑ์ชา ชำระแล้ว; ยกเลิกก่อนวันงานอย่างน้อย 1 วันได้เงินคืน ภายใน 24 ชม. หรือไม่มาไม่คืน; เปิด 09:00–17:00 ไม่มีวันหยุดประจำ; ระยะเวลากิจกรรมยังไม่ยืนยัน สอบถาม 0774-24-2700","link":"https://uji-chazuna.kyoto/event/#experience","linkLabel":"CHAZUNA — หน้าจอง","secondaryLink":"https://uji-chazuna.kyoto/3221/","secondaryLinkLabel":"CHAZUNA — ตารางเดือน ธ.ค."},
    {"icon":"fa-leaf","title":"ใบไม้แดง — ตรวจ 14 พ.ย.","desc":"Arashiyama / Tenryuji วันที่ 3 ธ.ค. น่าจะเป็นปลายช่วง; Eikando คาดสวยปลาย พ.ย.–ต้น ธ.ค.; Shimogamo ปกติสวยต้น–กลาง ธ.ค.; เป็นพยากรณ์ ตรวจสภาพจริงอีกครั้ง 24–27 พ.ย.","link":"https://tenki.jp/kouyou/6/29/","linkLabel":"tenki.jp — Kyoto","secondaryLink":"https://weathernews.jp/koyo/spot/26120/","secondaryLinkLabel":"Weathernews — Eikando"}
  ],

  alternatives: [
    { name: "Ippodo / Kaboku", replaces: "Nishiki ใน Day 6 เมื่อให้ความสำคัญกับชา", note: "เลือกแห่งเดียว ซื้อชา/ดื่มสั้น 10:30–11:15 ตามคิว แล้วกลับโรงแรมราว 12:00; ร้านเปิด 10:00–17:00 สั่งสุดท้าย 16:30 หยุดพุธที่สองของเดือน ตรวจประกาศพิเศษ", link: "https://global.ippodo-tea.co.jp/pages/store-kyoto" },
    {
      name: "Kenninji",
      replaces: "Kiyomizu ใน Day 2 เมื่อฝนตกหรือไม่ไหวกับเนิน",
      note: "เริ่ม 10:00 โดยงด Kiyomizu / Asahido แล้วกินกลางวันก่อนต่อ Nanzenji / Eikando ตามแผน; รับเข้าถึง 16:30 ปิด 17:00 ค่าเข้า 800 เยน; งดกิจกรรมคัดพระสูตรช่วงทริป",
      link: "https://www.kenninji.jp/access/"
    },
    {
      name: "Taiho-an",
      replaces: "CHAZUNA ใน Day 4 เมื่อจองไม่ได้",
      note: "ร้านชาของเมือง Uji ใกล้ Byodoin: Usucha 1,500 เยน ราว 20–30 นาที หรือคอร์สลงมือชง 3,600 เยน ราว 40 นาที (จองก่อนอย่างน้อย 3 วัน) ต้องจองรอบ เลือกรอบหลังถึง Uji ราว 13:20 และจบก่อน Byodoin ปิดรับ 17:15",
      link: "https://www.kyoto-uji-kankou.or.jp/taihoan-en.html"
    },
  ],

  contingencies: [
    { title: "Day 1: พักก่อน เที่ยวเย็นตามแรง", detail: "รักษาเช็คอิน 15:00 และนอนพักถึงราว 17:30; งด Gion / Pontocho ได้ทั้งหมด ถ้าถึงหลัง 15:00 ให้เช็คอินก่อนแล้วค่อยกิน" },
    { title: "Day 2: Kiyomizu / Eikando", detail: "วันนี้ยาวที่สุดและต่อจากวันมาถึง เมื่อช้าลดเวลาเดินถนนเก่าและเวลาชม Nanzenji ก่อน งด Tenjuan แต่เก็บเวลานั่งพัก ถ้าคิว Hisago เกิน 30 นาทีให้เปลี่ยนร้าน" },
    { title: "Day 2 ↔ Day 3: สลับเมื่อพุธฝนตก", detail: "ดูพยากรณ์ tenki.jp 29–30 พ.ย. ถ้า 2 ธ.ค. ฝนตกและ 3 ธ.ค. แดดดี ให้ไป Arashiyama / Kinkakuji วันพุธ และ Kiyomizu / Eikando วันพฤหัส; ร้านและ Eikando รอบค่ำเปิดทั้งสองวัน" },
    { title: "Day 3: Shimogamo งดได้", detail: "คง Arashiyama → Randen → Kinkakuji เป็นหลัก ถ้าออกจาก Kinkakuji หลัง 15:30 ให้งด Shimogamo แล้วกลับ Kyoto Station; คิวมื้อกลางวันยาวให้ลดร้านเสริมก่อน" },
    { title: "Day 4: Nara / Uji ช้า", detail: "เข้า Todaiji ก่อนจุดอื่น ถ้าช้าตัด Nigatsudo / Kasuga Taisha ก่อน; ขึ้นรถไฟ JR Nara → Uji ไม่เกิน 12:45 ; ถ้าถึง Uji ช้าให้ตัด Byodoin ก่อนแล้วไปลงทะเบียน CHAZUNA 14:30 แล้วเข้าสวน Byodoin หลังกิจกรรม (รับเข้าถึง 17:15)" },
    { title: "Day 5: รักษารอบ Kaiyukan", detail: "เมื่อช้า เหนื่อย หรือฝนหนัก ให้ลดการเดินสวนปราสาทก่อน รักษารอบ Kaiyukan และมื้อพักกลางวัน กลับจาก Dotonbori เร็วขึ้นได้" },
    { title: "Day 6: ตัดตลาดก่อนบีบเวลาสนามบิน", detail: "ถ้าออกจาก Fushimi หลัง 09:30 ให้งด Nishiki; ออกจากตลาดไม่เกิน 11:15 กลับโรงแรมราว 12:00 รับกระเป๋า/เข้าสถานี 12:00–13:00; ฝนหนักหรือ Haruka มีปัญหาให้ตัด Fushimi และตลาดแล้วจัดการเดินทางสนามบินทันที" },
  ],

  nearbyRestaurants: [
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
      name: "Porta Dining (ร้านอาหารใต้สถานี Kyoto)",
      category: "Kyoto Local (Porta)",
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
      short: "ถึงแล้วพัก",
      critical: "เช็คอิน 15:00 แล้วพักถึงราว 17:30",
      risk: "เที่ยวเย็นเป็นตัวเลือกทั้งหมด ถ้ายังเพลียให้กินใกล้โรงแรมแล้วพักต่อ",
      date: "1 ธ.ค. 2026 (อังคาร)",
      title: "ถึง KIX → กินใกล้สถานี → เช็คอิน / นอนพัก → Gion หัวค่ำตามแรง",
      theme: "Kyoto Arrival & Rest",
      color: "#ff7675",
      totalFareJPY: 3200,
      routeCoords: [[34.4389,135.2323],[34.9878,135.7612],[35.0036,135.7765],[35.0056,135.7712],[34.9878,135.7612]],
      checkpoints: [
        { id:"pa-d1-1", order:1, time:"08:45–10:30", name:"ถึง KIX Terminal 2 (MM092)", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"Peach MM092 ถึง 08:45 ตามตารางฤดูหนาว; เวลาผ่าน ตม. รับกระเป๋า และต่อรถเป็นกรอบเผื่อ ไม่รับประกันเวลา", transportInfo:"T2 → Shuttle ฟรี → Aeroplaza ชั้น 1 / สถานีสนามบิน → JR Haruka; เลือกขบวนที่ขึ้นได้หลังทำขั้นตอนสนามบิน", cost:"0 JPY (Shuttle ฟรี)", link:"https://www.google.com/maps/search/?api=1&query=Kansai+International+Airport+Terminal+2" },
        { id:"pa-d1-2", order:2, time:"ประมาณ 12:15–12:45", name:"ฝากกระเป๋าที่ APA Hotel Kyoto Ekihigashi", jpName:"APAホテル〈京都駅東〉", category:"transport", lat:34.9878, lng:135.7612, desc:"ถึงโรงแรมผ่าน JR Kyoto Station Central Gate เดินราว 3 นาที หรือ Subway Exit A5 ราว 1 นาที; เช็คอิน 15:00 เช็คเอาท์ 10:00 ยืนยันเงื่อนไขฝากกระเป๋ากับโรงแรม", transportInfo:"เดินจาก Kyoto Station Central Gate / Subway Exit A5", cost:"0 JPY (ตรวจนโยบายโรงแรม)", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/", warning:"Haruka WEST QR: กด Use ticket อย่างน้อย 3 นาทีก่อนขบวนที่จองออก ไม่อย่างนั้นที่นั่งถูกยกเลิกอัตโนมัติ", transit:[{"mode":"shuttle","line":"Free Shuttle Bus (ฟรี)","from":"KIX T2","to":"Aeroplaza (T1)","min":10,"dir":"ไปทาง Terminal 1 / Aeroplaza"},{"mode":"walk","from":"Aeroplaza ชั้น 1","to":"JR Kansai Airport Station","min":5},{"mode":"train","line":"JR Limited Express Haruka 特急はるか","from":"Kansai Airport 関西空港","to":"Kyoto 京都","min":"75–80","dir":"ไปทาง 京都 / Kyoto","tip":"ถึงชานชาลา 30 ฝั่งตะวันตกสุดของสถานี เดินถึง Central Gate ราว 5–10 นาที"},{"mode":"walk","from":"Kyoto Station Central Gate","to":"APA Hotel","min":3}] },
        { id:"pa-d1-3", order:3, time:"12:45–15:00", name:"กินใกล้โรงแรม แล้วนั่งพักรอเช็คอิน", jpName:"京都駅 / ポルタ", category:"food", lat:34.9858, lng:135.7588, desc:"แผนหลัก Sushi no Musashi ซูชิสายพานฝั่ง Hachijo Gate สำรอง Porta / ร้านรอบสถานีตามคิว; 14:00–15:00 นั่งพัก ไม่เพิ่มวัดหรือช้อป ถามเข้าห้องก่อนเวลาได้แต่ไม่ตั้งสมมติฐานว่าจะได้ห้อง", transportInfo:"เดินใกล้โรงแรมและสถานี ไม่ไป Nishiki วันนี้", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Sushi+no+Musashi+Kyoto+Station", transit:[{"mode":"walk","from":"APA Hotel","to":"ร้านฝั่ง Hachijo Gate / Porta","min":"5–10","tip":"เดินผ่านในสถานี Kyoto"}] },
        { id:"pa-d1-4", order:4, time:"15:00–17:30", name:"เช็คอิน อาบน้ำ และนอนพัก", jpName:"APAホテル〈京都駅東〉", category:"transport", lat:34.9878, lng:135.7612, desc:"ช่วงพักหลักของวัน เริ่มเช็คอิน 15:00 ตามโรงแรม ตั้งปลุกแล้วประเมินแรงอีกครั้ง; ตื่นช้าได้โดยลดหรืองดเที่ยวเย็น", transportInfo:"พักในโรงแรม", cost:"ค่าห้องตามการจอง", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/" },
        { id:"pa-d1-5", order:5, time:"17:30–19:00 · ถ้ามีแรง", name:"เดินทางไป Gion / ริม Kamo แล้วเดินสั้น ๆ", jpName:"祇園 / 鴨川", category:"spot", lat:35.0036, lng:135.7765, desc:"เผื่อเดินทาง 17:30–18:15 แล้วเลือกเดิน Gion หรือริม Kamo ระยะสั้น; งดได้ทั้งหมดเมื่อยังเพลีย ไม่เดินขึ้น Kiyomizu คืนนี้ เคารพป้ายห้ามเข้า/ถ่ายภาพ แวะ Gion Tsujiri เฉพาะเมื่อเปิดและคิวสั้น", transportInfo:"รถสาธารณะตามเส้นทางจริง แล้วเดินสั้น ๆ", cost:"ตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Gion+Kyoto", optionalActivities:["งดเที่ยวเย็นได้ทั้งหมดเมื่อเพลีย", "Gion Tsujiri เฉพาะเมื่อเปิดและคิวสั้น"], transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto","min":5},{"mode":"train","line":"JR Nara Line 奈良線","from":"Kyoto 京都","to":"Tofukuji 東福寺","min":3,"dir":"ไปทาง 奈良 / Nara","board":"ชานชาลา 8–10","tip":"ขึ้นขบวน 普通 Local; Rapid / Miyakoji Rapid ไม่จอด Tofukuji"},{"mode":"train","line":"Keihan Main Line 京阪本線","from":"Tofukuji 東福寺","to":"Gion-shijo 祇園四条","min":5,"dir":"ไปทาง 出町柳 / Demachiyanagi","tip":"แตะบัตรออกฝั่ง JR แล้วแตะเข้าฝั่ง Keihan ในสถานีเดียวกัน"},{"mode":"walk","from":"Gion-shijo","to":"Gion / ริม Kamo","min":5}] },
        { id:"pa-d1-6", order:6, time:"19:00–20:45", name:"มื้อเย็นตามแรง แล้วกลับโรงแรม", jpName:"先斗町 / 河童寿司", category:"food", lat:35.0056, lng:135.7712, desc:"กินใกล้จุดที่อยู่; Pontocho / Kappa Sushi เป็นตัวเลือกถ้ายังไหวและร้านเปิด/คิวเหมาะสม งบอาหาร 2,500–4,000 เยน ไม่จองมื้อที่ยกเลิกยาก; กลับโรงแรมราว 20:00–20:45 หรือกินใกล้โรงแรมแล้วพักต่อ", transportInfo:"เดินทางตามแรงและตำแหน่งร้านจริง", cost:"อาหารประมาณ 2,500–4,000 JPY", link:"https://www.google.com/maps/search/?api=1&query=Pontocho+Kappa+Sushi", choiceNote:"เลือกร้าน Pontocho หรือมื้อใกล้โรงแรมตามแรง", transit:[{"mode":"walk","from":"Gion / Pontocho","to":"Keihan Gion-shijo","min":"5–10"},{"mode":"train","line":"Keihan Main Line 京阪本線","from":"Gion-shijo 祇園四条","to":"Tofukuji 東福寺","min":5,"dir":"ไปทาง 淀屋橋 / Yodoyabashi","back":true},{"mode":"train","line":"JR Nara Line 奈良線","from":"Tofukuji 東福寺","to":"Kyoto 京都","min":3,"dir":"ไปทาง 京都 / Kyoto"},{"mode":"walk","from":"JR Kyoto","to":"APA Hotel","min":5}] }
      ]
    },
    {
      dayNum: 2,
      short: "East Kyoto",
      critical: "Kiyomizu / Eikando เป็นจุดหลัก · ถึง Eikando ก่อน 17:30",
      risk: "วันยาวที่สุดต่อจากวันมาถึง เมื่อช้าลดเวลาเดินถนนเก่า Nanzenji และ Tenjuan ก่อน รักษามื้อกลางวันและเวลานั่งพัก",
      date: "2 ธ.ค. 2026 (พุธ)",
      title: "Kiyomizu → Asahido / ถนนเก่า → Nanzenji / Tenjuan → พักยาว → Eikando รอบค่ำ",
      theme: "Kiyomizu, Nanzenji & Eikando",
      color: "#6c5ce7",
      totalFareJPY: 1400,
      routeCoords: [[34.9878,135.7612],[34.9949,135.785],[34.9958,135.7828],[35.0003,135.7806],[35.0112,135.7939],[35.0109,135.7922],[35.0144,135.7956],[35.0068,135.7710],[34.9878,135.7612]],
      checkpoints: [
        {"id":"pa-d2-1","order":1,"time":"07:15–09:20 · รวมเดินทาง","name":"Kiyomizu-dera เช้า","jpName":"清水寺","category":"spot","lat":34.9949,"lng":135.785,"desc":"ออกโรงแรม 07:15 เผื่อรถและเดินขึ้นเนิน เข้าวัดประมาณ 08:00–09:20 วัดเปิด 06:00 ค่าเข้า 500 เยน; ไม่มีไฟประดับรอบค่ำช่วงทริป","transportInfo":"รถสาธารณะและเดินขึ้นเนิน; แท็กซี่คิดเพิ่มหากเลือกใช้","cost":"500 JPY","link":"https://www.kiyomizudera.or.jp/en/location/", transit:[{"mode":"walk","from":"APA Hotel","to":"Kyoto Station Bus Terminal ฝั่งเหนือ (Karasuma)","min":"5–8"},{"mode":"bus","line":"City Bus 206 (หรือ 86)","from":"Kyoto Station 京都駅前","to":"Gojozaka 五条坂 / Kiyomizu-michi 清水道","min":16,"dir":"ป้ายหน้ารถมีคำว่า 清水寺 (Kiyomizu-dera)","board":"ป้าย D2","tip":"ขึ้นประตูหลัง แตะ IC ตอนลงประตูหน้า; ช่วงสายรถแน่น ไปเช้าตามแผน"},{"mode":"walk","from":"ป้ายรถบัส","to":"Kiyomizu-dera (เดินขึ้นเนิน)","min":"10–15"}] },
        {"id":"pa-d2-9","order":2,"time":"09:30–11:15","name":"Asahido + Sannenzaka / Ninenzaka","jpName":"朝日堂 / 三年坂 / 二寧坂","category":"shopping","lat":34.9958,"lng":135.7828,"desc":"Asahido สาขาหลักเปิด 09:30–18:00 แวะ 15–25 นาทีแล้วเดินถนนเก่าตามแรงโดยไม่ต้องเร่ง","transportInfo":"เดินลงจาก Kiyomizu แล้วเดินต่อทาง Yasaka Shrine","cost":"ซื้อของตามจริง","link":"https://www.asahido.co.jp/shops/", transit:[{"mode":"walk","from":"Kiyomizu-dera","to":"Sannenzaka / Asahido","min":5,"tip":"เดินลงเนิน"}] },
        {"id":"pa-d2-3","order":3,"time":"11:15–12:30","name":"มื้อกลางวัน Hisago (โอยาโกะดง)","jpName":"ひさご","category":"food","lat":35.0003,"lng":135.7806,"navigationQuery":"Hisago, Shimogawara, Higashiyama, Kyoto, Japan","desc":"ร้านโอยาโกะดง (ข้าวหน้าไก่และไข่) เก่าแก่ตั้งแต่ปี 1930 บนถนน Shimogawara ใกล้ประตู Yasaka Shrine อยู่ทางลงจากถนนเก่า งบ 1,000–2,000 เยน; เปิด 11:30–16:00 หยุดจันทร์และศุกร์ (gurunavi ตรวจ 19 พ.ย.) ยืนยันทางโทรศัพท์ 075-561-2109 ไปต่อคิวก่อนเปิด ไข่ทำแบบสุกไม่เต็มที่ ถ้าคิวเกิน 30 นาทีให้เปลี่ยนร้านแถว Gion; หมุดแผนที่เป็นตำแหน่งโดยประมาณ","transportInfo":"เดินจาก Sannenzaka / Ninenzaka ไปทาง Yasaka Shrine","cost":"ประมาณ 1,000–2,000 JPY","link":"https://gurunavi.com/ja/kan9300/rev/rst", transit:[{"mode":"walk","from":"Ninenzaka","to":"Hisago (ใกล้ Yasaka Shrine)","min":10}] },
        {"id":"pa-d2-5","order":4,"time":"12:30–13:15 เดินทาง / 13:15–14:30 วัด","name":"Nanzenji และ Suirokaku","jpName":"南禅寺 / 水路閣","category":"spot","lat":35.0112,"lng":135.7939,"desc":"แผนหลักชมภายนอก; อาคาร/สวนที่เก็บค่าเข้าเป็นตัวเลือก","transportInfo":"เดินไป Subway Higashiyama → Keage (สาย Tozai หนึ่งสถานี) แล้วเดิน เผื่อรวมประมาณ 45 นาที; ตรวจขบวนจริง","cost":"ภายนอก 0 JPY; ส่วนอื่นตามจริง","link":"https://www.google.com/maps/search/?api=1&query=Nanzenji+Temple", transit:[{"mode":"walk","from":"Hisago","to":"Subway Higashiyama 東山","min":15},{"mode":"subway","line":"Subway Tozai Line 東西線","from":"Higashiyama 東山","to":"Keage 蹴上","min":2,"dir":"ไปทาง 六地蔵 / Rokujizo หรือ 浜大津"},{"mode":"walk","from":"Keage ทางออก 1","to":"Nanzenji (ลอดอุโมงค์ Nejiri-manpo)","min":10}] },
        {"id":"pa-d2-6","order":5,"time":"14:30–15:15 Tenjuan / 15:15–16:30 พัก","name":"Tenjuan แล้วพักยาวแถว Nanzenji","jpName":"天授庵 / ブルーボトル","category":"nature","lat":35.0109,"lng":135.7922,"navigationQuery":"Tenjuan, Nanzenji, Kyoto, Japan","desc":"Tenjuan วัดย่อยติดประตู Sanmon ของ Nanzenji ชมสวนใบไม้แดงช่วงสั้น ไม่ต้องจอง แล้วนั่งพัก Blue Bottle / คาเฟ่ใกล้เคียงตามคิว; Tenjuan ช่วงฤดูหนาวเปิด 09:00–16:30 ค่าเข้า 500 เยน (ตรวจ 23 พ.ย.) เข้าก่อน 15:30; ถ้าเหนื่อยให้งด Tenjuan แล้วนั่งคาเฟ่ตั้งแต่ 14:30; หมุดแผนที่เป็นตำแหน่งโดยประมาณ","transportInfo":"เดินสั้น ๆ ในย่าน Nanzenji","cost":"Tenjuan 500 JPY / คาเฟ่ตามจริง","link":"https://koyo.walkerplus.com/detail/ar0726e322486/data.html","choiceNote":"Tenjuan งดได้ · รักษาเวลานั่งพักไว้","optionalActivities":["Tenjuan · 500 เยน ปิด 16:30"], transit:[{"mode":"walk","from":"Nanzenji Sanmon","to":"Tenjuan / คาเฟ่","min":5}] },
        {"id":"pa-d2-7","order":6,"time":"16:30–19:00","name":"Eikando รอบค่ำ","jpName":"永観堂 禅林寺","category":"spot","lat":35.0144,"lng":135.7956,"desc":"เผื่อเดินจากจุดพัก 20–30 นาทีและคิว; รอบค่ำรับเข้าชม 17:30–20:30 ปิด 21:00 ค่าเข้า 1,000 เยน แยกตั๋วจากรอบกลางวัน","transportInfo":"เดิน 20–30 นาทีจากจุดพักโดยประมาณ","cost":"1,000 JPY","link":"https://www.eikando.or.jp/osirase.html", transit:[{"mode":"walk","from":"Nanzenji","to":"Eikando","min":"10–15"}] },
        {"id":"pa-d2-8","order":7,"time":"ประมาณ 19:00–21:45","name":"เดินทางและมื้อเย็นแถว Pontocho / Kawaramachi","jpName":"先斗町 / 河原町","category":"food","lat":35.0068,"lng":135.7710,"desc":"เผื่อเดินไป Keage ต่อ Subway Tozai → Sanjo Keihan แล้วกินร้านหลัก Sushi no Musashi สาขา Sanjo (寿しのむさし 三条本店) หรือ Katsukura Sanjo (かつくら 三条本店) แถว Kawaramachi Sanjo งบ 2,500–4,000 เยน ตรวจเวลาเปิดก่อนไป; ถ้าเหนื่อยให้กลับไปกิน Chojiro Sushi ที่สถานี Kyoto แทน; ขากลับขึ้น Subway จาก Kyoto Shiyakusho-mae เปลี่ยนสายที่ Karasuma Oike แล้วไป Kyoto — Night 2","transportInfo":"เดินไป Keage → Subway Tozai → Sanjo Keihan; ขากลับ Kyoto Shiyakusho-mae → เปลี่ยนสาย Karasuma Oike → Kyoto","cost":"มื้อเย็นประมาณ 2,500–4,000 JPY","link":"https://www.google.com/maps/search/?api=1&query=Pontocho+Kyoto","choiceNote":"Sushi no Musashi Sanjo หรือ Katsukura Sanjo · Chojiro Sushi ที่สถานีเมื่อเหนื่อย", transit:[{"mode":"walk","from":"Eikando","to":"Subway Keage 蹴上","min":"15–20"},{"mode":"subway","line":"Subway Tozai Line 東西線","from":"Keage 蹴上","to":"Sanjo Keihan 三条京阪","min":4,"dir":"ไปทาง 太秦天神川 / Uzumasa Tenjingawa"},{"mode":"walk","from":"Sanjo Keihan","to":"Pontocho / Kawaramachi","min":"5–10"},{"mode":"walk","from":"ร้านอาหาร","to":"Subway Kyoto Shiyakusho-mae 京都市役所前","min":"5–10","back":true},{"mode":"subway","line":"Subway Tozai Line 東西線","from":"Kyoto Shiyakusho-mae 京都市役所前","to":"Karasuma Oike 烏丸御池","min":2,"dir":"ไปทาง 太秦天神川 / Uzumasa Tenjingawa"},{"mode":"subway","line":"Subway Karasuma Line 烏丸線","from":"Karasuma Oike 烏丸御池","to":"Kyoto 京都","min":6,"dir":"ไปทาง 竹田 / Takeda","tip":"เปลี่ยนสายในสถานี ไม่ต้องแตะบัตรออก"},{"mode":"walk","from":"Subway Exit A5","to":"APA Hotel","min":1}] }
      ]
    },
    {
      dayNum: 3,
      short: "Arashiyama",
      critical: "ต่อคิว Taisho HANANA ทันทีหลังสะพาน · ออกจาก Kinkakuji ไม่เกิน 15:30",
      risk: "Taisho HANANA คิวมักราว 1 ชม. รอเกินราว 60 นาทีให้เปลี่ยนร้าน; ออกจาก Kinkakuji หลัง 15:30 ให้งด Shimogamo",
      date: "3 ธ.ค. 2026 (พฤหัสบดี)",
      title: "Arashiyama → Randen เปลี่ยนที่ Katabiranotsuji → Kinkakuji → Shimogamo ช่วงสั้น",
      theme: "Arashiyama, Kinkakuji & Shimogamo",
      color: "#fdcb6e",
      totalFareJPY: 1500,
      routeCoords: [[34.9858,135.7588],[35.0170,135.6713],[35.0155,135.6777],[35.0157,135.6775],[35.0394,135.7292],[35.0389,135.773],[34.9858,135.7588]],
      checkpoints: [
        { id:"pa-d3-1", order:1, time:"07:45–11:15", name:"Bamboo Grove → Tenryuji Garden → Togetsukyo Bridge", jpName:"嵐山竹林 / 天龍寺 / 渡月橋", category:"nature", lat:35.0170, lng:135.6713, desc:"JR Sagano Line ไป Saga-Arashiyama แล้วเดินชมป่าไผ่ สวน Tenryuji ค่าเข้า 500 เยน เปิด 08:30 และสะพาน Togetsukyo", transportInfo:"JR Sagano Line; ตรวจรอบและค่าโดยสารจริง", cost:"Tenryuji Garden 500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove", transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto","min":5},{"mode":"train","line":"JR Sagano Line 嵯峨野線","from":"Kyoto 京都","to":"Saga-Arashiyama 嵯峨嵐山","min":15,"dir":"ไปทาง 亀岡・園部 / Kameoka, Sonobe","board":"ชานชาลา 32–33 (ฝั่งตะวันตก เผื่อเดิน)"},{"mode":"walk","from":"Saga-Arashiyama","to":"Bamboo Grove","min":10}] },
        { id:"pa-d3-2", order:2, time:"11:15–12:45", name:"มื้อกลางวัน Taisho HANANA (ข้าวหน้าปลาไท) + ของหวานตามแรง", jpName:"鯛匠 HANANA", category:"food", lat:35.0155, lng:135.6777, navigationQuery:"Taisho Hanana, Saga Tenryuji Susukinobaba-cho, Ukyo, Kyoto, Japan", desc:"ร้านหลัก Taisho HANANA เซ็ตข้าวหน้าปลาไท 鯛茶漬け御膳 ราว 2,900 เยน กินซาชิมิกับซอสงา แล้วราดน้ำชาเป็นชะซึเกะ ข้าวเติมได้; เปิด 11:00–15:30 หรือจนของหมด หยุดไม่แน่นอน คิวมักราว 1 ชม. (ข้อมูลจากรีวิว ตรวจ 25 พ.ย.) ไปต่อคิวทันทีหลังสะพาน Togetsukyo โทรเช็กวันเปิด 075-862-8771; ของหวานไม่บังคับ: % ARABICA Kyoto Arashiyama ริมแม่น้ำข้างสะพาน Togetsukyo ซื้อลาเต้ถือเดินกินริมแม่น้ำ เครื่องดื่มราว 400–800 เยน เปิดราว 08:00/09:00–18:00 (แหล่งข้อมูลไม่ตรงกัน ตรวจ 25 พ.ย.) หรือ Bread, Espresso & Arashiyama Garden (パンとエスプレッソと嵐山庭園) ใกล้สถานี Randen Arashiyama เปิด 08:00–18:00 เฟรนช์โทสต์มัทฉะเริ่มขาย 14:00 ซึ่งช้ากว่าเวลาออกจาก Arashiyama ให้ซื้อขนมปัง/เครื่องดื่มแทน; รอ HANANA เกินราว 60 นาทีให้เปลี่ยนเป็นร้านคิวสั้นแถวถนนหลัก; หมุดแผนที่เป็นตำแหน่งโดยประมาณ", transportInfo:"เดินใน Arashiyama", cost:"เซ็ตปลาไทประมาณ 2,900 JPY/คน; ของหวานตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Taisho+Hanana+Arashiyama", choiceNote:"ร้านหลัก Taisho HANANA · ของหวานไม่บังคับ: % ARABICA ข้างสะพาน หรือ Bread, Espresso & Arashiyama Garden", optionalActivities:["% ARABICA Kyoto Arashiyama · ลาเต้ถือเดินริมสะพาน","Bread, Espresso & Arashiyama Garden · ใกล้ Randen Arashiyama"], bookingLinks:[{ label:"% ARABICA Arashiyama (Google Maps)", url:"https://www.google.com/maps/search/?api=1&query=%25+ARABICA+Kyoto+Arashiyama" },{ label:"Bread, Espresso & Arashiyama Garden (Google Maps)", url:"https://www.google.com/maps/search/?api=1&query=Bread+Espresso+and+Arashiyama+Garden" }], transit:[{"mode":"walk","from":"Togetsukyo","to":"Taisho HANANA","min":"5–10"}] },
        { id:"pa-d3-3", order:3, time:"13:00–14:15", name:"Randen ไป Kitanohakubaicho", jpName:"嵐電", category:"transport", lat:35.0157, lng:135.6775, desc:"ขึ้น Randen จาก Arashiyama เปลี่ยนขบวนที่ Katabiranotsuji ไป Kitanohakubaicho แล้วต่อรถสาธารณะสู่วัดทอง ตรวจสายและเวลาเดินรถจริง", transportInfo:"Randen + ต่อรถสาธารณะ; fare ตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Katabiranotsuji+Station", transit:[{"mode":"walk","from":"ร้านอาหาร","to":"Randen Arashiyama 嵐山","min":5},{"mode":"train","line":"Randen Arashiyama Line 嵐電嵐山本線","from":"Arashiyama 嵐山","to":"Katabiranotsuji 帷子ノ辻","min":8,"dir":"ไปทาง 四条大宮 / Shijo-Omiya"},{"mode":"train","line":"Randen Kitano Line 嵐電北野線","from":"Katabiranotsuji 帷子ノ辻","to":"Kitano-Hakubaicho 北野白梅町","min":15,"dir":"ไปทาง 北野白梅町 / Kitano-Hakubaicho","tip":"รถรางเล็ก จ่ายตอนลง ใช้ IC ได้"}] },
        { id:"pa-d3-4", order:4, time:"14:15–15:15", name:"Kinkakuji", jpName:"金閣寺", category:"spot", lat:35.0394, lng:135.7292, desc:"ชมวัดทอง งบเข้า 500 เยน แล้วต่อรถบัสไป Shimogamo; ออกหลัง 15:30 ให้งดศาลเจ้าแล้วกลับ Kyoto Station", transportInfo:"ต่อรถสาธารณะจาก Randen; ตรวจสาย/ค่าโดยสารจริง", cost:"500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Kinkakuji+Temple", transit:[{"mode":"bus","line":"City Bus 204 หรือ 205","from":"Kitano-Hakubaicho 北野白梅町","to":"Kinkakuji-michi 金閣寺道","min":8,"dir":"ฝั่งที่ไปทาง 金閣寺 (Kinkakuji)","tip":"เดินแทนได้ราว 20 นาที"},{"mode":"walk","from":"Kinkakuji-michi","to":"Kinkakuji","min":"5–10"}] },
        { id:"pa-d3-6", order:5, time:"15:15–16:00 เดินทาง / 16:00–16:50 ศาลเจ้า", name:"Shimogamo Shrine / Tadasu no Mori ช่วงสั้น", jpName:"下鴨神社 / 糺の森", category:"spot", lat:35.0389, lng:135.773, desc:"ต่อจากวัดทองเพราะอยู่โซนเหนือเหมือนกัน ชมศาลเจ้าและป่าช่วงสั้น เข้าสักการะฟรี 06:30–17:00 ชมพิเศษจ่ายแยก; งดได้ทั้งหมดเมื่อออกจาก Kinkakuji หลัง 15:30; ป่าปกติสวยต้น–กลาง ธ.ค.", transportInfo:"City Bus สาย 205 จาก Kinkakuji-michi → Shimogamo-jinja-mae; เวลาเป็นค่าประมาณ ตรวจรอบและค่าโดยสารจริง", cost:"เข้าสักการะ 0 JPY; ชมพิเศษจ่ายแยก", link:"https://www.shimogamo-jinja.or.jp/prayers/question", choiceNote:"จุดต่อท้ายที่งดได้ · ศาลเจ้าปิด 17:00", transit:[{"mode":"walk","from":"Kinkakuji","to":"Kinkakuji-michi 金閣寺道","min":"5–10"},{"mode":"bus","line":"City Bus 205","from":"Kinkakuji-michi 金閣寺道","to":"Shimogamo-jinja-mae 下鴨神社前","min":"30–40","dir":"ไปทาง 北大路バスターミナル / Kitaoji BT","tip":"รถจอด Kitaoji Bus Terminal กลางทาง นั่งต่อได้ ดูจอบนรถ"},{"mode":"walk","from":"Shimogamo-jinja-mae","to":"Tadasu no Mori","min":5}] },
        { id:"pa-d3-5", order:6, time:"17:45–19:15", name:"GYUKATSU Kyoto Katsugyu", jpName:"牛カツ京都勝牛", category:"food", lat:34.9858, lng:135.7588, desc:"กิวคัตสึย่างต่อเองบนหินร้อนพร้อมข้าว ใกล้สถานี Kyoto แล้วกลับพัก — Night 3; สำรอง Sushi no Musashi / Porta", transportInfo:"จาก Shimogamo กลับ Kyoto Station ด้วยรถบัส หรือเดินไป Demachiyanagi แล้วต่อรถไฟ; ตรวจเส้นทางจริง", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Gyukatsu+Kyoto+Katsugyu+Kyoto+Ekimae", transit:[{"mode":"walk","from":"Shimogamo Shrine","to":"ป้าย Shimogamo-jinja-mae ฝั่งลงใต้","min":5},{"mode":"bus","line":"City Bus 4 หรือ 205","from":"Shimogamo-jinja-mae 下鴨神社前","to":"Kyoto Station 京都駅前","min":"35–45","dir":"ไปทาง 河原町・京都駅 / Kyoto Station","tip":"ทางเลือก: เดิน 15 นาทีไป Demachiyanagi แล้วขึ้น Keihan"},{"mode":"walk","from":"Kyoto Station","to":"Katsugyu","min":5}] }
      ]
    },
    {
      dayNum: 4,
      short: "Nara & Uji",
      critical: "ขึ้นรถไฟ JR Nara → Uji ไม่เกิน 12:45 · ลงทะเบียน CHAZUNA 14:30 (จองแล้ว)",
      risk: "อยู่ Nara ช่วงเช้าเป็นหลัก ถ้าช้าตัด Kasuga Taisha ก่อนแล้วรักษาขบวนไป Uji; ออกจาก Byodoin ไม่เกิน 14:20",
      date: "4 ธ.ค. 2026 (ศุกร์)",
      title: "Nara: Todaiji + Kasuga + กวาง → Uji: Byodoin + CHAZUNA → Kyoto",
      theme: "Nara & Uji Tea",
      color: "#00cec9",
      totalFareJPY: 2000,
      routeCoords: [[34.9858,135.7588],[34.6845,135.8274],[34.68899,135.83982],[34.6813,135.8484],[34.6851,135.8430],[34.6822,135.8262],[34.8893,135.8077],[34.8900,135.8105],[34.9840,135.7600]],
      checkpoints: [
        { id:"pa-d4-1", order:1, time:"07:15–08:15", name:"Kyoto → Kintetsu Nara", jpName:"近鉄京都駅 → 近鉄奈良駅", navigationQuery:"Kintetsu Nara Station, Nara, Japan", category:"transport", lat:34.6845, lng:135.8274, desc:"ออกโรงแรม 07:15 ขึ้น Kintetsu Kyoto Line ไป Kintetsu Nara ซึ่งอยู่ติด Nara Park เดินถึง Todaiji ได้โดยไม่ต้องต่อรถบัส; ทางเลือก JR Miyakoji Rapid ไป JR Nara แล้วต่อรถบัส", transportInfo:"Kintetsu Kyoto Line; รอบและค่าโดยสารตรวจจากผู้ให้บริการ", link:"https://www.google.com/maps/search/?api=1&query=Kintetsu+Nara+Station", transit:[{"mode":"walk","from":"APA Hotel","to":"Kintetsu Kyoto (ฝั่ง Hachijo)","min":10,"tip":"เดินผ่านทางเดินในสถานี Kyoto ไปฝั่งใต้"},{"mode":"train","line":"Kintetsu Kyoto Line 近鉄京都線","from":"Kintetsu Kyoto 近鉄京都","to":"Kintetsu Nara 近鉄奈良","min":"40–50","dir":"ไปทาง 近鉄奈良 / Kintetsu-Nara","tip":"ขึ้น Express 急行 ที่ไป 近鉄奈良 ตรง หรือเปลี่ยนที่ Yamato-Saidaiji; Limited Express 特急 ต้องซื้อตั๋วเพิ่ม"}] },
        { id:"pa-d4-2", order:2, time:"08:15–09:30", name:"Todaiji Daibutsuden (Great Buddha Hall)", jpName:"東大寺大仏殿", lat:34.68899, lng:135.83982, navigationQuery:"Todai-ji Daibutsuden, Nara, Japan", category:"spot", desc:"เข้าวิหารช่วงเช้าก่อนคนแน่น ค่าเข้า 800 เยน รับเงินสด; ฤดูหนาววิหารเปิด 08:00–17:00 พิพิธภัณฑ์รับเข้าถึง 16:30 เป็นคนละเวลาบริการ; ซื้อขนมกวาง (shika senbei) ระหว่างเดินเข้าวัด ช่วงเช้ากวางยังหิวและเข้าหาคน", transportInfo:"เดินจาก Kintetsu Nara ผ่าน Nara Park", cost:"800 JPY (เตรียมเงินสด)", link:"https://www.todaiji.or.jp/information/haikan/", transit:[{"mode":"walk","from":"Kintetsu Nara","to":"Todaiji Daibutsuden","min":"15–20","tip":"เดินตาม Noborioji-dori แล้วเลี้ยวเข้าถนนหน้า Nandaimon"}] },
        { id:"pa-d4-3", order:3, time:"09:30–10:45", name:"Nigatsudo → Kasuga Taisha", jpName:"二月堂 / 春日大社", lat:34.6813, lng:135.8484, navigationQuery:"Kasuga Taisha, Nara, Japan", category:"nature", desc:"เดินขึ้น Nigatsudo หลัง Todaiji ชมวิวเมือง แล้วเดินทางป่าไปทางโคมหินของ Kasuga Taisha; บริเวณทั่วไปเข้าฟรี ส่วนที่เก็บค่าเข้าเป็นตัวเลือก ตรวจราคาและเวลาหน้างาน; งดจุดนี้ได้เป็นอย่างแรกเมื่อช้า", transportInfo:"เดินในเขต Nara Park", cost:"บริเวณทั่วไป 0 JPY; ส่วนที่เก็บค่าเข้าตามจริง", link:"https://www.kasugataisha.or.jp/", choiceNote:"งดได้เป็นอย่างแรกเมื่อช้า", transit:[{"mode":"walk","from":"Todaiji","to":"Nigatsudo","min":10,"tip":"ทางขึ้นเนินและบันได"},{"mode":"walk","from":"Nigatsudo","to":"Kasuga Taisha","min":"20–25"}] },
        { id:"pa-d4-4", order:4, time:"10:45–11:45", name:"Nara Park (พื้นที่เดินชมกวาง)", jpName:"奈良公園", lat:34.6851, lng:135.8430, navigationQuery:"Nara Park, Nara, Japan", category:"nature", desc:"เดินเล่นทุ่งหญ้า Tobihino แล้วค่อยเดินกลับทางสถานี ระวังอาหารและของในมือใกล้กวาง ขนมหมดให้แบมือโชว์; หมุดแผนที่แสดงบริเวณสวนโดยประมาณ ไม่ใช่ทางเข้าจุดเดียว", transportInfo:"เดินในเขต Nara Park ไปทาง Sanjo-dori", cost:"ขนมกวางตามจริง", link:"https://www.pref.nara.lg.jp/n113/57798.html", transit:[{"mode":"walk","from":"Kasuga Taisha","to":"Tobihino / Nara Park","min":"10–15"}] },
        { id:"pa-d4-5", order:5, time:"11:45–12:30 · มื้อกลางวัน / 12:30–13:20 · Nara → Uji", name:"มื้อกลางวัน Nara แล้วรถไฟไป JR Uji", jpName:"三条通り / JR奈良駅 → JR宇治駅", navigationQuery:"JR Nara Station, Nara, Japan", category:"food", lat:34.6822, lng:135.8262, desc:"กินร้านคิวสั้นแถว Sanjo-dori ทางเดินไป JR Nara งบอาหาร 1,500–2,500 เยน; ขึ้นรถไฟจาก JR Nara ไม่เกิน 12:45 เพื่อมีเวลาใน Byodoin ก่อนกิจกรรมชา ถ้าคิวร้านยาวให้ซื้อของกินไปกินที่ Uji; หมุดแผนที่เป็นตำแหน่งโดยประมาณ", transportInfo:"เดิน Sanjo-dori ไป JR Nara แล้ว JR Nara Line ไป JR Uji", cost:"อาหารประมาณ 1,500–2,500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Sanjo-dori+Nara", transit:[{"mode":"walk","from":"Nara Park","to":"ร้านแถว Sanjo-dori","min":"10–15"},{"mode":"walk","from":"Sanjo-dori","to":"JR Nara 奈良","min":10},{"mode":"train","line":"JR Nara Line 奈良線","from":"JR Nara 奈良","to":"JR Uji 宇治","min":"25–40","dir":"ไปทาง 京都 / Kyoto","tip":"Miyakoji Rapid みやこ路快速 เร็วที่สุดและจอด Uji; ลงที่ JR Uji ไม่ใช่ Keihan Uji"}] },
        { id:"pa-d4-6", order:6, time:"13:30–14:20", name:"Byodoin Temple", jpName:"平等院", category:"spot", lat:34.8893, lng:135.8077, desc:"แวะก่อนกิจกรรมชา สวนและพิพิธภัณฑ์ Hoshokan ตั๋ว 700 เยน; สวนเปิด 08:45–17:30 รับเข้าถึง 17:15 พิพิธภัณฑ์ 09:00–17:00 รับเข้าถึง 16:45 (ตรวจ 25 พ.ย.); ภายใน Phoenix Hall เพิ่ม 300 เยน รับตั๋วรอบในสวน ทุก 20 นาที จำกัด 35 คน/รอบ เลือกรอบ 13:50 หรือรอบที่จบก่อน 14:20 เพื่อเดินถึง CHAZUNA 14:30 ตั๋วรอบหมดก่อนได้ พลาดรอบแล้วเปลี่ยนเวลาหรือคืนเงินไม่ได้", transportInfo:"เดินจาก JR Uji", cost:"700 JPY; Phoenix Hall เพิ่ม 300 JPY (ตัวเลือก)", link:"https://www.byodoin.or.jp/guide/", optionalActivities:["ภายใน Phoenix Hall · รอบ 13:50 เพิ่ม 300 เยน"], warning:"ออกจาก Byodoin ไม่เกิน 14:20 เพื่อถึงจุดรับลงทะเบียน CHAZUNA 14:30", transit:[{"mode":"walk","from":"JR Uji ทางออกใต้","to":"Byodoin","min":10}] },
        { id:"pa-d4-7", order:7, time:"14:30 ลงทะเบียน · 14:45–ราว 16:15", name:"CHAZUNA กิจกรรมโม่มัทฉะ รอบ 14:45 (จองแล้ว)", jpName:"茶づな 茶臼から抹茶づくり体験", lat:34.8900, lng:135.8105, navigationQuery:"CHAZUNA, 203-1 Todo Maruyama, Uji, Kyoto, Japan", category:"food", desc:"จองแล้ว 2 คน รอบ 14:45 ภาษาอังกฤษ ชำระแล้ว 5,600 เยน (2,800 × 2) รวมตั๋วพิพิธภัณฑ์ชา; ถึงจุดรับลงทะเบียนหน้าทางเข้า (front entrance) 14:30 ตามตั๋ว แสดง QR ในตั๋ว PDF; จุดนัด 京都府宇治市莵道丸山203-1; ยกเลิกก่อนวันงานอย่างน้อย 1 วันได้เงินคืน ภายใน 24 ชั่วโมงหรือไม่มาไม่คืนเงิน; กิจกรรมราว 60 นาที + พิพิธภัณฑ์ชาราว 30 นาที (ยังไม่ยืนยันจากร้าน); โทร 0774-24-2700 (09:00–17:00) เมื่อจะไปสาย", transportInfo:"เดินจาก Byodoin", cost:"2,800 JPY/ผู้ใหญ่ ชำระแล้ว", link:"https://uji-chazuna.kyoto/3221/", bookingLinks:[{ label:"CHAZUNA เว็บไซต์", url:"https://uji-chazuna.kyoto/" }], choiceNote:"จองแล้ว · รอบ 14:45 · ลงทะเบียน 14:30", warning:"ถึงจุดรับลงทะเบียน 14:30 · ยกเลิกภายใน 24 ชม. หรือไม่มา ไม่คืนเงิน", transit:[{"mode":"walk","from":"Byodoin","to":"CHAZUNA","min":5}] },
        { id:"pa-d4-8", order:8, time:"16:15–20:00", name:"Uji Omotesando แล้วกลับ Kyoto และมื้อเย็น Chojiro Sushi", jpName:"宇治 → 京都 / CHOJIRO", category:"food", lat:34.9840, lng:135.7600, desc:"เดินริมแม่น้ำ Uji และ Uji Omotesando ช่วงพระอาทิตย์ตกราว 16:45 ซื้อชาตามแรง แล้วรถไฟ JR Uji → Kyoto ราว 20–30 นาที กิน Chojiro Sushi ซูชิสายพานเกรดดีในห้าง Avanti ฝั่ง Hachijo — Night 4; เผื่อเวลาเดินข้ามสถานี สำรอง Sushi no Musashi / Katsugyu / Porta; ซื้อชากลับบ้าน: Nakamura Tokichi สาขาสถานี Kyoto (中村藤吉 京都駅店) มุมขายชา 銘茶売場 อยู่ชั้น 3 โซน Eat Paradise ใน JR Kyoto Isetan หน้าประตูตรวจตั๋ว JR ฝั่งตะวันตก (JR西口改札前) มุมขายชาเปิด 11:00–21:00 คาเฟ่ 11:00–22:00 วันหยุดตาม Isetan (ตรวจ 21 พ.ย.) อยู่ฝั่งตรงข้ามกับ Chojiro ให้แวะก่อนข้ามไปกินมื้อเย็น หรือหลังกินให้ถึงก่อน 21:00; ซื้อไม่ทันใช้วันที่ 6 ช่วงเข้าสถานีเป็นตัวสำรอง", transportInfo:"JR Nara Line กลับ Kyoto; ค่าโดยสารตรวจตามเส้นทางจริง", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Chojiro+Sushi+Kyoto+Station", optionalActivities:["ซื้อชา Nakamura Tokichi สถานี Kyoto · มุมขายชาเปิดถึง 21:00"], bookingLinks:[{ label:"Nakamura Tokichi สาขาสถานี Kyoto", url:"https://tokichi.jp/pages/kyoto-station-store-page" }], transit:[{"mode":"walk","from":"CHAZUNA","to":"Uji Omotesando","min":"5–10"},{"mode":"walk","from":"Uji Omotesando","to":"JR Uji 宇治","min":10},{"mode":"train","line":"JR Nara Line 奈良線","from":"JR Uji 宇治","to":"Kyoto 京都","min":"20–30","dir":"ไปทาง 京都 / Kyoto","tip":"Miyakoji Rapid みやこ路快速 เร็วที่สุด"},{"mode":"walk","from":"JR Kyoto","to":"Avanti / Chojiro (ฝั่ง Hachijo)","min":"5–10"}] }
      ]
    },
    {
      dayNum: 5,
      short: "Osaka day",
      critical: "Kaiyukan เป้าหมายรอบ 13:00 · กลับ Kyoto 60–90 นาที",
      risk: "ซื้อตั๋วระบุวัน/เวลาตามที่ว่าง; เมื่อช้าลดเดินสวนปราสาทก่อน",
      date: "5 ธ.ค. 2026 (เสาร์)",
      title: "Osaka Castle → Osaka Aquarium Kaiyukan → Dotonbori → Kyoto",
      theme: "Osaka Day Trip",
      color: "#00cec9",
      totalFareJPY: 2500,
      routeCoords: [[34.9858,135.7588],[34.6873,135.5262],[34.6545,135.429],[34.6654,135.5065],[34.6687,135.5013],[34.9858,135.7588]],
      checkpoints: [
        {"id":"pa-d5-1","order":1,"time":"08:00–09:30","name":"เดินทาง Kyoto → Osaka Castle","jpName":"JR京都 → 大阪城","category":"transport","lat":34.9858,"lng":135.7588,"desc":"JR Special Rapid Kyoto → Osaka แล้ว JR Loop Line → Osakajokoen เผื่อเดินเข้าสวนและรอรถ","transportInfo":"JR Special Rapid + JR Loop Line; ตรวจขบวนจริง","link":"https://www.google.com/maps/search/?api=1&query=Kyoto+Station", transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto","min":5},{"mode":"train","line":"JR Special Rapid 新快速","from":"Kyoto 京都","to":"Osaka 大阪","min":30,"dir":"ไปทาง 大阪・姫路 / Osaka"},{"mode":"train","line":"JR Osaka Loop Line 大阪環状線","from":"Osaka 大阪","to":"Osakajokoen 大阪城公園","min":10,"dir":"ไปทาง 京橋・鶴橋 / Kyobashi"},{"mode":"walk","from":"Osakajokoen","to":"Osaka Castle Park","min":"10–15"}] },
        {"id":"pa-d5-2","order":2,"time":"09:30–11:00","name":"Osaka Castle Park / วิวปราสาท","jpName":"大阪城公園","category":"spot","lat":34.6873,"lng":135.5262,"desc":"เน้นสวนทั่วไป คูน้ำและปราสาทภายนอกฟรี แล้วออกทาง Morinomiya; หากเข้า Tenshukaku 1,200 เยน ให้ใช้แทนเดินสวนยาว เปิด 09:00–18:00 รับถึง 17:30 เผื่อคิวให้ทัน Kaiyukan","transportInfo":"เดินผ่านปราสาทออกทาง Morinomiya ไม่วนครบสวน","cost":"สวนทั่วไปฟรี; Tenshukaku 1,200 JPY เป็นตัวเลือก","link":"https://www.osakacastle.net/guide/","optionalActivities":["ขึ้น Tenshukaku 1,200 เยนแทนเดินสวนยาว · เผื่อคิวให้ทัน Kaiyukan"], transit:[{"mode":"walk","from":"ทางเข้าสวน","to":"ปราสาท","min":"10–15"}] },
        {"id":"pa-d5-6","order":3,"time":"11:00–12:00","name":"เดินทาง Osaka Castle → Kaiyukan","jpName":"森ノ宮 → 大阪港","category":"transport","lat":34.6818,"lng":135.5247,"desc":"เดินไป Morinomiya แล้ว Chuo Line ตรงไป Osakako; จากทางออก 1 เดินประมาณ 5 นาทีถึง Kaiyukan เผื่อเดินออกจากสวนและรอรถ","transportInfo":"Osaka Metro Chuo Line: Morinomiya → Osakako","link":"https://www.kaiyukan.com/info/access/", transit:[{"mode":"walk","from":"Osaka Castle","to":"Morinomiya 森ノ宮","min":"10–15"},{"mode":"subway","line":"Osaka Metro Chuo Line 中央線","from":"Morinomiya 森ノ宮","to":"Osakako 大阪港","min":20,"dir":"ไปทาง コスモスクエア / Cosmosquare"},{"mode":"walk","from":"Osakako ทางออก 1","to":"Tempozan / Kaiyukan","min":5}] },
        {"id":"pa-d5-7","order":4,"time":"12:00–13:00","name":"มื้อกลางวันและพักแถว Tempozan","jpName":"天保山","category":"food","lat":34.6564,"lng":135.4306,"desc":"เลือกร้านคิวสั้นแถว Tempozan Marketplace และนั่งพักก่อนเข้ารอบ Kaiyukan","transportInfo":"เดินใกล้ Kaiyukan","cost":"อาหารประมาณ 1,000–2,000 JPY","link":"https://www.kaiyukan.com/", transit:[{"mode":"walk","from":"Osakako","to":"Tempozan Marketplace","min":5}] },
        {"id":"pa-d5-3","order":5,"time":"13:00–15:30","name":"Osaka Aquarium Kaiyukan","jpName":"海遊館","category":"spot","lat":34.6545,"lng":135.429,"desc":"เผื่อชม 2.5 ชั่วโมง เลือก e-ticket วันที่ 5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง; ราคาเปลี่ยนตามวัน ตั้งงบเผื่อ 3,500 เยน ตรวจราคาและที่ว่างก่อนซื้อ ตั๋วหน้างานอาจต้องรอรอบ","transportInfo":"เดินจาก Tempozan / Osakako ทางออก 1 ประมาณ 5 นาที","cost":"ตั้งงบเผื่อ 3,500 JPY; ปรับตามราคาจริง","link":"https://www.kaiyukan.com/info/ticket/kaiyukan/","choiceNote":"รอบเป้าหมาย 13:00 ตามที่ว่าง · ตรวจราคาและเวลาเปิดวันที่ 5 ธ.ค. ก่อนซื้อ","warning":"ออกแล้วกลับเข้าซ้ำไม่ได้ กินกลางวันและเข้าห้องน้ำก่อนเข้า", transit:[{"mode":"walk","from":"Tempozan Marketplace","to":"Kaiyukan","min":2}] },
        {"id":"pa-d5-8","order":6,"time":"15:30–16:15 เดินทาง / 16:15–17:15 Kuromon","name":"ตลาด Kuromon — ปลาดิบก่อนค่ำ","jpName":"黒門市場","category":"food","lat":34.6654,"lng":135.5065,"navigationQuery":"Kuromon Market, Osaka, Japan","desc":"Osakako → Chuo Line → Sakaisuji-Hommachi เปลี่ยน Sakaisuji Line ไป Nippombashi ซึ่งติดตลาด Kuromon แล้วแวะกินปลาดิบ ไคเซนดง หรือเนื้อวากิวเสียบไม้ในร้านที่มีที่นั่งกิน; Kuromon Sanpei (黒門三平) เว็บท่องเที่ยวระบุเปิด 09:00–18:30 นั่งกินได้ถึง 18:00 และปิดเมื่อของหมด (ตรวจ 19 พ.ย.) ร้านในตลาดมักปิดหรือของหมดช่วง 17:00–18:00 ถ้าถึงหลัง 16:45 ให้ข้ามไป Dotonbori เลย","transportInfo":"Osakako → Sakaisuji-Hommachi → Nippombashi แล้วเดินสั้น ๆ","cost":"อาหารตามจริง รวมในงบอาหาร","link":"https://www.gltjp.com/ja/directory/item/14539/","choiceNote":"ถึงหลัง 16:45 ให้ข้ามไป Dotonbori", transit:[{"mode":"walk","from":"Kaiyukan","to":"Osakako 大阪港","min":"5–10"},{"mode":"subway","line":"Osaka Metro Chuo Line 中央線","from":"Osakako 大阪港","to":"Sakaisuji-Hommachi 堺筋本町","min":17,"dir":"ไปทาง 長田 / Nagata"},{"mode":"subway","line":"Osaka Metro Sakaisuji Line 堺筋線","from":"Sakaisuji-Hommachi 堺筋本町","to":"Nippombashi 日本橋","min":4,"dir":"ไปทาง 天下茶屋 / Tengachaya","tip":"เปลี่ยนสายในสถานี ตามป้ายสีน้ำตาล"},{"mode":"walk","from":"Nippombashi ทางออก 10","to":"Kuromon Market","min":2}] },
        {"id":"pa-d5-4","order":7,"time":"17:15–19:15","name":"Dotonbori / Glico Sign และมื้อเย็น","jpName":"道頓堀","category":"shopping","lat":34.6687,"lng":135.5013,"desc":"เดินจาก Kuromon เข้า Dotonbori; เดินริมคลอง ถ่ายป้ายไฟ กิน Takoyaki / Okonomiyaki ตามคิว เช่น Wanaka หรือ Mizuno รอเกิน 30 นาทีเปลี่ยนร้าน","transportInfo":"เดินจาก Kuromon","cost":"อาหารตามตัวเลือก รวมในงบอาหาร","link":"https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Sign", transit:[{"mode":"walk","from":"Kuromon Market","to":"Dotonbori","min":"5–10"}] },
        {"id":"pa-d5-5","order":8,"time":"19:15–20:45","name":"กลับ Kyoto","jpName":"大阪 → 京都","category":"transport","lat":34.9858,"lng":135.7588,"desc":"เดินไป Namba → Metro Midosuji นั่งเลย Umeda ไปลง Shin-Osaka → JR Special Rapid Kyoto; เผื่อ 60–90 นาที กลับเร็วขึ้นได้เมื่อเหนื่อย — Night 5","transportInfo":"Metro + JR; ตรวจรอบจริง","link":"https://www.google.com/maps/search/?api=1&query=Kyoto+Station", transit:[{"mode":"walk","from":"Dotonbori","to":"Namba なんば","min":"5–10"},{"mode":"subway","line":"Osaka Metro Midosuji Line 御堂筋線","from":"Namba なんば","to":"Shin-Osaka 新大阪","min":15,"dir":"ไปทาง 新大阪・千里中央 / Shin-Osaka"},{"mode":"walk","from":"Metro Shin-Osaka","to":"JR Shin-Osaka ประตูกลาง","min":5,"tip":"ตามป้าย JR ชั้นบน"},{"mode":"train","line":"JR Special Rapid 新快速","from":"Shin-Osaka 新大阪","to":"Kyoto 京都","min":25,"dir":"ไปทาง 京都・米原 / Kyoto","tip":"Rapid / Local ก็ถึง Kyoto แต่ช้ากว่า; อย่าขึ้น Shinkansen"},{"mode":"walk","from":"JR Kyoto","to":"APA Hotel","min":5}] }
      ]
    },
    {
      dayNum: 6,
      short: "กลับไทย",
      critical: "ออกจาก Nishiki ไม่เกิน 11:15 · ถึง T2 ไม่เกิน 16:00",
      risk: "ออกจาก Fushimi หลัง 09:30 ให้งดตลาด; กลับโรงแรมราว 12:00 รับกระเป๋า/เข้าสถานี 12:00–13:00",
      date: "6 ธ.ค. 2026 (อาทิตย์)",
      title: "Fushimi ช่วงล่าง → Nishiki แบบสั้น → รับกระเป๋า → Haruka → KIX T2",
      theme: "Fushimi Inari, Nishiki & Return Flight",
      color: "#e17055",
      totalFareJPY: 3300,
      routeCoords: [[34.9878,135.7612],[34.9671,135.7727],[35.0036,135.7765],[35.005,135.7649],[34.9878,135.7612],[34.9858,135.7588],[34.4389,135.2323]],
      checkpoints: [
        { id:"pa-d6-1", order:1, time:"07:30–08:00", name:"เช็คเอาท์และฝากกระเป๋า", jpName:"チェックアウト", category:"transport", lat:34.9878, lng:135.7612, desc:"เช็คเอาท์และยืนยันเวลารับกระเป๋ากับโรงแรม เช็คเอาท์กำหนด 10:00; หากฝนหนักหรือรถมีปัญหาให้ตัด Fushimi และ Nishiki แล้วอยู่รอบสถานี", transportInfo:"เดินไป JR Kyoto Station", cost:"0 JPY (ยืนยันนโยบายฝากกระเป๋า)", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/" },
        { id:"pa-d6-2", order:2, time:"08:00–09:15 · รวมเดินทาง", name:"Fushimi Inari ช่วงล่างแบบสั้น", jpName:"伏見稲荷大社", category:"spot", lat:34.9671, lng:135.7727, desc:"JR Nara Line ที่จอด Inari; ชมศาลเจ้า/โทริอิช่วงล่าง 08:30–09:15 ไม่ขึ้นยอดเขา ถ้าอยากเดินนานให้งด Nishiki; ออกจาก Fushimi หลัง 09:30 ให้กลับ Kyoto Station โดยไม่แวะตลาด", transportInfo:"JR Kyoto → Inari; จากนั้นเดินไป Keihan Fushimi-inari เมื่อต่อ Nishiki", link:"https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha", transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto","min":5},{"mode":"train","line":"JR Nara Line 奈良線","from":"Kyoto 京都","to":"Inari 稲荷","min":5,"dir":"ไปทาง 奈良 / Nara","board":"ชานชาลา 8–10","tip":"ขึ้นขบวน 普通 Local เท่านั้น; Rapid / Miyakoji Rapid ไม่จอด Inari"},{"mode":"walk","from":"Inari","to":"ประตู Fushimi Inari","min":1}] },
        { id:"pa-d6-3", order:3, time:"09:15–12:00 · รวมเดินทาง", name:"Nishiki Market แบบสั้น แล้วกลับโรงแรม", jpName:"錦市場", category:"shopping", lat:35.005, lng:135.7649, desc:"Keihan Fushimi-inari → Gion-shijo แล้วเดิน 15–20 นาที เผื่อถึงตลาด 10:15; ชิม/กินสั้น 10:15–11:15 ร้านเปิดต่างกันตามร้าน รับประทานในพื้นที่ร้าน ไม่รอคิวยาว; ออกจากตลาดไม่เกิน 11:15 กลับโรงแรมราว 12:00; Ippodo เป็นตัวเลือกแทนตลาดเท่านั้น (ดูสถานที่ทดแทนในหน้าข้อมูลทริป)", transportInfo:"Keihan → Gion-shijo แล้วเดิน; กลับ Subway Shijo → Kyoto และเดินถึงโรงแรม", cost:"อาหารตามจริง; รถรวมในงบประมาณ", link:"https://www.kyoto-nishiki.or.jp/en/contact/", optionalActivities:["Ippodo แทน Nishiki เพียงแห่งเดียว ไม่ทำทั้งสองแห่ง"], choiceNote:"ออกจากตลาดไม่เกิน 11:15; ถ้าออกจาก Fushimi หลัง 09:30 ให้งดตลาด", transit:[{"mode":"walk","from":"Fushimi Inari","to":"Keihan Fushimi-inari 伏見稲荷","min":5},{"mode":"train","line":"Keihan Main Line 京阪本線","from":"Fushimi-inari 伏見稲荷","to":"Gion-shijo 祇園四条","min":10,"dir":"ไปทาง 出町柳 / Demachiyanagi"},{"mode":"walk","from":"Gion-shijo","to":"Nishiki Market (ข้ามสะพาน Shijo ไปทางตะวันตก)","min":"15–20"}] },
        { id:"pa-d6-4", order:4, time:"12:00–13:00", name:"รับกระเป๋าและเตรียมขึ้น Haruka", jpName:"京都駅", category:"transport", lat:34.9858, lng:135.7588, desc:"รับกระเป๋าและเข้าสถานี ไม่เริ่มกิจกรรมใหม่; ถ้ายังไม่ได้ซื้อชาเมื่อวันที่ 4 แวะ Nakamura Tokichi สาขาสถานี Kyoto มุมขายชาชั้น 3 Eat Paradise ใน JR Kyoto Isetan เปิด 11:00 (ตรวจ 21 พ.ย.) ใช้เวลาไม่เกิน 15 นาทีแล้วไปชานชาลา Haruka; เลือก/จอง Haruka ช่วงประมาณ 13:30–14:00 ให้ถึงสถานี KIX ราว 15:00–15:30", transportInfo:"JR Haruka; จองขากลับและตรวจผลิตภัณฑ์ตั๋ว", cost:"Haruka 2,700 JPY รวมในงบ", warning:"Haruka WEST QR: กด Use ticket อย่างน้อย 3 นาทีก่อนขบวนที่จองออก ไม่อย่างนั้นที่นั่งถูกยกเลิกอัตโนมัติ", link:"https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/", transit:[{"mode":"walk","from":"Nishiki Market","to":"Subway Shijo 四条","min":"5–10"},{"mode":"subway","line":"Subway Karasuma Line 烏丸線","from":"Shijo 四条","to":"Kyoto 京都","min":4,"dir":"ไปทาง 竹田 / Takeda"},{"mode":"walk","from":"Subway Exit A5","to":"APA Hotel แล้วกลับสถานีพร้อมกระเป๋า","min":5}] },
        { id:"pa-d6-5", order:5, time:"15:00–16:00", name:"Aeroplaza ชั้น 1 → Shuttle ฟรี → KIX T2 International", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"เป้าหมายถึง T2 ไม่เกิน 16:00 เผื่อเดิน/รอ Shuttle รวมประมาณ 30 นาที; ยืนยันสินค้าคืนภาษีก่อนโหลดกระเป๋าที่บรรจุสินค้า แล้วเช็คอินตามขั้นตอนที่เปิดจริง", transportInfo:"Aeroplaza ชั้น 1 → Free Shuttle ไป T2", cost:"0 JPY (Shuttle ฟรี)", link:"https://www.kansai-airport.or.jp/en/faq/1101", transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto ชานชาลา 30","min":10,"tip":"ชานชาลา 30 อยู่ฝั่งตะวันตกสุด เผื่อเดินพร้อมกระเป๋า"},{"mode":"train","line":"JR Limited Express Haruka 特急はるか","from":"Kyoto 京都","to":"Kansai Airport 関西空港","min":"75–80","dir":"ไปทาง 関西空港 / Kansai Airport","board":"ชานชาลา 30"},{"mode":"walk","from":"JR Kansai Airport","to":"Aeroplaza ชั้น 1","min":5},{"mode":"shuttle","line":"Free Shuttle Bus (ฟรี)","from":"Aeroplaza (T1)","to":"KIX T2","min":10,"dir":"ไปทาง Terminal 2"}] },
        { id:"pa-d6-6", order:6, time:"16:00–19:15", name:"KIX T2 International และ Peach MM091", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"Tax-free: จ่ายรวมภาษีก่อน ยืนยันการนำออกก่อนโหลดกระเป๋าที่บรรจุสินค้า ใช้ Kiosk หรือ VJW ในพื้นที่ Wi-Fi ที่กำหนดก่อนจุดตรวจความปลอดภัย หากถูกเลือกตรวจให้นำสินค้าไปศุลกากร ร้านคืนเงินตามวิธีที่ลงทะเบียน; Peach เช็คอิน 150–50 นาทีก่อนออก (16:45–18:25 สำหรับ 19:15) ให้เสร็จก่อนปิด; มื้อเย็นหลังผ่านตรวจความปลอดภัย: 日本のごちそう ชั้น 1 ฝั่ง International เปิดถึง 22:25", transportInfo:"Peach MM091 ออก 19:15; ตรวจข้อมูลวันเดินทาง", cost:"0 JPY", link:"https://www.flypeach.com/sg/lm/ai/airports/airportguide_international/kix" }
      ]
    }
  ]
};

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
