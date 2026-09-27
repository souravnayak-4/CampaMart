const app=document.getElementById("app");
const savedLang=localStorage.getItem("campamartLanguage")||"en";
const lang=savedLang;
const savedProfile=JSON.parse(localStorage.getItem("campamartProfile")||"null");
const T={
en:{choose:"Select Language",english:"English",hindi:"Hindi",odia:"Odia",role:"Select your role",student:"Student",studentSub:"Buy, Sell, Learn, Connect",teacher:"Teacher",teacherSub:"Teach, Support, Guide",outsider:"Verified Outsider",outsiderSub:"Provide Services, Sell",tag:"Your Campus Marketplace"},
hi:{choose:"भाषा चुनें",english:"English",hindi:"हिन्दी",odia:"ଓଡ଼ିଆ",role:"अपनी भूमिका चुनें",student:"छात्र",studentSub:"खरीदें, बेचें, सीखें और जुड़ें",teacher:"शिक्षक",teacherSub:"पढ़ाएं, सहायता करें और मार्गदर्शन दें",outsider:"सत्यापित बाहरी सेवा प्रदाता",outsiderSub:"सेवा प्रदान करें और बेचें",tag:"आपका कैंपस मार्केटप्लेस"},
od:{choose:"ଭାଷା ବାଛନ୍ତୁ",english:"English",hindi:"ହିନ୍ଦୀ",odia:"ଓଡ଼ିଆ",role:"ଆପଣଙ୍କ ଭୂମିକା ବାଛନ୍ତୁ",student:"ଛାତ୍ର",studentSub:"କିଣନ୍ତୁ, ବିକ୍ରି କରନ୍ତୁ, ଶିଖନ୍ତୁ ଓ ଯୋଡ଼ିହୁଅନ୍ତୁ",teacher:"ଶିକ୍ଷକ",teacherSub:"ପଢ଼ାନ୍ତୁ, ସାହାଯ୍ୟ ଓ ମାର୍ଗଦର୍ଶନ କରନ୍ତୁ",outsider:"ସତ୍ୟାପିତ ବାହ୍ୟ ସେବା ପ୍ରଦାନକାରୀ",outsiderSub:"ସେବା ପ୍ରଦାନ ଓ ବିକ୍ରି କରନ୍ତୁ",tag:"ଆପଣଙ୍କ କ୍ୟାମ୍ପସ ମାର୍କେଟପ୍ଲେସ"}
};
function setLanguage(l){
  localStorage.setItem("campamartLanguage",l);
  window.campaLang = l;
  if(typeof render==="function") render();
}
function tr(k){
  const current=localStorage.getItem("campamartLanguage")||"en";
  return (T[current]||T.en)[k]||k;
}

const EXTRA_LANG={
hi:{"Profile Details": "प्रोफाइल विवरण", "Verified Faculty": "सत्यापित फैकल्टी", "Verified Provider": "सत्यापित प्रदाता", "Resources Shared": "साझा संसाधन", "Doubt Requests": "डाउट अनुरोध", "My Services": "मेरी सेवाएं", "Rating": "रेटिंग", "Student": "छात्र", "Doubt Solver": "डाउट सॉल्वर", "My Doubt Solver": "मेरा डाउट सॉल्वर", "Manage Doubt Solver": "डाउट सॉल्वर प्रबंधित करें", "You are available to help juniors and other students.": "आप जूनियर और अन्य छात्रों की मदद कर सकते हैं।"},
od:{"Profile Details": "ପ୍ରୋଫାଇଲ ବିବରଣୀ", "Verified Faculty": "ସତ୍ୟାପିତ ଫ୍ୟାକଲ୍ଟି", "Verified Provider": "ସତ୍ୟାପିତ ପ୍ରଦାନକାରୀ", "Resources Shared": "ସେୟାର କରାଯାଇଥିବା ରିସୋର୍ସ", "Doubt Requests": "ଡାଉଟ୍ ଅନୁରୋଧ", "My Services": "ମୋ ସେବା", "Rating": "ରେଟିଂ", "Student": "ଛାତ୍ର", "Doubt Solver": "ଡାଉଟ୍ ସଲଭର", "My Doubt Solver": "ମୋ ଡାଉଟ୍ ସଲଭର", "Manage Doubt Solver": "ଡାଉଟ୍ ସଲଭର ପରିଚାଳନା କରନ୍ତୁ", "You are available to help juniors and other students.": "ଆପଣ ଜୁନିଅର ଏବଂ ଅନ୍ୟ ଛାତ୍ରଙ୍କୁ ସାହାଯ୍ୟ କରିପାରିବେ।"}
};

const UI_LANG={
en:{home:"Home",explore:"Explore",sell:"Sell",chat:"Chats",profile:"Profile",doubts:"Doubts",sessions:"Sessions",vault:"Resources",requests:"Requests",service:"Service",language:"Language",departmentVault:"Department Resources",searchVault:"Search notes, PYQs, resources...",noResources:"No resources found",read:"Read / Open"},
hi:{home:"होम",explore:"खोजें",sell:"बेचें",chat:"चैट",profile:"प्रोफाइल",doubts:"डाउट",sessions:"सेशन",vault:"वॉल्ट",requests:"अनुरोध",service:"सेवा",language:"भाषा",departmentVault:"डिपार्टमेंट रिसोर्सेस",searchVault:"नोट्स, PYQ और संसाधन खोजें...",noResources:"कोई संसाधन नहीं मिला",read:"पढ़ें / खोलें"},
od:{home:"ହୋମ୍",explore:"ଖୋଜନ୍ତୁ",sell:"ବିକ୍ରି",chat:"ଚାଟ୍",profile:"ପ୍ରୋଫାଇଲ୍",doubts:"ଡାଉଟ୍",sessions:"ସେସନ୍",vault:"ଭଲ୍ଟ",requests:"ଅନୁରୋଧ",service:"ସେବା",language:"ଭାଷା",departmentVault:"ଡିପାର୍ଟମେଣ୍ଟ ରିସୋର୍ସ",searchVault:"ନୋଟ୍, PYQ ଓ ରିସୋର୍ସ ଖୋଜନ୍ତୁ...",noResources:"କୌଣସି ରିସୋର୍ସ ମିଳିଲା ନାହିଁ",read:"ପଢ଼ନ୍ତୁ / ଖୋଲନ୍ତୁ"}};
function ui(k){const l=localStorage.getItem("campamartLanguage")||"en";return (UI_LANG[l]||UI_LANG.en)[k]||k;}
function tx(k){
  const current=localStorage.getItem("campamartLanguage")||"en";
  if(current==="en") return k;
  return ((FULL_LANG[current]||{})[k]) || ((EXTRA_LANG[current]||{})[k]) || (T[current]||{})[k] || k;
}
function currentRoleNav(){
  if(state.role==="student") return studentNav();
  if(state.role==="teacher") return teacherNav();
  if(state.role==="outsider") return outsiderNav();
  return "";
}
function shouldShowRoleTabs(){
  const hidden=["role","studentVerify","studentSuccess","teacherVerify","teacherSuccess","outsiderVerify","outsiderReview","outsiderSuccess"];
  return !!state.role && !hidden.includes(state.screen);
}


const state={role:null, screen:"role", selected:null, search:"", doubtSearch:"", serviceSearch:"", vaultSearch:"", resourceDepartment:"", isDoubtSolver:false,
profile:savedProfile||{student:{},teacher:{},outsider:{}}, products:[
{name:"Engineering Mathematics",price:150,seller:"Rahul",cat:"Books",icon:"📘"},
{name:"Scientific Calculator",price:300,seller:"Ankit",cat:"Gadgets",icon:"🧮"},
{name:"Programming in C",price:180,seller:"Pooja",cat:"Books",icon:"📗"}],
services:[
{name:"Laptop Repair",price:200,requests:5,icon:"💻"},
{name:"Data Recovery",price:500,requests:2,icon:"💾"}]};

function go(s){state.screen=s;render();scrollTo(0,0)}
function nav(s){go(s)}
function setRole(r){state.role=r; go(r==="student"?"studentVerify":r==="teacher"?"teacherVerify":"outsiderVerify")}
function back(){go(state.role==="student"?"studentHome":state.role==="teacher"?"teacherHome":"outsiderHome")}

function saveProfile(role, data){
  state.profile[role]={...state.profile[role],...data,verified:true};
  localStorage.setItem("campamartProfile",JSON.stringify(state.profile));
}
function getProfile(role){return state.profile[role]||{}}

