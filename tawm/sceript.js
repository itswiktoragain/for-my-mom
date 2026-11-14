// Put your YouTube Shorts links in this list.
const shortLinks = [
    "https://youtube.com/shorts/B4u4NT-LT8A?si=F3Alit5r8oSQ2_Qs",
    "https://youtube.com/shorts/zfGw76kUS1I?si=HVe2bK2x8f3xLnni",
    "https://youtube.com/shorts/LgLOkF2HunU?si=l1x14mSYJMTRpUnj",
    "https://youtube.com/shorts/1ldm3azfIJY?si=7u0rfx9OIP_OIs4w",
    "https://youtube.com/shorts/Bgos-nbU2KQ?si=ej6hmPi30v2aDKn1",
    "https://youtube.com/shorts/-UdziXZLLVQ?si=TnF3lkmLPNU3oNJP",
    "https://youtube.com/shorts/Cv49we1ppBs?si=Bqb5eZIAgTDuwftD",
    "https://youtube.com/shorts/OPDvvGoorqU?si=NzH-UDSsbZaxnThD",
    "https://youtube.com/shorts/EmuCzne1k6k?si=nHQTBJZYOldqXW1o",
    "https://youtube.com/shorts/eIXpuROVJsw?si=TrN0H6bL3_qrnmS-",
    "https://youtube.com/shorts/8BGRMyMwcJA?si=w_djb7l-AqMkbsN3",
    "https://youtube.com/shorts/ixz7h9xKvuE?si=Xl_tAFTG29Oy_qtK",
    "https://youtube.com/shorts/wZ2HwP6k0k0?si=6nQQVcj0CSSHhdhz",
    "https://youtube.com/shorts/DicUNTfL-js?si=PY8NFaOjpWyUaFNF",
    "https://youtube.com/shorts/X8QvSjv6-3Y?si=zfrZ_XtP7uFsfp7_",
    "https://youtube.com/shorts/IvTEgQlkbKs?si=XB807tq8FEnfJW8J",
    "https://youtube.com/shorts/KhBTzagYZHM?si=PQN_7eQHOx-ZCwx8",
    "https://youtube.com/shorts/q7LrPVYmJYU?si=iP7iaU-FryWGbv-Z",
    "https://youtube.com/shorts/KhBTzagYZHM?si=2TXeT5WxTp47S_K7",
    "https://youtube.com/shorts/E6IizYXi5gI?si=WRQMjs0sxd9JOtCv",
    "https://youtube.com/shorts/FwOXZfK1iYo?si=tWCPJgR0SqWfFLmr",
    "https://youtube.com/shorts/hIg4MxRBhO4?si=nmSYhWCejwIk_-Jh",
    "https://youtube.com/shorts/LQTTefve4sI?si=pW5Js9p-Uj2zIsZN",
    "https://youtube.com/shorts/e3wcvibw4bA?si=iIEPKYZGKEA9OfOG",
    "https://youtube.com/shorts/IMf7nY3vVhQ?si=5wl0yC3u55jHzMgK",
    "https://youtube.com/shorts/hA7wpKmzxCo?si=l22SXkym-SjLWJf2",
    "https://youtube.com/shorts/YysaAQ3HWXE?si=WT38-GWERJcBOKoa",
    "https://youtube.com/shorts/QDPNuWcAcOY?si=ZE5HAJSCLP6PsTYi",
    "https://youtube.com/shorts/KAq4LDWh-aw?si=SVndP7n21IECAZqy",
    "https://youtube.com/shorts/aUGAOk0N0yY?si=TDlzjSgHw4jpeJG2",
    "https://youtube.com/shorts/JiDBUIsSimo?si=DGF6Rmb9jmnHRTXI",
    "https://youtube.com/shorts/I3gxyPuVdAc?si=X1ZLLlXcmznJyOx_",
    "https://youtube.com/shorts/QslE2T1UWDs?si=aCptOPFzjbpVpNr6",
    "https://youtube.com/shorts/SpFwXYVpQRM?si=3au-uu2l3Qvl92yD",
    "https://youtube.com/shorts/9--d905NAb0?si=ZmQSgRFtVGc3aQhV",
    "https://youtube.com/shorts/RU_wOlU90iE?si=NpSU5htJ8xEcsPCT",
    "https://youtube.com/shorts/Mku_YMUcwx0?si=yAQsos2bew5B3k3P",
    "https://youtube.com/shorts/K2T-sjA7znw?si=_XKjvQkswvBR0z-B",
    "https://youtube.com/shorts/v5jPPd2RJlk?si=tZs-mO6CwHFZxX-C",
    "https://youtube.com/shorts/f0sjSqmhW6g?si=V3LNdzBe-2F8TEl4",
    "https://youtube.com/shorts/zsWFqMCb-0g?si=XCq3HvdMWSnFrSva",
    "https://youtube.com/shorts/06KJnrSGFko?si=hkiIA3ck4n9Jpg1i",
    "https://youtube.com/shorts/uU6_BYlYUN4?si=BzCYznhGiFpOmg5a",
    "https://youtube.com/shorts/AFdeQRw020k?si=1FXETMFAE6XyJEgy",
    "https://youtube.com/shorts/ciqLzMMg4Z8?si=qVQ-qInctL4EqsXx",
    "https://youtube.com/shorts/Yn2wYxY5vJ8?si=Uja10Qn2iMzfVbXC",
    "https://youtube.com/shorts/K51RqlPJOCE?si=tBrvmkfdvWvnnn3v",
    "https://youtube.com/shorts/LQt3LEzu73E?si=xtwLzqNjIbYlexNl",
    "https://youtube.com/shorts/JCxmaF43uGw?si=Ogl0sOyCz_QX5So9",
    "https://youtube.com/shorts/eSuFO_1zVyQ?si=FAREAamaHAQGAKav",
    "https://youtube.com/shorts/QScR-vUMCOI?si=26WF8vjyY_ZmoH2-",
    "https://youtube.com/shorts/1jZpWYf5Nxo?si=WmZtVmyVJH_RZVWL",
    "https://youtube.com/shorts/n3CyZmvxid4?si=yi2R8hQ2sSCzQ9qq",
    "https://youtube.com/shorts/GktHKJ0Acww?si=tUbYAMIzVSewjzpz",
    "https://youtube.com/shorts/BXqUiBrGA7E?si=Z398qVR9VRQUmMQ4",
    "https://youtube.com/shorts/vaJqBcwdklA?si=c85N3tyxNkfohbr8",
    "https://youtube.com/shorts/xAgzMrB-kLw?si=jRHtfHS1R4zQ5Zyd",
    "https://youtube.com/shorts/0e-QQlnFVKE?si=DaqX5s8c0IaZQi78",
    "https://youtube.com/shorts/O6maargYPuo?si=qeeVbq0BUh8QMAvJ",
    "https://youtube.com/shorts/sd_nVqfFyW8?si=tF85AyMl0tbSpj_3",
    "https://youtube.com/shorts/SuhaLvf3weE?si=bRx7fuIKoRYAaMcP",
    "https://youtube.com/shorts/Oq9zo-Da7oo?si=ANAxwZj44NxgbaCM",
    "https://www.youtube.com/shorts/lZsvWZcYZOc",
    "https://www.youtube.com/shorts/dOsb1wCVSeE",
    "https://www.youtube.com/shorts/kOV9cYOzlp0",
    "https://www.youtube.com/shorts/21CDnKGvXDM",
    "https://www.youtube.com/shorts/S811_4bAlDo",
    "https://www.youtube.com/shorts/HmBJMI370OY",
    "https://www.youtube.com/shorts/haoXhZ66pME",
    "https://www.youtube.com/shorts/ZZG6eyb3hWI",
    "https://www.youtube.com/shorts/bkkHmOo5uO8",
    "https://www.youtube.com/shorts/6rv9nQ5G9Q8",
    "https://www.youtube.com/shorts/vqpqjrcoP4U",
    "https://www.youtube.com/shorts/v9OIveyjsOY",
    "https://www.youtube.com/shorts/N_jxh3u9A_A",
    "https://www.youtube.com/shorts/iQZ_LzPOsHk",
    "https://www.youtube.com/shorts/tGR_Pew1mMY",
    "https://www.youtube.com/shorts/B7M4J8BTL98",
    "https://www.youtube.com/shorts/7srXpCI-zE8",
    "https://www.youtube.com/shorts/Qf2uKGdzsAU",
    "https://www.youtube.com/shorts/vKzdtF89GQI",
    "https://www.youtube.com/shorts/7Ll1MJbBCYg",
    "https://www.youtube.com/shorts/ce8S5Mpy4VU",
    "https://www.youtube.com/shorts/C7Y1v0NcAok",
    "https://www.youtube.com/shorts/jqh0i5zphgI",
    "https://www.youtube.com/shorts/8hCBEq1zk4Q",
    "https://www.youtube.com/shorts/qjtBOE_ehec",
    "https://www.youtube.com/shorts/Dz6bE7RSWt0",
    "https://www.youtube.com/shorts/CjxhzCA0rN4",
    "https://www.youtube.com/shorts/Eg-GjC8vAxg",
    "https://www.youtube.com/shorts/V04T6e14kIs",
    "https://www.youtube.com/shorts/wspjV112V2U",
    "https://www.youtube.com/shorts/dqBVrLeyWPc",
    "https://www.youtube.com/shorts/n_ReNGyxPBQ",
    "https://www.youtube.com/shorts/dsglunzxEwY",
    "https://www.youtube.com/shorts/UURv-nFOYwU",
    "https://www.youtube.com/shorts/gXxcOFIMUAA",
    "https://www.youtube.com/shorts/DiwuSMmvJYw",
    "https://www.youtube.com/shorts/Ob2qN28CNIc",
    "https://www.youtube.com/shorts/eHoVdsK8nhQ",
    "https://www.youtube.com/shorts/_3fpWc-cOmM",
    "https://www.youtube.com/shorts/E3BcOFHWs1U",
    "https://www.youtube.com/shorts/dufT3ttzuTI",
    "https://www.youtube.com/shorts/E2ceP37zfUw",
    "https://www.youtube.com/shorts/fCiF-xXHUJY",
    "https://www.youtube.com/shorts/YW6ABh6lEb8",
    "https://www.youtube.com/shorts/kQV8QEoKP2U",
    "https://www.youtube.com/shorts/_I0Zak2WFPc",
    "https://www.youtube.com/shorts/DHDKedeGycI",
    "https://www.youtube.com/shorts/lap7LLGzV8U",
    "https://www.youtube.com/shorts/4Fv2YJOzUmA",
    "https://www.youtube.com/shorts/2JctTrZ5u78",
    "https://www.youtube.com/shorts/I_HM7cn0HwY",
    "https://www.youtube.com/shorts/oFcdDg7g3wQ",
    "https://www.youtube.com/shorts/Fw3-mQzyjjw",
    "https://www.youtube.com/shorts/nyNoFHKLKk8",
    "https://www.youtube.com/shorts/wfdzn7hiBqw",
];

