export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#0366d6",
    SUPPORTED_DEVICES: [
        {
            name: "Teracube 2e",
            model: "yk673v6_lwg62_64",
        },
    ],
    RELEASE_VARIANTS: {
        UNOFFICIAL: {
            description: "Unofficial builds.",
            suffix: "UNOFFICIAL",
        },
    },
};
