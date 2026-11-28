/* =========================================================
   语法点详解：键与 french-data.js 的 id 一致（级别#序号）
   d 讲解 / f 形式或结构要点（可省） / e 例句 [法语, 中文] / t 易错点
   改清单条目顺序会让 id 错位，动 FR_GRAM 时要同步这里。
   ========================================================= */
const FR_NOTES = {};

Object.assign(FR_NOTES, {
"A1#0": { d: "法语名词都有语法性别，阴阳性本身不表示生理性别。判断靠三样：词尾、词义、以及记单词时一起记的冠词。复数一般在单数后加 -s。",
  f: "常见阳性词尾：-age、-ment、-oir、-isme、-eau；常见阴性词尾：-tion、-sion、-té、-ure、-ette、-ance。",
  e: [["un livre, une table, des livres", "一本书、一张桌子、一些书"], ["le journal → les journaux", "报纸（复数）"]],
  t: "记名词一定连冠词一起背：不说 livre，说 un livre。性别记错，后面所有冠词、形容词都会跟着错。" },

"A1#1": { d: "不定冠词指「不确定的一个/一些」，第一次提到、或对方不知道具体是哪个时用。",
  f: "阳性 un，阴性 une，复数 des；des 在元音前也不变。",
  e: [["J'ai un chat et une tortue.", "我有一只猫和一只乌龟。"], ["Ce sont des amis.", "这是一些朋友。"]],
  t: "否定句里不定冠词要变 de：Je n'ai pas de chat。这条规则 A1 就会考。" },

"A1#2": { d: "定冠词指「确定的、双方都知道的」，也用于表示整类事物的泛指。",
  f: "le / la / les；元音或哑音 h 前省音为 l'；与 à、de 连用时缩合（au、aux、du、des）。",
  e: [["Le café est chaud.", "咖啡是热的。"], ["L'école est loin d'ici.", "学校离这儿很远。"]],
  t: "表示「一类东西」也用定冠词：J'aime le jazz（我喜欢爵士乐），不能说 J'aime jazz。" },

"A1#3": { d: "être 后面接职业、国籍、身份时，一般不加冠词，因为这时是在说明属性而不是指某一个具体的人。",
  f: "Il est + 职业/国籍（无冠词）；C'est + un/une + 职业（有冠词）。",
  e: [["Il est médecin. Elle est française.", "他是医生，她是法国人。"], ["C'est un médecin très connu.", "这是一位很有名的医生。"]],
  t: "职业名词带形容词修饰时冠词回来：C'est un bon professeur。作家艺术家常保留冠词：Il est écrivain 但 un écrivain célèbre。" },

"A1#4": { d: "介词 à、de 遇到定冠词 le、les 必须合并成一个词，不能分开写。",
  f: "à + le = au，à + les = aux；de + le = du，de + les = des；à la、de la、à l'、de l' 不缩合。",
  e: [["Je vais au marché, je reviens du bureau.", "我去市场，我从办公室回来。"], ["Je parle aux étudiants.", "我跟学生们说话。"]],
  t: "à le、de les 是硬错，一眼就能看出没学过语法。写成 au、des 即可。" },

"A1#5": { d: "主语代词标识谁在做动作。法语动词变位已经包含人称信息，但代词仍然不能省略。",
  f: "je, tu, il/elle/on, nous, vous, ils/elles。vous 既可表复数「你们」，也可表单数敬称「您」。",
  e: [["Nous habitons à Paris.", "我们住在巴黎。"], ["Ils travaillent ensemble.", "他们一起工作。"]],
  t: "on 形式上按第三人称单数变位，口语中常代替 nous：On y va（我们走吧）。" },

"A1#6": { d: "重读代词用于强调、单独回答、介词之后，以及 c'est 之后。它不能直接作动词主语。",
  f: "moi, toi, lui, elle, nous, vous, eux, elles。",
  e: [["Moi, je préfère le thé.", "我嘛，我更喜欢茶。"], ["C'est pour lui.", "这是给他的。"]],
  t: "介词后只能用重读形：avec moi、chez eux；写 avec je 是错的。" },

"A1#7": { d: "形容词要和它修饰的名词在阴阳性、单复数上保持一致，这是法语最基础的配合规则。",
  f: "一般阴性 +e，复数 +s；以 -e 结尾的阳性形容词，阴性不再加 e；以 -eux/-f 结尾有特殊变化（heureux→heureuse, neuf→neuve）。",
  e: [["une robe rouge / des robes rouges", "一条红裙子／几条红裙子"], ["un étudiant sérieux / une étudiante sérieuse", "认真的男学生／女学生"]],
  t: "形容词修饰多个不同性别的名词时，用阳性复数：un livre et une revue intéressants。" },

"A1#8": { d: "法语形容词多数放在名词后面，只有一小批高频短形容词放在前面。",
  f: "前置：beau, joli, jeune, vieux, petit, grand, gros, bon, mauvais, premier, dernier, nouveau。其余（颜色、国籍、形状、分词）后置。",
  e: [["un petit appartement", "一套小公寓"], ["une voiture ancienne", "一辆旧车"]],
  t: "少数词前后位置改变意思：un grand homme（伟人）/ un homme grand（高个子）；un ancien professeur（前任教师）/ un professeur ancien（老教师）。" },

"A1#9": { d: "复数词尾有几类固定变化，规则之外还有少量例外，需要在记词时一起记。",
  f: "-al → -aux；-eau/-au/-eu 加 -x；-s/-x/-z 结尾不变；-ail 少数变 -aux（travail→travaux）。",
  e: [["un cheval → des chevaux", "马"], ["un gâteau → des gâteaux ; un nez → des nez", "蛋糕；鼻子（不变）"]],
  t: "例外：festival→festivals、bal→bals、carnaval→carnavals 只加 -s。复合名词的复数看主干：un arc-en-ciel → des arcs-en-ciel。" },

"A1#10": { d: "法语数字 0–69 按十进位，70 以后改用二十进位制，这是初学最容易卡住的地方。",
  f: "70 = soixante-dix（60+10）；80 = quatre-vingts（4×20）；90 = quatre-vingt-dix；序数 = 数字 + -ième（cinq→cinquième）。",
  e: [["soixante-dix, quatre-vingt-un, quatre-vingt-dix", "70、81、90"], ["le premier, le deuxième, le dixième", "第一、第二、第十"]],
  t: "quatre-vingts 后面还有数字时丢 s：quatre-vingt-un。premier 有阴性 première。" },

"A1#11": { d: "第一组动词占法语动词九成，规则最齐：去掉 -er，按人称加词尾。",
  f: "-e, -es, -e, -ons, -ez, -ent。三个单数形式和第三人称复数读音相同（parle/parlent 都读 [paʁl]）。",
  e: [["je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent", "parler 全套变位"], ["Nous mangeons à midi.", "我们中午吃饭。"]],
  t: "manger 的 nous 形式保留 e（nous mangeons），commencer 类似（commençons），否则读音会变。" },

"A1#12": { d: "être 和 avoir 是最不规则的动词，也是最常用的：既是实义动词，又是所有复合时态的助动词。",
  f: "être: je suis, tu es, il est, nous sommes, vous êtes, ils sont。avoir: j'ai, tu as, il a, nous avons, vous avez, ils ont。",
  e: [["Je suis étudiant et j'ai vingt ans.", "我是学生，二十岁。"], ["Vous êtes prêts ?", "你们准备好了吗？"]],
  t: "年龄用 avoir：J'ai 20 ans。说 Je suis 20 ans 是从英语直译过来的错。" },

"A1#13": { d: "最基础的否定框架：ne 在动词前，pas 在动词后，两者夹住变位动词。",
  f: "ne + 动词 + pas；元音前 ne → n'；复合时态：ne + 助动词 + pas + 过去分词。",
  e: [["Je ne fume pas.", "我不抽烟。"], ["Il n'a pas compris.", "他没听懂。"]],
  t: "口语常省略 ne（Je fume pas），书面语和考试必须写全。" },

"A1#14": { d: "法语提问有三种方式，语域不同：语调最口语，est-ce que 最通用，倒装最正式。",
  f: "陈述句升调 / Est-ce que + 陈述句 / 动词-主语倒装。疑问词可放在三种结构前面。",
  e: [["Tu viens ? / Est-ce que tu viens ? / Viens-tu ?", "你来吗？（三种说法）"], ["Où est-ce que tu habites ?", "你住哪儿？"]],
  t: "倒装时第三人称单数动词若以元音结尾，要加 -t-：Vient-il ? A-t-il ? Va-t-elle ?" },

"A1#15": { d: "il y a 是固定的存在句式，相当于「有、存在」，主语永远是 il。",
  f: "il y a + 名词（可带数量、冠词）；否定 il n'y a pas de + 名词；过去 il y a eu；将来 il y aura。",
  e: [["Il y a un parc près d'ici.", "这附近有个公园。"], ["Il n'y a pas de place.", "没有位置了。"]],
  t: "否定后名词前的冠词变 de；不能说 il a un parc。" },

"A1#16": { d: "疑问词分三类：问人、问物、问情况。它们可以单独用，也可以接 est-ce que 或倒装。",
  f: "qui（谁）、que / qu'est-ce que（什么）、où（哪里）、quand（何时）、comment（怎样）、combien（多少）、pourquoi（为什么）。",
  e: [["Où habites-tu ? Combien ça coûte ?", "你住哪？多少钱？"], ["Pourquoi tu ris ?", "你为什么笑？"]],
  t: "que 在元音前省音：Qu'est-ce que c'est ? 问人用 qui，问物用 que，别混。" },

"A1#17": { d: "命令式用来下指令、给建议、提请求，只有 tu / nous / vous 三个人称，不出现主语代词。",
  f: "用现在时去掉主语；-er 动词的 tu 形式去掉词尾 -s（parle, va, prends 例外保留）。",
  e: [["Écoutez ! Allons-y !", "听！我们走吧！"], ["Parle plus lentement.", "说慢一点。"]],
  t: "肯定命令式里代词后置并用连字符：Donne-le-moi；否定时回到动词前：Ne me le donne pas。" },

"A1#18": { d: "aller 的现在时 + 不定式，表示即将发生或近期计划，比简单将来时更口语。",
  f: "aller（变位）+ 动词不定式；否定、代词都加在 aller 上。",
  e: [["Je vais partir demain matin.", "我明天早上就走。"], ["Il va pleuvoir.", "要下雨了。"]],
  t: "别把 aller 的不定式写成过去式：Je vais partir（我将要走），不是 Je vais parti。" },

"A1#19": { d: "venir de + 不定式，表示动作刚刚完成，相当于英语 just。",
  f: "venir（现在时）+ de + 不定式；de 在元音前省音成 d'。",
  e: [["Il vient d'arriver.", "他刚到。"], ["Je viens de finir.", "我刚做完。"]],
  t: "venir de 只能是现在时表「刚刚」；过去时 venait de 表示「当时刚刚」。" },

"A1#20": { d: "代词式动词带一个与主语同指的代词，表示动作反身、相互或被动。",
  f: "me / te / se / nous / vous / se + 动词；元音前省音（je m'appelle）。",
  e: [["Je me lève à sept heures.", "我七点起床。"], ["Elle s'appelle Marie.", "她叫玛丽。"]],
  t: "否定时 ne 在代词前：Je ne me lève pas tôt。代词永远紧贴动词，不能分开。" },

"A1#21": { d: "三个最常用的情态动词，后面直接接不定式，表达意愿、能力、义务。",
  f: "vouloir: veux/veux/veut/voulons/voulez/veulent；pouvoir: peux/peux/peut/pouvons/pouvez/peuvent；devoir: dois/dois/doit/devons/devez/doivent。",
  e: [["Je veux / je peux / je dois partir.", "我想／能／必须走。"], ["Tu peux m'aider ?", "你能帮我吗？"]],
  t: "礼貌请求用条件式：Je voudrais、Pourriez-vous；直陈式 Je veux 听起来生硬。" },

"A1#22": { d: "quel 是疑问形容词，要和后面的名词保持性数一致，问「哪一个、什么样的」。",
  f: "quel（阳单）/ quelle（阴单）/ quels（阳复）/ quelles（阴复）+ 名词。",
  e: [["Quelle heure est-il ?", "几点了？"], ["Quels livres préfères-tu ?", "你更喜欢哪些书？"]],
  t: "它也用于感叹：Quel beau temps ! Quelle chance ! 注意此时不疑问。" },

"A1#23": { d: "时间表达分两块：钟点用 il est，日期用序数词 + 月份，两者都不需要介词。",
  f: "Il est + 数字 + heure(s) + et quart / et demie / moins le quart；日期：le + 序数 + 月份；星期前加 le 表每周。",
  e: [["Il est trois heures et quart.", "三点一刻。"], ["le lundi 3 mars", "3 月 3 日星期一"]],
  t: "midi（正午）和 minuit（午夜）不加 heure；月份名首字母小写。" },

"A1#24": { d: "天气有固定句式，最常用的是 il fait + 形容词/名词，下雨下雪另有动词。",
  f: "il fait beau / froid / chaud / 20 degrés；il pleut、il neige、il y a du vent、il y a du soleil。",
  e: [["Il fait beau. Il fait froid.", "天气好。天冷。"], ["Il pleut depuis ce matin.", "从早上就下雨。"]],
  t: "「天气」的名词是 le temps，但问天气说 Quel temps fait-il ?，不是 Quel temps est-il ?" },

"A1#25": { d: "à 表去向和位置，de 表来源和所属；两者与定冠词缩合，但城市名前不加冠词。",
  f: "à + 地点（方向/位置）；de + 地点（来源）；城市：à Paris / de Paris；国家：au Canada / du Canada。",
  e: [["Je vais à la gare, je rentre de Paris.", "我去车站，我从巴黎回来。"], ["le livre de Marie", "玛丽的书"]],
  t: "所属也可以用 à：le livre à Marie（口语，指属于玛丽的那本）；标准书面用 de。" },

"A1#26": { d: "表示数量的副词短语后面接名词时，中间只能放 de，不能再放冠词。",
  f: "beaucoup de, un peu de, trop de, assez de, peu de, combien de + 名词（不加冠词）。",
  e: [["beaucoup de monde, un peu de sucre", "很多人、一点糖"], ["J'ai trop de travail.", "我工作太多。"]],
  t: "例外：bien des gens、la plupart des étudiants 用 des，因为这里 des 是「…之中的」。" },

"A1#27": { d: "主有形容词表示「我的/你的/他的」，它跟被修饰的名词的性数走，不跟拥有者的性别走。",
  f: "mon/ma/mes、ton/ta/tes、son/sa/ses、notre/nos、votre/vos、leur/leurs。",
  e: [["mon frère, ma sœur, mes parents", "我哥哥、我姐姐、我父母"], ["Il aime sa mère.", "他爱他的母亲。"]],
  t: "阴性单数名词以元音或哑音 h 开头时，用 mon/ton/son 避免元音相撞：mon amie、son école。" }
});

