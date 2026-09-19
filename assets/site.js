const SITE_CONFIG = Object.freeze({
  releaseApi:
    'https://api.gitcode.com/api/v5/repos/diamondfsd/luna-ka-app-release/releases?per_page=100',
  releasePage:
    'https://gitcode.com/diamondfsd/luna-ka-app-release/releases',
  fallbackRelease: {
    tag: 'v1.2.1',
    date: '2026-09-19T08:48:58+08:00',
    notes: '',
    apk: {
      name: 'LunaKa-1.2.1.apk',
      type: 'attach',
      size: 68630840,
      browserDownloadUrl:
        'https://gitcode.com/diamondfsd/luna-ka-app-release/releases/download/v1.2.1/LunaKa-1.2.1.apk',
    },
  },
  iosUrl: '',
  harmonyUrl: '',
});

const TRANSLATIONS = {
  zh: {
    skipToContent: '跳到主要内容',
    navDownload: '下载',
    navFeatures: '功能',
    navSupport: '支持',
    navPc: 'PC 版',
    heroEyebrow: 'LUNA CAMERA APP',
    heroLead: '你的云台摄影专家',
    heroSummary: '连接 Luna 云台相机，完成拍摄、监看、素材管理与导出。',
    heroDownload: '下载',
    heroFollowAuthor: '关注作者',
    downloadApk: '下载正式版',
    scanToDownload: '扫码下载',
    copyLink: '复制页面链接',
    copied: '页面链接已复制',
    copyFailed: '无法复制，请从地址栏复制链接',
    latestVersion: '最新版本',
    checkingRelease: '正在检查',
    platformLabel: '平台',
    downloadEyebrow: 'DOWNLOAD',
    downloadTitle: '选择你的设备',
    downloadLead:
      'Android 可在此下载正式版 APK。',
    androidDistribution: '正式版 APK',
    version: '版本',
    releaseDate: '发布日期',
    packageSize: '安装包大小',
    testFlightDistribution: 'TestFlight / App Store',
    iosLimited: '名额有限，不公开',
    followAuthorForAccess: '关注作者获取',
    comingSoon: '即将开放',
    openTestFlight: '打开 TestFlight',
    openAppGallery: '打开应用市场',
    featuresEyebrow: 'ONE APP',
    featuresTitle: '从连接到成片，一条完整工作流',
    featureConnectTitle: '快速连接',
    featureConnectBody: '通过蓝牙与 Wi-Fi 发现并连接 Luna 云台相机。',
    featureCaptureTitle: '远程拍摄',
    featureCaptureBody: '监看画面，调整云台、变焦和拍摄参数。',
    featureMediaTitle: '素材管理',
    featureMediaBody: '浏览、下载和导出相机中的照片与视频。',
    followEyebrow: 'FOLLOW',
    followTitle: '关注作者',
    followLead: '版本更新、使用技巧和 iOS 测试名额会在抖音粉丝群持续发布。',
    followDouyinId: '抖音号',
    footerLine: '你的云台摄影专家',
    footerFollow: '关注作者',
    footerSupport: '技术支持',
    footerPrivacy: '隐私说明',
    footerSource: '页面源码',
    personalDevelopmentWork: '个人开发作品',
    footerDownload: '下载',
    backHome: '返回下载页',
    supportEyebrow: 'SUPPORT',
    supportTitle: '技术支持',
    supportLead: '安装或连接相机遇到问题时，请先完成下面的基础检查。',
    privacyEyebrow: 'PRIVACY',
    privacyTitle: '隐私说明',
    privacyLead:
      'Luna咔不需要账号，设备设置和连接信息主要用于完成本机相机控制与素材管理。',
    noRelease: '暂无版本',
    latestRelease: '最新版本',
    loadFailed: '暂时无法检查更新',
    releaseAvailable: '正式版已就绪',
  },
  en: {
    skipToContent: 'Skip to content',
    navDownload: 'Download',
    navFeatures: 'Features',
    navSupport: 'Support',
    navPc: 'PC',
    heroEyebrow: 'LUNA CAMERA APP',
    heroLead: 'Your gimbal photography expert',
    heroSummary:
      'Connect to Luna gimbal cameras for capture, monitoring, media management, and export.',
    heroDownload: 'Download',
    heroFollowAuthor: 'Follow author',
    downloadApk: 'Download release',
    scanToDownload: 'Scan to download',
    copyLink: 'Copy page link',
    copied: 'Page link copied',
    copyFailed: 'Copy failed. Use the address bar instead.',
    latestVersion: 'Latest version',
    checkingRelease: 'Checking',
    platformLabel: 'Platforms',
    downloadEyebrow: 'DOWNLOAD',
    downloadTitle: 'Choose your device',
    downloadLead:
      'Download the release APK for Android.',
    androidDistribution: 'Release APK',
    version: 'Version',
    releaseDate: 'Released',
    packageSize: 'Package size',
    testFlightDistribution: 'TestFlight / App Store',
    iosLimited: 'Limited access, not public',
    followAuthorForAccess: 'Follow for access',
    comingSoon: 'Coming soon',
    openTestFlight: 'Open TestFlight',
    openAppGallery: 'Open AppGallery',
    featuresEyebrow: 'ONE APP',
    featuresTitle: 'A complete workflow from connection to finished media',
    featureConnectTitle: 'Quick connection',
    featureConnectBody: 'Discover and connect to Luna gimbal cameras over Bluetooth and Wi-Fi.',
    featureCaptureTitle: 'Remote capture',
    featureCaptureBody: 'Monitor the frame and adjust gimbal, zoom, and capture settings.',
    featureMediaTitle: 'Media management',
    featureMediaBody: 'Browse, download, and export photos and videos from the camera.',
    followEyebrow: 'FOLLOW',
    followTitle: 'Follow the author',
    followLead: 'Version updates, tips, and iOS test access are shared in the Douyin fan group.',
    followDouyinId: 'Douyin ID',
    footerLine: 'Your gimbal photography expert.',
    footerFollow: 'Follow author',
    footerSupport: 'Support',
    footerPrivacy: 'Privacy',
    footerSource: 'Page source',
    personalDevelopmentWork: 'Personal development work',
    footerDownload: 'Download',
    backHome: 'Back to download',
    supportEyebrow: 'SUPPORT',
    supportTitle: 'Technical support',
    supportLead:
      'If installation or camera connection fails, start with the checks below.',
    privacyEyebrow: 'PRIVACY',
    privacyTitle: 'Privacy',
    privacyLead:
      'Luna咔 does not require an account. Device settings and connection details are primarily used for on-device camera control and media management.',
    noRelease: 'No version yet',
    latestRelease: 'Latest version',
    loadFailed: 'Unable to check for releases',
    releaseAvailable: 'Release ready',
  },
};

