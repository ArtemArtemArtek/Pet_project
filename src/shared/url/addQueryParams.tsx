export function getQueryParams(params: Record<string, string>) {
    const serchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        serchParams.set(name, value);
    });
    return `?${serchParams.toString()}`;
}

export function addQueryParams(params: Record<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