const FULL_LANG={
hi:{
"Select Language":"भाषा चुनें","Student":"छात्र","Teacher":"शिक्षक","Faculty":"फैकल्टी","Verified Outsider":"सत्यापित बाहरी सेवा प्रदाता",
"Buy, Sell, Learn, Connect":"खरीदें, बेचें, सीखें और जुड़ें","Teach, Support, Guide":"पढ़ाएं, सहायता करें और मार्गदर्शन दें","Provide Services, Sell":"सेवा प्रदान करें और बेचें",
"Select your role":"अपनी भूमिका चुनें","CampaMart":"कैंपामार्ट","Your Campus Marketplace":"आपका कैंपस मार्केटप्लेस",
"Verify your student details":"अपने छात्र विवरण सत्यापित करें","Verify your faculty credentials":"अपने फैकल्टी विवरण सत्यापित करें",
"Verify & Continue":"सत्यापित करें और आगे बढ़ें","Full Name":"पूरा नाम","Student ID / Roll No.":"स्टूडेंट आईडी / रोल नंबर","Faculty ID":"फैकल्टी आईडी",
"College / Department":"कॉलेज / विभाग","Upload Student ID Card":"स्टूडेंट आईडी कार्ड अपलोड करें","Upload Faculty ID Card":"फैकल्टी आईडी कार्ड अपलोड करें",
"Upload ID Card":"आईडी कार्ड अपलोड करें","Welcome aboard!":"स्वागत है!","You are successfully verified as a student.":"आप सफलतापूर्वक छात्र के रूप में सत्यापित हो गए हैं।",
"Go to Home":"होम पर जाएं","Verified Faculty!":"सत्यापित फैकल्टी!","You are now a verified teacher on CampaMart.":"अब आप CampaMart पर सत्यापित शिक्षक हैं।",
"Continue to Dashboard":"डैशबोर्ड पर जाएं","My Profile":"मेरी प्रोफाइल","Student Details":"छात्र विवरण","Name:":"नाम:","Roll No / Student ID:":"रोल नंबर / स्टूडेंट आईडी:","College / Department:":"कॉलेज / विभाग:",
"Verified Student":"सत्यापित छात्र","Listings":"लिस्टिंग","Sessions":"सेशन","Rating":"रेटिंग","My Listings":"मेरी लिस्टिंग","My Booked Sessions":"मेरे बुक किए गए सेशन",
"Become a Doubt Solver":"डाउट सॉल्वर बनें","Share your knowledge and conduct paid or free academic sessions.":"अपना ज्ञान साझा करें और सशुल्क या निःशुल्क शैक्षणिक सेशन लें।",
"Student Doubt Solver":"छात्र डाउट सॉल्वर","Subjects You Can Teach":"आप किन विषयों को पढ़ा सकते हैं","Session Type":"सेशन प्रकार","Price per Session (₹)":"प्रति सेशन शुल्क (₹)","About You":"अपने बारे में",
"Publish Doubt Solver Profile":"डाउट सॉल्वर प्रोफाइल प्रकाशित करें","Doubt Solver Profile Published!":"डाउट सॉल्वर प्रोफाइल प्रकाशित हो गई!",
"Back to Profile":"प्रोफाइल पर वापस जाएं","My Doubt Solver":"मेरा डाउट सॉल्वर","Incoming Requests":"आने वाले अनुरोध","View Requests":"अनुरोध देखें",
"Marketplace":"मार्केटप्लेस","Search books, notes, gadgets...":"किताबें, नोट्स, गैजेट्स खोजें...",
"Search books, gadgets, notes...":"किताबें, गैजेट्स, नोट्स खोजें...","All":"सभी","Books":"किताबें","Gadgets":"गैजेट्स","Notes":"नोट्स",
"View Item":"आइटम देखें","No items found":"कोई आइटम नहीं मिला","Try another search.":"दूसरा शब्द खोजें।",
"Sell":"बेचें","Chats":"चैट","Explore":"एक्सप्लोर","Home":"होम","Profile":"प्रोफाइल","Doubts":"डाउट","Vault":"वॉल्ट",
"Doubt Solver":"डाउट सॉल्वर","Search subject, topic or mentor...":"विषय, टॉपिक या मेंटर खोजें...",
"Are you good at a subject?":"क्या आप किसी विषय में अच्छे हैं?","Help other students with subjects you know well.":"जिन विषयों को आप जानते हैं उनमें अन्य छात्रों की मदद करें।",
"Book Session":"सेशन बुक करें","No mentor found":"कोई मेंटर नहीं मिला","Campus Services":"कैंपस सेवाएं","Search service...":"सेवा खोजें...",
"Verified Provider":"सत्यापित प्रदाता","View Service":"सेवा देखें","No service found":"कोई सेवा नहीं मिली",
"Hello,":"नमस्ते,","Verified Student":"सत्यापित छात्र","Verified Faculty":"सत्यापित फैकल्टी","Verified Provider":"सत्यापित प्रदाता",
"Doubt Requests":"डाउट अनुरोध","Academic Support":"शैक्षणिक सहायता","Today's Overview":"आज का अवलोकन","Requests":"अनुरोध",
"Analytics":"एनालिटिक्स","Department Resources":"डिपार्टमेंट रिसोर्सेस","Department":"विभाग","Department not set":"विभाग सेट नहीं है","Showing resources for your department only":"केवल आपके विभाग के संसाधन दिखाए जा रहे हैं","No resources are available for your department yet.":"आपके विभाग के लिए अभी कोई संसाधन उपलब्ध नहीं है","Manage your upcoming sessions":"अपने आगामी सेशन प्रबंधित करें",
"Service Requests":"सेवा अनुरोध","My Services":"मेरी सेवाएं","Business Profile":"बिजनेस प्रोफाइल","Grow your campus service":"अपनी कैंपस सेवा बढ़ाएं",
"Add Service":"सेवा जोड़ें","Add Another Service":"एक और सेवा जोड़ें","Sign Out":"साइन आउट","Congratulations!":"बधाई!",
"Your item has been successfully published.":"आपका आइटम सफलतापूर्वक प्रकाशित हो गया है।","Service Published!":"सेवा प्रकाशित हो गई!",
"Your service is now visible to students on CampaMart.":"आपकी सेवा अब CampaMart पर छात्रों को दिखाई दे रही है।",
"Under Review":"समीक्षा में","Verified Campus Provider!":"सत्यापित कैंपस प्रदाता!",
"You can now offer services to students on CampaMart.":"अब आप CampaMart पर छात्रों को सेवाएं दे सकते हैं।"
},
od:{
"Select Language":"ଭାଷା ବାଛନ୍ତୁ","Student":"ଛାତ୍ର","Teacher":"ଶିକ୍ଷକ","Faculty":"ଫ୍ୟାକଲ୍ଟି","Verified Outsider":"ସତ୍ୟାପିତ ବାହ୍ୟ ସେବା ପ୍ରଦାନକାରୀ",
"Buy, Sell, Learn, Connect":"କିଣନ୍ତୁ, ବିକ୍ରି କରନ୍ତୁ, ଶିଖନ୍ତୁ ଓ ଯୋଡ଼ିହୁଅନ୍ତୁ","Teach, Support, Guide":"ପଢ଼ାନ୍ତୁ, ସାହାଯ୍ୟ ଓ ମାର୍ଗଦର୍ଶନ କରନ୍ତୁ","Provide Services, Sell":"ସେବା ପ୍ରଦାନ ଓ ବିକ୍ରି କରନ୍ତୁ",
"Select your role":"ଆପଣଙ୍କ ଭୂମିକା ବାଛନ୍ତୁ","CampaMart":"କ୍ୟାମ୍ପାମାର୍ଟ","Your Campus Marketplace":"ଆପଣଙ୍କ କ୍ୟାମ୍ପସ ମାର୍କେଟପ୍ଲେସ",
"Verify your student details":"ଆପଣଙ୍କ ଛାତ୍ର ବିବରଣୀ ସତ୍ୟାପିତ କରନ୍ତୁ","Verify your faculty credentials":"ଆପଣଙ୍କ ଫ୍ୟାକଲ୍ଟି ବିବରଣୀ ସତ୍ୟାପିତ କରନ୍ତୁ",
"Verify & Continue":"ସତ୍ୟାପିତ କରି ଆଗକୁ ବଢ଼ନ୍ତୁ","Full Name":"ପୂର୍ଣ୍ଣ ନାମ","Student ID / Roll No.":"ଛାତ୍ର ଆଇଡି / ରୋଲ ନମ୍ବର","Faculty ID":"ଫ୍ୟାକଲ୍ଟି ଆଇଡି",
"College / Department":"କଲେଜ / ବିଭାଗ","Upload Student ID Card":"ଛାତ୍ର ଆଇଡି କାର୍ଡ ଅପଲୋଡ୍ କରନ୍ତୁ","Upload Faculty ID Card":"ଫ୍ୟାକଲ୍ଟି ଆଇଡି କାର୍ଡ ଅପଲୋଡ୍ କରନ୍ତୁ",
"Upload ID Card":"ଆଇଡି କାର୍ଡ ଅପଲୋଡ୍ କରନ୍ତୁ","Welcome aboard!":"ସ୍ୱାଗତ!","You are successfully verified as a student.":"ଆପଣ ସଫଳତାର ସହ ଛାତ୍ର ଭାବେ ସତ୍ୟାପିତ ହୋଇଛନ୍ତି।",
"Go to Home":"ହୋମକୁ ଯାଆନ୍ତୁ","Verified Faculty!":"ସତ୍ୟାପିତ ଫ୍ୟାକଲ୍ଟି!","You are now a verified teacher on CampaMart.":"ଆପଣ ବର୍ତ୍ତମାନ CampaMart ରେ ସତ୍ୟାପିତ ଶିକ୍ଷକ।",
"Continue to Dashboard":"ଡ୍ୟାସବୋର୍ଡକୁ ଯାଆନ୍ତୁ","My Profile":"ମୋ ପ୍ରୋଫାଇଲ","Student Details":"ଛାତ୍ର ବିବରଣୀ","Name:":"ନାମ:","Roll No / Student ID:":"ରୋଲ ନମ୍ବର / ଛାତ୍ର ଆଇଡି:","College / Department:":"କଲେଜ / ବିଭାଗ:",
"Verified Student":"ସତ୍ୟାପିତ ଛାତ୍ର","Listings":"ଲିଷ୍ଟିଂ","Sessions":"ସେସନ","Rating":"ରେଟିଂ","My Listings":"ମୋ ଲିଷ୍ଟିଂ","My Booked Sessions":"ମୋ ବୁକ୍ କରା ସେସନ",
"Become a Doubt Solver":"ଡାଉଟ୍ ସଲଭର ହୁଅନ୍ତୁ","Share your knowledge and conduct paid or free academic sessions.":"ଆପଣଙ୍କ ଜ୍ଞାନ ବାଣ୍ଟନ୍ତୁ ଏବଂ ପେଡ୍ କିମ୍ବା ମାଗଣା ଶିକ୍ଷା ସେସନ କରନ୍ତୁ।",
"Student Doubt Solver":"ଛାତ୍ର ଡାଉଟ୍ ସଲଭର","Subjects You Can Teach":"ଆପଣ ପଢ଼ାଇପାରୁଥିବା ବିଷୟ","Session Type":"ସେସନ ପ୍ରକାର","Price per Session (₹)":"ପ୍ରତି ସେସନ ମୂଲ୍ୟ (₹)","About You":"ଆପଣଙ୍କ ବିଷୟରେ",
"Publish Doubt Solver Profile":"ଡାଉଟ୍ ସଲଭର ପ୍ରୋଫାଇଲ ପ୍ରକାଶ କରନ୍ତୁ","Doubt Solver Profile Published!":"ଡାଉଟ୍ ସଲଭର ପ୍ରୋଫାଇଲ ପ୍ରକାଶ ହୋଇଛି!",
"Back to Profile":"ପ୍ରୋଫାଇଲକୁ ଫେରନ୍ତୁ","My Doubt Solver":"ମୋ ଡାଉଟ୍ ସଲଭର","Incoming Requests":"ଆସୁଥିବା ଅନୁରୋଧ","View Requests":"ଅନୁରୋଧ ଦେଖନ୍ତୁ",
"Marketplace":"ମାର୍କେଟପ୍ଲେସ","Search books, notes, gadgets...":"ବହି, ନୋଟ୍, ଗ୍ୟାଜେଟ୍ ଖୋଜନ୍ତୁ...",
"Search books, gadgets, notes...":"ବହି, ଗ୍ୟାଜେଟ୍, ନୋଟ୍ ଖୋଜନ୍ତୁ...","All":"ସମସ୍ତ","Books":"ବହି","Gadgets":"ଗ୍ୟାଜେଟ୍","Notes":"ନୋଟ୍",
"View Item":"ଆଇଟମ୍ ଦେଖନ୍ତୁ","No items found":"କୌଣସି ଆଇଟମ୍ ମିଳିଲା ନାହିଁ","Try another search.":"ଅନ୍ୟ ଶବ୍ଦ ଖୋଜନ୍ତୁ।",
"Sell":"ବିକ୍ରି","Chats":"ଚାଟ୍","Explore":"ଏକ୍ସପ୍ଲୋର","Home":"ହୋମ","Profile":"ପ୍ରୋଫାଇଲ","Doubts":"ଡାଉଟ୍","Vault":"ଭଲ୍ଟ",
"Doubt Solver":"ଡାଉଟ୍ ସଲଭର","Search subject, topic or mentor...":"ବିଷୟ, ଟପିକ୍ କିମ୍ବା ମେଣ୍ଟର ଖୋଜନ୍ତୁ...",
"Are you good at a subject?":"ଆପଣ କୌଣସି ବିଷୟରେ ଭଲ କି?","Help other students with subjects you know well.":"ଆପଣ ଜାଣିଥିବା ବିଷୟରେ ଅନ୍ୟ ଛାତ୍ରଙ୍କୁ ସାହାଯ୍ୟ କରନ୍ତୁ।",
"Book Session":"ସେସନ ବୁକ୍ କରନ୍ତୁ","No mentor found":"କୌଣସି ମେଣ୍ଟର ମିଳିଲା ନାହିଁ","Campus Services":"କ୍ୟାମ୍ପସ ସେବା","Search service...":"ସେବା ଖୋଜନ୍ତୁ...",
"Verified Provider":"ସତ୍ୟାପିତ ପ୍ରଦାନକାରୀ","View Service":"ସେବା ଦେଖନ୍ତୁ","No service found":"କୌଣସି ସେବା ମିଳିଲା ନାହିଁ",
"Hello,":"ନମସ୍କାର,","Verified Faculty":"ସତ୍ୟାପିତ ଫ୍ୟାକଲ୍ଟି","Verified Provider":"ସତ୍ୟାପିତ ପ୍ରଦାନକାରୀ",
"Doubt Requests":"ଡାଉଟ୍ ଅନୁରୋଧ","Academic Support":"ଶିକ୍ଷାଗତ ସହାୟତା","Today's Overview":"ଆଜିର ସାରାଂଶ","Requests":"ଅନୁରୋଧ",
"Analytics":"ଆନାଲିଟିକ୍ସ","Department Resources":"ଡିପାର୍ଟମେଣ୍ଟ ରିସୋର୍ସ","Department":"ବିଭାଗ","Department not set":"ବିଭାଗ ସେଟ୍ ହୋଇନାହିଁ","Showing resources for your department only":"କେବଳ ଆପଣଙ୍କ ବିଭାଗର ରିସୋର୍ସ ଦେଖାଯାଉଛି","No resources are available for your department yet.":"ଆପଣଙ୍କ ବିଭାଗ ପାଇଁ ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ରିସୋର୍ସ ନାହିଁ","Manage your upcoming sessions":"ଆପଣଙ୍କ ଆଗାମୀ ସେସନ ପରିଚାଳନା କରନ୍ତୁ",
"Service Requests":"ସେବା ଅନୁରୋଧ","My Services":"ମୋ ସେବା","Business Profile":"ବ୍ୟବସାୟ ପ୍ରୋଫାଇଲ","Grow your campus service":"ଆପଣଙ୍କ କ୍ୟାମ୍ପସ ସେବା ବଢ଼ାନ୍ତୁ",
"Add Service":"ସେବା ଯୋଡ଼ନ୍ତୁ","Add Another Service":"ଆଉ ଏକ ସେବା ଯୋଡ଼ନ୍ତୁ","Sign Out":"ସାଇନ୍ ଆଉଟ୍","Congratulations!":"ଅଭିନନ୍ଦନ!",
"Your item has been successfully published.":"ଆପଣଙ୍କ ଆଇଟମ୍ ସଫଳତାର ସହ ପ୍ରକାଶ ହୋଇଛି।","Service Published!":"ସେବା ପ୍ରକାଶ ହୋଇଛି!",
"Your service is now visible to students on CampaMart.":"ଆପଣଙ୍କ ସେବା ବର୍ତ୍ତମାନ CampaMart ରେ ଛାତ୍ରଙ୍କୁ ଦେଖାଯାଉଛି।",
"Under Review":"ସମୀକ୍ଷା ଚାଲିଛି","Verified Campus Provider!":"ସତ୍ୟାପିତ କ୍ୟାମ୍ପସ ପ୍ରଦାନକାରୀ!",
"You can now offer services to students on CampaMart.":"ଆପଣ ବର୍ତ୍ତମାନ CampaMart ରେ ଛାତ୍ରଙ୍କୁ ସେବା ଦେଇପାରିବେ।"
}}
function applyFullLanguage(){
 const l=localStorage.getItem("campamartLanguage")||"en";
 if(l==="en") return;
 const map=FULL_LANG[l]||{};
 document.querySelectorAll("input[placeholder],textarea[placeholder]").forEach(el=>{
   if(map[el.placeholder]) el.placeholder=map[el.placeholder];
 });
 const walker=document.createTreeWalker(document.querySelector(".app"),NodeFilter.SHOW_TEXT);
 let n;
 while(n=walker.nextNode()){
   const raw=n.nodeValue.trim();
   if(map[raw]){
     n.nodeValue=n.nodeValue.replace(raw,map[raw]);
   } else if(raw.startsWith("Hello, ")){
     n.nodeValue=n.nodeValue.replace("Hello, ","नमस्ते, ");
   }
 }
}