const watchedIds = new Set();
const writeQueues = new Map();
const writeVersions = new Map();
const addedAtById = new Map();
let watchedDatabase;
const statsApi = "https://yt.chocolatemoo53.com/api/v1";
const holdDuration = 5000;

const status = document.createElement("p");
status.setAttribute("role", "status");
status.setAttribute("aria-live", "polite");
status.hidden = true;
document.body.prepend(status);

function openWatchedDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("shorts-watchlist", 2);
        request.onupgradeneeded = () => {
            const database = request.result;
            if (!database.objectStoreNames.contains("watched")) {
                database.createObjectStore("watched", { keyPath: "id" });
            }
            if (!database.objectStoreNames.contains("videos")) {
                database.createObjectStore("videos", { keyPath: "id" });
            }
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error("Could not open IndexedDB."));
    });
}

function recordAddedDates() {
    return new Promise((resolve, reject) => {
        const transaction = watchedDatabase.transaction("videos", "readwrite");
        const store = transaction.objectStore("videos");
        const request = store.getAll();

        request.onsuccess = () => {
            for (const record of request.result) {
                addedAtById.set(record.id, record.addedAt);
            }
            for (const id of renderedIds) {
                if (!addedAtById.has(id)) {
                    const addedAt = Date.now();
                    addedAtById.set(id, addedAt);
                    store.add({ id, addedAt });
                }
            }
        };
        request.onerror = () => reject(request.error || new Error("Could not read video dates."));
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error || new Error("Could not save video dates."));
        transaction.onabort = () => reject(transaction.error || new Error("Could not save video dates."));
    });
}

