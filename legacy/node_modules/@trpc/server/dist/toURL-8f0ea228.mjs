function toURL(urlOrPathname) {
    const url = urlOrPathname.startsWith('/') ? `http://127.0.0.1${urlOrPathname}` : urlOrPathname;
    return new URL(url);
}

export { toURL as t };