function languageBar(){
  const current=localStorage.getItem("campamartLanguage")||"en";
  return `<div class="langbar single-lang">
    <span>🌐</span>
    <select aria-label="${ui("language")}" onchange="setLanguage(this.value)">
      <option value="en" ${current==="en"?"selected":""}>English</option>
      <option value="hi" ${current==="hi"?"selected":""}>हिन्दी</option>
      <option value="od" ${current==="od"?"selected":""}>ଓଡ଼ିଆ</option>
    </select>
  </div>`;
}
function render(){let content="";
switch(state.screen){
case"role":content=roleScreen();break;
case"studentVerify":content=verify("Student","🎓","Verify your student details","Sourav Nayak","22CS1234","Government College, Koraput","CSE","Student ID Card","Verify & Continue","studentSuccess");break;
case"studentSuccess":content=success("🛡️","Welcome aboard!","You are successfully verified as a student.","studentHome","Go to Home");break;
case"studentHome":content=studentHome();break;
case"studentProfile":content=studentProfile();break;
case"becomeDoubtSolver":content=becomeDoubtSolver();break;
case"doubtSolverSuccess":content=doubtSolverSuccess();break;
case"myDoubtProfile":content=myDoubtProfile();break;
case"marketplace":content=marketplace();break;
case"product":content=product();break;
case"chat":content=chat();break;
case"sell":content=sell();break;
case"published":content=success("🎉","Congratulations!","Your item has been successfully published.","studentHome","Go to Home");break;
case"doubt":content=doubt();break;
case"book":content=book();break;
case"campus":content=campus();break;
case"teacherVerify":content=verify("Faculty","👩‍🏫","Verify your faculty credentials","Dr. Sanjay Mohanty","FAC2024CSE01","Govt. College Koraput","CSE","Faculty ID Card","Verify & Continue","teacherSuccess","teal");break;
case"teacherSuccess":content=success("🏆","Verified Faculty!","You are now a verified teacher on CampaMart.","teacherHome","Continue to Dashboard","teal");break;
case"teacherHome":content=teacherHome();break;
case"doubtsTeacher":content=doubtsTeacher();break;
case"vault":content=vault();break;
case"sessions":content=sessions();break;
case"teacherProfile":content=teacherProfile();break;
case"outsiderVerify":content=outsiderVerify();break;
case"outsiderReview":content=success("⌛","Under Review","We are verifying your business credentials. This usually takes 24–48 hours.","outsiderSuccess","Simulate Approval →","orange");break;
case"outsiderSuccess":content=success("🏅","Verified Campus Provider!","You can now offer services to students on CampaMart.","outsiderHome","Continue to Dashboard","orange");break;
case"outsiderHome":content=outsiderHome();break;
case"analytics":content=analytics();break;
case"addService":content=addService();break;
case"servicePublished":content=success("🎉","Service Published!","Your service is now visible to students on CampaMart.","outsiderHome","Go to Dashboard","orange")+`<div class="screen"><button class="btn outline" onclick="go('addService')">Add Another Service</button></div>`;break;
case"requests":content=requests();break;
case"outsiderProfile":{let p=getProfile("outsider");content=profile("🏢",p.businessName||"Campus Provider",`Owner: ${p.ownerName||"Not provided"} · ${p.contact||""}`,"outsiderHome",p.contact||"Not provided");break;}
}
const tabs=(shouldShowRoleTabs() && !content.includes('class="nav"')) ? currentRoleNav() : "";
app.innerHTML=`<main class="app">${content}${tabs}</main>`; applyFullLanguage()}

