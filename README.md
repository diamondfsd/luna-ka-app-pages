# Luna咔 App Pages

Luna咔的公开下载与支持页面。项目是纯静态 HTML/CSS/JavaScript，不依赖构建工具或服务端。

## 页面

- `/`：下载首页，实时读取 GitCode Release API 中最新的 `vX.Y.Z` 正式版本。
- `/support.html`：安装、连接检查和问题反馈。
- `/privacy.html`：权限、本地数据、匿名统计和第三方服务的隐私说明。

Android 下载地址按以下固定规则生成：

```text
https://gitcode.com/diamondfsd/luna-ka-app-release/releases/download/{tag}/{asset}
```

如果没有公开 Release，下载区域只显示“暂无版本”；发布正式版本并上传 `.apk` 附件后，页面会自动显示版本、日期、文件大小和直接下载按钮。

## 本地预览

项目不依赖 Node.js，直接打开 `index.html` 即可预览。需要验证 HTTP 行为和 CORS 时使用：

```bash
python3 -m http.server 4173
```

然后访问 <http://127.0.0.1:4173/>。

## 配置

平台链接和 Release API 位于 `assets/site.js` 顶部的 `SITE_CONFIG`：

- `releaseApi`：GitCode 公开 Release API。
- `releasePage`：Release 总览与附件下载地址前缀。
- `iosUrl`：TestFlight 或 App Store 链接，配置后自动替换“即将开放”。
- `harmonyUrl`：AppGallery 链接，配置后自动替换“即将开放”。

## 部署

在私有 App 仓库根目录执行：

```bash
./scripts/publish-pages.sh
```

脚本会将页面内容同步到托管仓库，并触发 GitHub Pages 部署：

<https://diamondfsd.github.io/luna-ka-app-pages/>

## 验证

```bash
node --check assets/site.js
tidy -errors -q index.html support.html privacy.html
```
