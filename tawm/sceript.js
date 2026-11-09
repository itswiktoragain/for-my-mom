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
];

const watchedKey = "shorts-watched";
const watchedIds = new Set(JSON.parse(localStorage.getItem(watchedKey) || "[]"));

function getVideoId(link) {
    let url;
    try {
        url = new URL(link);
    } catch {
        console.warn("Skipping invalid YouTube link:", link);
        return null;
    }

    const host = url.hostname.toLowerCase();
    const path = url.pathname.split("/").filter(Boolean);
    let id = null;

    if (host === "youtu.be") {
        id = path[0];
    } else if (host === "youtube.com" || host.endsWith(".youtube.com")) {
        if (path[0] === "shorts" || path[0] === "embed") {
            id = path[1];
        } else if (url.pathname === "/watch") {
            id = url.searchParams.get("v");
        }
    }

    if (!id || !/^[\w-]{11}$/.test(id)) {
        console.warn("Skipping YouTube link with an invalid video ID:", link);
        return null;
    }
    return id;
}

function saveWatchedIds() {
    localStorage.setItem(watchedKey, JSON.stringify([...watchedIds]));
}

const fragment = document.createDocumentFragment();
const renderedIds = new Set();

for (const link of shortLinks) {
    const id = getVideoId(link);
    if (!id || renderedIds.has(id)) continue;
    renderedIds.add(id);

    const card = document.createElement("div");
    card.className = "short-card";

    const anchor = document.createElement("a");
    anchor.href = `https://www.youtube.com/shorts/${id}`;
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

    const label = document.createElement("label");
    label.setAttribute("aria-label", "Mark Short as watched");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = watchedIds.has(id);
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            watchedIds.add(id);
        } else {
            watchedIds.delete(id);
        }
        saveWatchedIds();
    });

    label.append(checkbox);
    card.append(anchor, label);
    fragment.append(card);
}

document.body.append(fragment);
