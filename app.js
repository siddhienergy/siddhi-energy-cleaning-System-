const whatsappNumber = "919028094229";

const translations = {
  en: {
    skip: "Skip to content", navSolutions: "Solutions", navPricing: "Price guide", navWhy: "Why Siddhi", navContact: "Contact", navQuote: "Get a quote", mobileQuote: "Request a WhatsApp quote",
    eyebrow: "Solar care, engineered properly", heroTitle: "Clean panels. Stronger returns.", heroCopy: "Automatic cleaning systems and dependable tools that help every solar installation work at its brightest.", heroExplore: "Explore solutions", heroQuote: "Quote on WhatsApp", proofMinutes: "minutes for a clean cycle", proofExperience: "years of experience", proofSupply: "materials supply", scroll: "Scroll to discover",
    introEyebrow: "The Siddhi advantage", introTitle: "A clearer view of your solar potential.", introCopy: "Dust, residue and daily exposure can reduce panel output. Siddhi Energy makes maintenance smarter with automatic cleaning systems, purpose-built tools and installation expertise.", introLink: "See how it works", impactTitle: "Designed around your site", impactCopy: "Residential, commercial & industrial",
    solutionEyebrow: "Complete solar-care ecosystem", solutionTitle: "Built for the way your panels work.", solutionCopy: "Choose a practical cleaning approach today - and a scalable system for tomorrow.", solutionAType: "Automatic systems", solutionATitle: "Smart sprinkler projects", solutionAText: "Lateral and UPVC configurations, tailored to your panel count.", solutionBType: "Manual cleaning", solutionBTitle: "Professional tools", solutionBText: "Water-fed brushes and wipers for precise, confident cleaning.", solutionCType: "Accessories", solutionCTitle: "Every detail covered", solutionCText: "Sprinklers, clamps, controllers, filters and fittings.",
    priceEyebrow: "Transparent starting prices", priceTitle: "Select a solution. Start with clarity.", priceCopy: "Reference prices for our most-requested products and cleaning systems. For your exact site, send us a WhatsApp message for a tailored quotation.", tabTools: "Cleaning tools", tabSystems: "Automatic systems", tabAccessories: "Key accessories", toolTag: "Water-fed cleaning", brushTitle: "Nylon telescopic brush", brushCopy: "18-inch brush head, ready for safe and even panel cleaning.", wiperTitle: "Solar panel cleaning wiper", wiperCopy: "24-inch adjustable wiper for quick, streak-free finishing.", customLabel: "Need a custom kit?", customTitle: "Tell us your panel count, and we’ll recommend the right combination.", customCTA: "Ask on WhatsApp", tableSystem: "System", tableCapacity: "Capacity", tablePanels: "Panels", tablePrice: "Reference price", tableAction: "Action", lateralName: "Lateral-based sprinkler", upvcName: "UPVC-based sprinkler", quoteShort: "Get quote ↗", pricingNote: "Prices are reference prices. Final scope and installation are confirmed after site details. Applicable GST and transportation may be extra.", accessory1: "Spray nozzles", accessory1copy: "180° and adjustable types for consistent coverage.", accessory2: "Solar clamps", accessory2copy: "Panel-frame and pipe-support options.", accessory3: "Control units", accessory3copy: "6 AMP and 16 AMP controls for automation.", accessory4: "Filters & fittings", accessory4copy: "Practical components for a reliable line.",
    processEyebrow: "Simple, from enquiry to shine", processTitle: "A better system starts with a better conversation.", step1: "Tell us about your site", step1copy: "Share your panel count, system size and cleaning need on WhatsApp.", step2: "Get the right recommendation", step2copy: "We help you choose an appropriate tool or cleaning-system configuration.", step3: "Move forward with confidence", step3copy: "Receive a practical quotation and focused support for your project.",
    whyEyebrow: "Why Siddhi Energy", whyTitle: "Because dependable solar care is never an afterthought.", whyCopy: "Our focus is clear: make solar-panel cleaning safer, smarter and simpler for every customer.", whyCTA: "Plan your system", reason1: "15+ years of experience", reason1copy: "Hands-on understanding of solar cleaning needs.", reason2: "Made for every scale", reason2copy: "Support for homes, businesses and industrial sites.", reason3: "Installation-minded", reason3copy: "Systems, materials and accessories that work together.", reason4: "Pan-India supply", reason4copy: "Cleaning materials and accessories delivered across India.",
    leaderCaption: "Local leadership", leaderCaptionSub: "Personal attention, from quotation to after-sales service", leaderEyebrow: "A note from our leadership", leaderQuote: "“Every solar system is an investment in a brighter future. Our job is to help protect that investment with reliable cleaning solutions, clear advice and service that stays personal.”", leaderText: "At Siddhi Energy, we do not believe in one-size-fits-all advice. We listen to your requirement, recommend thoughtfully and support the solution long after the first conversation.",
    contactEyebrow: "Let’s talk clean energy", contactTitle: "Your next clean-panel day starts here.", contactCopy: "Send a few details and we will open a WhatsApp conversation with your quotation request already prepared.", formName: "Your name", formPhone: "Phone number", formInterest: "I am interested in", formMessage: "Tell us about your requirement", formMessagePlaceholder: "Panel count, system size, location...", optionSystem: "Automatic cleaning system", optionTools: "Cleaning tools", optionAccessories: "Accessories / spare parts", optionConsultation: "Site consultation", formSubmit: "Continue on WhatsApp", formNote: "This opens WhatsApp directly. No form data is stored on this website.", footerTagline: "Powering the future with clean energy.", footerVisit: "Visit us", footerFollow: "Follow our work", backTop: "Back to top ↑", floatQuote: "Get quote"
  },
  hi: {
    skip: "मुख्य सामग्री पर जाएँ", navSolutions: "समाधान", navPricing: "मूल्य सूची", navWhy: "सिद्धि क्यों", navContact: "संपर्क", navQuote: "कोटेशन लें", mobileQuote: "WhatsApp पर कोटेशन लें",
    eyebrow: "सोलर केयर, सही इंजीनियरिंग के साथ", heroTitle: "साफ पैनल। बेहतर प्रदर्शन।", heroCopy: "ऑटोमैटिक क्लीनिंग सिस्टम और भरोसेमंद टूल्स, जो हर सोलर इंस्टॉलेशन को उसकी पूरी क्षमता पर काम करने में मदद करते हैं।", heroExplore: "समाधान देखें", heroQuote: "WhatsApp पर कोटेशन", proofMinutes: "मिनट में सफाई चक्र", proofExperience: "वर्षों का अनुभव", proofSupply: "सामग्री की आपूर्ति", scroll: "जानने के लिए स्क्रॉल करें",
    introEyebrow: "सिद्धि का लाभ", introTitle: "आपकी सोलर क्षमता की एक साफ तस्वीर।", introCopy: "धूल, अवशेष और रोज़ाना का असर पैनल आउटपुट को कम कर सकता है। सिद्धि एनर्जी ऑटोमैटिक सिस्टम, विशेष टूल्स और इंस्टॉलेशन विशेषज्ञता से रखरखाव को बेहतर बनाती है।", introLink: "जानें यह कैसे काम करता है", impactTitle: "आपकी साइट के अनुसार डिज़ाइन", impactCopy: "घर, व्यावसायिक और औद्योगिक",
    solutionEyebrow: "संपूर्ण सोलर-केयर इकोसिस्टम", solutionTitle: "आपके पैनल के काम करने के तरीके के लिए बना।", solutionCopy: "आज उपयोगी सफाई विकल्प चुनें और कल के लिए स्केलेबल सिस्टम पाएं।", solutionAType: "ऑटोमैटिक सिस्टम", solutionATitle: "स्मार्ट स्प्रिंकलर प्रोजेक्ट", solutionAText: "आपके पैनल की संख्या के अनुसार लैटरल और UPVC कॉन्फ़िगरेशन।", solutionBType: "मैन्युअल सफाई", solutionBTitle: "प्रोफेशनल टूल्स", solutionBText: "सटीक और भरोसेमंद सफाई के लिए वॉटर-फेड ब्रश और वाइपर।", solutionCType: "एक्सेसरीज़", solutionCTitle: "हर बारीकी कवर", solutionCText: "स्प्रिंकलर, क्लैंप, कंट्रोलर, फिल्टर और फिटिंग।",
    priceEyebrow: "स्पष्ट शुरुआती कीमतें", priceTitle: "समाधान चुनें। स्पष्टता से शुरू करें।", priceCopy: "हमारे सबसे लोकप्रिय प्रोडक्ट्स और क्लीनिंग सिस्टम की संदर्भ कीमतें। अपनी साइट के सटीक कोटेशन के लिए WhatsApp पर संदेश भेजें।", tabTools: "सफाई टूल्स", tabSystems: "ऑटोमैटिक सिस्टम", tabAccessories: "मुख्य एक्सेसरीज़", toolTag: "वॉटर-फेड सफाई", brushTitle: "नायलॉन टेलीस्कोपिक ब्रश", brushCopy: "18-इंच ब्रश हेड, सुरक्षित और समान पैनल सफाई के लिए तैयार।", wiperTitle: "सोलर पैनल क्लीनिंग वाइपर", wiperCopy: "तेज़ और बिना धारियों वाली सफाई के लिए 24-इंच एडजस्टेबल वाइपर।", customLabel: "कस्टम किट चाहिए?", customTitle: "पैनल की संख्या बताइए, हम सही कॉम्बिनेशन सुझाएंगे।", customCTA: "WhatsApp पर पूछें", tableSystem: "सिस्टम", tableCapacity: "क्षमता", tablePanels: "पैनल", tablePrice: "संदर्भ मूल्य", tableAction: "कार्य", lateralName: "लैटरल-आधारित स्प्रिंकलर", upvcName: "UPVC-आधारित स्प्रिंकलर", quoteShort: "कोटेशन लें ↗", pricingNote: "कीमतें संदर्भ कीमतें हैं। अंतिम स्कोप और इंस्टॉलेशन साइट विवरण के बाद तय होंगे। लागू GST और परिवहन अतिरिक्त हो सकते हैं।", accessory1: "स्प्रे नोजल", accessory1copy: "लगातार कवरेज के लिए 180° और एडजस्टेबल प्रकार।", accessory2: "सोलर क्लैंप", accessory2copy: "पैनल-फ्रेम और पाइप-सपोर्ट विकल्प।", accessory3: "कंट्रोल यूनिट", accessory3copy: "ऑटोमेशन के लिए 6 AMP और 16 AMP कंट्रोल।", accessory4: "फिल्टर और फिटिंग", accessory4copy: "भरोसेमंद लाइन के लिए उपयोगी कंपोनेंट्स।",
    processEyebrow: "पूछताछ से चमक तक, सरल प्रक्रिया", processTitle: "बेहतर सिस्टम की शुरुआत बेहतर बातचीत से होती है।", step1: "अपनी साइट के बारे में बताएं", step1copy: "WhatsApp पर पैनल की संख्या, सिस्टम साइज़ और सफाई की जरूरत साझा करें।", step2: "सही सलाह पाएं", step2copy: "हम उपयुक्त टूल या क्लीनिंग सिस्टम कॉन्फ़िगरेशन चुनने में मदद करते हैं।", step3: "विश्वास के साथ आगे बढ़ें", step3copy: "अपने प्रोजेक्ट के लिए व्यावहारिक कोटेशन और स्पष्ट सहायता पाएं।",
    whyEyebrow: "सिद्धि एनर्जी क्यों", whyTitle: "क्योंकि भरोसेमंद सोलर केयर कभी बाद की सोच नहीं है।", whyCopy: "हमारा फोकस साफ है: हर ग्राहक के लिए सोलर पैनल की सफाई को सुरक्षित, स्मार्ट और सरल बनाना।", whyCTA: "अपना सिस्टम प्लान करें", reason1: "15+ वर्षों का अनुभव", reason1copy: "सोलर सफाई की जरूरतों की व्यावहारिक समझ।", reason2: "हर स्तर के लिए बना", reason2copy: "घर, व्यवसाय और औद्योगिक साइट्स के लिए सहायता।", reason3: "इंस्टॉलेशन सोच के साथ", reason3copy: "सिस्टम, सामग्री और एक्सेसरीज़ जो साथ काम करें।", reason4: "पूरे भारत में आपूर्ति", reason4copy: "भारत भर में क्लीनिंग सामग्री और एक्सेसरीज़।",
    leaderCaption: "स्थानीय नेतृत्व", leaderCaptionSub: "कोटेशन से आफ्टर-सेल्स सर्विस तक व्यक्तिगत ध्यान", leaderEyebrow: "हमारे नेतृत्व का संदेश", leaderQuote: "“हर सोलर सिस्टम एक उज्ज्वल भविष्य का निवेश है। हमारा काम भरोसेमंद सफाई समाधान, स्पष्ट सलाह और व्यक्तिगत सेवा से उस निवेश की रक्षा करना है।”", leaderText: "सिद्धि एनर्जी में हम एक ही समाधान सभी को नहीं देते। हम आपकी आवश्यकता सुनते हैं, सोच-समझकर सुझाव देते हैं और पहली बातचीत के बहुत बाद तक समाधान को समर्थन देते हैं।",
    contactEyebrow: "आइए स्वच्छ ऊर्जा की बात करें", contactTitle: "आपका अगला साफ-पैनल दिन यहीं से शुरू होता है।", contactCopy: "कुछ विवरण भेजें और हम आपका कोटेशन अनुरोध तैयार करके सीधे WhatsApp वार्तालाप खोल देंगे।", formName: "आपका नाम", formPhone: "फ़ोन नंबर", formInterest: "मुझे इसमें रुचि है", formMessage: "अपनी आवश्यकता बताएं", formMessagePlaceholder: "पैनल की संख्या, सिस्टम साइज़, स्थान...", optionSystem: "ऑटोमैटिक क्लीनिंग सिस्टम", optionTools: "सफाई टूल्स", optionAccessories: "एक्सेसरीज़ / स्पेयर पार्ट्स", optionConsultation: "साइट परामर्श", formSubmit: "WhatsApp पर जारी रखें", formNote: "यह सीधे WhatsApp खोलता है। इस वेबसाइट पर कोई फॉर्म डेटा स्टोर नहीं होता।", footerTagline: "स्वच्छ ऊर्जा से भविष्य को शक्ति देना।", footerVisit: "हमसे मिलें", footerFollow: "हमारा काम देखें", backTop: "ऊपर जाएँ ↑", floatQuote: "कोटेशन"
  },
  mr: {
    skip: "मुख्य मजकुराकडे जा", navSolutions: "उपाय", navPricing: "किंमत सूची", navWhy: "सिद्धी का", navContact: "संपर्क", navQuote: "कोटेशन घ्या", mobileQuote: "WhatsApp वर कोटेशन घ्या",
    eyebrow: "योग्य अभियांत्रिकीसह सोलर केअर", heroTitle: "स्वच्छ पॅनेल. अधिक चांगली कामगिरी.", heroCopy: "ऑटोमॅटिक क्लिनिंग सिस्टीम आणि विश्वासार्ह टूल्स, जे प्रत्येक सोलर इन्स्टॉलेशनला सर्वोत्तम क्षमतेने काम करण्यास मदत करतात.", heroExplore: "उपाय पहा", heroQuote: "WhatsApp वर कोटेशन", proofMinutes: "मिनिटांत स्वच्छता चक्र", proofExperience: "वर्षांचा अनुभव", proofSupply: "सामग्री पुरवठा", scroll: "जाणून घेण्यासाठी स्क्रोल करा",
    introEyebrow: "सिद्धीचा फायदा", introTitle: "तुमच्या सौर क्षमतेचे स्पष्ट चित्र.", introCopy: "धूळ, अवशेष आणि रोजच्या वातावरणामुळे पॅनेलचे आउटपुट कमी होऊ शकते. सिद्धी एनर्जी ऑटोमॅटिक सिस्टीम, विशेष टूल्स आणि इन्स्टॉलेशनच्या कौशल्याने मेंटेनन्स अधिक स्मार्ट बनवते.", introLink: "हे कसे काम करते ते पहा", impactTitle: "तुमच्या साइटसाठी डिझाइन केलेले", impactCopy: "घरगुती, व्यावसायिक आणि औद्योगिक",
    solutionEyebrow: "संपूर्ण सोलर-केअर इकोसिस्टीम", solutionTitle: "तुमच्या पॅनेलच्या कामाच्या पद्धतीसाठी तयार केलेले.", solutionCopy: "आज उपयोगी स्वच्छता पर्याय निवडा आणि उद्यासाठी स्केलेबल सिस्टीम मिळवा.", solutionAType: "ऑटोमॅटिक सिस्टीम", solutionATitle: "स्मार्ट स्प्रिंकलर प्रोजेक्ट", solutionAText: "तुमच्या पॅनेल संख्येनुसार लॅटरल आणि UPVC कॉन्फिगरेशन.", solutionBType: "मॅन्युअल स्वच्छता", solutionBTitle: "प्रोफेशनल टूल्स", solutionBText: "अचूक आणि विश्वासार्ह स्वच्छतेसाठी वॉटर-फेड ब्रश आणि वायपर.", solutionCType: "अॅक्सेसरीज", solutionCTitle: "प्रत्येक तपशीलाची काळजी", solutionCText: "स्प्रिंकलर, क्लॅम्प, कंट्रोलर, फिल्टर आणि फिटिंग्ज.",
    priceEyebrow: "स्पष्ट सुरुवातीच्या किंमती", priceTitle: "उपाय निवडा. स्पष्टतेने सुरुवात करा.", priceCopy: "आमच्या लोकप्रिय उत्पादनांच्या आणि क्लिनिंग सिस्टीमच्या संदर्भ किंमती. तुमच्या साइटसाठी अचूक कोटेशनसाठी WhatsApp वर संदेश पाठवा.", tabTools: "क्लिनिंग टूल्स", tabSystems: "ऑटोमॅटिक सिस्टीम", tabAccessories: "महत्त्वाच्या अॅक्सेसरीज", toolTag: "वॉटर-फेड क्लिनिंग", brushTitle: "नायलॉन टेलिस्कोपिक ब्रश", brushCopy: "18-इंच ब्रश हेड, सुरक्षित आणि एकसमान पॅनेल स्वच्छतेसाठी तयार.", wiperTitle: "सोलर पॅनेल क्लिनिंग वायपर", wiperCopy: "जलद आणि डाग न राहणाऱ्या स्वच्छतेसाठी 24-इंच अॅडजस्टेबल वायपर.", customLabel: "कस्टम किट हवी आहे?", customTitle: "पॅनेलची संख्या सांगा, आम्ही योग्य कॉम्बिनेशन सुचवू.", customCTA: "WhatsApp वर विचारा", tableSystem: "सिस्टीम", tableCapacity: "क्षमता", tablePanels: "पॅनेल", tablePrice: "संदर्भ किंमत", tableAction: "कृती", lateralName: "लॅटरल-आधारित स्प्रिंकलर", upvcName: "UPVC-आधारित स्प्रिंकलर", quoteShort: "कोटेशन घ्या ↗", pricingNote: "किंमती संदर्भ किंमती आहेत. अंतिम स्कोप आणि इन्स्टॉलेशन साइटच्या तपशीलानंतर निश्चित केले जाईल. लागू GST आणि वाहतूक अतिरिक्त असू शकते.", accessory1: "स्प्रे नोजल", accessory1copy: "एकसमान कव्हरेजसाठी 180° आणि अॅडजस्टेबल प्रकार.", accessory2: "सोलर क्लॅम्प", accessory2copy: "पॅनेल-फ्रेम आणि पाईप-सपोर्ट पर्याय.", accessory3: "कंट्रोल युनिट", accessory3copy: "ऑटोमेशनसाठी 6 AMP आणि 16 AMP कंट्रोल.", accessory4: "फिल्टर आणि फिटिंग्ज", accessory4copy: "विश्वासार्ह लाईनसाठी उपयुक्त घटक.",
    processEyebrow: "चौकशीपासून चमकापर्यंत, सोपी प्रक्रिया", processTitle: "चांगल्या सिस्टीमची सुरुवात चांगल्या संवादाने होते.", step1: "तुमच्या साइटबद्दल सांगा", step1copy: "WhatsApp वर पॅनेलची संख्या, सिस्टीमचा आकार आणि स्वच्छतेची गरज सांगा.", step2: "योग्य शिफारस मिळवा", step2copy: "आम्ही योग्य टूल किंवा क्लिनिंग सिस्टीम कॉन्फिगरेशन निवडण्यास मदत करतो.", step3: "विश्वासाने पुढे जा", step3copy: "तुमच्या प्रोजेक्टसाठी व्यावहारिक कोटेशन आणि स्पष्ट सपोर्ट मिळवा.",
    whyEyebrow: "सिद्धी एनर्जी का", whyTitle: "कारण विश्वासार्ह सोलर केअर हा नंतरचा विचार कधीच नसतो.", whyCopy: "आमचे ध्येय स्पष्ट आहे: प्रत्येक ग्राहकासाठी सोलर पॅनेलची स्वच्छता सुरक्षित, स्मार्ट आणि सोपी बनवणे.", whyCTA: "तुमची सिस्टीम प्लॅन करा", reason1: "15+ वर्षांचा अनुभव", reason1copy: "सोलर स्वच्छतेच्या गरजांची प्रत्यक्ष समज.", reason2: "प्रत्येक स्तरासाठी तयार", reason2copy: "घर, व्यवसाय आणि औद्योगिक साइटसाठी सपोर्ट.", reason3: "इन्स्टॉलेशनच्या दृष्टीने", reason3copy: "एकत्र काम करणाऱ्या सिस्टीम, सामग्री आणि अॅक्सेसरीज.", reason4: "संपूर्ण भारतात पुरवठा", reason4copy: "भारतभर क्लिनिंग सामग्री आणि अॅक्सेसरीज.",
    leaderCaption: "स्थानिक नेतृत्व", leaderCaptionSub: "कोटेशनपासून विक्रीनंतरच्या सेवांपर्यंत वैयक्तिक लक्ष", leaderEyebrow: "आमच्या नेतृत्वाकडून संदेश", leaderQuote: "“प्रत्येक सोलर सिस्टीम ही उज्ज्वल भविष्यातील गुंतवणूक आहे. विश्वासार्ह क्लिनिंग उपाय, स्पष्ट सल्ला आणि वैयक्तिक सेवेद्वारे त्या गुंतवणुकीचे रक्षण करणे हे आमचे काम आहे.”", leaderText: "सिद्धी एनर्जीमध्ये आम्ही सगळ्यांसाठी एकच उपाय देत नाही. आम्ही तुमची गरज ऐकतो, विचारपूर्वक शिफारस करतो आणि पहिल्या संवादानंतरही उपायाला सपोर्ट देतो.",
    contactEyebrow: "स्वच्छ ऊर्जेबद्दल बोलूया", contactTitle: "तुमचा पुढचा स्वच्छ-पॅनेल दिवस इथून सुरू होतो.", contactCopy: "काही तपशील पाठवा आणि आम्ही तुमची कोटेशन विनंती तयार करून थेट WhatsApp संभाषण उघडू.", formName: "तुमचे नाव", formPhone: "फोन नंबर", formInterest: "मला यात रस आहे", formMessage: "तुमची गरज सांगा", formMessagePlaceholder: "पॅनेलची संख्या, सिस्टीमचा आकार, ठिकाण...", optionSystem: "ऑटोमॅटिक क्लिनिंग सिस्टीम", optionTools: "क्लिनिंग टूल्स", optionAccessories: "अॅक्सेसरीज / स्पेअर पार्ट्स", optionConsultation: "साइट कन्सल्टेशन", formSubmit: "WhatsApp वर सुरू ठेवा", formNote: "यामुळे थेट WhatsApp उघडते. या वेबसाइटवर कोणताही फॉर्म डेटा साठवला जात नाही.", footerTagline: "स्वच्छ ऊर्जेसह भविष्याला शक्ती देत आहोत.", footerVisit: "आम्हाला भेट द्या", footerFollow: "आमचे काम पहा", backTop: "वर जा ↑", floatQuote: "कोटेशन"
  }
};

