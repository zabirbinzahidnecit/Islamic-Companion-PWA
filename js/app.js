/* Islamic-Companion v3.0.0 - Complete JavaScript with all fixes */
(function() {
'use strict';

// ==================== TRANSLATIONS ====================
const translations = {
  en: {
    appName: 'Islamic-Companion',
    settings: '⚙️ Settings',
    themeSelection: '🎨 Theme',
    themeGreen: 'Green', themeBlue: 'Blue', themePurple: 'Purple',
    themeRose: 'Rose', themeTeal: 'Teal', themeAmber: 'Amber',
    timeSeasonTheme: 'Time/Season Theme',
    language: '🌐 Language',
    appLanguage: 'App Language',
    audioSettings: '🔊 Audio',
    audioPlayback: 'Audio Playback',
    autoPlayNext: 'Auto-play Next Ayah',
    audioSpeed: 'Playback Speed',
    locationSettings: '📍 Location',
    autoDetect: 'Auto Detect',
    detect: 'Detect',
    city: 'City', country: 'Country',
    prayerSettings: '🕌 Prayer Settings',
    calcMethod: 'Calculation Method',
    madhab: 'Madhab (Asr)',
    notificationSettings: '🔔 Notifications',
    adhanNotification: 'Adhan Notification',
    preAlert: 'Pre-Prayer Alert',
    about: 'ℹ️ About',
    createdBy: 'Created by <strong>EXIT EXCIT</strong>',
    saveSettings: '💾 Save Settings',
    bismillahMeaning: 'In the name of Allah, the Most Gracious, the Most Merciful',
    nextPrayer: 'Next Prayer',
    hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
    sehriEnd: 'Sehri Ends', iftarTime: 'Iftar Time',
    prayerTimes: '🕌 Prayer Times',
    qibla: 'Qibla', tasbih: 'Tasbih', quran: 'Quran', more: 'More',
    islamicDate: 'Islamic Date',
    dailyAyah: '📖 Ayah of the Day',
    nobleQuran: 'The Noble Quran',
    searchSurah: '🔍 Search Surah...',
    loadingQuran: 'Loading Quran...',
    nobleHadith: 'The Noble Hadith',
    bukhari: 'Bukhari', muslim: 'Muslim', abuDawud: 'Abu Dawud',
    tirmidhi: 'Tirmidhi', nasai: 'Nasai', ibnMajah: 'Ibn Majah',
    banglaTranslation: 'Bangla',
    searchHadith: '🔍 Enter hadith number...',
    loadingHadith: 'Loading Hadith...',
    previous: '◀ Previous', next: 'Next ▶',
    moreTools: '🔧 Islamic Tools',
    tasbihCounter: 'Tasbih Counter',
    dhikr: 'Dhikr:',
    tap: 'TAP',
    reset: 'Reset',
    rounds: 'Rounds: 0',
    zakatCalculator: 'Zakat Calculator',
    savings: '💵 Savings / Cash',
    gold: '🥇 Gold Value',
    silver: '🥈 Silver Value',
    investments: '📈 Investments',
    business: '🏪 Business Assets',
    debtsOwed: '💸 Debts Owed to You',
    debtsOwe: '💳 Debts You Owe (Deduct)',
    calculateZakat: '💰 Calculate Zakat',
    totalAssets: 'Total Assets',
    nisab: 'Nisab Threshold',
    zakatDue: 'Zakat Due (2.5%)',
    asmaulHusna: 'Asmaul Husna - 99 Names',
    duaCollection: 'Dua Collection',
    selectQari: '🎙️ Select Qari',
    ayah: 'Ayah',
    home: 'Home', hadith: 'Hadith',
    installApp: 'Install Islamic-Companion',
    installDesc: 'Add to home screen',
    install: 'Install', later: 'Later',
    createdByExit: 'Created by <strong>EXIT EXCIT</strong>',
    fajr: 'Fajr', sunrise: 'Sunrise', dhuhr: 'Dhuhr',
    asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha',
    audioDisabled: 'Audio is disabled in settings',
    audioPlayFailed: 'Unable to play audio. Try a different Qari.',
    hadithLoadError: 'Failed to load hadith. Please try again.',
    noHadithFound: 'No hadith found.',
    audioOff: 'Audio OFF',
    audioOn: 'Audio ON',
    custom: 'Custom',
    meccan: 'Meccan', medinan: 'Medinan',
    ayahs: 'Ayahs',
    playAll: 'Play All',
    stopAll: 'Stop',
    byBook: 'By Book',
    byCategory: 'By Category',
    backToCategories: 'Back to Categories',
    repeatOn: 'Repeat ON',
    repeatOff: 'Repeat OFF',
    roundComplete: 'Round complete!',
    exitConfirm: 'Press back again to exit',
    categoryFaith: 'Faith (Iman)',
    categoryPrayer: 'Prayer (Salah)',
    categoryFasting: 'Fasting (Sawm)',
    categoryCharity: 'Charity (Zakat/Sadaqah)',
    categoryPilgrimage: 'Pilgrimage (Hajj)',
    categoryMorals: 'Morals & Character',
    categoryKnowledge: 'Knowledge & Education',
    categoryFamily: 'Family & Marriage',
    categoryDua: 'Dua & Dhikr',
    categoryPatience: 'Patience & Gratitude',
  },
  bn: {
    appName: 'Islamic-Companion',
    settings: '⚙️ সেটিংস',
    themeSelection: '🎨 থিম',
    themeGreen: 'সবুজ', themeBlue: 'নীল', themePurple: 'বেগুনি',
    themeRose: 'গোলাপি', themeTeal: 'টিল', themeAmber: 'অ্যাম্বার',
    timeSeasonTheme: 'সময়/ঋতু থিম',
    language: '🌐 ভাষা',
    appLanguage: 'অ্যাপের ভাষা',
    audioSettings: '🔊 অডিও',
    audioPlayback: 'অডিও প্লেব্যাক',
    autoPlayNext: 'স্বয়ংক্রিয়ভাবে পরবর্তী আয়াত চালান',
    audioSpeed: 'প্লেব্যাক গতি',
    locationSettings: '📍 অবস্থান',
    autoDetect: 'স্বয়ংক্রিয় সনাক্ত',
    detect: 'সনাক্ত',
    city: 'শহর', country: 'দেশ',
    prayerSettings: '🕌 নামাজ সেটিংস',
    calcMethod: 'হিসাব পদ্ধতি',
    madhab: 'মাযহাব (আসর)',
    notificationSettings: '🔔 বিজ্ঞপ্তি',
    adhanNotification: 'আজান বিজ্ঞপ্তি',
    preAlert: 'নামাজ-পূর্ব সতর্কতা',
    about: 'ℹ️ সম্পর্কে',
    createdBy: 'তৈরি করেছে <strong>EXIT EXCIT</strong>',
    saveSettings: '💾 সংরক্ষণ',
    bismillahMeaning: 'পরম করুণাময় ও দয়ালু আল্লাহর নামে',
    nextPrayer: 'পরবর্তী নামাজ',
    hours: 'ঘণ্টা', minutes: 'মিনিট', seconds: 'সেকেন্ড',
    sehriEnd: 'সেহরি শেষ', iftarTime: 'ইফতার সময়',
    prayerTimes: '🕌 নামাজের সময়',
    qibla: 'কিবলা', tasbih: 'তাসবিহ', quran: 'কুরআন', more: 'আরও',
    islamicDate: 'ইসলামিক তারিখ',
    dailyAyah: '📖 আজকের আয়াত',
    nobleQuran: 'পবিত্র কুরআন',
    searchSurah: '🔍 সূরা খুঁজুন...',
    loadingQuran: 'কুরআন লোড হচ্ছে...',
    nobleHadith: 'পবিত্র হাদিস',
    bukhari: 'বুখারী', muslim: 'মুসলিম', abuDawud: 'আবু দাউদ',
    tirmidhi: 'তিরমিযী', nasai: 'নাসাঈ', ibnMajah: 'ইবনে মাজাহ',
    banglaTranslation: 'বাংলা',
    searchHadith: '🔍 হাদিস নম্বর দিন...',
    loadingHadith: 'হাদিস লোড হচ্ছে...',
    previous: '◀ আগে', next: 'পরে ▶',
    moreTools: '🔧 ইসলামিক টুলস',
    tasbihCounter: 'তাসবিহ কাউন্টার',
    dhikr: 'যিকির:',
    tap: 'ট্যাপ',
    reset: 'রিসেট',
    rounds: 'রাউন্ড: 0',
    zakatCalculator: 'যাকাত ক্যালকুলেটর',
    savings: '💵 সঞ্চয় / নগদ',
    gold: '🥇 সোনার মূল্য',
    silver: '🥈 রূপার মূল্য',
    investments: '📈 বিনিয়োগ',
    business: '🏪 ব্যবসায়িক সম্পদ',
    debtsOwed: '💸 পাওনা অর্থ',
    debtsOwe: '💳 ঋণ (বাদ)',
    calculateZakat: '💰 যাকাত হিসাব',
    totalAssets: 'মোট সম্পদ',
    nisab: 'নিসাব সীমা',
    zakatDue: 'যাকাত (২.৫%)',
    asmaulHusna: 'আসমাউল হুসনা - ৯৯ নাম',
    duaCollection: 'দোয়া সংকলন',
    selectQari: '🎙️ কারী নির্বাচন',
    ayah: 'আয়াত',
    home: 'হোম', hadith: 'হাদিস',
    installApp: 'Islamic-Companion ইনস্টল করুন',
    installDesc: 'হোম স্ক্রিনে যোগ করুন',
    install: 'ইনস্টল', later: 'পরে',
    createdByExit: 'তৈরি করেছে <strong>EXIT EXCIT</strong>',
    fajr: 'ফজর', sunrise: 'সূর্যোদয়', dhuhr: 'যোহর',
    asr: 'আসর', maghrib: 'মাগরিব', isha: 'ইশা',
    audioDisabled: 'সেটিংসে অডিও নিষ্ক্রিয় আছে',
    audioPlayFailed: 'অডিও চালানো যায়নি। অন্য কারী চেষ্টা করুন।',
    hadithLoadError: 'হাদিস লোড করা যায়নি। আবার চেষ্টা করুন।',
    noHadithFound: 'কোনো হাদিস পাওয়া যায়নি।',
    audioOff: 'অডিও বন্ধ',
    audioOn: 'অডিও চালু',
    custom: 'কাস্টম',
    meccan: 'মাক্কী', medinan: 'মাদানী',
    ayahs: 'আয়াত',
    playAll: 'চালান',
    stopAll: 'বন্ধ',
    byBook: 'গ্রন্থ অনুযায়ী',
    byCategory: 'বিভাগ অনুযায়ী',
    backToCategories: 'বিভাগে ফিরুন',
    repeatOn: 'রিপিট চালু',
    repeatOff: 'রিপিট বন্ধ',
    roundComplete: 'রাউন্ড সম্পন্ন!',
    exitConfirm: 'বন্ধ করতে আবার ব্যাক চাপুন',
    categoryFaith: 'ঈমান (বিশ্বাস)',
    categoryPrayer: 'নামাজ (সালাত)',
    categoryFasting: 'রোজা (সাওম)',
    categoryCharity: 'যাকাত/সদকা',
    categoryPilgrimage: 'হজ্জ',
    categoryMorals: 'চরিত্র ও আদব',
    categoryKnowledge: 'জ্ঞান ও শিক্ষা',
    categoryFamily: 'পরিবার ও বিবাহ',
    categoryDua: 'দোয়া ও যিকির',
    categoryPatience: 'ধৈর্য ও কৃতজ্ঞতা',
  }
};

// ==================== QARI LIST ====================
const QARI_LIST = [
  { id: 'ar.alafasy', name: 'Mishary Rashid Alafasy', lang: 'Arabic', avatar: '🎤' },
  { id: 'ar.abdurrahmaansudais', name: 'Abdurrahman As-Sudais', lang: 'Arabic', avatar: '🎤' },
  { id: 'ar.abdulbasitmurattal', name: 'Abdul Basit (Murattal)', lang: 'Arabic', avatar: '🎤' },
  { id: 'ar.hudhaify', name: 'Ali Al-Hudhaify', lang: 'Arabic', avatar: '🎤' },
  { id: 'ar.minshawi', name: 'Mohamed Siddiq El-Minshawi', lang: 'Arabic', avatar: '🎤' },
  { id: 'ar.husary', name: 'Mahmoud Khalil Al-Husary', lang: 'Arabic', avatar: '🎤' },
  { id: 'bn.bengali', name: 'বাংলা তিলাওয়াত', lang: 'Bengali', avatar: '🎙️', backup: true },
  { id: 'en.walk', name: 'Ibrahim Walk (English)', lang: 'English', avatar: '🎙️' },
];

// ==================== HADITH DATA (BUILT-IN) ====================
const HADITH_DATA = {
  bukhari: {
    name: 'Sahih al-Bukhari', nameBn: 'সহীহ বুখারী', total: 7563,
    hadiths: [
      { num: 1, narrator: 'Umar ibn al-Khattab', narratorBn: 'উমর ইবনুল খাত্তাব (রা.)', arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى', en: 'Actions are judged by intentions, and everyone will be rewarded according to what they intended.', bn: 'সকল কাজ নিয়তের উপর নির্ভরশীল, আর প্রত্যেক ব্যক্তি তার নিয়ত অনুযায়ী ফল লাভ করবে।', category: 'faith' },
      { num: 2, narrator: 'Aisha', narratorBn: 'আয়িশা (রা.)', arabic: 'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ', en: 'Whoever introduces something into this matter of ours that is not part of it, it will be rejected.', bn: 'যে ব্যক্তি আমাদের এই দ্বীনে এমন কিছু আবিষ্কার করবে যা এর অংশ নয়, তা প্রত্যাখ্যাত।', category: 'faith' },
      { num: 3, narrator: 'Nu\'man bin Bashir', narratorBn: 'নু\'মান ইবনে বাশীর (রা.)', arabic: 'الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ', en: 'The lawful is clear and the unlawful is clear, and between them are doubtful matters.', bn: 'হালাল স্পষ্ট এবং হারাম স্পষ্ট, আর এদের মাঝে সন্দেহজনক বিষয় রয়েছে।', category: 'faith' },
      { num: 4, narrator: 'Abdullah bin Amr', narratorBn: 'আব্দুল্লাহ ইবনে আমর (রা.)', arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ', en: 'None of you truly believes until he loves for his brother what he loves for himself.', bn: 'তোমাদের কেউ প্রকৃত মুমিন হতে পারবে না, যতক্ষণ না সে তার ভাইয়ের জন্য তা ভালোবাসে যা সে নিজের জন্য ভালোবাসে।', category: 'morals' },
      { num: 5, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ', en: 'Whoever believes in Allah and the Last Day, let him speak good or remain silent.', bn: 'যে ব্যক্তি আল্লাহ ও শেষ দিনের উপর ঈমান রাখে, সে ভালো কথা বলুক অথবা নীরব থাকুক।', category: 'morals' },
      { num: 6, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ', en: 'Whoever believes in Allah and the Last Day, let him honor his guest.', bn: 'যে ব্যক্তি আল্লাহ ও শেষ দিনের উপর ঈমান রাখে, সে তার অতিথিকে সম্মান করুক।', category: 'morals' },
      { num: 7, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَصِلْ رَحِمَهُ', en: 'Whoever believes in Allah and the Last Day, let him maintain the ties of kinship.', bn: 'যে ব্যক্তি আল্লাহ ও শেষ দিনের উপর ঈমান রাখে, সে আত্মীয়তার সম্পর্ক রক্ষা করুক।', category: 'family' },
      { num: 8, narrator: 'Ibn Abbas', narratorBn: 'ইবনে আব্বাস (রা.)', arabic: 'إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَيْءٍ', en: 'Verily Allah has prescribed excellence in all things.', bn: 'নিশ্চয়ই আল্লাহ প্রতিটি কাজে ইহসান (উৎকর্ষ) লিখে দিয়েছেন।', category: 'morals' },
      { num: 9, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ', en: 'Fear Allah wherever you are.', bn: 'তুমি যেখানেই থাকো আল্লাহকে ভয় করো।', category: 'faith' },
      { num: 10, narrator: 'Abu Dharr', narratorBn: 'আবু যর (রা.)', arabic: 'ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ', en: 'Be detached from the world and Allah will love you.', bn: 'দুনিয়াতে জুহদ (বিমুখতা) অবলম্বন করো, আল্লাহ তোমাকে ভালোবাসবেন।', category: 'patience' },
      { num: 11, narrator: 'Nu\'man bin Bashir', narratorBn: 'নু\'মান ইবনে বাশীর (রা.)', arabic: 'أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ', en: 'Indeed, in the body there is a piece of flesh, if it is upright, the whole body is upright, and if it is corrupt, the whole body is corrupt. Indeed, it is the heart.', bn: 'সাবধান! শরীরে এক টুকরো গোশত আছে, যদি তা সুস্থ থাকে, পুরো শরীর সুস্থ থাকে; আর যদি তা নষ্ট হয়ে যায়, পুরো শরীর নষ্ট হয়ে যায়। সাবধান! সেটি হলো কলব (মন/অন্তর)।', category: 'mone' },
      { num: 12, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ', en: 'Verily Allah does not look at your faces and wealth, rather He looks at your hearts and your deeds.', bn: 'নিশ্চয়ই আল্লাহ তোমাদের চেহারা ও সম্পদের দিকে তাকান না, বরং তিনি তোমাদের অন্তর ও আমলের দিকে তাকান।', category: 'mone' },
    ]
  },
  muslim: {
    name: 'Sahih Muslim', nameBn: 'সহীহ মুসলিম', total: 3033,
    hadiths: [
      { num: 1, narrator: 'Umar ibn al-Khattab', narratorBn: 'উমর ইবনুল খাত্তাব (রা.)', arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ', en: 'Actions are but by intentions, and every person will have but that which they intended.', bn: 'সকল আমল নিয়তের সাথে সম্পর্কিত, আর প্রত্যেক ব্যক্তি তার নিয়ত অনুযায়ী ফল পাবে।', category: 'faith' },
      { num: 2, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ', en: 'None of you believes until I am dearer to him than his father, his son, and all people.', bn: 'তোমাদের কেউ ঈমানদার হবে না যতক্ষণ না আমি তার কাছে তার পিতা, পুত্র ও সকল মানুষের চেয়ে প্রিয় হই।', category: 'faith' },
      { num: 3, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'وَالَّذِي نَفْسِي بِيَدِهِ لَا يُؤْمِنُ أَحَدُكُمْ', en: 'By the One in Whose hand is my soul, none of you believes until I am dearer to him than his father and his son.', bn: 'যাঁর হাতে আমার প্রাণ তাঁর শপথ, তোমাদের কেউ ঈমানদার হবে না যতক্ষণ না আমি তার কাছে তার পিতা ও পুত্রের চেয়ে প্রিয় হই।', category: 'faith' },
      { num: 4, narrator: 'Anas', narratorBn: 'আনাস (রা.)', arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ', en: 'None of you believes until he loves for his brother what he loves for himself.', bn: 'তোমাদের কেউ ঈমানদার হবে না যতক্ষণ না সে তার ভাইয়ের জন্য তা ভালোবাসে যা সে নিজের জন্য ভালোবাসে।', category: 'morals' },
      { num: 5, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'مَنْ غَشَّنَا فَلَيْسَ مِنَّا', en: 'Whoever deceives us is not one of us.', bn: 'যে আমাদের সাথে প্রতারণা করল, সে আমাদের দলভুক্ত নয়।', category: 'morals' },
    ]
  },
  'abu-dawud': {
    name: 'Sunan Abu Dawud', nameBn: 'সুনান আবু দাউদ', total: 5274,
    hadiths: [
      { num: 1, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا', en: 'The most complete of the believers in faith is the one with the best character.', bn: 'ঈমানের দিক থেকে সবচেয়ে পূর্ণ মুমিন সে, যার চরিত্র সবচেয়ে উত্তম।', category: 'morals' },
      { num: 2, narrator: 'Mu\'awiyah', narratorBn: 'মু\'আবিয়া (রা.)', arabic: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ', en: 'When Allah wishes good for someone, He grants him understanding of the religion.', bn: 'আল্লাহ যার কল্যাণ চান, তাকে দ্বীনের জ্ঞান দান করেন।', category: 'knowledge' },
      { num: 3, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ', en: 'A Muslim is the one from whose tongue and hand other Muslims are safe.', bn: 'মুসলিম তো সে ব্যক্তি, যার হাত ও জিহ্বা থেকে অন্য মুসলমানরা নিরাপদ।', category: 'morals' },
    ]
  },
  tirmidhi: {
    name: 'Jami\' at-Tirmidhi', nameBn: 'জামে আত-তিরমিযী', total: 3956,
    hadiths: [
      { num: 1, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا', en: 'Do not belittle any good deed, even meeting your brother with a cheerful face.', bn: 'কোনো ভালো কাজকেই তুচ্ছ মনে করো না, এমনকি তোমার ভাইয়ের সাথে হাসিমুখে সাক্ষাৎ করাও।', category: 'charity' },
      { num: 2, narrator: 'Ibn Umar', narratorBn: 'ইবনে উমর (রা.)', arabic: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي', en: 'O Allah, correct my religion which is the safeguard of my affairs.', bn: 'হে আল্লাহ! আমার দ্বীনকে সংশোধন করে দিন যা আমার সকল কাজের রক্ষাকবচ।', category: 'dua' },
      { num: 3, narrator: 'Abu Dharr', narratorBn: 'আবু যর (রা.)', arabic: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا', en: 'Fear Allah wherever you are, and follow up a bad deed with a good deed to wipe it out.', bn: 'তুমি যেখানেই থাকো আল্লাহকে ভয় করো, এবং খারাপ কাজের পর ভালো কাজ করো, তা মুছে ফেলবে।', category: 'patience' },
      { num: 4, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'الْقَلْبُ مَلِكٌ وَالْأَعْضَاءُ جُنُودُهُ', en: 'The heart is the king and the limbs are its soldiers.', bn: 'অন্তর হলো রাজা এবং অঙ্গ-প্রত্যঙ্গ হলো তার সৈনিক।', category: 'mone' },
      { num: 5, narrator: 'Sahl bin Sa\'d', narratorBn: 'সাহল ইবনে সা\'দ (রা.)', arabic: 'لَوْ كَانَتِ الدُّنْيَا تَعْدِلُ عِنْدَ اللَّهِ جَنَاحَ بَعُوضَةٍ مَا سَقَى كَافِرًا مِنْهَا شَرْبَةَ مَاءٍ', en: 'If this world were worth a wing of a mosquito to Allah, He would not give a disbeliever a drink of water from it.', bn: 'এই দুনিয়া যদি আল্লাহর কাছে একটি মশার পাখার সমানও মূল্য রাখতো, তাহলে তিনি কোনো কাফেরকে এক চুমুক পানিও দিতেন না।', category: 'mone' },
    ]
  },
  nasai: {
    name: 'Sunan an-Nasai', nameBn: 'সুনান আন-নাসাঈ', total: 5758,
    hadiths: [
      { num: 1, narrator: 'Aisha', narratorBn: 'আয়িশা (রা.)', arabic: 'إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ', en: 'Verily Allah is gentle and loves gentleness.', bn: 'নিশ্চয়ই আল্লাহ কোমল এবং তিনি কোমলতা ভালোবাসেন।', category: 'morals' },
      { num: 2, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ', en: 'A good word is charity.', bn: 'পবিত্র কথা সদকা।', category: 'charity' },
      { num: 3, narrator: 'Abdullah bin Amr', narratorBn: 'আব্দুল্লাহ ইবনে আমর (রা.)', arabic: 'الدُّنْيَا مَتَاعٌ وَخَيْرُ مَتَاعِهَا الْمَرْأَةُ الصَّالِحَةُ', en: 'This world is but a provision, and the best provision is a righteous woman.', bn: 'এই দুনিয়া হলো ভোগের সামগ্রী, আর এর সর্বোত্তম সামগ্রী হলো নেককার স্ত্রী।', category: 'family' },
    ]
  },
  'ibn-majah': {
    name: 'Sunan Ibn Majah', nameBn: 'সুনান ইবনে মাজাহ', total: 4341,
    hadiths: [
      { num: 1, narrator: 'Anas', narratorBn: 'আনাস (রা.)', arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ', en: 'Seeking knowledge is an obligation upon every Muslim.', bn: 'জ্ঞান অন্বেষণ করা প্রতিটি মুসলিমের উপর ফরজ।', category: 'knowledge' },
      { num: 2, narrator: 'Abu Huraira', narratorBn: 'আবু হুরাইরা (রা.)', arabic: 'إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ', en: 'When a person dies, their deeds end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for them.', bn: 'মানুষ মারা গেলে তার আমল বন্ধ হয়ে যায়, তিনটি ছাড়া: চলমান দান, উপকারী জ্ঞান, অথবা নেককার সন্তান যে তার জন্য দোয়া করে।', category: 'charity' },
      { num: 3, narrator: 'Uthman', narratorBn: 'উসমান (রা.)', arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ', en: 'The best of you are those who learn the Quran and teach it.', bn: 'তোমাদের মধ্যে সর্বোত্তম তারা যারা কুরআন শেখে এবং শেখায়।', category: 'knowledge' },
    ]
  }
};

// ==================== HADITH CATEGORIES ====================
const HADITH_CATEGORIES = [
  { id: 'faith',       icon: '☪️',  nameEn: 'Faith (Iman)',          nameBn: 'ঈমান (বিশ্বাস)',      color: '#0d7c3e', keywords: ['faith','iman','belief','ঈমান','বিশ্বাস','আকিদা'] },
  { id: 'prayer',      icon: '🕌',  nameEn: 'Prayer (Salah)',         nameBn: 'নামাজ (সালাত)',       color: '#1565c0', keywords: ['prayer','salah','salat','namaz','নামাজ','সালাত','wudu','ablution','অজু'] },
  { id: 'fasting',     icon: '🌙',  nameEn: 'Fasting (Sawm)',         nameBn: 'রোজা (সাওম)',         color: '#7b1fa2', keywords: ['fast','fasting','sawm','ramadan','রোজা','রমজান','সাওম'] },
  { id: 'charity',     icon: '💰',  nameEn: 'Charity / Zakat',        nameBn: 'দান ও যাকাত',        color: '#e65100', keywords: ['charity','zakat','sadaqah','give','dan','দান','যাকাত','সদকা','infaq'] },
  { id: 'pilgrimage',  icon: '🕋',  nameEn: 'Pilgrimage (Hajj)',      nameBn: 'হজ্জ ও উমরাহ',      color: '#c62828', keywords: ['hajj','umrah','pilgrimage','হজ্জ','উমরাহ'] },
  { id: 'jihad',       icon: '⚔️',  nameEn: 'Jihad & Sacrifice',     nameBn: 'জিহাদ ও ত্যাগ',      color: '#b71c1c', keywords: ['jihad','struggle','sacrifice','জিহাদ','ত্যাগ','শাহাদাত'] },
  { id: 'marriage',    icon: '💍',  nameEn: 'Marriage (Nikah)',       nameBn: 'বিবাহ (নিকাহ)',      color: '#e91e63', keywords: ['marriage','nikah','bibaho','বিবাহ','নিকাহ','wedding','spouse','talaq','divorce'] },
  { id: 'family',      icon: '👨‍👩‍👧‍👦', nameEn: 'Family & Children',    nameBn: 'পরিবার ও সন্তান',   color: '#e53935', keywords: ['family','children','parents','child','পরিবার','সন্তান','মা','বাবা','parents'] },
  { id: 'morals',      icon: '🌟',  nameEn: 'Morals & Character',     nameBn: 'চরিত্র ও আদব',      color: '#00695c', keywords: ['morals','akhlaq','character','honesty','আদব','চরিত্র','সততা','আখলাক'] },
  { id: 'knowledge',   icon: '📚',  nameEn: 'Knowledge & Education',  nameBn: 'জ্ঞান ও শিক্ষা',   color: '#1565c0', keywords: ['knowledge','ilm','learn','education','জ্ঞান','ইলম','শিক্ষা'] },
  { id: 'dua',         icon: '🤲',  nameEn: 'Dua & Dhikr',           nameBn: 'দোয়া ও যিকির',      color: '#00897b', keywords: ['dua','dhikr','prayer','supplication','দোয়া','যিকির','তাসবিহ'] },
  { id: 'patience',    icon: '⏳',  nameEn: 'Patience & Gratitude',   nameBn: 'ধৈর্য ও কৃতজ্ঞতা', color: '#9c27b0', keywords: ['patience','sabr','gratitude','shukr','ধৈর্য','সবর','কৃতজ্ঞতা','শুকর'] },
  { id: 'mone',        icon: '💚',  nameEn: 'Heart & Soul',           nameBn: 'মন ও অন্তর',        color: '#2e7d32', keywords: ['heart','soul','nafs','মন','অন্তর','আত্মা','নফস'] },
  { id: 'trade',       icon: '🛒',  nameEn: 'Trade & Business',       nameBn: 'ব্যবসা ও লেনদেন',   color: '#5d4037', keywords: ['trade','business','buy','sell','riba','interest','ব্যবসা','ক্রয়','বিক্রয়','সুদ','রিবা'] },
  { id: 'death',       icon: '⚰️',  nameEn: 'Death & Hereafter',     nameBn: 'মৃত্যু ও আখেরাত',   color: '#455a64', keywords: ['death','hereafter','akhirah','jannah','jahannam','মৃত্যু','আখেরাত','জান্নাত','জাহান্নাম','কবর'] },
  { id: 'quran',       icon: '📖',  nameEn: 'Quran & Recitation',     nameBn: 'কুরআন ও তিলাওয়াত', color: '#006064', keywords: ['quran','recite','tilawat','কুরআন','তিলাওয়াত','হিফজ'] },
  { id: 'food',        icon: '🍽️',  nameEn: 'Food & Halal',          nameBn: 'খাবার ও হালাল',     color: '#558b2f', keywords: ['food','halal','haram','eat','খাবার','হালাল','হারাম','খাওয়া'] },
  { id: 'health',      icon: '💊',  nameEn: 'Health & Ruqyah',       nameBn: 'স্বাস্থ্য ও রুকিয়া', color: '#00838f', keywords: ['health','medicine','ruqyah','স্বাস্থ্য','চিকিৎসা','রুকিয়া'] },
];

// ==================== ASMAUL HUSNA (99 Names) ====================
const ASMAUL_HUSNA = [
  {n:1,ar:'الرَّحْمَنُ',en:'Ar-Rahman',bn:'পরম করুণাময়'},{n:2,ar:'الرَّحِيمُ',en:'Ar-Raheem',bn:'দয়ালু'},{n:3,ar:'الْمَلِكُ',en:'Al-Malik',bn:'রাজা/অধিপতি'},{n:4,ar:'الْقُدُّوسُ',en:'Al-Quddus',bn:'পবিত্র'},{n:5,ar:'السَّلَامُ',en:'As-Salam',bn:'শান্তি'},{n:6,ar:'الْمُؤْمِنُ',en:'Al-Mu\'min',bn:'ঈমান দাতা'},{n:7,ar:'الْمُهَيْمِنُ',en:'Al-Muhaymin',bn:'রক্ষক'},{n:8,ar:'الْعَزِيزُ',en:'Al-Aziz',bn:'পরাক্রমশালী'},{n:9,ar:'الْجَبَّارُ',en:'Al-Jabbar',bn:'প্রবল শক্তিশালী'},{n:10,ar:'الْمُتَكَبِّرُ',en:'Al-Mutakabbir',bn:'মহান'},{n:11,ar:'الْخَالِقُ',en:'Al-Khaliq',bn:'সৃষ্টিকর্তা'},{n:12,ar:'الْبَارِئُ',en:'Al-Bari',bn:'স্রষ্টা'},{n:13,ar:'الْمُصَوِّرُ',en:'Al-Musawwir',bn:'রূপদাতা'},{n:14,ar:'الْغَفَّارُ',en:'Al-Ghaffar',bn:'ক্ষমাশীল'},{n:15,ar:'الْقَهَّارُ',en:'Al-Qahhar',bn:'পরাক্রমশালী'},{n:16,ar:'الْوَهَّابُ',en:'Al-Wahhab',bn:'দাতা'},{n:17,ar:'الرَّزَّاقُ',en:'Ar-Razzaq',bn:'রিজিকদাতা'},{n:18,ar:'الْفَتَّاحُ',en:'Al-Fattah',bn:'বিজয়ী'},{n:19,ar:'الْعَلِيمُ',en:'Al-Aleem',bn:'সর্বজ্ঞ'},{n:20,ar:'الْقَابِضُ',en:'Al-Qabid',bn:'সংকুচিতকারী'},{n:21,ar:'الْبَاسِطُ',en:'Al-Basit',bn:'প্রসারিতকারী'},{n:22,ar:'الْخَافِضُ',en:'Al-Khafid',bn:'অবনমিতকারী'},{n:23,ar:'الرَّافِعُ',en:'Ar-Rafi',bn:'উন্নীতকারী'},{n:24,ar:'الْمُعِزُّ',en:'Al-Mu\'izz',bn:'সম্মানিতকারী'},{n:25,ar:'الْمُذِلُّ',en:'Al-Mudhill',bn:'অবমানিতকারী'},{n:26,ar:'السَّمِيعُ',en:'As-Samee',bn:'সর্বশ্রোতা'},{n:27,ar:'الْبَصِيرُ',en:'Al-Baseer',bn:'সর্বদ্রষ্টা'},{n:28,ar:'الْحَكَمُ',en:'Al-Hakam',bn:'বিচারক'},{n:29,ar:'الْعَدْلُ',en:'Al-Adl',bn:'ন্যায়বান'},{n:30,ar:'اللَّطِيفُ',en:'Al-Lateef',bn:'সূক্ষ্মদর্শী'},{n:31,ar:'الْخَبِيرُ',en:'Al-Khabeer',bn:'সবিশেষ অবগত'},{n:32,ar:'الْحَلِيمُ',en:'Al-Haleem',bn:'ধৈর্যশীল'},{n:33,ar:'الْعَظِيمُ',en:'Al-Azeem',bn:'মহান'},{n:34,ar:'الْغَفُورُ',en:'Al-Ghafoor',bn:'পরম ক্ষমাশীল'},{n:35,ar:'الشَّكُورُ',en:'Ash-Shakoor',bn:'কৃতজ্ঞ'},{n:36,ar:'الْعَلِيُّ',en:'Al-Aliyy',bn:'সর্বোচ্চ'},{n:37,ar:'الْكَبِيرُ',en:'Al-Kabeer',bn:'মহান'},{n:38,ar:'الْحَفِيظُ',en:'Al-Hafeez',bn:'রক্ষক'},{n:39,ar:'الْمُقِيتُ',en:'Al-Muqeet',bn:'পোষক'},{n:40,ar:'الْحَسِيبُ',en:'Al-Haseeb',bn:'হিসাব গ্রহণকারী'},{n:41,ar:'الْجَلِيلُ',en:'Al-Jaleel',bn:'মর্যাদাপূর্ণ'},{n:42,ar:'الْكَرِيمُ',en:'Al-Kareem',bn:'দয়ালু/উদার'},{n:43,ar:'الرَّقِيبُ',en:'Ar-Raqeeb',bn:'পর্যবেক্ষক'},{n:44,ar:'الْمُجِيبُ',en:'Al-Mujeeb',bn:'ডাকে সাড়াদাতা'},{n:45,ar:'الْوَاسِعُ',en:'Al-Wasi',bn:'প্রাচুর্যময়'},{n:46,ar:'الْحَكِيمُ',en:'Al-Hakeem',bn:'প্রজ্ঞাময়'},{n:47,ar:'الْوَدُودُ',en:'Al-Wadood',bn:'প্রেমময়'},{n:48,ar:'الْمَجِيدُ',en:'Al-Majeed',bn:'মহিমান্বিত'},{n:49,ar:'الْبَاعِثُ',en:'Al-Ba\'ith',bn:'পুনরুত্থানকারী'},{n:50,ar:'الشَّهِيدُ',en:'Ash-Shaheed',bn:'সাক্ষী'},{n:51,ar:'الْحَقُّ',en:'Al-Haqq',bn:'সত্য'},{n:52,ar:'الْوَكِيلُ',en:'Al-Wakeel',bn:'কর্মবিধায়ক'},{n:53,ar:'الْقَوِيُّ',en:'Al-Qawiyy',bn:'শক্তিশালী'},{n:54,ar:'الْمَتِينُ',en:'Al-Mateen',bn:'দৃঢ়'},{n:55,ar:'الْوَلِيُّ',en:'Al-Waliyy',bn:'অভিভাবক'},{n:56,ar:'الْحَمِيدُ',en:'Al-Hameed',bn:'প্রশংসিত'},{n:57,ar:'الْمُحْصِي',en:'Al-Muhsi',bn:'গণনাকারী'},{n:58,ar:'الْمُبْدِئُ',en:'Al-Mubdi',bn:'সৃষ্টির সূচনাকারী'},{n:59,ar:'الْمُعِيدُ',en:'Al-Mu\'eed',bn:'পুনরুজ্জীবিতকারী'},{n:60,ar:'الْمُحْيِي',en:'Al-Muhyi',bn:'জীবনদাতা'},{n:61,ar:'الْمُمِيتُ',en:'Al-Mumeet',bn:'মৃত্যুদাতা'},{n:62,ar:'الْحَيُّ',en:'Al-Hayy',bn:'চিরঞ্জীব'},{n:63,ar:'الْقَيُّومُ',en:'Al-Qayyoom',bn:'স্বয়ংসম্পূর্ণ'},{n:64,ar:'الْوَاجِدُ',en:'Al-Waajid',bn:'অভাবহীন'},{n:65,ar:'الْمَاجِدُ',en:'Al-Maajid',bn:'মহান'},{n:66,ar:'الْوَاحِدُ',en:'Al-Waahid',bn:'এক'},{n:67,ar:'الصَّمَدُ',en:'As-Samad',bn:'নিরভল'},{n:68,ar:'الْقَادِرُ',en:'Al-Qaadir',bn:'ক্ষমতাবান'},{n:69,ar:'الْمُقْتَدِرُ',en:'Al-Muqtadir',bn:'সর্বশক্তিমান'},{n:70,ar:'الْمُقَدِّمُ',en:'Al-Muqaddim',bn:'অগ্রসরকারী'},{n:71,ar:'الْمُؤَخِّرُ',en:'Al-Mu\'akhkhir',bn:'পশ্চাৎগামী'},{n:72,ar:'الْأَوَّلُ',en:'Al-Awwal',bn:'প্রথম'},{n:73,ar:'الْآخِرُ',en:'Al-Aakhir',bn:'শেষ'},{n:74,ar:'الظَّاهِرُ',en:'Az-Zaahir',bn:'প্রকট'},{n:75,ar:'الْبَاطِنُ',en:'Al-Baatin',bn:'গোপন'},{n:76,ar:'الْوَالِي',en:'Al-Waali',bn:'শাসক'},{n:77,ar:'الْمُتَعَالِي',en:'Al-Muta\'aali',bn:'সর্বোচ্চ'},{n:78,ar:'الْبَرُّ',en:'Al-Barr',bn:'পুণ্যবান'},{n:79,ar:'التَّوَّابُ',en:'At-Tawwaab',bn:'তওবা কবুলকারী'},{n:80,ar:'الْمُنْتَقِمُ',en:'Al-Muntaqim',bn:'প্রতিশোধকারী'},{n:81,ar:'الْعَفُوُّ',en:'Al-Afuww',bn:'ক্ষমাশীল'},{n:82,ar:'الرَّءُوفُ',en:'Ar-Ra\'oof',bn:'দয়াশীল'},{n:83,ar:'مَالِكُ الْمُلْكِ',en:'Malik-ul-Mulk',bn:'রাজত্বের মালিক'},{n:84,ar:'ذُو الْجَلَالِ وَالْإِكْرَامِ',en:'Dhul-Jalaali wal-Ikram',bn:'মর্যাদা ও সম্মানের অধিকারী'},{n:85,ar:'الْمُقْسِطُ',en:'Al-Muqsit',bn:'ন্যায়বিচারক'},{n:86,ar:'الْجَامِعُ',en:'Al-Jaami',bn:'একত্রকারী'},{n:87,ar:'الْغَنِيُّ',en:'Al-Ghaniyy',bn:'ধনী'},{n:88,ar:'الْمُغْنِي',en:'Al-Mughni',bn:'সমৃদ্ধকারী'},{n:89,ar:'الْمَانِعُ',en:'Al-Maani',bn:'বাধাদাতা'},{n:90,ar:'الضَّارُّ',en:'Ad-Daarr',bn:'ক্ষতিকারী'},{n:91,ar:'النَّافِعُ',en:'An-Naafi',bn:'উপকারী'},{n:92,ar:'النُّورُ',en:'An-Noor',bn:'আলো'},{n:93,ar:'الْهَادِي',en:'Al-Haadi',bn:'পথপ্রদর্শক'},{n:94,ar:'الْبَدِيعُ',en:'Al-Badi',bn:'অভিনব স্রষ্টা'},{n:95,ar:'الْبَاقِي',en:'Al-Baaqi',bn:'চিরস্থায়ী'},{n:96,ar:'الْوَارِثُ',en:'Al-Waarith',bn:'উত্তরাধিকারী'},{n:97,ar:'الرَّشِيدُ',en:'Ar-Rasheed',bn:'সঠিক পথপ্রদর্শক'},{n:98,ar:'الصَّبُورُ',en:'As-Saboor',bn:'ধৈর্যশীল'},{n:99,ar:'الصَّمَدُ',en:'As-Samad',bn:'কেউ নেই তাঁর মতো'},
];

// ==================== DUA DATA ====================
// ==================== DUA DATA (Categorized) ====================
const DUA_DATA = {
  categories: [
    { id: 'daily',    icon: '🌅', nameBn: 'দৈনন্দিন দোয়া',     nameEn: 'Daily Duas' },
    { id: 'salah',    icon: '🕌', nameBn: 'নামাজের দোয়া',      nameEn: 'Salah Duas' },
    { id: 'food',     icon: '🍽️', nameBn: 'খাওয়ার দোয়া',     nameEn: 'Food Duas' },
    { id: 'travel',   icon: '✈️', nameBn: 'সফরের দোয়া',       nameEn: 'Travel Duas' },
    { id: 'morning',  icon: '☀️', nameBn: 'সকাল-সন্ধ্যার দোয়া', nameEn: 'Morning/Evening' },
    { id: 'forgive',  icon: '🤲', nameBn: 'ক্ষমা ও তওবা',     nameEn: 'Forgiveness' },
    { id: 'family',   icon: '👨‍👩‍👧', nameBn: 'পরিবার ও সন্তান', nameEn: 'Family & Children' },
    { id: 'hardship', icon: '💪', nameBn: 'কষ্ট ও বিপদে',     nameEn: 'In Hardship' },
    { id: 'quran',    icon: '📖', nameBn: 'কুরআনের দোয়া',     nameEn: 'Quranic Duas' },
    { id: 'special',  icon: '⭐', nameBn: 'বিশেষ দোয়া',       nameEn: 'Special Duas' },
  ],
  duas: [
    // DAILY
    { cat:'daily', titleBn:'ঘুমানোর আগের দোয়া',     titleEn:'Before Sleeping',      arabic:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', translit:'বিসমিকা আল্লাহুম্মা আমূতু ওয়া আহইয়া',                                                                                                                                                         bn:'আপনার নামে হে আল্লাহ, আমি মরি এবং জীবিত হই।',                                                                                          en:'In Your name, O Allah, I die and I live.',                                   ref:'বুখারী ৬৩১২' },
    { cat:'daily', titleBn:'ঘুম থেকে ওঠার দোয়া',    titleEn:'Upon Waking Up',       arabic:'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ', translit:'আলহামদুলিল্লাহিল্লাযী আহইয়ানা বা\'দা মা আমাতানা ওয়া ইলাইহিন নুশূর',                                                                                  bn:'সকল প্রশংসা আল্লাহর, যিনি আমাদের মৃত্যুর পর জীবন দিয়েছেন এবং তাঁর দিকেই ফিরে যেতে হবে।',                                             en:'All praise is for Allah who gave us life after death, and to Him is the return.', ref:'বুখারী ৬৩২৪' },
    { cat:'daily', titleBn:'টয়লেটে প্রবেশের দোয়া', titleEn:'Entering Toilet',      arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ', translit:'আল্লাহুম্মা ইন্নী আউযু বিকা মিনাল খুবুছি ওয়াল খাবাইছ',                                                                                                      bn:'হে আল্লাহ, আমি আপনার কাছে পুরুষ ও নারী শয়তান থেকে আশ্রয় চাই।',                                                                          en:'O Allah, I seek refuge in You from the male and female devils.',             ref:'বুখারী ১৪২' },
    { cat:'daily', titleBn:'টয়লেট থেকে বের হওয়ার দোয়া', titleEn:'Leaving Toilet', arabic:'غُفْرَانَكَ', translit:'গুফরানাক',                                                                                                                                                                                                                                 bn:'আপনার ক্ষমা চাই।',                                                                                                                           en:'I seek Your forgiveness.',                                                   ref:'আবু দাউদ ৩০' },
    { cat:'daily', titleBn:'ঘর থেকে বের হওয়ার দোয়া', titleEn:'Leaving Home',       arabic:'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', translit:'বিসমিল্লাহি তাওয়াক্কালতু আলাল্লাহি লা হাওলা ওয়ালা কুওয়্যাতা ইল্লা বিল্লাহ',                                                                               bn:'আল্লাহর নামে, আমি আল্লাহর উপর ভরসা করলাম, আল্লাহ ছাড়া কোনো শক্তি নেই।',                                                                  en:'In the name of Allah, I trust in Allah, there is no power except with Allah.', ref:'আবু দাউদ ৫০৯৫' },
    { cat:'daily', titleBn:'ঘরে প্রবেশের দোয়া',     titleEn:'Entering Home',        arabic:'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا', translit:'বিসমিল্লাহি ওয়ালাজনা ওয়া বিসমিল্লাহি খারাজনা ওয়া আলাল্লাহি রব্বিনা তাওয়াক্কালনা', bn:'আল্লাহর নামে আমরা প্রবেশ করলাম ও বের হলাম এবং আমাদের প্রতিপালকের উপর ভরসা করলাম।', en:'In the name of Allah we enter, and in the name of Allah we exit, and upon Allah our Lord we rely.', ref:'আবু দাউদ ৫০৯৬' },
    { cat:'daily', titleBn:'আয়নায় দেখার দোয়া',     titleEn:'Looking in Mirror',    arabic:'اللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي', translit:'আল্লাহুম্মা আনতা হাস্‌সানতা খালকী ফাহাস্‌সিন খুলুকী',                                                                                                                          bn:'হে আল্লাহ, আপনি আমার আকৃতি সুন্দর করেছেন, আপনি আমার চরিত্রও সুন্দর করুন।',                                                                 en:'O Allah, You have made my physical form beautiful, so also make my character beautiful.', ref:'আহমাদ ৩৮২৩' },
    // FOOD
    { cat:'food', titleBn:'খাওয়ার আগের দোয়া',      titleEn:'Before Eating',        arabic:'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',                                                                                                                             bn:'আল্লাহর নামে এবং আল্লাহর বরকতের সাথে।',                                                                                                     en:'In the name of Allah and with the blessings of Allah.',                      ref:'আবু দাউদ ৩৭৬৭' },
    { cat:'food', titleBn:'খাওয়ার পরের দোয়া',      titleEn:'After Eating',         arabic:'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',                                                                                           bn:'সকল প্রশংসা আল্লাহর যিনি আমাদের খাবার ও পানীয় দিয়েছেন এবং আমাদের মুসলিম বানিয়েছেন।',                                                    en:'All praise is for Allah who fed us, gave us drink, and made us Muslims.',    ref:'আবু দাউদ ৩৮৫০' },
    { cat:'food', titleBn:'পানি পানের দোয়া',        titleEn:'Drinking Water',       arabic:'الْحَمْدُ لِلَّهِ الَّذِي سَقَانَا عَذْبًا فُرَاتًا بِرَحْمَتِهِ وَلَمْ يَجْعَلْهُ مِلْحًا أُجَاجًا بِذُنُوبِنَا',                                               bn:'সকল প্রশংসা আল্লাহর যিনি আমাদের তাঁর রহমতে মিষ্টি পানি পান করিয়েছেন, আমাদের গোনাহের কারণে তা লোনা করেননি।',                               en:'All praise is for Allah who gave us sweet fresh water by His mercy, and did not make it salty due to our sins.', ref:'আবু দাউদ' },
    // TRAVEL
    { cat:'travel', titleBn:'সফরের দোয়া',           titleEn:'Travel Dua',           arabic:'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',                                                   bn:'পাক-পবিত্র সেই সত্তা যিনি এটাকে আমাদের বশীভূত করে দিয়েছেন, অথচ আমরা তা বশে আনতে সক্ষম ছিলাম না। আর আমরা অবশ্যই আমাদের রবের কাছে ফিরে যাব।', en:'Glory be to He who has subjected this for us, for we could not have done it ourselves. And to our Lord we will surely return.', ref:'কুরআন ৪৩:১৩-১৪' },
    { cat:'travel', titleBn:'বিমান/গাড়িতে উঠার দোয়া', titleEn:'Boarding Vehicle',   arabic:'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى',                                                           bn:'হে আল্লাহ, আমরা এই সফরে আপনার কাছে নেকি ও তাকওয়া এবং এমন আমল চাই যা আপনি পছন্দ করেন।',                                                   en:'O Allah, we ask of You goodness and piety in this journey, and deeds that please You.',                       ref:'মুসলিম ১৩৪২' },
    // MORNING/EVENING
    { cat:'morning', titleBn:'সকালের দোয়া',          titleEn:'Morning Remembrance',  arabic:'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',                                           bn:'আমরা সকাল করলাম এবং সমগ্র রাজত্ব আল্লাহর। সকল প্রশংসা আল্লাহর। আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একা, তাঁর কোনো শরিক নেই।',             en:'We have entered the morning and the whole dominion of Allah. All praise is to Allah. None has the right to be worshipped except Allah, alone, with no partner.', ref:'আবু দাউদ ৫০৭৮' },
    { cat:'morning', titleBn:'সন্ধ্যার দোয়া',        titleEn:'Evening Remembrance',  arabic:'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ',                                           bn:'আমরা সন্ধ্যায় পৌঁছলাম এবং সমগ্র রাজত্ব আল্লাহর। সকল প্রশংসা আল্লাহর। আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি একা, তাঁর কোনো শরিক নেই।',           en:'We have entered the evening and the whole dominion of Allah belongs to Allah.', ref:'আবু দাউদ ৫০৭৮' },
    { cat:'morning', titleBn:'আয়াতুল কুরসি (সকাল)',  titleEn:'Ayatul Kursi (Morning)', arabic:'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',                                                                  bn:'আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই। তিনি চিরঞ্জীব, সর্বসত্তার ধারক। তাঁকে তন্দ্রা বা নিদ্রা স্পর্শ করে না।',                               en:'Allah – there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep.', ref:'কুরআন ২:২৫৫' },
    // FORGIVENESS
    { cat:'forgive', titleBn:'সাইয়িদুল ইস্তিগফার',   titleEn:'Master Istighfar',     arabic:'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي', bn:'হে আল্লাহ! তুমি আমার রব, তুমি ছাড়া আর কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ, আমি তোমার বান্দা, আমি যথাসাধ্য তোমার প্রতিশ্রুতিতে আছি। আমি আমার কৃতকর্মের অনিষ্ট থেকে তোমার আশ্রয় চাই...', en:'O Allah, You are my Lord. There is no deity except You. You created me and I am Your servant, abiding by Your covenant and Your promise as best I can...', ref:'বুখারী ৬৩০৬' },
    { cat:'forgive', titleBn:'তওবার দোয়া',            titleEn:'Repentance Dua',       arabic:'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',                                                  bn:'হে আমাদের রব! আমরা নিজেদের উপর অত্যাচার করেছি, আপনি যদি আমাদের ক্ষমা না করেন ও দয়া না করেন তবে আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব।', en:'Our Lord! We have wronged ourselves. If You forgive us not and have not mercy on us, surely we are of the lost.', ref:'কুরআন ৭:২৩' },
    // FAMILY
    { cat:'family', titleBn:'পিতামাতার জন্য দোয়া',  titleEn:'For Parents',          arabic:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',                                                                                                                   bn:'হে আমার রব! তাদের উপর রহম করুন যেভাবে তারা আমাকে ছোটবেলায় লালন-পালন করেছেন।',                                                               en:'My Lord, have mercy upon them as they brought me up when I was small.',      ref:'কুরআন ১৭:২৪' },
    { cat:'family', titleBn:'নেক সন্তানের জন্য দোয়া', titleEn:'For Righteous Children', arabic:'رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ',                                                                                                                            bn:'হে আমার রব! আমাকে নেক সন্তান দান করুন।',                                                                                                     en:'My Lord, grant me from among the righteous.',                               ref:'কুরআন ৩৭:১০০' },
    { cat:'family', titleBn:'পরিবারের জন্য দোয়া',    titleEn:'For Family',           arabic:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',                                               bn:'হে আমাদের রব! আমাদের স্ত্রী ও সন্তানদের থেকে আমাদের চোখের শীতলতা দান করুন এবং আমাদের মুত্তাকিদের ইমাম বানিয়ে দিন।',                       en:'Our Lord! Grant us in our spouses and offspring the comfort of our eyes, and make us leaders for the righteous.', ref:'কুরআন ২৫:৭৪' },
    // HARDSHIP
    { cat:'hardship', titleBn:'কষ্টের সময়ের দোয়া',  titleEn:'In Difficulty',        arabic:'لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',                                                                                        bn:'তুমি ছাড়া কোনো ইলাহ নেই, তুমি পবিত্র, নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত।',                                                                  en:'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.', ref:'কুরআন ২১:৮৭ (ইউনুসের দোয়া)' },
    { cat:'hardship', titleBn:'দুশ্চিন্তা দূরের দোয়া', titleEn:'Remove Anxiety',      arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',      bn:'হে আল্লাহ! আমি আপনার কাছে দুশ্চিন্তা, দুঃখ, অক্ষমতা, অলসতা, কৃপণতা, ভীরুতা, ঋণের বোঝা এবং মানুষের প্রভাব থেকে আশ্রয় চাই।',              en:'O Allah, I seek refuge with You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from being heavily in debt and from being overpowered by other men.', ref:'বুখারী ২৮৯৩' },
    // SALAH
    { cat:'salah', titleBn:'ওযুর দোয়া',              titleEn:'Wudu Dua',             arabic:'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي',                                                                           bn:'হে আল্লাহ! আমার পাপ ক্ষমা করুন, আমার ঘর প্রশস্ত করুন এবং আমার রিজিকে বরকত দিন।',                                                            en:'O Allah! Forgive my sins, expand my home, and bless my provisions.',        ref:'নাসাঈ ৬০' },
    { cat:'salah', titleBn:'নামাজের আগে নিয়ত',       titleEn:'Prayer Intention',     arabic:'نَوَيْتُ أَنْ أُصَلِّيَ',                                                                                                                                         bn:'আমি নামাজ পড়ার নিয়ত করলাম।',                                                                                                                en:'I intend to pray.',                                                         ref:'ফিকহ' },
    { cat:'salah', titleBn:'সিজদার তাসবিহ',            titleEn:'Sajda Tasbih',         arabic:'سُبْحَانَ رَبِّيَ الأَعْلَى',                                                                                                                                      bn:'আমার সর্বোচ্চ রব পবিত্র।',                                                                                                                   en:'Glory be to my Lord, the Highest.',                                         ref:'আবু দাউদ ৮৬৯' },
    { cat:'salah', titleBn:'রুকুর তাসবিহ',             titleEn:'Ruku Tasbih',          arabic:'سُبْحَانَ رَبِّيَ الْعَظِيمِ',                                                                                                                                    bn:'আমার মহান রব পবিত্র।',                                                                                                                       en:'Glory be to my Lord, the Magnificent.',                                     ref:'আবু দাউদ ৮৭১' },
    { cat:'salah', titleBn:'তাশাহহুদ',                titleEn:'Tashahhud',            arabic:'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ', bn:'সকল মৌখিক ইবাদত, সকল নামাজ ও সকল পবিত্র কাজ আল্লাহর জন্য। হে নবী! আপনার উপর শান্তি, আল্লাহর রহমত ও বরকত বর্ষিত হোক। আমাদের উপর এবং আল্লাহর নেক বান্দাদের উপর শান্তি বর্ষিত হোক। আমি সাক্ষ্য দিচ্ছি যে, আল্লাহ ছাড়া কোনো ইলাহ নেই এবং মুহাম্মাদ তাঁর বান্দা ও রাসূল।', en:'All greetings are for Allah, and prayers and good words. Peace be upon you, O Prophet, and the mercy and blessings of Allah. Peace be upon us and on the righteous servants of Allah. I bear witness that there is no deity except Allah, and I bear witness that Muhammad is His servant and messenger.', ref:'বুখারী ৮৩১' },
    { cat:'salah', titleBn:'দরুদ ইব্রাহিম',           titleEn:'Darud Ibrahim',        arabic:'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',              bn:'হে আল্লাহ! মুহাম্মাদ ও তাঁর পরিবারের উপর রহমত বর্ষণ করুন যেভাবে ইব্রাহিম ও তাঁর পরিবারের উপর রহমত বর্ষণ করেছেন। নিশ্চয়ই আপনি প্রশংসিত ও মহান।', en:'O Allah, send prayers upon Muhammad and the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim. Verily You are Praiseworthy, Glorious.', ref:'বুখারী ৩৩৭০' },
    // QURAN
    { cat:'quran', titleBn:'কুরআন তিলাওয়াতের আগের দোয়া', titleEn:'Before Quran Recitation', arabic:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',                                                                                                     bn:'আমি বিতাড়িত শয়তান থেকে আল্লাহর কাছে আশ্রয় চাই।',                                                                                          en:'I seek refuge in Allah from the accursed Satan.',                           ref:'কুরআন ১৬:৯৮' },
    { cat:'quran', titleBn:'রব্বি জিদনি ইলমা',         titleEn:'Increase Knowledge',   arabic:'رَبِّ زِدْنِي عِلْمًا',                                                                                                                                           bn:'হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।',                                                                                                        en:'My Lord, increase me in knowledge.',                                        ref:'কুরআন ২০:১১৪' },
    { cat:'quran', titleBn:'রব্বিশরাহ লি সদরি',        titleEn:'Ease My Chest',        arabic:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',                                                         bn:'হে আমার রব! আমার বুক প্রশস্ত করুন, আমার কাজ সহজ করুন এবং আমার জিহ্বার জড়তা দূর করুন, যেন তারা আমার কথা বুঝতে পারে।',                     en:'My Lord, expand for me my breast, ease my task for me, and untie the knot from my tongue, that they may understand my speech.', ref:'কুরআন ২০:২৫-২৮ (মুসার দোয়া)' },
    // SPECIAL
    { cat:'special', titleBn:'জান্নাতের দোয়া',         titleEn:'Dua for Jannah',       arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ',                                                                                        bn:'হে আল্লাহ! আমি আপনার কাছে জান্নাত চাই এবং জাহান্নাম থেকে আপনার কাছে আশ্রয় চাই।',                                                            en:'O Allah, I ask You for Paradise and I seek refuge in You from the Fire.',   ref:'আবু দাউদ ৭৯২' },
    { cat:'special', titleBn:'সর্বোত্তম দোয়া',          titleEn:'Best Dua',            arabic:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',                                                                   bn:'হে আমাদের রব! আমাদের দুনিয়ায় কল্যাণ দিন এবং আখিরাতে কল্যাণ দিন এবং আমাদের জাহান্নামের আজাব থেকে রক্ষা করুন।',                             en:'Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.', ref:'কুরআন ২:২০১' },
    { cat:'special', titleBn:'হাসবুনাল্লাহু',           titleEn:'Hasbunallah',          arabic:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',                                                                                                                         bn:'আল্লাহই আমাদের জন্য যথেষ্ট এবং তিনি কতই না উত্তম কর্মবিধায়ক।',                                                                              en:'Allah is sufficient for us, and He is the Best Disposer of affairs.',       ref:'কুরআন ৩:১৭৩' },
  ]
};

// ==================== SALAH DATA ====================
const SALAH_DATA = [
  {
    id: 'fajr', icon: '🌅', nameBn: 'ফজরের নামাজ', nameEn: 'Fajr Prayer', rakats: '২ সুন্নত + ২ ফরজ',
    steps: [
      { titleBn: 'ফজরের সময়', titleEn: 'Fajr Time', bn: 'সুবহে সাদিক থেকে সূর্যোদয়ের আগ পর্যন্ত।', en: 'From true dawn until sunrise.' },
      { titleBn: '২ রাকাত সুন্নত', titleEn: '2 Rakats Sunnah', bn: 'প্রথমে ২ রাকাত সুন্নতে মুয়াক্কাদা পড়ুন। এটি অত্যন্ত গুরুত্বপূর্ণ সুন্নত।', en: 'First pray 2 rakats of Sunnah Mu\'akkadah (emphasized sunnah). This is very important.' },
      { titleBn: '২ রাকাত ফরজ নিয়ম', titleEn: '2 Rakats Fard Rules', bn: '১ম রাকাত: নিয়ত → তাকবিরে তাহরিমা (আল্লাহু আকবার) → ছানা → সূরা ফাতিহা → অন্য সূরা → রুকু → সিজদা\n২য় রাকাত: সূরা ফাতিহা → সূরা → রুকু → সিজদা → তাশাহহুদ → দরুদ → দোয়া মাছুরা → সালাম', en: '1st rakat: Intention → Takbir → Thana → Surah Fatiha → another Surah → Ruku → Sajda\n2nd rakat: Surah Fatiha → Surah → Ruku → Sajda → Tashahhud → Darud → Dua Masura → Salaam' },
      { titleBn: 'ফজরে উচ্চস্বরে পড়া হয়', titleEn: 'Fajr is Loud (Jahri)', bn: 'ফজরের নামাজে সূরা ফাতিহা ও অন্য সূরা উচ্চস্বরে পড়তে হয় (ইমামের পেছনে নীরব থাকুন)।', en: 'In Fajr, Surah Fatiha and other surah are recited loudly (behind imam, remain silent).' },
    ]
  },
  {
    id: 'dhuhr', icon: '☀️', nameBn: 'যোহরের নামাজ', nameEn: 'Dhuhr Prayer', rakats: '৪ সুন্নত + ৪ ফরজ + ২ সুন্নত + ২ নফল',
    steps: [
      { titleBn: 'যোহরের সময়', titleEn: 'Dhuhr Time', bn: 'সূর্য মাথার উপর থেকে একটু হেলে পড়লে শুরু হয় এবং আসরের আগ পর্যন্ত থাকে।', en: 'Begins when sun starts to decline from zenith, ends before Asr.' },
      { titleBn: 'পূর্ণ নিয়ম', titleEn: 'Full Method', bn: '১. ৪ রাকাত সুন্নতে মুয়াক্কাদা\n২. ৪ রাকাত ফরজ (নীরব তেলাওয়াত)\n৩. ২ রাকাত সুন্নতে মুয়াক্কাদা\n৪. ২ রাকাত নফল (ঐচ্ছিক)\n\n৪ রাকাতে ৩য় ও ৪র্থ রাকাতে শুধু সূরা ফাতিহা পড়তে হয়।', en: '1. 4 rakats Sunnah Mu\'akkadah\n2. 4 rakats Fard (silent recitation)\n3. 2 rakats Sunnah Mu\'akkadah\n4. 2 rakats Nafl (optional)\n\nIn 3rd and 4th rakat of 4-rakat prayers, only recite Surah Fatiha.' },
      { titleBn: 'বৈঠক', titleEn: 'Qa\'dah (Sitting)', bn: '৪ রাকাতের নামাজে ২য় রাকাতে প্রথম বৈঠক (তাশাহহুদ পর্যন্ত) এবং ৪র্থ রাকাতে শেষ বৈঠক (তাশাহহুদ + দরুদ + দোয়া মাছুরা + সালাম)।', en: 'In 4-rakat prayers, first sitting after 2nd rakat (until Tashahhud), and final sitting after 4th rakat (Tashahhud + Darud + Dua + Salaam).' },
    ]
  },
  {
    id: 'asr', icon: '🌤️', nameBn: 'আসরের নামাজ', nameEn: 'Asr Prayer', rakats: '৪ সুন্নত + ৪ ফরজ',
    steps: [
      { titleBn: 'আসরের সময়', titleEn: 'Asr Time', bn: 'প্রতিটি বস্তুর ছায়া তার দ্বিগুণ হলে (হানাফি মতে) শুরু হয় এবং সূর্যাস্তের আগ পর্যন্ত থাকে।', en: 'Begins when shadow of object is twice its length (Hanafi) and ends before sunset.' },
      { titleBn: 'পূর্ণ নিয়ম', titleEn: 'Full Method', bn: '১. ৪ রাকাত সুন্নতে গায়রে মুয়াক্কাদা (ঐচ্ছিক)\n২. ৪ রাকাত ফরজ (নীরব তেলাওয়াত)\n\nআসরের নামাজ অত্যন্ত গুরুত্বপূর্ণ। কুরআনে এটিকে "মধ্যবর্তী নামাজ" বলা হয়েছে।', en: '1. 4 rakats Sunnah Ghayr Mu\'akkadah (optional)\n2. 4 rakats Fard (silent recitation)\n\nAsr is extremely important. Quran refers to it as the "middle prayer".' },
    ]
  },
  {
    id: 'maghrib', icon: '🌇', nameBn: 'মাগরিবের নামাজ', nameEn: 'Maghrib Prayer', rakats: '৩ ফরজ + ২ সুন্নত + ২ নফল',
    steps: [
      { titleBn: 'মাগরিবের সময়', titleEn: 'Maghrib Time', bn: 'সূর্যাস্তের পরপরই শুরু হয় এবং পশ্চিম আকাশের লালিমা মিলিয়ে যাওয়া পর্যন্ত থাকে।', en: 'Begins immediately after sunset and ends when the red twilight disappears.' },
      { titleBn: 'পূর্ণ নিয়ম', titleEn: 'Full Method', bn: '১. ৩ রাকাত ফরজ (উচ্চস্বরে তেলাওয়াত)\n২. ২ রাকাত সুন্নতে মুয়াক্কাদা\n৩. ২ রাকাত নফল (ঐচ্ছিক)\n\n৩ রাকাতে: ১ম ও ২য় রাকাতে সূরা ফাতিহা + অন্য সূরা, ৩য় রাকাতে শুধু সূরা ফাতিহা।', en: '1. 3 rakats Fard (loud recitation)\n2. 2 rakats Sunnah Mu\'akkadah\n3. 2 rakats Nafl (optional)\n\nIn 3 rakats: 1st & 2nd have Surah Fatiha + another Surah; 3rd rakat only Surah Fatiha.' },
    ]
  },
  {
    id: 'isha', icon: '🌙', nameBn: "ইশার নামাজ", nameEn: 'Isha Prayer', rakats: '৪ সুন্নত + ৪ ফরজ + ২ সুন্নত + ২ নফল + ৩ বিতর',
    steps: [
      { titleBn: 'ইশার সময়', titleEn: 'Isha Time', bn: 'পশ্চিম আকাশের লালিমা মিলিয়ে গেলে শুরু হয় এবং মধ্যরাত পর্যন্ত (সুবহে সাদিকের আগ পর্যন্ত)।', en: 'Begins when red twilight disappears and extends to midnight (before true dawn).' },
      { titleBn: 'পূর্ণ নিয়ম', titleEn: 'Full Method', bn: '১. ৪ রাকাত সুন্নতে গায়রে মুয়াক্কাদা\n২. ৪ রাকাত ফরজ (উচ্চস্বরে তেলাওয়াত)\n৩. ২ রাকাত সুন্নতে মুয়াক্কাদা\n৪. ২ রাকাত নফল (ঐচ্ছিক)\n৫. ৩ রাকাত বিতর (ওয়াজিব)', en: '1. 4 rakats Sunnah Ghayr Mu\'akkadah\n2. 4 rakats Fard (loud recitation)\n3. 2 rakats Sunnah Mu\'akkadah\n4. 2 rakats Nafl (optional)\n5. 3 rakats Witr (Wajib)' },
      { titleBn: 'বিতরের দোয়া কুনুত', titleEn: 'Witr Dua Qunoot', arabic: 'اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَنَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ', bn: 'হে আল্লাহ! আমরা আপনার কাছে সাহায্য চাই, ক্ষমা চাই, আপনার উপর ঈমান রাখি, ভরসা করি, আপনার প্রশংসা করি, আপনার কৃতজ্ঞতা প্রকাশ করি এবং যে আপনার অবাধ্য হয় তাকে ত্যাগ করি।', en: 'O Allah! We seek Your help and Your forgiveness. We believe in You and rely on You. We praise You in the best manner, thank You and are not ungrateful to You. We forsake and turn away from those who disobey You.' },
    ]
  },
  {
    id: 'jummah', icon: '🕌', nameBn: "জুমার নামাজ", nameEn: "Jumu'ah Prayer", rakats: '৪ সুন্নত + ২ ফরজ + ৪ সুন্নত + ২ সুন্নত',
    steps: [
      { titleBn: "জুমার বিধান", titleEn: "Jumu'ah Ruling", bn: "প্রতি শুক্রবার জোহরের সময় জুমার নামাজ পড়া ফরজ (সব প্রাপ্তবয়স্ক পুরুষ মুসলিমের জন্য)।", en: "Jumu'ah prayer is obligatory every Friday during Dhuhr time for all adult male Muslims." },
      { titleBn: "পূর্ণ নিয়ম", titleEn: "Full Method", bn: "১. ৪ রাকাত সুন্নতে মুয়াক্কাদা\n২. খুতবা শোনা (ফরজ)\n৩. ২ রাকাত ফরজ (জামাতে)\n৪. ৪ রাকাত সুন্নতে মুয়াক্কাদা\n৫. ২ রাকাত সুন্নতে মুয়াক্কাদা", en: "1. 4 rakats Sunnah Mu'akkadah\n2. Listen to Khutbah (obligatory)\n3. 2 rakats Fard (in congregation)\n4. 4 rakats Sunnah Mu'akkadah\n5. 2 rakats Sunnah Mu'akkadah" },
    ]
  },
  {
    id: 'janazah', icon: '⚰️', nameBn: "জানাজার নামাজ", nameEn: "Janazah Prayer", rakats: '৪ তাকবির',
    steps: [
      { titleBn: "জানাজার নিয়ম", titleEn: "Janazah Rules", bn: "জানাজার নামাজ ফরজে কিফায়া। কাতারে দাঁড়িয়ে ৪ তাকবির দিয়ে পড়তে হয়। রুকু-সিজদা নেই।", en: "Janazah is Fard Kifayah. Prayed in rows with 4 takbeers. No ruku or sajda." },
      { titleBn: "পূর্ণ নিয়ম", titleEn: "Full Method", bn: "১ম তাকবির: সূরা ফাতিহা পড়ুন\n২য় তাকবির: দরুদ ইব্রাহিম পড়ুন\n৩য় তাকবির: মাইয়িতের জন্য দোয়া পড়ুন\n৪র্থ তাকবির: ডানে ও বামে সালাম ফেরান", en: "1st Takbeer: Recite Surah Fatiha\n2nd Takbeer: Recite Darud Ibrahim\n3rd Takbeer: Dua for the deceased\n4th Takbeer: Give salaam to right and left" },
      { titleBn: "মাইয়িতের জন্য দোয়া", titleEn: "Dua for Deceased", arabic: 'اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا وَشَاهِدِنَا وَغَائِبِنَا وَصَغِيرِنَا وَكَبِيرِنَا وَذَكَرِنَا وَأُنْثَانَا', bn: 'হে আল্লাহ! আমাদের জীবিত-মৃত, উপস্থিত-অনুপস্থিত, ছোট-বড়, পুরুষ-নারী সকলকে ক্ষমা করুন।', en: 'O Allah! Forgive our living and our dead, those who are present and those who are absent, our young and our old, our males and our females.' },
    ]
  },
  {
    id: 'tahajjud', icon: '🌟', nameBn: "তাহাজ্জুদ নামাজ", nameEn: "Tahajjud Prayer", rakats: '২ থেকে ১২ রাকাত (নফল)',
    steps: [
      { titleBn: "তাহাজ্জুদের মর্যাদা", titleEn: "Virtue of Tahajjud", bn: "তাহাজ্জুদ ফরজের পর সর্বোত্তম নামাজ। রাতের শেষ তৃতীয়াংশে পড়া সর্বোত্তম। আল্লাহ প্রতি রাতে পৃথিবীর আকাশে নামেন এবং বলেন: 'কে আছে যে আমাকে ডাকবে, আমি সাড়া দেব?'", en: "Tahajjud is the best prayer after the obligatory ones. Best to pray in the last third of the night. Allah descends to the lowest heaven each night saying: 'Who calls upon Me, that I may answer?'" },
      { titleBn: "নিয়ম", titleEn: "Method", bn: "রাতে ঘুমানোর পর উঠে ২ রাকাত করে পড়ুন। ২ থেকে ১২ রাকাত পর্যন্ত পড়া যায়। প্রতি ২ রাকাতে সালাম ফেরান। শেষে বিতর পড়ুন (যদি আগে না পড়া থাকে)।", en: "Wake up after sleeping and pray 2 rakats at a time. Can pray 2 to 12 rakats. Give salaam after every 2 rakats. End with Witr if not already prayed." },
    ]
  },
];

// ==================== APP STATE ====================
const state = {
  lang: localStorage.getItem('ic_lang') || 'bn',
  theme: localStorage.getItem('ic_theme') || 'green',
  darkMode: localStorage.getItem('ic_dark') === 'true',
  dynamicTheme: localStorage.getItem('ic_dyn_theme') === 'true',
  audioEnabled: localStorage.getItem('ic_audio') !== 'false',
  autoPlay: localStorage.getItem('ic_autoplay') !== 'false',
  audioSpeed: parseFloat(localStorage.getItem('ic_audio_speed')) || 1,
  selectedQari: localStorage.getItem('ic_qari') || 'ar.alafasy',
  lat: parseFloat(localStorage.getItem('ic_lat')) || 23.8103,
  lng: parseFloat(localStorage.getItem('ic_lng')) || 90.4125,
  city: localStorage.getItem('ic_city') || 'Dhaka',
  country: localStorage.getItem('ic_country') || 'Bangladesh',
  calcMethod: parseInt(localStorage.getItem('ic_calc')) || 5,
  madhab: parseInt(localStorage.getItem('ic_madhab')) || 0,
  currentTab: 'home',
  prayerTimes: null,
  surahList: null,
  currentSurah: null,
  hadithBook: 'bukhari',
  hadithLang: 'en',
  hadithPage: 0,
  hadithView: 'book',
  tasbihCount: parseInt(localStorage.getItem('ic_tasbih_count')) || 0,
  tasbihTarget: parseInt(localStorage.getItem('ic_tasbih_target')) || 33,
  tasbihRounds: parseInt(localStorage.getItem('ic_tasbih_rounds')) || 0,
  audioPlaying: false,
  currentAyahIndex: 0,
  ayahList: [],
  audioRepeat: false,
  navStack: ['home'],
  lastBackPress: 0,
};

// Audio
let audioEl = null;
let nextAudioEl = null;
let playAllMode = false;
let wakeLock = null;

// ==================== UTILITY ====================
function t(key) { return translations[state.lang][key] || translations.en[key] || key; }
function $(id) { return document.getElementById(id); }

function showToast(msg) {
  const toast = $('toast');
  const msgEl = $('toast-message');
  msgEl.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2500);
}

function vibrate(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

function formatTime12(time24) {
  if (!time24) return '--:--';
  const [h, m] = time24.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2,'0')} ${ampm}`;
}

function formatCountdown(ms) {
  if (ms <= 0) return { h: '00', m: '00', s: '00' };
  const totalSec = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return { h, m, s };
}

// ==================== WAKE LOCK ====================
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch (e) { console.log('Wake Lock not available'); }
}

function releaseWakeLock() {
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
}

// ==================== I18N ====================
function applyLanguage() {
  const isBn = state.lang === 'bn';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });
  document.documentElement.lang = isBn ? 'bn' : 'en';
  const langText = document.querySelector('.lang-text');
  if (langText) langText.textContent = isBn ? 'EN' : 'বাং';
  const settingLang = $('setting-language');
  if (settingLang) settingLang.value = state.lang;

  // Fix all hardcoded UI text based on language
  const ui = {
    // Settings panel
    'save-settings':    { bn: '💾 সেটিংস সংরক্ষণ', en: '💾 Save Settings' },
    'auto-detect-btn':  { bn: 'সনাক্ত করুন', en: 'Detect' },
    'install-btn':      { bn: 'ইনস্টল', en: 'Install' },
    'install-dismiss':  { bn: 'পরে', en: 'Later' },
    // Hadith
    'hadith-lang-en':   { bn: 'English', en: 'English' },
    'hadith-lang-bn':   { bn: 'বাংলা', en: 'Bangla' },
    'hadith-prev':      { bn: '◄ আগে', en: '◄ Prev' },
    'hadith-next':      { bn: 'পরে ►', en: 'Next ►' },
    'hadith-view-book': { bn: 'বই অনুযায়ী', en: 'By Book' },
    'hadith-view-category': { bn: 'বিভাগ অনুযায়ী', en: 'By Category' },
    'hadith-random':    { bn: '🎲 যেকোনো', en: '🎲 Random' },
    'category-back':    { bn: '← বিভাগে ফিরুন', en: '← Back' },
    // Quran
    'surah-play-all':   { bn: '▶ সব চালান', en: '▶ Play All' },
    'surah-back':       { bn: '←', en: '←' },
    // Tasbih
    'tasbih-reset':     { bn: 'রিসেট', en: 'Reset' },
    'tasbih-tap':       { bn: 'ট্যাপ করুন', en: 'TAP' },
    // Zakat
    'zakat-calculate':  { bn: '💰 যাকাত হিসাব করুন', en: '💰 Calculate Zakat' },
    // AI
    'ai-send-btn':      { bn: '➤', en: '➤' },
  };
  Object.entries(ui).forEach(([id, texts]) => {
    const el = $(id);
    if (el) el.textContent = isBn ? texts.bn : texts.en;
  });

  // Settings panel labels (they use innerHTML)
  const labels = {
    '.settings-section h3:nth-of-type(1)': null, // handled by data-i18n
  };

  // Settings panel hardcoded labels
  document.querySelectorAll('.settings-section h3').forEach(h3 => {
    const text = h3.textContent;
    if (text.includes('Theme') || text.includes('থিম')) h3.textContent = isBn ? '🎨 থিম' : '🎨 Theme';
    if (text.includes('Language') || text.includes('ভাষা')) h3.textContent = isBn ? '🌐 ভাষা' : '🌐 Language';
    if (text.includes('Audio') || text.includes('অডিও')) h3.textContent = isBn ? '🔊 অডিও' : '🔊 Audio';
    if (text.includes('Location') || text.includes('অবস্থান')) h3.textContent = isBn ? '📍 অবস্থান' : '📍 Location';
    if (text.includes('Prayer Settings') || text.includes('নামাজ সেটিং')) h3.textContent = isBn ? '🕌 নামাজ সেটিংস' : '🕌 Prayer Settings';
    if (text.includes('Notification') || text.includes('বিজ্ঞপ্তি')) h3.textContent = isBn ? '🔔 বিজ্ঞপ্তি' : '🔔 Notifications';
  });

  document.querySelectorAll('.settings-section label').forEach(lbl => {
    const text = lbl.textContent.trim();
    const map = {
      'App Language': 'অ্যাপের ভাষা', 'Audio Playback': 'অডিও প্লেব্যাক',
      'Auto-play Next Ayah': 'স্বয়ং পরবর্তী আয়াত', 'Playback Speed': 'প্লেব্যাক গতি',
      'Auto Detect': 'স্বয়ংক্রিয়', 'City': 'শহর', 'Country': 'দেশ',
      'Latitude': 'অক্ষাংশ', 'Longitude': 'দ্রাঘিমাংশ',
      'Calculation Method': 'হিসাব পদ্ধতি', 'Madhab (Asr)': 'মাযহাব (আসর)',
      'Adhan Notification': 'আজান বিজ্ঞপ্তি', 'Pre-Prayer Alert': 'নামাজ-পূর্ব সতর্কতা',
      'Time/Season Theme': 'সময়/ঋতু থিম',
    };
    const mapRev = Object.fromEntries(Object.entries(map).map(([k,v])=>[v,k]));
    if (isBn && map[text]) lbl.textContent = map[text];
    else if (!isBn && mapRev[text]) lbl.textContent = mapRev[text];
  });

  // Placeholders
  const placeholders = {
    'hadith-search':         { bn: '🔍 হাদিস নম্বর লিখুন (যেমন: ৪৫০)', en: '🔍 Enter hadith number (e.g. 450)' },
    'hadith-keyword-search': { bn: '🔍 বিষয় খুঁজুন: বিবাহ, দান, jihad...', en: '🔍 Search: marriage, charity, jihad...' },
    'quran-search':          { bn: '🔍 সূরা খুঁজুন...', en: '🔍 Search Surah...' },
    'ai-chat-input':         { bn: 'ইসলাম সম্পর্কে প্রশ্ন করুন...', en: 'Ask about Islam...' },
    'setting-city':          { bn: 'ঢাকা', en: 'Dhaka' },
    'setting-country':       { bn: 'বাংলাদেশ', en: 'Bangladesh' },
  };
  Object.entries(placeholders).forEach(([id, texts]) => {
    const el = $(id);
    if (el) el.placeholder = isBn ? texts.bn : texts.en;
  });

  // Install banner
  const installTitle = document.querySelector('.install-content strong');
  const installDesc = document.querySelector('.install-content p');
  if (installTitle) installTitle.textContent = isBn ? 'Islamic-Companion ইনস্টল করুন' : 'Install Islamic-Companion';
  if (installDesc) installDesc.textContent = isBn ? 'হোম স্ক্রিনে যোগ করুন' : 'Add to home screen';

  // Header subtitle
  const headerSub = document.querySelector('.header-subtitle');
  if (headerSub) headerSub.textContent = isBn ? 'EXIT EXCIT দ্বারা' : 'By EXIT EXCIT';

  // More tools grid labels
  const toolLabels = document.querySelectorAll('.tool-btn-label');
  const toolBn = ['দৈনিক দোয়া','নামাজ গাইড','তাসবিহ','যাকাত','আসমাউল হুসনা'];
  const toolEn = ['Daily Duas','Salah Guide','Tasbih','Zakat','Asmaul Husna'];
  toolLabels.forEach((lbl, i) => { lbl.textContent = isBn ? (toolBn[i] || lbl.textContent) : (toolEn[i] || lbl.textContent); });

  // Tool back buttons
  document.querySelectorAll('.tool-back-btn').forEach(btn => {
    btn.textContent = isBn ? '← ফিরুন' : '← Back';
  });
  const duaBack = $('dua-back-btn');
  if (duaBack) duaBack.textContent = isBn ? '← সকল দোয়া' : '← All Duas';
  const salahBack = $('salah-back-btn');
  if (salahBack) salahBack.textContent = isBn ? '← নামাজ তালিকা' : '← Prayer List';

  // Hadith book buttons
  const bookBn = { bukhari:'বুখারী', muslim:'মুসলিম', 'abu-dawud':'আবু দাউদ', tirmidhi:'তিরমিযী', nasai:'নাসাঈ', 'ibn-majah':'ইবনে মাজাহ' };
  const bookEn = { bukhari:'Bukhari', muslim:'Muslim', 'abu-dawud':'Abu Dawud', tirmidhi:'Tirmidhi', nasai:'Nasai', 'ibn-majah':'Ibn Majah' };
  document.querySelectorAll('.hadith-book-btn').forEach(btn => {
    const book = btn.dataset.book;
    const small = btn.querySelector('small');
    const name = isBn ? bookBn[book] : bookEn[book];
    if (name && small) btn.childNodes[0].textContent = name;
    else if (name) btn.textContent = name;
  });

  // AI suggestions
  const sugBn = ['নামাজের নিয়ম কী?','রোজা কখন ফরজ?','যাকাত কীভাবে?','দোয়া কুনুত কখন?','তাহাজ্জুদের নিয়ম?','হালাল খাবার কী?'];
  const sugEn = ['Rules of Prayer?','When is fasting obligatory?','How to calculate Zakat?','When to read Dua Qunoot?','Rules of Tahajjud?','What is Halal food?'];
  document.querySelectorAll('.ai-suggestion').forEach((btn, i) => {
    btn.textContent = isBn ? (sugBn[i] || btn.textContent) : (sugEn[i] || btn.textContent);
  });

  // More section header
  const moreHeader = document.querySelector('#tab-more .more-header-banner h3');
  if (moreHeader) moreHeader.textContent = isBn ? '🔧 ইসলামিক টুলস' : '🔧 Islamic Tools';

  // Chat header
  const chatHeader = document.querySelector('#tab-chat .chat-header-banner h3');
  const chatSub = document.querySelector('#tab-chat .chat-header-banner p');
  if (chatHeader) chatHeader.textContent = isBn ? 'Islamic AI Assistant' : 'Islamic AI Assistant';
  if (chatSub) chatSub.textContent = isBn ? 'ইসলামিক প্রশ্নের AI উত্তর' : 'AI answers for Islamic questions';

  // Nav labels
  const navLabels = document.querySelectorAll('.nav-item span');
  const navBn = ['হোম','কুরআন','হাদিস','AI চ্যাট','আরো'];
  const navEn = ['Home','Quran','Hadith','AI Chat','More'];
  navLabels.forEach((lbl, i) => { lbl.textContent = isBn ? (navBn[i]||lbl.textContent) : (navEn[i]||lbl.textContent); });

  // Tasbih dhikr selector options
  const tasbihTarget = $('tasbih-target');
  if (tasbihTarget) {
    const opts = tasbihTarget.querySelectorAll('option');
    const optBn = ['৩৩ - সুবহানাল্লাহ','৩৪ - আলহামদুলিল্লাহ','৩৩ - আল্লাহু আকবার','১০০ - লা ইলাহা ইল্লাল্লাহ','১০০ - আস্তাগফিরুল্লাহ','১০০ - সুবহানাল্লাহি ওয়াবিহামদিহি','কাস্টম'];
    const optEn = ['33 - SubhanAllah','34 - Alhamdulillah','33 - Allahu Akbar','100 - La Ilaha IllAllah','100 - Astaghfirullah','100 - SubhanAllahi Wabihamdihi','Custom'];
    opts.forEach((opt, i) => { opt.textContent = isBn ? (optBn[i]||opt.textContent) : (optEn[i]||opt.textContent); });
  }
}

// ==================== THEME ====================
function getDynamicTheme() {
  if (!state.dynamicTheme) return state.theme;
  const hour = new Date().getHours();
  const month = new Date().getMonth();
  // Season-based themes
  if (month >= 2 && month <= 4) return 'green'; // Spring
  if (month >= 5 && month <= 7) return 'amber'; // Summer
  if (month >= 8 && month <= 10) return 'teal'; // Autumn
  // Winter
  if (hour >= 5 && hour < 12) return 'green'; // Morning
  if (hour >= 12 && hour < 17) return 'blue'; // Afternoon
  if (hour >= 17 && hour < 20) return 'purple'; // Evening
  return 'rose'; // Night
}

function applyTheme() {
  const effectiveTheme = getDynamicTheme();
  document.body.className = `theme-${effectiveTheme} ${state.darkMode ? 'dark-mode' : 'light-mode'}`;
  if (state.dynamicTheme) {
    document.body.classList.add('dynamic-theme-active');
  }
  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === state.theme);
  });
  const themeToggle = $('theme-toggle');
  if (themeToggle) themeToggle.textContent = state.darkMode ? '☀️' : '🌙';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = state.darkMode ? '#1e1e1e' : getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
}

// ==================== PRAYER TIMES ====================
async function loadPrayerTimes() {
  try {
    const date = new Date();
    const d = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    const url = `https://api.aladhan.com/v1/timings/${d}?latitude=${state.lat}&longitude=${state.lng}&method=${state.calcMethod}&shpia=${state.madhab}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.code === 200 && data.data) {
      state.prayerTimes = data.data.timings;
      state.hijriDate = data.data.date.hijri;
      renderPrayerTimes();
      renderIslamicDate();
      renderNextPrayer();
    }
  } catch (e) {
    console.error('Prayer times error:', e);
    showToast(state.lang === 'bn' ? 'নামাজের সময় লোড ব্যর্থ' : 'Failed to load prayer times');
  }
}

function renderPrayerTimes() {
  if (!state.prayerTimes) return;
  const prayers = [
    { key: 'Fajr', name: t('fajr'), icon: '🌙' },
    { key: 'Sunrise', name: t('sunrise'), icon: '🌅' },
    { key: 'Dhuhr', name: t('dhuhr'), icon: '☀️' },
    { key: 'Asr', name: t('asr'), icon: '🌤' },
    { key: 'Maghrib', name: t('maghrib'), icon: '🌆' },
    { key: 'Isha', name: t('isha'), icon: '🌃' },
  ];
  const now = new Date();
  let nextPrayerKey = '';
  const list = $('prayer-times-list');
  list.innerHTML = prayers.map(p => {
    const time = state.prayerTimes[p.key];
    const [h, m] = time.split(':').map(Number);
    const pDate = new Date(now); pDate.setHours(h, m, 0);
    const isPast = pDate < now;
    const isActive = !isPast && !nextPrayerKey;
    if (isActive) nextPrayerKey = p.key;
    return `<div class="prayer-time-item ${isActive ? 'active' : ''}"><span class="pt-name"><span class="pt-icon">${p.icon}</span>${p.name}</span><span class="pt-time">${formatTime12(time)}</span></div>`;
  }).join('');
  const fajrTime = state.prayerTimes['Fajr'];
  const maghribTime = state.prayerTimes['Maghrib'];
  if (fajrTime) { $('sehri-time').textContent = formatTime12(fajrTime); }
  if (maghribTime) { $('iftar-time').textContent = formatTime12(maghribTime); }
  const today = new Date();
  const dateStr = today.toLocaleDateString(state.lang === 'bn' ? 'bn-BD' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  $('prayer-date').textContent = dateStr;
}

function renderIslamicDate() {
  if (!state.hijriDate) return;
  const h = state.hijriDate;
  const dateStr = `${h.day} ${h.month.en} ${h.year} AH`;
  $('islamic-date').textContent = state.lang === 'bn' ? `${h.day} ${h.month.ar} ${h.year} হিজরি` : dateStr;
}

function renderNextPrayer() {
  if (!state.prayerTimes) return;
  const prayers = ['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];
  const now = new Date();
  let nextPrayer = null;
  for (const key of prayers) {
    const time = state.prayerTimes[key];
    const [h, m] = time.split(':').map(Number);
    const pDate = new Date(now); pDate.setHours(h, m, 0);
    if (pDate > now) { nextPrayer = { key, time: pDate }; break; }
  }
  if (nextPrayer) {
    const names = { Fajr: t('fajr'), Sunrise: t('sunrise'), Dhuhr: t('dhuhr'), Asr: t('asr'), Maghrib: t('maghrib'), Isha: t('isha') };
    $('next-prayer-name').textContent = names[nextPrayer.key] || nextPrayer.key;
    $('next-prayer-time').textContent = formatTime12(state.prayerTimes[nextPrayer.key]);
    const diff = nextPrayer.time - now;
    const cd = formatCountdown(diff);
    $('countdown-hours').textContent = cd.h;
    $('countdown-minutes').textContent = cd.m;
    $('countdown-seconds').textContent = cd.s;
    const totalDiff = 6 * 60 * 60 * 1000;
    const pct = Math.min(100, Math.max(0, ((totalDiff - diff) / totalDiff) * 100));
    $('prayer-progress-fill').style.width = pct + '%';
  } else {
    $('next-prayer-name').textContent = state.lang === 'bn' ? 'ফজর (আগামীকাল)' : 'Fajr (Tomorrow)';
    $('next-prayer-time').textContent = formatTime12(state.prayerTimes['Fajr']);
  }
}

// ==================== QURAN ====================
async function loadSurahList() {
  if (state.surahList) { renderSurahList(); return; }
  try {
    const res = await fetch('https://api.alquran.cloud/v1/surah');
    const data = await res.json();
    if (data.code === 200) {
      state.surahList = data.data;
      renderSurahList();
    }
  } catch (e) {
    console.error('Surah list error:', e);
    $('surah-list').innerHTML = `<div class="hadith-error"><p>❌ ${state.lang === 'bn' ? 'কুরআন লোড ব্যর্থ' : 'Failed to load Quran'}</p></div>`;
  }
}

function renderSurahList(filter = '') {
  if (!state.surahList) return;
  const list = filter
    ? state.surahList.filter(s => s.englishName.toLowerCase().includes(filter.toLowerCase()) || s.number.toString() === filter || s.name.includes(filter))
    : state.surahList;
  $('surah-list').innerHTML = list.map(s => `
    <div class="surah-item" data-surah="${s.number}">
      <div class="surah-num">${s.number}</div>
      <div class="surah-info">
        <div class="surah-name-ar">${s.name}</div>
        <div class="surah-name-en">${s.englishName} - ${s.englishNameTranslation}</div>
      </div>
      <div class="surah-meta">
        <div class="surah-ayahs">${s.numberOfAyahs} ${t('ayahs')}</div>
        <div class="surah-type">${s.revelationType === 'Meccan' ? t('meccan') : t('medinan')}</div>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.surah-item').forEach(el => {
    el.addEventListener('click', () => openSurah(parseInt(el.dataset.surah)));
  });
}

async function openSurah(num) {
  try {
    const [arRes, bnRes, enRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${num}`),
      fetch(`https://api.alquran.cloud/v1/surah/${num}/bn.bengali`),
      fetch(`https://api.alquran.cloud/v1/surah/${num}/en.asad`)
    ]);
    const arData = await arRes.json();
    const bnData = await bnRes.json();
    const enData = await enRes.json();
    if (arData.code === 200) {
      state.currentSurah = arData.data;
      state.surahBn = bnData.code === 200 ? bnData.data : null;
      state.surahEn = enData.code === 200 ? enData.data : null;
      renderSurahView();
      pushNav('surah-view');
    }
  } catch (e) {
    console.error('Surah load error:', e);
    showToast(state.lang === 'bn' ? 'সূরা লোড ব্যর্থ' : 'Failed to load surah');
  }
}

function renderSurahView() {
  const s = state.currentSurah;
  if (!s) return;
  $('surah-list').classList.add('hidden');
  $('surah-view').classList.remove('hidden');
  $('surah-view-name').textContent = s.name;
  $('surah-view-info').textContent = `${s.englishName} | ${s.numberOfAyahs} ${t('ayahs')} | ${s.revelationType === 'Meccan' ? t('meccan') : t('medinan')}`;
  $('surah-bismillah').style.display = s.number === 1 || s.number === 9 ? 'none' : 'block';
  state.ayahList = s.ayahs;
  const container = $('ayah-container');
  container.innerHTML = s.ayahs.map((ayah, i) => {
    const bnText = state.surahBn ? state.surahBn.ayahs[i]?.text || '' : '';
    const enText = state.surahEn ? state.surahEn.ayahs[i]?.text || '' : '';
    return `<div class="ayah-item" data-ayah-index="${i}">
      <div class="ayah-top">
        <span class="ayah-number">${ayah.numberInSurah}</span>
        <button class="ayah-play-btn" data-ayah-index="${i}">▶</button>
      </div>
      <p class="ayah-text-ar">${ayah.text}</p>
      ${bnText ? `<p class="ayah-text-bn">${bnText}</p>` : ''}
      ${enText ? `<p class="ayah-text-en">${enText}</p>` : ''}
    </div>`;
  }).join('');
  document.querySelectorAll('.ayah-play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.ayahIndex);
      playAyah(idx);
    });
  });
}

// ==================== AUDIO PLAYER (FIXED) ====================
function initAudio() {
  audioEl = new Audio();
  audioEl.preload = 'auto';
  audioEl.addEventListener('timeupdate', updateAudioProgress);
  audioEl.addEventListener('ended', onAyahEnded);
  audioEl.addEventListener('error', onAudioError);
  audioEl.addEventListener('loadedmetadata', () => {
    $('audio-duration').textContent = formatAudioTime(audioEl.duration);
  });
  // Preload next audio element
  nextAudioEl = new Audio();
  nextAudioEl.preload = 'auto';

  // Loading indicator
  audioEl.addEventListener('waiting', () => { $('audio-play').textContent = '⌛'; });
  audioEl.addEventListener('playing', () => { $('audio-play').textContent = '⏸'; state.audioPlaying = true; });
  audioEl.addEventListener('canplay', () => {
    if (state.audioPlaying) $('audio-play').textContent = '⏸';
  });

  // Set up Media Session API for phone music player controls (lock screen, notification)
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => { toggleAudioPlay(); });
    navigator.mediaSession.setActionHandler('pause', () => { toggleAudioPlay(); });
    navigator.mediaSession.setActionHandler('previoustrack', () => { playPrevAyah(); });
    navigator.mediaSession.setActionHandler('nexttrack', () => { playNextAyah(); });
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.seekTime && audioEl.duration) {
        audioEl.currentTime = details.seekTime;
      }
    });
  }

  // Draggable / tappable progress bar
  const progressContainer = $('audio-progress-bar')?.parentElement;
  if (progressContainer) {
    function seekFromEvent(e) {
      const rect = progressContainer.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      if (audioEl.duration) audioEl.currentTime = pct * audioEl.duration;
    }
    let isSeeking = false;
    progressContainer.addEventListener('touchstart', (e) => { isSeeking = true; seekFromEvent(e); }, { passive: true });
    progressContainer.addEventListener('touchmove', (e) => { if (isSeeking) seekFromEvent(e); }, { passive: true });
    progressContainer.addEventListener('touchend', () => { isSeeking = false; });
    progressContainer.addEventListener('mousedown', (e) => { isSeeking = true; seekFromEvent(e); });
    progressContainer.addEventListener('mousemove', (e) => { if (isSeeking) seekFromEvent(e); });
    progressContainer.addEventListener('mouseup', () => { isSeeking = false; });
    progressContainer.addEventListener('click', seekFromEvent);
  }
}

function getBengaliAudioUrls(ayahGlobalNum) {
  // bn.bengali does NOT have ayah-by-ayah audio on cdn.islamic.network.
  // Use surah-level audio from truemuslims.net and cdn.islamic.network surah audio.
  // We return surah audio URLs based on the current surah number.
  const surahNum = state.currentSurah ? state.currentSurah.number : 1;
  const surahPadded3 = String(surahNum).padStart(3, '0');
  const surahPadded = String(surahNum).padStart(3, '0');
  return [
    // truemuslims.net Bangla surah audio
    `https://www.truemuslims.net/Quran/Bangla/${surahPadded3}.mp3`,
    // cdn.islamic.network surah-level Bengali audio (if available)
    `https://cdn.islamic.network/quran/audio-surah/128/bn.bengali/${surahNum}.mp3`,
    `https://cdn.islamic.network/quran/audio-surah/64/bn.bengali/${surahNum}.mp3`,
  ];
}

function getAudioUrl(ayahGlobalNum) {
  if (state.selectedQari === 'bn.bengali') {
    return getBengaliAudioUrls(ayahGlobalNum)[0];
  }
  return `https://cdn.islamic.network/quran/audio/64/${state.selectedQari}/${ayahGlobalNum}.mp3`;
}

function getBackupAudioUrl(ayahGlobalNum) {
  if (state.selectedQari === 'bn.bengali') {
    return getBengaliAudioUrls(ayahGlobalNum)[1] || getBengaliAudioUrls(ayahGlobalNum)[0];
  }
  return `https://cdn.islamic.network/quran/audio/128/${state.selectedQari}/${ayahGlobalNum}.mp3`;
}

function preloadNextAyah() {
  if (state.currentAyahIndex < state.ayahList.length - 1) {
    const nextAyah = state.ayahList[state.currentAyahIndex + 1];
    if (nextAyah) {
      nextAudioEl.src = getAudioUrl(nextAyah.number);
      nextAudioEl.load();
    }
  }
}

function playAyah(index) {
  if (!state.audioEnabled) {
    showToast(t('audioDisabled'));
    return;
  }
  if (index < 0 || index >= state.ayahList.length) return;

  const ayah = state.ayahList[index];
  const surahNum = state.currentSurah?.number;

  // Play bismillah before first ayah (except Surah 1 where ayah 1 is bismillah, and Surah 9 which has no bismillah)
  if (index === 0 && surahNum !== 1 && surahNum !== 9 && state.selectedQari !== 'bn.bengali' && !state._skipBismillah) {
    const bismillahUrl = getBismillahUrl(state.selectedQari);
    if (bismillahUrl) {
      playBismillahThenAyah(0, bismillahUrl);
      return;
    }
  }
  state._skipBismillah = false;

  const url = getAudioUrl(ayah.number);

  state.currentAyahIndex = index;
  state.audioPlaying = true;

  // Update UI
  const player = $('quran-audio-player');
  player.classList.remove('hidden');
  $('audio-surah-name').textContent = state.currentSurah?.englishName || '';

  if (state.selectedQari === 'bn.bengali') {
    $('audio-ayah-num').textContent = state.lang === 'bn' ? 'সম্পূর্ণ সূরা (বাংলা)' : 'Full Surah (Bangla)';
    // For Bengali, we play the full surah — no individual ayah highlight
    document.querySelectorAll('.ayah-item').forEach(el => el.classList.remove('playing'));
  } else {
    $('audio-ayah-num').textContent = `${t('ayah')} ${ayah.numberInSurah}`;
    // Highlight current ayah
    document.querySelectorAll('.ayah-item').forEach(el => el.classList.remove('playing'));
    const currentEl = document.querySelector(`.ayah-item[data-ayah-index="${index}"]`);
    if (currentEl) {
      currentEl.classList.add('playing');
      currentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  $('audio-play').textContent = '⏸';

  // Set audio speed
  audioEl.playbackRate = state.audioSpeed;

  // Update Media Session (phone notification / lock screen)
  if ('mediaSession' in navigator) {
    const qari = QARI_LIST.find(q => q.id === state.selectedQari);
    navigator.mediaSession.metadata = new MediaMetadata({
      title: `${state.currentSurah?.englishName || 'Quran'} — ${t('ayah')} ${ayah.numberInSurah}`,
      artist: qari?.name || 'Islamic-Companion',
      album: `Surah ${state.currentSurah?.number || ''} of 114`,
      artwork: [{ src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' }]
    });
    navigator.mediaSession.playbackState = 'playing';
  }

  // Request wake lock to keep audio playing when screen is off
  requestWakeLock();

  audioEl.src = url;
  audioEl.play().catch(e => {
    console.warn('Audio play error, trying fallbacks:', e);
    if (state.selectedQari === 'bn.bengali') {
      // Try all Bengali URLs in sequence
      const allUrls = getBengaliAudioUrls(ayah.number);
      let tryIndex = 1;
      function tryNext() {
        if (tryIndex >= allUrls.length) {
          showToast(t('audioPlayFailed'));
          state.audioPlaying = false;
          $('audio-play').textContent = '▶';
          return;
        }
        console.warn('Trying Bengali URL:', allUrls[tryIndex]);
        audioEl.src = allUrls[tryIndex];
        audioEl.play().catch(() => { tryIndex++; tryNext(); });
      }
      tryNext();
    } else {
      // Try backup URL
      const fallbackUrl = getBackupAudioUrl(ayah.number);
      audioEl.src = fallbackUrl;
      audioEl.play().catch(e2 => {
        console.warn('Fallback audio error:', e2);
        showToast(t('audioPlayFailed'));
        state.audioPlaying = false;
        $('audio-play').textContent = '▶';
      });
    }
  });

  // Preload next ayah
  preloadNextAyah();
}

function onAyahEnded() {
  if (state.audioRepeat) {
    // Repeat same ayah
    audioEl.currentTime = 0;
    audioEl.play();
    return;
  }
  if (state.autoPlay && state.currentAyahIndex < state.ayahList.length - 1) {
    // Small delay for seamless transition, then play next
    setTimeout(() => playAyah(state.currentAyahIndex + 1), 150);
  } else {
    state.audioPlaying = false;
    $('audio-play').textContent = '▶';
    playAllMode = false;
    document.querySelectorAll('.ayah-item').forEach(el => el.classList.remove('playing'));
    releaseWakeLock();
  }
}

function onAudioError() {
  console.warn('Audio error for:', audioEl.src);
  showToast(t('audioPlayFailed'));
  state.audioPlaying = false;
  $('audio-play').textContent = '▶';
}

function updateAudioProgress() {
  if (!audioEl.duration) return;
  const pct = (audioEl.currentTime / audioEl.duration) * 100;
  $('audio-progress-bar').style.width = pct + '%';
  $('audio-current-time').textContent = formatAudioTime(audioEl.currentTime);
  // Update phone media session position for lock screen scrubbing
  if ('mediaSession' in navigator && navigator.mediaSession.setPositionState) {
    try {
      navigator.mediaSession.setPositionState({
        duration: audioEl.duration,
        playbackRate: audioEl.playbackRate,
        position: audioEl.currentTime,
      });
    } catch (e) { /* ignore */ }
  }
}

function formatAudioTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function toggleAudioPlay() {
  if (!state.audioEnabled) {
    showToast(t('audioDisabled'));
    return;
  }
  if (state.audioPlaying) {
    audioEl.pause();
    state.audioPlaying = false;
    $('audio-play').textContent = '▶';
    releaseWakeLock();
  } else {
    audioEl.play().catch(() => showToast(t('audioPlayFailed')));
    state.audioPlaying = true;
    $('audio-play').textContent = '⏸';
    requestWakeLock();
  }
}

function playNextAyah() {
  if (state.currentAyahIndex < state.ayahList.length - 1) {
    playAyah(state.currentAyahIndex + 1);
  }
}

function playPrevAyah() {
  if (state.currentAyahIndex > 0) {
    playAyah(state.currentAyahIndex - 1);
  }
}

function closeAudioPlayer() {
  audioEl.pause();
  audioEl.src = '';
  state.audioPlaying = false;
  playAllMode = false;
  state.audioRepeat = false;
  $('quran-audio-player').classList.add('hidden');
  $('audio-play').textContent = '▶';
  $('audio-repeat').style.opacity = '0.5';
  document.querySelectorAll('.ayah-item').forEach(el => el.classList.remove('playing'));
  releaseWakeLock();
}

// Surah 1 (Fatiha) and Surah 9 (Tawbah) don't get separate bismillah
// Bismillah ayah is global number 1 (Fatiha:1 contains bismillah)
// For other surahs, ayah 1 of each surah begins with bismillah in recitation
// We play a dedicated bismillah audio before the first ayah of each surah
const BISMILLAH_AUDIO_URL = 'https://cdn.islamic.network/quran/audio/128/ar.alafasy/1.mp3';

function getBismillahUrl(qariId) {
  // Use the Fatiha ayah 1 (global #1) as bismillah for all qaris
  if (qariId === 'bn.bengali') return null; // Bengali plays full surah, no separate bismillah
  return `https://cdn.islamic.network/quran/audio/128/${qariId}/1.mp3`;
}

function playAllSurah() {
  if (!state.audioEnabled) {
    showToast(t('audioDisabled'));
    return;
  }
  if (playAllMode) {
    closeAudioPlayer();
    return;
  }
  playAllMode = true;
  // Play bismillah first, then start from ayah 0
  const surahNum = state.currentSurah?.number;
  const bismillahUrl = getBismillahUrl(state.selectedQari);
  if (bismillahUrl && surahNum !== 9) {
    // For surah 1, first ayah is bismillah itself, don't double-play
    if (surahNum !== 1) {
      playBismillahThenAyah(0, bismillahUrl);
      return;
    }
  }
  playAyah(0);
}

function playBismillahThenAyah(ayahIndex, bismillahUrl) {
  const player = $('quran-audio-player');
  player.classList.remove('hidden');
  $('audio-surah-name').textContent = state.currentSurah?.englishName || '';
  $('audio-ayah-num').textContent = state.lang === 'bn' ? 'بِسْمِ اللَّهِ' : 'Bismillah...';
  $('audio-play').textContent = '⏸';
  state.audioPlaying = true;
  state._skipBismillah = true; // prevent recursive bismillah
  requestWakeLock();

  const bismEl = new Audio(bismillahUrl);
  bismEl.playbackRate = state.audioSpeed;
  bismEl.play().catch(() => { playAyah(ayahIndex); return; });
  bismEl.addEventListener('ended', () => { playAyah(ayahIndex); });
  bismEl.addEventListener('error', () => { playAyah(ayahIndex); });
}

function toggleRepeat() {
  state.audioRepeat = !state.audioRepeat;
  $('audio-repeat').style.opacity = state.audioRepeat ? '1' : '0.5';
  showToast(state.audioRepeat ? t('repeatOn') : t('repeatOff'));
}

function cycleSpeed() {
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const currentIdx = speeds.indexOf(state.audioSpeed);
  const nextIdx = (currentIdx + 1) % speeds.length;
  state.audioSpeed = speeds[nextIdx];
  audioEl.playbackRate = state.audioSpeed;
  $('audio-speed-btn').textContent = state.audioSpeed + 'x';
  localStorage.setItem('ic_audio_speed', state.audioSpeed);
  $('setting-audio-speed').value = state.audioSpeed;
}

// ==================== QARI MODAL ====================
function renderQariList() {
  const list = $('qari-list');
  list.innerHTML = QARI_LIST.map(q => `
    <div class="qari-item ${q.id === state.selectedQari ? 'active' : ''}" data-qari="${q.id}">
      <div class="qari-avatar">${q.avatar}</div>
      <div><div class="qari-name">${q.name}</div><div class="qari-lang">${q.lang}${q.backup ? ' (Backup available)' : ''}</div></div>
    </div>
  `).join('');
  document.querySelectorAll('.qari-item').forEach(el => {
    el.addEventListener('click', () => {
      state.selectedQari = el.dataset.qari;
      localStorage.setItem('ic_qari', state.selectedQari);
      renderQariList();
      $('qari-modal').classList.add('hidden');
      showToast(state.lang === 'bn' ? 'কারী পরিবর্তন হয়েছে' : 'Qari changed');
      if (state.audioPlaying) {
        playAyah(state.currentAyahIndex);
      }
    });
  });
}

// ==================== HADITH ====================
// ==================== HADITH API (fawazahmed0 - 50,000+ hadiths) ====================
// API base: https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/
// Book key mapping: app book key → API edition prefix
const HADITH_API_BOOK_MAP = {
  'bukhari':   { ara: 'ara-bukhari',   ben: 'ben-bukhari',   eng: 'eng-bukhari',   total: 7563, nameBn: 'সহীহ বুখারী',     nameEn: 'Sahih al-Bukhari' },
  'muslim':    { ara: 'ara-muslim',    ben: 'ben-muslim',    eng: 'eng-muslim',    total: 7453, nameBn: 'সহীহ মুসলিম',     nameEn: 'Sahih Muslim' },
  'abu-dawud': { ara: 'ara-abudawud',  ben: 'ben-abudawud',  eng: 'eng-abudawud',  total: 5274, nameBn: 'সুনান আবু দাউদ', nameEn: 'Sunan Abu Dawud' },
  'tirmidhi':  { ara: 'ara-tirmidhi',  ben: 'ben-tirmidhi',  eng: 'eng-tirmidhi',  total: 3956, nameBn: 'জামে তিরমিযী',   nameEn: "Jami' at-Tirmidhi" },
  'nasai':     { ara: 'ara-nasai',     ben: 'ben-nasai',     eng: 'eng-nasai',     total: 5758, nameBn: 'সুনান নাসাঈ',     nameEn: 'Sunan an-Nasai' },
  'ibn-majah': { ara: 'ara-ibnmajah',  ben: 'ben-ibnmajah',  eng: 'eng-ibnmajah',  total: 4341, nameBn: 'সুনান ইবনে মাজাহ', nameEn: 'Sunan Ibn Majah' },
};
const HADITH_CDN = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/';
const HADITHS_PER_PAGE = 5;

function renderHadithCard(num, arabic, translation, narrator, bookNameDisplay) {
  return `
    <div class="hadith-card">
      <div class="hadith-meta-row">
        <span class="hadith-num-badge">#${num}</span>
        ${narrator ? `<span class="hadith-narrator-name">📖 ${narrator}</span>` : ''}
      </div>
      ${arabic ? `<div class="hadith-arabic" dir="rtl">${arabic}</div>` : ''}
      <div class="hadith-translation">${translation || ''}</div>
      <div class="hadith-reference">${bookNameDisplay} #${num}</div>
    </div>`;
}

function getHadithStartNum() {
  return state.hadithPage * HADITHS_PER_PAGE + 1;
}

function loadHadith() {
  const bookInfo = HADITH_API_BOOK_MAP[state.hadithBook];
  if (!bookInfo) return;

  const startNum = state.hadithPage * HADITHS_PER_PAGE + 1;
  const endNum = Math.min(startNum + HADITHS_PER_PAGE - 1, bookInfo.total);
  $('hadith-page-info').textContent = `#${startNum}–${endNum}`;
  $('hadith-content').innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>হাদিস #${startNum} লোড হচ্ছে...</p></div>`;

  fetchHadithsFromCDN(startNum, bookInfo);
}

async function fetchHadithsFromCDN(startNum, bookInfo) {
  const isBn = state.hadithLang === 'bn';
  const langPrefix = isBn ? bookInfo.ben : bookInfo.eng;
  const araPrefix = bookInfo.ara;
  const bookDisplay = isBn ? bookInfo.nameBn : bookInfo.nameEn;
  // Real sequential hadith numbers for this book starting from startNum
  const nums = Array.from({ length: HADITHS_PER_PAGE }, (_, i) => startNum + i).filter(n => n <= bookInfo.total);

  if (nums.length === 0) {
    $('hadith-content').innerHTML = `<div class="hadith-error"><p>❌ ${t('noHadithFound')}</p></div>`;
    return;
  }

  try {
    const fetches = nums.map(async (num) => {
      const [transRes, araRes] = await Promise.all([
        fetch(`${HADITH_CDN}${langPrefix}/${num}.min.json`),
        fetch(`${HADITH_CDN}${araPrefix}/${num}.min.json`),
      ]);
      const transData = transRes.ok ? await transRes.json() : null;
      const araData = araRes.ok ? await araRes.json() : null;
      const translation = transData?.hadiths?.[0]?.text || transData?.hadith?.[0]?.text || transData?.text || '';
      const arabic = araData?.hadiths?.[0]?.text || araData?.hadith?.[0]?.text || araData?.text || '';
      const narrator = transData?.hadiths?.[0]?.by || transData?.hadith?.[0]?.by || '';
      return { num, arabic, translation, narrator };
    });

    const results = await Promise.all(fetches);
    $('hadith-content').innerHTML = results.map(r =>
      renderHadithCard(r.num, r.arabic, r.translation, r.narrator, bookDisplay)
    ).join('');

  } catch (err) {
    // Fallback: built-in HADITH_DATA
    const builtIn = HADITH_DATA[state.hadithBook];
    if (builtIn) {
      const isBnF = state.hadithLang === 'bn';
      const slice = builtIn.hadiths.filter(h => h.num >= startNum && h.num < startNum + HADITHS_PER_PAGE);
      if (slice.length > 0) {
        $('hadith-content').innerHTML = slice.map(h =>
          renderHadithCard(h.num, h.arabic, isBnF ? h.bn : h.en, isBnF ? h.narratorBn : h.narrator, builtIn[isBnF ? 'nameBn' : 'name'])
        ).join('');
        return;
      }
    }
    $('hadith-content').innerHTML = `<div class="hadith-error"><p>❌ নেটওয়ার্ক সমস্যা। ইন্টারনেট চেক করুন।</p></div>`;
  }
}

// ==================== HADITH CATEGORIES ====================
function renderHadithCategories() {
  const list = $('hadith-category-list');
  list.innerHTML = HADITH_CATEGORIES.map(cat => `
    <div class="hadith-category-item" data-category="${cat.id}" style="border-color:${cat.color}">
      <div class="category-icon" style="background:${cat.color}">${cat.icon}</div>
      <div class="category-name">${state.lang === 'bn' ? cat.nameBn : cat.nameEn}</div>
    </div>
  `).join('');
  document.querySelectorAll('.hadith-category-item').forEach(el => {
    el.addEventListener('click', () => openHadithCategory(el.dataset.category));
  });
}

function openHadithCategory(categoryId) {
  const cat = HADITH_CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return;

  $('hadith-category-list').classList.add('hidden');
  $('hadith-category-content').classList.remove('hidden');
  $('category-title').textContent = state.lang === 'bn' ? cat.nameBn : cat.nameEn;

  // Gather all hadiths from all books that match this category
  const isBn = state.hadithLang === 'bn';
  let allHadiths = [];
  for (const [bookKey, bookData] of Object.entries(HADITH_DATA)) {
    const matched = bookData.hadiths.filter(h => h.category === categoryId);
    matched.forEach(h => {
      allHadiths.push({ ...h, bookName: bookData[isBn ? 'nameBn' : 'name'] });
    });
  }

  if (allHadiths.length === 0) {
    $('category-hadiths').innerHTML = `<div class="hadith-error"><p>❌ ${t('noHadithFound')}</p></div>`;
    return;
  }

  $('category-hadiths').innerHTML = allHadiths.map(h => `
    <div class="hadith-card">
      <div class="hadith-narrator">📖 ${isBn ? h.narratorBn : h.narrator}</div>
      ${h.arabic ? `<div class="hadith-arabic">${h.arabic}</div>` : ''}
      <div class="hadith-translation">${isBn ? h.bn : h.en}</div>
      ${!isBn && h.bn ? `<div class="hadith-bangla">বাংলা: ${h.bn}</div>` : ''}
      <div class="hadith-reference">${h.bookName} #${h.num}</div>
    </div>
  `).join('');

  pushNav('hadith-category');
}

// ==================== TASBIH (FIXED) ====================
function initTasbih() {
  if ($('tasbih-count')) $('tasbih-count').textContent = state.tasbihCount;
}

// ==================== ZAKAT ====================
function calculateZakat() {
  const savings = parseFloat($('zakat-savings')?.value) || 0;
  const gold = parseFloat($('zakat-gold')?.value) || 0;
  const silver = parseFloat($('zakat-silver')?.value) || 0;
  const investments = parseFloat($('zakat-investments')?.value) || 0;
  const business = parseFloat($('zakat-business')?.value) || 0;
  const owed = parseFloat($('zakat-owed')?.value) || 0;
  const debts = parseFloat($('zakat-debts')?.value) || 0;
  const total = savings + gold + silver + investments + business + owed - debts;
  const nisab = 500000;
  const zakat = total >= nisab ? total * 0.025 : 0;
  if ($('zakat-total-assets')) $('zakat-total-assets').textContent = '৳' + total.toFixed(2);
  if ($('zakat-nisab')) $('zakat-nisab').textContent = '৳' + nisab.toFixed(2);
  if ($('zakat-amount')) $('zakat-amount').textContent = '৳' + zakat.toFixed(2);
  if ($('zakat-note')) $('zakat-note').textContent = zakat > 0
    ? `আপনার মোট যাকাত: ৳${zakat.toFixed(2)}`
    : 'নিসাব সীমার নিচে — যাকাত ওয়াজিব নয়।';
  $('zakat-result')?.classList.remove('hidden');
}

function initZakat() {
  // Handled by setupZakatHandlers on tool open
}

// ==================== ASMAUL HUSNA ====================
function renderAsmaulHusna() {
  const list = $('asmaul-husna-list');
  list.innerHTML = ASMAUL_HUSNA.map(a => `
    <div class="asmaul-item">
      <div class="asmaul-num">${a.n}</div>
      <div class="asmaul-ar">${a.ar}</div>
      <div class="asmaul-en">${a.en}</div>
      <div class="asmaul-bn">${a.bn}</div>
    </div>
  `).join('');
}

// ==================== DUA ====================
// ==================== DUA RENDER ====================
function renderDuas() {
  const catGrid = $('dua-category-grid');
  if (!catGrid) return;
  catGrid.innerHTML = DUA_DATA.categories.map(cat => `
    <div class="dua-cat-card" data-cat="${cat.id}">
      <div class="dua-cat-icon">${cat.icon}</div>
      <div class="dua-cat-name">${state.lang === 'bn' ? cat.nameBn : cat.nameEn}</div>
      <div class="dua-cat-count">${DUA_DATA.duas.filter(d => d.cat === cat.id).length} টি দোয়া</div>
    </div>
  `).join('');
  document.querySelectorAll('.dua-cat-card').forEach(el => {
    el.addEventListener('click', () => openDuaCategory(el.dataset.cat));
  });
  // Hide detail if open
  $('dua-detail-view')?.classList.add('hidden');
  catGrid.classList.remove('hidden');
}

function openDuaCategory(catId) {
  const cat = DUA_DATA.categories.find(c => c.id === catId);
  if (!cat) return;
  const duas = DUA_DATA.duas.filter(d => d.cat === catId);
  const isBn = state.lang === 'bn';
  $('dua-category-grid').classList.add('hidden');
  $('dua-detail-view').classList.remove('hidden');
  $('dua-detail-title').textContent = `${cat.icon} ${isBn ? cat.nameBn : cat.nameEn}`;
  $('dua-detail-list').innerHTML = duas.map(d => `
    <div class="dua-card">
      <div class="dua-card-title">${isBn ? d.titleBn : d.titleEn}</div>
      <div class="dua-arabic" dir="rtl">${d.arabic}</div>
      ${d.translit ? `<div class="dua-translit">🔊 ${d.translit}</div>` : ''}
      <div class="dua-bangla">${isBn ? d.bn : d.en}</div>
      ${d.ref ? `<div class="dua-ref">📚 ${d.ref}</div>` : ''}
    </div>
  `).join('');
}

// ==================== SALAH GUIDE RENDER ====================
function renderSalahGuide() {
  const grid = $('salah-nav-grid');
  if (!grid) return;
  grid.innerHTML = SALAH_DATA.map(s => `
    <div class="salah-nav-card" data-salah="${s.id}">
      <div class="salah-nav-icon">${s.icon}</div>
      <div class="salah-nav-name">${state.lang === 'bn' ? s.nameBn : s.nameEn}</div>
      <div class="salah-nav-rakats">${s.rakats}</div>
    </div>
  `).join('');
  document.querySelectorAll('.salah-nav-card').forEach(el => {
    el.addEventListener('click', () => openSalahDetail(el.dataset.salah));
  });
  $('salah-detail-view')?.classList.add('hidden');
  grid.classList.remove('hidden');
}

function openSalahDetail(salahId) {
  const salah = SALAH_DATA.find(s => s.id === salahId);
  if (!salah) return;
  const isBn = state.lang === 'bn';
  $('salah-nav-grid').classList.add('hidden');
  $('salah-detail-view').classList.remove('hidden');
  $('salah-detail-title').textContent = `${salah.icon} ${isBn ? salah.nameBn : salah.nameEn} (${salah.rakats})`;
  $('salah-detail-steps').innerHTML = salah.steps.map((step, i) => `
    <div class="salah-step-card">
      <div class="salah-step-num">${i + 1}</div>
      <div class="salah-step-body">
        <div class="salah-step-title">${isBn ? step.titleBn : step.titleEn}</div>
        ${step.arabic ? `<div class="dua-arabic" dir="rtl">${step.arabic}</div>` : ''}
        <div class="salah-step-text">${(isBn ? step.bn : step.en).replace(/\n/g, '<br>')}</div>
      </div>
    </div>
  `).join('');
}

// ==================== AI CHAT (Puter.js - সম্পূর্ণ বিনামূল্যে, কোনো API key লাগে না) ====================
let aiChatHistory = [];

async function sendAIMessage() {
  const input = $('ai-chat-input');
  const msg = input?.value?.trim();
  if (!msg) return;
  input.value = '';
  input.disabled = true;
  $('ai-send-btn').disabled = true;

  addChatBubble('user', msg);
  aiChatHistory.push({ role: 'user', content: msg });

  const typingId = 'ai-typing-' + Date.now();
  addChatBubble('assistant', '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>', typingId);

  const systemPrompt = `তুমি একজন ইসলামিক স্কলার AI সহকারী। শুধুমাত্র ইসলাম সম্পর্কিত বিষয়ে উত্তর দাও — কুরআন, হাদিস, নামাজ, রোজা, যাকাত, হজ্জ, হালাল-হারাম, ইসলামিক ইতিহাস ও দৈনন্দিন ইসলামিক জীবন। বাংলায় প্রশ্ন হলে বাংলায়, English এ হলে English এ উত্তর দাও। সম্ভব হলে কুরআন বা হাদিসের রেফারেন্স দাও। উত্তর সংক্ষিপ্ত ও সহজ রাখো। শেষে والله أعلم যোগ করো।`;

  try {
    // Puter.js দিয়ে AI call — কোনো API key লাগে না
    if (typeof puter !== 'undefined' && puter.ai) {
      const messages = [
        { role: 'system', content: systemPrompt },
        ...aiChatHistory.slice(-8)
      ];

      const response = await puter.ai.chat(messages, { model: 'gpt-4o-mini' });
      const reply = response?.message?.content || response?.text || response;

      if (reply) {
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.outerHTML = chatBubbleHTML('assistant', String(reply));
        aiChatHistory.push({ role: 'assistant', content: String(reply) });
        input.disabled = false;
        $('ai-send-btn').disabled = false;
        input.focus();
        const msgs = $('ai-chat-messages');
        if (msgs) msgs.scrollTop = msgs.scrollHeight;
        return;
      }
    }
    throw new Error('Puter.js লোড হয়নি');
  } catch (e) {
    console.error('AI error:', e);
    const fallback = getOfflineIslamicAnswer(msg);
    const typingEl = document.getElementById(typingId);
    if (typingEl) typingEl.outerHTML = chatBubbleHTML('assistant', fallback);
  }

  input.disabled = false;
  $('ai-send-btn').disabled = false;
  input.focus();
  const msgs = $('ai-chat-messages');
  if (msgs) msgs.scrollTop = msgs.scrollHeight;
}


function renderAIChat() {
  const container = $('ai-chat-container');
  if (!container) return;
  // Already initialized
}
function getOfflineIslamicAnswer(question) {
  const q = question.toLowerCase();
  const answers = [
    { keys: ['নামাজ','সালাত','prayer','salah','namaz'], ans: `🕌 **নামাজের নিয়ম:**\n\nদিনে ৫ ওয়াক্ত নামাজ ফরজ:\n• ফজর — ২ রাকাত ফরজ\n• যোহর — ৪ রাকাত ফরজ\n• আসর — ৪ রাকাত ফরজ\n• মাগরিব — ৩ রাকাত ফরজ\n• ইশা — ৪ রাকাত ফরজ\n\nনামাজের জন্য: পবিত্রতা (অযু), কিবলামুখী হওয়া, নিয়ত করা জরুরি।\n\n📚 সূরা বাকারা ২:৪৩\n\nوالله أعلم` },
    { keys: ['রোজা','সাওম','fasting','ramadan','রমজান'], ans: `🌙 **রোজার বিধান:**\n\nরমজান মাসে রোজা রাখা ফরজ।\nসুবহে সাদিক থেকে সূর্যাস্ত পর্যন্ত পানাহার ও সকল পাপ থেকে বিরত থাকতে হয়।\n\n**রোজা ভঙ্গের কারণ:**\n• ইচ্ছাকৃত পানাহার\n• স্বামী-স্ত্রী সম্পর্ক\n• ইচ্ছাকৃত বমি\n\n📚 সূরা বাকারা ২:১৮৩\n\nوالله أعلم` },
    { keys: ['যাকাত','zakat'], ans: `💰 **যাকাতের বিধান:**\n\nনিসাব পরিমাণ সম্পদ এক বছর থাকলে ২.৫% যাকাত দিতে হবে।\nস্বর্ণের নিসাব: ৮৫ গ্রাম\nরূপার নিসাব: ৫৯৫ গ্রাম\n\n📚 সূরা তওবা ৯:১০৩\n\nوالله أعلم` },
    { keys: ['হালাল','হারাম','halal','haram'], ans: `✅ **হালাল-হারাম:**\n\n**হারাম খাবার:** শূকরের মাংস, রক্ত, মৃত প্রাণী, আল্লাহর নাম ছাড়া জবাই করা প্রাণী।\n**হালাল:** গরু, ছাগল, মুরগি (সঠিকভাবে জবাই করা), মাছ, শাকসবজি।\n\n📚 সূরা মায়িদা ৫:৩\n\nوالله أعلم` },
    { keys: ['তাহাজ্জুদ','tahajjud'], ans: `🌟 **তাহাজ্জুদ নামাজ:**\n\nরাতে ঘুমের পর উঠে পড়তে হয়। ২ থেকে ১২ রাকাত পড়া যায়। প্রতি ২ রাকাতে সালাম ফেরানো।\n\nসর্বোত্তম সময়: রাতের শেষ তৃতীয়াংশ।\nফজরের ফরজের পর সেরা নামাজ।\n\n📚 সূরা ইসরা ১৭:৭৯\n\nوالله أعلم` },
    { keys: ['কুনুত','দোয়া কুনুত','qunoot'], ans: `🤲 **দোয়া কুনুত:**\n\nবিতর নামাজের শেষ রাকাতে রুকুর আগে বা পরে পড়তে হয়।\n\nআরবি:\nاللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ...\n\nবাংলা: হে আল্লাহ! আমরা আপনার কাছে সাহায্য চাই, ক্ষমা চাই...\n\nوالله أعلم` },
  ];
  for (const a of answers) {
    if (a.keys.some(k => q.includes(k))) return a.ans;
  }
  return `🤲 আপনার প্রশ্নটি নোট করা হয়েছে।\n\n**ইন্টারনেট সংযোগ** না থাকলে AI সম্পূর্ণ উত্তর দিতে পারে না। ইন্টারনেট চালু করে আবার চেষ্টা করুন।\n\nইতিমধ্যে আপনি:\n• 🕌 **নামাজ গাইড** ট্যাব থেকে নামাজের নিয়ম\n• 🤲 **দৈনিক দোয়া** থেকে দোয়া\n• 📜 **হাদিস** ট্যাব থেকে হাদিস\n\nপড়তে পারবেন।`;
}

function chatBubbleHTML(role, text, id = '') {
  const isUser = role === 'user';
  return `<div class="chat-bubble ${isUser ? 'chat-user' : 'chat-ai'}" ${id ? `id="${id}"` : ''}>
    ${!isUser ? '<span class="chat-ai-icon">🤖</span>' : ''}
    <div class="chat-text">${text.replace(/\n/g, '<br>')}</div>
  </div>`;
}

function addChatBubble(role, text, id = '') {
  const container = $('ai-chat-messages');
  if (!container) return;
  container.insertAdjacentHTML('beforeend', chatBubbleHTML(role, text, id));
  container.scrollTop = container.scrollHeight;
}

// ==================== HADITH KEYWORD SEARCH ====================
async function searchHadithByKeyword(keyword) {
  if (!keyword || keyword.length < 2) {
    $('hadith-search-results').style.display = 'none';
    return;
  }
  keyword = keyword.toLowerCase();
  $('hadith-search-results').style.display = 'block';
  $('hadith-search-results').innerHTML = `<div class="loading-spinner"><div class="spinner"></div><p>খুঁজছি...</p></div>`;

  // Match against category keywords
  const matchedCats = HADITH_CATEGORIES.filter(cat =>
    cat.keywords.some(kw => kw.toLowerCase().includes(keyword)) ||
    cat.nameEn.toLowerCase().includes(keyword) ||
    cat.nameBn.includes(keyword)
  );

  // Also search built-in hadiths
  let localResults = [];
  for (const [bookKey, book] of Object.entries(HADITH_DATA)) {
    const matched = book.hadiths.filter(h =>
      (h.en && h.en.toLowerCase().includes(keyword)) ||
      (h.bn && h.bn.includes(keyword)) ||
      (h.arabic && h.arabic.includes(keyword))
    );
    matched.forEach(h => localResults.push({ ...h, bookName: book.name, bookNameBn: book.nameBn }));
  }

  const isBn = state.lang === 'bn';
  let html = '';

  if (matchedCats.length > 0) {
    html += `<div style="font-weight:700;color:var(--primary);margin-bottom:8px">📂 ${isBn ? 'বিভাগ পাওয়া গেছে' : 'Categories Found'}:</div>`;
    html += matchedCats.map(cat => `
      <div class="keyword-cat-result" data-cat="${cat.id}" style="background:${cat.color}15;border:1px solid ${cat.color};border-radius:10px;padding:10px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:10px">
        <span style="font-size:1.4rem">${cat.icon}</span>
        <div>
          <div style="font-weight:600;color:${cat.color}">${isBn ? cat.nameBn : cat.nameEn}</div>
          <div style="font-size:0.75rem;color:var(--text3)">${isBn ? 'ক্লিক করে হাদিস দেখুন' : 'Click to view hadiths'}</div>
        </div>
      </div>
    `).join('');
  }

  if (localResults.length > 0) {
    html += `<div style="font-weight:700;color:var(--primary);margin:10px 0 8px">📜 ${isBn ? 'হাদিস পাওয়া গেছে' : 'Hadiths Found'} (${localResults.length}):</div>`;
    html += localResults.slice(0, 5).map(h => `
      <div class="hadith-card" style="margin-bottom:8px">
        <div class="hadith-meta-row"><span class="hadith-num-badge">#${h.num}</span><span class="hadith-narrator-name">📖 ${isBn ? h.narratorBn : h.narrator}</span></div>
        ${h.arabic ? `<div class="hadith-arabic" dir="rtl" style="font-size:1rem">${h.arabic}</div>` : ''}
        <div class="hadith-translation">${isBn ? h.bn : h.en}</div>
        <div class="hadith-reference">${isBn ? h.bookNameBn : h.bookName} #${h.num}</div>
      </div>
    `).join('');
  }

  if (matchedCats.length === 0 && localResults.length === 0) {
    html = `<div class="hadith-error" style="padding:16px;text-align:center">
      <p>🔍 "${keyword}" ${isBn ? 'দিয়ে কিছু পাওয়া যায়নি' : 'not found'}</p>
      <p style="font-size:0.8rem;color:var(--text3);margin-top:4px">${isBn ? 'অন্য শব্দ দিয়ে চেষ্টা করুন' : 'Try another keyword'}</p>
    </div>`;
  }

  $('hadith-search-results').innerHTML = html;
  // Add click handlers for category results
  document.querySelectorAll('.keyword-cat-result').forEach(el => {
    el.addEventListener('click', () => {
      $('hadith-search-results').style.display = 'none';
      $('hadith-keyword-search').value = '';
      // Switch to category tab
      document.querySelectorAll('.hadith-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.hadith-view').forEach(v => v.classList.add('hidden'));
      $('hadith-category-view').classList.remove('hidden');
      openHadithCategory(el.dataset.cat);
    });
  });
}


// ==================== DAILY AYAH ====================
async function loadDailyAyah() {
  try {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const ayahNum = (dayOfYear % 6236) + 1;
    const [arRes, enRes, bnRes] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/ayah/${ayahNum}`),
      fetch(`https://api.alquran.cloud/v1/ayah/${ayahNum}/en.asad`),
      fetch(`https://api.alquran.cloud/v1/ayah/${ayahNum}/bn.bengali`),
    ]);
    const arData = await arRes.json();
    const enData = await enRes.json();
    const bnData = bnRes.ok ? await bnRes.json() : null;
    if (arData.code === 200) {
      $('daily-ayah-arabic').textContent = arData.data.text;
      $('daily-ayah-translation').textContent = enData.code === 200 ? enData.data.text : '';
      // Show Bengali if available
      const bnEl = $('daily-ayah-bangla');
      if (bnEl && bnData?.code === 200) {
        bnEl.textContent = bnData.data.text;
        bnEl.style.display = 'block';
      }
      $('daily-ayah-ref').textContent = `(${arData.data.surah.englishName} ${arData.data.surah.number}:${arData.data.numberInSurah})`;
    }
  } catch (e) {
    console.error('Daily ayah error:', e);
  }
}

// ==================== NAVIGATION WITH BACK STACK ====================
function pushNav(view) {
  state.navStack.push(view);
  updateBackBtn();
}

function popNav() {
  if (state.navStack.length > 1) {
    state.navStack.pop();
    const current = state.navStack[state.navStack.length - 1];
    handleBackAction(current);
  }
}

function handleBackAction(target) {
  if (target === 'home') switchTab('home');
  else if (target === 'surah-view') {
    // Already in surah view
  } else if (target === 'hadith-category') {
    // Already in category view
  }
  updateBackBtn();
}

function updateBackBtn() {
  const backBtn = $('back-nav-btn');
  if (state.navStack.length > 1 || (state.currentTab !== 'home')) {
    backBtn.classList.remove('hidden');
  } else {
    backBtn.classList.add('hidden');
  }
}

function handleBackNavigation() {
  // Check if we're in surah view
  if (!$('surah-view').classList.contains('hidden')) {
    $('surah-view').classList.add('hidden');
    $('surah-list').classList.remove('hidden');
    closeAudioPlayer();
    state.navStack = state.navStack.filter(n => n !== 'surah-view');
    updateBackBtn();
    return;
  }
  // Check if we're in hadith category view
  if (!$('hadith-category-content').classList.contains('hidden')) {
    $('hadith-category-content').classList.add('hidden');
    $('hadith-category-list').classList.remove('hidden');
    state.navStack = state.navStack.filter(n => n !== 'hadith-category');
    updateBackBtn();
    return;
  }
  // Check if settings panel is open
  if ($('settings-panel').classList.contains('open')) {
    $('settings-panel').classList.remove('open');
    return;
  }
  // Check if qari modal is open
  if (!$('qari-modal').classList.contains('hidden')) {
    $('qari-modal').classList.add('hidden');
    return;
  }
  // If not on home tab, go to home
  if (state.currentTab !== 'home') {
    switchTab('home');
    return;
  }
  // Double-tap to exit
  const now = Date.now();
  if (now - state.lastBackPress < 2000) {
    // Close the app / minimize
    window.close();
    // If window.close doesn't work (most browsers), just go to home
    state.lastBackPress = 0;
  } else {
    state.lastBackPress = now;
    showToast(t('exitConfirm'));
  }
}

function switchTab(tab) {
  state.currentTab = tab;
  state.navStack = [tab];
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
  if (tab === 'quran') loadSurahList();
  if (tab === 'hadith') { loadHadith(); renderHadithCategories(); }
  if (tab === 'more') {
    // Reset to tools grid when switching to more tab
    $('more-tools-grid')?.classList.remove('hidden');
    document.querySelectorAll('.tool-section').forEach(s => s.classList.add('hidden'));
  }
  updateBackBtn();
  // Reset surah view when switching to quran tab
  if (tab === 'quran') {
    $('surah-view').classList.add('hidden');
    $('surah-list').classList.remove('hidden');
  }
  // Reset hadith category view when switching to hadith tab
  if (tab === 'hadith') {
    $('hadith-category-content').classList.add('hidden');
    $('hadith-category-list').classList.remove('hidden');
  }
}

// ==================== SETTINGS ====================
function initSettings() {
  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      state.theme = btn.dataset.theme;
      localStorage.setItem('ic_theme', state.theme);
      applyTheme();
    });
  });
  $('theme-toggle').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    localStorage.setItem('ic_dark', state.darkMode);
    applyTheme();
  });
  $('lang-toggle').addEventListener('click', () => {
    state.lang = state.lang === 'bn' ? 'en' : 'bn';
    localStorage.setItem('ic_lang', state.lang);
    applyLanguage();
    renderPrayerTimes();
    renderNextPrayer();
  });
  $('settings-btn').addEventListener('click', () => $('settings-panel').classList.add('open'));
  $('settings-close').addEventListener('click', () => $('settings-panel').classList.remove('open'));
  document.querySelector('.settings-overlay').addEventListener('click', () => $('settings-panel').classList.remove('open'));
  $('setting-language').addEventListener('change', (e) => {
    state.lang = e.target.value;
    localStorage.setItem('ic_lang', state.lang);
    applyLanguage();
    renderPrayerTimes();
    renderNextPrayer();
  });
  $('setting-audio-enable').addEventListener('change', (e) => {
    state.audioEnabled = e.target.checked;
    localStorage.setItem('ic_audio', state.audioEnabled);
    if (!state.audioEnabled) closeAudioPlayer();
    showToast(state.audioEnabled ? t('audioOn') : t('audioOff'));
  });
  $('setting-autoplay').addEventListener('change', (e) => {
    state.autoPlay = e.target.checked;
    localStorage.setItem('ic_autoplay', state.autoPlay);
  });
  $('setting-audio-speed').addEventListener('change', (e) => {
    state.audioSpeed = parseFloat(e.target.value);
    localStorage.setItem('ic_audio_speed', state.audioSpeed);
    if (audioEl) audioEl.playbackRate = state.audioSpeed;
    $('audio-speed-btn').textContent = state.audioSpeed + 'x';
  });
  // Dynamic theme toggle
  $('setting-dynamic-theme').addEventListener('change', (e) => {
    state.dynamicTheme = e.target.checked;
    localStorage.setItem('ic_dyn_theme', state.dynamicTheme);
    applyTheme();
  });
  $('auto-detect-btn').addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          state.lat = pos.coords.latitude;
          state.lng = pos.coords.longitude;
          localStorage.setItem('ic_lat', state.lat);
          localStorage.setItem('ic_lng', state.lng);
          $('setting-lat').value = state.lat;
          $('setting-lng').value = state.lng;
          showToast(state.lang === 'bn' ? 'অবস্থান সনাক্ত হয়েছে' : 'Location detected');
        },
        () => showToast(state.lang === 'bn' ? 'অবস্থান সনাক্ত ব্যর্থ' : 'Location detection failed')
      );
    }
  });
  $('save-settings').addEventListener('click', () => {
    state.city = $('setting-city').value || state.city;
    state.country = $('setting-country').value || state.country;
    state.lat = parseFloat($('setting-lat').value) || state.lat;
    state.lng = parseFloat($('setting-lng').value) || state.lng;
    state.calcMethod = parseInt($('setting-calc-method').value) || 5;
    state.madhab = parseInt($('setting-madhab').value) || 0;
    localStorage.setItem('ic_city', state.city);
    localStorage.setItem('ic_country', state.country);
    localStorage.setItem('ic_lat', state.lat);
    localStorage.setItem('ic_lng', state.lng);
    localStorage.setItem('ic_calc', state.calcMethod);
    localStorage.setItem('ic_madhab', state.madhab);
    $('settings-panel').classList.remove('open');
    showToast(state.lang === 'bn' ? 'সেটিংস সংরক্ষিত' : 'Settings saved');
    loadPrayerTimes();
  });
  // Populate settings from state
  $('setting-city').value = state.city;
  $('setting-country').value = state.country;
  $('setting-lat').value = state.lat;
  $('setting-lng').value = state.lng;
  $('setting-calc-method').value = state.calcMethod;
  $('setting-madhab').value = state.madhab;
  $('setting-audio-enable').checked = state.audioEnabled;
  $('setting-autoplay').checked = state.autoPlay;
  $('setting-audio-speed').value = state.audioSpeed;
  $('setting-dynamic-theme').checked = state.dynamicTheme;
}

// ==================== HADITH UI ====================
function initHadithUI() {
  document.querySelectorAll('.hadith-book-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hadith-book-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.hadithBook = btn.dataset.book;
      state.hadithPage = 0;
      loadHadith();
    });
  });
  $('hadith-lang-bn').addEventListener('click', () => {
    state.hadithLang = 'bn';
    $('hadith-lang-bn').classList.add('btn-primary');
    $('hadith-lang-bn').classList.remove('btn-outline');
    $('hadith-lang-en').classList.add('btn-outline');
    $('hadith-lang-en').classList.remove('btn-primary');
    loadHadith();
  });
  $('hadith-lang-en').addEventListener('click', () => {
    state.hadithLang = 'en';
    $('hadith-lang-en').classList.add('btn-primary');
    $('hadith-lang-en').classList.remove('btn-outline');
    $('hadith-lang-bn').classList.add('btn-outline');
    $('hadith-lang-bn').classList.remove('btn-primary');
    loadHadith();
  });
  $('hadith-prev').addEventListener('click', () => {
    if (state.hadithPage > 0) { state.hadithPage--; loadHadith(); }
  });
  $('hadith-next').addEventListener('click', () => {
    const bookInfo = HADITH_API_BOOK_MAP[state.hadithBook];
    const maxPage = Math.floor((bookInfo ? bookInfo.total : 100) / HADITHS_PER_PAGE);
    if (state.hadithPage < maxPage) { state.hadithPage++; loadHadith(); }
  });
  $('hadith-random').addEventListener('click', () => {
    const bookInfo = HADITH_API_BOOK_MAP[state.hadithBook];
    const total = bookInfo ? bookInfo.total : 100;
    const maxPage = Math.floor(total / HADITHS_PER_PAGE);
    state.hadithPage = Math.floor(Math.random() * (maxPage + 1));
    loadHadith();
  });
  $('hadith-search').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const num = parseInt(e.target.value);
      if (num > 0) {
        const bookInfo = HADITH_API_BOOK_MAP[state.hadithBook];
        const total = bookInfo ? bookInfo.total : 9999;
        if (num <= total) {
          state.hadithPage = Math.floor((num - 1) / HADITHS_PER_PAGE);
          loadHadith();
          e.target.value = '';
        } else {
          showToast(t('noHadithFound'));
        }
      }
    }
  });


  // Hadith keyword search
  const kwSearch = $('hadith-keyword-search');
  if (kwSearch) {
    let kwTimer;
    kwSearch.addEventListener('input', (e) => {
      clearTimeout(kwTimer);
      kwTimer = setTimeout(() => searchHadithByKeyword(e.target.value.trim()), 400);
    });
    kwSearch.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') searchHadithByKeyword(e.target.value.trim());
    });
  }

  // Hadith view toggle (Book vs Category)
  $('hadith-view-book').addEventListener('click', () => {
    state.hadithView = 'book';
    $('hadith-view-book').classList.add('btn-primary');
    $('hadith-view-book').classList.remove('btn-outline');
    $('hadith-view-category').classList.add('btn-outline');
    $('hadith-view-category').classList.remove('btn-primary');
    $('hadith-book-view').classList.remove('hidden');
    $('hadith-category-view').classList.add('hidden');
  });
  $('hadith-view-category').addEventListener('click', () => {
    state.hadithView = 'category';
    $('hadith-view-category').classList.add('btn-primary');
    $('hadith-view-category').classList.remove('btn-outline');
    $('hadith-view-book').classList.add('btn-outline');
    $('hadith-view-book').classList.remove('btn-primary');
    $('hadith-category-view').classList.remove('hidden');
    $('hadith-book-view').classList.add('hidden');
    renderHadithCategories();
  });

  // Category back button
  $('category-back').addEventListener('click', () => {
    $('hadith-category-content').classList.add('hidden');
    $('hadith-category-list').classList.remove('hidden');
    $('hadith-search-results').style.display = 'none';
    state.navStack = state.navStack.filter(n => n !== 'hadith-category');
    updateBackBtn();
  });
}

function initMoreUI() {
  // Tools grid buttons
  document.querySelectorAll('.more-tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tool = btn.dataset.tool;
      $('more-tools-grid').classList.add('hidden');
      document.querySelectorAll('.tool-section').forEach(s => s.classList.add('hidden'));
      $(`tool-${tool}`)?.classList.remove('hidden');
      if (tool === 'dua') renderDuas();
      if (tool === 'salah') renderSalahGuide();
      if (tool === 'asmaul') renderAsmaulHusna();
      if (tool === 'tasbih') setupTasbihHandlers();
      if (tool === 'zakat') setupZakatHandlers();
    });
  });

  // Tool back buttons
  document.querySelectorAll('.tool-back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tool-section').forEach(s => s.classList.add('hidden'));
      $('more-tools-grid').classList.remove('hidden');
    });
  });

  // Dua back
  $('dua-back-btn')?.addEventListener('click', () => {
    $('dua-detail-view').classList.add('hidden');
    $('dua-category-grid').classList.remove('hidden');
  });
  // Salah back
  $('salah-back-btn')?.addEventListener('click', () => {
    $('salah-detail-view').classList.add('hidden');
    $('salah-nav-grid').classList.remove('hidden');
  });

  // AI Chat
  $('ai-send-btn')?.addEventListener('click', sendAIMessage);
  $('ai-chat-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendAIMessage(); }
  });
  document.querySelectorAll('.ai-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = $('ai-chat-input');
      if (input) { input.value = btn.textContent.trim(); sendAIMessage(); }
    });
  });
}