function roleScreen(){
return `<section class="screen brand gradient center">
<div style="font-size:58px">🎓</div>
<h1>CampaMart</h1>
<p>${tr("tag")}</p>

<div class="language-box">
<h3>🌐 ${tr("choose")}</h3>
<select class="role-language-select" aria-label="${tr("choose")}" onchange="setLanguage(this.value)">
<option value="en" ${(localStorage.getItem("campamartLanguage")||"en")==="en"?"selected":""}>🇬🇧 ${tr("english")}</option>
<option value="hi" ${(localStorage.getItem("campamartLanguage")||"en")==="hi"?"selected":""}>🇮🇳 ${tr("hindi")}</option>
<option value="od" ${(localStorage.getItem("campamartLanguage")||"en")==="od"?"selected":""}>🟠 ${tr("odia")}</option>
</select>
</div>

<div class="hero">👨‍🎓 👩‍🎓</div>
<h3>${tr("role")}</h3>
<button class="role" onclick="setRole('student')">🎓 <strong>${tr("student")}</strong><small>${tr("studentSub")}</small></button>
<button class="role" onclick="setRole('teacher')">👩‍🏫 <strong>${tr("teacher")}</strong><small>${tr("teacherSub")}</small></button>
<button class="role" onclick="setRole('outsider')">🏢 <strong>${tr("outsider")}</strong><small>${tr("outsiderSub")}</small></button>
</section>`}

function verify(title,icon,sub,name,id,college,department,doc,btn,next,theme=""){
let role=title==="Student"?"student":"teacher";
let p=getProfile(role);
let nameVal=p.name||name, idVal=p.id||id, collegeVal=p.college||college, departmentVal=p.department||department;
return `<section class="screen ${theme}">
<div class="top"><button class="back" onclick="go('role')">←</button><h1>${title} Verification</h1></div>
<div class="card" style="background:${theme==="orange"?"#fff8df":theme==="teal"?"#e4fbff":"#f2efff"}"><h2>${icon} ${title} Verification</h2><p>${sub}</p></div>
<div class="field"><label>Full Name</label><input id="verifyName" value="${nameVal}" placeholder="Enter your full name"></div>
<div class="field"><label>${title==="Student"?"Student ID / Roll No.":"Faculty ID"}</label><input id="verifyId" value="${idVal}" placeholder="Enter your ID / roll number"></div>
<div class="field"><label>College</label><input id="verifyCollege" value="${collegeVal}" placeholder="Enter college name"></div>
<div class="field"><label>Department</label><select id="verifyDepartment">
<option value="CS" ${normalizeDepartment(departmentVal)==="cs"?"selected":""}>Computer Science (CS)</option>
<option value="Physics" ${normalizeDepartment(departmentVal)==="physics"?"selected":""}>Physics</option>
<option value="Chemistry" ${normalizeDepartment(departmentVal)==="chemistry"?"selected":""}>Chemistry</option>
<option value="Biology" ${normalizeDepartment(departmentVal)==="biology"?"selected":""}>Biology</option>
<option value="Arts" ${normalizeDepartment(departmentVal)==="arts"?"selected":""}>Arts</option>
<option value="Commerce" ${normalizeDepartment(departmentVal)==="commerce"?"selected":""}>Commerce</option>
</select></div>
<div class="field"><label>Upload ${doc}</label><div class="upload">📎 <b>Upload ID Card</b><br><span class="small">Demo upload area</span></div></div>
<button class="btn ${theme==="teal"?"teal":theme==="orange"?"orange":""}" onclick="submitVerification('${role}','${next}')">${btn}</button>
</section>`}

function submitVerification(role,next){
let name=document.getElementById("verifyName").value.trim();
let id=document.getElementById("verifyId").value.trim();
let college=document.getElementById("verifyCollege").value.trim();
let department=document.getElementById("verifyDepartment").value.trim();
if(!name||!id||!college||!department){alert("Please fill Name, ID/Roll No., College and Department.");return;}
saveProfile(role,{name,id,college,department});
state.role=role;
go(next);
}