const languageToggle = document.querySelector('.language-toggle');
const languageControl = document.querySelector('.language-control');
const languageButtons = document.querySelectorAll('[data-lang]');
const currentLanguage = document.querySelector('.current-language');

function updateWhatsappLinks(language) {
  const greeting = language === 'hi' ? 'नमस्ते Siddhi Energy, मुझे कोटेशन चाहिए।' : language === 'mr' ? 'नमस्कार Siddhi Energy, मला कोटेशन हवे आहे.' : 'Hello Siddhi Energy, I would like a quotation.';
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(greeting)}`;
  });
}

function setLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.placeholder = value;
  });
  currentLanguage.textContent = language.toUpperCase();
  document.title = language === 'en' ? 'Siddhi Energy | Clean energy, performing at its best' : language === 'hi' ? 'सिद्धि एनर्जी | स्वच्छ ऊर्जा, बेहतर प्रदर्शन' : 'सिद्धी एनर्जी | स्वच्छ ऊर्जा, उत्तम कामगिरी';
  updateWhatsappLinks(language);
  try { localStorage.setItem('siddhi-language', language); } catch (error) { /* private browsing can block storage */ }
}

languageToggle.addEventListener('click', () => {
  const isOpen = languageControl.classList.toggle('open');
  languageToggle.setAttribute('aria-expanded', isOpen);
});
languageButtons.forEach((button) => button.addEventListener('click', () => {
  setLanguage(button.dataset.lang);
  languageControl.classList.remove('open');
  languageToggle.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('click', (event) => {
  if (!languageControl.contains(event.target)) {
    languageControl.classList.remove('open');
    languageToggle.setAttribute('aria-expanded', 'false');
  }
});

try { setLanguage(localStorage.getItem('siddhi-language') || 'en'); } catch (error) { setLanguage('en'); }

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
}));

const tabs = document.querySelectorAll('.catalog-tab');
const panels = document.querySelectorAll('.catalog-panel');
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  panels.forEach((panel) => { panel.classList.remove('active'); panel.hidden = true; });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  const panel = document.querySelector(`#catalog-${tab.dataset.catalog}`);
  panel.hidden = false;
  requestAnimationFrame(() => panel.classList.add('active'));
}));

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const language = document.documentElement.lang;
  const message = language === 'hi'
    ? `नमस्ते Siddhi Energy, मुझे कोटेशन चाहिए।\n\nनाम: ${form.get('name')}\nफोन: ${form.get('phone')}\nरुचि: ${form.get('interest')}\nआवश्यकता: ${form.get('message')}`
    : language === 'mr'
      ? `नमस्कार Siddhi Energy, मला कोटेशन हवे आहे.\n\nनाव: ${form.get('name')}\nफोन: ${form.get('phone')}\nरस: ${form.get('interest')}\nगरज: ${form.get('message')}`
      : `Hello Siddhi Energy, I would like a quotation.\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nInterested in: ${form.get('interest')}\nRequirement: ${form.get('message')}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