function setupTasbihHandlers() {
  // Update display
  $('tasbih-count').textContent = state.tasbihCount;
  if ($('tasbih-rounds')) $('tasbih-rounds').textContent = `রাউন্ড: ${state.tasbihRounds}`;
  if ($('tasbih-progress-fill')) {
    const pct = (state.tasbihCount / state.tasbihTarget) * 100;
    $('tasbih-progress-fill').style.width = Math.min(pct, 100) + '%';
  }

  const tapBtn = $('tasbih-tap');
  if (!tapBtn || tapBtn._tasbihBound) return;
  tapBtn._tasbihBound = true;

  function doTap() {
    state.tasbihCount++;
    vibrate(30);
    if (state.tasbihCount >= state.tasbihTarget) {
      state.tasbihRounds++;
      state.tasbihCount = 0;
      vibrate([50, 50, 100]);
      showToast(`রাউন্ড ${state.tasbihRounds} সম্পন্ন! 🎉`);
    }
    $('tasbih-count').textContent = state.tasbihCount;
    if ($('tasbih-rounds')) $('tasbih-rounds').textContent = `রাউন্ড: ${state.tasbihRounds}`;
    const pct = (state.tasbihCount / state.tasbihTarget) * 100;
    if ($('tasbih-progress-fill')) $('tasbih-progress-fill').style.width = Math.min(pct, 100) + '%';
    localStorage.setItem('ic_tasbih_count', state.tasbihCount);
    localStorage.setItem('ic_tasbih_rounds', state.tasbihRounds);
  }

  tapBtn.addEventListener('click', doTap);
  tapBtn.addEventListener('touchstart', (e) => { e.preventDefault(); doTap(); }, { passive: false });

  $('tasbih-reset')?.addEventListener('click', () => {
    state.tasbihCount = 0;
    state.tasbihRounds = 0;
    $('tasbih-count').textContent = '0';
    if ($('tasbih-rounds')) $('tasbih-rounds').textContent = 'রাউন্ড: 0';
    if ($('tasbih-progress-fill')) $('tasbih-progress-fill').style.width = '0%';
    localStorage.setItem('ic_tasbih_count', 0);
    localStorage.setItem('ic_tasbih_rounds', 0);
  });

  $('tasbih-target')?.addEventListener('change', (e) => {
    const val = e.target.value;
    state.tasbihTarget = val === 'custom' ? 100 : parseInt(val);
    const dhikr = e.target.options[e.target.selectedIndex].dataset.dhikr || '';
    if (dhikr && $('tasbih-dhikr')) $('tasbih-dhikr').textContent = dhikr;
    localStorage.setItem('ic_tasbih_target', state.tasbihTarget);
  });
}

