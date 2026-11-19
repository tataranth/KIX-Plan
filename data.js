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
    transport: { minJPY: 13900, maxJPY: 13900, note: "รวม Haruka ซื้อใหม่ 2,700 เยน × 2 เที่ยวและเงินเผื่อรายวัน; หากมีตั๋วเดิมให้ปรับตามราคาซื้อจริง ไม่รวมแท็กซี่" },
    meals: { minJPY: 25000, maxJPY: 34000, note: "ไม่รวม CHAZUNA ซึ่งนับรวมในค่าเข้าชมและกิจกรรมชา" },
    admissions: { minJPY: 9000, maxJPY: 11500, note: "รวม CHAZUNA งบเผื่อ 1,500 และ Kaiyukan งบเผื่อ 3,500; ปรับตามราคาจริง" },
    accommodationTax: { minJPY: 2000, maxJPY: 2000, note: "สมมติ 400 เยน × 5 คืน; ยืนยันจากราคาห้องต่อคนต่อคืน" },
    beforeReserve: { minJPY: 49900, maxJPY: 61400 },
    reserve: { minJPY: 5000, maxJPY: 5000, note: "เงินสำรองบางส่วน ไม่ใช่งบรับประกันกิจกรรมเสริม" },
    total: { minJPY: 54900, maxJPY: 66400 },
    accommodationTaxBands: [
      { threshold: "ต่ำกว่า 6,000 เยน", amountJPY: 200 },
      { threshold: "6,000–ต่ำกว่า 20,000 เยน", amountJPY: 400 },
      { threshold: "20,000–ต่ำกว่า 50,000 เยน", amountJPY: 1000 },
      { threshold: "50,000–ต่ำกว่า 100,000 เยน", amountJPY: 4000 },
      { threshold: "ตั้งแต่ 100,000 เยน", amountJPY: 10000 }
    ],
    admissionBaseJPY: 7500,
    kaiyukanEstimateJPY: 3500,
    chazunaEstimateJPY: 1500,
    phoenixHallExtraJPY: 300
  },

  // วันแรกของทริปตามเวลาญี่ปุ่น ใช้เลือก "วันนี้" อัตโนมัติระหว่างเดินทาง
  tripStartDate: "2026-12-01",

  // ข้อความท้ายหน้า: ปรับเมื่อแก้แผน
  footerNote: "ปรับแผนล่าสุด 19 พ.ย. 2026 · ข้อมูลสถานที่หลักตรวจ 14 พ.ย. ตามแหล่งที่แนบ · เวลารายวันเป็นกรอบวางแผน เผื่อเดินทางและรอ ไม่ใช่รอบรถที่จองแล้ว · ยังต้องยืนยันที่ว่างกิจกรรม วันเปิดพิเศษของร้าน และรอบรถจริง · ตรวจใบจองและประกาศก่อนเดินทาง",


  preTripChecklist: [
    "เทียบ MM092/MM091 เวลา กระเป๋า และเงื่อนไขเช็คอินกับใบจองล่าสุด",
    "ยืนยันฝากกระเป๋าและภาษีที่พักจากราคาต่อคนต่อคืนกับโรงแรม",
    "Day 4: จอง CHAZUNA กิจกรรมโม่มัทฉะวันที่ 4 ธ.ค. รอบประมาณ 10:30 ตรวจราคา ระยะเวลา และเงื่อนไขยกเลิกตอนจอง; จองไม่ได้ให้ใช้ Taiho-an เป็นตัวสำรอง",
    "Haruka ซื้อก่อนออกเดินทางเพราะตั๋วส่วนลดซื้อในญี่ปุ่นไม่ได้ ตั้งงบ 2,700 เยน/เที่ยว หากมีตั๋วเดิมตรวจเงื่อนไขก่อน เลือกช่องทางให้ชัด; จองขากลับเพื่อรักษาเป้าหมายถึง T2 16:00",
    "Day 2: ตรวจเวลาเปิดและค่าเข้า Tenjuan; โทรยืนยันว่า Hisago เปิดวันพุธ 2 ธ.ค. (075-561-2109); เลือกร้านมื้อเย็นแถว Pontocho / Kawaramachi ที่เปิดวันพุธ เพราะ Menami หยุดวันพุธ",
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
    { icon: "fa-ticket", title: "Kaiyukan — จองวันและเวลา", desc: "5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง ราคาเปลี่ยนตามวัน งบเผื่อ 3,500 เยนยังไม่ใช่ราคายืนยัน ตรวจราคา เวลาเปิดและที่ว่างก่อนซื้อ ตั๋วหน้างานอาจต้องรอรอบ", link: "https://www.kaiyukan.com/info/ticket/kaiyukan/", linkLabel: "Kaiyukan — ราคาและตั๋ว" },
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
    {"icon":"fa-landmark","title":"Byodoin — ภายใน Phoenix Hall","desc":"จำกัด 35 คน/รอบตั้งแต่ 16 ต.ค. อาจรอนานขึ้น พลาดรอบแล้วเปลี่ยนเวลาหรือคืนเงินไม่ได้; เลือกรอบที่จบก่อนรอบ CHAZUNA อย่างน้อย 15 นาที วันศุกร์อาจคิวยาวกว่าวันพุธ งานซ่อมเดือน พ.ย. ยังไม่ทับ 4 ธ.ค. ตามกำหนดปัจจุบัน","link":"https://www.byodoin.or.jp/news/cat23/20261016/","linkLabel":"Byodoin — ประกาศจำนวนคน"},
    {"icon":"fa-mug-hot","title":"CHAZUNA — กิจกรรมโม่มัทฉะ","desc":"4 ธ.ค. กิจกรรมจัดทุกวัน ต้องจองล่วงหน้าผ่านเว็บไซต์ CHAZUNA เปิด 09:00–17:00 ไม่มีวันหยุดประจำ (ตรวจ 19 พ.ย.); ราคา ระยะเวลา รอบเวลา และกำหนดจองล่วงหน้ายังไม่ยืนยันจากหน้าเว็บ งบเผื่อ 1,500 เยน สอบถาม 0774-24-2700","link":"https://uji-chazuna.kyoto/event/#experience","linkLabel":"CHAZUNA — หน้าจอง","secondaryLink":"https://uji-chazuna.kyoto/3221/","secondaryLinkLabel":"CHAZUNA — ตารางเดือน ธ.ค."},
    {"icon":"fa-leaf","title":"ใบไม้แดง — ตรวจ 14 พ.ย.","desc":"Arashiyama / Tenryuji เข้าช่วงสวยแล้ว คาดสวยสุดราว 17 พ.ย. วันที่ 3 ธ.ค. จึงน่าจะเป็นปลายช่วง; Eikando เริ่มเปลี่ยนสีราว 20% คาดสวยปลาย พ.ย.–ต้น ธ.ค. และเริ่มร่วงราว 5 ธ.ค.; Kiyomizu และ Byodoin เริ่มเปลี่ยนสี; Shimogamo ยังเขียว ปกติสวยต้น–กลาง ธ.ค. เป็นพยากรณ์ ไม่รับประกันสีใบไม้ ตรวจสภาพจริงและวันหยุดร้านอีกครั้ง 24–27 พ.ย.","link":"https://tenki.jp/kouyou/6/29/","linkLabel":"tenki.jp — Kyoto","secondaryLink":"https://weathernews.jp/koyo/spot/26120/","secondaryLinkLabel":"Weathernews — Eikando"}
  ],

  alternatives: [
    { name: "Ippodo / Kaboku", replaces: "Nishiki ใน Day 6 เมื่อให้ความสำคัญกับชา", note: "เลือกแห่งเดียว ซื้อชา/ดื่มสั้น 10:30–11:15 ตามคิว แล้วกลับโรงแรมราว 12:00; ร้านเปิด 10:00–17:00 สั่งสุดท้าย 16:30 หยุดพุธที่สองของเดือน ตรวจประกาศพิเศษ", link: "https://global.ippodo-tea.co.jp/pages/store-kyoto" },
    {
      name: "Kenninji",
      replaces: "Kiyomizu ใน Day 2 เมื่อฝนตกหรือไม่ไหวกับเนิน",
      note: "เริ่ม 10:00 โดยงด Kiyomizu / Asahido แล้วกินกลางวันก่อนต่อ Nanzenji / Eikando ตามแผน; รับเข้าถึง 16:30 ปิด 17:00 ค่าเข้า 800 เยนในทริปนี้ (ขึ้นเป็น 1,000 เยน 1 ม.ค. 2027); งดคัดพระสูตร 1 พ.ย.–6 ธ.ค. ตามประกาศ 22 ต.ค.",
      link: "https://www.kenninji.jp/access/"
    },
    {
      name: "Taiho-an",
      replaces: "CHAZUNA ใน Day 4 เมื่อจองไม่ได้",
      note: "ร้านชาของเมือง Uji ใกล้ Byodoin: Usucha 1,500 เยน ราว 20–30 นาที หรือคอร์สลงมือชง 3,600 เยน ราว 40 นาที (จองก่อนอย่างน้อย 3 วัน); ปิด 21–31 ธ.ค. ส่วนปฏิทินวันที่ 4 ธ.ค. ยังไม่ได้ตรวจ ต้องจองรอบ หากยังไป Nara ให้ออก Uji ไม่เกิน 13:00",
      link: "https://www.kyoto-uji-kankou.or.jp/taihoan-en.html"
    },
  ],

  contingencies: [
    { title: "Day 1: พักก่อน เที่ยวเย็นตามแรง", detail: "รักษาเช็คอิน 15:00 และนอนพักถึงราว 17:30; งด Gion / Pontocho ได้ทั้งหมด ถ้าถึงหลัง 15:00 ให้เช็คอินก่อนแล้วค่อยกิน" },
    { title: "Day 2: Kiyomizu / Eikando", detail: "วันนี้ยาวที่สุดและต่อจากวันมาถึง เมื่อช้าลดเวลาเดินถนนเก่าและเวลาชม Nanzenji ก่อน งด Tenjuan แต่เก็บเวลานั่งพัก ถ้าคิว Hisago เกิน 30 นาทีให้เปลี่ยนร้าน" },
    { title: "Day 3: Shimogamo งดได้", detail: "คง Arashiyama → Randen → Kinkakuji เป็นหลัก ถ้าออกจาก Kinkakuji หลัง 15:30 ให้งด Shimogamo แล้วกลับ Kyoto Station; คิวมื้อกลางวันยาวให้ลดร้านเสริมก่อน" },
    { title: "Day 4: Uji / Nara ช้า", detail: "คงรอบ CHAZUNA ที่จอง ตัด Phoenix Hall ภายในและการช้อปก่อน; หากออก Uji หลัง 13:00 ให้ไป Todaiji ก่อน เผื่อรถบัส Nara ล่าช้า" },
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
        { id:"pa-d1-2", order:2, time:"ประมาณ 12:15–12:45", name:"ฝากกระเป๋าที่ APA Hotel Kyoto Ekihigashi", jpName:"APAホテル〈京都駅東〉", category:"transport", lat:34.9878, lng:135.7612, desc:"ถึงโรงแรมผ่าน JR Kyoto Station Central Gate เดินราว 3 นาที หรือ Subway Exit A5 ราว 1 นาที; เช็คอิน 15:00 เช็คเอาท์ 10:00 ยืนยันเงื่อนไขฝากกระเป๋ากับโรงแรม", transportInfo:"เดินจาก Kyoto Station Central Gate / Subway Exit A5", cost:"0 JPY (ตรวจนโยบายโรงแรม)", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/", transit:[{"mode":"shuttle","line":"Free Shuttle Bus (ฟรี)","from":"KIX T2","to":"Aeroplaza (T1)","min":10,"dir":"ไปทาง Terminal 1 / Aeroplaza"},{"mode":"walk","from":"Aeroplaza ชั้น 1","to":"JR Kansai Airport Station","min":5},{"mode":"train","line":"JR Limited Express Haruka 特急はるか","from":"Kansai Airport 関西空港","to":"Kyoto 京都","min":"75–80","dir":"ไปทาง 京都 / Kyoto","tip":"ถึงชานชาลา 30 ฝั่งตะวันตกสุดของสถานี เดินถึง Central Gate ราว 5–10 นาที"},{"mode":"walk","from":"Kyoto Station Central Gate","to":"APA Hotel","min":3}] },
        { id:"pa-d1-3", order:3, time:"12:45–15:00", name:"กินใกล้โรงแรม แล้วนั่งพักรอเช็คอิน", jpName:"京都駅 / ポルタ", category:"food", lat:34.9858, lng:135.7588, desc:"แผนหลัก Sushi no Musashi ซูชิสายพานฝั่ง Hachijo Gate สำรอง Porta / ร้านรอบสถานีตามคิว; 14:00–15:00 นั่งพัก ไม่เพิ่มวัดหรือช้อป ถามเข้าห้องก่อนเวลาได้แต่ไม่ตั้งสมมติฐานว่าจะได้ห้อง", transportInfo:"เดินใกล้โรงแรมและสถานี ไม่ไป Nishiki วันนี้", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Sushi+no+Musashi+Kyoto+Station", transit:[{"mode":"walk","from":"APA Hotel","to":"ร้านฝั่ง Hachijo Gate / Porta","min":"5–10","tip":"เดินผ่านในสถานี Kyoto"}] },
        { id:"pa-d1-4", order:4, time:"15:00–17:30", name:"เช็คอิน อาบน้ำ และนอนพัก", jpName:"APAホテル〈京都駅東〉", category:"transport", lat:34.9878, lng:135.7612, desc:"ช่วงพักหลักของวัน เริ่มเช็คอิน 15:00 ตามโรงแรม ตั้งปลุกแล้วประเมินแรงอีกครั้ง; ตื่นช้าได้โดยลดหรืองดเที่ยวเย็น", transportInfo:"พักในโรงแรม", cost:"ค่าห้องตามการจอง", link:"https://www3.apahotel.com/hotel/kansai/kyoto/kyoto-ekihigashi/" },
        { id:"pa-d1-5", order:5, time:"17:30–19:00 · ถ้ามีแรง", name:"เดินทางไป Gion / ริม Kamo แล้วเดินสั้น ๆ", jpName:"祇園 / 鴨川", category:"spot", lat:35.0036, lng:135.7765, desc:"เผื่อเดินทาง 17:30–18:15 แล้วเลือกเดิน Gion หรือริม Kamo ระยะสั้น; งดได้ทั้งหมดเมื่อยังเพลีย ไม่เดินขึ้น Kiyomizu คืนนี้ เคารพป้ายห้ามเข้า/ถ่ายภาพ แวะ Gion Tsujiri เฉพาะเมื่อเปิดและคิวสั้น", transportInfo:"รถสาธารณะตามเส้นทางจริง แล้วเดินสั้น ๆ", cost:"ตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Gion+Kyoto", optionalActivities:["งดเที่ยวเย็นได้ทั้งหมดเมื่อเพลีย", "Gion Tsujiri เฉพาะเมื่อเปิดและคิวสั้น"], transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto","min":5},{"mode":"train","line":"JR Nara Line 奈良線","from":"Kyoto 京都","to":"Tofukuji 東福寺","min":3,"dir":"ไปทาง 奈良 / Nara","board":"ชานชาลา 8–10","tip":"ขึ้นขบวน 普通 Local; Rapid / Miyakoji Rapid ไม่จอด Tofukuji"},{"mode":"train","line":"Keihan Main Line 京阪本線","from":"Tofukuji 東福寺","to":"Gion-shijo 祇園四条","min":5,"dir":"ไปทาง 出町柳 / Demachiyanagi","tip":"แตะบัตรออกฝั่ง JR แล้วแตะเข้าฝั่ง Keihan ในสถานีเดียวกัน"},{"mode":"walk","from":"Gion-shijo","to":"Gion / ริม Kamo","min":5}] },
        { id:"pa-d1-6", order:6, time:"19:00–20:45", name:"มื้อเย็นตามแรง แล้วกลับโรงแรม", jpName:"先斗町 / 河童寿司", category:"food", lat:35.0056, lng:135.7712, desc:"กินใกล้จุดที่อยู่; Pontocho / Kappa Sushi เป็นตัวเลือกถ้ายังไหวและร้านเปิด/คิวเหมาะสม งบอาหารเดิม 2,500–4,000 เยน ไม่จองมื้อที่ยกเลิกยาก; กลับโรงแรมราว 20:00–20:45 หรือกินใกล้โรงแรมแล้วพักต่อ", transportInfo:"เดินทางตามแรงและตำแหน่งร้านจริง", cost:"อาหารประมาณ 2,500–4,000 JPY", link:"https://www.google.com/maps/search/?api=1&query=Pontocho+Kappa+Sushi", choiceNote:"เลือกร้าน Pontocho หรือมื้อใกล้โรงแรมตามแรง", transit:[{"mode":"walk","from":"Gion / Pontocho","to":"Keihan Gion-shijo","min":"5–10"},{"mode":"train","line":"Keihan Main Line 京阪本線","from":"Gion-shijo 祇園四条","to":"Tofukuji 東福寺","min":5,"dir":"ไปทาง 淀屋橋 / Yodoyabashi","back":true},{"mode":"train","line":"JR Nara Line 奈良線","from":"Tofukuji 東福寺","to":"Kyoto 京都","min":3,"dir":"ไปทาง 京都 / Kyoto"},{"mode":"walk","from":"JR Kyoto","to":"APA Hotel","min":5}] }
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
        {"id":"pa-d2-1","order":1,"time":"07:15–09:20 · รวมเดินทาง","name":"Kiyomizu-dera เช้า","jpName":"清水寺","category":"spot","lat":34.9949,"lng":135.785,"desc":"ออกโรงแรม 07:15 เผื่อรถและเดินขึ้นเนิน เข้าวัดประมาณ 08:00–09:20 วัดเปิด 06:00 ค่าเข้า 500 เยน; ไฟประดับฤดูใบไม้แดงปี 2026 จบ 30 พ.ย. จึงชมเช้าตามแผน รักษาเวลานั่งพักช่วงบ่าย","transportInfo":"รถสาธารณะและเดินขึ้นเนิน; แท็กซี่คิดเพิ่มหากเลือกใช้","cost":"500 JPY","link":"https://www.kiyomizudera.or.jp/en/location/", transit:[{"mode":"walk","from":"APA Hotel","to":"Kyoto Station Bus Terminal ฝั่งเหนือ (Karasuma)","min":"5–8"},{"mode":"bus","line":"City Bus 206 (หรือ 86)","from":"Kyoto Station 京都駅前","to":"Gojozaka 五条坂 / Kiyomizu-michi 清水道","min":16,"dir":"ป้ายหน้ารถมีคำว่า 清水寺 (Kiyomizu-dera)","board":"ป้าย D2","tip":"ขึ้นประตูหลัง แตะ IC ตอนลงประตูหน้า; ช่วงสายรถแน่น ไปเช้าตามแผน"},{"mode":"walk","from":"ป้ายรถบัส","to":"Kiyomizu-dera (เดินขึ้นเนิน)","min":"10–15"}] },
        {"id":"pa-d2-9","order":2,"time":"09:30–11:15","name":"Asahido + Sannenzaka / Ninenzaka","jpName":"朝日堂 / 三年坂 / 二寧坂","category":"shopping","lat":34.9958,"lng":135.7828,"desc":"Asahido สาขาหลักเปิด 09:30–18:00 แวะ 15–25 นาทีแล้วเดินถนนเก่าตามแรงโดยไม่ต้องเร่ง","transportInfo":"เดินลงจาก Kiyomizu แล้วเดินต่อทาง Yasaka Shrine","cost":"ซื้อของตามจริง","link":"https://www.asahido.co.jp/shops/", transit:[{"mode":"walk","from":"Kiyomizu-dera","to":"Sannenzaka / Asahido","min":5,"tip":"เดินลงเนิน"}] },
        {"id":"pa-d2-3","order":3,"time":"11:15–12:30","name":"มื้อกลางวัน Hisago (โอยาโกะดง)","jpName":"ひさご","category":"food","lat":35.0003,"lng":135.7806,"navigationQuery":"Hisago, Shimogawara, Higashiyama, Kyoto, Japan","desc":"ร้านโอยาโกะดง (ข้าวหน้าไก่และไข่) เก่าแก่ตั้งแต่ปี 1930 บนถนน Shimogawara ใกล้ประตู Yasaka Shrine อยู่ทางลงจากถนนเก่า งบ 1,000–2,000 เยน; ร้านเปิด 11:30–16:00 สั่งสุดท้าย 15:30 วันพุธเปิด น่าจะหยุดจันทร์และศุกร์ ตาม gurunavi (ตรวจ 19 พ.ย. เป็นเว็บรีวิว ไม่ใช่เว็บร้าน) ยืนยันทางโทรศัพท์ 075-561-2109 ไปต่อคิวก่อนเปิด ไข่ทำแบบสุกไม่เต็มที่ ถ้าคิวเกิน 30 นาทีให้เปลี่ยนร้านแถว Gion; หมุดแผนที่เป็นตำแหน่งโดยประมาณ","transportInfo":"เดินจาก Sannenzaka / Ninenzaka ไปทาง Yasaka Shrine","cost":"ประมาณ 1,000–2,000 JPY","link":"https://gurunavi.com/ja/kan9300/rev/rst", transit:[{"mode":"walk","from":"Ninenzaka","to":"Hisago (ใกล้ Yasaka Shrine)","min":10}] },
        {"id":"pa-d2-5","order":4,"time":"12:30–13:15 เดินทาง / 13:15–14:30 วัด","name":"Nanzenji และ Suirokaku","jpName":"南禅寺 / 水路閣","category":"spot","lat":35.0112,"lng":135.7939,"desc":"แผนหลักชมภายนอก; อาคาร/สวนที่เก็บค่าเข้าเป็นตัวเลือก","transportInfo":"เดินไป Subway Higashiyama → Keage (สาย Tozai หนึ่งสถานี) แล้วเดิน เผื่อรวมประมาณ 45 นาที; ตรวจขบวนจริง","cost":"ภายนอก 0 JPY; ส่วนอื่นตามจริง","link":"https://www.google.com/maps/search/?api=1&query=Nanzenji+Temple", transit:[{"mode":"walk","from":"Hisago","to":"Subway Higashiyama 東山","min":15},{"mode":"subway","line":"Subway Tozai Line 東西線","from":"Higashiyama 東山","to":"Keage 蹴上","min":2,"dir":"ไปทาง 六地蔵 / Rokujizo หรือ 浜大津"},{"mode":"walk","from":"Keage ทางออก 1","to":"Nanzenji (ลอดอุโมงค์ Nejiri-manpo)","min":10}] },
        {"id":"pa-d2-6","order":5,"time":"14:30–15:15 Tenjuan / 15:15–16:30 พัก","name":"Tenjuan แล้วพักยาวแถว Nanzenji","jpName":"天授庵 / ブルーボトル","category":"nature","lat":35.0109,"lng":135.7922,"navigationQuery":"Tenjuan, Nanzenji, Kyoto, Japan","desc":"Tenjuan วัดย่อยติดประตู Sanmon ของ Nanzenji ชมสวนใบไม้แดงช่วงสั้น ไม่ต้องจอง แล้วนั่งพัก Blue Bottle / คาเฟ่ใกล้เคียงตามคิว; ยังไม่ได้ยืนยันเวลาเปิดและค่าเข้า Tenjuan จากแหล่งทางการ (ตรวจ 19 พ.ย. เว็บ Nanzenji ไม่มีข้อมูล) ค่าเข้าจึงไม่รวมในงบ ตรวจหน้างานและเข้าก่อน 15:30; ถ้าเหนื่อยให้งด Tenjuan แล้วนั่งคาเฟ่ตั้งแต่ 14:30; หมุดแผนที่เป็นตำแหน่งโดยประมาณ","transportInfo":"เดินสั้น ๆ ในย่าน Nanzenji","cost":"Tenjuan ค่าเข้าตามจริง (ยังไม่ยืนยัน) / คาเฟ่ตามจริง","link":"https://www.google.com/maps/search/?api=1&query=Tenjuan+Nanzenji+Kyoto","choiceNote":"Tenjuan งดได้ · รักษาเวลานั่งพักไว้","optionalActivities":["Tenjuan · ค่าเข้ายังไม่ยืนยัน"], transit:[{"mode":"walk","from":"Nanzenji Sanmon","to":"Tenjuan / คาเฟ่","min":5}] },
        {"id":"pa-d2-7","order":6,"time":"16:30–19:00","name":"Eikando รอบค่ำ","jpName":"永観堂 禅林寺","category":"spot","lat":35.0144,"lng":135.7956,"desc":"เผื่อเดินจากจุดพัก 20–30 นาทีและคิว; ประกาศปี 2026 ระบุ 20 พ.ย.–6 ธ.ค. รับเข้าชม 17:30–20:30 ปิด 21:00 ค่าเข้า 1,000 เยน รอบกลางวัน/กลางคืนแยกตั๋ว ตรวจประกาศก่อนวันจริง","transportInfo":"เดิน 20–30 นาทีจากจุดพักโดยประมาณ","cost":"1,000 JPY","link":"https://www.eikando.or.jp/osirase.html", transit:[{"mode":"walk","from":"Nanzenji","to":"Eikando","min":"10–15"}] },
        {"id":"pa-d2-8","order":7,"time":"ประมาณ 19:00–21:45","name":"เดินทางและมื้อเย็นแถว Pontocho / Kawaramachi","jpName":"先斗町 / 河原町","category":"food","lat":35.0068,"lng":135.7710,"desc":"เผื่อเดินไป Keage ต่อ Subway Tozai → Sanjo Keihan แล้วเลือกร้านปลาดิบหรือร้านเนื้อคิวสั้นแถว Pontocho / Kawaramachi งบ 2,500–4,000 เยน; ถ้าเหนื่อยให้กลับไปกิน Chojiro Sushi ที่สถานี Kyoto แทน Menami หยุดวันพุธจึงไม่ใช้วันนี้; ขากลับขึ้น Subway จาก Kyoto Shiyakusho-mae เปลี่ยนสายที่ Karasuma Oike แล้วไป Kyoto — Night 2","transportInfo":"เดินไป Keage → Subway Tozai → Sanjo Keihan; ขากลับ Kyoto Shiyakusho-mae → เปลี่ยนสาย Karasuma Oike → Kyoto","cost":"มื้อเย็นประมาณ 2,500–4,000 JPY","link":"https://www.google.com/maps/search/?api=1&query=Pontocho+Kyoto","choiceNote":"ร้านปลาดิบหรือเนื้อแถว Pontocho หรือ Chojiro Sushi ที่สถานีเมื่อเหนื่อย", transit:[{"mode":"walk","from":"Eikando","to":"Subway Keage 蹴上","min":"15–20"},{"mode":"subway","line":"Subway Tozai Line 東西線","from":"Keage 蹴上","to":"Sanjo Keihan 三条京阪","min":4,"dir":"ไปทาง 太秦天神川 / Uzumasa Tenjingawa"},{"mode":"walk","from":"Sanjo Keihan","to":"Pontocho / Kawaramachi","min":"5–10"},{"mode":"walk","from":"ร้านอาหาร","to":"Subway Kyoto Shiyakusho-mae 京都市役所前","min":"5–10","back":true},{"mode":"subway","line":"Subway Tozai Line 東西線","from":"Kyoto Shiyakusho-mae 京都市役所前","to":"Karasuma Oike 烏丸御池","min":2,"dir":"ไปทาง 太秦天神川 / Uzumasa Tenjingawa"},{"mode":"subway","line":"Subway Karasuma Line 烏丸線","from":"Karasuma Oike 烏丸御池","to":"Kyoto 京都","min":6,"dir":"ไปทาง 竹田 / Takeda","tip":"เปลี่ยนสายในสถานี ไม่ต้องแตะบัตรออก"},{"mode":"walk","from":"Subway Exit A5","to":"APA Hotel","min":1}] }
      ]
    },
    {
      dayNum: 3,
      short: "Arashiyama",
      critical: "เลือกร้านหลักหนึ่งร้าน · ออกจาก Kinkakuji ไม่เกิน 15:30",
      risk: "เลือก Yoshimura หรือ eX café ถ้ารอเกิน 30 นาทีให้เปลี่ยนร้าน; ออกจาก Kinkakuji หลัง 15:30 ให้งด Shimogamo",
      date: "3 ธ.ค. 2026 (พฤหัสบดี)",
      title: "Arashiyama → Randen เปลี่ยนที่ Katabiranotsuji → Kinkakuji → Shimogamo ช่วงสั้น",
      theme: "Arashiyama, Kinkakuji & Shimogamo",
      color: "#fdcb6e",
      totalFareJPY: 1500,
      routeCoords: [[34.9858,135.7588],[35.0170,135.6713],[35.0155,135.6777],[35.0157,135.6775],[35.0394,135.7292],[35.0389,135.773],[34.9858,135.7588]],
      checkpoints: [
        { id:"pa-d3-1", order:1, time:"07:45–11:15", name:"Bamboo Grove → Tenryuji Garden → Togetsukyo Bridge", jpName:"嵐山竹林 / 天龍寺 / 渡月橋", category:"nature", lat:35.0170, lng:135.6713, desc:"JR Sagano Line ไป Saga-Arashiyama แล้วเดินชมป่าไผ่ สวน Tenryuji ค่าเข้า 500 เยน เปิด 08:30 (เปิดพิเศษ 07:30 จบ 30 พ.ย. ไม่ครอบคลุมวันนี้) และสะพาน Togetsukyo", transportInfo:"JR Sagano Line; ตรวจรอบและค่าโดยสารจริง", cost:"Tenryuji Garden 500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove", transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto","min":5},{"mode":"train","line":"JR Sagano Line 嵯峨野線","from":"Kyoto 京都","to":"Saga-Arashiyama 嵯峨嵐山","min":15,"dir":"ไปทาง 亀岡・園部 / Kameoka, Sonobe","board":"ชานชาลา 32–33 (ฝั่งตะวันตก เผื่อเดิน)"},{"mode":"walk","from":"Saga-Arashiyama","to":"Bamboo Grove","min":10}] },
        { id:"pa-d3-2", order:2, time:"11:15–12:45", name:"เลือกร้านหลักหนึ่งร้าน: Yoshimura หรือ eX café", jpName:"嵐山よしむら / eXカフェ", category:"food", lat:35.0155, lng:135.6777, desc:"Yoshimura โซบะตั้งงบ 1,800–3,000 เยน ตรวจเมนูพิเศษช่วง 23 ต.ค.–7 ธ.ค. และราคาจริง หรือ eX café ดังโงะ/มัทฉะราว 1,500 เยนพร้อมมื้อกลางวันสั้นเพิ่ม; ร้านที่สองแวะเมื่อคิวสั้น รอเกิน 30 นาทีให้เปลี่ยนร้าน", transportInfo:"เดินใน Arashiyama", cost:"อาหารตามร้านที่เลือก", link:"https://www.google.com/maps/search/?api=1&query=Arashiyama+Yoshimura", choiceNote:"เลือกร้านหลักหนึ่งร้าน: Yoshimura หรือ eX café; ร้านที่สองแวะเมื่อคิวสั้นเท่านั้น", transit:[{"mode":"walk","from":"Togetsukyo","to":"ร้านใน Arashiyama","min":"5–10"}] },
        { id:"pa-d3-3", order:3, time:"13:00–14:15", name:"Randen ไป Kitanohakubaicho", jpName:"嵐電", category:"transport", lat:35.0157, lng:135.6775, desc:"ขึ้น Randen จาก Arashiyama เปลี่ยนขบวนที่ Katabiranotsuji ไป Kitanohakubaicho แล้วต่อรถสาธารณะสู่วัดทอง ตรวจสายและเวลาเดินรถจริง", transportInfo:"Randen + ต่อรถสาธารณะ; fare ตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Katabiranotsuji+Station", transit:[{"mode":"walk","from":"ร้านอาหาร","to":"Randen Arashiyama 嵐山","min":5},{"mode":"train","line":"Randen Arashiyama Line 嵐電嵐山本線","from":"Arashiyama 嵐山","to":"Katabiranotsuji 帷子ノ辻","min":8,"dir":"ไปทาง 四条大宮 / Shijo-Omiya"},{"mode":"train","line":"Randen Kitano Line 嵐電北野線","from":"Katabiranotsuji 帷子ノ辻","to":"Kitano-Hakubaicho 北野白梅町","min":15,"dir":"ไปทาง 北野白梅町 / Kitano-Hakubaicho","tip":"รถรางเล็ก จ่ายตอนลง ใช้ IC ได้"}] },
        { id:"pa-d3-4", order:4, time:"14:15–15:15", name:"Kinkakuji", jpName:"金閣寺", category:"spot", lat:35.0394, lng:135.7292, desc:"ชมวัดทอง งบเข้า 500 เยน แล้วต่อรถบัสไป Shimogamo; ออกหลัง 15:30 ให้งดศาลเจ้าแล้วกลับ Kyoto Station", transportInfo:"ต่อรถสาธารณะจาก Randen; ตรวจสาย/ค่าโดยสารจริง", cost:"500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Kinkakuji+Temple", transit:[{"mode":"bus","line":"City Bus 204 หรือ 205","from":"Kitano-Hakubaicho 北野白梅町","to":"Kinkakuji-michi 金閣寺道","min":8,"dir":"ฝั่งที่ไปทาง 金閣寺 (Kinkakuji)","tip":"เดินแทนได้ราว 20 นาที"},{"mode":"walk","from":"Kinkakuji-michi","to":"Kinkakuji","min":"5–10"}] },
        { id:"pa-d3-6", order:5, time:"15:15–16:00 เดินทาง / 16:00–16:50 ศาลเจ้า", name:"Shimogamo Shrine / Tadasu no Mori ช่วงสั้น", jpName:"下鴨神社 / 糺の森", category:"spot", lat:35.0389, lng:135.773, desc:"ต่อจากวัดทองเพราะอยู่โซนเหนือเหมือนกัน ชมศาลเจ้าและป่าช่วงสั้น เข้าสักการะฟรี 06:30–17:00 ชมพิเศษจ่ายแยก; งดได้ทั้งหมดเมื่อออกจาก Kinkakuji หลัง 15:30; ป่ายังเขียว ณ 14 พ.ย. ปกติสวยต้น–กลาง ธ.ค.", transportInfo:"City Bus สาย 205 จาก Kinkakuji-michi → Shimogamo-jinja-mae; เวลาเป็นค่าประมาณ ตรวจรอบและค่าโดยสารจริง", cost:"เข้าสักการะ 0 JPY; ชมพิเศษจ่ายแยก", link:"https://www.shimogamo-jinja.or.jp/prayers/question", choiceNote:"จุดต่อท้ายที่งดได้ · ศาลเจ้าปิด 17:00", transit:[{"mode":"walk","from":"Kinkakuji","to":"Kinkakuji-michi 金閣寺道","min":"5–10"},{"mode":"bus","line":"City Bus 205","from":"Kinkakuji-michi 金閣寺道","to":"Shimogamo-jinja-mae 下鴨神社前","min":"30–40","dir":"ไปทาง 北大路バスターミナル / Kitaoji BT","tip":"รถจอด Kitaoji Bus Terminal กลางทาง นั่งต่อได้ ดูจอบนรถ"},{"mode":"walk","from":"Shimogamo-jinja-mae","to":"Tadasu no Mori","min":5}] },
        { id:"pa-d3-5", order:6, time:"17:45–19:15", name:"GYUKATSU Kyoto Katsugyu", jpName:"牛カツ京都勝牛", category:"food", lat:34.9858, lng:135.7588, desc:"กิวคัตสึย่างต่อเองบนหินร้อนพร้อมข้าว ใกล้สถานี Kyoto แล้วกลับพัก — Night 3; สำรอง Sushi no Musashi / Porta", transportInfo:"จาก Shimogamo กลับ Kyoto Station ด้วยรถบัส หรือเดินไป Demachiyanagi แล้วต่อรถไฟ; ตรวจเส้นทางจริง", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Gyukatsu+Kyoto+Katsugyu+Kyoto+Ekimae", transit:[{"mode":"walk","from":"Shimogamo Shrine","to":"ป้าย Shimogamo-jinja-mae ฝั่งลงใต้","min":5},{"mode":"bus","line":"City Bus 4 หรือ 205","from":"Shimogamo-jinja-mae 下鴨神社前","to":"Kyoto Station 京都駅前","min":"35–45","dir":"ไปทาง 河原町・京都駅 / Kyoto Station","tip":"ทางเลือก: เดิน 15 นาทีไป Demachiyanagi แล้วขึ้น Keihan"},{"mode":"walk","from":"Kyoto Station","to":"Katsugyu","min":5}] }
      ]
    },
    {
      dayNum: 4,
      short: "Uji & Nara",
      critical: "ออกจาก Uji ไม่เกิน 12:30–13:00",
      risk: "รักษารอบชาที่จองไว้ แล้วเข้าวิหาร Todaiji ก่อนเดินเล่นกับกวาง",
      date: "4 ธ.ค. 2026 (ศุกร์)",
      title: "Uji: Byodoin + CHAZUNA → Nara: Todaiji + กวาง → Kyoto",
      theme: "Uji Tea & Nara",
      color: "#00cec9",
      totalFareJPY: 2000,
      routeCoords: [[34.9858,135.7588],[34.8893,135.8077],[34.8900,135.8105],[34.68899,135.83982],[34.6851,135.8430],[34.9858,135.7588]],
      checkpoints: [
        { id:"pa-d4-1", order:1, time:"07:45–08:45", name:"JR Kyoto → JR Uji", jpName:"JR京都駅 → JR宇治駅", navigationQuery:"JR Uji Station, Uji, Kyoto, Japan", category:"transport", lat:34.9858, lng:135.7588, desc:"ออกจากโรงแรมขึ้น JR Nara Line ไป JR Uji; ระวังไม่สับสนกับ Keihan Uji และเผื่อเวลารอรถ/เดิน", transportInfo:"JR Nara Line; รอบและค่าโดยสารตรวจจากผู้ให้บริการ", link:"https://www.google.com/maps/search/?api=1&query=JR+Uji+Station", transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto","min":5},{"mode":"train","line":"JR Nara Line 奈良線","from":"Kyoto 京都","to":"JR Uji 宇治","min":"20–30","dir":"ไปทาง 奈良 / Nara","board":"ชานชาลา 8–10","tip":"ทุกขบวนจอด Uji; ลงที่ JR Uji ไม่ใช่ Keihan Uji"}] },
        { id:"pa-d4-2", order:2, time:"08:45–10:15", name:"Byodoin Temple", jpName:"平等院", category:"spot", lat:34.8893, lng:135.8077, desc:"สวนเปิด 08:45 พิพิธภัณฑ์ 09:00 ตั๋วสวนและพิพิธภัณฑ์ 700 เยน; ภายใน Phoenix Hall เพิ่ม 300 เยน จำกัด 35 คน/รอบตั้งแต่ 16 ต.ค. อาจรอนานขึ้น ชมด้านในเริ่ม 09:30 ทุก 20 นาที เลือกรอบที่จบก่อนรอบ CHAZUNA อย่างน้อย 15 นาที วันศุกร์อาจคิวยาวกว่าวันพุธ พลาดรอบแล้วเปลี่ยนเวลาหรือคืนเงินไม่ได้ ถ้ารอบชนกิจกรรมชาให้ชมสวน/พิพิธภัณฑ์เป็นหลัก", transportInfo:"เดินจาก JR Uji", cost:"700 JPY; Phoenix Hall เพิ่ม 300 JPY (ตัวเลือก)", link:"https://www.byodoin.or.jp/guide/", optionalActivities:["เข้าชมภายใน Phoenix Hall · เพิ่ม 300 เยน"], transit:[{"mode":"walk","from":"JR Uji ทางออกใต้","to":"Byodoin","min":10}] },
        { id:"pa-d4-3", order:3, time:"ประมาณ 10:30–11:15", name:"CHAZUNA กิจกรรมโม่มัทฉะ (จองรอบจริง)", jpName:"茶づな 茶臼から抹茶づくり体験", lat:34.8900, lng:135.8105, navigationQuery:"CHAZUNA, Uji, Kyoto, Japan", category:"food", desc:"โม่มัทฉะด้วยหินแล้วชงดื่มเอง เวลาให้ยึดรอบที่จองจริง; จัดทุกวัน ต้องจองล่วงหน้าผ่านเว็บไซต์ CHAZUNA เปิด 09:00–17:00 ไม่มีวันหยุดประจำ แต่อาจปิดชั่วคราวเพราะตรวจอาคารหรือสภาพอากาศ (ตรวจ 19 พ.ย.) ยังไม่ได้ยืนยันราคา ระยะเวลา รอบเวลา และกำหนดจองล่วงหน้า งบเผื่อ 1,500 เยน/คน สอบถาม 0774-24-2700 เลือกรอบประมาณ 10:30 ที่ยังออกจาก Uji ได้ไม่เกิน 13:00 ตรวจเส้นทางเดินจาก Byodoin จริง; หมุดแผนที่เป็นตำแหน่งโดยประมาณ", transportInfo:"เดินจาก Byodoin; ตรวจเส้นทางจริงตอนจอง", cost:"งบเผื่อ 1,500 JPY (ราคายังไม่ยืนยัน)", link:"https://uji-chazuna.kyoto/3221/", bookingLinks:[{ label:"จอง CHAZUNA", url:"https://uji-chazuna.kyoto/event/#experience" }], choiceNote:"ต้องจองรอบจริง · ราคาและระยะเวลาตรวจตอนจอง", transit:[{"mode":"walk","from":"Byodoin","to":"CHAZUNA","min":5,"tip":"ตรวจเส้นทางจริงตอนจอง"}] },
        { id:"pa-d4-4", order:4, time:"11:15–12:15 · มื้อกลางวัน / 12:15–13:45 · เดินทาง Uji → Nara", name:"อาหารกลางวันและ Uji Omotesando", jpName:"宇治 / 宇治川", navigationQuery:"Uji Omotesando, Uji, Kyoto, Japan", category:"food", lat:34.8893, lng:135.8077, desc:"มื้อกลางวันโซบะมัทฉะและเดิน Uji Omotesando/ริมแม่น้ำสั้น ๆ เวลา 11:15–12:15; ตั้งเป้าออกจาก Uji ไม่เกิน 12:30–13:00 แล้วเผื่อรถและเดินทางต่อไป Nara ช่วง 12:15–13:45", transportInfo:"เดินกลับ JR Uji แล้วต่อรถไฟไป Nara; เผื่อรอรถและเดินทาง", cost:"อาหารประมาณ 1,500–2,500 JPY", link:"https://www.google.com/maps/search/?api=1&query=Uji+Omotesando", transit:[{"mode":"walk","from":"CHAZUNA","to":"Uji Omotesando","min":5}] },
        { id:"pa-d4-5", order:5, time:"13:45–15:00", name:"Todaiji Daibutsuden (Great Buddha Hall)", jpName:"東大寺大仏殿", lat:34.68899, lng:135.83982, navigationQuery:"Todai-ji Daibutsuden, Nara, Japan", category:"spot", desc:"เข้าวิหารก่อนเดินเล่นกวาง ค่าเข้า 800 เยน รับเงินสด; ฤดูหนาววิหารเปิด 08:00–17:00 พิพิธภัณฑ์รับเข้าถึง 16:30 เป็นคนละเวลาบริการ", transportInfo:"JR ไป Nara แล้วต่อรถบัสหรือเดิน; ตรวจสาย/ค่าโดยสารจริง", cost:"800 JPY (เตรียมเงินสด)", link:"https://www.todaiji.or.jp/en/access/", transit:[{"mode":"walk","from":"Uji Omotesando","to":"JR Uji 宇治","min":10},{"mode":"train","line":"JR Nara Line 奈良線","from":"JR Uji 宇治","to":"JR Nara 奈良","min":"30–45","dir":"ไปทาง 奈良 / Nara","tip":"Miyakoji Rapid みやこ路快速 เร็วที่สุด"},{"mode":"bus","line":"Nara Kotsu City Loop 市内循環","from":"JR Nara ทางออกตะวันออก (East Exit)","to":"Todaiji Daibutsuden Kasugataisha-mae 東大寺大仏殿・春日大社前","min":10,"dir":"ดูป้ายหน้ารถว่าผ่าน 大仏殿","tip":"เดินแทนได้ราว 30 นาที"},{"mode":"walk","from":"ป้ายรถบัส","to":"Todaiji","min":"5–10"}] },
        { id:"pa-d4-6", order:6, time:"15:00–16:15", name:"Nara Park (พื้นที่เดินชมกวาง)", jpName:"奈良公園", lat:34.6851, lng:135.8430, navigationQuery:"Nara Park, Nara, Japan", category:"nature", desc:"เดินเล่นในเขตสวนตามแสงและสภาพอากาศ ระวังอาหารและของในมือใกล้กวาง; หมุดแผนที่แสดงบริเวณสวนโดยประมาณ ไม่ใช่ทางเข้าจุดเดียว", transportInfo:"เดินกลับสถานีหรือใช้รถบัสเมื่อเหนื่อย", cost:"ตามจริง", link:"https://www.pref.nara.lg.jp/n113/57798.html", transit:[{"mode":"walk","from":"Todaiji","to":"Nara Park","min":5}] },
        { id:"pa-d4-7", order:7, time:"16:15–20:00", name:"กลับ Kyoto และมื้อเย็น Chojiro Sushi", jpName:"奈良 → 京都 / CHOJIRO", category:"food", lat:34.9840, lng:135.7600, desc:"เผื่อเดินทางกลับ Kyoto รวมรอรถ แล้วกิน Chojiro Sushi ซูชิสายพานเกรดดีในห้าง Avanti ฝั่ง Hachijo — Night 4; เผื่อเวลาเดินข้ามสถานี สำรอง Sushi no Musashi / Katsugyu / Porta", transportInfo:"รถไฟกลับ Kyoto; ค่าโดยสารตรวจตามเส้นทางจริง", cost:"อาหารตามจริง", link:"https://www.google.com/maps/search/?api=1&query=Chojiro+Sushi+Kyoto+Station", transit:[{"mode":"walk","from":"Nara Park","to":"Kintetsu Nara 近鉄奈良","min":"10–15"},{"mode":"train","line":"Kintetsu Kyoto Line 近鉄","from":"Kintetsu Nara 近鉄奈良","to":"Kintetsu Kyoto 近鉄京都","min":"35–50","dir":"ไปทาง 京都 / Kyoto","tip":"ขึ้น Express 急行 ที่ไป Kyoto ตรง หรือเปลี่ยนที่ Yamato-Saidaiji; ทางเลือก JR Nara Line จาก JR Nara"},{"mode":"walk","from":"Kintetsu Kyoto (ฝั่ง Hachijo)","to":"Avanti / Chojiro","min":3}] }
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
        {"id":"pa-d5-3","order":5,"time":"13:00–15:30","name":"Osaka Aquarium Kaiyukan","jpName":"海遊館","category":"spot","lat":34.6545,"lng":135.429,"desc":"เผื่อชม 2.5 ชั่วโมง เลือก e-ticket วันที่ 5 ธ.ค. รอบเป้าหมาย 13:00 ตามที่ว่าง; ราคาเปลี่ยนตามวัน ตั้งงบเผื่อ 3,500 เยน ไม่ใช่ราคายืนยันของวันที่ 5 ธ.ค. ตรวจราคา เวลาเปิดและที่ว่างจริงก่อนซื้อ ตั๋วหน้างานอาจต้องรอรอบ","transportInfo":"เดินจาก Tempozan / Osakako ทางออก 1 ประมาณ 5 นาที","cost":"ตั้งงบเผื่อ 3,500 JPY; ปรับตามราคาจริง","link":"https://www.kaiyukan.com/info/ticket/kaiyukan/","choiceNote":"รอบเป้าหมาย 13:00 ตามที่ว่าง · ตรวจราคาและเวลาเปิดวันที่ 5 ธ.ค. ก่อนซื้อ", transit:[{"mode":"walk","from":"Tempozan Marketplace","to":"Kaiyukan","min":2}] },
        {"id":"pa-d5-8","order":6,"time":"15:30–16:30 เดินทาง / 16:30–17:15 Kuromon","name":"ตลาด Kuromon — ปลาดิบก่อนค่ำ","jpName":"黒門市場","category":"food","lat":34.6654,"lng":135.5065,"navigationQuery":"Kuromon Market, Osaka, Japan","desc":"Osakako → Chuo Line → Hommachi เปลี่ยน Midosuji Line ไป Namba แล้วเดินไปตลาด Kuromon แวะกินปลาดิบ ไคเซนดง หรือเนื้อวากิวเสียบไม้ในร้านที่มีที่นั่งกิน; Kuromon Sanpei (黒門三平) เว็บท่องเที่ยวระบุเปิด 09:00–18:30 นั่งกินได้ถึง 18:00 และปิดเมื่อของหมด (ตรวจ 19 พ.ย.) ร้านในตลาดมักปิดหรือของหมดช่วง 17:00–18:00 ถ้าถึงหลัง 16:45 ให้ข้ามไป Dotonbori เลย เป็นจุดแวะกิน ไม่ใช่สถานที่เที่ยวที่สี่ ตรวจทางออกและระยะเดินจริง","transportInfo":"Osakako → Hommachi → Namba แล้วเดิน","cost":"อาหารตามจริง รวมในงบอาหาร","link":"https://www.gltjp.com/ja/directory/item/14539/","choiceNote":"ถึงหลัง 16:45 ให้ข้ามไป Dotonbori", transit:[{"mode":"walk","from":"Kaiyukan","to":"Osakako 大阪港","min":"5–10"},{"mode":"subway","line":"Osaka Metro Chuo Line 中央線","from":"Osakako 大阪港","to":"Hommachi 本町","min":15,"dir":"ไปทาง 長田 / Nagata"},{"mode":"subway","line":"Osaka Metro Midosuji Line 御堂筋線","from":"Hommachi 本町","to":"Namba なんば","min":4,"dir":"ไปทาง 天王寺・なかもず / Tennoji","tip":"เปลี่ยนสายในสถานี ตามป้ายสีแดง"},{"mode":"walk","from":"Namba","to":"Kuromon Market","min":10}] },
        {"id":"pa-d5-4","order":7,"time":"17:15–19:15","name":"Dotonbori / Glico Sign และมื้อเย็น","jpName":"道頓堀","category":"shopping","lat":34.6687,"lng":135.5013,"desc":"เดินจาก Kuromon เข้า Dotonbori; เดินริมคลอง ถ่ายป้ายไฟ กิน Takoyaki / Okonomiyaki ตามคิว เช่น Wanaka หรือ Mizuno รอเกิน 30 นาทีเปลี่ยนร้าน","transportInfo":"เดินจาก Kuromon","cost":"อาหารตามตัวเลือก รวมในงบอาหาร","link":"https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Sign", transit:[{"mode":"walk","from":"Kuromon Market","to":"Dotonbori","min":"5–10"}] },
        {"id":"pa-d5-5","order":8,"time":"19:15–20:45","name":"กลับ Kyoto","jpName":"大阪 → 京都","category":"transport","lat":34.9858,"lng":135.7588,"desc":"เดินไป Namba → Metro Umeda → เชื่อม JR Osaka → JR Special Rapid Kyoto; เผื่อ 60–90 นาที กลับเร็วขึ้นได้เมื่อเหนื่อย — Night 5","transportInfo":"Metro + JR; ตรวจรอบจริง","link":"https://www.google.com/maps/search/?api=1&query=Kyoto+Station", transit:[{"mode":"walk","from":"Dotonbori","to":"Namba なんば","min":"5–10"},{"mode":"subway","line":"Osaka Metro Midosuji Line 御堂筋線","from":"Namba なんば","to":"Umeda 梅田","min":8,"dir":"ไปทาง 新大阪・千里中央 / Shin-Osaka"},{"mode":"walk","from":"Umeda","to":"JR Osaka 大阪","min":"5–10","tip":"ตามป้าย JR"},{"mode":"train","line":"JR Special Rapid 新快速","from":"Osaka 大阪","to":"Kyoto 京都","min":30,"dir":"ไปทาง 京都・米原 / Kyoto","tip":"Rapid / Local ก็ถึง Kyoto แต่ช้ากว่า"},{"mode":"walk","from":"JR Kyoto","to":"APA Hotel","min":5}] }
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
        { id:"pa-d6-4", order:4, time:"12:00–13:00", name:"รับกระเป๋าและเตรียมขึ้น Haruka", jpName:"京都駅", category:"transport", lat:34.9858, lng:135.7588, desc:"รับกระเป๋าและเข้าสถานี ไม่เริ่มกิจกรรมใหม่; เลือก/จอง Haruka จริงช่วงประมาณ 13:30–14:00 ให้ถึงสถานี KIX ราว 15:00–15:30 ตารางนี้ไม่ยืนยันว่ามีขบวน 14:00 พอดี", transportInfo:"JR Haruka; จองขากลับและตรวจผลิตภัณฑ์ตั๋ว", cost:"Haruka 2,700 JPY รวมในงบ (ซื้อใหม่ตั้งแต่ 1 พ.ย. 2026)", link:"https://www.westjr.co.jp/travel-information/en/tickets-passes/oneway/haruka/", transit:[{"mode":"walk","from":"Nishiki Market","to":"Subway Shijo 四条","min":"5–10"},{"mode":"subway","line":"Subway Karasuma Line 烏丸線","from":"Shijo 四条","to":"Kyoto 京都","min":4,"dir":"ไปทาง 竹田 / Takeda"},{"mode":"walk","from":"Subway Exit A5","to":"APA Hotel แล้วกลับสถานีพร้อมกระเป๋า","min":5}] },
        { id:"pa-d6-5", order:5, time:"15:00–16:00", name:"Aeroplaza ชั้น 1 → Shuttle ฟรี → KIX T2 International", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"เป้าหมายถึง T2 ไม่เกิน 16:00 เผื่อเดิน/รอ Shuttle รวมประมาณ 30 นาที; ยืนยันสินค้าคืนภาษีก่อนโหลดกระเป๋าที่บรรจุสินค้า แล้วเช็คอินตามขั้นตอนที่เปิดจริง", transportInfo:"Aeroplaza ชั้น 1 → Free Shuttle ไป T2", cost:"0 JPY (Shuttle ฟรี)", link:"https://www.kansai-airport.or.jp/en/faq/1101", transit:[{"mode":"walk","from":"APA Hotel","to":"JR Kyoto ชานชาลา 30","min":10,"tip":"ชานชาลา 30 อยู่ฝั่งตะวันตกสุด เผื่อเดินพร้อมกระเป๋า"},{"mode":"train","line":"JR Limited Express Haruka 特急はるか","from":"Kyoto 京都","to":"Kansai Airport 関西空港","min":"75–80","dir":"ไปทาง 関西空港 / Kansai Airport","board":"ชานชาลา 30"},{"mode":"walk","from":"JR Kansai Airport","to":"Aeroplaza ชั้น 1","min":5},{"mode":"shuttle","line":"Free Shuttle Bus (ฟรี)","from":"Aeroplaza (T1)","to":"KIX T2","min":10,"dir":"ไปทาง Terminal 2"}] },
        { id:"pa-d6-6", order:6, time:"16:00–19:15", name:"KIX T2 International และ Peach MM091", jpName:"関西国際空港 第2ターミナル", category:"transport", lat:34.4389, lng:135.2323, desc:"Tax-free Refund Method: จ่ายรวมภาษีก่อน ยืนยันการนำออกภายใน 90 วันก่อนโหลดกระเป๋าที่บรรจุสินค้า ใช้ Kiosk หรือ VJW ในพื้นที่ Wi-Fi ที่กำหนดก่อนจุดตรวจความปลอดภัย หากถูกเลือกตรวจให้นำสินค้าไปศุลกากร ร้านคืนเงินตามวิธีที่ลงทะเบียน; Peach เช็คอิน 150–50 นาทีก่อนออก (16:45–18:25 สำหรับ 19:15) ให้เสร็จก่อนปิด ตรวจร้าน International แยกจาก Domestic", transportInfo:"Peach MM091 ออก 19:15; ตรวจข้อมูลวันเดินทาง", cost:"0 JPY", link:"https://www.flypeach.com/sg/lm/ai/airports/airportguide_international/kix" }
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