function success(icon,title,text,next,label,theme=""){return `<section class="screen center"><div class="success-icon">${icon}</div><h1>${title}</h1><p class="small" style="font-size:18px">${text}</p><div class="card" style="text-align:left"><p class="check">✓ Verified status</p><p class="check">✓ Access to allowed features</p><p class="check">✓ Start exploring now!</p></div><button class="btn ${theme}" onclick="go('${next}')">${label}</button></section>`}

function studentHome(){
return `<section class="screen">${languageBar()}
<div class="row">
  <div><h2>👋 Hello, Sourav</h2><span class="badge">✓ Verified Student</span></div>
  <div>🔔</div>
</div>
<input class="search" value="${state.search}" placeholder="⌕ Search books, notes, gadgets..." oninput="searchFromHome(this.value)" onclick="this.select()">
<div class="grid">
<button class="tile" onclick="go('marketplace')">📚<h3>Marketplace</h3><p>Buy & Sell Books, Gadgets & more</p></button>
<button class="tile" onclick="go('doubt')">👨‍🏫<h3>Doubt Solver</h3><p>Get help from students & mentors</p></button>
<button class="tile" onclick="go('vault')">📁<h3>Department Resources</h3><p>Access notes and resources</p></button>
<button class="tile" onclick="go('campus')">🛠️<h3>Campus Services</h3><p>Find trusted campus services</p></button>
</div>
<div class="card gradient"><b>🌟 New here?</b><p>Explore features & get the best out of CampaMart!</p><button class="btn" style="background:#fff;color:#4b1fd4" onclick="go('marketplace')">Explore →</button></div>
${studentNav()}</section>`}

function studentNav(){
const s=state.screen;
return `<div class="nav">
<button class="${s==="studentHome"?"active":""}" onclick="go('studentHome')">⌂<br>${ui("home")}</button>
<button class="${["marketplace","product"].includes(s)?"active":""}" onclick="go('marketplace')">⌕<br>${ui("explore")}</button>
<button class="${s==="sell"?"active":""}" onclick="go('sell')">＋<br>${ui("sell")}</button>
<button class="${s==="chat"?"active":""}" onclick="go('chat')">💬<br>${ui("chat")}</button>
<button class="${["studentProfile","becomeDoubtSolver","doubtSolverSuccess","myDoubtProfile"].includes(s)?"active":""}" onclick="go('studentProfile')">♙<br>${ui("profile")}</button>
</div>`}

function searchFromHome(q){
state.search=q;
if(q.trim()) go('marketplace');
}

function studentProfile(){
let p=getProfile("student");
let name=p.name||tx("Student");
let id=p.id||"Not provided";
let college=p.college||"Not provided";
return `<section class="screen">
${languageBar()}
<div class="top"><button class="back" onclick="go('studentHome')">←</button><h1>${tx("My Profile")}</h1></div>
<div class="profileHero"><div class="avatar">👨‍🎓</div><h2>${name}</h2><p>${college}</p><span class="badge">✓ ${tx("Verified Student")}</span></div>
<div class="card"><h3>🎓 ${tx("Student Details")}</h3><p><b>${tx("Name:")}</b> ${name}</p><p><b>${tx("Roll No / Student ID:")}</b> ${id}</p><p><b>${tx("College:")}</b> ${college}</p><p><b>${tx("Department:")}</b> ${p.department||"Not set"}</p></div>
<div class="profile-grid"><div class="mini-stat"><b>3</b><span>${tx("Listings")}</span></div><div class="mini-stat"><b>4</b><span>${tx("Sessions")}</span></div><div class="mini-stat"><b>4.8 ⭐</b><span>${tx("Rating")}</span></div></div>
${state.isDoubtSolver ? `<div class="card solver-card"><span class="badge">✓ ${tx("Doubt Solver")}</span><h3>👨‍🏫 ${tx("My Doubt Solver")}</h3><p>${tx("You are available to help juniors and other students.")}</p><button class="btn" onclick="go('myDoubtProfile')">${tx("Manage Doubt Solver")}</button></div>` : `<div class="card solver-card"><h3>👨‍🏫 ${tx("Become a Doubt Solver")}</h3><p>${tx("Share your knowledge and conduct paid or free academic sessions.")}</p><button class="btn" onclick="go('becomeDoubtSolver')">${tx("Become a Doubt Solver")}</button></div>`}
<div class="card row" onclick="go('marketplace')" style="cursor:pointer"><h3>📚 ${tx("My Listings")}</h3><b>›</b></div>
<div class="card row" onclick="go('doubt')" style="cursor:pointer"><h3>📅 ${tx("My Booked Sessions")}</h3><b>›</b></div>
<button class="btn danger" onclick="clearProfile()">🚪 ${tx("Sign Out")}</button>
${studentNav()}</section>`}
function clearProfile(){
localStorage.removeItem("campamartProfile");
state.profile={student:{},teacher:{},outsider:{}};
state.role=null;
go("role");
}

function becomeDoubtSolver(){
return `<section class="screen">
<div class="top"><button class="back" onclick="go('studentProfile')">←</button><h1>Become a Doubt Solver</h1></div>
<div class="card" style="background:#eef9ff"><h2>👨‍🏫 Student Doubt Solver</h2><p>Help other students with subjects you know well.</p></div>
<div class="field"><label>Your Name</label><input value="Sourav Nayak"></div>
<div class="field"><label>Department / Semester</label><input value="CSE · 3rd Year"></div>
<div class="field"><label>Subjects You Can Teach</label><input id="solverSubjects" value="Data Structures, C Programming, DBMS"></div>
<div class="field"><label>Session Type</label><select><option>1-to-1 Doubt Session</option><option>Group Session</option></select></div>
<div class="field"><label>Price per Session (₹)</label><input type="number" value="50"></div>
<div class="field"><label>About You</label><textarea>I can help juniors with programming, data structures and DBMS concepts.</textarea></div>
<button class="btn teal" onclick="state.isDoubtSolver=true;go('doubtSolverSuccess')">Publish Doubt Solver Profile</button>
</section>`}

function doubtSolverSuccess(){
return `<section class="screen center">
<div class="success-icon">🎉</div>
<h1>Doubt Solver Profile Published!</h1>
<p class="small" style="font-size:18px">Students can now discover you as a verified student mentor.</p>
<div class="card" style="text-align:left">
<p class="check">✓ Student verified</p>
<p class="check">✓ Doubt Solver profile active</p>
<p class="check">✓ Receive session requests</p>
</div>
<button class="btn teal" onclick="go('myDoubtProfile')">View My Doubt Solver Profile</button>
<button class="btn outline" onclick="go('studentProfile')">Back to Profile</button>
</section>`}

function myDoubtProfile(){
return `<section class="screen">
<div class="top"><button class="back" onclick="go('studentProfile')">←</button><h1>My Doubt Solver</h1></div>
<div class="profileHero teal">
<div class="avatar">👨‍🎓</div><h2>Sourav Nayak</h2><p>CSE · 3rd Year</p><span class="badge">✓ Verified Student Mentor</span>
</div>
<div class="card"><h3>Subjects</h3><p>Data Structures · C Programming · DBMS</p><h3>Rate</h3><p class="price">₹50 / Session</p><h3>Rating</h3><p>⭐ 4.8 (12 reviews)</p></div>
<div class="card"><h3>📩 Incoming Requests</h3><p>2 students are waiting for your response.</p><button class="btn teal" onclick="alert('Doubt requests opened!')">View Requests</button></div>
<button class="btn outline" onclick="go('studentProfile')">Back to Profile</button>
</section>`}

function marketplace(){
return `<section class="screen">
<div class="top"><button class="back" onclick="go('studentHome')">←</button><h1>Marketplace</h1></div>
<input id="msearch" class="search" value="${state.search}" placeholder="Search books, gadgets, notes..." oninput="filterProducts(this.value)">
<div class="chips">
<button class="chip active" onclick="setCategory('All',this)">All</button>
<button class="chip" onclick="setCategory('Books',this)">Books</button>
<button class="chip" onclick="setCategory('Gadgets',this)">Gadgets</button>
<button class="chip" onclick="setCategory('Notes',this)">Notes</button>
</div>
<div id="products">${filteredProducts().map(p=>productCard(p,state.products.indexOf(p))).join("") || '<div class="card center"><h3>No items found</h3><p>Try another search.</p></div>'}</div>
</section>`}

