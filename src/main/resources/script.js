document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("action-btn");
    const statusMessage = document.getElementById("status-message");

    if (!button || !statusMessage) {
        return;
    }

    button.addEventListener("click", () => {
        const timestamp = new Date().toLocaleTimeString();
        statusMessage.textContent = `Frontend script active at ${timestamp}. Ready to connect to a servlet or REST endpoint.`;
    });
});