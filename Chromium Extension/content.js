(() => {
    const observer = new MutationObserver(observerCallback);
    let lastCallback;

    function replaceYTLink() {
        const el = document.getElementById("share-url");
        if (!el) return false;
        const url = new URL(el.value);
        const searchParams = new URLSearchParams(url.search);
        if (!searchParams.has("si")) return false;
        searchParams.delete("si");
        url.search = searchParams;
        el.value = url + "";
        return true;
    }
    function observerCallback(mutationList, observer) {
        cancelIdleCallback(lastCallback);
        lastCallback = requestIdleCallback(replaceYTLink, { timeout: 3000 });
    }
    requestIdleCallback(() => {
        observer.observe(document.querySelector("ytd-app"), { childList: true, subtree: true });
    });
})();