function loadWatchedIds() {
    return new Promise((resolve, reject) => {
        const transaction = watchedDatabase.transaction("watched", "readonly");
        const request = transaction.objectStore("watched").getAll();
        request.onsuccess = () => resolve(request.result.map(record => record.id));
        request.onerror = () => reject(request.error || new Error("Could not read watched states."));
        transaction.onabort = () => reject(transaction.error || new Error("Could not read watched states."));
    });
}

function writeWatchedState(id, isWatched) {
    return new Promise((resolve, reject) => {
        const transaction = watchedDatabase.transaction("watched", "readwrite");
        const store = transaction.objectStore("watched");
        if (isWatched) {
            store.put({ id });
        } else {
            store.delete(id);
        }
        transaction.oncomplete = resolve;
        transaction.onerror = () => reject(transaction.error || new Error("Could not save watched state."));
        transaction.onabort = () => reject(transaction.error || new Error("Could not save watched state."));
    });
}

function queueWatchedState(id, isWatched) {
    const previousWrite = writeQueues.get(id) || Promise.resolve();
    const write = previousWrite.catch(() => {}).then(() => writeWatchedState(id, isWatched));
    writeQueues.set(id, write);
    write.finally(() => {
        if (writeQueues.get(id) === write) writeQueues.delete(id);
    }).catch(() => {});
    return write;
}

