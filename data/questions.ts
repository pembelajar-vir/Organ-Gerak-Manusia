import { Question, LevelConfig } from '@/lib/types';

export const LEVEL_CONFIGS: LevelConfig[] = [
  {
    id: 1,
    title: 'Level 1: Rangka & Tulang',
    subtitle: 'Mengenal bagian, bentuk, dan fungsi tulang pelindung tubuh',
    difficulty: 'Mudah',
    badge: 'Penjelajah Rangka',
    color: 'emerald',
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-300',
    textColor: 'text-emerald-700',
    iconName: 'ShieldCheck',
    range: [1, 25],
  },
  {
    id: 2,
    title: 'Level 2: Sistem Persendian (Sendi)',
    subtitle: 'Memahami jenis sendi yang menghubungkan tulang dan gerakannya',
    difficulty: 'Sedang',
    badge: 'Ahli Persendian',
    color: 'blue',
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-300',
    textColor: 'text-blue-700',
    iconName: 'Link2',
    range: [26, 50],
  },
  {
    id: 3,
    title: 'Level 3: Sistem Otot Manusia',
    subtitle: 'Mempelajari otot lurik, polos, jantung, dan mekanisme kontraksi',
    difficulty: 'Sedang',
    badge: 'Komandan Otot',
    color: 'amber',
    bgLight: 'bg-amber-50',
    borderLight: 'border-amber-300',
    textColor: 'text-amber-800',
    iconName: 'Zap',
    range: [51, 75],
  },
  {
    id: 4,
    title: 'Level 4: Kelainan & Kesehatan Organ Gerak',
    subtitle: 'Menganalisis penyakit tulang-otot dan cara merawatnya',
    difficulty: 'Menantang',
    badge: 'Dokter Cilik Bugar',
    color: 'rose',
    bgLight: 'bg-rose-50',
    borderLight: 'border-rose-300',
    textColor: 'text-rose-700',
    iconName: 'HeartPulse',
    range: [76, 100],
  },
];

