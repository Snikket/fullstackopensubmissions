sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://template.cy
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
