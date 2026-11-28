# 逆光天使 / nahyuu.github.io

个人档案站。深底 `#111`、红 `#ef3d42`、细字大标题 —— 骨架借自 kyojintachi.k2cee.com。

```
index.html      首页
music.html      唱片（网易云红心歌单）
reading.html    书架（微信读书）
style.css       全站样式
router.js       站内软导航 + 页面生命周期（最先加载）
script.js       主题记忆 / 导航 / 进场
music-data.js   自动生成，勿手改
tracks/         全碟曲目表，按专辑 id % 32 分片，详情页只取一片（自动生成）
reading-data.js 自动生成，勿手改
french-data.js  A1–C1 法语语法清单（手写，勾选状态在浏览器 localStorage）
french.js       "言"模块渲染：级别筛选、打勾、只看未学
tools/          抓取脚本
.github/workflows/sync.yml   每天自动同步
```

### 性能上的几条约定

- **分片**：`tracks/0.json … 31.json` 每片 20–40KB，点开一张专辑只下一次；别再改回单文件整表。
- **监听走 `window.__pageSignal`**：页面脚本挂 `window` / `document` 监听时一律带
  `{ signal: window.__pageSignal }`，观察者扔进 `window.__pageCleanup`。软导航换页时 `router.js`
  会统一 abort / 清理，否则每翻一页都会多留一份监听（实测翻 16 页会漏 8 份 scroll）。
- **不用 `backdrop-filter`**：顶部导航是 fixed，实时模糊要跟着每帧滚动重算。用高不透明度实底代替。
- **背景图不跑运行时 filter**：`assets/bg-cd.webp` 的饱和度 / 亮度是烘进图里的；
  150vmax 的大图套 `filter` 会额外占一大张显存纹理。
- **封面走 srcset**：网易云的封面 320px 也常有一百多 KB，让浏览器按屏幕密度挑 160–480 那一档。


## 一、音乐：已经接通

红心歌单是公开的，`tools/refresh-music.py` 不需要登录就能读：

```bash
python3 tools/refresh-music.py          # 默认歌单 2098851863
```

它会重新生成 `music-data.js`（目前 2166 张专辑）。

专辑详情页要显示全碟曲目（不只是红心那几首），所以在歌单刷新后还要跑一次：

```bash
python3 tools/fetch-album-tracks.py   # 生成 tracks/0…31.json，缓存 tools/.album-tracks-cache.json
```

2166 张专辑约 5 分钟拉完，中断重跑会接着来；抓不到的专辑详情页自动退回只列红心曲目。歌单以后取消公开就抓不到，网站本身不受影响。

## 二、阅读：用官方 Agent API Key

微信读书的官方网关（`POST https://i.weread.qq.com/api/agent/gateway`，Bearer 鉴权）已经接通：

```bash
export WEREAD_API_KEY='wrk-...'     # 或写进 site/.weread-key.txt
python3 tools/refresh-weread.py
```

Key 来源：微信读书 App → 我 → 设置 → 微信读书 Skill → 复制 API Key。它不是网页 cookie，不会随浏览器退出失效，只要不重置就一直能用。

脚本干的事：
- `/shelf/sync` 拿书架（书名、作者、封面、读完状态、最近阅读）
- `/user/notebooks` 拿笔记（笔记/想法/书签数、阅读进度），`count=500` 一次要全
- 两份按 bookId 合并，写进 `reading-data.js`

失败时不会覆盖旧数据，退出码区分原因：`2` = key 失效，`3` = 接口改版。

### 书上那段简介从哪来

1. `tools/refresh-weread.py` 会对每本书调 `/book/info`，拿到简介、出版社、出版年（字段 `i` / `pub` / `yr`）。
2. `tools/wiki-info.py` 再按书名查 `zh.wikipedia.org` 的条目摘要，写进字段 `w`。页面优先显示 `w`，没有才显示 `i`。

`wiki-info.py` 需要能访问维基百科；中国大陆网络通常不通，所以这一步放在 GitHub Actions 里跑（ubuntu 运行器可以直接访问），本机跑不通时会提示并跳过。

## 三、让它自己同步（GitHub Actions）

1. 把整个 `site/` 推到 `nahyuu/nahyuu.github.io`
2. 仓库 Settings → Secrets and variables → Actions → New repository secret
   名字：`WEREAD_API_KEY`，值：`wrk-...`
3. Actions 里手动跑一次 `Sync archive data` 验证

之后每天 01:30（北京时间）自动跑：抓歌单、抓书架，有变化才 commit，Pages 自动重建。

## 四、加一句话短评

`music.js` 顶部：

```js
const NOTES = {
  35297662: "坂本龍一把钢琴拆成了呼吸。",
};
const PINNED = [35297662];   // 想置顶的专辑 id
```

专辑 id 就是点开专辑后地址栏 `#a/` 后面那串数字。

## 简介来源

每本书简介的取值顺序：`w`（维基摘要，静态）→ `i`（微信读书官方简介）→ 浏览器端在线补维基。

- 静态 `w`：`python3 tools/wiki-info.py` 需要能访问 zh.wikipedia.org 的网络。云主机出口被挡，只能在 GitHub Actions 或本地跑。跑完提交 `reading-data.js` 即可。
- 浏览器端：`reading.js` 里的 `enrichWiki()` 在读者浏览器中按需请求 `zh.wikipedia.org/api/rest_v1/page/summary/`（CORS 开放），成功就把简介换掉，并缓存进 localStorage。读者能连维基才生效，连不上保持微信读书简介。
