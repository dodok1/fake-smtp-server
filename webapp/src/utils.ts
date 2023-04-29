interface BasePath {
    path?: string
}

let basePath: BasePath

export function getBasePath() {
    if (basePath === undefined) {
        const path = resolveBasePath()
        basePath = {path: path}
    }
    return basePath.path
}

function resolveBasePath() {
    const path = window.location.pathname;
    if (path) {
        return path.substring(0, path.lastIndexOf("/"));
    }
    return undefined
}