const supportedLanguages = Object.keys(TRANSLATIONS);
const browserLanguage = (navigator.language || '').toLowerCase().startsWith('zh')
  ? 'zh'
  : 'en';
let currentLanguage = supportedLanguages.includes(browserLanguage)
  ? browserLanguage
  : 'zh';

function translate(key) {
  return TRANSLATIONS[currentLanguage][key] ?? key;
}

function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
}

function applyLanguageBlocks() {
  document.querySelectorAll('[data-lang-block]').forEach((element) => {
    element.hidden = element.dataset.langBlock !== currentLanguage;
  });
}

function applyLanguage(language, persist = true) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'zh';
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  applyStaticTranslations();
  applyLanguageBlocks();
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.language === currentLanguage),
    );
  });
  renderReleaseState();
  if (persist) {
    window.localStorage.setItem('luna-ka-language', currentLanguage);
  }
}

function parseVersion(tag) {
  const match = /^v(\d+)\.(\d+)\.(\d+)$/.exec(String(tag ?? '').trim());
  if (!match) return null;
  return match.slice(1).map(Number);
}

function compareVersions(left, right) {
  for (let index = 0; index < 3; index += 1) {
    if (left[index] !== right[index]) return left[index] - right[index];
  }
  return 0;
}

function normalizeAsset(asset) {
  return {
    name: String(asset?.name ?? asset?.file_name ?? '').trim(),
    type: String(asset?.type ?? '').trim().toLowerCase(),
    size: Number(asset?.size ?? 0),
    browserDownloadUrl: String(
      asset?.browser_download_url ?? asset?.browserDownloadUrl ?? '',
    ).trim(),
  };
}

function releaseDownloadUrl(release) {
  if (!release) return '';
  const directUrl = String(release.apk?.browserDownloadUrl ?? '').trim();
  if (directUrl) return directUrl;
  const assetName = encodeURIComponent(release.apk?.name ?? '');
  return `${SITE_CONFIG.releasePage}/download/${release.tag}/${assetName}`;
}

function selectLatestRelease(releases) {
  return releases
    .map((release) => {
      const version = parseVersion(release?.tag_name ?? release?.tagName);
      const assets = Array.isArray(release?.assets)
        ? release.assets.map(normalizeAsset)
        : [];
      const apk = assets.find((asset) => asset.name.toLowerCase().endsWith('.apk'));
      if (!version || !apk) return null;
      return {
        tag: String(release.tag_name ?? release.tagName),
        version,
        date: release.created_at ?? release.createdAt ?? '',
        notes: String(release.body ?? release.description ?? '').trim(),
        apk,
      };
    })
    .filter(Boolean)
    .sort((left, right) => compareVersions(right.version, left.version))[0];
}