Object.assign(FR_NOTES, {
"A2#0": { d: "复合过去时表示已经完成的过去动作，由助动词 avoir/être 的现在时 + 过去分词构成。大部分动词用 avoir。",
  f: "avoir 现在时 + 过去分词；-er → -é，-ir → -i，-re → -u；不规则要单独记（fait, pris, venu, eu, été）。",
  e: [["J'ai mangé à midi.", "我中午吃了饭。"], ["Nous avons fini hier.", "我们昨天做完了。"]],
  t: "avoir 和 être 本身的过去分词是 eu 和 été：j'ai eu、j'ai été，不是 j'ai eu eu。" },

"A2#1": { d: "一小批表示移动和状态变化的动词用 être 作助动词，这时过去分词要和主语性数配合。",
  f: "常用 être 的动词：aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner 及其派生。",
  e: [["Elle est partie.", "她走了。"], ["Ils sont arrivés tard.", "他们到得晚。"]],
  t: "代词式动词几乎全部用 être：Elle s'est levée。配合规则看代词是直接还是间接宾语。" },

"A2#2": { d: "用 avoir 作助动词时，过去分词平时不配合；但如果直接宾语出现在动词前面，就要和它配合。",
  f: "前置直接宾语包括：COD 代词（le/la/les）、关系代词 que、疑问词 combien de…。",
  e: [["Les lettres que j'ai écrites.", "我写的那几封信。（que 指 lettres，前置，配合）"], ["J'ai écrit les lettres.", "我写了那些信。（宾语在后，不配合）"]],
  t: "间接宾语不配合：Je leur ai parlé（parlé 不变，因为 leur 是间接宾语）。" },

"A2#3": { d: "未完成过去时表示过去的持续状态、习惯性动作或背景，不强调动作完成。",
  f: "以 nous 现在时去掉 -ons 加 -ais, -ais, -ait, -ions, -iez, -aient；être 唯一不规则（ét-）。",
  e: [["Quand j'étais petit, je jouais dehors.", "我小时候常在户外玩。"], ["Il pleuvait, la rue était vide.", "当时下着雨，街上空无一人。"]],
  t: "表示「过去正在…」时用 imparfait，不能用复合过去时：Il pleuvait（当时在下雨）。" },

"A2#4": { d: "两个过去时分工：复合过去时讲「发生了什么」（事件、完成），未完成过去时讲「当时是什么样」（背景、习惯）。",
  f: "叙事骨架用 PC，环境描写用 imparfait；两者常在同一句里交替。",
  e: [["Il lisait quand le téléphone a sonné.", "电话响的时候他正在看书。"], ["Hier, je suis allé au cinéma ; il faisait beau.", "昨天我去了电影院；天气很好。"]],
  t: "重复次数明确的动作用 PC：Je suis allé trois fois；不确定次数的习惯用 imparfait。" },

"A2#5": { d: "简单将来时表示将来会发生的事，比最近将来时更书面、更确定。",
  f: "不定式 + -ai, -as, -a, -ons, -ez, -ont；-re 动词去掉 e（prendre→prendr-）；大量不规则词干：ser-, aur-, ir-, fer-, viendr-, pourr-, voudr-, saur-。",
  e: [["Nous partirons demain.", "我们明天出发。"], ["Il fera beau ce week-end.", "周末天气会好。"]],
  t: "将来时词干常和条件式相同，只是词尾不同：je serai / je serais。" },

"A2#6": { d: "条件式现在时有两个主要用途：礼貌请求，以及在假设句里表示「如果…就会…」。",
  f: "将来时词干 + imparfait 词尾（-ais, -ais, -ait, -ions, -iez, -aient）。",
  e: [["Je voudrais un café, s'il vous plaît.", "我想要一杯咖啡。"], ["Si j'avais de l'argent, je voyagerais.", "如果我有钱，我就去旅行。"]],
  t: "注意别和将来时混：je serai（我将是）／je serais（我将会是，条件）。" },

"A2#7": { d: "真实条件句第一式：条件用现在时，结果用将来时。表示「如果…就（会）…」，条件有可能实现。",
  f: "Si + 现在时，主句用现在时/将来时/命令式。si 后面永远不用将来时。",
  e: [["Si tu viens, nous sortirons.", "如果你来，我们就出去。"], ["S'il pleut, on reste à la maison.", "如果下雨，我们就待在家。"]],
  t: "Si 从句里绝不能出现将来时：Si tu viendras 是典型错误，要用 Si tu viens。" },

"A2#8": { d: "y 代替「à / dans / sur + 非人名词」或一个地点，避免重复。",
  f: "位置在动词前（肯定命令式在动词后：Vas-y）。可代替 à cela、à cette chose、dans ce lieu。",
  e: [["J'y vais.", "我去那儿。"], ["J'y pense souvent.", "我常想起这件事。"]],
  t: "指人时一般不用 y，用 à lui / à elle：Je pense à elle（不是 J'y pense）。" },

"A2#9": { d: "en 代替「de + 名词」或带数量的名词短语，也可代替部分冠词引导的食物。",
  f: "位置同 y，在动词前；数量词或数字要留在句末：J'en ai deux。",
  e: [["Tu as des timbres ? J'en ai deux.", "你有邮票吗？我有两张。"], ["Je bois du café → J'en bois.", "我喝咖啡 → 我喝（它）。"]],
  t: "身体部位、数量表达里 en 很常用：J'en ai assez（我够了）。" },

"A2#10": { d: "直接宾语代词代替前面提到的直接宾语（人、物都可），位置在动词前。",
  f: "le（阳单）/ la（阴单）/ les（复数）；复合时态时放在助动词前，过去分词要配合。",
  e: [["Ce film, je l'ai déjà vu.", "这电影我已经看过了。"], ["Tu les as prises ?", "你把它们（阴复）拿了吗？"]],
  t: "代词在助动词前时，过去分词按它配合：Les lettres ? Je les ai écrites。" },

"A2#11": { d: "间接宾语代词代替「à + 人」，位置也在动词前。只用于人，用于物一般用 y。",
  f: "lui（单数，阴阳同形）/ leur（复数）。",
  e: [["Je lui parle tous les jours.", "我每天跟他/她说话。"], ["Je leur ai écrit.", "我给他们写了信。"]],
  t: "lui/leur 不分性别；且过去分词不与之配合（间接宾语）。" },

"A2#12": { d: "代词位置有一条总原则：放在变位动词前；只有肯定命令式时放到动词后并加连字符。",
  f: "肯定命令式：动词 + - + 代词（Donne-le-moi）；否定命令式回到动词前（Ne le lui donne pas）。",
  e: [["Je le lui donne.", "我把它给他。"], ["Donne-le-lui.", "把它给他。"]],
  t: "肯定命令式里 me/te 变成 moi/toi：Donne-moi，不是 Donne-me。" },

"A2#13": { d: "一句话里出现两个代词时，顺序是固定的，不能随意调换。",
  f: "me/te/se/nous/vous → le/la/les → lui/leur → y → en。例：Il me le montre / Je le lui ai donné / Il y en a。",
  e: [["Il me le montre.", "他把它给我看。"], ["Elle nous en parle.", "她跟我们谈起这个。"]],
  t: "记住口诀「1-2-3-4-5」：人称代词最前，en 永远最后。" },

"A2#14": { d: "三个最简单的关系代词把两个句子连起来，避免重复同一个名词。",
  f: "qui 作主语；que 作直接宾语（元音前省音 qu'）；où 作地点或时间状语。",
  e: [["L'homme qui parle est mon voisin.", "说话的那个人是我邻居。"], ["Le livre que je lis est passionnant.", "我在读的这本书很吸引人。"]],
  t: "que 后面必须跟主语：le livre que je lis；写成 que lis 是缺主语。" },

"A2#15": { d: "指示形容词相当于「这个/那个」，指特定的、已经知道的人或物。",
  f: "ce（阳单，元音或哑音 h 前用 cet）/ cette（阴单）/ ces（复数）。区分远近可加 -ci / -là：ce livre-ci / ce livre-là。",
  e: [["cette idée, ces livres", "这个想法、这些书"], ["Cet homme est mon père.", "这个男人是我父亲。"]],
  t: "cet 只用于元音或哑音 h 开头的阳性单数：cet ami、cet hôtel。" },

"A2#16": { d: "指示代词代替「这个/那个 + 名词」，避免重复名词。",
  f: "celui / celle / ceux / celles + de（所属）或 -ci/-là（远近）或关系从句。",
  e: [["celui de gauche est plus cher", "左边那个更贵"], ["Je préfère celle que tu as choisie.", "我更喜欢你挑的那个。"]],
  t: "中性指示代词 ce / ceci / cela（ça）指「这件事」，不指具体名词。" },

"A2#17": { d: "主有代词 = 定冠词 + 主有形容词，代替「我的那个/你的那个」。",
  f: "le mien/la mienne/les miens/les miennes；le tien, le sien, le nôtre, le vôtre, le leur（复数 les leurs）。",
  e: [["Ce stylo ? C'est le mien.", "这支笔？是我的。"], ["Leurs notes sont meilleures que les nôtres.", "他们的分数比我们好。"]],
  t: "冠词与名词一致：la mienne（阴性）。nôtre/vôtre 带长音符号，和 notre/votre 区分。" },

"A2#18": { d: "比较级表示「更…/不那么…/一样…」，形容词、副词、名词、动词都能比较。",
  f: "plus / moins / aussi + 形容词或副词 + que；名词：plus de + 名词 + que；bon → meilleur，bien → mieux。",
  e: [["Il est plus grand que moi.", "他比我高。"], ["Elle travaille mieux que lui.", "她比他干得好。"]],
  t: "bon 的比较级是 meilleur，不是 plus bon；bien 的是 mieux，不是 plus bien。" },

"A2#19": { d: "最高级表示「最…」，由比较级加定冠词构成；范围用 de 引出。",
  f: "le/la/les plus（moins）+ 形容词 + de + 范围；副词最高级固定用 le plus。",
  e: [["C'est le plus beau jour de l'année.", "这是一年里最美的一天。"], ["C'est la ville la plus chère de France.", "这是法国最贵的城市。"]],
  t: "形容词最高级的定冠词与名词一致，且名词前的形容词要重复冠词：la ville la plus chère。" },

"A2#20": { d: "多数副词由形容词阴性形式加 -ment 构成，用来修饰动词、形容词或另一副词。",
  f: "形容词阴性 + -ment：lent→lente→lentement；-ent/-ant 结尾变 -emment/-amment（récent→récemment）。",
  e: [["Il parle lentement.", "他说得慢。"], ["Elle est extrêmement gentille.", "她极其和善。"]],
  t: "副词位置一般在变位动词后；复合时态放在助动词和过去分词之间：Il a bien travaillé。" },

"A2#21": { d: "否定体系不止 ne…pas：还有「不再、从不、什么都没有、没有人」。",
  f: "ne…plus（不再）、ne…jamais（从不）、ne…rien（什么都不）、ne…personne（没有人）、ne…aucun（没有任何）。",
  e: [["Je ne fume plus.", "我不再抽烟了。"], ["Personne ne vient.", "没有人来。"]],
  t: "personne、rien 作主语时放在动词前：Rien n'est prêt；作宾语时放在 pas 的位置。" },

"A2#22": { d: "部分冠词表示「一些、不确定的量」，用于不可数或不想量化的东西，尤其是食物。",
  f: "du（阳）/ de la（阴）/ de l'（元音前）/ des（复数）；否定时变 de。",
  e: [["Je bois du café le matin.", "我早上喝咖啡。"], ["Elle achète des fruits.", "她买了一些水果。"]],
  t: "表示喜好、整体概念时用定冠词：J'aime le café；表示「一点」用部分冠词：Je bois du café。" },

"A2#23": { d: "否定句里，直接宾语前的冠词（不定冠词、部分冠词）要变成 de，因为否定的是「存在」。",
  f: "Je n'ai pas de temps / Il n'y a pas de place / Elle ne boit pas de café。",
  e: [["Je n'ai pas de temps.", "我没有时间。"], ["Il n'y a plus de pain.", "没有面包了。"]],
  t: "但定冠词不变：Je n'aime pas le café（不喜欢这一类，不是否定存在）。" },

"A2#24": { d: "tout 身份多，可作形容词、代词、副词，四种形式要跟名词配合。",
  f: "tout（阳单）/ toute（阴单）/ tous（阳复）/ toutes（阴复）；tout le monde（所有人）、tous les jours（每天）。",
  e: [["tout le monde, tous les jours", "所有人、每天"], ["Elles sont toutes parties.", "她们都走了。"]],
  t: "tous 作代词时词尾 s 发音 [tus]；作形容词时不发音 [tu]。" },

"A2#25": { d: "时间连词引导时间状语从句，表示「当…的时候」，主句动作与从句同时或紧随。",
  f: "quand（当…）、lorsque（较书面）、dès que（一…就）、pendant que（在…期间）、avant que（+ 虚拟式）。",
  e: [["Quand il rentre, il dîne tout de suite.", "他一回家就吃晚饭。"], ["Dès qu'il est arrivé, il a appelé.", "他一到就打了电话。"]],
  t: "指将来的事时，从句用将来时（Quand tu auras fini, appelle-moi），不能用 quand + 将来时的错误搭配虚指过去。" },

"A2#26": { d: "原因表达有四个常用词，语气和位置不同。",
  f: "parce que（回答 pourquoi，最常用）、car（书面，不能句首）、comme（原因在前，句首）、puisque（既然，双方已知）。",
  e: [["Je reste parce qu'il pleut.", "我留下因为下雨。"], ["Comme il était tard, nous sommes rentrés.", "因为很晚了，我们就回去了。"]],
  t: "car 不能放句首，也不能回答 pourquoi；回答「为什么」永远用 parce que。" },

"A2#27": { d: "pour + 不定式表示目的，主语与主句一致时用它；目的从句用 pour que + 虚拟式。",
  f: "pour / afin de + 不定式（同主语）；pour que / afin que + 虚拟式（不同主语）。",
  e: [["J'apprends le français pour travailler en France.", "我学法语是为了去法国工作。"], ["Je parle lentement pour que tu comprennes.", "我说慢点，好让你听懂。"]],
  t: "pour 后接名词表用途：une tasse pour le café；表目的时接动词不定式。" },

"A2#28": { d: "国家和地区的介词取决于性别和单复数：阴性用 en，阳性用 au，复数用 aux。",
  f: "en France / en Chine；au Canada / au Japon；aux États-Unis / aux Philippines；城市用 à。",
  e: [["en France, au Canada, aux États-Unis", "在法国、在加拿大、在美国"], ["Je vais en Italie, je reviens du Japon.", "我去意大利，我从日本回来。"]],
  t: "以 -e 结尾的国家多为阴性（la France, la Chine），例外：le Mexique、le Cambodge。" },

"A2#29": { d: "交通方式的介词要看是「进入交通工具」还是「使用某种交通方式」。",
  f: "en + 封闭交通工具（en train, en voiture, en avion, en bus）；à + 开放交通工具（à vélo, à moto, à pied）。",
  e: [["en train, en voiture, à vélo", "坐火车、开车、骑车"], ["Je vais au travail à pied.", "我步行去上班。"]],
  t: "à pied 是固定说法，不能说 en pied；en bus 和 à bus 都有人说，但 en 更标准。" },

"A2#30": { d: "很多动词后面要接固定的介词再接不定式，介词不能随意换。",
  f: "直接接不定式：vouloir, pouvoir, devoir, aimer, préférer；+ à：commencer à, apprendre à, réussir à, hésiter à；+ de：décider de, oublier de, refuser de, essayer de。",
  e: [["Je commence à comprendre.", "我开始明白了。"], ["Il a oublié de fermer la porte.", "他忘了关门。"]],
  t: "记动词时要连着介词一起记：décider de 不是 décider à。" },

"A2#31": { d: "代词式动词的复合过去时一律用 être，过去分词一般与主语配合。",
  f: "se + être（现在时）+ 过去分词；配合看代词是否为直接宾语：Elle s'est levée（直接，配合）/ Elle s'est lavé les mains（les mains 是直接宾语，不配合）。",
  e: [["Elle s'est levée à six heures.", "她六点起了床。"], ["Ils se sont parlé.", "他们交谈过。（parler à 间接，不配合）"]],
  t: "se parler、se téléphoner 里的代词是间接宾语，过去分词不变。" },

"A2#32": { d: "感叹句用 quel / comme / que 引出，语气由标点和语序承担。",
  f: "Quel + 名词（性数配合）；Comme + 形容词/副词 + 主语 + 动词；Que + 句子（书面）。",
  e: [["Quel beau temps !", "天气真好！"], ["Comme c'est joli !", "真漂亮！"]],
  t: "comme 后面语序不倒装：Comme il est gentil !（不是 Comme est-il gentil）。" },

"A2#33": { d: "强调句 c'est … qui/que 把要强调的成分提到 c'est 后面，剩下的部分用 qui（主语）或 que（其他）连接。",
  f: "C'est + 强调成分 + qui（主语）+ 其余；C'est + 强调成分 + que + 其余。",
  e: [["C'est Paul qui a appelé.", "是保罗打的电话。"], ["C'est hier que je l'ai vu.", "我是昨天见到他的。"]],
  t: "强调宾语时用 que，且后面的代词要相应变化：C'est ce livre que je cherche。" },

"A2#34": { d: "在过去的时间里谈「将来」，要用「过去将来」：aller 的未完成过去时 + 不定式，或条件式。",
  f: "aller（imparfait）+ 不定式 = 过去最近将来；venir（imparfait）+ de + 不定式 = 过去最近过去。",
  e: [["J'allais partir quand il est arrivé.", "他到时我正要走。"], ["Je venais de sortir.", "我当时刚出门。"]],
  t: "间接引语里更常用条件式表过去将来：Il a dit qu'il viendrait。" },

"A2#35": { d: "频率用副词或短语表示，位置通常在变位动词后。",
  f: "toujours（总是）、souvent（经常）、parfois / quelquefois（有时）、rarement（很少）、jamais（从不）、de temps en temps（偶尔）。",
  e: [["Il va souvent au cinéma.", "他常去看电影。"], ["Je ne vais jamais au théâtre.", "我从不去剧院。"]],
  t: "jamais 通常要和 ne 连用；单独 jamais 表示「曾经」：Tu es déjà allé à Paris ? — Jamais。" }
});

