(()=>{
    function replaceYTLink(){
        const el = document.querySelector("input.yt-copy-link-renderer");
        if(!el) return false;
        const url = new URL(el.value);
        const searchParams = new URLSearchParams(url.search);
        if(!searchParams.has("si")) return false;
        searchParams.delete("si");
        url.search = searchParams;
        el.value = url + "";
        return true;
    }

    function loop(){
        replaceYTLink();

        setTimeout(()=>requestIdleCallback(loop), 500);
    }

    requestIdleCallback(loop);
})()