// Add these Shorts without changing the existing curated list in sceript.js.
const addedShorts = [
    {
        url: "https://youtube.com/shorts/ydUBm-0GaJs?si=wl3JTlSchHhmEAqL",
        id: "ydUBm-0GaJs"
    },
    {
        url: "https://youtube.com/shorts/PS5Hsd1ZXiU?si=a1JKcYKc5cE64kyi",
        id: "PS5Hsd1ZXiU"
    }
];

function createAddedShortCard({ url, id }) {
    const card = document.createElement("div");
    card.className = "short-card";

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";

    const image = document.createElement("img");
    image.alt = "YouTube Short thumbnail";
    const thumbnailQualities = ["maxresdefault", "sddefault", "hqdefault"];
    let thumbnailQualityIndex = 0;
    image.src = `https://img.youtube.com/vi/${id}/${thumbnailQualities[thumbnailQualityIndex]}.jpg`;
    image.addEventListener("error", () => {
        thumbnailQualityIndex += 1;
        if (thumbnailQualityIndex < thumbnailQualities.length) {
            image.src = `https://img.youtube.com/vi/${id}/${thumbnailQualities[thumbnailQualityIndex]}.jpg`;
        }
    });
    anchor.append(image);

    const label = document.createElement("label");
    label.setAttribute("aria-label", "Mark Short as watched");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.videoId = id;
    checkbox.disabled = true;
    label.append(checkbox);

    card.append(anchor, label);
    document.body.append(card);

    const watchedDbRequest = indexedDB.open("shorts-watchlist", 2);
    watchedDbRequest.onsuccess = () => {
        const database = watchedDbRequest.result;
        if (!database.objectStoreNames.contains("watched")) return;

        const readRequest = database.transaction("watched", "readonly").objectStore("watched").get(id);
        readRequest.onsuccess = () => {
            checkbox.checked = Boolean(readRequest.result);
            checkbox.disabled = false;
        };

        checkbox.addEventListener("change", () => {
            const transaction = database.transaction("watched", "readwrite");
            const store = transaction.objectStore("watched");
            if (checkbox.checked) {
                store.put({ id });
            } else {
                store.delete(id);
            }
            transaction.onerror = () => {
                checkbox.checked = !checkbox.checked;
            };
        });
    };
    watchedDbRequest.onerror = () => {
        checkbox.disabled = true;
    };
}

addedShorts.forEach(createAddedShortCard);