async function fetchStats(endpoint) {
    const response = await fetch(`${statsApi}/${endpoint}`);
    if (!response.ok) throw new Error(`Request failed (${response.status}).`);
    return response.json();
}

function formatNumber(value) {
    return Number.isFinite(value) ? new Intl.NumberFormat().format(value) : "Unavailable";
}

function formatDate(value) {
    return value ? new Date(value).toLocaleString() : "Unavailable";
}

function addInfoRow(list, label, value) {
    const term = document.createElement("dt");
    term.textContent = label;
    const detail = document.createElement("dd");
    detail.textContent = value;
    list.append(term, detail);
}

function showVideoInfo(id, panel, details) {
    const requestVersion = Number(panel.dataset.requestVersion || 0) + 1;
    panel.dataset.requestVersion = requestVersion;
    details.replaceChildren();
    addInfoRow(details, "Added to list", formatDate(addedAtById.get(id)));
    addInfoRow(details, "Stats", "Loading…");
    panel.hidden = false;

    Promise.allSettled([
        fetchStats(`videos/${encodeURIComponent(id)}`),
        fetchStats(`comments/${encodeURIComponent(id)}`)
    ]).then(([videoResult, commentsResult]) => {
        if (panel.hidden || Number(panel.dataset.requestVersion) !== requestVersion) return;
        details.replaceChildren();
        addInfoRow(details, "Added to list", formatDate(addedAtById.get(id)));
        if (videoResult.status === "fulfilled") {
            addInfoRow(details, "Posted", formatDate(videoResult.value.published * 1000));
            addInfoRow(details, "Views", formatNumber(videoResult.value.viewCount));
            addInfoRow(details, "Likes", formatNumber(videoResult.value.likeCount));
        } else {
            addInfoRow(details, "Posted / views / likes", "Unavailable right now");
            console.error(`Could not load video details for ${id}:`, videoResult.reason);
        }
        if (commentsResult.status === "fulfilled") {
            addInfoRow(details, "Comments", formatNumber(commentsResult.value.commentCount));
        } else {
            addInfoRow(details, "Comments", "Unavailable right now");
            console.error(`Could not load comment count for ${id}:`, commentsResult.reason);
        }
    });
}

const fragment = document.createDocumentFragment();
const renderedIds = new Set();