function setupZakatHandlers() {
  const calcBtn = $('zakat-calculate');
  if (!calcBtn || calcBtn._zakatBound) return;
  calcBtn._zakatBound = true;
  calcBtn.addEventListener('click', calculateZakat);
}


// ==================== AUDIO PLAYER UI ====================
function initAudioPlayerUI() {
  $('audio-play').addEventListener('click', toggleAudioPlay);
  $('audio-next').addEventListener('click', playNextAyah);
  $('audio-prev').addEventListener('click', playPrevAyah);
  $('audio-close').addEventListener('click', closeAudioPlayer);
  $('audio-repeat').addEventListener('click', toggleRepeat);
  $('audio-speed-btn').addEventListener('click', cycleSpeed);
  $('audio-qari-btn').addEventListener('click', () => {
    renderQariList();
    $('qari-modal').classList.remove('hidden');
  });
  $('qari-modal-close').addEventListener('click', () => $('qari-modal').classList.add('hidden'));
  document.querySelector('#qari-modal .modal-overlay').addEventListener('click', () => $('qari-modal').classList.add('hidden'));
  // Progress bar click
  $('audio-progress-bar').parentElement.addEventListener('click', (e) => {
    if (!audioEl.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioEl.currentTime = pct * audioEl.duration;
  });
  // Set initial speed display
  $('audio-speed-btn').textContent = state.audioSpeed + 'x';
  $('audio-repeat').style.opacity = '0.5';
}

// ==================== NAV & QUICK ACTIONS ====================
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
  document.querySelectorAll('.quick-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (action === 'tasbih') {
        switchTab('more');
        setTimeout(() => {
          const tasbihEl = $('tasbih-tool');
          if (tasbihEl) tasbihEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      } else if (action === 'more') {
        switchTab('more');
      } else {
        switchTab(action);
      }
    });
  });
  // Surah back
  $('surah-back').addEventListener('click', () => {
    $('surah-view').classList.add('hidden');
    $('surah-list').classList.remove('hidden');
    closeAudioPlayer();
    state.navStack = state.navStack.filter(n => n !== 'surah-view');
    updateBackBtn();
  });
  // Play all surah
  $('surah-play-all').addEventListener('click', playAllSurah);
  // Quran search
  $('quran-search').addEventListener('input', (e) => renderSurahList(e.target.value));
  // Back nav button
  $('back-nav-btn').addEventListener('click', handleBackNavigation);

  // Hardware back button (Android)
  window.addEventListener('popstate', (e) => {
    handleBackNavigation();
  });

  // Double-click to close detection on the app container
  let lastTapTime = 0;
  document.addEventListener('dblclick', (e) => {
    // Only handle if not clicking on interactive elements
    if (e.target.closest('button, input, select, a')) return;
  });
}

