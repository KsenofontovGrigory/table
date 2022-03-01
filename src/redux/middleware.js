export function forbiddenWordsMiddleware () {
    return function (next) {
        return function (action) {
            return next(action)
        }
    }
}
