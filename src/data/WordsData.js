const text1CardsData = [
  {
    sideA: 'אִנְשַאללַّה',
    sideB: 'אם ירצה השם, הלוואי',
  },
  {
    sideA: 'אִלְחַמְדֻללַّה',
    sideB: 'השבח לאל תודה לאל',
  },
  {
    sideA: 'כִּיף חַאלַכּ?',
    sideB: 'מה שְּׁלוֹמְךָ?',
  },
  {
    sideA: 'כִּיפַכּ?',
    sideB: 'מה שְּׁלוֹמְךָ?',
  },
  {
    sideA: 'כִּיף?',
    sideB: 'איך?',
  },
  {
    sideA: 'חַאל',
    sideB: 'מצב',
  },
  {
    sideA: 'מְנִיח',
    sideB: 'טוב',
  },
  {
    sideA: 'תַמַאם',
    sideB: 'בסדר, טוב',
  },
  {
    sideA: 'עַאיְשִין',
    sideB: 'חיים',
  },
  {
    sideA: 'אִ(ל)סַّלַאם עַלֵיכֹּם',
    sideB: 'שלום',
  },
  {
    sideA: 'וּעַלֵיכֹּם אִ(ל)סַّלַאם',
    sideB: 'שלום גם לך',
  },
  {
    sideA: "אַללַّה יְחַ'לִّיכּ",
    sideB: 'תהיה בריא',
  },
  {
    sideA: 'פֻרְצַה סַעִידֵה',
    sideB: 'נעים להכיר',
  },
  {
    sideA: 'סַלַאמַאת',
    sideB: 'להתראות',
  },
  {
    sideA: 'אַללַّה מַעַאכּ',
    sideB: 'שאללה יהיה איתך, להתראות',
  },
  {
    sideA: 'וַאללַّה',
    sideB: "בחיי, ת'אמת",
  },
  {
    sideA: 'אַנַא',
    sideB: 'אני',
  },
  {
    sideA: 'אִנְתֵ',
    sideB: 'אתה',
  },
  {
    sideA: 'אִנְתִי',
    sideB: 'את',
  },
  {
    sideA: 'הֻוֵّ',
    sideB: 'הוא',
  },
  {
    sideA: 'הִיֵّ',
    sideB: 'היא',
  },
  {
    sideA: 'אִחְנַא',
    sideB: 'אנחנו',
  },
  {
    sideA: 'אִנְתוּ',
    sideB: 'אתם',
  },
  {
    sideA: 'הֻםֵّ',
    sideB: 'הם',
  },
  {
    sideA: 'שוּ?',
    sideB: 'מה?',
  },
  {
    sideA: 'וֵין?',
    sideB: 'איפה?',
  },
  {
    sideA: 'מִין?',
    sideB: 'מי?',
  },
  {
    sideA: 'מִן וֵין?',
    sideB: 'מאיפה?',
  },
  {
    sideA: 'שוּ אִסְמַכּ?',
    sideB: 'איך קוראים לך?',
  },
  {
    sideA: 'אִסְם',
    sideB: 'שם',
  },
  {
    sideA: 'מִן',
    sideB: 'מ',
  },
  {
    sideA: 'כַּמַאן',
    sideB: 'גם',
  },
  {
    sideA: 'וּ',
    sideB: 'ו',
  },
  {
    sideA: 'הוֹן',
    sideB: 'כאן',
  },
  {
    sideA: 'הֻנַאכּ',
    sideB: 'שם',
  },
  {
    sideA: 'אִלְקֻדְס',
    sideB: 'ירושלים',
  },
  {
    sideA: 'פִי',
    sideB: 'ב',
  },
  {
    sideA: 'פִי',
    sideB: 'יש',
  },
  {
    sideA: 'מִש',
    sideB: 'לא',
  },
  {
    sideA: 'בַּסّ',
    sideB: 'אבל',
  },
  {
    sideA: 'בַּסّ',
    sideB: 'רק',
  },
  {
    sideA: 'סַאכֵּן',
    sideB: 'גר',
  },
  {
    sideA: 'פַאהֵם',
    sideB: 'מבין',
  },
  {
    sideA: 'עַארֵף',
    sideB: 'יודע',
  },
  {
    sideA: 'צַאחֵבּ',
    sideB: 'חבר',
  },
  {
    sideA: 'אַיְוַה',
    sideB: 'כן',
  },
  {
    sideA: 'אַה',
    sideB: 'כן',
  },
  {
    sideA: 'לַא',
    sideB: 'לא',
  },
  {
    sideA: 'פִשّ',
    sideB: 'אין',
  },
  {
    sideA: 'עִנְדִי',
    sideB: 'יש לי, אצלי',
  },
  {
    sideA: 'וַקְת',
    sideB: 'זמן',
  },
  {
    sideA: 'וַלַד',
    sideB: 'ילד',
  },
  {
    sideA: 'בִּנְת',
    sideB: 'ילדה',
  },
  {
    sideA: 'סֻאַאל',
    sideB: 'שאלה',
  },
  {
    sideA: 'טַאלֵבּ',
    sideB: 'סטודנט',
  },
  {
    sideA: 'כְּתִיר',
    sideB: 'מאוד, הרבה',
  },
  {
    sideA: 'מֻשְכִּלֵה',
    sideB: 'בעיה',
  },
  {
    sideA: 'סַיַّארַה',
    sideB: 'מכונית',
  },
  {
    sideA: "לֻעַ'ה",
    sideB: 'שפה',
  },
  {
    sideA: 'צוּרַה',
    sideB: 'תמונה',
  },
  {
    sideA: 'כְּבִּיר',
    sideB: 'גדול',
  },
  {
    sideA: "זְעִ'יר",
    sideB: 'קטן',
  },
  {
    sideA: "גְ'דִיד",
    sideB: 'חדש',
  },
  {
    sideA: 'צַעְבּ',
    sideB: 'קשה',
  },
  {
    sideA: "רְחִ'יץ",
    sideB: 'זול',
  },
  {
    sideA: 'חִלוּ',
    sideB: 'יפה, מתוק',
  },
  {
    sideA: 'בֵּית',
    sideB: 'בית',
  },
  {
    sideA: 'כִּלְמֵה',
    sideB: 'מילה',
  },
  {
    sideA: 'פִלְם',
    sideB: 'סרט',
  },
  {
    sideA: 'דַרְס',
    sideB: 'שיעור',
  },
  {
    sideA: 'כְּתַאבּ',
    sideB: 'ספר',
  },
  {
    sideA: 'יוֹם',
    sideB: 'יום',
  },
  {
    sideA: 'דַפְתַר',
    sideB: 'מחברת',
  },
  {
    sideA: 'שַמְס',
    sideB: 'שמש',
  },
  {
    sideA: 'כֻּלّ',
    sideB: 'כל',
  },
  {
    sideA: 'אִלְיוֹם',
    sideB: 'היום',
  },
];

export default text1CardsData;