Object.assign(FR_NOTES, {
"B1#0": { d: "愈过去时表示「过去的过去」：在过去某个时间点之前就已经完成的动作。",
  f: "avoir / être 的未完成过去时 + 过去分词（j'avais mangé, elle était partie）。",
  e: [["Il avait déjà mangé quand je suis arrivé.", "我到的时候他已经吃过了。"], ["Elle était partie avant midi.", "她中午前就走了。"]],
  t: "和复合过去时对比：Il a mangé（他吃了）／Il avait mangé（在那之前他就吃了）。" },

"B1#1": { d: "简单过去时是书面叙事专用时态，口语和日常书写几乎不用，但读小说、历史文章必须认识。",
  f: "三类词尾：-a（il parla）、-i（il finit）、-u（il vendit）；很多不规则词干（il fut, il eut, il fit, il vint）。",
  e: [["Il naquit en 1850 et mourut en 1900.", "他生于 1850 年，卒于 1900 年。"], ["Elle ouvrit la porte et entra.", "她打开门走了进去。"]],
  t: "简单过去时几乎总和第三人称一起出现，因为叙事主角通常是「他/她」。写作练习里别主动用它替换复合过去时。" },

"B1#2": { d: "先将来时表示「将来某时之前已经完成」，常和 quand / dès que 连用。",
  f: "avoir / être 的简单将来时 + 过去分词（j'aurai fini, elle sera partie）。",
  e: [["Quand tu auras fini, appelle-moi.", "你做完之后给我打电话。"], ["Il aura terminé avant midi.", "他中午前会弄完。"]],
  t: "si 从句里不用先将来时，用复合过去时替代：Si tu as fini… 但 quand 从句要用先将来时。" },

"B1#3": { d: "条件式过去时表示「本来会…（但没发生）」或对过去的推测。",
  f: "avoir / être 的条件式现在时 + 过去分词（j'aurais aimé, elle serait venue）。",
  e: [["J'aurais préféré rester.", "我本来更想留下。"], ["Il serait déjà parti.", "他大概已经走了。"]],
  t: "表遗憾或委婉批评常用：Tu aurais pu me prévenir（你本可以提前告诉我）。" },

"B1#4": { d: "假设第二式：条件用未完成过去时，结果用条件式现在时，表示与现在事实相反或可能性很小。",
  f: "Si + imparfait，主句条件式现在时。",
  e: [["Si j'avais le temps, je voyagerais.", "如果我有时间，我就去旅行（其实没有）。"], ["Si j'étais toi, je partirais.", "如果我是你，我就走了。"]],
  t: "这个句式里 si 从句用 imparfait 表「现在不真实」，不是过去；理解错时态就会译错。" },

"B1#5": { d: "假设第三式：条件用愈过去时，结果用条件式过去时，表示与过去事实相反、已经无法改变。",
  f: "Si + plus-que-parfait，主句条件式过去时。",
  e: [["Si tu m'avais prévenu, je serais venu.", "你要是早告诉我，我就来了（但你没说）。"], ["Si elle avait étudié, elle aurait réussi.", "她要是学了，就考过了。"]],
  t: "口语里常混用「Si j'aurais su」，标准法语必须写 Si j'avais su，考试会扣分。" },

"B1#6": { d: "虚拟式现在时表达主观态度：必要、愿望、情感、怀疑、判断，而不是陈述事实。",
  f: "由 ils 现在时去掉 -ent 加 -e, -es, -e, -ions, -iez, -ent（que je parle, que nous parlions）。",
  e: [["Il faut que tu viennes.", "你得来。"], ["Je veux qu'il parte.", "我要他走。"]],
  t: "nous/vous 两个人称常借未完成过去时的词干（que nous parlions），要单独记。" },

"B1#7": { d: "最常用的十个不规则虚拟式必须背下来，它们出现在大量固定结构里。",
  f: "être: sois/sois/soit/soyons/soyez/soient；avoir: aie/aies/ait/ayons/ayez/aient；aller: aille/allions；faire: fasse/fassions；pouvoir: puisse；savoir: sache；vouloir: veuille/voulions；venir: vienne/venions；prendre: prenne/prenions；voir: voie。",
  e: [["Il faut que je sois là à huit heures.", "我八点必须到。"], ["Je doute qu'il puisse venir.", "我怀疑他能来。"]],
  t: "être 和 avoir 的虚拟式是最高频的两个，先背这两个，收益最大。" },

"B1#8": { d: "虚拟式由主句的「触发词」决定：意志、必要、情感、怀疑、否定判断。",
  f: "常见触发：il faut que、vouloir que、souhaiter que、être content que、avoir peur que、douter que、il est possible que、bien que、pour que、avant que。",
  e: [["Je doute qu'il soit déjà là.", "我怀疑他已经到了。"], ["Je suis content que tu viennes.", "我很高兴你来。"]],
  t: "espérer que 用直陈式（J'espère qu'il viendra），这是常考的例外。" },

"B1#9": { d: "一批连词后面必须接虚拟式，因为它们表达的是意图、让步、时间未到等非现实内容。",
  f: "bien que（虽然）、quoique、pour que（为了）、afin que、avant que（在…之前）、à condition que（只要）、jusqu'à ce que（直到）、sans que。",
  e: [["Bien qu'il pleuve, je sors.", "虽然下雨，我还是出去。"], ["Je parle lentement pour que tu comprennes.", "我说慢点，好让你听懂。"]],
  t: "parce que、puisque、comme 接直陈式；bien que 接虚拟式，一对最容易混的对照。" },

"B1#10": { d: "虚拟式过去时表示「在主句动作之前已经完成」的主观判断，结构是助动词虚拟式 + 过去分词。",
  f: "que j'aie parlé / que je sois parti / qu'elle ait fini。",
  e: [["Je suis content que tu aies réussi.", "我很高兴你成功了。"], ["Il regrette qu'elle soit partie.", "他后悔她走了。"]],
  t: "主句是现在时、从句动作已完成 → 虚拟式过去时；不要用虚拟式现在时顶替。" },

"B1#11": { d: "现在分词以 -ant 结尾，书面语里代替关系从句或表示同时发生的动作，可有自己的宾语。",
  f: "nous 现在时去 -ons 加 -ant（parlant, finissant）；三个不规则：étant, ayant, sachant。",
  e: [["Ayant fini son travail, il est parti.", "做完工作后他走了。"], ["Les étudiants parlant français sont nombreux.", "说法语的学生很多。"],
  ],
  t: "现在分词的主语必须与主句主语一致，否则叫「悬垂分词」，是写作常见错误。" },

"B1#12": { d: "副动词 en + -ant 表示与主句同时发生的动作，或方式、原因、条件。",
  f: "en + 现在分词；主语必须与主句相同。",
  e: [["En marchant, il écoute de la musique.", "他边走边听音乐。"], ["C'est en forgeant qu'on devient forgeron.", "打铁才能成铁匠（熟能生巧）。"]],
  t: "en 后面不能接 être / avoir 的现在分词来表状态，那要用现在分词：Étant malade, il est resté。" },

"B1#13": { d: "被动语态把受事提为主语，施事用 par 引出（强调来源时用 de）。",
  f: "être（时态随主动句变）+ 过去分词 + par + 施事；分词与主语配合。",
  e: [["La maison a été construite en 1900.", "这房子建于 1900 年。"], ["Ce roman est lu par tous les étudiants.", "这本小说所有学生都在读。"]],
  t: "只有直接及物动词能变被动；不能写 Il est parlé 这种。「无人称被动」用 on 更自然。" },

"B1#14": { d: "dont 代替「de + 先行词」，用于动词、形容词或名词需要 de 的结构。",
  f: "parler de → dont je parle；avoir besoin de → dont j'ai besoin；être fier de → dont il est fier。",
  e: [["Le livre dont je parle est épuisé.", "我说的那本书绝版了。"], ["C'est un ami dont je suis très proche.", "他是我很亲近的朋友。"]],
  t: "dont 不能与 de 重复：不能说 le livre dont je parle de；它的位置紧跟在先行词后。" },

"B1#15": { d: "lequel 系列用于「介词 + 关系代词」的情况，因为 qui/que 不能直接跟在介词后指物。",
  f: "lequel / laquelle / lesquels / lesquelles；与 à、de 缩合为 auquel、duquel、auxquels、desquels。",
  e: [["la raison pour laquelle il est parti", "他离开的理由"], ["le projet auquel je pense", "我想到的那个计划"]],
  t: "指人时介词后可用 qui（avec qui），指物必须用 lequel（avec lequel）。" },

"B1#16": { d: "ce qui / ce que / ce dont 是没有明确先行词的中性关系代词，指「…的事情」。",
  f: "ce qui 作主语；ce que 作直接宾语；ce dont 对应 de + 事物；ce à quoi 对应 à + 事物。",
  e: [["Ce qui m'étonne, c'est sa patience.", "让我惊讶的是他的耐心。"], ["Ce dont j'ai besoin, c'est du calme.", "我需要的是安静。"]],
  t: "它们常与 c'est 构成强调句：Ce que j'aime, c'est… 主语和表语顺序别倒。" },

"B1#17": { d: "中性代词 le 代替前面提到的形容词、分词或整个句子，形式永远不变。",
  f: "le 代替表语成分：Il est célèbre, je le suis aussi；Je le sais（我知道这件事）。",
  e: [["Il est célèbre, je le suis aussi.", "他有名，我也是。"], ["— Tu es fatigué ? — Oui, je le suis.", "你累吗？——是的。"]],
  t: "这个 le 不随性数变化，永远是 le：Elles sont contentes ? Oui, elles le sont。" },

"B1#18": { d: "间接引语把直接说的话转述出去，要去掉引号、调整人称，并按主句时态调整从句时态。",
  f: "主句过去时 → 从句时态后移一级：现在时→未完成过去时，复合过去时→愈过去时，将来时→条件式。",
  e: [["Il a dit qu'il viendrait le lendemain.", "他说他第二天会来。"], ["Elle m'a demandé si j'étais prêt.", "她问我准备好了没有。"]],
  t: "疑问转述用 si（是非问）或疑问词（特殊问），语序回到陈述句。" },

"B1#19": { d: "转述时时间词要跟着视角移动，否则时间会指错。",
  f: "aujourd'hui→ce jour-là；hier→la veille；demain→le lendemain；maintenant→à ce moment-là；il y a deux jours→deux jours avant。",
  e: [["Il a dit : « Je pars demain. » → Il a dit qu'il partait le lendemain.", "他说「我明天走」→ 他说他第二天走。"], ["Elle a dit : « J'étais hier à Paris. » → Elle a dit qu'elle était la veille à Paris.", "她说「我昨天在巴黎」→ 她说她前一天在巴黎。"]],
  t: "如果主句是现在时，时间词不用变：Il dit qu'il part demain。" },

"B1#20": { d: "让步表示「尽管…仍然…」，语气从弱到强：même si（即使，直陈）→ bien que（虽然，虚拟）→ quoique（较书面）。",
  f: "même si + 直陈；bien que / quoique + 虚拟式；avoir beau + 不定式（白费力气做…）。",
  e: [["Même s'il pleut, je sors.", "即使下雨我也出去。"], ["Bien qu'il soit fatigué, il continue.", "虽然累，他还是继续。"]],
  t: "même si 后面绝不用虚拟式；bien que 后面绝不用直陈式，这是高频考点。" },

"B1#21": { d: "对立表示两个事实的对照或反差，用 alors que / tandis que，语气比 mais 更书面。",
  f: "alors que（而、却）、tandis que（而）、en revanche（相反）、par contre（口语的相反）。",
  e: [["Il travaille alors que je me repose.", "他在工作，而我在休息。"], ["Ce quartier est calme, tandis que l'autre est bruyant.", "这个街区安静，那个却吵。"]],
  t: "alors que 还可表时间「当…时」，要靠上下文判断；表对照时两个分句都用直陈式。" },

"B1#22": { d: "后果表示前因导致的自然结果，连接词从口语到书面依次是 donc、alors、c'est pourquoi、par conséquent、si bien que。",
  f: "donc（所以）、par conséquent（因此）、c'est pourquoi（这就是为什么）、si bien que（以至于）、tellement… que（如此…以至于）。",
  e: [["Il pleut, donc je reste.", "下雨了，所以我留下。"], ["Il a tellement crié qu'il s'est enroué.", "他喊得太厉害，嗓子哑了。"]],
  t: "si bien que + 直陈式表事实结果；pour que 表目的要接虚拟式，别混。" },

"B1#23": { d: "目的从句在主从句主语不同时使用，必须接虚拟式。",
  f: "pour que / afin que + 虚拟式；主语相同时改用 pour / afin de + 不定式。",
  e: [["Je parle lentement pour que tu comprennes.", "我说慢点，好让你听懂。"], ["Elle est partie tôt afin que nous puissions travailler.", "她早早走了，好让我们能工作。"]],
  t: "pour que 后接虚拟式是硬性要求，写成 pour que tu comprends 是错误。" },

"B1#24": { d: "表示「在…之前/直到…」的时间从句，因为所指的事尚未发生，要用虚拟式。",
  f: "avant que（在…之前）、jusqu'à ce que（直到）、en attendant que（等着…）；dès que、après que 用直陈式。",
  e: [["Attends jusqu'à ce qu'il revienne.", "等到他回来。"], ["Pars avant qu'il ne pleuve.", "在下雨前走吧。"]],
  t: "avant que 后常加虚词 ne（不表否定）：avant qu'il ne parte。" },

"B1#25": { d: "带条件的表达除了 si，还有一批连词短语，语气与语式不同。",
  f: "à condition que + 虚拟（只要）、pourvu que + 虚拟（但愿/只要）、au cas où + 条件式（万一）、sinon（否则）。",
  e: [["Au cas où il pleuvrait, prends un parapluie.", "万一下雨，带把伞。"], ["Tu peux venir à condition que tu préviennes.", "你可以来，只要你提前说。"]],
  t: "au cas où 后面用条件式，不用虚拟式，也不用现在时；这是最容易写错的一个。" },

"B1#26": { d: "比较可以叠加原因或程度：d'autant plus que（尤其因为）、dans la mesure où（在…程度上/只要）。",
  f: "d'autant plus / moins + 形容词 + que + 原因；ainsi que（以及）；à mesure que（随着）。",
  e: [["Il est d'autant plus fatigué qu'il a mal dormi.", "他格外累，因为没睡好。"], ["À mesure qu'il vieillit, il s'adoucit.", "随着年龄增长，他变得温和。"]],
  t: "d'autant plus que 后面接直陈式，且前后要有对应的比较对象才成立。" },

"B1#27": { d: "名词化把动词或形容词变成名词，是书面语提高信息密度最常用的手段。",
  f: "常见后缀：-tion（décider→décision）、-ment（changer→changement）、-age（passer→passage）、-ance（croître→croissance）、-eur（chauffer→chauffeur 类）。",
  e: [["décider → la décision", "决定（动词→名词）"], ["La construction du pont a pris deux ans.", "这座桥的建造花了两年。（construire→construction）"]],
  t: "名词化后原来的宾语常变 de 补语：construire un pont → la construction du pont。" },

"B1#28": { d: "on 是万能泛指代词，可指「人们、我们、有人」，动词永远按第三人称单数变位。",
  f: "on + 动词第三人称单数；on 作主语时表语可用单数或复数（On est prêts）。",
  e: [["On dit que le film est excellent.", "据说这电影很好。"], ["On y va ?", "我们走吗？"]],
  t: "口语里 on 基本取代 nous，但书面正式语体仍用 nous；代词 on 的对应形是 soi。" },

"B1#29": { d: "数量表达的进阶形式，用于书面和抽象陈述。",
  f: "la plupart de + 名词（+ 动词复数）、plusieurs（几个）、aucun（没有一个，ne…aucun）、certains（某些）、une majorité de。",
  e: [["La plupart des étudiants travaillent le soir.", "大多数学生晚上打工。"], ["Aucun problème n'a été signalé.", "没有报告任何问题。"]],
  t: "la plupart de 后动词用复数；aucun 后接 ne，动词单数。" },

"B1#30": { d: "使役结构 faire + 不定式表示「让/使某人做某事」，laisser + 不定式表示「任由」。",
  f: "faire + 不定式 + à + 人（Je fais réparer ma voiture）；faire faire qch à qn（让某人做某事），人作直接宾语时用 par。",
  e: [["Je fais réparer ma voiture.", "我让人修车。"], ["Elle fait rire tout le monde.", "她让所有人发笑。"]],
  t: "faire 后面的不定式不随主语变位，但代词要放在 faire 前：Je le fais venir。" },

"B1#31": { d: "叙事文里时态分工很明确：事件推进用复合过去时或简单过去时，背景描写用未完成过去时，先发生的事用愈过去时。",
  f: "骨架 = PC/PS；背景 = imparfait；回溯 = plus-que-parfait；将来 = 条件式。",
  e: [["Il entra, regarda autour de lui et comprit.", "他走进去，环顾四周，明白了。"], ["La ville était calme ; il avait plu toute la nuit.", "城里很安静；整夜都在下雨。"]],
  t: "别整段都用复合过去时，读起来像流水账；交替使用才有层次。" },

"B1#32": { d: "主题化把要强调的成分提到句首，再用代词复指，是口语和书面都常见的强调手段。",
  f: "Ce que j'aime, c'est le jazz；Moi, je préfère le thé（dislocation）；C'est… que（clivage）。",
  e: [["Ce que j'aime, c'est le jazz.", "我喜欢的是爵士乐。"], ["Ce livre, je l'ai déjà lu.", "这本书我已经读过了。"]],
  t: "主题化后原位置必须留一个代词复指，否则句子不完整。" },

"B1#33": { d: "有些动词必须借助介词再接 que 从句，介词不能省。",
  f: "s'attendre à ce que + 虚拟（预期）、se rendre compte que（意识到）、être convaincu que、avoir peur que + 虚拟。",
  e: [["Je m'attends à ce qu'il vienne.", "我预计他会来。"], ["Je me rends compte que j'ai tort.", "我意识到我错了。"]],
  t: "s'attendre à ce que 后接虚拟式；而 s'attendre à + 名词 直接接名词，别混。" },

"B1#34": { d: "条件式不仅表假设，还用来转述未经证实的消息，相当于「据说/据报道」。",
  f: "selon + 来源 + 条件式；il serait、il aurait 表推测。",
  e: [["Selon la presse, il serait à Paris.", "据新闻界说，他可能在巴黎。"], ["Le suspect aurait quitté le pays.", "嫌疑人据称已离开该国。"]],
  t: "这种用法不出现在 si 从句中；它属于「信息来源不确定」，和假设的条件式要分清。" }
});

