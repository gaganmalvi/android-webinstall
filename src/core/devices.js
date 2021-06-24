const DEVICE_NAMES = {
    yk673v6_lwg62_64: "Teracube 2e",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
