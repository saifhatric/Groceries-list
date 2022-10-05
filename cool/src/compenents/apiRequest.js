const apiRequest = async (url = "", optionsObjec = null, errMsg = null) => {
    try {
        const res = await fetch(url, optionsObjec);
        if (!res.ok) throw Error("Please reload the app")

    } catch (err) {
        errMsg = err.message
    } finally {
        return errMsg;
    }
}

export default apiRequest;