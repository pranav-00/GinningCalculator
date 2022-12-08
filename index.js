if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("Sw registerd");
        console.log(registration);
    }).catch(e => {
        console.log(e);
    })
} 