function filteredProducts(){
let q=state.search.toLowerCase().trim();
return state.products.filter(p=>!q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q) || p.seller.toLowerCase().includes(q));
}
function productCard(p,i){
return `<div class="card product"><div class="product-img">${p.icon}</div><div style="flex:1"><b>${p.name}</b><p class="small">${p.seller} · CSE</p><span class="price">₹${p.price}</span></div><button class="btn" style="width:auto;margin:0;padding:9px" onclick="state.selected=${i};go('product')">View Item</button></div>`;
}
function filterProducts(q){
state.search=q;
let el=document.getElementById("products");
if(!el){go('marketplace');return;}
let list=filteredProducts();
el.innerHTML=list.length?list.map(p=>productCard(p,state.products.indexOf(p))).join(""):'<div class="card center"><h3>No items found</h3><p>Try another keyword.</p></div>';
}
function setCategory(cat,btn){
document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));
btn.classList.add("active");
let el=document.getElementById("products");
let list=cat==="All"?filteredProducts():state.products.filter(p=>p.cat===cat && (!state.search || p.name.toLowerCase().includes(state.search.toLowerCase())));
el.innerHTML=list.length?list.map(p=>productCard(p,state.products.indexOf(p))).join(""):'<div class="card center"><h3>No items found</h3></div>';
}

function product(){let p=state.products[state.selected||0];return `<section class="screen"><div class="top"><button class="back" onclick="go('marketplace')">←</button><h1>Item Details</h1></div><div class="card center"><div style="font-size:120px">📘</div></div><h2>${p.name}</h2><h2 class="price">₹${p.price}</h2><span class="badge">Good Condition</span><div class="card"><b>Seller</b><p>👨 Rahul Sharma · CSE · 3rd Year</p><p>⭐ 4.6 (23) · 🟢 Online</p></div><h3>Description</h3><p>Used for 1 semester. All chapters available. Very good condition.</p><button class="btn outline" onclick="go('chat')">💬 Chat Seller</button><button class="btn" onclick="alert('Buy request sent!')">🛒 Request to Buy</button></section>`}
function sendChatMessage(btn){const input=btn.previousElementSibling;if(!input||!input.value.trim()){alert("Type a message first.");return;}const box=document.createElement("div");box.className="chat me";box.textContent=input.value.trim();btn.closest("section").insertBefore(box,btn.closest(".row"));input.value="";}
function chat(){return `<section class="screen"><div class="top"><button class="back" onclick="go('product')">←</button><h1>Rahul Sharma</h1></div><div class="chat">Hi! Is this book still available?</div><div class="chat me">Yes, it's available ✅</div><div class="chat">Can I see more photos?</div><div class="chat me">Sure, sending now. 📘</div><div class="chat">Looks good. What's the final price?</div><div class="chat me">₹150 is final.</div><div class="row"><input class="search" placeholder="Type a message..."><button class="btn" style="width:55px" onclick="sendChatMessage(this)">➤</button></div></section>`}
function sell(){return `<section class="screen"><div class="top"><button class="back" onclick="go('studentHome')">←</button><h1>List Your Item</h1></div>${form("Item Name","Calculus Textbook","Category","Books","Price (₹)","250","Description","Used for 1 year. Good condition. All pages are intact.")}<button class="btn" onclick="go('published')">Publish Listing</button></section>`}
function form(l1,v1,l2,v2,l3,v3,l4,v4){return `<div class="field"><label>${l1}</label><input value="${v1}"></div><div class="field"><label>${l2}</label><input value="${v2}"></div><div class="field"><label>${l3}</label><input value="${v3}"></div><div class="field"><label>${l4}</label><textarea>${v4}</textarea></div>`}
function doubt(){
let solvers=[
{name:"Arjun Kumar",role:"Student · CSE 4th Semester",subject:"Data Structures",rate:"₹50 / Session",icon:"👨‍🎓"},
{name:"Neha Verma",role:"Student · IT 3rd Year",subject:"DBMS",rate:"₹40 / Session",icon:"👩‍🎓"},
{name:"Dr. Sanjay Mohanty",role:"Verified Faculty · CSE",subject:"Operating Systems",rate:"₹100 / Session",icon:"👨‍🏫"}
];
let q=state.doubtSearch.toLowerCase();
let list=solvers.filter(s=>!q || `${s.name} ${s.subject} ${s.role}`.toLowerCase().includes(q));
return `<section class="screen">
<div class="top"><button class="back" onclick="go('studentHome')">←</button><h1>Doubt Solver</h1></div>
<input class="search" value="${state.doubtSearch}" placeholder="Search subject, topic or mentor..." oninput="searchDoubt(this.value)">
<div class="chips"><span class="chip active">All</span><span class="chip">Mathematics</span><span class="chip">Physics</span><span class="chip">Programming</span><span class="chip">DBMS</span>
</div>
<div class="card solver-card"><h3>🎓 Are you good at a subject?</h3><p>Become a student doubt solver and help your juniors.</p><button class="btn teal" onclick="go('becomeDoubtSolver')">Become a Doubt Solver</button></div>
<div id="solverList">${list.length?list.map(s=>`<div class="card"><div class="row"><div><h3>${s.icon} ${s.name} <span class="small">🟢 Online</span></h3><p>${s.role}</p><p><b>${s.subject}</b></p><b class="price">${s.rate}</b></div><span class="badge">Verified</span></div><button class="btn teal" onclick="go('book')">Book Session</button></div>`).join(""):'<div class="card center"><h3>No mentor found</h3></div>'}</div>
</section>`}

function searchDoubt(q){
state.doubtSearch=q;
let el=document.getElementById("solverList");
if(!el){go('doubt');return;}
let s=[["Arjun Kumar","Student · CSE 4th Semester","Data Structures","₹50 / Session","👨‍🎓"],["Neha Verma","Student · IT 3rd Year","DBMS","₹40 / Session","👩‍🎓"],["Dr. Sanjay Mohanty","Verified Faculty · CSE","Operating Systems","₹100 / Session","👨‍🏫"]];
let list=s.filter(x=>`${x[0]} ${x[1]} ${x[2]}`.toLowerCase().includes(q.toLowerCase()));
el.innerHTML=list.length?list.map(x=>`<div class="card"><div class="row"><div><h3>${x[4]} ${x[0]} <span class="small">🟢 Online</span></h3><p>${x[1]}</p><p><b>${x[2]}</b></p><b class="price">${x[3]}</b></div><span class="badge">Verified</span></div><button class="btn teal" onclick="go('book')">Book Session</button></div>`).join(""):'<div class="card center"><h3>No mentor found</h3></div>';
}

function book(){return `<section class="screen"><div class="top"><button class="back" onclick="go('doubt')">←</button><h1>Book Session</h1></div><div class="card"><p>👨‍🏫 Tutor</p><b>Arjun Kumar</b><p>Subject: Data Structures</p><p>Date: 18 June 2025</p><p>Time: 6:00 PM – 7:00 PM</p><p>Duration: 1 Hour</p><p>Price: ₹50</p></div><button class="btn teal" onclick="alert('Booking confirmed!')">Confirm Booking ₹50</button></section>`}
function campus(){
let services=[["Laptop Repair","₹200 onwards","💻"],["Printing & Xerox","₹1 per page","🖨️"],["Bicycle Repair","₹50 onwards","🚲"]];
let q=state.serviceSearch.toLowerCase();
let list=services.filter(x=>`${x[0]} ${x[1]}`.toLowerCase().includes(q));
return `<section class="screen"><div class="top"><button class="back" onclick="go('studentHome')">←</button><h1>Campus Services</h1></div>
<input class="search" value="${state.serviceSearch}" placeholder="Search service..." oninput="searchServices(this.value)">
<div id="serviceList">${list.length?list.map(x=>`<div class="card service"><div class="row"><div><h3>${x[2]} ${x[0]}</h3><p>${x[1]}</p><span class="check">✓ Verified Provider</span></div><button class="btn outline" style="width:auto" onclick="alert('Service details opened!')">View Service</button></div></div>`).join(""):'<div class="card center"><h3>No service found</h3></div>'}</div></section>`}

function searchServices(q){
state.serviceSearch=q;
let el=document.getElementById("serviceList");
if(!el){go('campus');return;}
let s=[["Laptop Repair","₹200 onwards","💻"],["Printing & Xerox","₹1 per page","🖨️"],["Bicycle Repair","₹50 onwards","🚲"]];
let list=s.filter(x=>`${x[0]} ${x[1]}`.toLowerCase().includes(q.toLowerCase()));
el.innerHTML=list.length?list.map(x=>`<div class="card service"><div class="row"><div><h3>${x[2]} ${x[0]}</h3><p>${x[1]}</p><span class="check">✓ Verified Provider</span></div><button class="btn outline" style="width:auto" onclick="alert('Service details opened!')">View Service</button></div></div>`).join(""):'<div class="card center"><h3>No service found</h3></div>';
}