for (const link of shortLinks) {
    const id = link.split("/shorts/")[1]?.split(/[?#]/)[0];
    if (!id || renderedIds.has(id)) continue;
    renderedIds.add(id);

    const card = document.createElement("div");
    card.className = "short-card";

    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    const image = document.createElement("img");
    image.alt = "YouTube Short thumbnail";
    const thumbnailQualities = ["maxresdefault", "sddefault", "hqdefault"];
    let qualityIndex = 0;
    image.src = `https://img.youtube.com/vi/${id}/${thumbnailQualities[qualityIndex]}.jpg`;
    image.addEventListener("error", () => {
        qualityIndex += 1;
        if (qualityIndex < thumbnailQualities.length) {
            image.src = `https://img.youtube.com/vi/${id}/${thumbnailQualities[qualityIndex]}.jpg`;
        }
    });
    anchor.append(image);

    const infoPanel = document.createElement("aside");
    infoPanel.className = "short-info";
    infoPanel.setAttribute("aria-label", "Video information");
    infoPanel.hidden = true;
    const infoTitle = document.createElement("strong");
    infoTitle.textContent = "Video information";
    const infoDetails = document.createElement("dl");
    const closeInfo = document.createElement("button");
    closeInfo.type = "button";
    closeInfo.className = "short-info-close";
    closeInfo.textContent = "Close";
    closeInfo.addEventListener("click", () => {
        infoPanel.hidden = true;
        infoPanel.dataset.requestVersion = String(Number(infoPanel.dataset.requestVersion || 0) + 1);
    });
    infoPanel.append(infoTitle, closeInfo, infoDetails);

    let holdTimer;
    let activePointerId;
    let startX;
    let startY;
    let holdTriggered = false;

    function stopHold() {
        clearTimeout(holdTimer);
        card.classList.remove("is-shaking");
        activePointerId = undefined;
    }

    anchor.addEventListener("pointerdown", event => {
        if (event.pointerType === "mouse" && event.button !== 0 && event.button !== 2) return;
        stopHold();
        activePointerId = event.pointerId;
        startX = event.clientX;
        startY = event.clientY;
        holdTriggered = false;
        card.classList.add("is-shaking");
        holdTimer = setTimeout(() => {
            holdTriggered = true;
            card.classList.remove("is-shaking");
            showVideoInfo(id, infoPanel, infoDetails);
        }, holdDuration);
    });

    document.addEventListener("pointermove", event => {
        if (event.pointerId !== activePointerId) return;
        if (Math.hypot(event.clientX - startX, event.clientY - startY) > 12) stopHold();
    });
    document.addEventListener("pointerup", event => {
        if (event.pointerId === activePointerId) stopHold();
    });
    document.addEventListener("pointercancel", event => {
        if (event.pointerId === activePointerId) stopHold();
    });
    anchor.addEventListener("contextmenu", event => event.preventDefault());
    anchor.addEventListener("click", event => {
        if (holdTriggered) {
            event.preventDefault();
            event.stopPropagation();
            holdTriggered = false;
        }
    });

    const label = document.createElement("label");
    label.setAttribute("aria-label", "Mark Short as watched");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.videoId = id;
    checkbox.checked = watchedIds.has(id);
    checkbox.disabled = !watchedDatabase;
    checkbox.addEventListener("change", () => {
        const wasWatched = !checkbox.checked;
        const isWatched = checkbox.checked;
        const version = (writeVersions.get(id) || 0) + 1;
        writeVersions.set(id, version);

        if (isWatched) {
            watchedIds.add(id);
        } else {
            watchedIds.delete(id);
        }
        queueWatchedState(id, isWatched).then(() => {
            if (writeVersions.get(id) === version) {
                status.textContent = "";
                status.hidden = true;
            }
        }).catch(error => {
            if (writeVersions.get(id) === version) {
                checkbox.checked = wasWatched;
                if (wasWatched) {
                    watchedIds.add(id);
                } else {
                    watchedIds.delete(id);
                }
                status.textContent = `Could not save watched state: ${error.message}`;
                status.hidden = false;
            }
        });
    });

    label.append(checkbox);
    card.append(anchor, label, infoPanel);
    fragment.append(card);
}

document.body.append(fragment);

openWatchedDatabase().then(database => {
    watchedDatabase = database;
    return Promise.all([loadWatchedIds(), recordAddedDates()]);
}).then(([ids]) => {
    ids.forEach(id => watchedIds.add(id));
    document.querySelectorAll(".short-card input[type=checkbox]").forEach(checkbox => {
        checkbox.disabled = false;
        checkbox.checked = watchedIds.has(checkbox.dataset.videoId);
    });
}).catch(error => {
    status.textContent = `IndexedDB is unavailable; watched states cannot be loaded or saved: ${error.message}`;
    status.hidden = false;
});
