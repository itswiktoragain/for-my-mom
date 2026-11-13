// Add this Short without changing the existing curated list in sceript.js.
const addedShortUrl = "https://youtube.com/shorts/ydUBm-0GaJs?si=wl3JTlSchHhmEAqL";
const addedShortId = "ydUBm-0GaJs";

const addedShortCard = document.createElement("div");
addedShortCard.className = "short-card";

const addedShortAnchor = document.createElement("a");
addedShortAnchor.href = addedShortUrl;
addedShortAnchor.target = "_blank";
addedShortAnchor.rel = "noopener noreferrer";

const addedShortImage = document.createElement("img");
addedShortImage.alt = "YouTube Short thumbnail";
const thumbnailQualities = ["maxresdefault", "sddefault", "hqdefault"];
let thumbnailQualityIndex = 0;
addedShortImage.src = `https://img.youtube.com/vi/${addedShortId}/${thumbnailQualities[thumbnailQualityIndex]}.jpg`;
addedShortImage.addEventListener("error", () => {
    thumbnailQualityIndex += 1;
    if (thumbnailQualityIndex < thumbnailQualities.length) {
        addedShortImage.src = `https://img.youtube.com/vi/${addedShortId}/${thumbnailQualities[thumbnailQualityIndex]}.jpg`;
    }
});
addedShortAnchor.append(addedShortImage);

const addedShortLabel = document.createElement("label");
addedShortLabel.setAttribute("aria-label", "Mark Short as watched");
const addedShortCheckbox = document.createElement("input");
addedShortCheckbox.type = "checkbox";
addedShortCheckbox.dataset.videoId = addedShortId;
addedShortCheckbox.disabled = true;
addedShortLabel.append(addedShortCheckbox);

addedShortCard.append(addedShortAnchor, addedShortLabel);
document.body.append(addedShortCard);

const watchedDbRequest = indexedDB.open("shorts-watchlist", 2);
watchedDbRequest.onsuccess = () => {
    const database = watchedDbRequest.result;
    if (!database.objectStoreNames.contains("watched")) return;

    const readTransaction = database.transaction("watched", "readonly");
    const readRequest = readTransaction.objectStore("watched").get(addedShortId);
    readRequest.onsuccess = () => {
        addedShortCheckbox.checked = Boolean(readRequest.result);
        addedShortCheckbox.disabled = false;
    };

    addedShortCheckbox.addEventListener("change", () => {
        const transaction = database.transaction("watched", "readwrite");
        const store = transaction.objectStore("watched");
        if (addedShortCheckbox.checked) {
            store.put({ id: addedShortId });
        } else {
            store.delete(addedShortId);
        }
        transaction.onerror = () => {
            addedShortCheckbox.checked = !addedShortCheckbox.checked;
        };
    });
};
watchedDbRequest.onerror = () => {
    // The video remains available even if watched-state storage is unavailable.
    addedShortCheckbox.disabled = true;
};
