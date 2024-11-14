// Po załadowaniu popupu wczytujemy zapisany czas przypomnienia
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('reminderTime', (data) => {
        if (data.reminderTime) {
            document.getElementById("reminderTime").value = data.reminderTime;
        }
    });
});

// Ustawienie czasu przypomnienia
document.getElementById("setReminder").addEventListener("click", () => {
    const time = parseInt(document.getElementById("reminderTime").value, 10);
    if (time > 0) {
        chrome.storage.local.set({ reminderTime: time });
        chrome.runtime.sendMessage({ action: "setReminder", time: time });
    }
});

// Drzemka na 5 minut
document.getElementById("snoozeButton").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "snooze" });
});
