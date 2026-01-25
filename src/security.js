
export function sanitizeHTML(html) {
    if (!html) return "";

    // Use DOMParser to safely parse and sanitize HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Remove dangerous tags
    const dangerousTags = ['script', 'iframe', 'object', 'embed', 'link', 'style', 'base', 'form', 'meta'];

    dangerousTags.forEach(tag => {
        const elements = doc.querySelectorAll(tag);
        elements.forEach(el => el.remove());
    });

    // Remove inline event handlers and dangerous protocols
    const all = doc.querySelectorAll('*');
    all.forEach(el => {
        Array.from(el.attributes).forEach(attr => {
            // Remove event handlers (onclick, onmouseover, etc.)
            if (attr.name.startsWith('on')) {
                el.removeAttribute(attr.name);
            }
            // Remove javascript: URIs
            if ((attr.name === 'href' || attr.name === 'src') && attr.value.trim().toLowerCase().startsWith('javascript:')) {
                el.removeAttribute(attr.name);
            }
        });
    });

    return doc.body.innerHTML;
}

export function escapeHTML(str) {
    if (str === null || str === undefined) return "";
    const stringVal = String(str);
    return stringVal
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function verifyDevPin(pin) {
    // Basic obfuscation to prevent plain text password in source
    // Prevents casual 'View Source' discovery
    return btoa(pin) === 'MDAwMA==';
}
