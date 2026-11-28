/* =========================================================
   记录 / 星：三组星象图 + 点星看讲解
   ---------------------------------------------------------
   南十字星（Crux）、夏季大三角、冬季大三角。
   坐标是示意位置，只保证形状和相对关系，不是实测星表。
   ========================================================= */
const STAR_GROUPS = [
  {
    id: "crux",
    zh: "南十字星",
    en: "Crux",
    sub: "全天 88 个星座里最小的一个，却最容易被认出来",
    intro: "四颗亮星摆成一个干净的小十字，不用找别的参照物。它太小，小到当年欧洲水手南下第一次看见时，以为它是半人马座的一部分——直到 16 世纪才被单独分出来。澳大利亚、新西兰、巴西、巴布亚新几内亚的国旗上都有它。",
    tip: "长轴（γ → α）延长约 4.5 倍，落在南天极上，这是南半球最常用的找南方法。北纬 25° 以北基本看不到整组。",
    lines: [["g", "a"], ["b", "d"]],
    stars: [
      {
        k: "a", zh: "十字架二", lat: "Acrux · α Cru", mag: "0.77", dist: "321 光年",
        x: 300, y: 258, lx: 316, ly: 264, anchor: "start",
        text: "南十字最亮的一颗，也是全天第 13 亮星。它其实是三合星：主星是一颗蓝白色的 B 型亚巨星，4 角秒外跟着一颗差不多亮的伴星，再远处还有第三颗。望远镜里能看到前两颗分开。",
      },
      {
        k: "g", zh: "十字架一", lat: "Gacrux · γ Cru", mag: "1.59", dist: "88.6 光年",
        x: 300, y: 62, lx: 286, ly: 58, anchor: "end",
        text: "三颗亮星里唯一偏橙红的一颗——因为它已经离开主序，膨胀成了红巨星，而且离我们只有 88 光年，是全天最近的红巨星之一。它和一颗黄色主序星组成双星。",
      },
      {
        k: "b", zh: "十字架三", lat: "Mimosa · β Cru", mag: "1.25", dist: "335 光年",
        x: 172, y: 150, lx: 156, ly: 146, anchor: "end",
        text: "蓝白色巨星，还是一颗 β Cep 型脉动变星：表面以大约 4.6 小时的周期一涨一缩，亮度跟着微微起伏，肉眼看不出来，仪器能测到。它的西名 Mimosa 出现得很晚，早期星图里它没有独立名字。",
      },
      {
        k: "d", zh: "十字架四", lat: "Imai · δ Cru", mag: "2.79", dist: "345 光年",
        x: 430, y: 175, lx: 446, ly: 179, anchor: "start",
        text: "蓝白色亚巨星，是一对靠得很近的分光双星，两星绕转周期不到两年，用望远镜分不开，只能从光谱里看出两个速度。Imai 这个名字到 2017 年才由国际天文学联合会正式确定。",
      },
      {
        k: "e", zh: "十字架五", lat: "Ginan · ε Cru", mag: "3.59", dist: "228 光年",
        x: 470, y: 244, lx: 486, ly: 248, anchor: "start",
        text: "橙色巨星，在十字右下角，肉眼看得见，但不在十字的骨架上，所以画十字时通常不连它。名字同样来自 2017 年的正式命名，取自澳大利亚原住民 Wardaman 语。",
      },
    ],
  },
  {
    id: "summer",
    zh: "夏季大三角",
    en: "Summer Triangle",
    sub: "三颗星分属三个星座，连起来就是夏夜的路标",
    intro: "它不是一个星座，是三颗一等以上亮星围出来的三角形：天琴座的织女星、天鹅座的天津四、天鹰座的牛郎星。夏天晚上抬头最亮的那几颗，基本都在里面。银河从织女星和天津四之间穿过，往南一直流到牛郎星旁边。",
    tip: "三角形里看起来最暗的是天津四，但它其实是三颗里最亮的——只是离得太远，光被稀释了。",
    band: true,
    lines: [["v", "d"], ["d", "a"], ["a", "v"]],
    stars: [
      {
        k: "v", zh: "织女星", lat: "Vega · α Lyr", mag: "0.03", dist: "25.0 光年",
        x: 195, y: 80, lx: 210, ly: 76, anchor: "start",
        text: "全天第五亮星，也是除太阳外第一颗被拍下照片的恒星（1850 年）。它自转极快，赤道速度约每秒 236 公里，所以形状是扁的。一万多年前它曾是北极星，大约 1.37 万年后会再次成为北极星。1983 年发现它有红外过量，说明周围有一圈尘埃盘。",
      },
      {
        k: "d", zh: "天津四", lat: "Deneb · α Cyg", mag: "1.25", dist: "约 2600 光年",
        x: 455, y: 105, lx: 440, ly: 92, anchor: "end",
        text: "天鹅座尾巴尖上那颗。它的距离至今没定准（1500–3000 光年之间），但不管取哪个值，它都是肉眼可见恒星里最亮的之一，绝对星等约 −8.4。它还是 α Cyg 型脉动变星的原型：大气在缓慢地胀缩，亮度小幅变化。",
      },
      {
        k: "a", zh: "牛郎星", lat: "Altair · α Aql", mag: "0.76", dist: "16.7 光年",
        x: 330, y: 255, lx: 348, ly: 259, anchor: "start",
        text: "离我们最近的亮星之一，只有 16.7 光年。自转周期约 9 小时，快到赤道明显鼓出来，扁率接近两成——它是第一颗被直接拍到表面形状（扁球）的恒星。和织女星隔着银河相望，就是七夕那个故事。",
      },
    ],
  },
  {
    id: "winter",
    zh: "冬季大三角",
    en: "Winter Triangle",
    sub: "三颗全在一等以上，是全年最亮的三角形",
    intro: "参宿四、天狼星、南河三组成的近似等边三角形，三颗都极亮，冬天夜里几乎不可能认错。它们分属猎户座、大犬座、小犬座，横跨天球赤道两侧。",
    tip: "天狼星是三者里最低的，升起得晚；如果你先看到参宿四和南河三，就往东南方向低处找那颗最亮的。",
    lines: [["b", "s"], ["s", "p"], ["p", "b"]],
    stars: [
      {
        k: "b", zh: "参宿四", lat: "Betelgeuse · α Ori", mag: "0.0–1.6", dist: "约 550 光年",
        x: 310, y: 58, lx: 326, ly: 54, anchor: "start",
        text: "红超巨星，半径约是太阳的 700 倍：把它放在太阳的位置，表面会伸到火星轨道附近。2019 年底到 2020 年初它突然暗了一半，当时很多人以为是超新星前兆，后来查明是它抛出的尘埃挡住了光。它最终会以 II 型超新星爆发收场——时间可能是明天，也可能是十万年后。",
      },
      {
        k: "s", zh: "天狼星", lat: "Sirius · α CMa", mag: "−1.46", dist: "8.6 光年",
        x: 185, y: 262, lx: 170, ly: 258, anchor: "end",
        text: "全天最亮的恒星。它亮不是因为本身多厉害，而是因为近——只有 8.6 光年。它是双星：主星是白色的 A 型星，伴星 Sirius B 是一颗白矮星，一个太阳的质量压在地球那么大的体积里。古埃及人用它黎明前升起的时间来预告尼罗河泛滥。",
      },
      {
        k: "p", zh: "南河三", lat: "Procyon · α CMi", mag: "0.34", dist: "11.5 光年",
        x: 430, y: 268, lx: 446, ly: 272, anchor: "start",
        text: "小犬座的 α 星，离我们 11.5 光年。它同样是双星，伴星 Procyon B 也是白矮星——和天狼星那一对几乎是同一个模子。名字来自希腊语，意思是「在狗之前」，因为它总比天狼星早约 40 分钟升起。",
      },
    ],
  },
  {
    id: "dipper",
    zh: "北斗七星",
    en: "Big Dipper · Ursa Major",
    sub: "七颗星里，五颗是一家人，两颗是外来者",
    intro: "大熊座的一部分，勺口四颗、勺柄三颗。它最实用的地方是找北极星：天璇 → 天枢 连一条线，往勺口方向延长五倍，就是北极星。在中国古代它被分成「斗魁」和「斗柄」，斗柄指向随季节转一圈，古人拿它定节气。",
    tip: "北斗并不是一个绑在一起的星团：天枢、摇光之外的五颗属于同一个星群（大熊座移动星群），正一起朝同一个方向走；天枢和摇光各有各的去向。十万年后，这把勺子会散开。",
    lines: [["a", "b"], ["b", "g"], ["g", "d"], ["d", "a"], ["d", "e"], ["e", "z"], ["z", "h"]],
    stars: [
      {
        k: "a", zh: "天枢", lat: "Dubhe · α UMa", mag: "1.79", dist: "123 光年",
        x: 215, y: 80, lx: 200, ly: 74, anchor: "end",
        text: "勺口外角，橙色巨星。它是一颗分光双星，伴星质量约 1.6 个太阳。天枢和摇光是七颗里唯二不属于大熊座移动星群的——它们的空间速度和另外五颗不一样。",
      },
      {
        k: "b", zh: "天璇", lat: "Merak · β UMa", mag: "2.37", dist: "79.7 光年",
        x: 210, y: 185, lx: 196, ly: 190, anchor: "end",
        text: "勺口内角，蓝白色主序星，周围有尘埃盘。找北极星用的就是它：从天璇穿过天枢，朝勺口外延长大约五倍距离，落在北极星上。",
      },
      {
        k: "g", zh: "天玑", lat: "Phecda · γ UMa", mag: "2.44", dist: "83.2 光年",
        x: 300, y: 200, lx: 300, ly: 226, anchor: "middle",
        text: "勺底那颗，A 型主序星，自转很快，赤道附近有气体盘的红外迹象。它和天璇、玉衡、开阳属于同一个移动星群，正一起往一个方向漂。",
      },
      {
        k: "d", zh: "天权", lat: "Megrez · δ UMa", mag: "3.31", dist: "58.4 光年",
        x: 300, y: 105, lx: 292, ly: 140, anchor: "end",
        text: "七颗里最暗的一颗，把勺口和勺柄连起来。它暗不是因为被遮住，而是本身质量小（约 1.6 个太阳）。阿拉伯语名字的意思是「勺根」。因为离我们只有 58 光年，它在七颗里其实算近的。",
      },
      {
        k: "e", zh: "玉衡", lat: "Alioth · ε UMa", mag: "1.77", dist: "82.6 光年",
        x: 400, y: 130, lx: 400, ly: 104, anchor: "middle",
        text: "北斗最亮的一颗，勺柄第一颗。它的光谱很怪：表面某些化学元素分布不均，自转时谱线忽宽忽窄，天文学上叫「特殊 A 型星」，这个类别就是拿它当原型的。",
      },
      {
        k: "z", zh: "开阳", lat: "Mizar · ζ UMa", mag: "2.23", dist: "82.9 光年",
        x: 480, y: 160, lx: 480, ly: 134, anchor: "middle",
        text: "最有名的一颗双星。旁边 4 等的小星叫开阳增一（Alcor），视力好的人肉眼就能分开——古代阿拉伯人拿这对星考验眼力。用望远镜看，开阳本身又是双星；再用光谱看，其中一颗还是双星。加起来至少四颗。",
      },
      {
        k: "h", zh: "摇光", lat: "Alkaid · η UMa", mag: "1.86", dist: "103.9 光年",
        x: 545, y: 190, lx: 528, ly: 214, anchor: "end",
        text: "勺柄末端，蓝白色主序星，自转极快、没有伴星。它不跟另外几颗一起走，所以被当成「外来者」——这把勺子本来就不是一个整体。",
      },
    ],
  },
  {
    id: "orion",
    zh: "猎户座",
    en: "Orion",
    sub: "冬天的星座之王，腰带三星一排就能认出来",
    intro: "全天最容易认的星座：两肩、两脚，中间一条斜着的三星腰带。它横跨天球赤道，冬天夜里从东南升起，几乎整个北半球都能看到。腰带下方挂着猎户座大星云（M42），是肉眼能看见的最远的恒星形成区之一。",
    tip: "腰带的走向几乎正指南北：往东南延长指到天狼星，往西北延长指到金牛座的毕宿五。参宿四和参宿七一亮一红、一暖一冷，是判断星色的好样本。",
    lines: [["b", "g"], ["b", "k"], ["g", "r"], ["k", "r"], ["m", "e"], ["e", "z"]],
    stars: [
      {
        k: "b", zh: "参宿四", lat: "Betelgeuse · α Ori", mag: "0.0–1.6", dist: "约 550 光年",
        x: 230, y: 70, lx: 214, ly: 62, anchor: "end",
        text: "左肩，红超巨星。半径约是太阳的 700 倍，表面温度却只有 3500 K 左右，所以是橙红色。2019 年底它突然暗了一半，原因是抛出的尘埃挡住了光，不是要爆炸。它终究会以超新星收场。",
      },
      {
        k: "g", zh: "参宿五", lat: "Bellatrix · γ Ori", mag: "1.64", dist: "250 光年",
        x: 390, y: 80, lx: 406, ly: 74, anchor: "start",
        text: "右肩，蓝白色巨星，名字的意思是「女战士」。它比参宿四热得多也小得多，是一颗刚离开主序不久的年轻恒星。",
      },
      {
        k: "m", zh: "参宿三", lat: "Mintaka · δ Ori", mag: "2.25", dist: "约 1200 光年",
        x: 300, y: 165, lx: 286, ly: 159, anchor: "end",
        text: "腰带西端，三颗腰带星里最暗的一颗。它是食双星：两颗星每 5.7 天互相掩一次，亮度有可测的起伏。腰带三颗星其实离我们远近差很多，只是从地球看过去恰好排成一线。",
      },
      {
        k: "e", zh: "参宿二", lat: "Alnilam · ε Ori", mag: "1.69", dist: "约 2000 光年",
        x: 345, y: 182, lx: 345, ly: 210, anchor: "middle",
        text: "腰带正中，蓝超巨星，也是猎户座亮星里最远的一颗：约 2000 光年。它周围有一层被自己照亮的反射星云，望远镜下能看到淡淡的光晕。",
      },
      {
        k: "z", zh: "参宿一", lat: "Alnitak · ζ Ori", mag: "1.77", dist: "约 1260 光年",
        x: 390, y: 199, lx: 404, ly: 205, anchor: "start",
        text: "腰带东端，是一组三合星。它旁边就是马头星云和火焰星云——天文摄影里最常被拍的区域之一，肉眼看不到，得长时间曝光。",
      },
      {
        k: "k", zh: "参宿六", lat: "Saiph · κ Ori", mag: "2.06", dist: "约 650 光年",
        x: 215, y: 240, lx: 200, ly: 236, anchor: "end",
        text: "左脚，蓝超巨星，表面温度约 26000 K。这么热的星把大部分能量放在紫外波段，所以我们看到的可见光亮度被低估了——它实际的亮度是太阳的数万倍。",
      },
      {
        k: "r", zh: "参宿七", lat: "Rigel · β Ori", mag: "0.18", dist: "约 860 光年",
        x: 400, y: 250, lx: 416, ly: 254, anchor: "start",
        text: "右脚，也是猎户座实际最亮的一颗（0.18 等，全天第七）。蓝超巨星，绝对星等约 −7.8，比参宿四亮得多也远得多——参宿四只是离得近。它还是一组三合星。",
      },
    ],
  },
  {
    id: "cassiopeia",
    zh: "仙后座",
    en: "Cassiopeia",
    sub: "一个歪着的 W，整夜绕着北极星转，不会落下",
    intro: "五颗亮星连成一个 W（或 M）。它和北斗七星分居北极星两侧，秋天夜里北斗低垂时，仙后座正好高悬——两个可以互相替补，用来找北极星。因为它离北天极近，在北半球中纬度地区整夜不落。",
    tip: "从 W 中间那颗「策」出发，往 W 开口相反的方向找，能摸到北极星；也可以把 W 的两条边延长，交点在北极星附近。",
    lines: [["c", "s"], ["s", "g"], ["g", "r"], ["r", "e"]],
    stars: [
      {
        k: "c", zh: "王良一", lat: "Caph · β Cas", mag: "2.28", dist: "54.7 光年",
        x: 150, y: 110, lx: 136, ly: 106, anchor: "end",
        text: "W 的西端，黄白色主序星，离我们只有 54.7 光年。它已经在离开主序、往亚巨星走的路上，只是变化还很慢。",
      },
      {
        k: "s", zh: "王良四", lat: "Schedar · α Cas", mag: "2.24", dist: "228 光年",
        x: 240, y: 190, lx: 240, ly: 216, anchor: "middle",
        text: "橙色巨星，W 里最「暖」的一颗。它的名字来自阿拉伯语「胸口」。1690 年它曾经有过一次亮度爆发，被当作一颗「新星」记录下来。",
      },
      {
        k: "g", zh: "策", lat: "Gamma Cas · γ Cas", mag: "2.15", dist: "约 550 光年",
        x: 330, y: 105, lx: 334, ly: 78, anchor: "middle",
        text: "一类变星的原型：γ Cas 型。它自转极快，赤道甩出一圈气体盘，亮度不规则地小幅起伏。中文名「策」来自中国古代星官，属于「王良」星官体系。",
      },
      {
        k: "r", zh: "阁道三", lat: "Ruchbah · δ Cas", mag: "2.68", dist: "99.4 光年",
        x: 420, y: 190, lx: 420, ly: 216, anchor: "middle",
        text: "食双星：一颗伴星每 759 天从它前面经过一次，亮度会小幅下降。因为周期长、幅度小，肉眼看不出来。",
      },
      {
        k: "e", zh: "阁道二", lat: "Segin · ε Cas", mag: "3.35", dist: "约 410 光年",
        x: 500, y: 118, lx: 500, ly: 92, anchor: "middle",
        text: "W 的东端，五颗里最暗的蓝白色巨星。它已经烧完氢、离开主序，正朝红巨星的方向演化。",
      },
    ],
  },
  {
    id: "scorpius",
    zh: "天蝎座",
    en: "Scorpius",
    sub: "夏天的南天里，唯一长得真像自己名字的星座",
    intro: "从左上方的钳子开始，一路向下弯，到尾巴又翘起来，钩子朝着银河中心。整条弯钩几乎正好躺在银河道上，所以这一带是全天最热闹的恒星区——星云、星团、尘埃全挤在一起。",
    tip: "心宿二发红，是颗红超巨星，直径大约是太阳的 700 倍。它在中文里又叫「大火」，古人靠它判断季节：七月里它往西沉，就该添衣了。",
    lines: [["b", "d"], ["d", "s"], ["s", "a"], ["a", "t"], ["t", "q"], ["q", "l"]],
    stars: [
      {
        k: "b", zh: "房宿四", lat: "Acrab · β Sco", mag: "2.62", dist: "约 400 光年",
        x: 150, y: 90, lx: 132, ly: 66, anchor: "end",
        text: "钳子的一边，其实是六颗星挤在一起的多星系统，望远镜里能分出两三对。它们互相绕转，肉眼看到的只是一个亮点。",
      },
      {
        k: "d", zh: "房宿三", lat: "Dschubba · δ Sco", mag: "2.29", dist: "约 490 光年",
        x: 205, y: 102, lx: 214, ly: 64, anchor: "middle",
        text: "2000 年它突然亮了一倍多，从 2.3 等冲到 1.9 等，之后慢慢回落。这种爆发来自它快速自转甩出的气体盘，天文学上叫「壳层星」。",
      },
      {
        k: "s", zh: "心宿一", lat: "Alniyat · σ Sco", mag: "2.89", dist: "约 700 光年",
        x: 230, y: 148, lx: 244, ly: 120, anchor: "start",
        text: "蓝巨星，和心宿三一起夹着心宿二。它旁边有一片暗淡的反射星云，天文摄影里常被拍成一团蓝雾。",
      },
      {
        k: "a", zh: "心宿二", lat: "Antares · α Sco", mag: "1.06", dist: "约 550 光年",
        x: 255, y: 198, lx: 240, ly: 208, anchor: "end",
        text: "全天第 15 亮星，橙红色，名字的意思是「火星的对手」——因为它和火星一样红，也常在黄道上相遇。它有一颗蓝白色的伴星，1936 年才被拍到。",
      },
      {
        k: "t", zh: "心宿三", lat: "Paikauhale · τ Sco", mag: "2.82", dist: "约 470 光年",
        x: 292, y: 230, lx: 286, ly: 254, anchor: "end",
        text: "一颗年轻的 B 型星，磁场强得罕见，表面有大片温度不同的斑。它几乎正对着我们，所以谱线随自转变得很规律。",
      },
      {
        k: "q", zh: "尾宿五", lat: "Sargas · θ Sco", mag: "1.86", dist: "约 270 光年",
        x: 355, y: 246, lx: 358, ly: 274, anchor: "middle",
        text: "尾巴上第二亮的一颗，黄白色巨星，已经离开主序。它的名字来自苏美尔语，是少数能追溯到四千年前的名字之一。",
      },
      {
        k: "l", zh: "尾宿八", lat: "Shaula · λ Sco", mag: "1.62", dist: "约 570 光年",
        x: 440, y: 200, lx: 458, ly: 190, anchor: "start",
        text: "钩子的尖端，名字在阿拉伯语里就是「高举的尾巴」。它和旁边的尾宿九组成一对，是天上最靠近银心的一对亮星。",
      },
    ],
  },
  {
    id: "pegasus",
    zh: "飞马座",
    en: "Pegasus",
    sub: "四颗星搭成一个方框，秋天的夜空靠它定位",
    intro: "秋季四边形：一个大得几乎占满视场的空方框，四条边里没有一颗星。它横跨在飞马座与仙女座的交界上，方框的西北角其实是仙女座的 α 星。秋天银河淡下去的时候，这个空框是最好用的路标。",
    tip: "从方框的西边（壁宿二 → 壁宿一）往南延长，能摸到秋季南天的亮星；方框内部空无一物，正是「秋季星空很空」这句话的来源。",
    lines: [["a", "s"], ["s", "m"], ["m", "g"], ["g", "a"]],
    stars: [
      {
        k: "a", zh: "壁宿二", lat: "Alpheratz · α And", mag: "2.06", dist: "97 光年",
        x: 200, y: 90, lx: 186, ly: 78, anchor: "end",
        text: "四边形唯一不属于飞马座的角，它其实是仙女座的 α。汞锰星：大气里汞和锰的含量高得反常，自转一圈要将近四天。",
      },
      {
        k: "s", zh: "室宿二", lat: "Scheat · β Peg", mag: "2.42", dist: "约 200 光年",
        x: 435, y: 105, lx: 451, ly: 100, anchor: "start",
        text: "红巨星，亮度不规则地起伏，变化幅度能到半个星等。它的直径大约是太阳的 90 倍，是方框里最大的一颗。",
      },
      {
        k: "m", zh: "室宿一", lat: "Markab · α Peg", mag: "2.48", dist: "133 光年",
        x: 418, y: 240, lx: 434, ly: 246, anchor: "start",
        text: "方框的东南角，蓝白色巨星，已经接近生命末期。它自转极快，赤道速度约每秒 125 公里。",
      },
      {
        k: "g", zh: "壁宿一", lat: "Algenib · γ Peg", mag: "2.84", dist: "约 390 光年",
        x: 185, y: 225, lx: 171, ly: 238, anchor: "end",
        text: "方框的西南角，β Cep 型脉动变星的原型之一：表面以大约 3.6 小时的周期一涨一缩，亮度变化肉眼几乎看不出来。",
      },
    ],
  },
  {
    id: "pleiades",
    zh: "昴星团",
    en: "Pleiades · M45",
    sub: "肉眼能数出六七颗的一小团蓝白星，冬天的开场",
    intro: "一团只有一亿岁的年轻恒星，离我们 444 光年。它们诞生在同一片分子云里，现在还在往同一个方向飘。中国古代把它编成「昴宿」，日本叫它「昴」，斯巴鲁的标志就是这六颗星。",
    tip: "视力好的人在极暗的地方能数到七颗以上，所以西方叫它「七姊妹」。星团周围那层蓝雾是尘埃反射的星光，不是星团自己的光。",
    lines: [],
    stars: [
      {
        k: "e", zh: "昴宿一", lat: "Electra · 17 Tau", mag: "3.70", dist: "约 440 光年",
        x: 190, y: 150, lx: 190, ly: 124, anchor: "middle",
        text: "蓝白色巨星，自转很快，周围的尘埃盘让它带一点红外过量。名字是七姊妹里的厄勒克特拉。",
      },
      {
        k: "t", zh: "昴宿二", lat: "Taygeta · 19 Tau", mag: "4.30", dist: "约 440 光年",
        x: 165, y: 190, lx: 165, ly: 218, anchor: "middle",
        text: "星团里少数几颗分光双星之一，两颗星每 1300 多天绕一圈。它是七姊妹中较暗的一颗，城市里基本看不见。",
      },
      {
        k: "m", zh: "昴宿三", lat: "Maia · 20 Tau", mag: "3.87", dist: "约 440 光年",
        x: 248, y: 176, lx: 248, ly: 204, anchor: "middle",
        text: "周围有反射星云，是星团里最早被发现有气体壳层的一颗。名字来自七姊妹中的迈亚，赫尔墨斯的母亲。",
      },
      {
        k: "a", zh: "昴宿六", lat: "Alcyone · 25 Tau", mag: "2.87", dist: "约 440 光年",
        x: 302, y: 140, lx: 302, ly: 112, anchor: "middle",
        text: "星团里最亮的一颗，蓝白色巨星，亮度是太阳的上千倍。它其实也是一对分光双星，伴星每 10 天绕它一圈。",
      },
      {
        k: "p", zh: "昴宿五", lat: "Pleione · 28 Tau", mag: "5.05", dist: "约 440 光年",
        x: 350, y: 104, lx: 368, ly: 86, anchor: "start",
        text: "离阿特拉斯只有几角分，望远镜里像贴在它旁边的小点。它是一颗 Be 星，赤道甩出的气盘时有时无。",
      },
      {
        k: "r", zh: "昴宿四", lat: "Merope · 23 Tau", mag: "4.18", dist: "约 440 光年",
        x: 378, y: 172, lx: 378, ly: 200, anchor: "middle",
        text: "它正好嵌在一片反射星云里，那团雾被编成 NGC 1435。星云不是它喷出来的，只是路过时被照亮。",
      },
      {
        k: "s", zh: "昴宿七", lat: "Atlas · 27 Tau", mag: "3.63", dist: "约 440 光年",
        x: 440, y: 150, lx: 440, ly: 122, anchor: "middle",
        text: "七姊妹的父亲阿特拉斯。它自己也是双星，主星是蓝白色巨星，伴星暗得多，质量却接近两个太阳。",
      },
    ],
  },
  {
    id: "spring",
    zh: "春季大三角",
    en: "Spring Triangle",
    sub: "牧夫、室女、狮子各出一颗一等星，拉出一个正三角",
    intro: "它和三颗星各自所属的星座一样古老，但这个说法本身很新——二十世纪的天文科普为了方便认星才把它圈出来的。三角形里最亮的角是大角星，最远的角是角宿一，五帝座一守在狮子座的尾巴上。春天夜里，北方天空由北斗的柄指向大角，再顺着弧线下去就是角宿一，这条「弧线」比三角形更好用。",
    tip: "大角星是北天最亮的恒星，橙色肉眼可辨；角宿一在黄道附近，月亮常从它旁边过。",
    lines: [["a", "b"], ["b", "c"], ["c", "a"]],
    stars: [
      {
        k: "a", zh: "大角星", lat: "Arcturus · α Boo", mag: "−0.05", dist: "36.7 光年",
        x: 300, y: 86, lx: 316, ly: 78, anchor: "start",
        text: "全天第四亮星，也是北天最亮的一颗。橙色来自它已经离开主序、正在燃烧氦的核心。它相对太阳跑得很快，约每秒 122 公里，五千年后会在天上明显挪位——所以它现在的位置，古人看到的是另一个样子。",
      },
      {
        k: "b", zh: "角宿一", lat: "Spica · α Vir", mag: "0.98", dist: "250 光年",
        x: 208, y: 238, lx: 208, ly: 268, anchor: "middle",
        text: "看上去是一颗，实际是两颗大质量恒星贴得极近，绕转周期只有四天，彼此的引力把对方拉成蛋形，亮度也跟着微微起伏。它是黄道附近少数能被月亮「掩」到的亮星。",
      },
      {
        k: "c", zh: "五帝座一", lat: "Denebola · β Leo", mag: "2.14", dist: "35.9 光年",
        x: 470, y: 168, lx: 486, ly: 162, anchor: "start",
        text: "狮子座的尾巴。A 型主序星，自转极快，赤道被甩得鼓出来；红外波段有额外辐射，说明周围有一圈尘埃盘——年轻的恒星常留着这种残骸。",
      },
    ],
  },
  {
    id: "ursaminor",
    zh: "小熊座 · 北极星",
    en: "Ursa Minor",
    sub: "七颗较暗的星围成小勺，勺柄末端钉着北",
    intro: "小熊座不亮，但它有用：勺柄最末那颗勾陈一几乎正对着地轴延长线，全天绕它转，其余星星都在动，只有它看起来不动。所以「北极星」不是一个名字，是一个位置——岁差会把天极慢慢挪走，五千年前这个位置上没有亮星，一万两千年后会是织女星。",
    tip: "用北斗七星勺口的天璇→天枢延长约五倍，就能落到北极星上；小熊座其余六颗只有二到四等，城市里未必看得全。",
    lines: [["p", "d"], ["d", "e"], ["e", "z"], ["z", "b"], ["b", "g"], ["g", "h"], ["h", "z"]],
    stars: [
      {
        k: "p", zh: "勾陈一", lat: "Polaris · α UMi", mag: "1.98", dist: "约 433 光年",
        x: 300, y: 42, lx: 316, ly: 36, anchor: "start",
        text: "造父变星，亮度以 3.97 天为周期起伏，幅度很小，肉眼几乎看不出。它其实是三合星，主星是一颗黄白色超巨星。因为岁差，它在公元 2100 年前后离天极最近，约 0.45 度。",
      },
      {
        k: "d", zh: "勾陈增九", lat: "Yildun · δ UMi", mag: "4.35", dist: "172 光年",
        x: 342, y: 84, lx: 330, ly: 78, anchor: "end",
        text: "紧挨北极星的一颗小白星，肉眼要看得清得好天气。它几乎正对着天极转圈，望远镜里常年待在原地。",
      },
      {
        k: "e", zh: "小熊座 ε", lat: "ε UMi", mag: "4.23", dist: "约 340 光年",
        x: 372, y: 128, lx: 388, ly: 122, anchor: "start",
        text: "勺柄与勺身交界处的一颗，是分光双星，两星靠得太近只能从光谱里分开。",
      },
      {
        k: "z", zh: "小熊座 ζ", lat: "ζ UMi", mag: "4.29", dist: "约 360 光年",
        x: 432, y: 150, lx: 448, ly: 144, anchor: "start",
        text: "勺身靠近勺柄的一角。它和旁边几颗一起构成小熊的「腰」，亮度都在肉眼边缘。",
      },
      {
        k: "b", zh: "北极二", lat: "Kochab · β UMi", mag: "2.08", dist: "131 光年",
        x: 472, y: 192, lx: 488, ly: 186, anchor: "start",
        text: "橙色巨星，小熊座第二亮。它和北极一合称「守卫者」。公元前 1500 到前 500 年间，它比勾陈一更靠近天极，那时的「北极星」是它。",
      },
      {
        k: "g", zh: "北极一", lat: "Pherkad · γ UMi", mag: "3.05", dist: "约 487 光年",
        x: 508, y: 224, lx: 524, ly: 220, anchor: "start",
        text: "勺口外侧那颗。A 型亮巨星，亮度约是太阳的一千倍，只是离得远，看上去才三等。",
      },
      {
        k: "h", zh: "小熊座 η", lat: "η UMi", mag: "4.95", dist: "约 97 光年",
        x: 456, y: 246, lx: 462, ly: 268, anchor: "middle",
        text: "勺底的一颗，和太阳很像的黄色主序星，只是稍大稍热。它是这套星图里最暗的一颗，用来把勺口合上。",
      },
    ],
  },
  {
    id: "gemini",
    zh: "双子座",
    en: "Gemini",
    sub: "两颗几乎一样亮的头，往下拉出一条并肩的人形",
    intro: "北河二与北河三并排，亮度只差一点，古人就把它看成一对兄弟：卡斯托耳与波吕丢刻斯，一个会驯马，一个拳击无敌，最后一起被放到天上。整组星不亮，但在黄道上，月亮和行星常从这里经过，所以它一直是被盯着看的那一块天。",
    tip: "北河三是黄道附近少数带确认行星的亮星，那颗行星质量约两倍木星，绕它一圈要 590 天。",
    lines: [["c", "p"], ["p", "a"], ["c", "m"], ["m", "a"]],
    stars: [
      {
        k: "c", zh: "北河二", lat: "Castor · α Gem", mag: "1.58", dist: "51 光年",
        x: 238, y: 78, lx: 222, ly: 72, anchor: "end",
        text: "望远镜里是一对，实际上由六颗星组成：两对分光双星，再加一对红矮星，彼此绕着共同的质心转。这样的层级结构在近距恒星里很少见。",
      },
      {
        k: "p", zh: "北河三", lat: "Pollux · β Gem", mag: "1.14", dist: "33.8 光年",
        x: 302, y: 112, lx: 318, ly: 106, anchor: "start",
        text: "橙色巨星，也是离我们最近的巨星之一。2006 年确认它有一颗行星，质量约两倍木星，轨道周期 590 天——它是当时最近的行星宿主恒星。",
      },
      {
        k: "m", zh: "井宿一", lat: "Tejat · μ Gem", mag: "2.87", dist: "约 230 光年",
        x: 216, y: 150, lx: 200, ly: 156, anchor: "end",
        text: "红巨星，半规则变星，亮度在一百天上下缓慢起伏，肉眼能看出与旁边的星亮度有差。它标记着双子的一只脚。",
      },
      {
        k: "a", zh: "井宿三", lat: "Alhena · γ Gem", mag: "1.93", dist: "109 光年",
        x: 392, y: 234, lx: 408, ly: 240, anchor: "start",
        text: "另一只脚的脚踝，A 型亚巨星，其实是一对靠得很近的双星，绕转周期约 12.6 年，光谱里能看到两条速度曲线。",
      },
    ],
  },
];