export const QUESTIONS: Question[] = [
  // ==========================================
  // LEVEL 1: RANGKA & TULANG (SOAL 1 - 25) - MUDAH
  // ==========================================
  {
    id: 1,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Fungsi Rangka',
    question: 'Mengapa tulang disebut sebagai alat gerak pasif?',
    options: [
      'Karena tulang tidak memerlukan zat gizi',
      'Karena tulang tidak dapat bergerak sendiri tanpa bantuan otot',
      'Karena tulang hanya ada pada bagian dalam tubuh',
      'Karena tulang bertekstur sangat keras dan kaku'
    ],
    answerIndex: 1,
    explanation: 'Tulang disebut alat gerak pasif karena tidak dapat bergerak sendiri tanpa ditarik oleh kontraksi otot yang merupakan alat gerak aktif.',
    hint: 'Pikirkan apa yang menggerakkan tulang saat tanganmu terangkat.',
    funFact: 'Tubuh orang dewasa tersusun dari sekitar 206 ruas tulang yang saling bersambungan!'
  },
  {
    id: 2,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Kepala',
    question: 'Tulang tengkorak memiliki fungsi utama yang sangat penting bagi keselamatan manusia, yaitu...',
    options: [
      'Melindungi organ otak dari benturan',
      'Menyaring udara pernapasan yang masuk',
      'Menghasilkan tenaga untuk mengunyah',
      'Menjaga suhu tubuh agar tetap hangat'
    ],
    answerIndex: 0,
    explanation: 'Tulang tengkorak tersusun atas lempengan tulang keras dan pipih yang berfungsi kokoh melindungi otak dari trauma atau benturan luar.',
    hint: 'Organ berpikir yang ada di dalam kepala kita.',
    funFact: 'Tulang tengkorak bayi awalnya terdiri dari beberapa lempeng lentur sebelum menyatu sempurna saat dewasa.'
  },
  {
    id: 3,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Badan',
    question: 'Organ vital yang dilindungi oleh tulang dada dan tulang rusuk adalah...',
    options: [
      'Lambung dan usus halus',
      'Jantung dan paru-paru',
      'Ginjal dan kandung kemih',
      'Otak besar dan otak kecil'
    ],
    answerIndex: 1,
    explanation: 'Sangkar rusuk (tulang rusuk dan tulang dada) membentuk rongga pelindung bagi organ peredaran darah (jantung) dan pernapasan (paru-paru).',
    hint: 'Dua organ utama di dalam rongga dada yang berdenyut dan bernapas.',
    funFact: 'Manusia normal memiliki 12 pasang (total 24) tulang rusuk.'
  },
  {
    id: 4,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Fungsi Rangka',
    question: 'Berikut ini yang BUKAN merupakan fungsi dari sistem rangka manusia adalah...',
    options: [
      'Memberi bentuk tubuh dan menegakkan badan',
      'Tempat melekatnya otot-otot rangka',
      'Memompa darah ke seluruh bagian tubuh',
      'Tempat pembentukan sel-sel darah merah'
    ],
    answerIndex: 2,
    explanation: 'Memompa darah adalah fungsi dari jantung, bukan fungsi sistem rangka manusia.',
    hint: 'Pilihlah fungsi yang menjadi tugas utama organ peredaran darah.',
    funFact: 'Di dalam sumsum tulang merah, jutaan sel darah merah baru diproduksi setiap detiknya.'
  },
  {
    id: 5,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Bentuk Tulang',
    question: 'Tulang paha dan tulang lengan atas berdasarkan bentuknya digolongkan ke dalam jenis...',
    options: [
      'Tulang pipih',
      'Tulang pipa (panjang)',
      'Tulang pendek',
      'Tulang tidak beraturan'
    ],
    answerIndex: 1,
    explanation: 'Tulang paha dan tulang lengan berbentuk silinder memanjang dengan rongga di tengahnya seperti pipa, sehingga disebut tulang pipa.',
    hint: 'Bentuknya silinder bulat memanjang seperti tabung.',
    funFact: 'Tulang paha (femur) adalah tulang terpanjang dan terkuat di tubuh manusia!'
  },
  {
    id: 6,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Bentuk Tulang',
    question: 'Tulang belikat dan tulang rusuk berbentuk lempengan tipis dan lebar. Tulang ini termasuk kelompok...',
    options: [
      'Tulang pipih',
      'Tulang pipa',
      'Tulang pendek',
      'Tulang rawan'
    ],
    answerIndex: 0,
    explanation: 'Tulang yang berbentuk gepeng, tipis, dan lebar seperti tulang belikat, panggul, dan rusuk disebut tulang pipih.',
    hint: 'Pikirkan kata yang berarti rata atau gepeng.',
    funFact: 'Tulang pipih sangat efektif menahan benturan karena menyebarkan tekanan ke area permukaan yang luas.'
  },
  {
    id: 7,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Bentuk Tulang',
    question: 'Contoh tulang pendek pada tubuh manusia dapat ditemukan pada bagian...',
    options: [
      'Lengan atas dan betis',
      'Pergelangan tangan dan pergelangan kaki',
      'Tulang tengkorak dan tulang dada',
      'Ruas tulang selangka'
    ],
    answerIndex: 1,
    explanation: 'Tulang pendek berbentuk kubus kecil atau bulat, misalnya tulang pada pergelangan tangan (karpal) dan pergelangan kaki (tarsal).',
    hint: 'Daerah persendian dekat telapak tangan dan telapak kaki.',
    funFact: 'Pergelangan tangan manusia memiliki 8 tulang kecil yang tersusun rapi.'
  },
  {
    id: 8,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Jenis Tulang',
    question: 'Daun telinga dan ujung hidung kita terasa lentur dan kenyal karena tersusun atas...',
    options: [
      'Tulang keras (osteon)',
      'Tulang rawan (kartilago)',
      'Otot lurik yang padat',
      'Jaringan lemak keras'
    ],
    answerIndex: 1,
    explanation: 'Tulang rawan (kartilago) memiliki matriks lentur dan banyak mengandung zat perekat (kolagen), sehingga terasa elastis bila ditekuk.',
    hint: 'Bukan tulang keras, melainkan jenis tulang yang lentur.',
    funFact: 'Hiu memiliki seluruh rangka tubuh yang terbuat dari tulang rawan, bukan tulang keras!'
  },
  {
    id: 9,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Mineral Tulang',
    question: 'Zat mineral utama yang membuat tulang menjadi kuat, keras, dan padat adalah...',
    options: [
      'Kalsium dan Fosfor',
      'Zat Besi dan Seng',
      'Natrium dan Yodium',
      'Kalium dan Vitamin C'
    ],
    answerIndex: 0,
    explanation: 'Kalsium dan fosfor adalah dua mineral penyusun utama yang mengkristal di dalam matriks tulang sehingga tulang menjadi kokoh.',
    hint: 'Zat mineral yang banyak terkandung di dalam susu sapi.',
    funFact: 'Sekitar 99% kalsium dalam tubuh manusia tersimpan di dalam tulang dan gigi.'
  },
  {
    id: 10,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Anggota Gerak Atas',
    question: 'Bagian tulang yang menghubungkan siku dengan pergelangan tangan searah dengan ibu jari adalah tulang...',
    options: [
      'Pengumpil (radius)',
      'Hasta (ulna)',
      'Kering (tibia)',
      'Betis (fibula)'
    ],
    answerIndex: 0,
    explanation: 'Lengan bawah tersusun atas dua tulang: tulang pengumpil (searah ibu jari) dan tulang hasta (searah jari kelingking).',
    hint: 'Ingat rumus: Pengumpil searah jempol, Hasta searah kelingking.',
    funFact: 'Nama ilmiah tulang pengumpil adalah "radius".'
  },
  {
    id: 11,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Anggota Gerak Bawah',
    question: 'Tulang berukuran lebih besar pada tungkai bawah yang terletak di bagian depan kaki adalah tulang...',
    options: [
      'Tulang hasta',
      'Tulang kering (tibia)',
      'Tulang betis (fibula)',
      'Tulang paha (femur)'
    ],
    answerIndex: 1,
    explanation: 'Tungkai bawah terdiri dari tulang kering (tibia) yang besar di bagian depan dan tulang betis (fibula) yang lebih ramping di bagian belakang.',
    hint: 'Tulang di bagian depan betis yang terasa nyeri bila terantuk meja.',
    funFact: 'Tulang kering menopang sebagian besar berat badan saat kita berdiri dan berjalan.'
  },
  {
    id: 12,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Badan',
    question: 'Berapa jumlah ruas tulang leher pada tubuh manusia?',
    options: [
      '5 ruas',
      '7 ruas',
      '12 ruas',
      '14 ruas'
    ],
    answerIndex: 1,
    explanation: 'Tulang leher manusia (vertebra servikal) terdiri dari 7 ruas yang memungkinkan kepala kita dapat menoleh, menunduk, dan mendongak.',
    hint: 'Angka ganjil antara 6 dan 8.',
    funFact: 'Jerapah yang memiliki leher sangat panjang juga memiliki jumlah ruas tulang leher yang sama persis dengan manusia, yaitu 7 ruas!'
  },
  {
    id: 13,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Badan',
    question: 'Tulang yang berbentuk seperti pedang di tengah dada tempat menempelnya tulang rusuk sejati adalah tulang...',
    options: [
      'Tulang selangka',
      'Tulang belikat',
      'Tulang dada (sternum)',
      'Tulang panggul'
    ],
    answerIndex: 2,
    explanation: 'Tulang dada (sternum) berada di bagian depan tengah rongga dada dan berfungsi sebagai tempat perlekatan ujung depan tulang rusuk sejati.',
    hint: 'Terletak tepat di tengah bagian depan dada.',
    funFact: 'Tulang dada tersusun dari hulu, badan, dan taju pedang (prosesus xifoid).'
  },
  {
    id: 14,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Gelang Bahu',
    question: 'Tulang yang melintang di bagian dada atas menghubungkan tulang dada dengan bahu adalah tulang...',
    options: [
      'Tulang selangka (klavikula)',
      'Tulang belikat (skapula)',
      'Tulang rusuk palsu',
      'Tulang punggung'
    ],
    answerIndex: 0,
    explanation: 'Tulang selangka (klavikula) adalah tulang melengkung tipis berbentuk huruf S yang menopang bahu agar dapat bergerak leluasa.',
    hint: 'Sering terlihat menonjol di bawah leher bagian kanan dan kiri.',
    funFact: 'Tulang selangka adalah salah satu tulang yang paling sering mengalami retak atau patah saat terjatuh.'
  },
  {
    id: 15,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Gelang Panggul',
    question: 'Rangka panggul pada manusia memiliki fungsi utama untuk...',
    options: [
      'Melindungi organ pencernaan bawah dan sistem reproduksi',
      'Melindungi organ jantung dan paru-paru',
      'Menghubungkan tengkorak dengan tulang rusuk',
      'Mengatur pernapasan saat tidur'
    ],
    answerIndex: 0,
    explanation: 'Gelang panggul menopang berat badan bagian atas serta melindungi organ kemih, organ pencernaan bagian bawah, dan organ reproduksi.',
    hint: 'Bagian bawah perut dekat pinggul.',
    funFact: 'Panggul wanita secara alami lebih lebar daripada pria untuk memfasilitasi proses melahirkan.'
  },
  {
    id: 16,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Bentuk Tulang',
    question: 'Ruas-ruas tulang belakang digolongkan ke dalam bentuk tulang...',
    options: [
      'Tulang pipa',
      'Tulang pipih',
      'Tulang tak beraturan (irregular)',
      'Tulang rawan'
    ],
    answerIndex: 2,
    explanation: 'Ruas tulang belakang memiliki bentuk lekukan kompleks dan taju unik yang tidak simetris, sehingga digolongkan sebagai tulang tak beraturan.',
    hint: 'Bentuknya tidak menyerupai pipa, lempengan pipih, ataupun kubus.',
    funFact: 'Tulang belakang manusia terdiri dari 33 ruas tulang pada saat bayi.'
  },
  {
    id: 17,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Fungsi Rangka',
    question: 'Apa yang akan terjadi pada tubuh kita jika manusia tidak memiliki sistem rangka?',
    options: [
      'Tubuh tetap berdiri tetapi tidak bisa berlari',
      'Tubuh akan lunglai seperti ubur-ubur dan tidak memiliki bentuk',
      'Tubuh bisa bergerak lebih cepat tanpa beban',
      'Tubuh hanya bisa bernapas melalui kulit'
    ],
    answerIndex: 1,
    explanation: 'Tanpa rangka yang menopang dan menegakkan tubuh, daging dan organ tubuh kita akan jatuh lunglai tanpa bentuk tetap.',
    hint: 'Rangka berfungsi sebagai penopang dan pembentuk wujud tubuh.',
    funFact: 'Hewan seperti ubur-ubur tidak memiliki tulang dan mengandalkan tekanan air untuk mempertahankan bentuk tubuhnya.'
  },
  {
    id: 18,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Pertumbuhan Tulang',
    question: 'Bayi yang baru lahir memiliki lebih dari 300 tulang, namun saat dewasa jumlahnya menjadi 206. Mengapa hal ini terjadi?',
    options: [
      'Beberapa tulang lenyap terbawa aliran darah',
      'Beberapa tulang kecil menyatu dan melebur seiring pertumbuhan',
      'Tulang mengalami pengikisan akibat banyak bergerak',
      'Tulang berubah menjadi jaringan lemak tubuh'
    ],
    answerIndex: 1,
    explanation: 'Seiring pertumbuhan dan osifikasi (penulangan), banyak tulang kecil dan tulang rawan pada bayi yang menyatu menjadi satu tulang yang lebih kokoh.',
    hint: 'Tulang-tulang kecil tersebut bergabung menjadi satu.',
    funFact: 'Tulang tengkorak bayi memiliki celah lembut yang disebut ubun-ubun (fontanel).'
  },
  {
    id: 19,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Tulang Rusuk',
    question: 'Tulang rusuk yang bagian ujung belakangnya menempel pada tulang punggung tetapi ujung depannya melayang bebas disebut...',
    options: [
      'Tulang rusuk sejati',
      'Tulang rusuk palsu',
      'Tulang rusuk melayang',
      'Tulang rusuk dada'
    ],
    answerIndex: 2,
    explanation: 'Dua pasang tulang rusuk paling bawah ujung depannya tidak menempel pada tulang apa pun, sehingga disebut tulang rusuk melayang.',
    hint: 'Namanya sesuai dengan ujung depannya yang bebas di udara.',
    funFact: 'Manusia memiliki 2 pasang (4 ruas) tulang rusuk melayang di bagian terbawah.'
  },
  {
    id: 20,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Tempurung Lutut',
    question: 'Tulang pipih kecil berbentuk segitiga yang melindungi bagian depan sendi lutut disebut tulang...',
    options: [
      'Tulang tempurung lutut (patela)',
      'Tulang pergelangan kaki (tarsal)',
      'Tulang tumit (kalkaneus)',
      'Tulang kering (tibia)'
    ],
    answerIndex: 0,
    explanation: 'Tulang tempurung lutut (patela) adalah tulang sesamoid yang terletak di depan lutut untuk melindungi persendian lutut dari benturan.',
    hint: 'Dapat dirasakan sebagai mangkuk bundar kecil tepat di tengah lutut.',
    funFact: 'Patela baru mengeras menjadi tulang padat ketika anak berusia sekitar 3 hingga 5 tahun.'
  },
  {
    id: 21,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Penyusun Tulang',
    question: 'Selain kalsium dan fosfor, zat perekat organik yang membuat tulang tidak mudah rapuh dan memiliki sedikit kelenturan adalah...',
    options: [
      'Kolagen',
      'Zat melanin',
      'Garam natrium',
      'Keratin kuku'
    ],
    answerIndex: 0,
    explanation: 'Kolagen adalah serat protein alami yang menjadi matriks lentur tempat menempelnya kristal kalsium, mencegah tulang mudah patah saat terkena tekanan.',
    hint: 'Protein berserat yang juga banyak terdapat pada kulit.',
    funFact: 'Jika tulang direndam air cuka, zat kapurnya akan larut dan menyisakan serat kolagen sehingga tulang bisa ditekuk!'
  },
  {
    id: 22,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Tulang Rawan',
    question: 'Di manakah kita dapat menemukan tulang rawan pada orang dewasa?',
    options: [
      'Hanya pada gigi geraham',
      'Cuping hidung, daun telinga, dan sambungan antartulang rusuk',
      'Pada telapak tangan dan kuku jari',
      'Di dalam rongga mata'
    ],
    answerIndex: 1,
    explanation: 'Tulang rawan tetap ada di bagian hidung, telinga, serta melapisi permukaan persendian agar tidak terjadi gesekan langsung antartulang keras.',
    hint: 'Bagian wajah yang lentur jika disentuh dengan jari.',
    funFact: 'Lapisan tulang rawan pada persendian bersifat licin seperti es bertemu es.'
  },
  {
    id: 23,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Kepala',
    question: 'Satu-satunya tulang pada tengkorak kepala manusia yang dapat digerakkan secara leluasa adalah...',
    options: [
      'Tulang dahi',
      'Tulang pipi',
      'Tulang rahang bawah (mandibula)',
      'Tulang pelipis'
    ],
    answerIndex: 2,
    explanation: 'Tulang rahang bawah dapat bergerak naik turun dan ke samping saat kita berbicara dan mengunyah makanan.',
    hint: 'Tulang yang bergerak saat mulut membuka dan menutup.',
    funFact: 'Otot yang menggerakkan rahang bawah (otot masseter) adalah salah satu otot terkuat di tubuh manusia!'
  },
  {
    id: 24,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Fungsi Sumsum Tulang',
    question: 'Bagian tengah tulang pipa berisi sumsum tulang merah yang memiliki fungsi sangat penting, yaitu...',
    options: [
      'Memproduksi sel darah merah dan sel darah putih',
      'Menyimpan sisa makanan yang tidak tercerna',
      'Menyalurkan perintah saraf dari otak',
      'Menghasilkan lendir untuk pernapasan'
    ],
    answerIndex: 0,
    explanation: 'Sumsum tulang merah adalah pabrik utama hematopoiesis, yaitu proses pembuatan sel darah merah, sel darah putih, dan trombosit.',
    hint: 'Terkait dengan cairan merah yang mengalir di pembuluh tubuh.',
    funFact: 'Setiap hari, sumsum tulang memproduksi lebih dari 200 miliar sel darah merah baru!'
  },
  {
    id: 25,
    levelId: 1,
    levelTitle: 'Rangka & Tulang',
    difficulty: 'Mudah',
    category: 'Rangka Anggota Gerak',
    question: 'Tulang gelang bahu tersusun atas dua tulang utama, yaitu...',
    options: [
      'Tulang paha dan tulang betis',
      'Tulang selangka dan tulang belikat',
      'Tulang dada dan tulang rusuk',
      'Tulang hasta dan tulang pengumpil'
    ],
    answerIndex: 1,
    explanation: 'Gelang bahu dibentuk oleh sepasang tulang selangka (di bagian depan) dan sepasang tulang belikat (di bagian punggung atas).',
    hint: 'Satu tulang melintang di dada atas, satu lagi pipih segitiga di punggung atas.',
    funFact: 'Tulang belikat memiliki nama Latin "scapula" yang berarti sekop kecil karena bentuknya yang pipih lebar.'
  },

  // ==========================================
  // LEVEL 2: SISTEM PERSENDIAN (SOAL 26 - 50) - SEDANG
  // ==========================================
  {
    id: 26,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Pengertian Sendi',
    question: 'Apa yang dimaksud dengan persendian (artikulasi) pada tubuh manusia?',
    options: [
      'Pertemuan atau hubungan antara dua tulang atau lebih',
      'Serat otot yang membungkus seluruh tubuh',
      'Saluran darah yang mengalirkan oksigen ke tulang',
      'Cairan khusus pelindung bagian lambung'
    ],
    answerIndex: 0,
    explanation: 'Sendi atau artikulasi adalah titik pertemuan fungsional antara dua atau lebih tulang yang memungkinkan terjadinya berbagai gerakan.',
    hint: 'Hubungan yang menyambungkan satu tulang dengan tulang lainnya.',
    funFact: 'Tubuh manusia memiliki sekitar 250 hingga 350 persendian, tergantung usia!'
  },
  {
    id: 27,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Mati (Sinartrosis)',
    question: 'Hubungan antartulang tengkorak kepala dihubungkan oleh jaringan ikat kuat dan tidak dapat digerakkan sama sekali. Sendi ini dinamakan...',
    options: [
      'Sendi gerak (diartrosis)',
      'Sendi kaku (amfiartrosis)',
      'Sendi mati (sinartrosis)',
      'Sendi putar'
    ],
    answerIndex: 2,
    explanation: 'Sinartrosis atau sendi mati adalah persendian yang tidak memungkinkan adanya gerakan sama sekali, contohnya sutura pada tulang tengkorak.',
    hint: 'Namanya menunjukkan bahwa persendian ini tidak bisa bergerak.',
    funFact: 'Garis gerigi pada sambungan tulang tengkorak disebut sebagai "sutura".'
  },
  {
    id: 28,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Engsel',
    question: 'Gerakan pada sendi engsel mirip dengan cara kerja engsel pintu rumah, yaitu...',
    options: [
      'Bergerak bebas ke segala arah',
      'Bergerak hanya ke satu arah (membuka dan menutup)',
      'Bergerak memutar 360 derajat',
      'Bergerak menggeser ke depan dan belakang'
    ],
    answerIndex: 1,
    explanation: 'Sendi engsel hanya memungkinkan gerakan ke satu arah, seperti melipat dan meluruskan tangan pada siku atau lutut.',
    hint: 'Seperti engsel pintu kelas yang hanya bisa dibuka ke depan atau belakang.',
    funFact: 'Sendi siku dan sendi lutut adalah contoh sendi engsel terbesar pada tubuh kita.'
  },
  {
    id: 29,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Engsel',
    question: 'Contoh persendian di dalam tubuh yang bekerja sebagai sendi engsel adalah...',
    options: [
      'Persendian pada siku dan lutut',
      'Persendian antara tulang leher dan kepala',
      'Persendian antara tulang paha dan gelang panggul',
      'Persendian pada ruas tulang belakang'
    ],
    answerIndex: 0,
    explanation: 'Siku dan lutut hanya dapat ditekuk dan diluruskan ke satu arah searah bidang gerak engsel.',
    hint: 'Bagian lengan dan kaki yang ditekuk saat push-up dan squat.',
    funFact: 'Jari-jemari tangan kita juga memiliki sendi engsel kecil antaruas jari.'
  },
  {
    id: 30,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Peluru',
    question: 'Persendian yang memungkinkan gerakan paling bebas ke segala arah pada tubuh kita adalah sendi...',
    options: [
      'Sendi peluru',
      'Sendi pelana',
      'Sendi engsel',
      'Sendi putar'
    ],
    answerIndex: 0,
    explanation: 'Sendi peluru mempertemukan ujung tulang berbentuk bonggol bulat dengan mangkok sendi, sehingga dapat berputar bebas ke segala arah.',
    hint: 'Bentuk ujung tulangnya bulat seperti peluru bola.',
    funFact: 'Sendi bahu adalah sendi paling lincah dan fleksibel di seluruh tubuh manusia!'
  },
  {
    id: 31,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Peluru',
    question: 'Contoh sendi peluru pada tubuh manusia dapat ditemukan pada pertemuan antara...',
    options: [
      'Tulang lengan atas dengan gelang bahu',
      'Tulang leher dengan tulang atlas',
      'Tulang pergelangan tangan dengan pengumpil',
      'Tulang tengkorak dengan rahang atas'
    ],
    answerIndex: 0,
    explanation: 'Bonggol tulang lengan atas masuk ke dalam mangkok tulang belikat membentuk sendi peluru yang memungkinkan lengan berputar bebas.',
    hint: 'Persendian tempat kita memutar tangan saat melakukan pemanasan olahraga renang.',
    funFact: 'Sendi panggul juga merupakan sendi peluru, namun mangkuknya lebih dalam agar lebih stabil menopang berat badan.'
  },
  {
    id: 32,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Putar',
    question: 'Gerakan menengokkan kepala ke kiri dan ke kanan dimungkinkan oleh adanya sendi...',
    options: [
      'Sendi pelana',
      'Sendi putar',
      'Sendi engsel',
      'Sendi geser'
    ],
    answerIndex: 1,
    explanation: 'Sendi putar memungkinkan satu tulang berputar mengelilingi poros tulang lainnya, contohnya pertemuan tulang tengkorak dengan tulang atlas leher.',
    hint: 'Gerakan memutar kepala saat memeriksa jalan sebelum menyeberang.',
    funFact: 'Tulang leher pertama dinamai tulang "Atlas", mengambil nama tokoh mitologi yang memikul bola bumi!'
  },
  {
    id: 33,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Pelana',
    question: 'Persendian yang memungkinkan gerakan ke dua arah (seperti orang menunggang kuda di pelana) terdapat pada...',
    options: [
      'Pangkal ibu jari tangan dengan telapak tangan',
      'Ruas-ruas tulang leher pertama',
      'Antara siku dan lengan bawah',
      'Antara tempurung lutut dan tulang kering'
    ],
    answerIndex: 0,
    explanation: 'Sendi pelana terletak pada pangkal ibu jari (tulang karpal dan metakarpal 1), memungkinkan ibu jari bergerak maju-mundur dan ke samping.',
    hint: 'Jari tangan yang bisa ditekuk berlawanan dengan empat jari lainnya untuk menggenggam pensil.',
    funFact: 'Kemampuan ibu jari yang fleksibel (opposable thumb) adalah keunggulan evolusi penting manusia untuk memegang alat!'
  },
  {
    id: 34,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Geser',
    question: 'Sendi yang gerakannya hanya saling menggeser sedikit antartulang datar terdapat pada...',
    options: [
      'Pergelangan tangan dan pergelangan kaki',
      'Pangkal paha dan tulang pinggul',
      'Tulang leher dan tengkorak',
      'Siku dan lutut'
    ],
    answerIndex: 0,
    explanation: 'Sendi geser memungkinkan tulang bergeser di atas permukaan tulang lain yang relatif datar, seperti pada tulang karpal pergelangan tangan.',
    hint: 'Permukaan tulangnya meluncur halus satu sama lain di pergelangan.',
    funFact: 'Sendi geser juga terdapat di antara ruas-ruas tulang belakang kita.'
  },
  {
    id: 35,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Cairan Sinovial',
    question: 'Cairan kental alami yang berfungsi sebagai pelumas antartulang di dalam persendian gerak disebut...',
    options: [
      'Cairan empedu',
      'Cairan sinovial',
      'Cairan limfa',
      'Plasma darah'
    ],
    answerIndex: 1,
    explanation: 'Cairan sinovial adalah pelumas alami yang disekresikan oleh membran sinovial agar ujung tulang tidak saling mengikis saat bergerak.',
    hint: 'Bekerja mirip dengan oli pelumas pada mesin sepeda motor.',
    funFact: 'Suara gemeretak saat membunyikan jari berasal dari gelembung gas kecil yang pecah di dalam cairan sinovial.'
  },
  {
    id: 36,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Ligamen',
    question: 'Jaringan ikat kuat berupa pita elastis yang berfungsi mengikat dan menyatukan dua ujung tulang pada sendi disebut...',
    options: [
      'Ligamen',
      'Tendon',
      'Fasia',
      'Kelenjar keringat'
    ],
    answerIndex: 0,
    explanation: 'Ligamen adalah pita jaringan fibrosa padat yang menghubungkan tulang dengan tulang pada persendian untuk menjaga kestabilan posisi tulang.',
    hint: 'Penghubung tulang ke tulang (berbeda dengan penghubung otot ke tulang).',
    funFact: 'Pemain sepak bola profesional sering melindungi ligamen lututnya (seperti ACL) dari cedera terkilir.'
  },
  {
    id: 37,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Kaku (Amfiartrosis)',
    question: 'Hubungan antartulang yang hanya memungkinkan sedikit gerakan terbatas (sendi kaku) terdapat pada...',
    options: [
      'Antarruas tulang belakang',
      'Antara tulang paha dan betis',
      'Antara tulang pelipis dan dahi',
      'Antara tulang selangka dan dada'
    ],
    answerIndex: 0,
    explanation: 'Ruas-ruas tulang belakang dihubungkan oleh bantalan cakram tulang rawan sehingga hanya memungkinkan sedikit lenturan (amfiartrosis).',
    hint: 'Memungkinkan kita membungkuk sedikit, tetapi tidak berputar 360 derajat.',
    funFact: 'Di antara tiap ruas tulang belakang terdapat cakram intervertebral yang meredam guncangan saat kita melompat.'
  },
  {
    id: 38,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Bantalan Tulang Rawan',
    question: 'Ujung-ujung tulang keras pada persendian gerak dilapisi oleh tulang rawan hialin yang berfungsi untuk...',
    options: [
      'Mencegah gesekan langsung dan meredam benturan',
      'Menghasilkan hormon penambah tinggi badan',
      'Menghubungkan saraf peraba ke otak',
      'Menghentikan aliran darah saat terluka'
    ],
    answerIndex: 0,
    explanation: 'Tulang rawan artikular sangat licin dan berfungsi sebagai bantalan peredam kejut agar kedua ujung tulang keras tidak langsung saling bergesekan.',
    hint: 'Bekerja seperti spons empuk pelindung.',
    funFact: 'Tulang rawan ini tidak memiliki pembuluh darah langsung, melainkan menyerap nutrisi dari cairan sendi di sekitarnya.'
  },
  {
    id: 39,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Gerak Menoleh',
    question: 'Saat seorang penari memutar pergelangan tangannya atau memutar lengan bawah sehingga telapak tangan menengadah dan menelungkup, gerakan ini terjadi karena adanya...',
    options: [
      'Sendi putar antara tulang hasta dan pengumpil',
      'Sendi engsel di jari manis',
      'Sendi mati di telapak tangan',
      'Sendi peluru di pergelangan kaki'
    ],
    answerIndex: 0,
    explanation: 'Tulang pengumpil dapat berguling di atas tulang hasta melalui sendi putar proksimal dan distal, menghasilkan gerakan pronasi dan supinasi.',
    hint: 'Tulang lengan bawah berputar saling menyilang.',
    funFact: 'Gerakan menelentangkan telapak tangan disebut supinasi, sedangkan menelungkupkannya disebut pronasi.'
  },
  {
    id: 40,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Perbedaan Sendi',
    question: 'Mengapa sendi bahu lebih mudah mengalami dislokasi (terkilir keluar mangkok) dibandingkan sendi panggul?',
    options: [
      'Karena mangkok sendi bahu lebih dangkal demi pergerakan yang sangat luas',
      'Karena di sendi bahu tidak terdapat cairan pelumas',
      'Karena tulang bahu tidak memiliki jaringan otot',
      'Karena sendi bahu merupakan jenis sendi kaku'
    ],
    answerIndex: 0,
    explanation: 'Mangkok sendi bahu sangat dangkal untuk memberikan jangkauan gerak 360 derajat yang sangat luas, namun menjadikannya lebih rentan bergeser.',
    hint: 'Bandingkan kedalaman mangkok sendi tempat menempelnya tulang.',
    funFact: 'Otot-otot rotator cuff di sekitar bahu bekerja keras setiap hari menjaga sendi bahu tetap berada di tempatnya!'
  },
  {
    id: 41,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Gulung (Ovoid)',
    question: 'Persendian yang memungkinkan gerakan ke dua sumbu gerak (ke depan-belakang dan ke kiri-kanan) seperti pada pangkal jari-jemari tangan disebut...',
    options: [
      'Sendi gulung (kondiloid)',
      'Sendi mati',
      'Sendi putar',
      'Sendi kaku'
    ],
    answerIndex: 0,
    explanation: 'Sendi gulung atau kondiloid memiliki ujung cembung berbentuk elips yang masuk ke rongga cekung elips, memungkinkan gerak menekuk dan menyamping.',
    hint: 'Bentuk ujung tulangnya lonjong/elips (oval).',
    funFact: 'Sendi pada pergelangan tangan ke jari memungkinkan kita melambaikan tangan ke kiri-kanan dan atas-bawah.'
  },
  {
    id: 42,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Pembagian Diartrosis',
    question: 'Diartrosis adalah sebutan ilmiah untuk kelompok sendi yang...',
    options: [
      'Dapat digerakkan secara bebas',
      'Sama sekali tidak dapat bergerak',
      'Hanya bergerak saat manusia tidur',
      'Hanya terdapat pada tulang tengkorak'
    ],
    answerIndex: 0,
    explanation: 'Diartrosis adalah persendian yang memiliki rongga sendi, cairan sinovial, dan dapat digerakkan secara bebas.',
    hint: 'Kebalikan dari sinartrosis (sendi mati).',
    funFact: 'Sebagian besar persendian yang kita pakai untuk berlari dan menulis adalah diartrosis.'
  },
  {
    id: 43,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Kaki',
    question: 'Saat menendang bola, persendian utama pada kaki yang bekerja melipat dan meluruskan tungkai bawah adalah...',
    options: [
      'Sendi engsel pada lutut',
      'Sendi putar pada mata kaki',
      'Sendi pelana di tumit',
      'Sendi mati di telapak kaki'
    ],
    answerIndex: 0,
    explanation: 'Gerakan menekuk ke belakang lalu mengayunkan kaki lurus ke depan saat menendang bola bertumpu pada sendi engsel di lutut.',
    hint: 'Bagian tengah kaki yang bisa ditekuk 1 arah.',
    funFact: 'Sendi lutut manusia dirancang menahan beban hingga 4-5 kali berat badan saat berlari!'
  },
  {
    id: 44,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Rahang',
    question: 'Persendian yang menghubungkan rahang bawah dengan tulang pelipis tengkorak kepala disebut sendi...',
    options: [
      'Temporomandibular (TMJ)',
      'Radioulnar',
      'Sternoklavikula',
      'Tibiofemoral'
    ],
    answerIndex: 0,
    explanation: 'Sendi Temporomandibular (TMJ) menghubungkan os mandibula (rahang bawah) dengan os temporale (pelipis), memungkinkan mulut mengunyah dan berbicara.',
    hint: 'Nama ilmiahnya gabungan dari tulang pelipis (temporal) dan rahang bawah (mandibula).',
    funFact: 'Sendi TMJ adalah salah satu sendi yang paling sering dipakai sepanjang hari, hingga ribuan kali!'
  },
  {
    id: 45,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Keseleo / Terkilir',
    question: 'Keseleo (sprain) pada pergelangan kaki saat berolahraga biasanya terjadi karena...',
    options: [
      'Peregangan berlebihan atau robeknya ligamen sendi',
      'Patahnya seluruh tulang betis',
      'Hilangnya seluruh cairan darah dari tubuh',
      'Otot jantung berhenti berdenyut sementara'
    ],
    answerIndex: 0,
    explanation: 'Keseleo terjadi saat persendian terpelintir melebihi batas elastisitas normalnya sehingga serat pita ligamen tertarik atau robek.',
    hint: 'Terkait dengan pita pengikat persendian yang tertarik keras.',
    funFact: 'Kompres dingin menggunakan es pada 48 jam pertama membantu meredakan bengkak akibat keseleo.'
  },
  {
    id: 46,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Mekanisme Sendi',
    question: 'Mengapa persendian manusia membutuhkan kapsul sendi?',
    options: [
      'Untuk membungkus rongga sendi dan menahan cairan sinovial agar tidak bocor',
      'Untuk menghasilkan sel darah merah baru',
      'Untuk mengalirkan oksigen ke paru-paru',
      'Untuk menghancurkan racun dari makanan'
    ],
    answerIndex: 0,
    explanation: 'Kapsul sendi adalah selaput fibrosa rapat yang mengelilingi rongga sendi, menjaga cairan pelumas sinovial tetap di tempatnya.',
    hint: 'Mirip pembungkus kedap air pelindung cairan pelumas.',
    funFact: 'Kapsul sendi kaya akan ujung saraf penerima posisi tubuh (proprioseptor).'
  },
  {
    id: 47,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Sendi Rusuk',
    question: 'Sambungan antara tulang rusuk dengan tulang dada melalui tulang rawan hialin digolongkan sebagai sendi...',
    options: [
      'Sendi kaku (amfiartrosis)',
      'Sendi peluru',
      'Sendi pelana',
      'Sendi putar'
    ],
    answerIndex: 0,
    explanation: 'Hubungan tulang rusuk dan tulang dada memiliki kelenturan terbatas (sendi kaku) agar rongga dada bisa sedikit mengembang dan mengempis saat kita bernapas.',
    hint: 'Memungkinkan gerakan sedikit saja saat dada kembang kempis.',
    funFact: 'Kelenturan tulang rawan rusuk memungkinkan paru-paru mengembang optimal saat menghirup napas dalam-dalam.'
  },
  {
    id: 48,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Identifikasi Gerak',
    question: 'Jika kamu menggerakkan tanganmu melambai ke kanan dan ke kiri tanda perpisahan, sendi utama yang berperan aktif di pergelangan adalah...',
    options: [
      'Sendi ovoid / kondiloid di pergelangan tangan',
      'Sendi mati di tengkorak',
      'Sendi peluru di lutut',
      'Sendi engsel di tumit'
    ],
    answerIndex: 0,
    explanation: 'Sendi kondiloid di pergelangan tangan menghubungkan ujung tulang pengumpil dengan tulang karpal, memungkinkan gerakan melambai ke samping dan melipat.',
    hint: 'Sendi di pergelangan tangan yang fleksibel dua arah.',
    funFact: 'Lambaian tangan melibatkan koordinasi lebih dari 10 otot dan tendon kecil di lengan bawah.'
  },
  {
    id: 49,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Karakteristik Sendi',
    question: 'Berikut ini pasangan sendi dan jenisnya yang PALING BENAR adalah...',
    options: [
      'Lutut - Sendi Engsel',
      'Bahu - Sendi Engsel',
      'Leher - Sendi Peluru',
      'Siku - Sendi Putar'
    ],
    answerIndex: 0,
    explanation: 'Lutut adalah contoh sendi engsel (gerak satu arah). Bahu adalah sendi peluru, leher adalah sendi putar, dan siku adalah sendi engsel.',
    hint: 'Carilah pasangan di mana lutut bergerak seperti engsel pintu.',
    funFact: 'Sendi lutut adalah sendi terbesar dan paling rumit strukturnya pada tubuh kita.'
  },
  {
    id: 50,
    levelId: 2,
    levelTitle: 'Sistem Persendian',
    difficulty: 'Sedang',
    category: 'Cakram Tulang Belakang',
    question: 'Apa fungsi cakram tulang rawan (diskus intervertebralis) yang berada di antara setiap ruas tulang belakang?',
    options: [
      'Meredam hentakan dan getaran saat melompat atau berjalan',
      'Membuat tulang belakang kaku dan tidak bisa ditekuk',
      'Menghasilkan enzim pencernaan makanan',
      'Menggantikan fungsi otot punggung'
    ],
    answerIndex: 0,
    explanation: 'Diskus intervertebralis bekerja seperti bantalan pegas/shockbreaker yang meredam getaran saat kita berjalan, berlari, dan melompat.',
    hint: 'Bekerja seperti pegas peredam kejut pada roda sepeda motor.',
    funFact: 'Tinggi badan kita bisa berkurang sekitar 1-2 cm di malam hari karena cakram tulang belakang tertekan gravitasi seharian!'
  },

  // ==========================================
  // LEVEL 3: SISTEM OTOT MANUSIA (SOAL 51 - 75) - SEDANG
  // ==========================================
  {
    id: 51,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Fungsi Otot',
    question: 'Mengapa otot disebut sebagai alat gerak aktif pada tubuh manusia?',
    options: [
      'Karena otot memiliki kemampuan untuk berkontraksi dan berelaksasi menggerakkan tulang',
      'Karena otot selalu bersuhu panas setiap saat',
      'Karena otot tidak pernah beristirahat sepanjang hidup',
      'Karena otot berwarna merah segar'
    ],
    answerIndex: 0,
    explanation: 'Otot memiliki protein aktin dan miosin yang dapat memendek (kontraksi) dan memanjang (relaksasi), menghasilkan daya tarik untuk menggerakkan tulang.',
    hint: 'Otot yang menghasilkan gaya tarik aktif untuk bergerak.',
    funFact: 'Otot menyumbang sekitar 40% dari total berat tubuh orang dewasa yang sehat.'
  },
  {
    id: 52,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Macam-Macam Otot',
    question: 'Berapa macam jenis jaringan otot yang dimiliki oleh tubuh manusia?',
    options: [
      '3 macam: otot lurik, otot polos, dan otot jantung',
      '2 macam: otot kuat dan otot lemah',
      '4 macam: otot tangan, otot kaki, otot dada, dan otot perut',
      '5 macam sesuai dengan panca indra'
    ],
    answerIndex: 0,
    explanation: 'Secara histologis dan fungsional, otot manusia dibagi menjadi 3 jenis: otot lurik (otot rangka), otot polos, dan otot jantung.',
    hint: 'Ada 3 jenis berdasarkan bentuk dan tempatnya.',
    funFact: 'Meskipun berbeda bentuk, ketiganya sama-sama bekerja menggunakan protein aktin dan miosin.'
  },
  {
    id: 53,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Otot Lurik',
    question: 'Ciri utama dari otot lurik (otot rangka) adalah...',
    options: [
      'Bekerja di bawah kesadaran (volunter) dan melekat pada rangka tubuh',
      'Bekerja lambat tanpa diperintah otak dan berinti satu di tengah',
      'Hanya terdapat di dinding saluran pencernaan',
      'Tidak mudah lelah dan berdenyut otomatis'
    ],
    answerIndex: 0,
    explanation: 'Otot lurik memiliki garis terang-gelap, berinti banyak di tepi sel, melekat pada tulang, dan dikendalikan secara sadar oleh otak (volunter).',
    hint: 'Otot yang kita perintahkan saat ingin mengangkat tangan atau menendang.',
    funFact: 'Otot lurik bereaksi sangat cepat terhadap rangsangan, namun dapat mengalami kelelahan bila terus-menerus bekerja.'
  },
  {
    id: 54,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Otot Polos',
    question: 'Di bagian organ tubuh manakah kita dapat menemukan jaringan otot polos?',
    options: [
      'Dinding lambung, usus halus, dan pembuluh darah',
      'Melekat pada tulang lengan dan betis',
      'Hanya di bilik kiri jantung',
      'Pada daun telinga dan kelopak mata luar'
    ],
    answerIndex: 0,
    explanation: 'Otot polos melapisi dinding organ-organ dalam seperti saluran pencernaan, pembuluh darah, dan saluran kemih untuk menggerakkan zat secara otomatis.',
    hint: 'Organ-organ pencernaan di dalam rongga perut kita.',
    funFact: 'Gerakan meremas makanan oleh otot polos di kerongkongan dan lambung disebut gerak peristaltik.'
  },
  {
    id: 55,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Otot Polos',
    question: 'Cara kerja otot polos bersifat tidak sadar (involunter). Artinya adalah...',
    options: [
      'Bekerja secara otomatis tanpa perlu kita perintah atau pikirkan',
      'Hanya bekerja saat orang pingsan',
      'Hanya bekerja bila disentuh dengan tangan',
      'Bekerja saat otak sedang memikirkan matematika'
    ],
    answerIndex: 0,
    explanation: 'Involunter berarti diatur oleh sistem saraf otonom sehingga organ dalam tetap bergerak tanpa memerlukan kendali pikiran sadar kita.',
    hint: 'Kamu tidak perlu menyuruh lambungmu mencerna makanan setelah makan siang.',
    funFact: 'Bahkan saat kita tidur lelap, otot polos terus bekerja memompa makanan di usus.'
  },
  {
    id: 56,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Otot Jantung',
    question: 'Pernyataan yang PALING TEPAT mengenai sifat kerja otot jantung adalah...',
    options: [
      'Bentuknya bergaris/bercabang mirip otot lurik, tetapi bekerja otomatis tanpa henti seperti otot polos',
      'Bekerja cepat dan cepat lelah bila banyak bergerak',
      'Bisa kita hentikan sesuka hati dengan menahan napas',
      'Hanya terdapat pada paru-paru dan ginjal'
    ],
    answerIndex: 0,
    explanation: 'Otot jantung memiliki keistimewaan perpaduan: strukturnya berlurik dan bercabang kuat, namun bekerja secara otomatis (involunter) tanpa mengenal lelah.',
    hint: 'Memadukan kekuatan otot lurik dengan ketahanan kerja otot polos.',
    funFact: 'Otot jantung berdenyut sekitar 100.000 kali setiap hari tanpa pernah beristirahat!'
  },
  {
    id: 57,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Tendon',
    question: 'Ujung otot lurik yang liat, keras, dan berwarna putih mengkilap yang menempel langsung pada tulang disebut...',
    options: [
      'Tendon',
      'Ligamen',
      'Kartilago',
      'Sinovial'
    ],
    answerIndex: 0,
    explanation: 'Tendon adalah tali jaringan ikat fibrosa kuat yang menyalurkan gaya tarik dari kontraksi otot langsung ke permukaan tulang.',
    hint: 'Penghubung antara otot dengan tulang.',
    funFact: 'Tendon terbesar dan terkuat di tubuh manusia adalah Tendon Achilles di belakang tumit.'
  },
  {
    id: 58,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Kontraksi Otot',
    question: 'Saat otot sedang mengalami kontraksi, kondisi fisik otot tersebut akan...',
    options: [
      'Memendek, membesar, dan mengeras',
      'Memanjang, mengecil, dan mengendur',
      'Berubah warna menjadi biru',
      'Meleleh menjadi cairan tubuh'
    ],
    answerIndex: 0,
    explanation: 'Ketika berkontraksi, serat protein aktin dan miosin saling bertaut dan menarik sehingga otot menjadi lebih pendek, tebal, dan keras teraba.',
    hint: 'Rasakan otot lengan atasmu saat menekuk siku sekuat tenaga.',
    funFact: 'Otot hanya bisa menarik tulang melalui kontraksi, otot tidak dapat mendorong tulang!'
  },
  {
    id: 59,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Relaksasi Otot',
    question: 'Setelah melakukan kontraksi, otot akan kembali ke keadaan semula (relaksasi). Kondisi otot saat relaksasi adalah...',
    options: [
      'Memanjang, mengecil, dan mengendur (lemas)',
      'Memendek dan semakin keras',
      'Menjadi kaku dan tidak bisa digerakkan',
      'Membengkak dan panas'
    ],
    answerIndex: 0,
    explanation: 'Relaksasi adalah fase istirahat di mana tautan filamen otot terlepas sehingga serat otot memanjang kembali dan terasa lunak saat disentuh.',
    hint: 'Kondisi otot saat tangan diluruskan kembali dalam posisi santai.',
    funFact: 'Proses relaksasi otot sebenarnya juga membutuhkan energi (ATP) agar ikatan aktin-miosin bisa terlepas.'
  },
  {
    id: 60,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Gerak Antagonis',
    question: 'Otot bisep dan otot trisep pada lengan atas bekerja secara berlawanan. Hubungan kerja otot seperti ini disebut gerak...',
    options: [
      'Antagonis',
      'Sinergis',
      'Refleks',
      'Otonom'
    ],
    answerIndex: 0,
    explanation: 'Kerja otot antagonis adalah kerja dua otot yang efek gerakannya saling berlawanan; jika satu berkontraksi maka yang lain berelaksasi.',
    hint: 'Kata "antagonis" sering digunakan untuk dua pihak yang saling berlawanan.',
    funFact: 'Hampir seluruh persendian anggota gerak kita digerakkan oleh pasangan otot antagonis.'
  },
  {
    id: 61,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Mekanisme Menekuk Lengan',
    question: 'Ketika kita menekuk siku mengangkat gelas ke arah mulut, keadaan otot lengan atas adalah...',
    options: [
      'Otot bisep berkontraksi, otot trisep berelaksasi',
      'Otot bisep berelaksasi, otot trisep berkontraksi',
      'Kedua otot bisep dan trisep sama-sama berkontraksi kuat',
      'Kedua otot bisep dan trisep sama-sama berelaksasi lemas'
    ],
    answerIndex: 0,
    explanation: 'Saat menekuk lengan bawah ke atas (fleksi), otot bisep di bagian depan memendek (kontraksi), sedangkan otot trisep di bagian belakang mengendur (relaksasi).',
    hint: 'Otot bagian depan lengan atas menonjol membulat.',
    funFact: 'Nama "bisep" berasal dari bahasa Latin yang berarti memiliki dua kepala/ujung perlekatan.'
  },
  {
    id: 62,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Mekanisme Meluruskan Lengan',
    question: 'Sebaliknya, saat kita meluruskan tangan ke bawah setelah mengangkat beban, keadaan otot lengan atas adalah...',
    options: [
      'Otot bisep berelaksasi, otot trisep berkontraksi',
      'Otot bisep berkontraksi, otot trisep berelaksasi',
      'Otot bisep dan trisep sama-sama bergetar',
      'Otot jantung membantu menarik tangan ke bawah'
    ],
    answerIndex: 0,
    explanation: 'Saat meluruskan tangan (ekstensi), otot trisep di bagian belakang lengan berkontraksi menarik tulang hasta, sementara otot bisep berelaksasi.',
    hint: 'Otot belakang lengan atas yang bekerja menarik siku menjadi lurus.',
    funFact: 'Otot trisep memiliki tiga kepala perlekatan di bagian belakang lengan atas.'
  },
  {
    id: 63,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Gerak Sinergis',
    question: 'Contoh kerja otot sinergis (bekerja bersama-sama saling mendukung ke arah yang sama) adalah...',
    options: [
      'Otot pronator teres dan pronator kuadratus saat menelungkupkan telapak tangan',
      'Otot bisep dan trisep saat memukul bola kasti',
      'Otot dada dan otot betis saat tidur',
      'Otot leher dan otot pinggang saat melompat'
    ],
    answerIndex: 0,
    explanation: 'Otot pronator teres dan pronator quadratus sama-sama berkontraksi bersama untuk menelungkupkan telapak tangan (kerja sinergis).',
    hint: 'Dua otot yang bekerja sama kompak tanpa saling melawan.',
    funFact: 'Otot antartulang rusuk juga bekerja secara sinergis saat kita menarik napas lega.'
  },
  {
    id: 64,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Energi Otot',
    question: 'Zat sumber energi langsung yang digunakan oleh serat otot untuk melakukan kontraksi adalah...',
    options: [
      'ATP (Adenosin Trifosfat) dan glukosa',
      'Zat kapur dan vitamin K',
      'Garam dapur dan kolesterol',
      'Urea dan asam urat'
    ],
    answerIndex: 0,
    explanation: 'Kontraksi otot memerlukan pemecahan molekul kimia berenergi tinggi yaitu ATP (Adenosin Trifosfat) yang dihasilkan dari pembakaran glukosa.',
    hint: 'Bentuk energi biokimia seluler tubuh.',
    funFact: 'Makanan manis dan karbohidrat sehat diubah menjadi glikogen yang disimpan di dalam otot sebagai cadangan energi.'
  },
  {
    id: 65,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Kelelahan Otot',
    question: 'Rasa pegal dan linu pada otot setelah berlari kencang tanpa pemanasan disebabkan oleh penumpukan...',
    options: [
      'Asam laktat di jaringan otot',
      'Gas karbon monoksida',
      'Kristal gula di persendian',
      'Endapan minyak goreng'
    ],
    answerIndex: 0,
    explanation: 'Saat berolahraga berat dengan oksigen terbatas (respirasi anaerob), sel otot menghasilkan asam laktat yang menimbulkan sensasi pegal dan lelah.',
    hint: 'Zat asam sisa pembakaran energi tanpa oksigen cukup.',
    funFact: 'Pendinginan dan peregangan setelah olahraga membantu mempercepat pembuangan asam laktat dari otot.'
  },
  {
    id: 66,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Jumlah Otot',
    question: 'Berapa perkiraan jumlah otot rangka yang dimiliki oleh tubuh manusia?',
    options: [
      'Lebih dari 600 otot',
      'Hanya 50 otot',
      'Tepat 206 otot',
      'Sekitar 100 otot'
    ],
    answerIndex: 0,
    explanation: 'Tubuh manusia memiliki lebih dari 600 otot rangka yang bekerja sama mengendalikan ekspresi wajah, postur tubuh, dan semua gerakan anggota badan.',
    hint: 'Jumlahnya jauh lebih banyak daripada jumlah tulang (206 tulang).',
    funFact: 'Hanya untuk tersenyum saja, manusia menggunakan sekitar 17 otot wajah yang berbeda!'
  },
  {
    id: 67,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Otot Terkecil',
    question: 'Otot terkecil di tubuh manusia yang berfungsi meredam getaran suara keras terletak di bagian...',
    options: [
      'Telinga bagian tengah (otot stapedius)',
      'Ujung jari kelingking',
      'Pangkal bulu mata',
      'Ujung lidah'
    ],
    answerIndex: 0,
    explanation: 'Otot stapedius yang menempel pada tulang sanggurdi di telinga tengah berukuran hanya sekitar 1 milimeter, merupakan otot terkecil di tubuh kita.',
    hint: 'Organ yang kita gunakan untuk mendengar suara.',
    funFact: 'Otot stapedius bereaksi refleks dalam hitungan milidetik saat mendengar suara letusan keras.'
  },
  {
    id: 68,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Otot Terbesar',
    question: 'Otot terbesar dan terkuat yang membantu manusia berdiri tegak dan menaiki tangga adalah otot...',
    options: [
      'Bokong / pantat (gluteus maksimus)',
      'Betis (gastroknemius)',
      'Dada (pektoralis mayor)',
      'Punggung (latissimus dorsi)'
    ],
    answerIndex: 0,
    explanation: 'Gluteus maximus pada area bokong adalah otot dengan volume terbesar di tubuh manusia, bertugas menegakkan panggul dan badan.',
    hint: 'Otot tempat kita duduk.',
    funFact: 'Otot ini sangat berkembang pada manusia dibanding hewan lain karena manusia berjalan dengan dua kaki tegak.'
  },
  {
    id: 69,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Bentuk Sel Otot',
    question: 'Di bawah mikroskop, sel otot polos memiliki bentuk khas yaitu...',
    options: [
      'Gelendong dengan ujung meruncing dan satu inti di tengah',
      'Silinder panjang dengan banyak inti di tepi',
      'Bercabang-cabang dengan anyaman cakram',
      'Kotak bersegi empat dengan dinding tebal'
    ],
    answerIndex: 0,
    explanation: 'Sel otot polos berbentuk fusiform (gelendong menyerupai perahu kecil) dengan bagian tengah menggembung berisi satu inti sel.',
    hint: 'Bentuknya memanjang meruncing di kedua ujungnya.',
    funFact: 'Karena tidak memiliki pita lurik di bawah mikroskop cahaya, otot ini dinamakan otot polos.'
  },
  {
    id: 70,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Bentuk Sel Otot Jantung',
    question: 'Ciri khas penampakan mikroskopis sel otot jantung yang membedakannya dari otot lain adalah...',
    options: [
      'Memiliki cabang-cabang yang saling berhubungan (sinsitium/diskus interkalaris)',
      'Tidak memiliki inti sel sama sekali',
      'Seluruhnya terbuat dari tulang rawan',
      'Bentuknya bulat seperti kelereng'
    ],
    answerIndex: 0,
    explanation: 'Serat otot jantung bercabang dan bersambung satu sama lain melalui diskus interkalaris, memungkinkan gelombang listrik kontraksi menyebar serempak.',
    hint: 'Selnya membentuk anyaman jala yang saling terhubung.',
    funFact: 'Anyaman percabangan ini membuat seluruh bilik jantung dapat memeras darah secara serentak dalam satu detakan.'
  },
  {
    id: 71,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Otot Diafragma',
    question: 'Otot berbentuk kubah yang membatasi rongga dada dan rongga perut serta menjadi otot utama pernapasan adalah...',
    options: [
      'Diafragma',
      'Interkostal',
      'Trapezius',
      'Deltoid'
    ],
    answerIndex: 0,
    explanation: 'Diafragma mendatar saat kita menarik napas (inhalasi) memperbesar volume rongga dada, dan melengkung ke atas saat kita mengembuskan napas.',
    hint: 'Otot yang jika mengalami kejang kejut akan menyebabkan kita cegukan.',
    funFact: 'Cegukan terjadi ketika otot diafragma mengalami kejang tiba-tiba dan pita suara menutup seketika.'
  },
  {
    id: 72,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Tonus Otot',
    question: 'Keadaan sedikit kontraksi alami otot yang berlangsung terus-menerus untuk mempertahankan postur tubuh agar tidak roboh disebut...',
    options: [
      'Tonus otot',
      'Kram otot',
      'Tetanus',
      'Atrofi'
    ],
    answerIndex: 0,
    explanation: 'Tonus otot adalah ketegangan parsial otot yang terus aktif dalam keadaan istirahat untuk menahan kepala dan tulang belakang tetap tegak.',
    hint: 'Ketegangan dasar alami otot yang sehat.',
    funFact: 'Tonus otot akan menurun drastis saat kita tidur lelap sehingga tubuh terasa sangat lemas.'
  },
  {
    id: 73,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Gerak Fleksi & Ekstensi',
    question: 'Gerakan menekuk siku tangan disebut gerak fleksi, sedangkan gerakan meluruskan kembali tangan disebut gerak...',
    options: [
      'Ekstensi',
      'Abduksi',
      'Adduksi',
      'Elevasi'
    ],
    answerIndex: 0,
    explanation: 'Fleksi adalah gerak memperkecil sudut antar-tulang (menekuk), sedangkan ekstensi adalah gerak memperbesar sudut antar-tulang (meluruskan).',
    hint: 'Kata yang berawalan "Eks-" yang berarti merentang atau meluruskan.',
    funFact: 'Pemanasan senam pagi banyak melatih kombinasi gerak fleksi dan ekstensi pada kaki dan tangan.'
  },
  {
    id: 74,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Gerak Menjauhkan & Mendekatkan',
    question: 'Ketika kamu merentangkan tangan ke samping menjauhi sumbu tubuh, gerakan tersebut dinamakan...',
    options: [
      'Abduksi',
      'Adduksi',
      'Supinasi',
      'Depresi'
    ],
    answerIndex: 0,
    explanation: 'Abduksi adalah gerak menjauhkan anggota badan dari garis tengah tubuh (seperti merentangkan tangan), sedangkan adduksi mendekatkan kembali.',
    hint: 'Ingat huruf B pada Abduksi untuk "Buka tangan ke samping".',
    funFact: 'Gerakan burung mengepakkan sayap ke atas adalah abduksi, dan mengayunkan sayap ke bawah adalah adduksi.'
  },
  {
    id: 75,
    levelId: 3,
    levelTitle: 'Sistem Otot Manusia',
    difficulty: 'Sedang',
    category: 'Fungsi Otot',
    question: 'Selain untuk menggerakkan tubuh, saat kita kedinginan otot akan berkontraksi cepat dan bergetar (menggigil). Fungsi menggigil adalah...',
    options: [
      'Menghasilkan panas tubuh untuk menjaga suhu tetap normal',
      'Membuang kelebihan air melalui keringat',
      'Menurunkan tekanan darah secara drastis',
      'Mempercepat penyerapan zat racun'
    ],
    answerIndex: 0,
    explanation: 'Kontraksi otot melepaskan sejumlah besar energi termal (panas). Menggigil adalah refleks pertahanan tubuh untuk menaikkan suhu saat kedinginan.',
    hint: 'Terkait dengan rasa hangat saat suhu sekitar dingin.',
    funFact: 'Hingga 80% energi yang dikeluarkan oleh kerja otot berubah menjadi panas tubuh!'
  },

  // ==========================================
  // LEVEL 4: KELAINAN & KESEHATAN ORGAN GERAK (SOAL 76 - 100) - MENANTANG
  // ==========================================
  {
    id: 76,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kelainan Tulang Belakang',
    question: 'Kelainan tulang belakang yang melengkung berlebihan ke arah depan pada bagian pinggang disebut...',
    options: [
      'Lordosis',
      'Kifosis',
      'Skoliosis',
      'Osteoporosis'
    ],
    answerIndex: 0,
    explanation: 'Lordosis adalah kondisi di mana tulang belakang bagian bawah (lumbal) melengkung terlalu jauh ke depan sehingga perut tampak menonjol ke depan.',
    hint: 'Ingat: Lordosis = lengkung ke depan (maju di pinggang).',
    funFact: 'Lordosis sering dipicu oleh kebiasaan tidur dengan bantal terlalu tinggi atau otot perut yang sangat lemah.'
  },
  {
    id: 77,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kelainan Tulang Belakang',
    question: 'Kebiasaan duduk membungkuk saat belajar dapat menyebabkan kelainan tulang belakang membengkok ke belakang yang disebut...',
    options: [
      'Kifosis',
      'Lordosis',
      'Skoliosis',
      'Fraktura'
    ],
    answerIndex: 0,
    explanation: 'Kifosis adalah kelainan di mana tulang punggung melengkung berlebihan ke arah belakang sehingga penderitanya tampak bungkuk.',
    hint: 'Punggung atas tampak membulat cembung ke belakang.',
    funFact: 'Sering menunduk menatap layar gawai dalam waktu lama dapat memicu kondisi leher bungkuk yang disebut "text neck".'
  },
  {
    id: 78,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kelainan Tulang Belakang',
    question: 'Jika seseorang sering membawa tas ransel berat hanya pada satu sisi bahu, tulang belakangnya berisiko membengkok ke kiri atau kanan menyerupai huruf S. Kelainan ini disebut...',
    options: [
      'Skoliosis',
      'Lordosis',
      'Kifosis',
      'Artritis'
    ],
    answerIndex: 0,
    explanation: 'Skoliosis adalah kelainan tulang belakang yang meliuk bengkok ke arah samping kiri atau kanan membentuk pola huruf C atau S.',
    hint: 'Ingat huruf S pada nama kelainan ini sesuai bentuk bengkoknya.',
    funFact: 'Pemeriksaan skoliosis sederhana bisa dilakukan dengan membungkukkan badan ke depan (Adams forward bend test).'
  },
  {
    id: 79,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Penyakit Tulang',
    question: 'Penyakit penurunan kepadatan tulang yang menyebabkan tulang menjadi keropos, rapuh, dan mudah patah terutama pada lansia disebut...',
    options: [
      'Osteoporosis',
      'Rakhitis',
      'Polio',
      'Tetanus'
    ],
    answerIndex: 0,
    explanation: 'Osteoporosis adalah penyakit keropos tulang akibat berkurangnya massa kalsium dan matriks tulang, sering terjadi pada usia lanjut.',
    hint: 'Kata "porosis" berkaitan dengan pori-pori yang membesar dan keropos.',
    funFact: 'Masa puncak kepadatan tulang manusia terbentuk di usia remaja, sehingga mengonsumsi kalsium sejak SD sangat penting!'
  },
  {
    id: 80,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Penyakit Tulang Anak',
    question: 'Kekurangan vitamin D dan kalsium pada masa pertumbuhan anak dapat menyebabkan tulang kaki tumbuh bengkok membentuk huruf O atau X. Penyakit ini disebut...',
    options: [
      'Rakhitis (Rickets)',
      'Lordosis',
      'Atrofi otot',
      'Hipertrofi'
    ],
    answerIndex: 0,
    explanation: 'Rakhitis adalah penyakit pelunakan tulang pada anak akibat defisiensi vitamin D, fosfor, atau kalsium sehingga kaki membengkok menahan berat badan.',
    hint: 'Penyakit yang dapat dicegah dengan rajin berjemur sinar matahari pagi.',
    funFact: 'Sinar matahari pagi membantu kulit memproduksi provitamin D menjadi vitamin D aktif.'
  },
  {
    id: 81,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Cedera Tulang',
    question: 'Patah tulang akibat benturan keras saat kecelakaan disebut fraktura. Jika patahan tulang menembus kulit dan keluar, fraktura ini disebut...',
    options: [
      'Fraktura terbuka',
      'Fraktura tertutup',
      'Fisura (retak tulang)',
      'Dislokasi'
    ],
    answerIndex: 0,
    explanation: 'Fraktura terbuka adalah kondisi patah tulang di mana ujung tulang yang patah merobek daging dan kulit sehingga mencuat ke permukaan.',
    hint: 'Kulit luar terbuka robek.',
    funFact: 'Sel-sel tulang (osteoblas) dapat memperbaiki patah tulang dengan membentuk jaringan tulang baru yang disebut kalus.'
  },
  {
    id: 82,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Cedera Tulang',
    question: 'Kondisi tulang yang mengalami keretakan tetapi tidak sampai patah terpisah menjadi dua bagian disebut...',
    options: [
      'Fisura',
      'Fraktura',
      'Dislokasi',
      'Ankilosis'
    ],
    answerIndex: 0,
    explanation: 'Fisura adalah retak rambut atau retakan pada tulang tanpa pergeseran fragmen tulang dari tempat asalnya.',
    hint: 'Istilah medis untuk retak tulang.',
    funFact: 'Fisura tulang tetap memerlukan gips atau penopang agar retakan tidak membesar menjadi patah total.'
  },
  {
    id: 83,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kelainan Otot',
    question: 'Kondisi mengecilnya ukuran otot disertai penurunan kekuatan dan fungsinya akibat lama tidak digunakan (misalnya saat sakit lama berbaring) disebut...',
    options: [
      'Atrofi otot',
      'Hipertrofi otot',
      'Tetanus',
      'Kram'
    ],
    answerIndex: 0,
    explanation: 'Atrofi otot adalah penyusutan massa dan volume jaringan otot yang terjadi saat otot tidak aktif bergerak atau mengalami kerusakan saraf motorik.',
    hint: 'Otot yang menyusut kecil karena tidak pernah dilatih.',
    funFact: 'Para astronaut di stasiun luar angkasa harus berolahraga setiap hari agar tidak mengalami atrofi otot akibat ketiadaan gravitasi!'
  },
  {
    id: 84,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kelainan Otot',
    question: 'Pembesaran massa dan kekuatan otot akibat latihan beban yang rutin dan nutrisi protein yang cukup dinamakan...',
    options: [
      'Hipertrofi otot',
      'Atrofi otot',
      'Distrofi otot',
      'Osteomalasia'
    ],
    answerIndex: 0,
    explanation: 'Hipertrofi otot adalah peningkatan ukuran sel-sel otot rangka sebagai respons adaptasi terhadap latihan beban yang teratur.',
    hint: 'Kebalikan dari atrofi; dialami oleh atlet binaraga.',
    funFact: 'Hipertrofi tidak menambah jumlah sel otot, melainkan membuat setiap serat otot menjadi lebih tebal dan bervolume.'
  },
  {
    id: 85,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Penyakit Infeksi Otot',
    question: 'Penyakit kejang otot terus-menerus yang sangat berbahaya akibat infeksi bakteri Clostridium tetani melalui luka kotor atau tertusuk paku berkarat adalah...',
    options: [
      'Tetanus',
      'Polio',
      'Kusta',
      'Dislokasi'
    ],
    answerIndex: 0,
    explanation: 'Bakteri Clostridium tetani menghasilkan racun tetanospasmin yang memblokir sinyal relaksasi saraf, menyebabkan otot kejang kaku terus-menerus.',
    hint: 'Dapat dicegah dengan imunisasi DPT atau vaksin TT.',
    funFact: 'Salah satu gejala awal tetanus adalah kekakuan pada rahang yang disebut "lockjaw".'
  },
  {
    id: 86,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Penyakit Saraf & Gerak',
    question: 'Penyakit kelumpuhan otot pada anak akibat infeksi virus yang merusak saraf penggerak pada sumsum tulang belakang adalah...',
    options: [
      'Polio (Poliomielitis)',
      'Tetanus',
      'Atrofi',
      'Skoliosis'
    ],
    answerIndex: 0,
    explanation: 'Virus polio menyerang sel kornu anterior medula spinalis sehingga otot yang dipersarafi tidak dapat digerakkan dan mengalami kelumpuhan layu.',
    hint: 'Penyakit yang dicegah pemerintah melalui tetes imunisasi balita.',
    funFact: 'Indonesia bersama WHO terus menggalakkan Pekan Imunisasi Nasional (PIN) Polio untuk melindungi seluruh anak bangsa.'
  },
  {
    id: 87,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kelainan Sendi',
    question: 'Peradangan dan pembengkakan pada persendian yang menimbulkan rasa nyeri kaku saat digerakkan dinamakan...',
    options: [
      'Artritis (radang sendi)',
      'Lordosis',
      'Atrofi',
      'Fisura'
    ],
    answerIndex: 0,
    explanation: 'Artritis adalah inflamasi pada jaringan persendian yang dapat disebabkan oleh penuaan (osteoartritis), asam urat (gout), atau reaksi autoimun (reumatoid).',
    hint: 'Kata berakhiran "-itis" menunjukkan adanya peradangan/radang.',
    funFact: 'Asam urat yang terlalu tinggi dalam darah bisa mengkristal di dalam sendi jempol kaki dan memicu radang artritis gout.'
  },
  {
    id: 88,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Cedera Sendi',
    question: 'Kondisi terlepas atau bergesernya ujung tulang dari mangkok persendian akibat tarikan atau benturan keras disebut...',
    options: [
      'Dislokasi sendi',
      'Fraktura terbuka',
      'Osteoporosis',
      'Kifosis'
    ],
    answerIndex: 0,
    explanation: 'Dislokasi adalah kondisi darurat di mana posisi tulang keluar dari rongga persendian normalnya dan harus dikembalikan oleh tenaga medis terlatih.',
    hint: 'Tulang bergeser keluar dari lokasi aslinya.',
    funFact: 'Sendi bahu dan jari adalah sendi yang paling sering mengalami dislokasi saat berolahraga bela diri.'
  },
  {
    id: 89,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kelainan Leher',
    question: 'Bangun tidur dengan leher terasa kaku, nyeri, dan tidak dapat digerakkan menoleh ke samping (stiff neck) sering kali disebabkan oleh...',
    options: [
      'Peradangan otot leher (trapezius) akibat posisi tidur yang salah atau bantal terlalu tebal',
      'Kekurangan vitamin A pada mata',
      'Patah tulang selangka',
      'Terlalu banyak makan buah manis'
    ],
    answerIndex: 0,
    explanation: 'Kaku leher (stiff neck / tortikolis sementara) timbul karena otot trapezius dan levator scapulae meregang tegang atau spasme akibat posisi tidur yang janggal.',
    hint: 'Sering disebut orang awam dengan istilah "salah bantal".',
    funFact: 'Kompres hangat dan peregangan leher perlahan dapat merelaksasi serat otot leher yang kaku.'
  },
  {
    id: 90,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Kram Otot',
    question: 'Saat berenang di air dingin, tiba-tiba otot betis berkontraksi sangat keras secara mendadak dan terasa sangat sakit. Kondisi ini disebut...',
    options: [
      'Kram / spasme otot',
      'Atrofi otot',
      'Fraktura kaki',
      'Rakhitis akut'
    ],
    answerIndex: 0,
    explanation: 'Kram adalah kontraksi otot involunter yang terjadi secara mendadak, hebat, dan berkepanjangan, sering dipicu suhu dingin, kelelahan, dan dehidrasi.',
    hint: 'Otot betis mengeras seperti batu dan sakit digerakkan.',
    funFact: 'Peregangan perlahan pada arah berlawanan (menarik ujung jari kaki ke atas) membantu melepas kram betis.'
  },
  {
    id: 91,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Cara Menjaga Kesehatan',
    question: 'Posisi duduk yang BENAR saat membaca atau menulis di meja belajar adalah...',
    options: [
      'Punggung tegak lurus, pandangan lurus ke depan, kedua telapak kaki menapak rata di lantai',
      'Membungkuk dekat sekali dengan buku agar lebih jelas',
      'Menumpukan beban tubuh miring pada satu sisi lengan',
      'Menyandarkan dagu di atas meja sambil menyilangkan kaki'
    ],
    answerIndex: 0,
    explanation: 'Duduk tegak dengan dukungan punggung yang baik menjaga kelengkungan alami tulang belakang dan mencegah kifosis atau skoliosis sejak dini.',
    hint: 'Posisi yang membuat punggung lurus dan tidak cepat pegal.',
    funFact: 'Aturan ergonomis menyarankan jarak antara mata dan buku sekitar 30-40 cm saat membaca.'
  },
  {
    id: 92,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Cara Mengangkat Beban',
    question: 'Cara mengangkat benda berat dari lantai yang aman bagi kesehatan tulang belakang adalah...',
    options: [
      'Menekuk kedua lutut dalam posisi jongkok lalu mengangkat dengan kekuatan kaki, punggung tetap tegak',
      'Membungkukkan pinggang langsung ke bawah dengan lutut tetap lurus',
      'Menarik benda dengan mengandalkan leher',
      'Mengangkat benda sambil memutar pinggang secara mendadak'
    ],
    answerIndex: 0,
    explanation: 'Mengangkat beban dengan menekuk lutut menyalurkan beban ke otot paha yang kuat, menghindari cedera saraf terjepit (HNP) pada bantalan tulang punggung.',
    hint: 'Gunakan kekuatan otot paha dan kaki, bukan punggung yang dibungkukkan.',
    funFact: 'Membungkuk saat mengangkat beban 10 kg dapat memberikan tekanan setara 100 kg pada ruas tulang belakang bawah!'
  },
  {
    id: 93,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Nutrisi Tulang',
    question: 'Makanan dan minuman berikut ini yang paling kaya akan kalsium untuk memperkuat tulang anak adalah...',
    options: [
      'Susu sapi, keju, yoghurt, ikan teri, dan sayuran hijau seperti brokoli',
      'Mi instan, kerupuk, dan permen manis',
      'Nasi putih dan sirup rasa buah',
      'Gorengan dan minuman bersoda'
    ],
    answerIndex: 0,
    explanation: 'Susu, olahan susu, ikan teri yang dimakan bersama tulangnya, serta brokoli kaya akan mineral kalsium murni yang siap diserap tubuh.',
    hint: 'Kelompok makanan tinggi gizi dan protein hewani serta nabati.',
    funFact: 'Ikan teri kecil merupakan salah satu sumber kalsium alami termurah dan terbaik karena seluruh durinya ikut terkonsumsi.'
  },
  {
    id: 94,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Manfaat Sinar Matahari',
    question: 'Mengapa berjemur di bawah sinar matahari pagi sangat bermanfaat untuk kesehatan tulang anak?',
    options: [
      'Sinar ultraviolet membantu tubuh mengubah provitamin D di kulit menjadi vitamin D aktif yang menyerap kalsium',
      'Sinar matahari langsung memasukkan kalsium cair melalui pori-pori kulit',
      'Sinar matahari membunuh seluruh kalsium jahat di dalam tulang',
      'Sinar matahari membuat tulang menjadi transparan'
    ],
    answerIndex: 0,
    explanation: 'Tubuh membutuhkan vitamin D aktif untuk dapat menyerap kalsium dari makanan di usus. Sinar matahari pagi memicu sintesis vitamin D alami di lapisan epidermis kulit.',
    hint: 'Hubungan antara sinar matahari dan pembentukan vitamin D.',
    funFact: 'Cukup 10-15 menit berjemur sebelum pukul 09.00 pagi sudah mencukupi kebutuhan vitamin D harian anak.'
  },
  {
    id: 95,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Pemanasan Olahraga',
    question: 'Tujuan utama melakukan pemanasan (warming up) dan peregangan sebelum berolahraga adalah...',
    options: [
      'Meningkatkan suhu otot dan elastisitas sendi agar terhindar dari cedera atau kram',
      'Menghabiskan tenaga lebih awal agar cepat selesai',
      'Membuat detak jantung berhenti sementara',
      'Mengurangi jumlah keringat yang keluar'
    ],
    answerIndex: 0,
    explanation: 'Pemanasan meningkatkan sirkulasi darah ke otot, melumasi sendi dengan cairan sinovial, dan melenturkan tendon sehingga risiko robek atau kram berkurang drastis.',
    hint: 'Mempersiapkan otot dan sendi sebelum kerja keras.',
    funFact: 'Otot yang hangat 20% lebih elastis dan lebih tahan terhadap robekan dibanding otot dingin.'
  },
  {
    id: 96,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Bahaya Minuman Bersoda',
    question: 'Terlalu sering mengonsumsi minuman bersoda manis berkarbonasi dapat berdampak buruk pada tulang karena...',
    options: [
      'Kandungan asam fosfat berlebih dapat menghambat penyerapan kalsium dan mengikis kepadatan tulang',
      'Soda dapat membekukan sumsum tulang',
      'Soda mengubah tulang keras menjadi spons basah',
      'Soda menghentikan kerja seluruh persendian'
    ],
    answerIndex: 0,
    explanation: 'Asam fosfat dalam jumlah tinggi pada minuman soda dapat mengganggu keseimbangan kalsium-fosfor tubuh, memicu pelepasan kalsium dari tulang ke urine.',
    hint: 'Asam berlebih memicu pengeroposan mineral kalsium.',
    funFact: 'Mengganti minuman bersoda dengan air putih atau susu segar adalah langkah cerdas menjaga tulang tetap padat.'
  },
  {
    id: 97,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Penyakit Autoimun',
    question: 'Penyakit radang sendi yang terjadi ketika sistem kekebalan tubuh (antibodi) keliru menyerang selaput sendi sendiri dinamakan...',
    options: [
      'Reumatoid Artritis',
      'Fraktura tertutup',
      'Osteoporosis',
      'Lordosis kongenital'
    ],
    answerIndex: 0,
    explanation: 'Reumatoid Artritis adalah kelainan autoimun di mana sistem imun menyerang membran sinovial sendi, menyebabkan peradangan kronis, nyeri, dan pembengkakan sendi simetris.',
    hint: 'Penyakit rematik akibat sistem kekebalan tubuh.',
    funFact: 'Biasanya menyerang sendi-sendi kecil pada kedua jari tangan secara bersamaan.'
  },
  {
    id: 98,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Berat Beban Tas Sekolah',
    question: 'Menurut dokter spesialis ortopedi anak, berat tas ransel sekolah yang aman dibawa oleh siswa SD maksimal adalah...',
    options: [
      '10% sampai 15% dari berat badan siswa',
      '50% dari berat badan siswa',
      'Sama persis dengan berat badan siswa',
      'Tidak ada batasan selama muat di tas'
    ],
    answerIndex: 0,
    explanation: 'Membawa ransel lebih dari 10-15% berat badan memaksa anak membungkuk ke depan dan menarik otot punggung berlebihan, memicu sakit punggung dan perubahan kurvatura tulang.',
    hint: 'Beban yang ringan sekitar sepersepuluh dari berat badan anak.',
    funFact: 'Jika berat badanmu 30 kg, beban isi tas sekolah sebaiknya tidak melebihi 3 hingga 4,5 kg.'
  },
  {
    id: 99,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Pertolongan Pertama RICE',
    question: 'Prinsip pertolongan pertama pada cedera terkilir / pergelangan kaki bengkak dikenal dengan metode R.I.C.E., yaitu singkatan dari...',
    options: [
      'Rest (Istirahat), Ice (Kompres Es), Compression (Balut Tekan), Elevation (Tinggikan posisi)',
      'Run (Lari), Iron (Setrika), Clean (Bersihkan), Eat (Makan)',
      'Rub (Gosok keras), Inject (Suntik), Cut (Potong), Exercise (Olahraga)',
      'Rotate (Putar), Immerse (Rendam air panas), Cool (Keringkan), Escape (Tidur)'
    ],
    answerIndex: 0,
    explanation: 'RICE adalah standar pertolongan pertama cedera sendi dan otot: istirahatkan sendi, beri es pereda bengkak, balut perban elastis, dan tinggikan posisi di atas jantung.',
    hint: 'Istirahatkan, dinginkan dengan es, balut, dan angkat ke atas.',
    funFact: 'Jangan memijat keras persendian yang baru saja terkilir karena dapat memperparah robekan ligamen dan perdarahan dalam!'
  },
  {
    id: 100,
    levelId: 4,
    levelTitle: 'Kelainan & Kesehatan',
    difficulty: 'Menantang',
    category: 'Refleksi Kesehatan',
    question: 'Sebagai wujud syukur atas anugerah organ gerak tubuh ciptaan Tuhan Yang Maha Esa, tindakan nyata terbaik yang harus kita lakukan setiap hari adalah...',
    options: [
      'Menerapkan pola hidup sehat, rajin berolahraga, makan bergizi, dan menjaga postur tubuh yang baik',
      'Bermain gim gawai seharian di tempat tidur tanpa bergerak',
      'Membawa beban seberat mungkin untuk membuktikan kekuatan otot',
      'Menghindari makan sayuran dan hanya minum minuman manis bersoda'
    ],
    answerIndex: 0,
    explanation: 'Menjaga kesehatan organ gerak dengan gizi seimbang, olahraga teratur, istirahat cukup, dan postur tubuh yang benar adalah cerminan rasa syukur dan tanggung jawab diri.',
    hint: 'Pilihlah sikap positif yang merawat tubuh dengan bijak.',
    funFact: 'Tubuh yang bugar dan aktif membantu otak kita lebih cerdas dan berprestasi dalam belajar!'
  }
];