// ==================== COUNTDOWN TIMER ====================
function startCountdown() {
  setInterval(() => {
    if (state.prayerTimes && state.currentTab === 'home') {
      renderNextPrayer();
    }
  }, 1000);
}

// ==================== DYNAMIC THEME TIMER ====================
function startDynamicThemeCheck() {
  setInterval(() => {
    if (state.dynamicTheme) {
      applyTheme();
    }
  }, 60000); // Check every minute
}

// ==================== GEOLOCATION ====================
function autoDetectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.lat = pos.coords.latitude;
        state.lng = pos.coords.longitude;
        localStorage.setItem('ic_lat', state.lat);
        localStorage.setItem('ic_lng', state.lng);
        loadPrayerTimes();
      },
      () => { loadPrayerTimes(); },
      { timeout: 5000 }
    );
  } else {
    loadPrayerTimes();
  }
}

// ==================== PWA INSTALL ====================
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  $('install-prompt').classList.remove('hidden');
});
$('install-btn')?.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
  }
  $('install-prompt').classList.add('hidden');
});
$('install-dismiss')?.addEventListener('click', () => $('install-prompt').classList.add('hidden'));

// ==================== SPLASH ====================
function hideSplash() {
  setTimeout(() => {
    const splash = $('splash-screen');
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      $('app').classList.remove('hidden');
    }, 500);
  }, 2000);
}

// ==================== INIT ====================
function init() {
  initAudio();
  applyTheme();
  applyLanguage();
  initSettings();
  initNavigation();
  initHadithUI();
  initAudioPlayerUI();
  initMoreUI();
  initTasbih();
  initZakat();
  renderQariList();
  renderHadithCategories();
  hideSplash();
  autoDetectLocation();
  loadDailyAyah();
  startCountdown();
  startDynamicThemeCheck();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(e => console.log('SW registration failed'));
  }
  // Push initial state for back navigation
  history.pushState(null, '', '');
  window.addEventListener('popstate', () => {
    history.pushState(null, '', '');
    handleBackNavigation();
  });
}

document.addEventListener('DOMContentLoaded', init);

})();
