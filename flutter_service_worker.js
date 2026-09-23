'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "6230112084a385bf4c4ab4fdd412d61b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dea1227ef66f7d61569e87887cab287e",
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
".git/index": "0338a817e51de035a0cbe51207123170",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10656fd4057781f4b0d07d98dfcb10fe",
".git/logs/refs/heads/main": "24e5c27aa90bd55bdc6f7583080a90fc",
".git/logs/refs/remotes/origin/HEAD": "66ec652a0340d8b30abf52c858e9c6ec",
".git/logs/refs/remotes/origin/main": "52168b50326265444091c9ca5eff6592",
".git/objects/00/685e45177148adbbf6166be08d2c0d7c8c578a": "29b167f9d190be295c93251a39e74982",
".git/objects/00/84dded2b8d717b55b52a2d1140b2d9de4d7078": "86e0bbd9641a132da35abd2556b4a467",
".git/objects/04/382bf19fb17c942cfacd5f42d0c507ff1d069f": "794aeae27e23f928fd36f2503076447e",
".git/objects/04/9bf0cf3ff45047d3b003d08998aba2009c70f6": "695306500c37b57e00b6323a755cd15d",
".git/objects/04/c129d2cf9206d7f7c2d01676dc894f20f999d1": "6b0d6d12619fe7254e7470ee99b4e7a4",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/48ae557f0ff7ffa0f09f2d4eebf2b5bc8705a8": "e54a16efa04cb4dac23d5cb248546cb3",
".git/objects/0b/4d2335a9ed45589f73c4deb29c2fd9f193fc9b": "7442be4d366bfcaf7f02ab47abf13aa1",
".git/objects/0d/2330e42d047aa2d89f29d9b8f0a4f6229dbd07": "3c14c314108d56581ab0d49eca45fde7",
".git/objects/0f/5296de818f903b5b218d3763b5fc8d84198125": "c052b6d642eeed56de03a449cfdd24c1",
".git/objects/0f/76e634a0b165246cd34270746625d2c24c49a3": "8829f96bd9354cc2069393b1e67ad1f8",
".git/objects/0f/8d59562b552e644f0b5789711d39b1853d0621": "12751e5d925eb47be2036dde14a93e4d",
".git/objects/0f/be5b494419e8a31ec35675988bc3bf1504ad00": "0caf24fa78d7bc705b68651f8625b972",
".git/objects/11/38d3804d4a8176fe4c4487f1f78d2367c60e38": "6c4bf187559115ca9a70dca89db43bae",
".git/objects/11/6bdf754114253a793399ddf79f9e1611c9809e": "921ee43538bd1254d6408249cdb6664b",
".git/objects/11/96fb45e3b9687b18df609d37dc98ef0175985d": "c7e3fc81738e8f5f775daeef97ecc3cb",
".git/objects/15/caefc6115e89de9f0d96b9d72613e849743441": "ff0fe80e3004d14a23ebff9719204dea",
".git/objects/18/1657bad444c03ef6e338e0f4092b6f7a650bdf": "9293c967728e86e92539cebfc2a714cb",
".git/objects/1c/19efc1343e969f7b0d4dc51282fff0e8345d2b": "7debc69fcc3f9294d48e07c4c09e675b",
".git/objects/1c/4c59448b8b13720ab373e7b1ff8b0d25b7d8c5": "ee1bef6490b9d8775c29797413a1f063",
".git/objects/1d/6b3edf6c566d2a5898cd89c6dee4f6f29782d3": "d64980d3455f807934c80f2baeb35ca7",
".git/objects/1e/3f3529780dc387847c32845f45949674420283": "0a4441f5797d0d4ace714418f0e2becb",
".git/objects/22/3a8fcea9bcfa70aeb0d3888cf2982b4515b288": "67a022a2a1db08f952d5ea326630f04a",
".git/objects/25/63385d5b328d06f05078434183f7c1d617bfcd": "1acf364be095cfaef52d8a87d37cde50",
".git/objects/29/2a49b130313a4dda4dbebf4a3d427233ad7e6c": "8b8734ebf35778e9dcb9bf381419ffb9",
".git/objects/2b/ee81c431b1d59ad77540cf8dacb54b204a5fca": "8b72833dbeeeca98b78db0b8de46421d",
".git/objects/2f/a843c755a7a941e3442fcfb71e299b00bfb454": "d29e4407873f58899b219f1cb91e76da",
".git/objects/32/5cdbc94f7548645d0f8c24dfca52dde941abf9": "b93578909094e6b0eae7ae574aa3b1c8",
".git/objects/36/8c8d2d69cd105d4f68abb261bd2ba553857b7c": "f266071f83f06c0f2478cbd49b4dcbf8",
".git/objects/39/122a88eae5fc696a6185b020919a1db548aae4": "c6e5e82546b384af5110373403552ba8",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/b3dc87d226d6d9ec5b679933e52a0b5af9fe69": "0371140958353010a7e83493961c30d7",
".git/objects/3d/0b178391a413d3e70d2484b066a7772cb4ff63": "c7c9e4931b5aec46bbff246ae7c8b6df",
".git/objects/3d/9dfebd7b2c3b7e2d186d6bf2ae21f8da6a785c": "b6ed1e077844e5d736fd44b4c735784d",
".git/objects/3e/e1c01826ae7ec77e9c6a17e2b4c1f9aa13c654": "339ecc3565cad0b04e91355dad481027",
".git/objects/44/a217227216bd84ffac16614e9c9ca1ea51cdea": "2f7d46f1ed4a7d057ef49258036338ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e82a2ec00c51d5305c6effa3d71c62269d3ef2": "4133f1f481184388c6c86eeeede7c254",
".git/objects/4a/4edfbeb81b6dca5b78223d0217bc640bcd5b0a": "db9caa46f6baf463e03403ca827e38bb",
".git/objects/4a/c1c0a8f526d5b0391ad66cfb291a91ec067615": "c12b38d80d7b41b489a3907bb70eeaf6",
".git/objects/4b/a9b2e21cfb784ec876eb099825be253bb1089e": "5225c9de2058d2c912ad70db2b4658db",
".git/objects/4d/5909c063767fec6486f2445a8391d75913d376": "4c81857ddf893c60ed7ac1bf40285014",
".git/objects/4e/bca885215ad10dfeb33714dac63a762506c92f": "9de49d5c58885dce9c19587dd7ea5f2c",
".git/objects/4f/0133de0faee908e7d2b3112490be2ce20f911e": "3e78d8b7bee310131e86097b277c077a",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/1829f3fdbd0afeda3190dee3328605a45a9e1a": "5b6043d0cdcd77d04efdd6920476d7bc",
".git/objects/52/fdffa61c9f5789c73db9781ae80802f4170641": "b641901593f64513e1b72964241ee2b1",
".git/objects/53/0c2eb20831ddeb8718f233b164ace4ccc9f793": "91e87d785c7cd77a91363ad11bb0f278",
".git/objects/56/650ff51c7eb598597cc46837f57f93d4d44793": "d0f4a85a056a1f8f6ce16fb20d2b6e3f",
".git/objects/57/6580fd619d203a1d6bc021cc8b731d5e573539": "b48eb0be6a4198c17dc01686cf88c791",
".git/objects/58/007ff26b1f41648b9710d972ac46302077b9ac": "93e9b28af7ddfa3ffb5bf236a395d9f6",
".git/objects/59/e456fdab493a5c6234d094cc45bee6b559a85c": "a478e875b95ce123b654ac4b6125b1c9",
".git/objects/5b/f8dd53314de7689c270458b266256db92d4646": "5620d29aa679215e861bd36e1756ab8f",
".git/objects/5c/e20a6f1db727748c53ac3c42006327c439e52f": "f0da7ed4a2b1740ffc056e69e265240e",
".git/objects/5d/3ce263145f5667367bd1104a0f440a1a5236af": "dbd40c4c2b1852277d916f85fc9abc88",
".git/objects/61/a5ff337e8fa7c2f6a938dc6e5f52d1ffcf3718": "f187af8a9fb84113dba312a0211d3234",
".git/objects/64/6952c8f3cfc7a4b14d7d51db7c3bb92921ccb2": "71b291355c9c2e649163084aa34432a0",
".git/objects/66/e828451d4dbb29a5d0f577b0facddfcda62436": "c6562b8d510d5c7640e6895f607443a4",
".git/objects/66/f5796437ac6b7ccd4045b5f119d2b2867829ef": "b55798cdb94c493b29fe7588c7f948f9",
".git/objects/68/0b55a0d741943d9f2c575b70852f2d3242b095": "c650232f9f64e203f28082714b661d9f",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/b71065b8ee210256047aedec2ce211d1fef5bd": "7960a1c6ad0a34d0b65ca361ccad9784",
".git/objects/6b/52a45868c4578dccbe07c139cbbf3445a0f9da": "2e08a953ec387b905ee3a147b0777664",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/98a38057325ee533be107fa520869febc4aa1e": "d6db701494ddbb3cf0e5e30c16302535",
".git/objects/6d/4aaed4f45c924023230779c8e2c82d558ac8e6": "7c6077ef71d145610831167dc7893aba",
".git/objects/6d/a0fbc097de15c85dad8eef4b11ddc2be09d0ab": "599a4f0d0eb585e871bcec7c610fd7ff",
".git/objects/6f/60a220053f2b27d6a047c3a2599e33c4040a4b": "ecaf21cdce160daca0b133ad0e82f4f8",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/837540e027aba63d7ce0e42defef3185ccba48": "bdd83cb75900acf8344ed6819ede9d3c",
".git/objects/74/9824417ff33d5e7ce5a268d9b551f965b2e3f6": "58af9f23e3afe3a8575f388f836a0e77",
".git/objects/74/b3093406a5380f85cd14410840a95378a651b9": "72acbc3d1d19ad1e986d36d12a259c35",
".git/objects/74/d892aa756f03d150143ae3ff93d112e216081b": "70164464d257602021487cfa493a102c",
".git/objects/76/0ca4d2d7684188ca5877b309de7f3745f5264e": "fbf42d44f39c7d3762f5bf8b8acd4e79",
".git/objects/76/2bd2a225b011c94dbff7b0eb51feef09e683cb": "8a65bc5ef08474d5ab2b88d5dcedb23e",
".git/objects/76/8867971b3c3103ca968bd0997eedd24c290248": "b124a2448f81b758f66462b5f788ac51",
".git/objects/78/6d87eb67f6e3097876357915dc0c1efd520adf": "0c5dcf57b21e4821bd9c451fd7ee28fa",
".git/objects/78/d0d086eb4cd83aa0fb60571f5bc10cb57af989": "5db5724020433b1b60fc7dc375b47401",
".git/objects/7a/33be0de7764efb3bf966c547a6b9b3cb9a2b03": "ef807caaa6f03910b7f605fa901bcd17",
".git/objects/7a/960be6896818bda008898390b7a1721f8373c1": "91f0c57f0036b10af7fdce5a67aa04f7",
".git/objects/7b/cd546b368081a2e71ffb6cb8df6119bfb6a784": "a9044050da7f00eab269fbe7a673f9a0",
".git/objects/7c/2592043e09746c10add6e6326763e24dd64e99": "04868ce25e8b51428d1f5b20636a3804",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/7ee2483ab2b2e8058367d1229c120f099881c4": "3d1d64500be943dc445b070ff4615476",
".git/objects/7c/c78058969b304da37e7e3933c07a5b66a242d3": "ca13ed71ce3e1f2149aa2d01d966eea0",
".git/objects/7e/5f51c8d94c79cff3a42f7ad2d8d4632891c538": "04c86681d8e72c5b1192c6e57bd05f85",
".git/objects/7e/69bd859dbe318fdcdfe4499953ceaaa8adabf6": "1d1d1d45d81d4a243c5144c42d9478f9",
".git/objects/7f/029ac09bc8d30d79dffba19fe853279afc272b": "5416de4d305b77c13a5edc3d25b53d65",
".git/objects/80/57ea905f1055b2cb1f997946c8906fd1dcff3b": "0d67e087fa87910dbc742887ab7e6f57",
".git/objects/80/7b65d91b9ddb7998fef2e08a5c0ce0e44f7a8b": "e5b3958fb5b636520e2ff53999d0faeb",
".git/objects/82/540cb632eb8f91e6ab79e91cc4f00c98d2110d": "1c57c7ce96b45727e057898a77f75ca6",
".git/objects/82/c57c08dc2bf983ac93e04c912229690c558c09": "28717a075aa9f9f9a8a3256ec91d2ad8",
".git/objects/82/db1bf01a7915a09432bcf7badf418e45f24060": "a03fe731344fb8ce5d468b1050cd2d8d",
".git/objects/84/45daae6ae08ec4c281ea66f489137ebca05ef6": "4a1704ae72361ee4fd74dfd8d791d697",
".git/objects/84/d4e38d53a74ab64dfe94f2f4cb6734c00eed33": "dd8ec811bce6f278930d0fc170ddae3a",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/673f9c4ccd3b46b5ef0d0788708b57b5caeb71": "a02de0e2d916997bc3ec953da894d24a",
".git/objects/85/c7479f32f26709233d71ddfe7bf6c9d95a4a05": "6315171f7f57c6ee67221b17fdb03bf4",
".git/objects/86/aa5a70c6377f31728e1aa11defb143d4b5cc90": "b061fa5dc21e4e10c2ef09b7611f9002",
".git/objects/88/4c4f3747b0e6e253551f49afa998822c3e72ff": "78a9b961aa862b17541c5022dc371577",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1058d08c8915fa5f509796b8529f6df0fe86d0": "e84ed17bb4c50f3ba24bd16df10d40e4",
".git/objects/89/351786aaabdf33e3a77d621d5cbd96ccccd84b": "29efefb5e9bc3482839edf6cc6daad2b",
".git/objects/8a/11effc36a64e34e4a14037102762e07631ff1d": "39917ff04400182e8a80435cb1fd9a5e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/15911183c4f7eb79e7ebc1b540ec148a7eec51": "d80614fd435bc76b8029a6022b1fd630",
".git/objects/8d/92f72d27d6c2d2d61da44b1dce6c89be3e1897": "b7cf2b4fc0be4901988580863d513c8d",
".git/objects/8d/e07dd323a0aad9502eebbdd11bf802c02b4622": "d138705ec2f15b6c1430bbced4ae16ad",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/495def0d339d13b4afb4f5f06bee7ac8dc32ea": "b8d42e0b39567e53e5028f5e9ad14a06",
".git/objects/91/90b4b4d07a7e6431b3b3fa35823e6365bab9b0": "83ad5841ded6d62a2defee32077b5641",
".git/objects/92/8825d098bbbd625e224ee9b595f0785c4f39c5": "66ec20a20c79e2be1339c97f97a4b473",
".git/objects/92/dfbeb36289f77cabbe88bd04fbee7dcfe15138": "3c755f9b91b45454ceb4dbb861b44489",
".git/objects/93/8daac30f52ea88ee432885eb6c8c5b4ed171cd": "5349e09ea23c5a57ba2b8426c6f9cbea",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/0bd9dd6844fb68442d06953fdc458a3fed9102": "26bc676b49a46391d4175296669e31bb",
".git/objects/95/fed2619889e1dcd20234666ffc9ce0bdf4be3a": "d4f07d60bba23bdde1c87d525b989408",
".git/objects/96/946b6ca3173aa21d37ef9c88da51253fff11af": "9e38aa606de3ced4331cc71d3422928c",
".git/objects/99/aac45f34791bf7e10badd259b9b98112978ab8": "7c147ff9f68156b585357d052dc70c56",
".git/objects/9a/14a2cd7a56a70e8a9a029561d07f14a7938af3": "90d73188ce9a1aa5520fa976942ef88e",
".git/objects/9a/d3e2ddecd43a4e6af816e5b16678ef58ee4eec": "7d0abcce8c50f2cd623ef8e79ec7512d",
".git/objects/9b/cbf8a03388fccf0915ea588e3dd20fec46fde2": "55da8b0b0d9ef8a000b72ad28abc370e",
".git/objects/9b/fd6813a9966cdd96bfe0dfbf9e97e57176cf1a": "a7cd71fd6da157f140a660932f363ff3",
".git/objects/9e/9ac7d76cac65e59c4c060bf74c66af2bd24de6": "12f0c0056074c42f53fa451486acee72",
".git/objects/a0/d706531ca07ffe44f2375345d1c2cc716621fe": "a8d36dc12cd4b06d61e59c42fce0c362",
".git/objects/a2/9af60d6d83e158334af04479b5135419823cb5": "d3e1efb744b260627759f11ebbeea4f5",
".git/objects/a3/a4a2046c72bfd45a22a959484da66c9acb6984": "8b5646cc108a9bc685b0eb1a2025535c",
".git/objects/a4/02c26b505fb83fccf5b2e5c882c02a686870ff": "5f5bdf73edab44f4e9f3d2eb5c9fb58f",
".git/objects/a4/2a90ad740e217ab86697be99d034ba9a5437e8": "e7edcae09985d8aba7ab68eefbfbba94",
".git/objects/a4/dd4c51fc962b12e4752d3b6255409d52dce251": "4e743d6b4a0d653249159fad373f56ae",
".git/objects/a6/ef0d08d87fe544730be57d6afbb4d279e75e79": "27beeddda770a3fea2430c857f97dbc3",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/b4976cc54f2897c69be3f60e3f5b3d969777d8": "40db2b9a26cf184b6533ec0bca4c9b75",
".git/objects/a8/b961fde2ae6c6720761da3a4ddcaee0b32ce7c": "bfc0a751ea121af64c1a83e22e0f05d6",
".git/objects/aa/3f477e83408d0079978a3ddec041a10ad92104": "896b284c95018c7bc5c12e7075e65a73",
".git/objects/ad/9d8b1fa9882eb0ff7a8d7cba71969e1e371b60": "782a3bb471721864f1445aa2325818d5",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/fc6af58a2a11bc630569babc7d4a031587c5b0": "704cea368811547fb9db02c4e738fa07",
".git/objects/ae/1245c978ded52c8d50b9350b208b6b7e0262b7": "47e649df0ca608226c3f4e9e3d88990f",
".git/objects/ae/33b7fbc54b7a5b7f34f3a521acc97da5684bfd": "b9e972dd21a8ea175c4cc61776b9c448",
".git/objects/af/806af9d0d424d6c0f966a6ab54bb2a2a582e70": "5a90232aa115ba272bea834b9a157ab4",
".git/objects/af/f55c4b8d442116c0bd6d603d45132844d33a92": "34c26fd4516bc00d547bdaa924d71f90",
".git/objects/b0/2e0c3ba22863a729b14b6b56fb503d527e9b4e": "7b6ea4c9488f83fb1732905c34d2d99a",
".git/objects/b0/bc866e4724d37350827233f2d8b89d3bc61c53": "e02706d2479fbeac25ee7ef1bbdc51af",
".git/objects/b2/af5125fc1b1e3a1f8c47c7cb08e34edb642e83": "4d123176fa2bb049035ea4c733975bfc",
".git/objects/b3/b5459fcc393e5cff3c80db6f27e5a18c8f1bde": "1934075bb8df57f7bb2253079ab7263f",
".git/objects/b5/4238b3975329f5c40b3386e7536db89457b974": "b899031632535954829dcfe8f0c6e68f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/47e5ed7996769d77ba61dedec31fdd9bcf1568": "d383a0317c9cfe8c8d13ed1ff1b44d87",
".git/objects/bb/69451540136c8b7c7d5133371ba0172dd99308": "aeb8d53df75d6a9ab4b879fcbfc16fcf",
".git/objects/bb/ed54db6c66df490d90d0fd335a43491aac3c93": "8587d080beeeaefa8f5ceecd7e549bcd",
".git/objects/bc/93f8922a7c08aab82f2276d3b15236010756d2": "f71f1a9160bb26c0b9c537e79df6f47b",
".git/objects/bd/e6f07e28d4475cfd586139884a75fa208bb000": "652bf49e46b238523e2d97844d181383",
".git/objects/be/a4bb6dc76428ed3b28fe316059a0c41dbe8808": "2e72b5707a2b9dd4fdc36f3c45c51d44",
".git/objects/be/ab7a1afabe59984c51be030476f79252b58d9b": "10f717649ef634f0afdeff86a0b383c0",
".git/objects/be/e7c4d1f26b4c936a8e0d589e09e69b5668e177": "99d7d1e57ace3205e5f6426f0d628906",
".git/objects/c0/5f5ba94ee0c86b7f0196cfa4cf6637e904446b": "a53ae8cd961b963986662997aee310d9",
".git/objects/c0/803a551aea8536ed55aabee1d1b32be5b51a88": "f71c69534fd936d6dc06502659911bba",
".git/objects/c1/bae62a7e8936b35abf795943944dca311572a9": "572afb757817531ae4193f18fda0830b",
".git/objects/c2/f39c0d937efca5376eb082a921bf9e0ac1951d": "53945e3a16270076b3bee32ddba8b7ea",
".git/objects/c3/8dac68918a1f1f4d1719231bb77ce46fbc9e28": "023a0489bf8140cc5656f67142ead344",
".git/objects/c4/681a99195cd6e4bf869c939e51f08e39b1fa69": "13435d14b3dc956456edd07d5ffa53c9",
".git/objects/c6/58cd5a88f08898cee884149005dbad9be3616b": "c09790921e375fcc5e44344339a90c1a",
".git/objects/c7/3aa923344c6be0a09281fcee28e4d80640bf3f": "341246bb3d8d23ccfe7ca2de99469ecf",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/4fa63cc889f5b11b32ab58dd62018961540387": "9e1c73953422a8d9fe21f2c8ac9e873c",
".git/objects/c9/17949da00ea8a221f99a27e5058e0a7fd3dacb": "abddfef5a7fd691d8a0b135cbb6b9937",
".git/objects/cd/c1a43c98decab3ad0f4886e65a8763cef75e2f": "131f61269ea0feaccfe0ca80760343de",
".git/objects/cd/d76685bd7c747a3654755826fc90bc6562f90d": "408377695e9159422d389778b556116f",
".git/objects/ce/2984d502e291c5c142af55d1f611009396ccca": "d65de9c8bd68595d7f32aac31d257a6a",
".git/objects/d0/c8869c6741b0d65485007767fae0e675a2fa86": "99bfc6bc80e57c67cda517aca16f6170",
".git/objects/d1/f09c5660f45c94e3efc3bdbd7f224987f83c17": "ba095097b84ac3bf66f1b59d0b6ee26d",
".git/objects/d2/48d1984275b53aa450dbf48468462e28b26c91": "523997e5150e2139971d8e84f6b384ee",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/ef62dfa4882c348b512addf913c34538765abe": "0546adb6cee51e72598caa5a52779225",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9cea2d3c6d0483e76bb86eeb0f61e92fe44f89": "2d3047aaf0a78dbc45e3941baf09216d",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/27597a81842fefdc67edab756588391262c3da": "4ef1090a09218eb54c20e940b195065c",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/d1bac95ca3dd1674fa930b32158433d36771d0": "770ae460fa5c1f9de2c3d696be96c19a",
".git/objects/da/c997f194da59e4a2b9c825c02655aac6a2c5e2": "ba0505c34366c1a5a6b353476e0d7f67",
".git/objects/db/0d2fc959c9676c9cb07e4db7b3326e5745e15e": "4e19fb27d3ff52ddb8d1bd6b1ccd6ce2",
".git/objects/db/e942873731f19f71be9f5ebeb8f4884ba15052": "b8c1709ae53122819e022c831e7ed85f",
".git/objects/dc/93f1e3ee73a5a9fb71f72f0c0737a0ffa2a627": "fe4e2a109b7a17cef7c2fb1bbf84161a",
".git/objects/dd/2fd632486fae85d4633e3ca21d124938193f89": "40a163949bae46aa6ea424e5ba14a8d1",
".git/objects/df/6001bcc963d84e9a9aaad00dc0a97bb299f20f": "cb703fef85fcb4e830aafbc5b48133d0",
".git/objects/df/a04b0408611c9200879d6adfa5011fe3afa241": "7f3b1c039cf6d46cd54df8d732eff6c3",
".git/objects/e0/46313dcb56a7171ee4f429e35d6f689e3f9c2c": "ebe20d7dd82124716472cbb2f09d1567",
".git/objects/e2/c2c61df3503aae8bea6f99192a528cfd27e40b": "31837ed3f7cccbef6dd93b74f37637f2",
".git/objects/e4/067764a444acababf470c33f8aa67e0af460c4": "edd5247116b63caf0ca96f20d525a45e",
".git/objects/e5/d2487729888e36107e4132cba359362a11e6ad": "01b1a4ec30c5112e8daf2de4e9023218",
".git/objects/e5/f4b36ad7730c5d24ccd649ec59fefe1491e050": "cf3fa36b23096b8c7707993deec325d8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/3f507615497db8a38607857a021db1f5aa2307": "32c83d98783b802ea9a7e15e77b69d87",
".git/objects/ee/1a8b54da46da8a656325b0199b0ca23e5135b2": "d9c2a754b9f47f81715d360013950743",
".git/objects/f1/fd4dbe00ec5b077d3f9ebeca7832a7408c67b4": "b963a1644ec6c4d2f372f79598a10c0d",
".git/objects/f2/722331e3e4777acd3f14db64142428e0cfd6a0": "91e3847d781d9dc1f7d4d183687d9df0",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/87a9fd4c39f5a143b66966f3f401b03de92a7c": "e14c92b63f8aa53f1cabd7408a6f4496",
".git/objects/f7/e7c3de67ea45de1108727aef2474540005d076": "8e5854c1470467b874c6448a44e2f011",
".git/objects/f9/532341d3f6a114cc4ff126c1688db62da7a96c": "a9b2b956d86d04cf84a6eeebf43a14e4",
".git/objects/f9/72cb3da528093d1a37b5e2d80db3379416ad9c": "73ebffa50ea790759298997cbe000897",
".git/objects/f9/c80073b2f5f8446f6bf18bd52a850f1d6c10b0": "780d8f312e04415359c0d973741ad322",
".git/objects/fa/572571ca659a901c162bdd41a3586a07efa04b": "47c4ce135d2a16118d09dbc480f56689",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/925ff45d3d92c426e51512ccc3e2c43d8f5370": "419e82caa7cca2f8424f20e1ea800f9a",
".git/objects/pack/pack-56f1ca5f8fe5c1fb40f6eb02132534a312d00f76.idx": "b22b84a6e91f9c8e440bb3b457d09998",
".git/objects/pack/pack-56f1ca5f8fe5c1fb40f6eb02132534a312d00f76.pack": "da367d3ab970bc69ae0bcf1fc331a494",
".git/objects/pack/pack-56f1ca5f8fe5c1fb40f6eb02132534a312d00f76.rev": "7e8f4463c21bb14fd9c5e7a96e20d036",
".git/objects/pack/pack-c8395d8e1b3cc2b3ac37863973114fa0da850f67.idx": "9e54fcb500ba56188604c2e9e2c9da9d",
".git/objects/pack/pack-c8395d8e1b3cc2b3ac37863973114fa0da850f67.pack": "61a1e9b0f6937560d9c0b3647d851a99",
".git/objects/pack/pack-c8395d8e1b3cc2b3ac37863973114fa0da850f67.rev": "884208727c1644f1c516c869f2ee408e",
".git/ORIG_HEAD": "416ef8301fc96f4941387219f9ab7b2a",
".git/refs/heads/main": "2770847cf60d1e5abcd1a6695b0d80f9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2770847cf60d1e5abcd1a6695b0d80f9",
".vscode/launch.json": "06d2faae2d0e25568a2d6f013c5bf1b7",
".vscode/settings.json": "6cd5e3ac725b8517fbe63a49a8dc362b",
"assets/AssetManifest.bin": "2a34f1940a877f5c266e8e69b5bfa465",
"assets/AssetManifest.bin.json": "eaca27bf3e49a1ba45638aeeeea622c2",
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
"assets/assets/images/CTC-BAL-008.jpg": "7aa875f6e280d3856a2dc6612728e5fa",
"assets/assets/images/HESBA01.JPG": "af1118bd5cdda1ad34451b2020777fa8",
"assets/assets/images/HESBA02.JPG": "9acf7031f751d11f55e68b5b506ef12f",
"assets/assets/images/HESBA03.JPG": "1948143267b5ebf0073e56f690642f70",
"assets/assets/images/HESBA04.JPG": "76fc642815cef24a65ef5dfd0399d8e0",
"assets/assets/images/HESFF01.jpg": "3be2720b60134400b85bba96d29d4287",
"assets/assets/images/IC-8100EX.png": "08df040ace6f62ae8b784d58bfa132d6",
"assets/assets/images/ICP-HES.png": "efbbc7c61bdb4e5cdc2206419d604457",
"assets/assets/images/ICP-iCAP-Pro.png": "fb47730a0949b4b41caeec9c9c56809d",
"assets/assets/images/ICP.png": "dd6e6eb6f19bc396bbdbaa1d66bdab5f",
"assets/assets/images/ICS-2000.png": "0ce28a02191de1feff8e2f337d21d04d",
"assets/assets/images/ICS-2100.png": "168af883209326fdb742bed5925029b9",
"assets/assets/images/ISO-BAL-002.jpg": "c5e8845720ab8510d5717334f81b044f",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/TOC-HES.png": "93f2c144f8ce6a0fe2a856977993fc68",
"assets/assets/images/TOC.png": "6c352744c8282ed19cbd09f743171295",
"assets/assets/images/UV-BP.png": "e2b629f63165fe51256d6f4e88cfb70b",
"assets/assets/images/UV-HES.png": "c069376a7d081939c36d000a0c164517",
"assets/assets/images/XRF.png": "8487379b5430318032ba6fe501fdb6c5",
"assets/assets/images/XRFPrimussII.png": "a73e204a279a9e01d68ae3401ebcc727",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f89cd5354a29687d6fee3e49d669e339",
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
"canvaskit/experimental_webparagraph/canvaskit.js": "d5ae693ff16b04b96e5cc853f56f0798",
"canvaskit/experimental_webparagraph/canvaskit.js.symbols": "6185bba61ca49e58eda00ed356b1d378",
"canvaskit/experimental_webparagraph/canvaskit.wasm": "e008e87c245b0718932b34e9a15be803",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/webparagraph/canvaskit.js": "5e5e4fb27c4333aa2924e9dcd2f66333",
"canvaskit/webparagraph/canvaskit.js.symbols": "4ad59e119a5de2977a4f7538062f47ef",
"canvaskit/webparagraph/canvaskit.wasm": "8cecf3b9c2e8270502de9138a21d4e8f",
"canvaskit/wimp.js": "6d8714f96a4bdb92e43e85467ef7451c",
"canvaskit/wimp.js.symbols": "c6d1920b3b6714201ef8c901ec8b8e38",
"canvaskit/wimp.wasm": "9173d3df97ed517649085f35f64592bf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "00da19b2ca5fb426822d799313e5ba1c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4756ab27eae39a34315b77f30869ed95",
"/": "4756ab27eae39a34315b77f30869ed95",
"main.dart.js": "01c9d7afa263c8110250a25e88dcc8a0",
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