function formatReleaseDate(value) {
  if (!value) return '--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--';
  return new Intl.DateTimeFormat(currentLanguage === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '--';
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

function cleanReleaseNotes(notes) {
  return notes
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 360);
}

let releaseState = {
  status: 'loading',
  release: SITE_CONFIG.fallbackRelease,
};

function setAllText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function renderReleaseState() {
  const isReady = Boolean(releaseState.release);
  const downloadUrl = isReady ? releaseDownloadUrl(releaseState.release) : '';
  const labels = document.querySelectorAll('[data-download-label]');
  const versionLabel =
    releaseState.status === 'loading'
      ? translate('checkingRelease')
      : releaseState.status === 'error'
        ? translate('loadFailed')
        : isReady
          ? translate('latestRelease')
          : translate('noRelease');

  setAllText('[data-release-version]', isReady ? releaseState.release.tag : versionLabel);
  setAllText(
    '[data-release-date]',
    isReady ? formatReleaseDate(releaseState.release.date) : '--',
  );
  setAllText(
    '[data-release-size]',
    isReady ? formatFileSize(releaseState.release.apk.size) : '--',
  );

  document.querySelectorAll('[data-android-download]').forEach((link) => {
    if (isReady) {
      link.href = downloadUrl;
      link.removeAttribute('aria-disabled');
    } else {
      link.href = '#follow-author';
      link.setAttribute('aria-disabled', 'true');
    }
  });

  const qrContainer = document.querySelector('[data-android-qr]');
  if (qrContainer) {
    const qrcode = window.qrcode ?? globalThis.qrcode;
    if (isReady && typeof qrcode === 'function') {
      const qr = qrcode(0, 'M');
      qr.addData(downloadUrl);
      qr.make();
      qrContainer.innerHTML = qr.createSvgTag({
        cellSize: 4,
        margin: 2,
        scalable: true,
      });
    } else {
      qrContainer.textContent = isReady ? translate('downloadApk') : translate('noRelease');
    }
  }

  labels.forEach((label) => {
    label.textContent = isReady ? translate('downloadApk') : translate('noRelease');
  });

  const notesElement = document.querySelector('[data-release-notes]');
  if (notesElement) {
    const notes = isReady ? cleanReleaseNotes(releaseState.release.notes) : '';
    notesElement.textContent = notes;
    notesElement.hidden = !notes;
  }
}

async function loadLatestRelease() {
  releaseState = {
    status: 'loading',
    release: SITE_CONFIG.fallbackRelease,
  };
  renderReleaseState();

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(SITE_CONFIG.releaseApi, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Release API returned ${response.status}`);
    const payload = await response.json();
    const releases = Array.isArray(payload) ? payload : payload?.data ?? [];
    const latest = selectLatestRelease(releases);
    releaseState = latest
      ? { status: 'ready', release: latest }
      : { status: 'empty', release: null };
  } catch {
    releaseState = {
      status: 'error',
      release: SITE_CONFIG.fallbackRelease,
    };
  } finally {
    window.clearTimeout(timeout);
    renderReleaseState();
  }
}

function configureOptionalPlatformLinks() {
  const iosLink = document.querySelector('[data-ios-link]');
  const iosState = document.querySelector('[data-ios-state]');
  if (iosLink && iosState) {
    if (SITE_CONFIG.iosUrl) {
      iosLink.href = SITE_CONFIG.iosUrl;
      iosLink.hidden = false;
      iosState.hidden = true;
    }
  }

  const harmonyLink = document.querySelector('[data-harmony-link]');
  const harmonyState = document.querySelector('[data-harmony-state]');
  if (harmonyLink && harmonyState) {
    if (SITE_CONFIG.harmonyUrl) {
      harmonyLink.href = SITE_CONFIG.harmonyUrl;
      harmonyLink.hidden = false;
      harmonyState.hidden = true;
    }
  }
}

function configureLanguageSwitcher() {
  const saved = window.localStorage.getItem('luna-ka-language');
  const initial = supportedLanguages.includes(saved) ? saved : browserLanguage;
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.language));
  });
  applyLanguage(initial, false);
}

function configureCopyAction() {
  const button = document.querySelector('[data-copy-link]');
  const toast = document.querySelector('[data-toast]');
  if (!button || !toast) return;

  let toastTimer;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.textContent = translate('copied');
    } catch {
      toast.textContent = translate('copyFailed');
    }
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 2200);
  });
}

function configureHeroVideo() {
  const video = document.querySelector('.hero-visual video');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!video || reduceMotion.matches) return;
  video.play().catch(() => {
    // The poster remains visible when autoplay is unavailable.
  });
}

document.addEventListener('DOMContentLoaded', () => {
  configureLanguageSwitcher();
  configureHeroVideo();
  configureCopyAction();
  configureOptionalPlatformLinks();
  loadLatestRelease();
});