function teacherHome(){
return `<section class="screen">${languageBar()}
<div class="row">
  <div><h2>👋 Hello, ${getProfile("teacher").name||"Teacher"}</h2><span class="badge">✓ Verified Faculty</span></div>
  <div>🔔</div>
</div>
<input class="search" placeholder="⌕ Search students, resources, sessions..." oninput="alert('Teacher search: '+this.value)">
<div class="grid">
<button class="tile" onclick="go('doubtsTeacher')">🙋<h3>Doubt Requests</h3><p>View and respond to student requests</p></button>
<button class="tile" onclick="go('sessions')">📅<h3>Sessions</h3><p>Manage your upcoming sessions</p></button>
<button class="tile" onclick="go('vault')">📁<h3>Department Resources</h3><p>Notes, PYQs & academic resources</p></button>
<button class="tile" onclick="go('analytics')">📊<h3>Analytics</h3><p>Sessions, students & ratings</p></button>
</div>
<div class="card teal"><b>🌟 Academic Support</b><p>Help students, manage doubt requests and share department resources.</p><button class="btn" style="background:#fff;color:#08758b" onclick="go('doubtsTeacher')">View Requests →</button></div>
<div class="card"><h3>📌 Today's Overview</h3><div class="profile-grid"><div class="mini-stat"><b>3</b><span>Requests</span></div><div class="mini-stat"><b>2</b><span>Sessions</span></div><div class="mini-stat"><b>4.8 ⭐</b><span>Rating</span></div></div></div>
${teacherNav()}</section>`}

function teacherNav(){
const s=state.screen;
return `<div class="nav">
<button class="${s==="teacherHome"?"active":""}" onclick="go('teacherHome')">⌂<br>${ui("home")}</button>
<button class="${s==="doubtsTeacher"?"active":""}" onclick="go('doubtsTeacher')">🙋<br>${ui("doubts")}</button>
<button class="${s==="sessions"?"active":""}" onclick="go('sessions')">📅<br>${ui("sessions")}</button>
<button class="${s==="vault"?"active":""}" onclick="go('vault')">📁<br>${ui("vault")}</button>
<button class="${s==="teacherProfile"?"active":""}" onclick="go('teacherProfile')">♙<br>${ui("profile")}</button>
</div>`}

function doubtsTeacher(){return `<section class="screen"><div class="top"><button class="back" onclick="go('teacherHome')">←</button><h1>Doubt Requests</h1></div>${["Ramesh Kumar|Data Structures · Binary Trees|6:00 PM – 7:00 PM","Anita Patel|Algorithms · Dynamic Programming|4:00 PM – 5:00 PM","Sourav Nayak|OS · Process Scheduling|8:00 PM – 9:00 PM"].map((x,i)=>{let[a,b,c]=x.split("|");return `<div class="card"><div class="row"><div><h3>🎓 ${a}</h3><p>${b}</p><p>⏰ ${c}</p></div><span class="badge ${i<2?"pending":""}">${i<2?"Pending":"✓ Accepted"}</span></div>${i<2?`<div class="row"><button class="btn danger" onclick="this.parentElement.parentElement.remove()">Decline</button><button class="btn teal" onclick="this.textContent='Accepted ✓'">Accept</button></div>`:`<button class="btn teal" onclick="go('chat')">Open Chat</button>`}</div>`}).join("")}</section>`}
function getVaultDepartment(){
  if(state.resourceDepartment) return state.resourceDepartment;
  const p=getProfile(state.role==="teacher"?"teacher":"student");
  return (p.department||"").trim();
}
function setResourceDepartment(value){
  state.resourceDepartment=value;
  state.vaultSearch="";
  render();
}
function vaultResources(){
  return [
    // Computer Science / CS
    ["Data Structures Notes","PDF","CS","📘"],
    ["DBMS Previous Year Questions","PYQ","CS","📄"],
    ["C Programming Lab Manual","Notes","CS","💻"],
    ["Operating Systems Unit 1","PDF","CS","📗"],
    // Physics
    ["Mechanics Notes","PDF","Physics","⚛️"],
    ["Physics Lab Manual","Notes","Physics","🔬"],
    ["Electromagnetism PYQs","PYQ","Physics","📄"],
    // Chemistry
    ["Organic Chemistry Notes","PDF","Chemistry","🧪"],
    ["Chemistry Lab Manual","Notes","Chemistry","⚗️"],
    ["Chemistry Previous Year Questions","PYQ","Chemistry","📄"],
    // Biology
    ["Cell Biology Notes","PDF","Biology","🧬"],
    ["Biology Lab Manual","Notes","Biology","🔬"],
    ["Genetics PYQs","PYQ","Biology","📄"],
    // Arts
    ["Indian History Notes","PDF","Arts","📚"],
    ["Political Science Notes","Notes","Arts","🏛️"],
    ["Arts Previous Year Questions","PYQ","Arts","📄"],
    // Commerce
    ["Financial Accounting Notes","PDF","Commerce","📊"],
    ["Business Studies Notes","Notes","Commerce","💼"],
    ["Commerce Previous Year Questions","PYQ","Commerce","📄"],
    // Common
    ["Common Academic Guidelines","PDF","Common","📚"]
  ];
}
function normalizeDepartment(value){
  const v=(value||"").toLowerCase().trim();
  if(v.includes("computer") || v==="cs" || v.includes("cse") || v.includes("computer science")) return "cs";
  if(v.includes("physics")) return "physics";
  if(v.includes("chemistry")) return "chemistry";
  if(v.includes("biology")) return "biology";
  if(v.includes("arts") || v.includes("humanities") || v.includes("history") || v.includes("political science")) return "arts";
  if(v.includes("commerce") || v.includes("account")) return "commerce";
  if(v.includes("mathematics") || v.includes("math")) return "mathematics";
  if(v==="common") return "common";
  return v.replace(/[^a-z0-9]+/g,"");
}
function departmentResources(){
  const dept=normalizeDepartment(getVaultDepartment());
  const all=vaultResources();
  if(!dept) return all;
  return all.filter(r=>normalizeDepartment(r[2])==="common" || normalizeDepartment(r[2])===dept);
}
function renderVaultList(list){
  return list.length ? list.map(r=>`<div class="card vault-item"><div class="row"><div><h3>${r[3]} ${r[0]}</h3><p>${r[2]} · ${r[1]}</p><span class="badge">✓ Verified Resource</span></div><button class="btn outline" style="width:auto" onclick="openVaultResource('${r[0]}')">${ui("read")}</button></div></div>`).join("") : `<div class="card center"><h3>${ui("noResources")}</h3><p>${tx("No resources are available for your department yet.")}</p></div>`;
}
function vault(){
  const dept=normalizeDepartment(getVaultDepartment());
  const label=getVaultDepartment()||tx("Department not set");
  const options=[
    ["cs","Computer Science (CS)"],["physics","Physics"],["chemistry","Chemistry"],
    ["biology","Biology"],["arts","Arts"],["commerce","Commerce"]
  ];
  return `<section class="screen">${languageBar()}<div class="top"><button class="back" onclick="go(state.role==="teacher"?"teacherHome":"studentHome")">←</button><h1>${ui("departmentVault")}</h1></div>
  <div class="card vault-dept"><b>🎓 ${tx("Department")}</b><span>${label}</span><small>${tx("Showing resources for your department only")}</small>
  <select class="resource-dept-select" onchange="setResourceDepartment(this.value)">${options.map(([v,n])=>`<option value="${v}" ${dept===v?"selected":""}>${n}</option>`).join("")}</select></div>
  <input class="search" placeholder="${ui("searchVault")}" oninput="filterVault(this.value)">
  <div id="vaultList">${renderVaultList(departmentResources())}</div>${state.role==="student"?studentNav():teacherNav()}</section>`;
}
function filterVault(q){
  const query=q.toLowerCase().trim();
  const list=departmentResources().filter(r=>(r[0]+" "+r[1]+" "+r[2]).toLowerCase().includes(query));
  const el=document.getElementById("vaultList");
  if(el) el.innerHTML=renderVaultList(list);
}
function openVaultResource(name){alert("Opening: "+name);}