Object.assign(FR_NOTES, {
"B2#0": { d: "虚拟式未完成过去时是文学语体，现代口语和新闻几乎不用，但读 19 世纪小说、古典戏剧必须认识。",
  f: "由简单过去时第二人称单数去掉词尾加 -sse, -sses, -^t, -ssions, -ssiez, -ssent：qu'il fût, qu'il parlât, qu'il vînt。",
  e: [["Il fallait qu'il fût là avant midi.", "他必须中午前到。"], ["Je souhaitais qu'elle vînt plus tôt.", "我希望她早点来。"]],
  t: "识别要点：看到 qu'il ...ât / ...ît / ...ût 这种带长音符号的怪形，就是虚拟式未完成过去时。" },

"B2#1": { d: "虚拟式愈过去时同样属于书面文学语体，表示在主句过去动作之前已完成的主观判断。",
  f: "助动词的虚拟式未完成过去时 + 过去分词：qu'il eût fini、qu'elle fût partie。",
  e: [["Je regrettais qu'il n'eût rien dit.", "我遗憾的是他什么都没说。"], ["Elle doutait qu'il eût compris.", "她怀疑他是否听懂了。"]],
  t: "口语里一律换成虚拟式过去时（qu'il ait fini）；读古典文本时才需要还原。" },

"B2#2": { d: "关系从句用虚拟式，表示先行词本身不确定、不存在，或带主观评价。",
  f: "触发环境：先行词带 le seul / le premier / le dernier、否定或疑问中的先行词、表示愿望或目的。",
  e: [["Je cherche un appartement qui soit calme.", "我在找一套安静的房子（还不知道存不存在）。"], ["C'est le seul qui sache la vérité.", "他是唯一知道真相的人。"]],
  t: "如果先行词确定存在，仍用直陈式：J'ai trouvé l'appartement qui est calme。" },

"B2#3": { d: "简单过去时按词尾分三类，识别词尾就能推出大部分变位。",
  f: "-a 类（-er 动词及 aller）：il parla, ils parlèrent；-i 类（多数 -ir/-re）：il finit, il prit；-u 类：il vendit 之外还有 il put, il eut, il fut。",
  e: [["il parla / il finit / il vendit", "三类词尾示例"], ["Ils arrivèrent à l'aube.", "他们黎明时到达。"]],
  t: "第一类第一人称复数词尾是 -âmes（nous parlâmes），带长音符号，别写成 -ames。" },

"B2#4": { d: "先过去时表示「过去某动作之前刚完成」，多见于书面叙事，常与 dès que、quand 连用。",
  f: "avoir / être 的简单过去时 + 过去分词：il eut fini、elle fut partie。",
  e: [["Dès qu'il eut fini, il sortit.", "他一做完就出去了。"], ["Quand elle fut partie, il respira.", "她走之后，他松了口气。"]],
  t: "现代写作多用愈过去时替代；先过去时显得古典、节奏快。" },

"B2#5": { d: "超复合过去时表示「已经完成之后再发生」，口语和方言里用来强调先后，标准书面语少见。",
  f: "avoir 的复合过去时 + 过去分词：quand il a eu mangé；être 类：quand elle a été partie（极少）。",
  e: [["Quand il a eu mangé, il est parti.", "他吃完就走了。"], ["Dès qu'il a eu fini, il a appelé.", "他一弄完就打了电话。"]],
  t: "只在口语、南部方言和部分文学对话里出现；考试不要主动用。" },

"B2#6": { d: "条件式过去时第二式几乎只出现在古典文学，形式与虚拟式愈过去时相同。",
  f: "j'eusse aimé、il eût mieux valu；现代法语一律用条件式过去时第一式替代。",
  e: [["Il eût mieux valu partir plus tôt.", "早点走本来更好。"], ["J'eusse préféré me taire.", "我本来宁愿闭嘴。"]],
  t: "见到 eût / eusse 不要当成虚拟式：判断依据是句子是否是假设或委婉语气。" },

"B2#7": { d: "在过去的叙述里谈将来，用条件式（或 aller 的未完成过去时 + 不定式），不能直接用简单将来时。",
  f: "主句过去时 + 从句将来事件 → 条件式现在时；Il savait qu'elle viendrait。",
  e: [["Il savait qu'elle viendrait.", "他知道她会来。"], ["Je pensais que tu arriverais plus tôt.", "我以为你会早点到。"]],
  t: "中文不体现这种时态后移，翻译时容易漏掉，写成 qu'elle viendra 就错了。" },

"B2#8": { d: "分词从句是一个独立的分句压缩成「名词 + 分词」，自己带主语，书面语里让句子更紧凑。",
  f: "名词（主语）+ 过去/现在分词 + 补语：Le repas terminé, nous sommes sortis。",
  e: [["Le repas terminé, nous sommes sortis.", "饭吃完后我们出去了。"], ["La pluie tombant sans cesse, le match fut annulé.", "雨不停地下，比赛取消了。"]],
  t: "分词从句的主语和主句主语不同，这正是它与副动词（主语相同）的区别。" },

"B2#9": { d: "同位语是把一个名词短语或形容词短语直接放在另一名词后，起解释或限定作用。",
  f: "名词 + 逗号 + 名词短语：Paris, capitale de la France, …；也可用 de + 名词（la ville de Paris）。",
  e: [["Paris, capitale de la France, attire les touristes.", "巴黎，法国的首都，吸引着游客。"], ["Victor Hugo, écrivain et poète, est enterré au Panthéon.", "维克多·雨果，作家兼诗人，葬于先贤祠。"]],
  t: "专有名词的同位语一般不重复冠词；同位语前后要用逗号隔开。" },

"B2#10": { d: "主题化（dislocation）把成分提到句首或句尾，用代词复指，是口语最典型的句法特征。",
  f: "主语左移：Moi, je n'aime pas ça；宾语右移：Je ne l'aime pas, ce film。",
  e: [["Moi, je n'aime pas ça.", "我嘛，我不喜欢这个。"], ["Il est sympa, ton frère.", "你哥挺不错的。"]],
  t: "学术写作里避免 dislocation，它属于口语语域；但引用对话时可以用。" },

"B2#11": { d: "疑问句里主语是名词时，常用「名词 + 代词倒装」的复杂倒装，避免名词直接倒装。",
  f: "Paul viendra-t-il ? / Où donc est-il allé ? / Que fait votre père ?（名词作主语时保持原位，用代词倒装）。",
  e: [["Paul viendra-t-il ?", "保罗会来吗？"], ["Où donc est-il allé ?", "他到底去哪儿了？"]],
  t: "直接写 Viendra Paul ? 在口语中出现，但标准书面语要用复杂倒装。" },

"B2#12": { d: "系统名词化是学术和法律文体的骨架：一个动作变成一个名词短语，句子的信息密度大幅提高。",
  f: "动词→名词（augmenter→une augmentation）；句子→名词短语（Les prix ont augmenté→la hausse des prix）。",
  e: [["augmenter → une augmentation", "上涨（动词→名词）"], ["La mise en œuvre de la réforme a été retardée.", "改革的实施被推迟了。"]],
  t: "名词化过度会让文字僵硬、施事消失（有利于回避责任），写作时要控制密度。" },

"B2#13": { d: "书面逻辑连接词比口语精确，能标出转折、因果、补充的层次。",
  f: "or（然而，常引出意外事实）、ainsi（因此/如此）、en effet（确实，因为）、toutefois / néanmoins（然而）、par ailleurs（此外）、en outre（而且）。",
  e: [["Or, personne ne vint ce soir-là.", "然而那晚没有人来。"], ["Il pleut ; toutefois, nous sortirons.", "下雨了；不过我们还是会出去。"]],
  t: "or 放句首并有逗号，表「与前面预期相反」；不能当「或者」用（那是 ou）。" },

"B2#14": { d: "高级让步手段：avoir beau + 不定式表示「白费力气做某事」，quand bien même 表示「即便」。",
  f: "avoir beau + 不定式（Il a beau insister, …）；quand bien même + 条件式（Quand bien même il pleuvrait…）；encore que + 虚拟式。",
  e: [["Il a beau insister, je refuse.", "他再怎么坚持，我也拒绝。"], ["Quand bien même il viendrait, je ne le recevrais pas.", "即便他来，我也不见。"]],
  t: "avoir beau 的主语是「做无用功的人」，后面接动词原形，不是过去分词。" },

"B2#15": { d: "带限制条件的表达：pour peu que（只要稍微…）、à moins que（除非）、sinon（否则）。",
  f: "pour peu que + 虚拟式；à moins que + 虚拟式（常加 ne）；sinon + 直陈式。",
  e: [["À moins qu'il ne pleuve, nous sortirons.", "除非下雨，我们就出去。"], ["Pour peu qu'on insiste, il cède.", "只要稍微坚持，他就让步。"]],
  t: "à moins que 的 ne 是虚词，不表否定；写成 à moins qu'il ne pleuve pas 才是双重否定。" },

"B2#16": { d: "强调后果的程度：de sorte que（以至于）、à tel point que（到了…的地步）、si… que（如此…以至于）。",
  f: "de sorte que + 直陈（事实结果）或虚拟（目的）；à tel point que + 直陈；si + 形容词 + que + 直陈。",
  e: [["Il crie à tel point qu'il s'enroue.", "他喊到嗓子都哑了。"], ["Il a menti, de sorte que personne ne le croit plus.", "他撒了谎，以至于没人再信他。"]],
  t: "de sorte que 接虚拟式时就变成目的（以便），语式一换意义就变。" },

"B2#17": { d: "比例比较表示两个变化同步发生：à mesure que / au fur et à mesure que（随着）。",
  f: "à mesure que + 直陈；dans la mesure où（在…范围内/既然）；plus… plus…（越…越…）。",
  e: [["À mesure qu'il vieillit, il s'adoucit.", "他越老越温和。"], ["Plus on lit, plus on apprend.", "读得越多，学得越多。"]],
  t: "plus… plus… 的结构里两个 plus 都不能省，且常倒装主语。" },

"B2#18": { d: "泛指代词指不特定的人或物，书面语里 quiconque、autrui 很常见。",
  f: "quiconque（任何人，作主语，动词单数）、autrui（他人，只作补语）、certains（某些人）、d'aucuns（有些人，文学）。",
  e: [["Quiconque enfreint la loi sera puni.", "任何违法者都将受罚。"], ["Il ne faut pas faire à autrui ce qu'on ne veut pas subir.", "己所不欲，勿施于人。"]],
  t: "autrui 不能作主语，也不能带冠词；quiconque 后面不能再用 qui。" },

"B2#19": { d: "限制性否定 ne…que 表示「只、仅仅」，它是否定形式但意义是肯定。",
  f: "ne + 动词 + que + 成分；ne…guère（几乎不）、ne…point（一点也不，文学）。",
  e: [["Il ne reste que deux places.", "只剩两个位置。"], ["Je n'ai guère le temps.", "我几乎没时间。"]],
  t: "ne…que 不含 pas；写成 ne…pas que 意思会变成「不只是」。" },

"B2#20": { d: "虚词 ne 出现在某些虚拟式从句里，不表示否定，只是书面语的语法标记。",
  f: "触发动词：craindre que、avoir peur que、éviter que、avant que、à moins que、il est rare que。",
  e: [["Je crains qu'il ne vienne.", "我怕他会来。"], ["Pars avant qu'il ne pleuve.", "在下雨前走。"]],
  t: "这个 ne 不影响意思，漏写不算严重错误，但正式写作里保留更地道。" },

"B2#21": { d: "很多动词要求固定的介词，介词不同意思就不同，需要成对记忆。",
  f: "s'attendre à、tenir à（珍视/坚持）、s'opposer à、s'intéresser à、dépendre de、se douter de、profiter de、manquer de。",
  e: [["Je tiens à te remercier.", "我一定要谢谢你。"], ["Cela dépend de toi.", "这取决于你。"]],
  t: "tenir à（重视）和 tenir de（像某人）意思完全不同，别混。" },

"B2#22": { d: "新闻标题有独立语法：省略冠词和助动词、多用名词化和被动，追求字数最少。",
  f: "省略冠词（Grève dans les transports）、省略 être（Trafic perturbé）、不定式表将来（Réforme à venir）。",
  e: [["Grève : trafic perturbé dans toute la région", "罢工：全区交通受阻"], ["Trois blessés dans un accident", "一起事故中三人受伤"]],
  t: "标题里的现在时往往指过去发生的事，读正文才能确认时间。" },

"B2#23": { d: "自由间接引语不出现引号和转述动词，把人物的话融进叙述，人称按叙述者、时态按时态配合。",
  f: "特征：无 que、无人称标记、语气词保留、时态后移。",
  e: [["Il se demanda s'il devait vraiment partir.", "他自问是否真该走。"], ["Elle n'y arriverait jamais, pensait-elle.", "她永远也做不到，她想。"]],
  t: "它介于直接引语与间接引语之间，读文学时靠语气和时态判断「这是谁在说」。" },

"B2#24": { d: "le fait que 后接直陈还是虚拟，取决于说话人把这件事当事实还是当评价对象。",
  f: "直陈：陈述已知事实（Le fait qu'il est venu nous a surpris）；虚拟：带主观态度（Le fait qu'il soit venu…）。",
  e: [["Le fait qu'il soit venu nous a surpris.", "他来了这件事让我们惊讶。"], ["Le fait qu'il est parti ne change rien.", "他走了这件事改变不了什么。"]],
  t: "两种都被接受；考试里跟情感、判断走虚拟式更安全。" },

"B2#25": { d: "情态动词除了本义，还能表示推测：devoir（想必）、pouvoir（可能）。",
  f: "Il doit être midi（现在大概十二点）；Il a dû partir（他大概走了）；Cela peut arriver（这有可能发生）。",
  e: [["Il doit être midi.", "现在大概十二点。"], ["Elle a dû oublier.", "她大概是忘了。"]],
  t: "devoir 的推测义在复合过去时里是「大概已经…」，不是「必须已经…」，靠上下文区分。" },

"B2#26": { d: "修辞性强调用重复、递进、对照制造语气，常见于演讲和评论。",
  f: "不是…而是…（non seulement… mais encore）、三重列举、同义反复、反问。",
  e: [["Ce n'est pas seulement un livre, c'est une œuvre.", "这不只是一本书，而是一部作品。"], ["Non seulement il est venu, mais il a tout expliqué.", "他不但来了，还解释了一切。"]],
  t: "书面修辞注意不要过度，学术写作里以清晰为先。" },

"B2#27": { d: "一批固定搭配里冠词被省略，属于词汇化表达，不能按常规补冠词。",
  f: "avoir faim / soif / peur / raison；avec plaisir；par cœur；en voiture；sans doute；à pied。",
  e: [["avoir faim, avec plaisir, par cœur", "饿、乐意、背熟"], ["Il a répondu sans hésiter.", "他毫不犹豫地回答。"]],
  t: "这些是整体记忆单位；加冠词反而错：avoir la faim 不成立。" },

"B2#28": { d: "现在时叙述历史（présent de narration）把过去事件写成现在时，制造现场感。",
  f: "常用于历史叙述、剧情简介、新闻标题后的正文。",
  e: [["En 1789, le peuple prend la Bastille.", "1789 年，民众攻占巴士底狱。"], ["Elle entre, s'assoit et attend.", "她进来，坐下，等着。"]],
  t: "这种现在时不能和明确的时间副词「昨天」搭配，否则时态冲突。" },

"B2#29": { d: "口语里否定副词 ne 常被省略，只剩 pas / rien / jamais，这是口语语域的标记。",
  f: "J'sais pas（我不知道）、T'as vu ?（你看见了吗）、C'est pas grave。",
  e: [["J'sais pas.", "我不知道。（口语）"], ["C'est pas grave.", "没关系。（口语）"]],
  t: "写作、考试、正式场合必须补回 ne；只有在转写口语时才保留省略。" }
});