(function () {
  const SS = window.__pageSignal;
  const box = document.getElementById("star-list");
  if (!box) return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function radius(mag) {
    const m = Math.abs(parseFloat(String(mag).replace("−", "-")) || 3);
    if (m <= 1) return 6;
    if (m <= 2) return 4.6;
    return 3.6;
  }

  function map(g) {
    const byKey = {};
    g.stars.forEach((s) => { byKey[s.k] = s; });
    let svg = '<svg class="st-svg" viewBox="0 20 600 280" role="img" aria-label="' + esc(g.zh) + '星图">';
    if (g.band) {
      const fid = "stSoft-" + g.id;
      svg += '<defs><filter id="' + fid + '" x="-30%" y="-30%" width="160%" height="160%">' +
        '<feGaussianBlur stdDeviation="18"></feGaussianBlur></filter></defs>' +
        '<path class="st-band" filter="url(#' + fid + ')" d="M 250 0 L 400 0 L 415 330 L 255 330 Z"></path>';
    }
    g.lines.forEach(([a, b]) => {
      const p = byKey[a], q = byKey[b];
      if (!p || !q) return;
      svg += '<line class="st-line" x1="' + p.x + '" y1="' + p.y + '" x2="' + q.x + '" y2="' + q.y + '"></line>';
    });
    g.stars.forEach((s) => {
      const r = radius(s.mag);
      svg += '<g class="st-node" data-g="' + g.id + '" data-k="' + s.k + '" tabindex="0" role="button" aria-label="' + esc(s.zh) + '">' +
        '<circle class="st-halo" cx="' + s.x + '" cy="' + s.y + '" r="' + (r + 7) + '"></circle>' +
        '<circle class="st-dot" cx="' + s.x + '" cy="' + s.y + '" r="' + r + '"></circle>' +
        '<text class="st-lab" x="' + s.lx + '" y="' + s.ly + '" text-anchor="' + s.anchor + '">' + esc(s.zh) + '</text>' +
        '<text class="st-lab2" x="' + s.lx + '" y="' + (s.ly + 15) + '" text-anchor="' + s.anchor + '">' + esc(s.lat) + '</text>' +
        "</g>";
    });
    return svg + "</svg>";
  }

  function card(g) {
    return '<article class="st-card" data-card="' + g.id + '">' +
      '<header class="st-head"><h3 class="st-name">' + esc(g.zh) + '</h3><span class="st-en">' + esc(g.en) + "</span></header>" +
      '<p class="st-sub">' + esc(g.sub) + "</p>" +
      '<div class="st-map">' + map(g) + "</div>" +
      '<div class="st-detail" data-detail="' + g.id + '">' + introHTML(g) + "</div>" +
      "</article>";
  }

  function introHTML(g) {
    return '<p class="st-d-txt">' + esc(g.intro) + "</p>" +
      '<p class="st-d-line"><b>看点</b>' + esc(g.tip) + "</p>";
  }

  function starHTML(s) {
    return '<p class="st-d-tag">' + esc(s.lat) + "<i>·</i>视星等 " + esc(s.mag) + "<i>·</i>" + esc(s.dist) + "</p>" +
      '<h4 class="st-d-name">' + esc(s.zh) + "</h4>" +
      '<p class="st-d-txt">' + esc(s.text) + "</p>";
  }

  const byId = {};
  STAR_GROUPS.forEach((g) => { byId[g.id] = g; });
  box.innerHTML = STAR_GROUPS.map(card).join("");

  function select(gid, k) {
    const g = byId[gid];
    if (!g) return;
    const detail = box.querySelector('[data-detail="' + gid + '"]');
    const cur = box.querySelector('.st-card[data-card="' + gid + '"]');
    if (!detail || !cur) return;
    const nodes = cur.querySelectorAll(".st-node");
    const wasOn = cur.querySelector('.st-node.on[data-k="' + k + '"]');
    nodes.forEach((n) => n.classList.toggle("on", !wasOn && n.dataset.k === k));
    detail.innerHTML = wasOn ? introHTML(g) : starHTML(g.stars.find((s) => s.k === k));
    detail.classList.toggle("is-star", !wasOn);
  }

  box.addEventListener("click", (e) => {
    const node = e.target.closest(".st-node");
    if (!node) return;
    select(node.dataset.g, node.dataset.k);
  }, { signal: SS });

  box.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const node = e.target.closest(".st-node");
    if (!node) return;
    e.preventDefault();
    select(node.dataset.g, node.dataset.k);
  }, { signal: SS });
})();
