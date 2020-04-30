export default {
    inputs: [
        { property: "name", "@type": "Text", required: true, multiple: false },
        { property: "alternativeHeadline", "@type": "Text", multiple: false },
        { property: "alternateName", "@type": "Text", multiple: false },
        { property: "identifier", "@type": ["PropertyValue"] },
        { property: "description", "@type": "TextArea", multiple: false },
        { property: "keywords", "@type": "Text", multiple: false },
        { property: "license", "@type": "CreativeWork", multiple: false },
        { property: "dateCreated", "@type": "Date", multiple: false },
        { property: "dateModified", "@type": "Date", multiple: false },
        { property: "datePublished", "@type": "Date", multiple: false },
        { property: "issn", "@type": "Text", multiple: false },
        { property: "maintainer", "@type": ["Organization", "Person"] },
        { property: "author", "@type": ["Organization", "Person"] },
        { property: "creator", "@type": ["Organization", "Person"] },
        { property: "editor", "@type": "Person" },
        { property: "publisher", "@type": ["Organization", "Person"] },
        { property: "funder", "@type": ["Organization", "Person"] },
        { property: "copyrightHolder", "@type": ["Organization", "Person"] },
        { property: "copyrightYear", "@type": "Date" },
        { property: "hasPart", "@type": ["Dataset", "File"] },
        { property: "isPartOf", "@type": "CreativeWork" },
        { property: "distribution", "@type": "DataDownload" },
        { property: "contentLocation", "@type": "Place" },
        { property: "locationCreated", "@type": "Place" },
    ],
};
