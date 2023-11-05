const reactElement = {
    props: {
        href: 'www.github.com',
        target: 'blank'
    },
    children: 'Hi visit this link to check git repo',
    type: 'a'
}

const customRender = (reactElement, container) => {
    if (container && reactElement) {
        const ele = document.createElement(reactElement.type);
        let propKeys = Object.keys(reactElement.props);
        for (let i = 0; i < propKeys.length; i++) {
            ele.setAttribute(propKeys[i], reactElement.props[propKeys[i]]);
        }
        ele.innerHTML = reactElement.children;
        container.appendChild(ele);
    }
}

setTimeout(() => {
    const container = document.querySelector('#root');
    customRender(reactElement, container);
}, 5000);