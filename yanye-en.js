/* =========================================================
   言叶 / 英语：语法点（A1→C1）+ 讲解 + 词汇 + 变位 + 音素
   讲解按语法点的 pattern 字符串索引（不用序号，改顺序不会错位）
   ========================================================= */
const YAN_EN = {
  key: "en", name: "英语", tag: "en-US", label: "英语",

  gram: [
    ["A1", [
      ["be: am / is / are", "be 随主语变形：I 用 am，第三人称单数用 is，其余用 are", "She is a student, and her brothers are teachers."],
      ["a / an / the", "不定冠词看读音不看字母，元音音素前用 an；the 指双方都知道的那个", "I saw a cat. The cat was black."],
      ["复数 -s / -es / 不规则", "清辅音后读 /s/，浊音后读 /z/，s/x/ch/sh 后加 -es", "two boxes, three children, five feet"],
      ["this / that / these / those", "近指 this / these，远指 that / those，单复数跟名词一致", "This is my bag; those are yours."],
      ["my / your / his / her / our / their", "形容词性物主代词后面必须跟名词，不能单独使用", "Her office is on the third floor."],
      ["一般现在时", "习惯与事实；第三人称单数动词加 -s", "He works at nine o'clock every day."],
      ["现在进行时 be + doing", "说话这一刻正在发生，常与 now / at the moment 连用", "They are waiting outside."],
      ["there is / there are", "表示某处有某物，be 与后面的名词保持一致", "There is a lamp on the desk."],
      ["can / must / mustn't", "情态动词后接原形，没有人称变化，也没有 to", "You can sit here, but you must not smoke."],
      ["do / does 构成疑问与否定", "实义动词的疑问与否定借 do/does，后面动词回原形", "Do you like tea? She doesn't drive."],
      ["in / on / at", "at 用于钟点，on 用于日期与表面，in 用于月份年份与空间内部", "at seven, on Monday, in July"],
      ["名词所有格 's", "有生命的名词加 's；以 s 结尾的复数只加撇号", "the boy's room, my parents' car"]
    ]],
    ["A2", [
      ["一般过去时", "规则动词加 -ed，不规则要背；did 之后动词回原形", "We watched a film and then went home."],
      ["过去进行时 was/were doing", "过去某一刻正在做的事，常被 when 从句打断", "I was cooking when he called."],
      ["现在完成时 have/has done", "过去发生、与现在有关；for 接一段时间，since 接起点", "She has lived here for ten years."],
      ["比较级与最高级", "单音节加 -er/-est，多音节用 more/most；good → better → best", "This room is cheaper, but that one is the most comfortable."],
      ["much / many / a little / a few", "可数用 many、a few，不可数用 much、a little", "How much water? How many cups?"],
      ["will / be going to", "will 表临时决定与预测，be going to 表已有计划或明显迹象", "It will rain. I'm going to sell the car."],
      ["频度副词的位置", "实义动词之前，be 与助动词之后", "He is always late; she never eats meat."],
      ["want to / enjoy doing", "有的动词后接不定式，有的只接动名词，得逐个记", "I want to leave; I enjoy walking."]
    ]],
    ["B1", [
      ["现在完成进行时 have been doing", "从过去持续到现在且仍在继续，强调过程本身", "I've been reading since morning."],
      ["过去完成时 had done", "过去的过去，用来定出两个过去动作的先后", "She had left before I arrived."],
      ["关系从句 who / which / that", "指人用 who，指物用 which，that 两者皆可但不在逗号后", "the man who called you yesterday"],
      ["条件句 0 / 1", "零条件讲规律，第一条件讲真实将来；if 从句里用现在时", "If you heat ice, it melts. If it rains, we'll stay."],
      ["被动语态 be + 过去分词", "不知道或不必说执行者时用被动，by 引出执行者", "The letter was written in 1913."],
      ["间接引语与时态后移", "主句是过去时，从句时态后退一步，人称与时间词也要改", "He said he was tired that day."],
      ["used to / be used to", "used to + 原形是过去常常；be used to + doing 是习惯于", "I used to smoke. I'm used to noise."],
      ["because / although / so that", "although 之后不再加 but；so that 引出目的", "Although it rained, we went out."]
    ]],
    ["B2", [
      ["第二条件句 / wish", "与现在事实相反，从句用过去式，be 一律用 were", "If I knew, I would tell you."],
      ["第三条件句", "与过去事实相反：if had done, would have done", "If you had asked, I would have helped."],
      ["must / may / can't 表推测", "must 是肯定推测，can't 是否定推测，may 是不确定", "He must be asleep; that can't be true."],
      ["非限制性关系从句", "逗号加 which 只作补充，不能换成 that", "The book, which I bought last year, is lost."],
      ["倒装与 it 强调句", "否定词置句首要部分倒装；It is … that 强调某一成分", "Never have I seen such rain."],
      ["分词结构", "分词短语的逻辑主语必须与主句主语一致", "Having finished the report, she left."]
    ]],
    ["C1", [
      ["虚拟语气 It is essential that … be", "正式书面语中 that 从句用动词原形，不加 -s", "It is essential that he be informed."],
      ["倒装条件句 Had / Were / Should", "省略 if 后把 had、were、should 提到句首", "Had I known, I would have come."],
      ["名词化", "把动词或形容词转成名词，句子更抽象、更书面", "The implementation of the policy provoked resistance."],
      ["情态动词 + have done", "对过去的推测或遗憾：might have、should have", "She might have forgotten; he should have called."],
      ["省略与并列对称", "并列成分共享助动词或介词，省略后结构仍须对称", "He left, and with him the last hope."],
      ["信息结构与 what 从句", "已知信息在前、新信息在后；what 从句可把焦点提到句首", "What matters is not speed but direction."]
    ]]
  ],

  notes: {
    "be: am / is / are": {
      d: "英语每个完整句都要有动词，汉语里可以省略的「是」在英语里必须补出来。be 是最不规则的一个，先把三个人称记死，其余全靠它撑。",
      f: "I am / you are / he, she, it is / we, you, they are；否定在 be 后加 not，疑问把 be 提前。",
      e: [["I am tired.", "我累了。"], ["They are not here.", "他们不在这儿。"]],
      t: "缩写 I'm、he's、they're 只用于口语和非正式书面；正式文书里写全。"
    },
    "a / an / the": {
      d: "冠词是英语里最难「讲清」的一块，因为它承担的是「听者能不能认出指的是哪一个」。第一次提到用 a/an，双方都知道了换 the。",
      f: "a + 辅音音素，an + 元音音素：a university（/juː/ 起头）、an hour（h 不发音）。",
      e: [["She is an honest person.", "她是个诚实的人。"], ["The moon was huge last night.", "昨晚月亮很大。"]],
      t: "复数泛指和不可数泛指不加冠词：Cats hate water. 不是 The cats hate water。"
    },
    "复数 -s / -es / 不规则": {
      d: "复数词尾的读音由前一个音决定，不看拼写。拼写规则和读音规则是两套，背的时候一起背。",
      f: "-s 在清辅音后读 /s/，浊辅音和元音后读 /z/；-es 在 s/x/ch/sh 后读 /ɪz/。",
      e: [["books /bʊks/, dogs /dɔːɡz/, boxes /ˈbɒksɪz/", "三种词尾读音"], ["a child → two children", "不规则复数"]],
      t: "news、information、advice 不可数，没有复数形式。"
    },
    "this / that / these / those": {
      d: "指示词同时管两件事：远近和单复数。远近是心理距离，不完全是物理距离——提起对方刚说过的话也用 that。",
      f: "this / these 近；that / those 远。后接名词时不能再加冠词。",
      e: [["These shoes are too tight.", "这双鞋太紧了。"], ["That was a strange thing to say.", "那话说得奇怪。"]],
      t: "回答 Is this your pen? 用 It is，不用 This is。"
    },
    "my / your / his / her / our / their": {
      d: "这一类是形容词性的，功能等于一个限定词，所以后面必须有名词，也不能和 a/the 同时出现。",
      f: "my, your, his, her, its, our, their；独立使用要用 mine, yours, his, hers, ours, theirs。",
      e: [["Their house has a red door.", "他们家有一扇红门。"], ["This book is mine, not hers.", "这本书是我的，不是她的。"]],
      t: "its 没有撇号；it's 是 it is 的缩写，混用是常见错误。"
    },
    "一般现在时": {
      d: "这个时态管的不是「现在正在」，而是习惯、事实、规律。凡是可以加「总是／通常／每天」的，都归它。",
      f: "主语第三人称单数时动词加 -s/-es；疑问与否定借 does，主动词回原形。",
      e: [["Water boils at 100 °C.", "水在一百度沸腾。"], ["She goes to bed at eleven.", "她十一点睡。"]],
      t: "时间表、车次、课程安排也用一般现在时表将来：The train leaves at six."
    },
    "现在进行时 be + doing": {
      d: "进行时把动作看成一条正在延展的线，而不是一个点。它天然带「暂时」的意思，所以和 always 连用会带上抱怨的语气。",
      f: "am/is/are + 动词 -ing；-ing 前若是重读闭音节单辅音结尾，要双写。",
      e: [["I'm staying with a friend this week.", "这周我住朋友家。"], ["He's always losing his keys.", "他老是丢钥匙。"]],
      t: "know、like、believe、own 这类状态动词一般不用进行时。"
    },
    "there is / there are": {
      d: "there be 是把「存在」提到句首的结构，用来引出新信息；真正的主语在 be 后面。",
      f: "There is + 单数/不可数；There are + 复数。否定 there isn't / there aren't。",
      e: [["There are two windows in the room.", "房间里有两扇窗。"], ["There isn't any milk left.", "牛奶没了。"]],
      t: "不能说 There has a book；「有」表存在一律用 there be，不用 have。"
    },
    "can / must / mustn't": {
      d: "情态动词表达说话人的判断和态度，本身不带人称与数。它们后面永远跟原形，疑问直接提前。",
      f: "can / could / may / might / must / should / will / would + 动词原形。",
      e: [["You must wear a helmet here.", "这里必须戴头盔。"], ["Could you open the window?", "能开一下窗吗？"]],
      t: "mustn't 是「禁止」，不是「不必」；不必用 don't have to。"
    },
    "do / does 构成疑问与否定": {
      d: "英语用助动词来承担时态和人称，主动词退到原形。do/does/did 就是这套机制的入口。",
      f: "Do/Does/Did + 主语 + 原形？主语 + don't/doesn't/didn't + 原形。",
      e: [["Does she speak German?", "她说德语吗？"], ["I didn't see him.", "我没看见他。"]],
      t: "be 和情态动词自己就能倒装和加 not，不再借 do。"
    },
    "in / on / at": {
      d: "三个介词是「容器—表面—定点」三层空间隐喻，时间用法是同一套隐喻的延伸。",
      f: "at 7 o'clock / on Monday / in July；at the door / on the table / in the box。",
      e: [["We met at the station on Friday.", "我们周五在车站见的面。"], ["It happened in 1999.", "那是 1999 年的事。"]],
      t: "in the morning 但 on Monday morning；有具体那一天就用 on。"
    },
    "名词所有格 's": {
      d: "所有格本质是给名词加一个「属格」标记，主要用于人、动物、时间、机构。",
      f: "单数加 's；以 s 结尾的复数只加 '；并列所有者看是否共同拥有。",
      e: [["tomorrow's meeting", "明天的会"], ["Tom and Mary's flat", "汤姆和玛丽（共同）的家"]],
      t: "无生命名词多用 of 结构：the roof of the house，不说 the house's roof。"
    },
    "一般过去时": {
      d: "过去时把事件当成已经封口的一段，与现在断开。句子里有明确的过去时间词时，几乎只能用过去时。",
      f: "规则 -ed；不规则单独记。疑问否定借 did，主动词回原形。",
      e: [["I saw her last week.", "我上周见过她。"], ["Did you finish the report?", "报告写完了吗？"]],
      t: "yesterday、last year、in 1990 出现时不要用现在完成时。"
    },
    "过去进行时 was/were doing": {
      d: "它给过去某个时刻提供一个背景画面，另一件事在这个背景上发生。",
      f: "was/were + doing；常与 while（持续）、when（打断）配合。",
      e: [["While I was cooking, the phone rang.", "我做饭时电话响了。"], ["It was raining at dawn.", "天亮时在下雨。"]],
      t: "两个动作都用过去进行时，表示同时进行：I was reading while she was cooking."
    },
    "现在完成时 have/has done": {
      d: "完成时不是「过去」，而是把过去的事拉到现在的聚光灯下：结果、经验、持续。",
      f: "have/has + 过去分词；for + 时长，since + 起点，just / already / yet 常搭配。",
      e: [["I've lost my keys.", "我把钥匙丢了（现在还没找到）。"], ["Have you ever been to Kyoto?", "你去过京都吗？"]],
      t: "与具体过去时间（yesterday、in 2010）不能连用，那时要用过去时。"
    },
    "比较级与最高级": {
      d: "比较结构本质上是在一个维度上排序。形容词音节数决定用词尾还是用 more/most。",
      f: "单音节 -er/-est；三音节及以上 more/most；两音节看词尾。than 引出比较对象。",
      e: [["She is taller than her brother.", "她比她弟弟高。"], ["This is the least expensive option.", "这是最便宜的方案。"]],
      t: "比较级不能再用 more：more better 是错的。"
    },
    "much / many / a little / a few": {
      d: "英语把名词分成可数与不可数，量词必须跟着名词走，不能只看中文的「多／少」。",
      f: "many / a few / fewer + 可数复数；much / a little / less + 不可数。",
      e: [["There isn't much time left.", "时间不多了。"], ["Only a few people came.", "只来了几个人。"]],
      t: "a few 是「有一些」，few 是「几乎没有」，差一个冠词意思相反。"
    },
    "will / be going to": {
      d: "将来在英语里不是时态而是情态：will 表当下决定与预测，be going to 表已经成形的计划或眼前的迹象。",
      f: "will + 原形；am/is/are going to + 原形。",
      e: [["I'll get it.", "我去开（临时决定）。"], ["Look at those clouds — it's going to rain.", "看那云，要下雨了。"]],
      t: "时间状语从句里表将来用现在时：When he arrives, we'll start."
    },
    "频度副词的位置": {
      d: "频度副词站在「主语」和「谓语」之间的位置上，这条规则几乎涵盖了所有情况。",
      f: "always / usually / often / sometimes / rarely / never；be 与助动词之后。",
      e: [["She has never been late.", "她从没迟到过。"], ["We usually eat at seven.", "我们通常七点吃饭。"]],
      t: "sometimes 和 usually 可以移到句首或句尾，never 和 always 不行。"
    },
    "want to / enjoy doing": {
      d: "动词后面接什么形式，是这个动词自己的语法属性，没有统一逻辑，只能按类记。",
      f: "want / hope / decide / plan + to do；enjoy / avoid / mind / finish + doing。",
      e: [["He decided to stay.", "他决定留下。"], ["She avoided answering.", "她避开了回答。"]],
      t: "stop to do 是停下来去做，stop doing 是停止做，意思完全不同。"
    },
    "现在完成进行时 have been doing": {
      d: "完成进行时把「持续」画得很重：动作从过去开始，一直没停，而且现在还在继续。",
      f: "have/has been + doing；常与 for / since / all day 连用。",
      e: [["I've been waiting for an hour.", "我等了一个小时（还在等）。"], ["It has been raining all week.", "整周都在下雨。"]],
      t: "与完成时不同，它不强调「完成了没有」，只强调「一直在」。"
    },
    "过去完成时 had done": {
      d: "它是「过去的过去」：在已经用过去时叙述的时间线上，再往前退一格。",
      f: "had + 过去分词；常与 before、after、by the time 配合。",
      e: [["By the time we arrived, the film had started.", "我们到时电影已经开场。"], ["She had never seen the sea before that summer.", "那个夏天之前她没见过海。"]],
      t: "只有一个过去动作时不需要它，两个过去动作才有先后可言。"
    },
    "关系从句 who / which / that": {
      d: "关系从句的作用是给名词加一条限制或补充。用哪个关系词，取决于先行词指人还是指物、在从句里作什么成分。",
      f: "who（人，作主语/宾语）、which（物）、whose（所属）、where（地点）、when（时间）。",
      e: [["The woman who lives upstairs is a pianist.", "住楼上的女人是钢琴家。"], ["This is the book that changed my mind.", "就是这本书改变了我的想法。"]],
      t: "关系词在从句里作宾语时可以省略：the book (that) I bought。"
    },
    "条件句 0 / 1": {
      d: "条件句的核心不是「假设」，而是说话人对这件事发生的把握。零条件讲必然规律，第一条件讲真实可能。",
      f: "If + 一般现在时, 一般现在时（0）；If + 一般现在时, will + 原形（1）。",
      e: [["If you press this button, the machine stops.", "按这个按钮机器就停。"], ["If it rains, we'll stay in.", "下雨我们就待着。"]],
      t: "if 从句里不用 will，这是中国学生最常见的错误之一。"
    },
    "被动语态 be + 过去分词": {
      d: "被动把受事提到主语位置，执行者要么不知道，要么不重要，要么故意不说。",
      f: "be + 过去分词；时态体现在 be 上。by 引出执行者，通常可省。",
      e: [["The bridge was built in 1902.", "这座桥建于 1902 年。"], ["English is spoken here.", "这里说英语。"]],
      t: "happen、appear、belong 是不及物动词，没有被动形式。"
    },
    "间接引语与时态后移": {
      d: "转述别人说的话时，视角从「我」移到「他」，时间基点也跟着后移。这是一次整体坐标变换。",
      f: "主句过去时：现在时→过去时，过去时/完成时→过去完成时，will→would。",
      e: [["He said he would call me later.", "他说他晚点打给我。"], ["She told me she had finished.", "她告诉我她做完了。"]],
      t: "转述客观真理时不后移：He said water boils at 100 °C。"
    },
    "used to / be used to": {
      d: "这两个结构只差一个 be，但意思几乎相反：一个是过去如此、现在不再；一个是已经习惯。",
      f: "used to + 原形（过去常常）；be used to + 名词/doing（习惯于）。",
      e: [["I used to live in Chengdu.", "我以前住成都。"], ["I'm not used to getting up early.", "我不习惯早起。"]],
      t: "还有 be used to do（被用来做），三种结构靠形式区分。"
    },
    "because / although / so that": {
      d: "连接副词从句的连词，本身就表达了逻辑关系，所以主句里不再重复同类的连接词。",
      f: "because 原因，although 让步，so that 目的，unless 条件，while 对比。",
      e: [["Although it was late, she kept working.", "虽然很晚了，她还在工作。"], ["He spoke slowly so that everyone could follow.", "他讲得慢，好让所有人跟上。"]],
      t: "although 与 but 不同时出现；because 与 so 也不同时出现。"
    },
    "第二条件句 / wish": {
      d: "第二条件句描述与现在事实相反的假设，用过去式表示「不是真的」，这是一种时态的距离感。",
      f: "If + 过去式, would + 原形；be 一律用 were。wish 后用同样的过去式。",
      e: [["If I had more time, I would learn the cello.", "时间多点我就学大提琴。"], ["I wish I were taller.", "我要是个子高一点就好了。"]],
      t: "口语里 I wish I was 也常听到，但书面语用 were。"
    },
    "第三条件句": {
      d: "第三条件句是对已经发生的事做反事实推演，两边都必须落在过去完成与 would have done 上。",
      f: "If + had done, would/could/might have done。",
      e: [["If we had left earlier, we wouldn't have missed the train.", "早走就不会误车了。"], ["If she had known, she might have said yes.", "她要是知道，可能会答应。"]],
      t: "混合条件句可以前半在过去、后半在现在：If I had studied, I would be a doctor now."
    },
    "must / may / can't 表推测": {
      d: "情态动词表推测时，说的是证据强度，不是事实。must 接近确定，may 是一半，can't 是确定不。",
      f: "must be / may be / might be / can't be + 名词或形容词；对过去推测用 must have done。",
      e: [["The lights are off — they must be out.", "灯灭着，他们肯定出去了。"], ["That can't be the right answer.", "那不可能是正确答案。"]],
      t: "表推测的 must 否定形式是 can't，不是 mustn't。"
    },
    "非限制性关系从句": {
      d: "逗号把从句变成补充说明，删掉它主句依然成立。因此它不能用来限定先行词，也不能用 that。",
      f: "…, which / who …；which 还可以指代整个前面那句话。",
      e: [["He arrived late, which annoyed everyone.", "他迟到了，这让大家都很烦。"], ["My father, who is 70, still cycles.", "我父亲七十了还在骑车。"]],
      t: "限制性与非限制性差别在信息地位，翻成中文时常常一者是定语、一者是独立一句。"
    },
    "倒装与 it 强调句": {
      d: "英语靠语序承担信息焦点。把否定副词提到句首会触发助动词提前；it 强调句则用一个空主语把焦点框住。",
      f: "Never / Rarely / Not only + 助动词 + 主语 + 动词；It is + 焦点 + that …。",
      e: [["Not only did he apologize, he also paid.", "他不但道歉，还付了钱。"], ["It was in Rome that they met.", "他们是在罗马认识的。"]],
      t: "倒装只为强调，正常语序并没有错，写作里别滥用。"
    },
    "分词结构": {
      d: "分词短语是压缩后的从句，靠「同一主语」把两句并成一句。主语不一致时就成了悬垂分词。",
      f: "现在分词表主动/同时；过去分词表被动/完成；完成式 having done 表先发生。",
      e: [["Walking home, I saw the lights go out.", "走回家时我看见灯灭了。"], ["Written in haste, the letter was full of errors.", "信写得匆忙，错处很多。"]],
      t: "Walking home, the church came into view 是错的，因为教堂不会走回家。"
    },
    "虚拟语气 It is essential that … be": {
      d: "这是残留的虚拟式，只活在正式书面语和少数固定结构里，特征是第三人称单数也不加 -s。",
      f: "It is essential / necessary / important that + 主语 + 动词原形。",
      e: [["It is vital that every member attend.", "每个成员都必须出席。"], ["They insisted that he resign.", "他们坚持要他辞职。"]],
      t: "英式书面语常见，美式口语常改写成 should + 原形。"
    },
    "倒装条件句 Had / Were / Should": {
      d: "省略 if 之后，把 had、were、should 提到主语前，语域立刻变得正式、书面。",
      f: "Had I known = If I had known；Were I you = If I were you；Should you need = If you should need。",
      e: [["Were I in your position, I would refuse.", "我要是你，我就拒绝。"], ["Should you require assistance, call this number.", "如需协助，请拨此号码。"]],
      t: "否定形式不倒装：Had I not seen it, I wouldn't have believed it。"
    },
    "名词化": {
      d: "名词化把过程压成实体，句子因此更抽象、更「学术」，代价是动作的执行者被抹掉了。",
      f: "动词/形容词 → 名词：implement → implementation，resist → resistance，fail → failure。",
      e: [["The decision was met with widespread resistance.", "这个决定遭到广泛抵制。"], ["There was a sharp decline in attendance.", "出席率急剧下降。"]],
      t: "名词化过度会让句子失血；文学写作里宁可还主动词。"
    },
    "情态动词 + have done": {
      d: "这一组结构专门用来回头看：对过去的事做推测、责备或遗憾。",
      f: "must have done 一定做过；might have done 也许；should have done 本该；needn't have done 本不必。",
      e: [["You should have told me.", "你本该告诉我。"], ["She needn't have waited.", "她本不必等。"]],
      t: "should have done 与 could have done 的区别在「义务」与「可能性」。"
    },
    "省略与并列对称": {
      d: "并列结构里重复的成分可以删掉，但删完之后两边必须仍然对得上，这是英语句子能拉长的关键。",
      f: "相同助动词、介词、主语可共享：He can swim and (can) dive。",
      e: [["She writes, edits and publishes her own books.", "她自写、自编、自出版。"], ["He left, and with him the last hope.", "他走了，最后一点希望也跟着走了。"]],
      t: "省略后若造成歧义，宁可重复也不要省。"
    },
    "信息结构与 what 从句": {
      d: "英语句子的默认顺序是已知在前、新信息在后。要打破这个顺序，就用分裂句把焦点先摆出来。",
      f: "What + 从句 + is …；It is … that …；There + be 引出新实体。",
      e: [["What I remember is the silence.", "我记得的是那种安静。"], ["What matters is not speed but direction.", "重要的不是速度而是方向。"]],
      t: "what 从句本身不能再用 that 引导，两个关系词不能叠。"
    }
  },

  links: [["Cambridge","https://dictionary.cambridge.org/dictionary/english-chinese-simplified/"], ["Merriam-Webster","https://www.merriam-webster.com/"], ["WordReference","https://www.wordreference.com/enzh/"]],
  verbs: [
    { v: "be", zh: "是（系动词）", p: ["I am", "you are", "he is", "we are", "you are", "they are"] },
    { v: "have", zh: "有；完成时助动词", p: ["I have", "you have", "he has", "we have", "you have", "they have"] },
    { v: "do", zh: "做；疑问与否定助动词", p: ["I do", "you do", "he does", "we do", "you do", "they do"] },
    { v: "go", zh: "去", p: ["I go", "you go", "he goes", "we go", "you go", "they go"] },
    { v: "take", zh: "拿；花费（时间）", p: ["I take", "you take", "he takes", "we take", "you take", "they take"] },
    { v: "speak", zh: "说（某种语言）", p: ["I speak", "you speak", "he speaks", "we speak", "you speak", "they speak"] }
  ],
  /* 六个时态列，每人称一格；p 记现在时，其余在 yanye.js 里按词表展开 */
  verbCols: ["一般现在", "一般过去", "现在完成", "一般将来", "过去完成", "现在进行"],
  persons: ["1s", "2s", "3s", "1p", "2p", "3p"],
  verbForms: {
    "be": [["I am", "you are", "he is", "we are", "you are", "they are"], ["I was", "you were", "he was", "we were", "you were", "they were"], ["I have been", "you have been", "he has been", "we have been", "you have been", "they have been"], ["I will be", "you will be", "he will be", "we will be", "you will be", "they will be"], ["I had been", "you had been", "he had been", "we had been", "you had been", "they had been"], ["I am being", "you are being", "he is being", "we are being", "you are being", "they are being"]],
    "have": [["I have", "you have", "he has", "we have", "you have", "they have"], ["I had", "you had", "he had", "we had", "you had", "they had"], ["I have had", "you have had", "he has had", "we have had", "you have had", "they have had"], ["I will have", "you will have", "he will have", "we will have", "you will have", "they will have"], ["I had had", "you had had", "he had had", "we had had", "you had had", "they had had"], ["I am having", "you are having", "he is having", "we are having", "you are having", "they are having"]],
    "do": [["I do", "you do", "he does", "we do", "you do", "they do"], ["I did", "you did", "he did", "we did", "you did", "they did"], ["I have done", "you have done", "he has done", "we have done", "you have done", "they have done"], ["I will do", "you will do", "he will do", "we will do", "you will do", "they will do"], ["I had done", "you had done", "he had done", "we had done", "you had done", "they had done"], ["I am doing", "you are doing", "he is doing", "we are doing", "you are doing", "they are doing"]],
    "go": [["I go", "you go", "he goes", "we go", "you go", "they go"], ["I went", "you went", "he went", "we went", "you went", "they went"], ["I have gone", "you have gone", "he has gone", "we have gone", "you have gone", "they have gone"], ["I will go", "you will go", "he will go", "we will go", "you will go", "they will go"], ["I had gone", "you had gone", "he had gone", "we had gone", "you had gone", "they had gone"], ["I am going", "you are going", "he is going", "we are going", "you are going", "they are going"]],
    "take": [["I take", "you take", "he takes", "we take", "you take", "they take"], ["I took", "you took", "he took", "we took", "you took", "they took"], ["I have taken", "you have taken", "he has taken", "we have taken", "you have taken", "they have taken"], ["I will take", "you will take", "he will take", "we will take", "you will take", "they will take"], ["I had taken", "you had taken", "he had taken", "we had taken", "you had taken", "they had taken"], ["I am taking", "you are taking", "he is taking", "we are taking", "you are taking", "they are taking"]],
    "speak": [["I speak", "you speak", "he speaks", "we speak", "you speak", "they speak"], ["I spoke", "you spoke", "he spoke", "we spoke", "you spoke", "they spoke"], ["I have spoken", "you have spoken", "he has spoken", "we have spoken", "you have spoken", "they have spoken"], ["I will speak", "you will speak", "he will speak", "we will speak", "you will speak", "they will speak"], ["I had spoken", "you had spoken", "he had spoken", "we had spoken", "you had spoken", "they had spoken"], ["I am speaking", "you are speaking", "he is speaking", "we are speaking", "you are speaking", "they are speaking"]]
  },

  phon: [
    { g: "单元音", ipa: "/iː/", w: "see", zh: "长「衣」，嘴角向两边拉，舌位高而前" },
    { g: "单元音", ipa: "/ɪ/", w: "sit", zh: "短促的「衣」，肌肉放松，介于衣与诶之间" },
    { g: "单元音", ipa: "/e/", w: "bed", zh: "短「诶」，口型半开" },
    { g: "单元音", ipa: "/æ/", w: "cat", zh: "把嘴张到能看见舌面，介于「诶」与「啊」之间" },
    { g: "单元音", ipa: "/ʌ/", w: "cup", zh: "短促的中央元音，比「啊」靠后靠上" },
    { g: "单元音", ipa: "/ɑː/", w: "car", zh: "长「啊」，舌位后、口张大" },
    { g: "单元音", ipa: "/ɒ/", w: "hot", zh: "短圆唇「哦」，英式常见" },
    { g: "单元音", ipa: "/ɔː/", w: "law", zh: "长圆唇「哦」，下颌放低" },
    { g: "单元音", ipa: "/ʊ/", w: "book", zh: "短「乌」，双唇略圆不紧张" },
    { g: "单元音", ipa: "/uː/", w: "food", zh: "长「乌」，双唇用力前突" },
    { g: "单元音", ipa: "/ɜː/", w: "bird", zh: "卷舌的中央长元音，汉语没有对应" },
    { g: "弱读元音", ipa: "/ə/", w: "about", zh: "最松的中央元音，非重读音节几乎都读它" },
    { g: "双元音", ipa: "/eɪ/", w: "day", zh: "从「诶」滑向「衣」" },
    { g: "双元音", ipa: "/aɪ/", w: "my", zh: "从「啊」滑向「衣」" },
    { g: "双元音", ipa: "/ɔɪ/", w: "boy", zh: "从圆唇「哦」滑向「衣」" },
    { g: "双元音", ipa: "/aʊ/", w: "now", zh: "从「啊」滑向「乌」" },
    { g: "双元音", ipa: "/əʊ/", w: "go", zh: "从中央元音滑向「乌」" },
    { g: "辅音", ipa: "/θ/", w: "think", zh: "舌尖轻触上齿，气流从缝隙挤出，不振动声带" },
    { g: "辅音", ipa: "/ð/", w: "this", zh: "同上但振动声带，汉语没有" },
    { g: "辅音", ipa: "/ʃ/", w: "she", zh: "舌叶抬起靠近齿龈后部，双唇略圆" },
    { g: "辅音", ipa: "/tʃ/", w: "chair", zh: "塞擦音，先堵后擦，接近「吃」但不卷舌" },
    { g: "辅音", ipa: "/dʒ/", w: "job", zh: "/tʃ/ 的浊音，接近「知」但不卷舌" },
    { g: "辅音", ipa: "/ŋ/", w: "sing", zh: "舌根抵软腭，气流从鼻腔出" },
    { g: "辅音", ipa: "/r/", w: "red", zh: "舌尖卷起但不碰上腭，双唇略圆" },
    { g: "辅音", ipa: "/l/", w: "light", zh: "舌尖抵上齿龈，气流从两侧出" },
    { g: "辅音", ipa: "/v/", w: "very", zh: "上齿轻触下唇，振动声带，与 /w/ 区别在此" }
  ],

  rules: [
    ["开音节与闭音节", "元音字母在开音节（以元音结尾）读长音：name、bike、home；闭音节读短音：cat、sit、hot"],
    ["词尾 e 不发音但改前音", "make /meɪk/、bit /bɪt/ → bite /baɪt/；e 的作用是把前面的短元音拉长"],
    ["-ed 的三种读音", "清辅音后 /t/：worked；浊音与元音后 /d/：played；t/d 后 /ɪd/：wanted"],
    ["重音与弱读", "实词重读、虚词弱读；非重读音节的元音多半降成 /ə/：photograph → photography"],
    ["连读与失去爆破", "辅音结尾接元音开头要连：take it /teɪkɪt/；/t/ /d/ 遇辅音常只做口型不爆破"]
  ],

  words: [
    ["A1", "hello", "int.", "/həˈloʊ/", "你好", "Hello, nice to meet you.", "你好，很高兴认识你。"],
    ["A1", "water", "n.", "/ˈwɔːtər/", "水", "Could I have a glass of water?", "能给我一杯水吗？"],
    ["A1", "house", "n.", "/haʊs/", "房子", "They live in a small house.", "他们住在一间小房子里。"],
    ["A1", "book", "n.", "/bʊk/", "书", "This book is worth reading twice.", "这本书值得读两遍。"],
    ["A1", "friend", "n.", "/frend/", "朋友", "She is my oldest friend.", "她是我最老的朋友。"],
    ["A1", "eat", "v.", "/iːt/", "吃", "We eat dinner at seven.", "我们七点吃晚饭。"],
    ["A1", "morning", "n.", "/ˈmɔːrnɪŋ/", "早晨", "The light is best in the morning.", "早上的光最好。"],
    ["A1", "family", "n.", "/ˈfæməli/", "家庭", "His family moved to Yibin.", "他家搬去了宜宾。"],
    ["A1", "school", "n.", "/skuːl/", "学校", "School starts at eight.", "八点上课。"],
    ["A1", "money", "n.", "/ˈmʌni/", "钱", "I have no money this month.", "这个月我没钱。"],
    ["A1", "small", "adj.", "/smɔːl/", "小的", "It's a small room with a big window.", "房间小，窗户大。"],
    ["A1", "happy", "adj.", "/ˈhæpi/", "快乐的", "I'm happy with the result.", "我对结果满意。"],

    ["A2", "arrive", "v.", "/əˈraɪv/", "到达", "We arrived just before the rain.", "我们赶在下雨前到了。"],
    ["A2", "borrow", "v.", "/ˈbɑːroʊ/", "借入", "May I borrow your pen?", "能借你的笔吗？"],
    ["A2", "careful", "adj.", "/ˈkerfl/", "小心的", "Be careful with that glass.", "小心那个杯子。"],
    ["A2", "decide", "v.", "/dɪˈsaɪd/", "决定", "She decided to stay one more night.", "她决定再住一晚。"],
    ["A2", "enough", "adv./adj.", "/ɪˈnʌf/", "足够的", "The soup isn't hot enough.", "汤不够热。"],
    ["A2", "forget", "v.", "/fərˈɡet/", "忘记", "I forgot to lock the door.", "我忘了锁门。"],
    ["A2", "invite", "v.", "/ɪnˈvaɪt/", "邀请", "They invited us to dinner.", "他们请我们吃晚饭。"],
    ["A2", "journey", "n.", "/ˈdʒɜːrni/", "旅程", "The journey takes six hours.", "路上要六个小时。"],

    ["B1", "achieve", "v.", "/əˈtʃiːv/", "达到；实现", "He achieved what he set out to do.", "他做到了当初想做的事。"],
    ["B1", "attitude", "n.", "/ˈætɪtuːd/", "态度", "Her attitude changed after the letter.", "那封信之后她态度变了。"],
    ["B1", "benefit", "n./v.", "/ˈbenɪfɪt/", "益处；受益", "Everyone benefits from clean air.", "清洁空气人人受益。"],
    ["B1", "challenge", "n./v.", "/ˈtʃælɪndʒ/", "挑战", "The exam is a real challenge.", "这次考试是真正的挑战。"],
    ["B1", "confident", "adj.", "/ˈkɑːnfɪdənt/", "自信的", "He sounds confident, but he isn't sure.", "他听着自信，其实没底。"],
    ["B1", "environment", "n.", "/ɪnˈvaɪrənmənt/", "环境", "The environment shapes the habit.", "环境塑造习惯。"],
    ["B1", "experience", "n.", "/ɪkˈspɪriəns/", "经验；经历", "Experience taught him patience.", "经验教会了他耐心。"],
    ["B1", "manage", "v.", "/ˈmænɪdʒ/", "设法做到；管理", "I managed to finish before midnight.", "我赶在午夜前做完了。"],

    ["B2", "ambiguous", "adj.", "/æmˈbɪɡjuəs/", "含混的", "His answer was deliberately ambiguous.", "他的回答故意含糊。"],
    ["B2", "coherent", "adj.", "/koʊˈhɪrənt/", "连贯的", "The argument is coherent but thin.", "论证连贯，但单薄。"],
    ["B2", "derive", "v.", "/dɪˈraɪv/", "源自；推导", "The word derives from Latin.", "这个词源自拉丁语。"],
    ["B2", "inevitable", "adj.", "/ɪnˈevɪtəbl/", "不可避免的", "The delay was inevitable.", "延误是免不了的。"],
    ["B2", "perceive", "v.", "/pərˈsiːv/", "察觉；看作", "He is perceived as distant.", "他被看作冷淡的人。"],
    ["B2", "reluctant", "adj.", "/rɪˈlʌktənt/", "不情愿的", "She was reluctant to speak first.", "她不愿先开口。"],

    ["C1", "allege", "v.", "/əˈledʒ/", "（未经证实地）声称", "The report alleges serious neglect.", "报告称存在严重疏忽。"],
    ["C1", "arbitrary", "adj.", "/ˈɑːrbətreri/", "任意的；专断的", "The rule feels arbitrary.", "这条规则像是随手定的。"],
    ["C1", "deteriorate", "v.", "/dɪˈtɪriəreɪt/", "恶化", "The situation deteriorated overnight.", "局势一夜之间恶化了。"],
    ["C1", "implicit", "adj.", "/ɪmˈplɪsɪt/", "隐含的", "There is an implicit threat in the sentence.", "这句话里藏着威胁。"],
    ["C1", "undermine", "v.", "/ˌʌndərˈmaɪn/", "逐渐削弱", "Constant doubt undermines trust.", "持续的怀疑会蚀掉信任。"],
    ["C1", "viable", "adj.", "/ˈvaɪəbl/", "可行的", "It is not a viable plan.", "这方案不可行。"]
  ]
};
