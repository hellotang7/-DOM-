window.dom = {
    create (string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim(); //trim()去除字符串两边的空格
        return container.content.firstChild;
    },
    after (node, node2) {
        node.parentNode.inserBefore(node2, node.nextSibling);
    },
    before (node, node2) {
        node.parentNode.inserBefore(node2, node);
    },
    append (parent, node) {
        parent.appendChlid(node);
    },
    wrap (node, parent) {
        dom.before(node, parent) //先在node前面创建一个父亲节点
        ;
        dom.append(parent, node) //在把node插进父亲节点
        ;
    }
};

//# sourceMappingURL=index.755bdb92.js.map