Object.assign(FR_NOTES, {
"C1#0": { d: "虚拟式未完成/愈过去时在书面高雅文体里仍用来标记时间层级：主句过去 + 从句同时或先于。",
  f: "同时 → 虚拟式未完成（qu'il partît）；先于 → 虚拟式愈过去（qu'il fût parti）。",
  e: [["Il fallait qu'il partît avant l'aube.", "他必须天亮前出发。"], ["Elle doutait qu'il eût compris.", "她怀疑他是否已听懂。"]],
  t: "现代新闻和论文一般改用现在虚拟式或过去虚拟式；只在文学翻译、古典引文里主动使用。" },

"C1#1": { d: "简单过去时与未完成过去时在文学叙事里分工严格：前者推进事件（完成体），后者铺开状态与背景（未完成体）。",
  f: "事件链：PS；描写、习惯、心理背景：imparfait；两者交替构成节奏。",
  e: [["Il pleuvait ; soudain, il sortit.", "当时下着雨；突然，他走了出去。"], ["Chaque matin, elle ouvrait la fenêtre, puis elle s'asseyait.", "每天早晨她打开窗，然后坐下。"]],
  t: "把背景动作写成 PS 会让叙事变成事件清单；把事件写成 imparfait 会让节奏拖沓。" },

"C1#2": { d: "反事实假设在 C1 要求精确：过去未实现用「si + 愈过去时 → 条件式过去时」，可加「第二式」提升文体层级。",
  f: "Si j'avais su, je n'aurais rien dit / je n'eusse rien dit（文学）。",
  e: [["S'il avait su, il n'eût rien dit.", "他要是知道，就什么也不会说。"], ["Si elle était venue, tout aurait été différent.", "她要是来了，一切都会不同。"]],
  t: "混合假设（过去条件 + 现在结果）允许混搭：Si j'avais étudié, je serais médecin aujourd'hui。" },

"C1#3": { d: "论证文有固定的语言标记，用来显式标出立场、让步与结论的位置。",
  f: "D'une part… d'autre part…；certes… mais…；en définitive / en dernière analyse；il ressort de… que。",
  e: [["D'une part… d'autre part… en définitive", "一方面…另一方面…归根结底"], ["Il ressort de cette étude que la tendance s'inverse.", "这项研究显示趋势正在反转。"]],
  t: "这些标记是给读者导航的，不是装饰；每一段只用一个层次，堆叠会显得空洞。" },

"C1#4": { d: "无人称结构让论述脱离具体施事，是学术与行政文体的基本句式。",
  f: "il convient de + 不定式（应当）、il s'agit de（问题在于）、il reste que（仍然…）、il y a lieu de（有必要）、force est de constater（不得不承认）。",
  e: [["Il convient de nuancer cette thèse.", "应当对这论点加以辨析。"], ["Il s'agit moins de convaincre que de comprendre.", "与其说在于说服，不如说在于理解。"]],
  t: "无人称结构能隐藏施事，也容易让文字空转；每个论断仍要有具体依据。" },

"C1#5": { d: "语式不是语法装饰，它承载预设：直陈把内容当下为真，虚拟把它放进说话人的判断里。",
  f: "Je crois qu'il vient（我认为他会来，倾向事实）／Je ne crois pas qu'il vienne（否定后转虚拟）。",
  e: [["Je crois qu'il vient.", "我相信他会来。"], ["Je ne crois pas qu'il vienne.", "我不认为他会来。"]],
  t: "croire 的否定与疑问形式转虚拟，肯定形式用直陈——这条规则在 C1 阅读题里反复出现。" },

"C1#6": { d: "自由间接引语在长篇叙事里常与直接引语混用，声音在叙述者与人物之间滑动，形成复调。",
  f: "标志：第三人称 + 人物语气（疑问、感叹、口语词），无引号、无转述动词。",
  e: [["Elle pensait qu'elle n'y arriverait jamais. Et pourtant…", "她觉得自己永远做不到。然而……"], ["Pourquoi avait-il dit cela ? Il ne le savait pas lui-même.", "他为什么说了那句话？他自己也不知道。"]],
  t: "阅读题里问「这句话是谁的想法」，答案常常是人物而非叙述者，靠语气而非引号判断。" },

"C1#7": { d: "关系从句可以压缩成现在分词、过去分词或形容词短语，是提高句法密度的高级手段。",
  f: "qui travaille → travaillant；qui a été construit → construit；qui est célèbre → célèbre。",
  e: [["un homme qui travaille → un homme travaillant", "一个工作的男人"], ["la loi qui a été votée hier → la loi votée hier", "昨天通过的法律"]],
  t: "压缩后要保证逻辑主语仍是同一个，否则会变成悬垂结构。" },

"C1#8": { d: "名词化控制信息密度：把动作压进名词短语，让主句承载判断，是学术写作的常规操作。",
  f: "la mise en œuvre de la réforme、la hausse des prix、l'absence de consensus。",
  e: [["la mise en œuvre de la réforme", "改革的实施"], ["L'absence de consensus a bloqué les négociations.", "缺乏共识使谈判陷入僵局。"]],
  t: "一句话里名词化超过两三层，读者就要反复回读；密度要服务于清晰。" },

"C1#9": { d: "长文本靠指代链保持连贯：用代词、指示词、概括名词回指前文，避免重复。",
  f: "ce dernier / celle-ci / ledit（法律）/ le susdit / cette hypothèse / un tel dispositif。",
  e: [["Ce dernier refusa catégoriquement.", "后者断然拒绝。"], ["Ledit contrat fut annulé.", "上述合同被取消。"]],
  t: "ce dernier 指前面最后提到的那个；指代不清是长句最常见的问题。" },

"C1#10": { d: "书面高雅文体有一套介词短语，替换掉口语里的简单介词。",
  f: "de par（依据）、en matière de（在…方面）、au titre de（以…名义）、à l'égard de（对于）、en dépit de（尽管）。",
  e: [["de par la loi, en matière de fiscalité", "依据法律、在税务方面"], ["En dépit des critiques, le projet avance.", "尽管有批评，项目仍在推进。"]],
  t: "这些短语语域高，滥用会显得做作；一段里用一两个就够。" },

"C1#11": { d: "高级否定用来做精细区分：不是否定全部，而是否定某一点、或把否定转为肯定。",
  f: "non pas… mais…（不是…而是）；loin de（远非）；il n'est pas exclu que（不排除）；sans pour autant（却并不因此）。",
  e: [["Non pas refuser, mais différer la décision.", "不是拒绝，而是推迟决定。"], ["Loin d'être neutre, ce choix engage l'avenir.", "这一选择远非中立，它关系到未来。"]],
  t: "non pas… mais… 两侧必须同构（同词性、同层级），否则逻辑断裂。" },

"C1#12": { d: "让步—保留结构先承认对方有理，再收回结论，是学术辩论的标准动作。",
  f: "Certes… mais…；il n'en reste pas moins que + 直陈；sans doute… toutefois…。",
  e: [["Certes, l'idée séduit ; il n'en reste pas moins qu'elle coûte cher.", "诚然，这个想法诱人；但它仍然代价高昂。"], ["Sans doute a-t-il raison, mais il exagère.", "他也许有理，但他夸张了。"]],
  t: "il n'en reste pas moins que 后接直陈式，表示「尽管如此仍然是事实」。" },

"C1#13": { d: "程度与时间的极端表达，用来精确限定范围或强调时点。",
  f: "tant soit peu（哪怕一点点）、pour autant（因此/就此）、d'ores et déjà（已经）、à peine… que（刚一…就）。",
  e: [["Sans être tant soit peu naïf, on peut y croire.", "不必天真，也可以相信它。"], ["Il n'est pas pour autant coupable.", "他并不因此就有罪。"]],
  t: "tant soit peu 多用于否定或条件句，肯定陈述里显得别扭。" },

"C1#14": { d: "文学文本会用语法本身做修辞：倒装、省略、重复、跨行，形成节奏与陌生化。",
  f: "倒装（Vienne la nuit）、省略动词、重复结构（partir, toujours partir）、矛盾修辞。",
  e: [["Vienne la nuit, sonne l'heure.", "让夜来临，让钟敲响。"], ["Partir, toujours partir, ne jamais revenir.", "走，一直走，永不回头。"]],
  t: "这类句子在语法分析题里要能还原成常序句，再解释倒装带来的语气。" },

"C1#15": { d: "同一意思在不同语域里说法差别很大，C1 要求能在三档之间自如切换。",
  f: "soutenu：nous nous sommes entretenus；courant：on a parlé；familier：on a causé / on a discuté。",
  e: [["nous nous sommes entretenus / on a parlé", "我们交谈过（雅／常）"], ["Il demeure / il reste / il reste encore", "仍然存在（雅／常）"]],
  t: "语域混用是写作扣分点：正式文书里出现 ça、truc、bosser 会立刻掉档。" },

"C1#16": { d: "强调结构在高级写作里可以变形：不只 c'est… que，还有 ce qui… c'est、voilà… que、si… c'est。",
  f: "C'est de cela qu'il s'agit；Ce qui frappe, c'est…；Si je viens, c'est pour toi。",
  e: [["C'est de cela qu'il s'agit.", "问题正在于此。"], ["Si je viens, c'est pour toi.", "我来是为了你。"]],
  t: "注意介词不能丢：C'est de cela qu'il s'agit，不是 C'est cela qu'il s'agit。" },

"C1#17": { d: "虚拟式也能独立成句，表示命令、祝愿或设想，多见于固定表达和文学。",
  f: "Qu'il entre !（让他进来）；Vive la France !；Soit…（假设…）；Puisse-t-il réussir。",
  e: [["Qu'il entre !", "让他进来！"], ["Vive la France !", "法兰西万岁！"]],
  t: "这类句子没有主句，虚拟式由语气赋予；翻译时补出「让/愿」。" },

"C1#18": { d: "文学叙事里时态与语式要相互协调：叙述主线、回顾、设想各占一层，不能随意跳。",
  f: "主线 PS/imparfait；回溯 plus-que-parfait；设想 conditionnel；人物内心 subjonctif。",
  e: [["Il eût voulu parler ; il se tut.", "他本想说话；却沉默了。"], ["Elle savait qu'il partirait, qu'il l'avait déjà quittée.", "她知道他会走，知道他早已离开了她。"]],
  t: "一层叙事里频繁换时态会让时间关系失焦；先定层级，再选时态。" },

"C1#19": { d: "长文本的逻辑推进靠连接副词分层：or 转折、précisément 精确化、en l'occurrence 就本例而言。",
  f: "Or（然而，引出新事实）；précisément（正是）；en l'occurrence（在此情形下）；à cet égard（就此而言）。",
  e: [["Or, précisément, en l'occurrence, rien ne prouve cette thèse.", "然而，确切地说，在此情形下，没有证据支持这一论点。"], ["À cet égard, la comparaison reste limitée.", "就此而言，这一比较仍然有限。"]],
  t: "连接词是逻辑的外显，不能代替逻辑本身；每加一个都要问它标的是哪一层关系。" }
});
