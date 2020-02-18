export const getProjects = () => {
    const url = 'https://fridarosengren.com/portf/wp-json/wp/v2/posts';
    fetch(url).then(res => res.json()).then(
        res => {
            return res;
        },
        err => {
            return err;
        }
    )
}

export const getAboutPage = () => {
    const url = 'https://fridarosengren.com/portf/wp-json/wp/v2/pages/7';
    fetch(url).then(res => res.json()).then(
        res => {
            return res;
        },
        err => {
            return err;
        }
    )
}

export const getOnePage = pageId => {
    const url = `https://fridarosengren.com/portf/wp-json/wp/v2/posts/${pageId}`
    fetch(url).then(res => res.json()).then(
        res => {
            return res;
        },
        err => {
            return err;
        }
    )
}

