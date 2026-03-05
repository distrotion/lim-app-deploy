'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "448a611e90ae2754539592093324ff3c",
".git/config": "6230112084a385bf4c4ab4fdd412d61b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "570aad031a77521e9ac8216765e982a2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "90005dd4ae35c1f397554be67c56a2bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5953f11a5177ce2141ef49f0864f3256",
".git/logs/refs/heads/main": "26eee9631888463a2bc868659c75ec91",
".git/logs/refs/remotes/origin/main": "a65eb1004c6a0906c59b6d4d75148c2e",
".git/objects/04/382bf19fb17c942cfacd5f42d0c507ff1d069f": "794aeae27e23f928fd36f2503076447e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/48ae557f0ff7ffa0f09f2d4eebf2b5bc8705a8": "e54a16efa04cb4dac23d5cb248546cb3",
".git/objects/0b/4d2335a9ed45589f73c4deb29c2fd9f193fc9b": "7442be4d366bfcaf7f02ab47abf13aa1",
".git/objects/0f/5296de818f903b5b218d3763b5fc8d84198125": "c052b6d642eeed56de03a449cfdd24c1",
".git/objects/0f/be5b494419e8a31ec35675988bc3bf1504ad00": "0caf24fa78d7bc705b68651f8625b972",
".git/objects/11/38d3804d4a8176fe4c4487f1f78d2367c60e38": "6c4bf187559115ca9a70dca89db43bae",
".git/objects/11/6bdf754114253a793399ddf79f9e1611c9809e": "921ee43538bd1254d6408249cdb6664b",
".git/objects/15/caefc6115e89de9f0d96b9d72613e849743441": "ff0fe80e3004d14a23ebff9719204dea",
".git/objects/18/1657bad444c03ef6e338e0f4092b6f7a650bdf": "9293c967728e86e92539cebfc2a714cb",
".git/objects/1c/19efc1343e969f7b0d4dc51282fff0e8345d2b": "7debc69fcc3f9294d48e07c4c09e675b",
".git/objects/1e/3f3529780dc387847c32845f45949674420283": "0a4441f5797d0d4ace714418f0e2becb",
".git/objects/22/3a8fcea9bcfa70aeb0d3888cf2982b4515b288": "67a022a2a1db08f952d5ea326630f04a",
".git/objects/25/63385d5b328d06f05078434183f7c1d617bfcd": "1acf364be095cfaef52d8a87d37cde50",
".git/objects/39/122a88eae5fc696a6185b020919a1db548aae4": "c6e5e82546b384af5110373403552ba8",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/0b178391a413d3e70d2484b066a7772cb4ff63": "c7c9e4931b5aec46bbff246ae7c8b6df",
".git/objects/44/a217227216bd84ffac16614e9c9ca1ea51cdea": "2f7d46f1ed4a7d057ef49258036338ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e82a2ec00c51d5305c6effa3d71c62269d3ef2": "4133f1f481184388c6c86eeeede7c254",
".git/objects/4a/4edfbeb81b6dca5b78223d0217bc640bcd5b0a": "db9caa46f6baf463e03403ca827e38bb",
".git/objects/4b/a9b2e21cfb784ec876eb099825be253bb1089e": "5225c9de2058d2c912ad70db2b4658db",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/fdffa61c9f5789c73db9781ae80802f4170641": "b641901593f64513e1b72964241ee2b1",
".git/objects/57/6580fd619d203a1d6bc021cc8b731d5e573539": "b48eb0be6a4198c17dc01686cf88c791",
".git/objects/59/e456fdab493a5c6234d094cc45bee6b559a85c": "a478e875b95ce123b654ac4b6125b1c9",
".git/objects/5d/3ce263145f5667367bd1104a0f440a1a5236af": "dbd40c4c2b1852277d916f85fc9abc88",
".git/objects/64/6952c8f3cfc7a4b14d7d51db7c3bb92921ccb2": "71b291355c9c2e649163084aa34432a0",
".git/objects/66/e828451d4dbb29a5d0f577b0facddfcda62436": "c6562b8d510d5c7640e6895f607443a4",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/52a45868c4578dccbe07c139cbbf3445a0f9da": "2e08a953ec387b905ee3a147b0777664",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/98a38057325ee533be107fa520869febc4aa1e": "d6db701494ddbb3cf0e5e30c16302535",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/d892aa756f03d150143ae3ff93d112e216081b": "70164464d257602021487cfa493a102c",
".git/objects/76/2bd2a225b011c94dbff7b0eb51feef09e683cb": "8a65bc5ef08474d5ab2b88d5dcedb23e",
".git/objects/7a/33be0de7764efb3bf966c547a6b9b3cb9a2b03": "ef807caaa6f03910b7f605fa901bcd17",
".git/objects/7a/960be6896818bda008898390b7a1721f8373c1": "91f0c57f0036b10af7fdce5a67aa04f7",
".git/objects/7c/2592043e09746c10add6e6326763e24dd64e99": "04868ce25e8b51428d1f5b20636a3804",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/7ee2483ab2b2e8058367d1229c120f099881c4": "3d1d64500be943dc445b070ff4615476",
".git/objects/7e/5f51c8d94c79cff3a42f7ad2d8d4632891c538": "04c86681d8e72c5b1192c6e57bd05f85",
".git/objects/7e/69bd859dbe318fdcdfe4499953ceaaa8adabf6": "1d1d1d45d81d4a243c5144c42d9478f9",
".git/objects/7f/029ac09bc8d30d79dffba19fe853279afc272b": "5416de4d305b77c13a5edc3d25b53d65",
".git/objects/80/7b65d91b9ddb7998fef2e08a5c0ce0e44f7a8b": "e5b3958fb5b636520e2ff53999d0faeb",
".git/objects/84/45daae6ae08ec4c281ea66f489137ebca05ef6": "4a1704ae72361ee4fd74dfd8d791d697",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/c7479f32f26709233d71ddfe7bf6c9d95a4a05": "6315171f7f57c6ee67221b17fdb03bf4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1058d08c8915fa5f509796b8529f6df0fe86d0": "e84ed17bb4c50f3ba24bd16df10d40e4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/92f72d27d6c2d2d61da44b1dce6c89be3e1897": "b7cf2b4fc0be4901988580863d513c8d",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/91/90b4b4d07a7e6431b3b3fa35823e6365bab9b0": "83ad5841ded6d62a2defee32077b5641",
".git/objects/92/8825d098bbbd625e224ee9b595f0785c4f39c5": "66ec20a20c79e2be1339c97f97a4b473",
".git/objects/92/dfbeb36289f77cabbe88bd04fbee7dcfe15138": "3c755f9b91b45454ceb4dbb861b44489",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/fed2619889e1dcd20234666ffc9ce0bdf4be3a": "d4f07d60bba23bdde1c87d525b989408",
".git/objects/9a/14a2cd7a56a70e8a9a029561d07f14a7938af3": "90d73188ce9a1aa5520fa976942ef88e",
".git/objects/9b/fd6813a9966cdd96bfe0dfbf9e97e57176cf1a": "a7cd71fd6da157f140a660932f363ff3",
".git/objects/9e/9ac7d76cac65e59c4c060bf74c66af2bd24de6": "12f0c0056074c42f53fa451486acee72",
".git/objects/a0/d706531ca07ffe44f2375345d1c2cc716621fe": "a8d36dc12cd4b06d61e59c42fce0c362",
".git/objects/a3/a4a2046c72bfd45a22a959484da66c9acb6984": "8b5646cc108a9bc685b0eb1a2025535c",
".git/objects/a4/02c26b505fb83fccf5b2e5c882c02a686870ff": "5f5bdf73edab44f4e9f3d2eb5c9fb58f",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/806af9d0d424d6c0f966a6ab54bb2a2a582e70": "5a90232aa115ba272bea834b9a157ab4",
".git/objects/b2/af5125fc1b1e3a1f8c47c7cb08e34edb642e83": "4d123176fa2bb049035ea4c733975bfc",
".git/objects/b3/b5459fcc393e5cff3c80db6f27e5a18c8f1bde": "1934075bb8df57f7bb2253079ab7263f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bd/e6f07e28d4475cfd586139884a75fa208bb000": "652bf49e46b238523e2d97844d181383",
".git/objects/c0/5f5ba94ee0c86b7f0196cfa4cf6637e904446b": "a53ae8cd961b963986662997aee310d9",
".git/objects/c2/f39c0d937efca5376eb082a921bf9e0ac1951d": "53945e3a16270076b3bee32ddba8b7ea",
".git/objects/c4/681a99195cd6e4bf869c939e51f08e39b1fa69": "13435d14b3dc956456edd07d5ffa53c9",
".git/objects/c6/58cd5a88f08898cee884149005dbad9be3616b": "c09790921e375fcc5e44344339a90c1a",
".git/objects/c7/3aa923344c6be0a09281fcee28e4d80640bf3f": "341246bb3d8d23ccfe7ca2de99469ecf",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cd/d76685bd7c747a3654755826fc90bc6562f90d": "408377695e9159422d389778b556116f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9cea2d3c6d0483e76bb86eeb0f61e92fe44f89": "2d3047aaf0a78dbc45e3941baf09216d",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/d1bac95ca3dd1674fa930b32158433d36771d0": "770ae460fa5c1f9de2c3d696be96c19a",
".git/objects/df/6001bcc963d84e9a9aaad00dc0a97bb299f20f": "cb703fef85fcb4e830aafbc5b48133d0",
".git/objects/e2/c2c61df3503aae8bea6f99192a528cfd27e40b": "31837ed3f7cccbef6dd93b74f37637f2",
".git/objects/e4/067764a444acababf470c33f8aa67e0af460c4": "edd5247116b63caf0ca96f20d525a45e",
".git/objects/e5/f4b36ad7730c5d24ccd649ec59fefe1491e050": "cf3fa36b23096b8c7707993deec325d8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/722331e3e4777acd3f14db64142428e0cfd6a0": "91e3847d781d9dc1f7d4d183687d9df0",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fa/572571ca659a901c162bdd41a3586a07efa04b": "47c4ce135d2a16118d09dbc480f56689",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/pack/pack-c8395d8e1b3cc2b3ac37863973114fa0da850f67.idx": "9e54fcb500ba56188604c2e9e2c9da9d",
".git/objects/pack/pack-c8395d8e1b3cc2b3ac37863973114fa0da850f67.pack": "61a1e9b0f6937560d9c0b3647d851a99",
".git/objects/pack/pack-c8395d8e1b3cc2b3ac37863973114fa0da850f67.rev": "884208727c1644f1c516c869f2ee408e",
".git/ORIG_HEAD": "008015c0e5bb2b7df3701a66bcb9008c",
".git/refs/heads/main": "3dda7039aa0506cec687e90030ba8575",
".git/refs/remotes/origin/main": "3dda7039aa0506cec687e90030ba8575",
".vscode/settings.json": "eb0582f45e34bd8ecf257f574abb0905",
"assets/AssetManifest.bin": "e0911bddd4cb111ed3c3f888d393272b",
"assets/AssetManifest.bin.json": "ce97109e0faadd1c956465eb560ca9e4",
"assets/AssetManifest.json": "7f8ed18f646bdadd9898697bc0752038",
"assets/assets/icons/icon-caution@3x.png": "8f984d63371c3c065a6600c8a3ce4610",
"assets/assets/icons/icon-close@3x.png": "acd36d73c212b0340765271095d4ab7a",
"assets/assets/icons/icon-correct@2x-green.png": "70325b6ace4a1fb08f6cdae73f72bb74",
"assets/assets/icons/icon-down_4@3x.png": "f7bd2048bda76031dc2c9f1c1851e39c",
"assets/assets/icons/icon-error@3x.png": "e5b60c16a6694859a9a342e66dc09609",
"assets/assets/icons/icon-info@3x.png": "f14fc07d89153a98cc979979c02757d8",
"assets/assets/icons/icon-notifications.png": "01e90e91bd50b2eb166784bac884b7e3",
"assets/assets/images/BP12BA01.jpg": "cbf5d200c2ed355b2ec1cfd2f4eef9d5",
"assets/assets/images/BP12BA02.jpg": "0760628e20e25d88feef4465f52b0465",
"assets/assets/images/BP12BA03.jpg": "a2792973066077acbab25f27ae0385f3",
"assets/assets/images/BP12FF01.jpg": "3be2720b60134400b85bba96d29d4287",
"assets/assets/images/HESBA01.JPG": "af1118bd5cdda1ad34451b2020777fa8",
"assets/assets/images/HESBA02.JPG": "9acf7031f751d11f55e68b5b506ef12f",
"assets/assets/images/HESBA03.JPG": "1948143267b5ebf0073e56f690642f70",
"assets/assets/images/HESBA04.JPG": "76fc642815cef24a65ef5dfd0399d8e0",
"assets/assets/images/IC-8100EX.png": "08df040ace6f62ae8b784d58bfa132d6",
"assets/assets/images/ICP-HES.png": "efbbc7c61bdb4e5cdc2206419d604457",
"assets/assets/images/ICP.png": "dd6e6eb6f19bc396bbdbaa1d66bdab5f",
"assets/assets/images/ICS-2000.png": "0ce28a02191de1feff8e2f337d21d04d",
"assets/assets/images/ICS-2100.png": "168af883209326fdb742bed5925029b9",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/TOC-HES.png": "93f2c144f8ce6a0fe2a856977993fc68",
"assets/assets/images/TOC.png": "6c352744c8282ed19cbd09f743171295",
"assets/assets/images/UV-BP.png": "e2b629f63165fe51256d6f4e88cfb70b",
"assets/assets/images/UV-HES.png": "c069376a7d081939c36d000a0c164517",
"assets/assets/images/XRF.png": "8487379b5430318032ba6fe501fdb6c5",
"assets/assets/images/XRFPrimussII.png": "a73e204a279a9e01d68ae3401ebcc727",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "99c4f9bef959d63e10b1d568f2ec0ca7",
"assets/NOTICES": "33ad0fec937c2553203d02a90f05491a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_st.js": "9eeb36850f248a8e946442a13aaaa009",
"canvaskit/skwasm_st.js.symbols": "ca49a44a388ecfe66ba43dd851d2b76d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5f024204599884a2f813bb65e2718afb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ead4716faf565b3555a994cda2e8363",
"/": "6ead4716faf565b3555a994cda2e8363",
"main.dart.js": "c74ff750de62cda2f1fa136d84c0588e",
"manifest.json": "d9757777f2857a499526103319ae9082",
"version.json": "f068dcf977cfd24e74300a9db387af72"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
