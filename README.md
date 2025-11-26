# Pexels 圖片搜尋網站 (React Project)

這是一個使用 React 開發的圖片搜尋應用程式，串接了 **Pexels API**，讓使用者可以輕鬆搜尋、瀏覽並下載高品質的免版權圖片。本專案旨在練習 React Hooks、API 串接以及 SCSS 樣式模組化開發。

> **🟢 線上展示 (Live Demo)：** [https://react-pexels-search.vercel.app/](https://react-pexels-search.vercel.app/)

## ✨ 功能特色

- **精選圖片瀏覽**：進入首頁即自動載入 Pexels 的精選攝影作品。
- **關鍵字搜尋**：透過搜尋框尋找特定主題的圖片。
- **熱門標籤導引**：提供「Nature」、「Technology」等熱門關鍵字按鈕，點擊即搜。
- **更多圖片載入**：點擊「更多圖片」按鈕可分頁載入更多結果。
- **圖片下載**：每張圖片卡片皆附有「下載圖片」按鈕，點擊即可開啟原圖。
- **RWD 響應式設計**：支援電腦與手機版面瀏覽。
- **狀態提示**：包含載入錯誤處理與無搜尋結果的友善提示。

## 🛠️ 技術堆疊

- **前端框架**：[React](https://reactjs.org/) (v18, Create React App)
- **路由管理**：[React Router](https://reactrouter.com/) (v6)
- **HTTP 請求**：[Axios](https://axios-http.com/)
- **樣式預處理**：Sass / SCSS (使用 `@use` 模組化語法)
- **資料來源**：[Pexels API](https://www.pexels.com/api/)

## 🚀 安裝與執行指南

### 1. 下載專案

```bash
git clone [https://github.com/Hsiu0308/react-pexels-search.git](https://github.com/Hsiu0308/react-pexels-search.git)
cd react-pexels-search
```

### 2. 安裝依賴套件

請確保您的電腦已安裝 Node.js，然後在終端機執行：

```bash
npm install
```

注意：本專案使用 SCSS，若 npm install 後樣式未生效，請嘗試執行 npm install sass。

### 3. 設定環境變數 (重要！)

為了保護 API 金鑰不被外洩，本專案使用環境變數。 請在專案 根目錄（與 package.json 同層）建立一個名為 .env 的檔案，並貼上 Pexels API Key：

```Plaintext
REACT_APP_PEXELS_AUTH=您的 PEXELS_API_KEY *請貼在這裡
```

您可以至 Pexels API 免費申請一組 API Key。

### 4. 啟動開發伺服器

```bash
npm start
```

伺服器啟動後，瀏覽器應會自動開啟 http://localhost:3000，即可開始使用網站。

📂 專案結構

```Plaintext
src/
├── components/      # 可複用的 UI 元件 (Search, Picture, Footer)
├── pages/           # 頁面元件 (Homepage, About, Page404)
├── styles/          # SCSS 樣式檔案
│   ├── style.scss   # 主樣式入口 (使用 @use 匯入其他檔案)
│   ├── _nav.scss    # 導覽列樣式
│   ├── _search.scss # 搜尋區塊樣式
│   ├── _picture.scss# 圖片卡片與列表樣式
│   └── _footer.scss # 頁尾樣式
├── App.js           # 應用程式主元件與路由設定
└── index.js         # React DOM 渲染入口
```

## 📝 開發筆記與優化紀錄

安全性：將 API Key 移至 .env 環境變數，避免 Hardcode 在程式碼中。

效能優化：使用 useCallback 包裹搜尋函式，並正確設定 useEffect 依賴陣列，避免不必要的重新渲染或 Hook 警告。

樣式架構：將 CSS 改寫為 SCSS，並將 @import 語法升級為 Dart Sass 推薦的 @use 語法，解決編譯警告問題。

## UI/UX：

加入 Hero Section 標題區塊，提升首頁視覺重點。

將圖片列表改為卡片式設計 (Card UI)，並增加陰影與懸浮效果。

增加「無搜尋結果」的防呆機制。

## 👤 Author

Created by Hensel Huang.
