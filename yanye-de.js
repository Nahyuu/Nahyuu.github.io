/* =========================================================
   言叶 / 德语：语法点（A1→C1）+ 讲解 + 词汇 + 变位 + 音素
   ========================================================= */
const YAN_DE = {
  key: "de", name: "德语", tag: "de-DE", label: "德语",

  gram: [
    ["A1", [
      ["der / die / das", "名词分阴阳中三性，冠词跟名词走，必须连冠词一起背", "der Tisch, die Lampe, das Fenster"],
      ["复数形式", "复数词尾有 -e / -er / -en / -s 与变音几种，无统一规律", "das Kind → die Kinder, der Apfel → die Äpfel"],
      ["Nominativ 第一格", "主语格：der / die / das / die", "Der Mann liest ein Buch."],
      ["Akkusativ 第四格", "直接宾语格；只有阳性冠词变成 den", "Ich sehe den Mann."],
      ["Dativ 第三格", "间接宾语格：dem / der / dem / den + 名词加 -n", "Ich gebe dem Kind ein Buch."],
      ["动词现在时变位", "词干加 -e / -st / -t / -en / -t / -en；词干以 t 结尾要插 e", "du arbeitest, er arbeitet"],
      ["动词第二位", "陈述句里变位动词固定在第二位，第一位留给别的成分", "Heute fahre ich nach Berlin."],
      ["一般疑问句", "变位动词提到句首，句末语调上扬", "Kommst du mit?"],
      ["W-疑问句", "疑问词占第一位，变位动词仍在第二位", "Wo wohnst du?"],
      ["nicht 与 kein", "否定名词用 kein，否定动作、形容词用 nicht", "Ich habe kein Geld. Das ist nicht wahr."],
      ["情态动词 können / müssen", "情态动词占第二位，实义动词原形放句末", "Ich muss heute arbeiten."],
      ["可分动词", "陈述句里前缀被甩到句末，构成框型结构", "Ich stehe um sechs Uhr auf."]
    ]],
    ["A2", [
      ["Perfekt 现在完成时", "haben / sein + 第二分词；位移与状态变化用 sein", "Ich habe gegessen. Ich bin gefahren."],
      ["Präteritum 过去时", "书面叙述常用；sein、haben、情态动词口语里也用", "Er war müde. Sie hatte keine Zeit."],
      ["第二分词的构成", "ge- … -t 或 ge- … -en；不可分前缀不加 ge", "gemacht, gelesen, verstanden"],
      ["形容词弱变化", "定冠词之后只有 -e 与 -en 两种词尾", "das kleine Kind, mit dem kleinen Kind"],
      ["物主冠词", "mein / dein / sein / ihr / unser，词尾随性数格变化", "mein Bruder, mit meiner Schwester"],
      ["介词与格 / 宾格", "mit、nach、aus、zu、von、bei 接第三格；für、ohne、gegen 接第四格", "mit dem Bus, für den Freund"],
      ["情态动词过去时", "konnte、musste、wollte、durfte、sollte", "Ich konnte gestern nicht kommen."],
      ["命令式", "du 形式去掉 -st，ihr 形式去掉 -t，Sie 形式倒装", "Mach das Licht an! Kommen Sie bitte!"]
    ]],
    ["B1", [
      ["从句语序 dass / weil / wenn", "从句里变位动词退到句末", "Ich bleibe zu Hause, weil ich krank bin."],
      ["关系从句", "关系代词随格变化，变位动词置句末", "Der Mann, den ich gestern traf, ist mein Lehrer."],
      ["过程被动态", "werden + 第二分词；执行者用 von", "Das Haus wird seit März gebaut."],
      ["Konjunktiv II", "würde + 原形；sein、haben 用 wäre、hätte", "Wenn ich Zeit hätte, würde ich mehr lesen."],
      ["zu + 不定式", "um … zu 表目的，ohne … zu 表未发生，statt … zu 表替代", "Ich lerne Deutsch, um in Berlin zu studieren."],
      ["比较级与最高级", "形容词加 -er，最高级 am -sten；als 引出比较对象", "Er läuft schneller als ich."],
      ["反身动词", "sich 随人称变位，第四格或第三格反身代词", "Ich freue mich auf das Wochenende."],
      ["动词名词化 -ung", "动词加 -ung 变阴性名词，书面语里大量使用", "Die Entscheidung war schwer."]
    ]],
    ["B2", [
      ["Genitiv 第二格", "所属格：des + 名词加 -s，der / des 阴中", "die Farbe des Himmels"],
      ["过去反事实", "hätte / wäre + 第二分词", "Wenn ich das gewusst hätte, wäre ich gekommen."],
      ["被动的替代形式", "sein + 分词表状态；sich lassen + 原形表可能", "Das Fenster ist geöffnet."],
      ["扩展分词定语", "分词短语夹在冠词与名词之间，替代关系从句", "der gestern geschriebene Brief"],
      ["情态动词表推测", "muss / dürfte / könnte + 原形", "Er muss zu Hause sein."],
      ["语篇连接词", "deshalb、trotzdem、allerdings、zwar … aber", "Es regnete, trotzdem gingen wir spazieren."]
    ]],
    ["C1", [
      ["Konjunktiv I 间接引语", "新闻与学术转述用第一虚拟式，第三人称常无词尾", "Er sagte, er sei krank."],
      ["功能动词结构", "名词 + 动词：zur Verfügung stellen、in Frage kommen", "Die Daten stehen zur Verfügung."],
      ["名词化文体", "把从句压成名词短语，句子更密、更书面", "Die Durchführung erfolgt bis Freitag."],
      ["框型结构 Satzklammer", "助动词与分词、情态动词与原形分居两端", "Er hat das Buch gestern gelesen."],
      ["情态小品词", "doch、mal、ja、wohl 不改变命题，只调节语气", "Komm doch mal vorbei!"],
      ["信息结构", "已知信息在前，新信息落在句尾焦点位", "Das hat mir niemand gesagt."]
    ]]
  ],

  notes: {
    "der / die / das": {
      d: "德语的性不是自然性别，而是词的语法属性：das Mädchen（少女）是中性的。学名词时冠词必须和词一起进记忆。",
      f: "阳性 der、阴性 die、中性 das；复数一律 die。",
      e: [["der Schlüssel, die Brille, das Messer", "钥匙、眼镜、刀"], ["Das Mädchen liest.", "那个女孩在读书。"]],
      t: "词尾有提示作用：-ung、-heit、-keit、-schaft 几乎都是阴性；-chen、-lein 一律中性。"
    },
    "复数形式": {
      d: "德语复数没有一条能覆盖全部的词尾规则，只能按类型记，同时记住是否变音。",
      f: "常见：-e（Tische）、-er（Kinder）、-en（Frauen）、-s（Autos）、无词尾（Fenster）。",
      e: [["der Tisch → die Tische", "阳性的 -e 类"], ["das Buch → die Bücher", "变音加 -er"]],
      t: "阴性名词绝大多数加 -en，这是最好用的一条：die Lampe → die Lampen。"
    },
    "Nominativ 第一格": {
      d: "格是德语用来标记句子成分的系统。第一格承担主语和表语，是词典里的默认形式。",
      f: "der / die / das / die；不定冠词 ein / eine / ein / —。",
      e: [["Der Lehrer erklärt die Regel.", "老师在讲规则。"], ["Das ist ein Problem.", "这是个问题。"]],
      t: "sein、werden 后面的名词也用第一格：Er ist ein guter Arzt。"
    },
    "Akkusativ 第四格": {
      d: "第四格标记直接宾语和大多数介词后的方向。整个系统里只有阳性会露出变化，这是德语的「省力设计」。",
      f: "der → den，die / das / die 不变；不定冠词 ein → einen。",
      e: [["Ich kaufe den Mantel.", "我买这件大衣。"], ["Wir haben einen Hund.", "我们有一条狗。"]],
      t: "es gibt 后面永远接第四格：Es gibt einen Bahnhof。"
    },
    "Dativ 第三格": {
      d: "第三格标记间接宾语、受益者，以及一批固定接第三格的介词和动词。",
      f: "dem / der / dem / den（复数名词加 -n）；einem / einer / einem / —。",
      e: [["Ich helfe meinem Bruder.", "我帮我弟弟。"], ["Sie dankt der Lehrerin.", "她谢了那位老师。"]],
      t: "helfen、danken、gehören、gefallen、passen 都接第三格。"
    },
    "动词现在时变位": {
      d: "德语动词靠词尾标记人称，主语不能省（除命令式）。规则动词的六个人称词尾非常稳定。",
      f: "-e, -st, -t, -en, -t, -en；词干以 t/d 结尾时 du、er、ihr 要插 -e-。",
      e: [["ich mache, du machst, er macht", "规则变位"], ["du findest, er findet", "词干以 d 结尾"]],
      t: "stark 动词会换元音：fahren → du fährst, er fährt。"
    },
    "动词第二位": {
      d: "德语的动词位置是句子的骨架：陈述句第二位，从句末位。这条规则比主语位置更重要。",
      f: "第一位可以是状语、宾语、从句；变位动词永远占第二位。",
      e: [["Heute fahre ich nach Berlin.", "今天我开车去柏林。"], ["Nach dem Essen geht er spazieren.", "饭后他去散步。"]],
      t: "第一位不是主语时，主语要移到动词后面，形成倒装。"
    },
    "一般疑问句": {
      d: "没有疑问词的疑问句靠语序表达：把变位动词从第二位挪到第一位，其余不动。",
      f: "动词 + 主语 + 其他？否定回答用 nein 或 doch。",
      e: [["Hast du Zeit?", "你有时间吗？"], ["Ist das dein Buch? — Ja, das ist meins.", "这是你的书吗？——是，是我的。"]],
      t: "对否定问句作肯定回答要用 doch，不用 ja。"
    },
    "W-疑问句": {
      d: "疑问词占据第一位，动词仍在第二位，主语紧随其后。疑问词本身按格变形。",
      f: "wer（第一格）/ wen（第四格）/ wem（第三格）/ wo、wann、wie、warum。",
      e: [["Wen hast du gesehen?", "你看见谁了？"], ["Wann beginnt der Film?", "电影几点开始？"]],
      t: "wo 是静态地点，wohin 是方向，不要混用。"
    },
    "nicht 与 kein": {
      d: "德语把否定分成两种：否定整个命题用 nicht，否定一个带不定冠词或零冠词的名词用 kein。",
      f: "kein 按格变：keinen / keiner / keinem；nicht 尽量靠句末，但否定特定成分时放在它前面。",
      e: [["Ich habe keine Zeit.", "我没时间。"], ["Das ist nicht mein Problem.", "这不是我的问题。"]],
      t: "否定带定冠词的名词用 nicht：nicht das Buch，不用 kein。"
    },
    "情态动词 können / müssen": {
      d: "情态动词把「可能、必须、允许」等态度加到动作上，动作本身以原形留在句末，形成句框。",
      f: "主语 + 情态动词变位 + … + 动词原形。",
      e: [["Ich muss heute länger arbeiten.", "我今天得加班。"], ["Kannst du mir helfen?", "你能帮我吗？"]],
      t: "müssen 的否定是 nicht müssen（不必），不是 nicht dürfen（不许）。"
    },
    "可分动词": {
      d: "可分动词由前缀加动词构成，重音在前缀上。陈述句里前缀被推到句末，从句里则重新合成一个词。",
      f: "aufstehen → Ich stehe um sechs auf. / …, weil ich um sechs aufstehe。",
      e: [["Er ruft seine Mutter an.", "他给母亲打电话。"], ["Wann fängt der Kurs an?", "课程什么时候开始？"]],
      t: "不可分前缀 be-、er-、ver-、ge-、ent- 从不分离。"
    },
    "Perfekt 现在完成时": {
      d: "口语里叙述过去几乎都用完成时。它由助动词加第二分词构成，助动词的选择看动词是否涉及位移或状态改变。",
      f: "haben / sein + 第二分词（句末）。",
      e: [["Ich habe den Film gesehen.", "我看过这部电影。"], ["Wir sind nach Hause gegangen.", "我们回家了。"]],
      t: "bleiben、passieren、werden 也用 sein：Ich bin geblieben。"
    },
    "Präteritum 过去时": {
      d: "过去时主要用于书面叙述：小说、报道、历史。口语里除 sein、haben、情态动词外一般不用。",
      f: "规则：词干 + -te；强变化另记（ging、kam、sah）。",
      e: [["Er war damals zwanzig.", "他那时二十岁。"], ["Sie hatte Angst.", "她当时害怕。"]],
      t: "口语里说 Ich habe gegessen，书面里写 Ich aß，两者不宜混在同一段。"
    },
    "第二分词的构成": {
      d: "第二分词是完成时与被动语态的核心零件，规则与不规则各占一半，必须逐个记。",
      f: "规则：ge- + 词干 + -t；强变化：ge- + 词干 + -en，元音常变。",
      e: [["machen → gemacht", "规则"], ["lesen → gelesen", "强变化"], ["besuchen → besucht", "不可分前缀不加 ge"]],
      t: "以 -ieren 结尾的动词不加 ge：studieren → studiert。"
    },
    "形容词弱变化": {
      d: "形容词词尾承担格的标记，但如果冠词已经把格说清楚了，形容词只需 -e 或 -en。",
      f: "定冠词后：单数第一格 -e，其余几乎都是 -en。",
      e: [["das kleine Kind", "第一格中性"], ["mit dem kleinen Kind", "第三格"]],
      t: "不定冠词后词尾会「接管」冠词没说明的信息，规则另一套。"
    },
    "物主冠词": {
      d: "物主冠词本质是 ein 的变体：词干表人称，词尾表性数格。",
      f: "mein, dein, sein, ihr, unser, euer, ihr, Ihr + 与 ein 相同的词尾。",
      e: [["mein Vater, meine Mutter", "我的父亲、母亲"], ["mit seinem Freund", "和他的朋友"]],
      t: "euer 在加词尾时丢掉中间的 e：eure Stadt。"
    },
    "介词与格 / 宾格": {
      d: "介词决定后面名词的格。第三格介词与第四格介词各有一批，混合介词（in、an、auf）看方向还是位置。",
      f: "三格：aus, bei, mit, nach, seit, von, zu；四格：durch, für, gegen, ohne, um。",
      e: [["Ich fahre mit dem Fahrrad.", "我骑车。"], ["Das Geschenk ist für dich.", "礼物给你。"]],
      t: "in / an / auf 表位置用第三格，表方向用第四格：in der Stadt / in die Stadt。"
    },
    "情态动词过去时": {
      d: "情态动词的过去时没有词尾变化的人称标记（除 er/sie/es 也相同），这是它们的历史残留。",
      f: "können → konnte，müssen → musste，wollen → wollte，dürfen → durfte，sollen → sollte。",
      e: [["Ich konnte nicht schlafen.", "我睡不着。"], ["Wir mussten warten.", "我们不得不等。"]],
      t: "情态动词的完成时多用过去时替代：Ich habe nicht kommen können 较少见。"
    },
    "命令式": {
      d: "命令式按对话对象分三种形式，动词提到句首，du 与 ihr 形式常省略主语。",
      f: "du: 词干（+e）；ihr: 词干 + t；Sie: 动词 + Sie。可分前缀回句末。",
      e: [["Mach die Tür zu!", "把门关上！"], ["Nehmen Sie bitte Platz.", "请坐。"]],
      t: "强变化动词的 du 命令式通常不再变音：Fahr langsam! 不是 Fähr。"
    },
    "从句语序 dass / weil / wenn": {
      d: "从句里变位动词退到最末，这是德语最显著的语序特征。主句与从句之间用逗号隔开。",
      f: "主句 + , + 连词 + 其他成分 + 变位动词。",
      e: [["Ich bleibe zu Hause, weil ich krank bin.", "我待在家，因为我病了。"], ["Ich weiß, dass er kommt.", "我知道他会来。"]],
      t: "从句在前时，主句要倒装：Weil ich krank bin, bleibe ich zu Hause。"
    },
    "关系从句": {
      d: "关系代词的形式由它在从句里的格决定，不由先行词决定。这是德语关系从句最容易出错的地方。",
      f: "der/die/das/den/dem…；介词可置于关系代词前。",
      e: [["Der Mann, den ich traf, war Arzt.", "我遇到的那个人是医生。"], ["Die Stadt, in der ich wohne, ist klein.", "我住的城市很小。"]],
      t: "关系代词的第二格是 dessen / deren。"
    },
    "过程被动态": {
      d: "被动态把视角从施动者移到过程本身，德语用 werden 加第二分词，比英语更常用。",
      f: "werden（变位）+ 第二分词（句末）；施动者用 von + 第三格。",
      e: [["Das Haus wird gerade renoviert.", "房子正在翻修。"], ["Der Brief wurde gestern geschickt.", "信昨天寄出。"]],
      t: "状态被动用 sein + 分词：Das Fenster ist geöffnet（窗是开着的）。"
    },
    "Konjunktiv II": {
      d: "第二虚拟式表达非现实：假设、礼貌、委婉建议。形式上多用 würde 加原形，只有高频动词保留原形。",
      f: "würde + 原形；sein → wäre，haben → hätte，können → könnte。",
      e: [["Wenn ich reich wäre, würde ich reisen.", "我要是有钱就去旅行。"], ["Könnten Sie das wiederholen?", "您能再说一遍吗？"]],
      t: "礼貌请求几乎全用第二虚拟式：Ich hätte gern einen Kaffee。"
    },
    "zu + 不定式": {
      d: "带 zu 的不定式把第二个动作压成短语，配 um、ohne、statt 时表达目的、缺席与替代。",
      f: "um … zu（目的）、ohne … zu（未做）、statt … zu（而不是）、动词 + zu + 原形。",
      e: [["Ich lerne Deutsch, um zu studieren.", "我学德语是为了留学。"], ["Er ging, ohne sich zu verabschieden.", "他没告别就走了。"]],
      t: "可分动词的 zu 插在前缀与词干之间：anzurufen。"
    },
    "比较级与最高级": {
      d: "比较级加 -er，最高级 am -sten；umlaut 在部分单音节形容词上出现。",
      f: "klein → kleiner → am kleinsten；gut → besser → am besten。",
      e: [["Sie ist jünger als ich.", "她比我年轻。"], ["Das ist die beste Lösung.", "这是最好的方案。"]],
      t: "比较的对象用 als，不用 wie；wie 只用于同级比较 so … wie。"
    },
    "反身动词": {
      d: "反身代词表明动作返回主语自身。有些动词必须反身（sich freuen），有些可反身也可不反身。",
      f: "mich / dich / sich / uns / euch / sich；部分动词用第三格反身。",
      e: [["Ich wasche mich.", "我洗脸。"], ["Wir treffen uns um acht.", "我们八点见。"]],
      t: "sich freuen auf 是期待将来，sich freuen über 是为已发生的事高兴。"
    },
    "动词名词化 -ung": {
      d: "动词加 -ung 得到阴性名词，是德语书面语把动作变成可讨论对象的主要手段。",
      f: "动词词干 + -ung：entscheiden → die Entscheidung。",
      e: [["Die Umsetzung dauert zwei Jahre.", "实施要两年。"], ["Seine Erklärung war kurz.", "他的解释很短。"]],
      t: "以 -ung 结尾的名词一律阴性，复数加 -en。"
    },
    "Genitiv 第二格": {
      d: "第二格表所属，是书面语与正式文体的标志；口语里常用 von + 第三格替代。",
      f: "阳性中性：des + 名词 + -s；阴性复数：der + 名词。",
      e: [["die Farbe des Himmels", "天空的颜色"], ["die Meinung der Leute", "人们的看法"]],
      t: "弱变化阳性名词第二格也加 -en：des Studenten。"
    },
    "过去反事实": {
      d: "对已经发生的事做相反假设：条件句用 hätte/wäre + 分词，主句用 hätte/wäre + 分词 + 情态。",
      f: "Wenn … hätte/wäre + 分词, hätte/wäre … + 分词。",
      e: [["Wenn ich das gewusst hätte, wäre ich gekommen.", "我要是早知道就来了。"], ["Das hätte nicht passieren dürfen.", "这本来不该发生。"]],
      t: "口语里常用 hätte + 原形替代双不定式，书面语仍用完成形式。"
    },
    "被动的替代形式": {
      d: "德语不爱连用 werden 被动，于是有了几种替代：状态被动、sich lassen、sein + zu + 不定式。",
      f: "sein + 分词（状态）；sich lassen + 原形（可以）；sein + zu + 原形（必须/可以）。",
      e: [["Das lässt sich erklären.", "这是可以解释的。"], ["Die Rechnung ist bis Freitag zu bezahlen.", "账单须在周五前付清。"]],
      t: "sich lassen 结构里主语是受事，逻辑上仍是被动。"
    },
    "扩展分词定语": {
      d: "书面德语把整个从句压成夹在冠词与名词之间的分词短语，阅读时需要从名词往回拆。",
      f: "冠词 + 状语 + 分词 + 名词：der gestern geschriebene Brief。",
      e: [["die seit Jahren geplante Reform", "计划多年的改革"], ["der von ihm verfasste Bericht", "他写的报告"]],
      t: "拆解顺序：先找名词，再往前找分词，分词前面全是修饰成分。"
    },
    "情态动词表推测": {
      d: "情态动词可以表达说话人对命题的把握程度，从高到低：muss、dürfte、könnte、müsste。",
      f: "情态动词 + 原形（现在推测）；+ 第二分词 + haben（过去推测）。",
      e: [["Er muss zu Hause sein.", "他肯定在家。"], ["Sie könnte den Zug verpasst haben.", "她可能误了车。"]],
      t: "dürfte 表「大概」，比 muss 弱、比 könnte 强。"
    },
    "语篇连接词": {
      d: "连接词决定句子之间的逻辑走向，也决定语序：deshalb、trotzdem 占第一位，动词第二位。",
      f: "deshalb / darum / trotzdem / außerdem 后倒装；aber、denn 不占位。",
      e: [["Es regnete, trotzdem gingen wir spazieren.", "下雨了，我们还是去散步。"], ["Ich hatte keine Zeit, deshalb habe ich nicht angerufen.", "我没时间，所以没打电话。"]],
      t: "trotzdem 是「尽管如此」，obwohl 是「虽然」，不要混用。"
    },
    "Konjunktiv I 间接引语": {
      d: "转述别人的话时用第一虚拟式，表明「这是他的说法，不是我的断言」，新闻语言里几乎必用。",
      f: "动词词干 + -e（第三人称常无词尾）；sein 用 sei。",
      e: [["Er sagte, er sei krank.", "他说他病了。"], ["Die Firma erklärte, sie habe keine Pläne.", "公司称没有计划。"]],
      t: "第一虚拟式与现在时同形时，改用第二虚拟式以免歧义。"
    },
    "功能动词结构": {
      d: "把动词的意思装进名词，再用一个泛义动词承担变位，这是德语学术与公文文体的标准做法。",
      f: "zur Verfügung stellen、in Frage stellen、Kritik üben、eine Entscheidung treffen。",
      e: [["Die Daten stehen zur Verfügung.", "数据可供使用。"], ["Wir müssen eine Entscheidung treffen.", "我们必须做决定。"]],
      t: "这类结构不能逐字翻译，整体当作一个动词记。"
    },
    "名词化文体": {
      d: "名词化把过程变成实体，句子因此可以在有限的动词位置里塞进更多信息，代价是读起来抽象。",
      f: "动词 → 名词 + 泛义动词：durchführen → die Durchführung erfolgt。",
      e: [["Die Durchführung erfolgt bis Freitag.", "实施将于周五前完成。"], ["Nach Prüfung der Unterlagen …", "审核材料之后……"]],
      t: "介词短语里的名词化常常对应一个从句，翻译时要还原成动词。"
    },
    "框型结构 Satzklammer": {
      d: "德语句子常被拆成两半：左边是变位动词，右边是分词或原形，中间塞满其他成分。听力理解的关键是等右边那一半。",
      f: "助动词/情态动词（第二位）… 分词/原形（末位）。",
      e: [["Er hat das Buch gestern in der Bibliothek gelesen.", "他昨天在图书馆读了这本书。"], ["Sie will nächste Woche nach Wien fahren.", "她下周想去维也纳。"]],
      t: "从句里框型消失，两个动词靠在一起：…, weil er das Buch gelesen hat。"
    },
    "情态小品词": {
      d: "doch、mal、ja、wohl 不改变事实内容，只改变说话人的姿态：催促、缓和、共知、推测。",
      f: "常居句中，不重读；doch 还可回答否定问句。",
      e: [["Komm doch mal vorbei!", "你过来坐坐嘛！"], ["Das ist ja interessant.", "这倒有意思。"]],
      t: "小品词极难直译，宁可按语气整体处理，不要逐字找对应。"
    },
    "信息结构": {
      d: "德语靠位置分配信息：句首放已知的、回指的，句尾放新信息与焦点。",
      f: "句首成分可由宾语、状语、从句占据，动词仍第二位。",
      e: [["Das hat mir niemand gesagt.", "这事没人告诉过我。"], ["Mir hat das niemand gesagt.", "（强调）没人告诉过我这事。"]],
      t: "把新信息放在句尾，是德语写作里最容易被忽略的一条节奏规则。"
    }
  },

  links: [["DWDS","https://www.dwds.de/"], ["Duden","https://www.duden.de/"], ["LEO","https://dict.leo.org/german-english/"]],
  verbs: [
    { v: "sein", zh: "是（系动词，最不规则）" },
    { v: "haben", zh: "有；完成时助动词" },
    { v: "werden", zh: "变成；将来与时被动助动词" },
    { v: "gehen", zh: "走；去" },
    { v: "machen", zh: "做（规则动词范例）" },
    { v: "sprechen", zh: "说；讲（强变化范例）" }
  ],
  verbCols: ["现在时", "过去时", "现在完成时", "将来时", "第二虚拟式", "过去完成时"],
  persons: ["ich", "du", "er/sie/es", "wir", "ihr", "sie/Sie"],
  verbForms: {
    "sein": [["bin", "bist", "ist", "sind", "seid", "sind"], ["war", "warst", "war", "waren", "wart", "waren"], ["bin gewesen", "bist gewesen", "ist gewesen", "sind gewesen", "seid gewesen", "sind gewesen"], ["werde sein", "wirst sein", "wird sein", "werden sein", "werdet sein", "werden sein"], ["wäre", "wärst", "wäre", "wären", "wärt", "wären"], ["war gewesen", "warst gewesen", "war gewesen", "waren gewesen", "wart gewesen", "waren gewesen"]],
    "haben": [["habe", "hast", "hat", "haben", "habt", "haben"], ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"], ["habe gehabt", "hast gehabt", "hat gehabt", "haben gehabt", "habt gehabt", "haben gehabt"], ["werde haben", "wirst haben", "wird haben", "werden haben", "werdet haben", "werden haben"], ["hätte", "hättest", "hätte", "hätten", "hättet", "hätten"], ["hatte gehabt", "hattest gehabt", "hatte gehabt", "hatten gehabt", "hattet gehabt", "hatten gehabt"]],
    "werden": [["werde", "wirst", "wird", "werden", "werdet", "werden"], ["wurde", "wurdest", "wurde", "wurden", "wurdet", "wurden"], ["bin geworden", "bist geworden", "ist geworden", "sind geworden", "seid geworden", "sind geworden"], ["werde werden", "wirst werden", "wird werden", "werden werden", "werdet werden", "werden werden"], ["würde", "würdest", "würde", "würden", "würdet", "würden"], ["war geworden", "warst geworden", "war geworden", "waren geworden", "wart geworden", "waren geworden"]],
    "gehen": [["gehe", "gehst", "geht", "gehen", "geht", "gehen"], ["ging", "gingst", "ging", "gingen", "gingt", "gingen"], ["bin gegangen", "bist gegangen", "ist gegangen", "sind gegangen", "seid gegangen", "sind gegangen"], ["werde gehen", "wirst gehen", "wird gehen", "werden gehen", "werdet gehen", "werden gehen"], ["ginge", "gingest", "ginge", "gingen", "ginget", "gingen"], ["war gegangen", "warst gegangen", "war gegangen", "waren gegangen", "wart gegangen", "waren gegangen"]],
    "machen": [["mache", "machst", "macht", "machen", "macht", "machen"], ["machte", "machtest", "machte", "machten", "machtet", "machten"], ["habe gemacht", "hast gemacht", "hat gemacht", "haben gemacht", "habt gemacht", "haben gemacht"], ["werde machen", "wirst machen", "wird machen", "werden machen", "werdet machen", "werden machen"], ["würde machen", "würdest machen", "würde machen", "würden machen", "würdet machen", "würden machen"], ["hatte gemacht", "hattest gemacht", "hatte gemacht", "hatten gemacht", "hattet gemacht", "hatten gemacht"]],
    "sprechen": [["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"], ["sprach", "sprachst", "sprach", "sprachen", "spracht", "sprachen"], ["habe gesprochen", "hast gesprochen", "hat gesprochen", "haben gesprochen", "habt gesprochen", "haben gesprochen"], ["werde sprechen", "wirst sprechen", "wird sprechen", "werden sprechen", "werdet sprechen", "werden sprechen"], ["spräche", "sprächest", "spräche", "sprächen", "sprächet", "sprächen"], ["hatte gesprochen", "hattest gesprochen", "hatte gesprochen", "hatten gesprochen", "hattet gesprochen", "hatten gesprochen"]]
  },

  phon: [
    { g: "长元音", ipa: "/aː/", w: "Tag", zh: "长的「啊」，口张大、舌位低" },
    { g: "短元音", ipa: "/a/", w: "Mann", zh: "短的「啊」，比长音短促有力" },
    { g: "长元音", ipa: "/eː/", w: "Tee", zh: "闭口长「诶」，嘴角拉开" },
    { g: "短元音", ipa: "/ɛ/", w: "Bett", zh: "开口短「诶」" },
    { g: "长元音", ipa: "/iː/", w: "Liebe", zh: "长「衣」，舌位高前" },
    { g: "短元音", ipa: "/ɪ/", w: "mit", zh: "短「衣」，肌肉放松" },
    { g: "长元音", ipa: "/oː/", w: "Ohr", zh: "圆唇长「哦」" },
    { g: "短元音", ipa: "/ɔ/", w: "Kopf", zh: "圆唇短「哦」，口更开" },
    { g: "长元音", ipa: "/uː/", w: "Uhr", zh: "圆唇长「乌」" },
    { g: "短元音", ipa: "/ʊ/", w: "Mutter", zh: "短「乌」，双唇不紧张" },
    { g: "变音", ipa: "/yː/", w: "Tür", zh: "先摆 /iː/ 再收圆唇，汉语没有" },
    { g: "变音", ipa: "/ʏ/", w: "fünf", zh: "/yː/ 的短音版本" },
    { g: "变音", ipa: "/øː/", w: "schön", zh: "先摆 /eː/ 再收圆唇" },
    { g: "变音", ipa: "/œ/", w: "zwölf", zh: "/øː/ 的短音，口更开" },
    { g: "弱读", ipa: "/ə/", w: "bitte", zh: "词尾 -e 的弱化中央元音" },
    { g: "双元音", ipa: "/aɪ/", w: "mein", zh: "从「啊」滑向「衣」" },
    { g: "双元音", ipa: "/aʊ/", w: "Haus", zh: "从「啊」滑向「乌」" },
    { g: "双元音", ipa: "/ɔʏ/", w: "neu", zh: "从圆唇「哦」滑向「ü」" },
    { g: "辅音", ipa: "/ç/", w: "ich", zh: "舌面靠近硬腭送气，接近轻声的「希」" },
    { g: "辅音", ipa: "/x/", w: "Bach", zh: "舌根靠近软腭摩擦，汉语「喝」更靠后" },
    { g: "辅音", ipa: "/ʃ/", w: "Schule", zh: "sch 读「施」，双唇略圆" },
    { g: "辅音", ipa: "/ts/", w: "Zeit", zh: "z 读「次」，塞擦" },
    { g: "辅音", ipa: "/pf/", w: "Pfanne", zh: "p 与 f 连读成一个塞擦音" },
    { g: "辅音", ipa: "/r/", w: "rot", zh: "小舌颤音或擦音，不必卷舌" }
  ],

  rules: [
    ["ch 的两种读法", "a、o、u、au 之后读 /x/（Bach、Buch）；其余读 /ç/（ich、Mädchen）"],
    ["ei / ie 不要弄反", "ei 读 /aɪ/（mein）；ie 读长 /iː/（Liebe）"],
    ["eu / äu", "一律读 /ɔʏ/：neu、Häuser、träumen"],
    ["sch / sp / st", "sch 读 /ʃ/；词首 sp、st 也读 /ʃp/、/ʃt/：Sport、Stadt"],
    ["词尾 -er", "读作弱化的 /ɐ/，接近「啊」：Vater、Lehrer、Kinder"],
    ["v 与 w", "v 多读 /f/（Vater），外来词读 /v/（Vase）；w 读 /v/（Wasser→/v/）"]
  ],

  words: [
    ["A1", "der Mann", "n.", "/man/", "男人；丈夫", "Der Mann wartet vor der Tür.", "那个男人在门口等。"],
    ["A1", "die Frau", "n.", "/fʁaʊ/", "女人；妻子", "Die Frau liest Zeitung.", "那位女士在看报。"],
    ["A1", "das Kind", "n.", "/kɪnt/", "孩子", "Das Kind spielt im Hof.", "孩子在院子里玩。"],
    ["A1", "gehen", "v.", "/ˈɡeːən/", "走；去", "Ich gehe jetzt nach Hause.", "我现在回家。"],
    ["A1", "kommen", "v.", "/ˈkɔmən/", "来", "Wann kommst du?", "你什么时候来？"],
    ["A1", "sprechen", "v.", "/ˈʃpʁɛçn̩/", "说；讲", "Sprichst du Deutsch?", "你说德语吗？"],
    ["A1", "gut", "adj.", "/ɡuːt/", "好的", "Das Essen war gut.", "饭菜不错。"],
    ["A1", "heute", "adv.", "/ˈhɔʏtə/", "今天", "Heute bleibe ich zu Hause.", "今天我待在家。"],
    ["A1", "die Stadt", "n.", "/ʃtat/", "城市", "Die Stadt ist sehr alt.", "这座城市很古老。"],
    ["A1", "das Wasser", "n.", "/ˈvasɐ/", "水", "Ein Glas Wasser, bitte.", "请给一杯水。"],
    ["A1", "der Tag", "n.", "/taːk/", "白天；日子", "Der Tag war lang.", "这一天很长。"],
    ["A1", "danke", "int.", "/ˈdaŋkə/", "谢谢", "Danke für die Hilfe.", "谢谢帮忙。"],

    ["A2", "erklären", "v.", "/ɛɐ̯ˈklɛːʁən/", "解释", "Können Sie das erklären?", "您能解释一下吗？"],
    ["A2", "die Erfahrung", "n.", "/ɛɐ̯ˈfaːʁʊŋ/", "经验", "Er hat viel Erfahrung.", "他经验丰富。"],
    ["A2", "der Termin", "n.", "/tɛʁˈmiːn/", "约定；预约", "Ich habe morgen einen Termin.", "我明天有个预约。"],
    ["A2", "die Möglichkeit", "n.", "/ˈmøːklɪçkaɪt/", "可能性", "Es gibt noch eine Möglichkeit.", "还有一种可能。"],
    ["A2", "vergessen", "v.", "/fɛɐ̯ˈɡɛsn̩/", "忘记", "Ich habe den Schlüssel vergessen.", "我忘带钥匙了。"],
    ["A2", "die Wohnung", "n.", "/ˈvoːnʊŋ/", "公寓", "Die Wohnung ist zu teuer.", "这房子太贵。"],
    ["A2", "der Unterschied", "n.", "/ˈʊntɐʃiːt/", "区别", "Der Unterschied ist klein.", "区别很小。"],
    ["A2", "sich freuen", "v.", "/zɪç ˈfʁɔʏən/", "高兴；期待", "Ich freue mich auf den Urlaub.", "我期待假期。"],

    ["B1", "die Entscheidung", "n.", "/ɛntˈʃaɪdʊŋ/", "决定", "Die Entscheidung fiel schwer.", "这个决定很难做。"],
    ["B1", "die Umgebung", "n.", "/ʊmˈɡeːbʊŋ/", "周围环境", "Die Umgebung ist ruhig.", "周围很安静。"],
    ["B1", "der Einfluss", "n.", "/ˈaɪnflʊs/", "影响", "Der Einfluss ist kaum messbar.", "影响几乎测不出来。"],
    ["B1", "verändern", "v.", "/fɛɐ̯ˈʔɛndɐn/", "改变", "Das hat mich verändert.", "那件事改变了我。"],
    ["B1", "die Absicht", "n.", "/ˈapzɪçt/", "意图", "Das war keine Absicht.", "那不是故意的。"],
    ["B1", "vergleichen", "v.", "/fɛɐ̯ˈɡlaɪçn̩/", "比较", "Man kann die zwei nicht vergleichen.", "这两个无法比较。"],
    ["B1", "der Vorschlag", "n.", "/ˈfoːɐ̯ʃlaːk/", "建议", "Das ist ein guter Vorschlag.", "这是个好建议。"],
    ["B1", "allerdings", "adv.", "/ˈalɐdɪŋs/", "不过；确实", "Es ist teuer, allerdings gut.", "贵是贵，不过真好。"],

    ["B2", "die Voraussetzung", "n.", "/ˈfoːɐ̯ʔaʊszɛtsʊŋ/", "前提", "Das ist keine Voraussetzung.", "这不是前提。"],
    ["B2", "die Wahrnehmung", "n.", "/ˈvaːɐ̯neːmʊŋ/", "感知", "Die Wahrnehmung täuscht oft.", "感知常常骗人。"],
    ["B2", "der Zusammenhang", "n.", "/tsuˈzamənhaŋ/", "关联", "Der Zusammenhang ist unklar.", "其中的关联不清楚。"],
    ["B2", "wesentlich", "adj.", "/ˈveːzntlɪç/", "本质的；关键的", "Das ist der wesentliche Punkt.", "这是关键的一点。"],
    ["B2", "die Bereitschaft", "n.", "/bəˈʁaɪtʃaft/", "意愿", "Die Bereitschaft fehlt.", "缺的是意愿。"],
    ["B2", "verzichten", "v.", "/fɛɐ̯ˈtsɪçtn̩/", "放弃", "Sie verzichtet auf das Angebot.", "她放弃了这个机会。"],

    ["C1", "die Wechselwirkung", "n.", "/ˈvɛksl̩vɪʁkʊŋ/", "相互作用", "Die Wechselwirkung ist zentral.", "相互作用是核心。"],
    ["C1", "das Missverständnis", "n.", "/ˈmɪsfɛɐ̯ʃtɛntnɪs/", "误解", "Hier liegt ein Missverständnis.", "这里有个误解。"],
    ["C1", "voraussetzen", "v.", "/foːɐ̯ˈʔaʊszɛtsn̩/", "以…为前提", "Das setzt Vertrauen voraus.", "这以信任为前提。"],
    ["C1", "unmittelbar", "adj.", "/ˈʊnmiːtl̩baːɐ̯/", "直接的；即刻的", "Die Folge war unmittelbar spürbar.", "后果立刻就能感觉到。"],
    ["C1", "die Verflechtung", "n.", "/fɛɐ̯ˈflɛçtʊŋ/", "交织；纠缠", "Die Verflechtung von Macht und Geld.", "权力与钱的交织。"],
    ["C1", "ausgeprägt", "adj.", "/ˈaʊsɡəpʁɛːkt/", "鲜明的；突出的", "Er hat ein ausgeprägtes Gespür.", "他有很强的直觉。"]
  ]
};