function sessions(){return `<section class="screen"><div class="top"><button class="back" onclick="go('teacherHome')">←</button><h1>Sessions</h1></div>${["Sourav Nayak|Data Structures|18 June 2025|6:00 PM – 7:00 PM","Ramesh Kumar|Binary Trees|19 June 2025|4:00 PM – 5:00 PM","Neha Patel|DBMS|15 June 2025|2:00 PM – 3:00 PM"].map((x,i)=>{let[a,b,c,d]=x.split("|");return `<div class="card"><div class="row"><div><h2>${a}</h2><p>${b}</p><p>📅 ${c}　⏰ ${d}</p></div><span class="badge ${i===2?"":"pending"}">${i===2?"✓ Completed":"Upcoming"}</span></div><button class="btn outline" onclick="${i===2?"alert(\'Session summary opened!\')":"go(\'chat\')"}">${i===2?"View Summary":"Open Chat"}</button>${i<2?`<button class="btn teal" onclick="this.textContent=\"Session Started ✓\";alert(\"Session started!\")">Start Session</button>`:""}</div>`}).join("")}</section>`}
function teacherProfile(){
let p=getProfile("teacher");
return profile("👩‍🏫",p.name||"Faculty",p.college||"Department not provided","teacherHome",p.id||"Not provided");
}
function profile(icon,name,sub,home,id="Not provided"){
const role=state.role;
const verified=role==="student"?tx("Verified Student"):role==="teacher"?tx("Verified Faculty"):tx("Verified Provider");
const details=role==="student"?tx("Student Details"):"Profile Details";
const idLabel=role==="student"?tx("Roll No / Student ID:"):role==="teacher"?"Faculty ID:":"Contact:";
const deptLabel=tx("College / Department:");
const stats=role==="outsider"
 ? ["📋 "+tx("Requests")+"　5","🛠️ "+tx("My Services")+"　2","⭐ "+tx("Rating")+"　4.8","👥 Students Served　32"]
 : role==="teacher"
 ? ["📅 "+tx("Sessions")+"　12","🙋 "+tx("Doubt Requests")+"　3","⭐ "+tx("Rating")+"　4.8","📁 "+tx("Resources Shared")+"　8"]
 : ["📅 "+tx("Sessions")+"　4","⭐ "+tx("Rating")+"　4.8","📚 "+tx("Listings")+"　3","🙋 "+tx("Doubt Requests")+"　2"];
return `<section class="screen">
${languageBar()}
<div class="center teal" style="margin:-10px -16px 20px;padding:35px 15px">
<div style="font-size:70px">${icon}</div><h1>${name}</h1><p>${sub}</p><span class="badge">✓ ${verified}</span>
</div>
<div class="card"><h3>${details}</h3>
<p><b>${tx("Name:")}</b> ${name}</p>
<p><b>${idLabel}</b> ${id}</p>
<p><b>${deptLabel}</b> ${sub}</p></div>
${stats.map(x=>`<div class="card row"><h3>${x}</h3><b>›</b></div>`).join("")}
<button class="btn danger" onclick="clearProfile()">🚪 ${tx("Sign Out")}</button>
${role==="student"?studentNav():role==="teacher"?teacherNav():outsiderNav()}
</section>`}
function outsiderVerify(){
let p=getProfile("outsider");
return `<section class="screen"><div class="top"><button class="back" onclick="go('role')">←</button><h1>Business Verification</h1></div>
<div class="card" style="background:#fff8df"><h2>🏢 Business Verification</h2><p>Register your campus service</p></div>
<div class="field"><label>Business Name</label><input id="bizName" value="${p.businessName||"Tech Solutions"}" placeholder="Business name"></div>
<div class="field"><label>Owner Name</label><input id="ownerName" value="${p.ownerName||"Rajan Gupta"}" placeholder="Owner name"></div>
<div class="field"><label>Contact Number</label><input id="bizContact" value="${p.contact||"+91 98765 43210"}" placeholder="Contact number"></div>
<div class="field"><label>Upload Business ID / Document</label><div class="upload">📎 <b>Upload GST / Udyam / Business ID</b><br><span class="small">Demo upload area</span></div></div>
<button class="btn orange" onclick="submitOutsiderVerification()">Submit for Verification</button>
</section>`}

function submitOutsiderVerification(){
let businessName=document.getElementById("bizName").value.trim();
let ownerName=document.getElementById("ownerName").value.trim();
let contact=document.getElementById("bizContact").value.trim();
if(!businessName||!ownerName||!contact){alert("Please fill all business details.");return;}
saveProfile("outsider",{businessName,ownerName,contact});
state.role="outsider";
go("outsiderReview");
}

function analytics(){return `<section class="screen"><div class="top"><button class="back" onclick="go('outsiderHome')">←</button><h1>Analytics</h1></div><div class="profile-grid"><div class="mini-stat"><b>05</b><span>Requests</span></div><div class="mini-stat"><b>02</b><span>Services</span></div><div class="mini-stat"><b>4.8 ⭐</b><span>Rating</span></div></div><div class="card"><h3>Service Performance</h3><p>Requests are being tracked in this prototype.</p><button class="btn outline" onclick="go('outsiderHome')">Back to Dashboard</button></div>${outsiderNav()}</section>`}

function outsiderHome(){
let p=getProfile("outsider");
let business=p.businessName||"Campus Partner";
return `<section class="screen">${languageBar()}
<div class="row">
  <div><h2>👋 Hello, ${business}</h2><span class="badge">✓ Verified Provider</span></div>
  <div>🔔</div>
</div>
<input class="search" placeholder="⌕ Search services, requests..." oninput="alert('Provider search: '+this.value)">
<div class="grid">
<button class="tile" onclick="go('addService')">🛠️<h3>My Services</h3><p>Add and manage campus services</p></button>
<button class="tile" onclick="go('requests')">📋<h3>Service Requests</h3><p>Accept, decline and manage requests</p></button>
<button class="tile" onclick="go('outsiderProfile')">🏢<h3>Business Profile</h3><p>Manage provider information</p></button>
<button class="tile" onclick="go('analytics')">📊<h3>Analytics</h3><p>Requests, services & ratings</p></button>
</div>
<div class="card orange"><b>🌟 Grow your campus service</b><p>Add services so students can discover and request them.</p><button class="btn" style="background:#fff;color:#c96d00" onclick="go('addService')">+ Add Service</button></div>
<div class="card"><h3>📌 Today's Overview</h3><div class="profile-grid"><div class="mini-stat"><b>05</b><span>Requests</span></div><div class="mini-stat"><b>02</b><span>Services</span></div><div class="mini-stat"><b>4.8 ⭐</b><span>Rating</span></div></div></div>
${outsiderNav()}</section>`}

function outsiderNav(){
const s=state.screen;
return `<div class="nav">
<button class="${s==="outsiderHome"?"active":""}" onclick="go('outsiderHome')">⌂<br>${ui("home")}</button>
<button class="${s==="requests"?"active":""}" onclick="go('requests')">📋<br>${ui("requests")}</button>
<button class="${s==="addService"?"active":""}" onclick="go('addService')">＋<br>${ui("service")}</button>
<button class="${s==="outsiderProfile"?"active":""}" onclick="go('outsiderProfile')">♙<br>${ui("profile")}</button>
</div>`}

function addService(){return `<section class="screen"><div class="top"><button class="back" onclick="go('outsiderHome')">←</button><h1>Add New Service</h1></div>${form("Service Name","Laptop Repair","Location","Near Main Gate","Availability","10 AM – 7 PM","Category","Electronics")}<div class="field"><label>Starting Price (₹)</label><input value="200"></div><div class="field"><label>Description</label><textarea>Professional laptop repair service. Screen, keyboard, software issues handled.</textarea></div><button class="btn orange" onclick="go('servicePublished')">Publish Service</button></section>`}
function requests(){return `<section class="screen"><div class="top"><button class="back" onclick="go('outsiderHome')">←</button><h1>Service Requests</h1></div>${["Sourav Nayak|Laptop Repair|Hostel A, Room 204|Today, 4:00 PM","Riya Sharma|Screen Replacement|Girl's Hostel|Tomorrow, 11:00 AM","Arjun Kumar|Software Troubleshoot|CSE Lab|Today, 2:00 PM"].map((x,i)=>{let[a,b,c,d]=x.split("|");return `<div class="card"><div class="row"><div><h3>${a}</h3><b>${b}</b><p>📍 ${c}</p><p>⏰ ${d}</p></div><span class="badge ${i<2?"pending":""}">${i<2?"Pending":"Accepted"}</span></div>${i<2?`<div class="row"><button class="btn danger" onclick="this.closest('.card').remove()">Decline</button><button class="btn orange" onclick="this.textContent='Accepted ✓'">Accept</button></div>`:`<div class="row"><button class="btn outline" onclick="go('chat')">Chat</button><button class="btn" style="background:#16a34a" onclick="this.textContent='Completed ✓'">Complete</button></div>`}</div>`}).join("")}</section>`}

render();