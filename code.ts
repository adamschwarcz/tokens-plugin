// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
interface Style {
    originalStyleName: string;
    newStyleName: string;
    id: string;
}

const styles: Style[] = [
    {
        originalStyleName: "light-mode/primary/lightest",
        newStyleName: "base/primary/100",
        id: ""
    },
    {
        originalStyleName: "light-mode/primary/lighter",
        newStyleName: "base/primary/400",
        id: ""
    },
    {
        originalStyleName: "light-mode/primary/default",
        newStyleName: "base/primary/500",
        id: ""
    },
    {
        originalStyleName: "light-mode/primary/darker",
        newStyleName: "base/primary/800",
        id: ""
    },
    {
        originalStyleName: "light-mode/primary/darkest",
        newStyleName: "base/primary/900",
        id: ""
    },

    {
        originalStyleName: "light-mode/secondary/lightest",
        newStyleName: "base/secondary/100",
        id: ""
    },
    {
        originalStyleName: "light-mode/secondary/lighter",
        newStyleName: "base/secondary/400",
        id: ""
    },
    {
        originalStyleName: "light-mode/secondary/default",
        newStyleName: "base/secondary/500",
        id: ""
    },
    {
        originalStyleName: "light-mode/secondary/darker",
        newStyleName: "base/secondary/800",
        id: ""
    },
    {
        originalStyleName: "light-mode/secondary/darkest",
        newStyleName: "base/secondary/900",
        id: ""
    },

    {
        originalStyleName: "light-mode/accent/lightest",
        newStyleName: "base/accent/100",
        id: ""
    },
    {
        originalStyleName: "light-mode/accent/lighter",
        newStyleName: "base/accent/400",
        id: ""
    },
    {
        originalStyleName: "light-mode/accent/default",
        newStyleName: "base/accent/500",
        id: ""
    },
    {
        originalStyleName: "light-mode/accent/darker",
        newStyleName: "base/accent/800",
        id: ""
    },
    {
        originalStyleName: "light-mode/accent/darkest",
        newStyleName: "base/accent/900",
        id: ""
    }
];

// This shows the HTML page in "ui.html".
figma.showUI(__html__);
const fetchedStyles = figma.getLocalPaintStyles();

function assignStyleID() {
    styles.map(function (style) {
        let result = fetchedStyles.find(
            (item) => item.name === style.originalStyleName
        );
        style.id = result?.id;
        return style;
    });
}

function renameStyles() {
    styles.map(function (style) {
        let figmaStyle = figma.getStyleById(style.id);
        console.log(figmaStyle);
        figmaStyle != undefined ? (figmaStyle.name = style.newStyleName) : null;
    });
}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === "find-styles") {
        assignStyleID();
        renameStyles();
    }
};
